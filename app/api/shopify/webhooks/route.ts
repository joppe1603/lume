import { createHmac, timingSafeEqual } from 'crypto'
import { NextRequest, NextResponse } from 'next/server'
import { getRequestNetwork, getTrackingSupabase, hashValue } from '@/lib/tracking-server'

export const runtime = 'nodejs'

type ShopifyLineItem = {
  product_id?: number | string
  variant_id?: number | string
  sku?: string
  title?: string
  name?: string
  quantity?: number
  price?: string
}

type ShopifyOrderPayload = {
  id?: number | string
  admin_graphql_api_id?: string
  order_number?: number | string
  name?: string
  email?: string
  contact_email?: string
  total_price?: string
  subtotal_price?: string
  total_tax?: string
  currency?: string
  financial_status?: string
  fulfillment_status?: string | null
  cancel_reason?: string | null
  cancelled_at?: string | null
  cart_token?: string | null
  checkout_token?: string | null
  checkout_id?: number | string | null
  landing_site?: string | null
  referring_site?: string | null
  source_name?: string | null
  line_items?: ShopifyLineItem[]
}

function verifyShopifyHmac(rawBody: string, hmacHeader: string | null) {
  const secret = process.env.SHOPIFY_WEBHOOK_SECRET
  if (!secret || !hmacHeader) return false

  const digest = createHmac('sha256', secret).update(rawBody, 'utf8').digest('base64')
  const digestBuffer = Buffer.from(digest)
  const hmacBuffer = Buffer.from(hmacHeader)

  return digestBuffer.length === hmacBuffer.length && timingSafeEqual(digestBuffer, hmacBuffer)
}

function normalizeTopic(topic: string | null) {
  return (topic ?? 'shopify/webhook').replace(/\//g, '_')
}

function safeOrderProperties(payload: ShopifyOrderPayload, topic: string | null) {
  const email = payload.email ?? payload.contact_email ?? null
  return {
    shopify_topic: topic,
    shopify_order_id: payload.id ? String(payload.id) : null,
    shopify_order_gid: payload.admin_graphql_api_id ?? null,
    order_number: payload.order_number ?? null,
    order_name: payload.name ?? null,
    email_hash: hashValue(email),
    email_domain: email?.split('@')[1] ?? null,
    total: payload.total_price ? Number(payload.total_price) : null,
    subtotal: payload.subtotal_price ? Number(payload.subtotal_price) : null,
    tax: payload.total_tax ? Number(payload.total_tax) : null,
    currency: payload.currency ?? null,
    financial_status: payload.financial_status ?? null,
    fulfillment_status: payload.fulfillment_status ?? null,
    cancel_reason: payload.cancel_reason ?? null,
    cancelled_at: payload.cancelled_at ?? null,
    cart_token: payload.cart_token ?? null,
    checkout_token: payload.checkout_token ?? null,
    checkout_id: payload.checkout_id ? String(payload.checkout_id) : null,
    landing_site: payload.landing_site ?? null,
    referring_site: payload.referring_site ?? null,
    source_name: payload.source_name ?? null,
    items: (payload.line_items ?? []).map((item) => ({
      product_id: item.product_id ? String(item.product_id) : null,
      variant_id: item.variant_id ? String(item.variant_id) : null,
      sku: item.sku ?? null,
      title: item.title ?? item.name ?? null,
      quantity: item.quantity ?? null,
      price: item.price ? Number(item.price) : null,
    })),
  }
}

async function findCheckoutSession(payload: ShopifyOrderPayload) {
  const supabase = getTrackingSupabase()
  if (!supabase) return null

  const tokens = [
    payload.cart_token,
    payload.checkout_token,
    payload.checkout_id ? String(payload.checkout_id) : null,
  ].filter(Boolean) as string[]

  for (const token of tokens) {
    const { data } = await supabase
      .from('shopify_checkout_sessions')
      .select('anonymous_id, session_id, shopify_cart_id')
      .or(`shopify_cart_token.eq.${token},shopify_cart_id.ilike.%${token}%`)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle()

    if (data) return data
  }

  return null
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text()
  const topic = req.headers.get('x-shopify-topic')
  const hmac = req.headers.get('x-shopify-hmac-sha256')
  const shopDomain = req.headers.get('x-shopify-shop-domain')

  if (!verifyShopifyHmac(rawBody, hmac)) {
    return NextResponse.json({ error: 'Invalid Shopify webhook signature' }, { status: 401 })
  }

  let payload: ShopifyOrderPayload
  try {
    payload = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const supabase = getTrackingSupabase()
  if (!supabase) return NextResponse.json({ ok: true, persisted: false })

  const network = getRequestNetwork(req)
  const session = await findCheckoutSession(payload)
  const anonymousId = session?.anonymous_id ?? `shopify_${payload.id ?? Date.now()}`
  const sessionId = session?.session_id ?? `shopify_webhook_${payload.id ?? Date.now()}`
  const properties = {
    ...safeOrderProperties(payload, topic),
    shop_domain: shopDomain,
    matched_shopify_cart_id: session?.shopify_cart_id ?? null,
  }

  await supabase.from('shopify_webhook_events').insert({
    topic,
    shop_domain: shopDomain,
    shopify_order_id: payload.id ? String(payload.id) : null,
    shopify_order_gid: payload.admin_graphql_api_id ?? null,
    shopify_cart_token: payload.cart_token ?? null,
    shopify_checkout_token: payload.checkout_token ?? null,
    payload: properties,
    matched_anonymous_id: session?.anonymous_id ?? null,
    matched_session_id: session?.session_id ?? null,
  })

  await supabase.from('tracking_events').insert({
    event_name: normalizeTopic(topic),
    anonymous_id: anonymousId,
    session_id: sessionId,
    network,
    properties,
  })

  if (topic === 'orders/paid') {
    await supabase.from('tracking_events').insert({
      event_name: 'purchase_completed',
      anonymous_id: anonymousId,
      session_id: sessionId,
      network,
      properties,
    })
  }

  return NextResponse.json({ ok: true, persisted: true })
}

