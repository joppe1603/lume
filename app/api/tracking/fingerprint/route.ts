import { NextRequest, NextResponse } from 'next/server'
import { clampObject, getRequestNetwork, getTrackingSupabase } from '@/lib/tracking-server'

export async function POST(req: NextRequest) {
  let body: {
    anonymous_id?: string
    session_id?: string
    fingerprint?: {
      visitorId?: string
      componentsHash?: string
      confidence?: number
      components?: Record<string, unknown>
    }
    consent?: {
      fingerprinting?: boolean
    }
  }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.consent?.fingerprinting) {
    return NextResponse.json({ error: 'Fingerprinting consent required' }, { status: 403 })
  }

  if (!body.anonymous_id || !body.session_id || !body.fingerprint?.visitorId) {
    return NextResponse.json({ error: 'Missing fingerprint payload' }, { status: 400 })
  }

  const network = getRequestNetwork(req)
  const supabase = getTrackingSupabase()
  if (!supabase) {
    console.info('[tracking/fingerprint] Supabase env vars missing; accepted without persistence.')
    return NextResponse.json({ ok: true, persisted: false })
  }

  const fingerprint = {
    visitor_id: body.fingerprint.visitorId.slice(0, 120),
    components_hash: body.fingerprint.componentsHash?.slice(0, 120),
    confidence: body.fingerprint.confidence ?? null,
  }

  await supabase.from('visitor_profiles').upsert({
    anonymous_id: body.anonymous_id.slice(0, 120),
    last_seen_at: new Date().toISOString(),
    fingerprint_visitor_id: fingerprint.visitor_id,
    fingerprint_confidence: fingerprint.confidence,
    country: network.country,
    device_summary: clampObject(body.fingerprint.components, 4000),
    consent_state: clampObject(body.consent),
  }, { onConflict: 'anonymous_id' })

  const { error } = await supabase.from('tracking_events').insert({
    event_name: 'fingerprint_collected',
    anonymous_id: body.anonymous_id.slice(0, 120),
    session_id: body.session_id.slice(0, 120),
    fingerprint,
    network,
    consent: clampObject(body.consent),
    properties: {
      components: clampObject(body.fingerprint.components, 4000),
    },
  })

  if (error) {
    console.error('[tracking/fingerprint] Supabase error:', error.code, error.message)
    return NextResponse.json({ ok: true, persisted: false })
  }

  return NextResponse.json({ ok: true, persisted: true })
}

