import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.mauyi.nl'

type HighIntentVisitor = {
  anonymous_id: string
  occurred_at: string
  page_path: string | null
  visitor_segment: string | null
  intent_score: number | null
  friction_score: number | null
  engagement_score: number | null
  max_scroll: number | null
  product_slug: string | null
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
  impressions: number
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

function supabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function formatDate(value: string | null | undefined) {
  if (!value) return '-'
  return new Intl.DateTimeFormat('nl-NL', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'Europe/Amsterdam',
  }).format(new Date(value))
}

function metric(label: string, value: number | string) {
  return `
    <td style="padding:14px 16px;background:#FAF8F5;border:1px solid #E8E4DF;border-radius:14px;">
      <p style="margin:0 0 4px;font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:#9A9590;font-weight:700;">${label}</p>
      <p style="margin:0;font-size:24px;line-height:1;color:#1A1A1A;font-weight:700;font-family:Georgia,serif;">${value}</p>
    </td>
  `
}

function rows<T>(items: T[], render: (item: T, index: number) => string, empty: string) {
  if (!items.length) {
    return `<p style="margin:0;font-size:13px;color:#9A9590;line-height:1.7;">${empty}</p>`
  }
  return items.map(render).join('')
}

function section(title: string, subtitle: string, body: string) {
  return `
    <section style="margin-top:32px;">
      <p style="margin:0 0 6px;font-size:10px;text-transform:uppercase;letter-spacing:.18em;color:#C9A96E;font-weight:800;">${title}</p>
      <p style="margin:0 0 16px;font-size:13px;color:#9A9590;line-height:1.6;">${subtitle}</p>
      ${body}
    </section>
  `
}

function buildEmail({
  highIntent,
  hotButStuck,
  frictionPoints,
  productAffinity,
  remarketing,
}: {
  highIntent: HighIntentVisitor[]
  hotButStuck: HighIntentVisitor[]
  frictionPoints: FrictionPoint[]
  productAffinity: ProductAffinity[]
  remarketing: RemarketingSegment[]
}) {
  const checkoutCandidates = remarketing.filter((visitor) => visitor.started_checkout && !visitor.purchased)
  const cartCandidates = remarketing.filter((visitor) => visitor.added_to_cart && !visitor.started_checkout && !visitor.purchased)
  const topIntent = highIntent[0]
  const topFriction = frictionPoints[0]

  const summary = [
    metric('High intent', highIntent.length),
    metric('Hot but stuck', hotButStuck.length),
    metric('Checkout retarget', checkoutCandidates.length),
  ].join('')

  const recommendations = [
    hotButStuck.length > 0 ? `Fix eerst frictie op ${escapeHtml(hotButStuck[0].page_path ?? 'onbekende pagina')}; dit zijn bezoekers die willen maar vastlopen.` : null,
    checkoutCandidates.length > 0 ? `${checkoutCandidates.length} bezoekers startten checkout zonder aankoop. Gebruik dit segment voor retargeting of recovery.` : null,
    cartCandidates.length > 0 ? `${cartCandidates.length} bezoekers voegden toe aan cart maar gingen niet door naar checkout.` : null,
    topIntent ? `Hoogste intent-score vandaag: ${topIntent.intent_score ?? '-'} op ${escapeHtml(topIntent.page_path ?? '-')}.` : null,
    topFriction ? `Grootste frictiepunt: ${escapeHtml(topFriction.label || topFriction.field || topFriction.event_name)} op ${escapeHtml(topFriction.page_path ?? '-')}.` : null,
  ].filter(Boolean)

  return `
    <!DOCTYPE html>
    <html lang="nl">
    <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
    <body style="margin:0;padding:0;background:#FAF8F5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1A1A1A;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF8F5;padding:40px 18px;">
        <tr><td align="center">
          <table width="680" cellpadding="0" cellspacing="0" style="max-width:680px;width:100%;background:#fff;border-radius:18px;border:1px solid #E8E4DF;overflow:hidden;">
            <tr>
              <td style="background:#0F0E0C;padding:34px 36px;">
                <p style="margin:0;font-size:28px;font-weight:700;letter-spacing:.1em;color:#FAF8F5;font-family:Georgia,serif;">MAUYI</p>
                <p style="margin:8px 0 0;font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:#C9A96E;font-weight:800;">Daily Tracking Intelligence</p>
              </td>
            </tr>
            <tr>
              <td style="padding:34px 36px;">
                <p style="margin:0 0 20px;font-size:14px;color:#5C5754;line-height:1.7;">
                  Automatisch rapport van bezoekers met koopintentie, frictie en remarketingwaarde. ${formatDate(new Date().toISOString())}
                </p>

                <table width="100%" cellpadding="0" cellspacing="0" style="border-spacing:8px;border-collapse:separate;margin:0 -8px 24px;">
                  <tr>${summary}</tr>
                </table>

                ${section('Wat nu doen', 'Dit zijn de acties die uit de data komen.', rows(
                  recommendations,
                  (item) => `<div style="padding:12px 14px;border:1px solid #E8E4DF;border-radius:14px;margin-bottom:8px;background:#FDFBF8;font-size:13px;line-height:1.55;color:#3A342F;">${item}</div>`,
                  'Geen urgente acties gevonden.'
                ))}

                ${section('Hot but stuck', 'Bezoekers met hoge intentie én frictie. Beste UX-fix kandidaten.', rows(
                  hotButStuck.slice(0, 8),
                  (v) => `
                    <div style="border-bottom:1px solid #F0EDE9;padding:10px 0;font-size:13px;line-height:1.6;">
                      <strong>${escapeHtml(v.visitor_segment)}</strong> · intent ${v.intent_score ?? '-'} · friction ${v.friction_score ?? '-'} · engagement ${v.engagement_score ?? '-'}<br>
                      <span style="color:#9A9590;">${escapeHtml(v.page_path)} · ${escapeHtml(v.product_slug ?? '-')} · ${formatDate(v.occurred_at)}</span>
                    </div>
                  `,
                  'Geen hot-but-stuck bezoekers in de laatste 24 uur.'
                ))}

                ${section('High intent', 'Bezoekers die waarschijnlijk serieus vergelijken of willen kopen.', rows(
                  highIntent.slice(0, 10),
                  (v) => `
                    <div style="border-bottom:1px solid #F0EDE9;padding:10px 0;font-size:13px;line-height:1.6;">
                      <strong>intent ${v.intent_score ?? '-'}</strong> · ${escapeHtml(v.visitor_segment)} · scroll ${v.max_scroll ?? '-'}%<br>
                      <span style="color:#9A9590;">${escapeHtml(v.page_path)} · ${escapeHtml(v.product_slug ?? '-')} · ${formatDate(v.occurred_at)}</span>
                    </div>
                  `,
                  'Geen high-intent bezoekers in de laatste 24 uur.'
                ))}

                ${section('Product affinity', 'Welke productpagina’s/signalen de meeste intentie en checkoutwaarde hebben.', rows(
                  productAffinity.slice(0, 8),
                  (p) => `
                    <div style="border-bottom:1px solid #F0EDE9;padding:10px 0;font-size:13px;line-height:1.6;">
                      <strong>${escapeHtml(p.product_or_page)}</strong> · ${p.visitors} visitors · ${p.cart_adds} cart · ${p.checkout_starts} checkout<br>
                      <span style="color:#9A9590;">avg intent ${Math.round(p.avg_intent_score ?? 0)} · avg friction ${Math.round(p.avg_friction_score ?? 0)} · ${p.pageviews} pageviews</span>
                    </div>
                  `,
                  'Nog geen product-affinity data.'
                ))}

                ${section('Friction points', 'Klikken/velden waar mensen vastlopen of ongewenst gedrag tonen.', rows(
                  frictionPoints.slice(0, 10),
                  (f) => `
                    <div style="border-bottom:1px solid #F0EDE9;padding:10px 0;font-size:13px;line-height:1.6;">
                      <strong>${escapeHtml(f.label || f.field || f.event_name)}</strong> · ${f.events} events · ${f.visitors} visitors<br>
                      <span style="color:#9A9590;">${escapeHtml(f.page_path)} · ${escapeHtml(f.event_name)}</span>
                    </div>
                  `,
                  'Geen duidelijke frictiepunten gevonden.'
                ))}

                ${section('Remarketing', 'Niet-kopers met koop- of cartsignalen.', rows(
                  remarketing.slice(0, 10),
                  (r) => `
                    <div style="border-bottom:1px solid #F0EDE9;padding:10px 0;font-size:13px;line-height:1.6;">
                      <strong>${escapeHtml(r.latest_segment ?? '-')}</strong> · intent ${r.max_intent_score ?? '-'} · friction ${r.max_friction_score ?? '-'} · ${r.started_checkout ? 'checkout' : r.added_to_cart ? 'cart' : 'warm'}<br>
                      <span style="color:#9A9590;">${escapeHtml((r.product_slugs ?? []).join(', ') || '-')} · ${formatDate(r.last_seen_at)}</span>
                    </div>
                  `,
                  'Geen remarketing-kandidaten.'
                ))}

                <p style="margin:30px 0 0;font-size:12px;color:#9A9590;line-height:1.6;">
                  Open Supabase views: <code>tracking_hot_but_stuck_24h</code>, <code>tracking_high_intent_visitors_24h</code>, <code>tracking_remarketing_segments_7d</code>.
                </p>
              </td>
            </tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `
}

export async function GET(req: NextRequest) {
  if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const db = supabase()
  const [
    highIntentRes,
    hotButStuckRes,
    frictionRes,
    productAffinityRes,
    remarketingRes,
  ] = await Promise.all([
    db.from('tracking_high_intent_visitors_24h').select('*').limit(50),
    db.from('tracking_hot_but_stuck_24h').select('*').limit(50),
    db.from('tracking_friction_points_7d').select('*').limit(50),
    db.from('tracking_product_affinity_7d').select('*').limit(50),
    db.from('tracking_remarketing_segments_7d').select('*').limit(50),
  ])

  const errors = [highIntentRes, hotButStuckRes, frictionRes, productAffinityRes, remarketingRes]
    .map((result) => result.error?.message)
    .filter(Boolean)

  if (errors.length) {
    console.error('[tracking-intelligence] Supabase view errors:', errors)
    return NextResponse.json({ error: 'View query failed', details: errors }, { status: 500 })
  }

  const highIntent = (highIntentRes.data ?? []) as HighIntentVisitor[]
  const hotButStuck = (hotButStuckRes.data ?? []) as HighIntentVisitor[]
  const frictionPoints = (frictionRes.data ?? []) as FrictionPoint[]
  const productAffinity = (productAffinityRes.data ?? []) as ProductAffinity[]
  const remarketing = (remarketingRes.data ?? []) as RemarketingSegment[]

  const resend = new Resend(process.env.RESEND_API_KEY!)
  const to = process.env.TRACKING_REPORT_EMAIL ?? 'hallo@mauyi.nl'

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to,
    subject: `MAUYI intelligence: ${highIntent.length} high-intent, ${hotButStuck.length} stuck`,
    html: buildEmail({ highIntent, hotButStuck, frictionPoints, productAffinity, remarketing }),
  })

  return NextResponse.json({
    ok: true,
    sentTo: to,
    highIntent: highIntent.length,
    hotButStuck: hotButStuck.length,
    frictionPoints: frictionPoints.length,
    productAffinity: productAffinity.length,
    remarketing: remarketing.length,
  })
}
