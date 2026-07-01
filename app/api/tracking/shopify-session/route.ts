import { NextRequest, NextResponse } from 'next/server'
import { clampObject, getRequestNetwork, getTrackingSupabase } from '@/lib/tracking-server'

export async function POST(req: NextRequest) {
  let body: {
    anonymous_id?: string
    session_id?: string
    shopify_cart_id?: string
    checkout_url?: string
    total?: number
    item_count?: number
    items?: unknown[]
  }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.anonymous_id || !body.session_id || !body.shopify_cart_id) {
    return NextResponse.json({ error: 'Missing Shopify session payload' }, { status: 400 })
  }

  const supabase = getTrackingSupabase()
  if (!supabase) {
    return NextResponse.json({ ok: true, persisted: false })
  }

  const network = getRequestNetwork(req)
  const checkoutHost = body.checkout_url ? new URL(body.checkout_url).host : null

  await supabase.from('shopify_checkout_sessions').upsert({
    shopify_cart_id: body.shopify_cart_id,
    shopify_cart_token: body.shopify_cart_id.split('/').pop()?.split('?')[0] ?? null,
    anonymous_id: body.anonymous_id,
    session_id: body.session_id,
    checkout_url: body.checkout_url ?? null,
    checkout_host: checkoutHost,
    total: body.total ?? null,
    item_count: body.item_count ?? null,
    items: clampObject({ items: body.items ?? [] }),
    network,
    updated_at: new Date().toISOString(),
  }, { onConflict: 'shopify_cart_id' })

  await supabase.from('tracking_events').insert({
    event_name: 'shopify_checkout_session_stored',
    anonymous_id: body.anonymous_id,
    session_id: body.session_id,
    network,
    properties: {
      shopify_cart_id: body.shopify_cart_id,
      checkout_host: checkoutHost,
      total: body.total,
      item_count: body.item_count,
      items: body.items ?? [],
    },
  })

  return NextResponse.json({ ok: true, persisted: true })
}

