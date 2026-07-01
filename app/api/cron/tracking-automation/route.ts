import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

type HighIntentVisitor = {
  anonymous_id: string
  session_id: string
  page_path: string | null
  product_slug: string | null
  visitor_segment: string | null
  intent_score: number | null
  friction_score: number | null
  engagement_score: number | null
}

type FrictionPoint = {
  page_path: string | null
  event_name: string
  label: string | null
  field: string | null
  events: number
  visitors: number
}

type ProductAffinity = {
  product_or_page: string
  visitors: number
  pageviews: number
  cart_adds: number
  checkout_starts: number
  avg_intent_score: number | null
  avg_friction_score: number | null
}

type RemarketingSegment = {
  anonymous_id: string
  last_seen_at: string
  max_intent_score: number | null
  max_friction_score: number | null
  added_to_cart: boolean
  started_checkout: boolean
  purchased: boolean
  product_slugs: string[] | null
  latest_segment: string | null
}

type AutomationAction = {
  action_key: string
  action_type: string
  priority: number
  anonymous_id?: string | null
  session_id?: string | null
  page_path?: string | null
  product_slug?: string | null
  title: string
  recommendation: string
  evidence: Record<string, unknown>
  due_at?: string
}

function supabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

function actionDay() {
  return new Date().toISOString().slice(0, 10)
}

function productFromPath(pathOrSlug: string | null | undefined) {
  if (!pathOrSlug) return null
  if (pathOrSlug.startsWith('/products/')) return pathOrSlug.split('/')[2] || null
  return pathOrSlug
}

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function buildActionEmail(actions: AutomationAction[]) {
  const grouped = actions.reduce<Record<string, AutomationAction[]>>((acc, action) => {
    acc[action.action_type] = acc[action.action_type] ?? []
    acc[action.action_type].push(action)
    return acc
  }, {})

  return `
    <!DOCTYPE html>
    <html lang="nl">
    <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
    <body style="margin:0;padding:0;background:#FAF8F5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1A1A1A;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF8F5;padding:34px 18px;">
        <tr><td align="center">
          <table width="640" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;background:#fff;border:1px solid #E8E4DF;border-radius:18px;overflow:hidden;">
            <tr><td style="background:#0F0E0C;padding:30px 34px;">
              <p style="margin:0;font-size:26px;font-weight:700;letter-spacing:.1em;color:#FAF8F5;font-family:Georgia,serif;">MAUYI</p>
              <p style="margin:8px 0 0;font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#C9A96E;font-weight:800;">Tracking Automation Actions</p>
            </td></tr>
            <tr><td style="padding:30px 34px;">
              <p style="margin:0 0 20px;font-size:14px;color:#5C5754;line-height:1.65;">
                Er zijn automatisch ${actions.length} actie${actions.length === 1 ? '' : 's'} aangemaakt uit trackingdata.
              </p>
              ${Object.entries(grouped).map(([type, items]) => `
                <section style="margin-top:26px;">
                  <p style="margin:0 0 12px;font-size:10px;text-transform:uppercase;letter-spacing:.16em;color:#C9A96E;font-weight:800;">${escapeHtml(type)} · ${items.length}</p>
                  ${items.slice(0, 8).map((action) => `
                    <div style="padding:12px 0;border-bottom:1px solid #F0EDE9;">
                      <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#1A1A1A;">P${action.priority} · ${escapeHtml(action.title)}</p>
                      <p style="margin:0 0 5px;font-size:13px;color:#5C5754;line-height:1.55;">${escapeHtml(action.recommendation)}</p>
                      <p style="margin:0;font-size:11px;color:#9A9590;">${escapeHtml(action.page_path ?? action.product_slug ?? action.anonymous_id ?? '-')}</p>
                    </div>
                  `).join('')}
                </section>
              `).join('')}
              <p style="margin:28px 0 0;font-size:12px;color:#9A9590;line-height:1.6;">
                Open in Supabase: <code>tracking_open_automation_actions</code>.
              </p>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `
}

async function upsertActions(actions: AutomationAction[]) {
  if (!actions.length) return { inserted: 0 }
  const db = supabase()
  const rows = actions.map((action) => ({
    action_key: action.action_key,
    action_type: action.action_type,
    priority: action.priority,
    status: 'open',
    anonymous_id: action.anonymous_id ?? null,
    session_id: action.session_id ?? null,
    page_path: action.page_path ?? null,
    product_slug: action.product_slug ?? null,
    title: action.title,
    recommendation: action.recommendation,
    evidence: action.evidence,
    due_at: action.due_at ?? new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date().toISOString(),
  }))

  const { error } = await db
    .from('tracking_automation_actions')
    .upsert(rows, { onConflict: 'action_key', ignoreDuplicates: true })

  if (error) throw error
  return { inserted: rows.length }
}

export async function GET(req: NextRequest) {
  if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const db = supabase()
  const day = actionDay()
  const [
    highIntentRes,
    hotButStuckRes,
    frictionRes,
    productAffinityRes,
    remarketingRes,
  ] = await Promise.all([
    db.from('tracking_high_intent_visitors_24h').select('*').limit(75),
    db.from('tracking_hot_but_stuck_24h').select('*').limit(75),
    db.from('tracking_friction_points_7d').select('*').limit(75),
    db.from('tracking_product_affinity_7d').select('*').limit(75),
    db.from('tracking_remarketing_segments_7d').select('*').limit(100),
  ])

  const errors = [highIntentRes, hotButStuckRes, frictionRes, productAffinityRes, remarketingRes]
    .map((result) => result.error?.message)
    .filter(Boolean)

  if (errors.length) {
    console.error('[tracking-automation] Supabase view errors:', errors)
    return NextResponse.json({ error: 'View query failed', details: errors }, { status: 500 })
  }

  const highIntent = (highIntentRes.data ?? []) as HighIntentVisitor[]
  const hotButStuck = (hotButStuckRes.data ?? []) as HighIntentVisitor[]
  const frictionPoints = (frictionRes.data ?? []) as FrictionPoint[]
  const productAffinity = (productAffinityRes.data ?? []) as ProductAffinity[]
  const remarketing = (remarketingRes.data ?? []) as RemarketingSegment[]
  const actions: AutomationAction[] = []

  for (const visitor of remarketing) {
    const productSlug = visitor.product_slugs?.[0] ?? null
    if (visitor.started_checkout && !visitor.purchased) {
      actions.push({
        action_key: `checkout_retarget:${visitor.anonymous_id}:${day}`,
        action_type: 'checkout_retarget',
        priority: 1,
        anonymous_id: visitor.anonymous_id,
        product_slug: productSlug,
        title: 'Checkout gestart zonder aankoop',
        recommendation: 'Zet deze bezoeker in checkout-retargeting of recovery. Boodschap: vertrouwen, retour, gratis verzending en veilig betalen.',
        evidence: visitor as unknown as Record<string, unknown>,
      })
    } else if (visitor.added_to_cart && !visitor.purchased) {
      actions.push({
        action_key: `cart_recovery:${visitor.anonymous_id}:${day}`,
        action_type: 'cart_recovery',
        priority: 2,
        anonymous_id: visitor.anonymous_id,
        product_slug: productSlug,
        title: 'Cart-add zonder checkout',
        recommendation: 'Gebruik bij terugkomst een cart reminder of retarget met product-specifieke reassurance.',
        evidence: visitor as unknown as Record<string, unknown>,
      })
    } else if ((visitor.max_intent_score ?? 0) >= 55 && !visitor.purchased) {
      actions.push({
        action_key: `warm_nurture:${visitor.anonymous_id}:${day}`,
        action_type: 'warm_nurture',
        priority: 3,
        anonymous_id: visitor.anonymous_id,
        product_slug: productSlug,
        title: 'Warme oriënterende bezoeker',
        recommendation: 'Nurture met educatieve content of vergelijking: retinol zonder irritatie, gevoelige huid, routine uitleg.',
        evidence: visitor as unknown as Record<string, unknown>,
      })
    }
  }

  for (const visitor of hotButStuck.slice(0, 25)) {
    actions.push({
      action_key: `hot_but_stuck:${visitor.anonymous_id}:${day}`,
      action_type: 'ux_hot_but_stuck',
      priority: 1,
      anonymous_id: visitor.anonymous_id,
      session_id: visitor.session_id,
      page_path: visitor.page_path,
      product_slug: visitor.product_slug,
      title: 'Koopintentie met frictie',
      recommendation: 'Bekijk deze pagina/flow. Deze bezoeker wil waarschijnlijk door, maar loopt vast. Prioriteit voor UX-fix.',
      evidence: visitor as unknown as Record<string, unknown>,
    })
  }

  for (const visitor of highIntent.slice(0, 25)) {
    actions.push({
      action_key: `high_intent:${visitor.anonymous_id}:${day}`,
      action_type: 'high_intent_audience',
      priority: 2,
      anonymous_id: visitor.anonymous_id,
      session_id: visitor.session_id,
      page_path: visitor.page_path,
      product_slug: visitor.product_slug,
      title: 'High-intent bezoeker',
      recommendation: 'Voeg toe aan high-intent audience. Gebruik product-specifieke ads of bij terugkomst een directe CTA.',
      evidence: visitor as unknown as Record<string, unknown>,
    })
  }

  for (const point of frictionPoints.filter((point) => point.events >= 2).slice(0, 20)) {
    actions.push({
      action_key: `friction:${point.page_path ?? 'unknown'}:${point.event_name}:${point.label ?? point.field ?? 'unknown'}:${day}`,
      action_type: 'ux_friction_fix',
      priority: point.events >= 5 ? 1 : 2,
      page_path: point.page_path,
      title: `Frictie: ${point.label || point.field || point.event_name}`,
      recommendation: 'Controleer of dit element duidelijk klikbaar is, of het veld/CTA te veel twijfel veroorzaakt.',
      evidence: point as unknown as Record<string, unknown>,
    })
  }

  for (const product of productAffinity.filter((item) => item.checkout_starts > 0 || item.cart_adds > 0).slice(0, 15)) {
    const productSlug = productFromPath(product.product_or_page)
    actions.push({
      action_key: `product_optimization:${product.product_or_page}:${day}`,
      action_type: 'product_optimization',
      priority: product.checkout_starts > 0 ? 2 : 3,
      page_path: product.product_or_page.startsWith('/') ? product.product_or_page : null,
      product_slug: productSlug,
      title: `Optimaliseer ${product.product_or_page}`,
      recommendation: 'Er is koopintentie. Test trust proof, levering/retour copy en product-specifieke CTA rond add-to-cart.',
      evidence: product as unknown as Record<string, unknown>,
    })
  }

  const deduped = Array.from(new Map(actions.map((action) => [action.action_key, action])).values())
  await upsertActions(deduped)

  if (deduped.length > 0 && process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.TRACKING_REPORT_EMAIL ?? 'hallo@mauyi.nl',
      subject: `MAUYI automation: ${deduped.length} acties aangemaakt`,
      html: buildActionEmail(deduped),
    })
  }

  return NextResponse.json({
    ok: true,
    actions: deduped.length,
    byType: deduped.reduce<Record<string, number>>((acc, action) => {
      acc[action.action_type] = (acc[action.action_type] ?? 0) + 1
      return acc
    }, {}),
  })
}

