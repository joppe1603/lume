import { NextRequest, NextResponse } from 'next/server'
import { clampObject, getRequestNetwork, getTrackingSupabase } from '@/lib/tracking-server'

export async function POST(req: NextRequest) {
  let body: {
    anonymous_id?: string
    session_id?: string
    consent?: {
      version?: string
      analytics?: boolean
      marketing?: boolean
      fingerprinting?: boolean
    }
    device?: Record<string, unknown>
  }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.anonymous_id || !body.session_id || !body.consent) {
    return NextResponse.json({ error: 'Missing consent payload' }, { status: 400 })
  }

  const network = getRequestNetwork(req)
  const supabase = getTrackingSupabase()
  if (!supabase) {
    console.info('[tracking/consent] Supabase env vars missing; accepted without persistence.')
    return NextResponse.json({ ok: true, persisted: false })
  }

  const consentVersion = body.consent.version ?? '2026-07-01'
  const consentRow = {
    anonymous_id: body.anonymous_id.slice(0, 120),
    session_id: body.session_id.slice(0, 120),
    consent_version: consentVersion,
    analytics: Boolean(body.consent.analytics),
    marketing: Boolean(body.consent.marketing),
    fingerprinting: Boolean(body.consent.fingerprinting),
    ip_hash: network.ip_hash,
    user_agent: network.user_agent,
  }

  const { error: consentError } = await supabase.from('consent_records').insert(consentRow)
  if (consentError) {
    console.error('[tracking/consent] Supabase error:', consentError.code, consentError.message)
    return NextResponse.json({ ok: true, persisted: false })
  }

  await supabase.from('tracking_events').insert({
    event_name: 'consent_updated',
    anonymous_id: body.anonymous_id.slice(0, 120),
    session_id: body.session_id.slice(0, 120),
    device: clampObject(body.device),
    network,
    consent: clampObject(body.consent),
    properties: { consent_version: consentVersion },
  })

  return NextResponse.json({ ok: true, persisted: true })
}

