import { NextRequest, NextResponse } from 'next/server'
import { clampObject, getRequestNetwork, getTrackingSupabase } from '@/lib/tracking-server'

type IncomingEvent = {
  anonymous_id?: string
  session_id?: string
  event_name?: string
  page_url?: string
  page_path?: string
  referrer?: string
  utm?: Record<string, unknown>
  device?: Record<string, unknown>
  fingerprint?: Record<string, unknown>
  network?: Record<string, unknown>
  properties?: Record<string, unknown>
  attribution?: Record<string, unknown>
  consent?: Record<string, unknown>
}

export async function POST(req: NextRequest) {
  let body: { events?: IncomingEvent[] }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const events = Array.isArray(body.events) ? body.events.slice(0, 25) : []
  if (!events.length) {
    return NextResponse.json({ error: 'No events provided' }, { status: 400 })
  }

  const network = getRequestNetwork(req)
  const rows = events
    .filter((event) => event.event_name && event.anonymous_id && event.session_id)
    .map((event) => ({
      event_name: String(event.event_name).slice(0, 120),
      anonymous_id: String(event.anonymous_id).slice(0, 120),
      session_id: String(event.session_id).slice(0, 120),
      page_url: event.page_url ? String(event.page_url).slice(0, 1000) : null,
      page_path: event.page_path ? String(event.page_path).slice(0, 500) : null,
      referrer: event.referrer ? String(event.referrer).slice(0, 1000) : null,
      utm: clampObject(event.utm),
      device: clampObject(event.device),
      fingerprint: clampObject(event.fingerprint),
      network: { ...network, ...clampObject(event.network) },
      properties: {
        ...clampObject(event.properties),
        attribution: clampObject(event.attribution),
      },
      consent: clampObject(event.consent),
    }))

  if (!rows.length) {
    return NextResponse.json({ error: 'No valid events provided' }, { status: 400 })
  }

  const supabase = getTrackingSupabase()
  if (!supabase) {
    console.info('[tracking/events] Supabase env vars missing; accepted without persistence.')
    return NextResponse.json({ ok: true, persisted: false })
  }

  const { error } = await supabase.from('tracking_events').insert(rows)
  if (error) {
    console.error('[tracking/events] Supabase error:', error.code, error.message)
    return NextResponse.json({ ok: true, persisted: false })
  }

  return NextResponse.json({ ok: true, persisted: true })
}
