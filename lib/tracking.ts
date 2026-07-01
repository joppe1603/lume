'use client'

export type ConsentState = {
  necessary: true
  analytics: boolean
  marketing: boolean
  fingerprinting: boolean
  version: string
  updatedAt: string
}

export type TrackingEvent = {
  event_name: string
  page_url?: string
  page_path?: string
  referrer?: string
  properties?: Record<string, unknown>
}

const CONSENT_KEY = 'mauyi-cookie-consent'
const ANON_KEY = 'mauyi-anonymous-id'
const SESSION_KEY = 'mauyi-session-id'
const SESSION_STARTED_KEY = 'mauyi-session-started'
const CONSENT_VERSION = '2026-07-01'

function createId(prefix: string) {
  const cryptoObj = globalThis.crypto
  const id = cryptoObj?.randomUUID ? cryptoObj.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`
  return `${prefix}_${id}`
}

function readStorage(key: string) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function writeStorage(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Storage may be blocked in private browsing or strict privacy modes.
  }
}

export function defaultConsent(): ConsentState {
  return {
    necessary: true,
    analytics: false,
    marketing: false,
    fingerprinting: false,
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
  }
}

export function fullConsent(): ConsentState {
  return {
    necessary: true,
    analytics: true,
    marketing: true,
    fingerprinting: true,
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
  }
}

export function getConsent(): ConsentState {
  const stored = readStorage(CONSENT_KEY)
  if (!stored) return defaultConsent()

  if (stored === 'all') return fullConsent()
  if (stored === 'necessary') return defaultConsent()

  try {
    const parsed = JSON.parse(stored) as Partial<ConsentState>
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      fingerprinting: Boolean(parsed.fingerprinting),
      version: parsed.version ?? CONSENT_VERSION,
      updatedAt: parsed.updatedAt ?? new Date().toISOString(),
    }
  } catch {
    return defaultConsent()
  }
}

export function hasStoredConsent() {
  return readStorage(CONSENT_KEY) !== null
}

export function setConsent(consent: ConsentState) {
  writeStorage(CONSENT_KEY, JSON.stringify(consent))
  window.dispatchEvent(new CustomEvent('mauyi:consent-updated', { detail: consent }))
}

export function getAnonymousId() {
  const stored = readStorage(ANON_KEY)
  if (stored) return stored

  const anonymousId = createId('anon')
  writeStorage(ANON_KEY, anonymousId)
  return anonymousId
}

export function getSessionId() {
  try {
    const stored = sessionStorage.getItem(SESSION_KEY)
    if (stored) return stored

    const sessionId = createId('sess')
    sessionStorage.setItem(SESSION_KEY, sessionId)
    return sessionId
  } catch {
    return createId('sess')
  }
}

export function getDeviceContext() {
  const nav = window.navigator
  return {
    userAgent: nav.userAgent,
    language: nav.language,
    languages: nav.languages,
    platform: nav.platform,
    cookieEnabled: nav.cookieEnabled,
    hardwareConcurrency: nav.hardwareConcurrency,
    deviceMemory: 'deviceMemory' in nav ? (nav as Navigator & { deviceMemory?: number }).deviceMemory : undefined,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen: `${window.screen.width}x${window.screen.height}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    colorDepth: window.screen.colorDepth,
    pixelRatio: window.devicePixelRatio,
  }
}

async function sha256(value: string) {
  const encoded = new TextEncoder().encode(value)
  const digest = await crypto.subtle.digest('SHA-256', encoded)
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, '0')).join('')
}

function getCanvasSignal() {
  try {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return null
    canvas.width = 240
    canvas.height = 60
    ctx.textBaseline = 'top'
    ctx.font = '16px Arial'
    ctx.fillStyle = '#C9A96E'
    ctx.fillRect(8, 8, 80, 24)
    ctx.fillStyle = '#1A1A1A'
    ctx.fillText('MAUYI device signal', 12, 12)
    return canvas.toDataURL()
  } catch {
    return null
  }
}

function getWebglSignal() {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl')
    if (!gl) return null
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    if (!debugInfo) return null
    return {
      vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
      renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
    }
  } catch {
    return null
  }
}

export async function buildFingerprint() {
  const components = {
    ...getDeviceContext(),
    canvas: getCanvasSignal(),
    webgl: getWebglSignal(),
    touchPoints: navigator.maxTouchPoints,
    doNotTrack: navigator.doNotTrack,
  }
  const componentsJson = JSON.stringify(components)
  const componentsHash = await sha256(componentsJson)

  return {
    visitorId: `fp_${componentsHash.slice(0, 32)}`,
    componentsHash,
    confidence: 0.72,
    components,
  }
}

export async function trackEvent(event: TrackingEvent) {
  const consent = getConsent()
  const payload = {
    anonymous_id: getAnonymousId(),
    session_id: getSessionId(),
    event_name: event.event_name,
    page_url: event.page_url ?? window.location.href,
    page_path: event.page_path ?? window.location.pathname,
    referrer: event.referrer ?? document.referrer,
    properties: event.properties ?? {},
    consent,
    device: consent.analytics || consent.fingerprinting ? getDeviceContext() : {},
  }

  try {
    await fetch('/api/tracking/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({ events: [payload] }),
    })
  } catch {
    // Tracking should never break the storefront.
  }
}

export async function syncConsent(consent: ConsentState) {
  try {
    await fetch('/api/tracking/consent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({
        anonymous_id: getAnonymousId(),
        session_id: getSessionId(),
        consent,
        device: getDeviceContext(),
      }),
    })
  } catch {
    // Consent is still stored locally; retry happens on a future visit/event.
  }
}

export function markSessionStarted() {
  try {
    const sessionId = getSessionId()
    const key = `${SESSION_STARTED_KEY}:${sessionId}`
    if (sessionStorage.getItem(key)) return false
    sessionStorage.setItem(key, '1')
    return true
  } catch {
    return true
  }
}

