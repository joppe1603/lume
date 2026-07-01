import { createHash } from 'crypto'
import { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export function getTrackingSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) return null
  return createClient(url, key)
}

export function hashValue(value: string | null) {
  if (!value) return null
  const salt = process.env.TRACKING_HASH_SALT ?? process.env.SUPABASE_SERVICE_ROLE_KEY ?? 'mauyi-tracking'
  return createHash('sha256').update(`${salt}:${value}`).digest('hex')
}

export function getClientIp(req: NextRequest) {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    req.headers.get('cf-connecting-ip')
  )
}

export function getCountry(req: NextRequest) {
  return req.headers.get('x-vercel-ip-country') || req.headers.get('cf-ipcountry')
}

export function getRequestNetwork(req: NextRequest) {
  return {
    ip_hash: hashValue(getClientIp(req)),
    country: getCountry(req),
    user_agent: req.headers.get('user-agent'),
  }
}

export function clampObject(value: unknown, maxLength = 8000) {
  if (!value || typeof value !== 'object') return {}
  const json = JSON.stringify(value).slice(0, maxLength)
  try {
    return JSON.parse(json)
  } catch {
    return {}
  }
}

