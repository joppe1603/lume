'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useReportWebVitals } from 'next/web-vitals'
import {
  buildFingerprint,
  getAttributionContext,
  getAnonymousId,
  getConsent,
  getSessionId,
  markSessionStarted,
  trackEvent,
} from '@/lib/tracking'

function textLabel(element: Element) {
  const aria = element.getAttribute('aria-label')
  if (aria) return aria.slice(0, 120)
  return (element.textContent ?? '').replace(/\s+/g, ' ').trim().slice(0, 120)
}

function nearestTrackableElement(target: EventTarget | null) {
  if (!(target instanceof Element)) return null
  return target.closest('a, button, [data-track], input, select, textarea')
}

type IntelligenceMetrics = {
  pageStartedAt: number
  activeMs: number
  lastActiveAt: number
  maxScroll: number
  clickCount: number
  rageClickCount: number
  deadClickCount: number
  formFocusCount: number
  productSignals: number
  commerceSignals: number
  frictionSignals: number
  lastSnapshotAt: number
}

function classifyPath(pathname: string) {
  if (pathname === '/') return 'home'
  if (pathname.startsWith('/products/')) return 'product'
  if (pathname.startsWith('/shop')) return 'shop'
  if (pathname.startsWith('/checkout')) return 'checkout'
  if (pathname.startsWith('/thanks') || pathname.startsWith('/order-confirmed')) return 'conversion'
  if (pathname.startsWith('/journal')) return 'education'
  if (pathname.startsWith('/vs') || pathname.startsWith('/alternatives')) return 'comparison'
  return pathname.split('/').filter(Boolean)[0] || 'other'
}

function scoreIntent(metrics: IntelligenceMetrics, pathname: string) {
  const pathScore =
    pathname.startsWith('/checkout') ? 35 :
    pathname.startsWith('/products/') ? 22 :
    pathname.startsWith('/shop') ? 18 :
    pathname.startsWith('/vs') || pathname.startsWith('/alternatives') ? 14 :
    pathname.startsWith('/journal') ? 8 :
    4

  return Math.min(100, Math.round(
    pathScore +
    metrics.productSignals * 9 +
    metrics.commerceSignals * 18 +
    Math.min(metrics.activeMs / 1000, 120) * 0.18 +
    metrics.maxScroll * 0.15 +
    metrics.formFocusCount * 4
  ))
}

function scoreFriction(metrics: IntelligenceMetrics) {
  return Math.min(100, Math.round(
    metrics.rageClickCount * 22 +
    metrics.deadClickCount * 10 +
    metrics.frictionSignals * 15
  ))
}

function segmentVisitor(intentScore: number, frictionScore: number, pathname: string) {
  if (frictionScore >= 45 && intentScore >= 55) return 'hot_but_stuck'
  if (intentScore >= 75) return 'high_intent'
  if (intentScore >= 45) return 'warm_researcher'
  if (pathname.startsWith('/journal')) return 'education_mode'
  return 'low_intent'
}

export default function TrackingProvider() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const fingerprintSentRef = useRef(false)
  const scrollMilestonesRef = useRef<Set<number>>(new Set())
  const clickHistoryRef = useRef<Array<{ x: number; y: number; at: number; label: string }>>([])
  const visibleProductsRef = useRef<Set<string>>(new Set())
  const intelligenceRef = useRef<IntelligenceMetrics>({
    pageStartedAt: Date.now(),
    activeMs: 0,
    lastActiveAt: Date.now(),
    maxScroll: 0,
    clickCount: 0,
    rageClickCount: 0,
    deadClickCount: 0,
    formFocusCount: 0,
    productSignals: 0,
    commerceSignals: 0,
    frictionSignals: 0,
    lastSnapshotAt: 0,
  })

  useReportWebVitals((metric) => {
    void trackEvent({
      event_name: 'web_vital_reported',
      properties: {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        id: metric.id,
      },
    })
  })

  useEffect(() => {
    getAttributionContext()
    if (markSessionStarted()) {
      void trackEvent({ event_name: 'session_started' })
    }
  }, [])

  useEffect(() => {
    const query = searchParams.toString()
    scrollMilestonesRef.current = new Set()
    intelligenceRef.current = {
      ...intelligenceRef.current,
      pageStartedAt: Date.now(),
      activeMs: 0,
      lastActiveAt: Date.now(),
      maxScroll: 0,
      clickCount: 0,
      rageClickCount: 0,
      deadClickCount: 0,
      formFocusCount: 0,
      productSignals: pathname.startsWith('/products/') ? 1 : 0,
      commerceSignals: pathname.startsWith('/checkout') ? 1 : 0,
      frictionSignals: 0,
      lastSnapshotAt: 0,
    }
    void trackEvent({
      event_name: 'page_viewed',
      page_path: query ? `${pathname}?${query}` : pathname,
      properties: {
        title: document.title,
        content_group: classifyPath(pathname),
        product_slug: pathname.startsWith('/products/') ? pathname.split('/')[2] : undefined,
      },
    })
  }, [pathname, searchParams])

  useEffect(() => {
    function reportPerformance() {
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
      if (!nav) return
      void trackEvent({
        event_name: 'performance_navigation_reported',
        properties: {
          type: nav.type,
          dns: Math.round(nav.domainLookupEnd - nav.domainLookupStart),
          connect: Math.round(nav.connectEnd - nav.connectStart),
          ttfb: Math.round(nav.responseStart - nav.requestStart),
          response: Math.round(nav.responseEnd - nav.responseStart),
          domInteractive: Math.round(nav.domInteractive),
          domComplete: Math.round(nav.domComplete),
        },
      })
    }

    if (document.readyState === 'complete') {
      reportPerformance()
    } else {
      window.addEventListener('load', reportPerformance, { once: true })
      return () => window.removeEventListener('load', reportPerformance)
    }
  }, [])

  useEffect(() => {
    function handleCustomTrack(event: Event) {
      const detail = (event as CustomEvent<{ event_name?: string; properties?: Record<string, unknown> }>).detail
      if (!detail?.event_name) return
      if (['cart_item_added', 'shopify_checkout_started', 'shopify_checkout_created', 'payment_redirect_started'].includes(detail.event_name)) {
        intelligenceRef.current.commerceSignals += 1
      }
      if (['product_filter_selected', 'product_impression_viewed'].includes(detail.event_name)) {
        intelligenceRef.current.productSignals += 1
      }
      void trackEvent({
        event_name: detail.event_name,
        properties: detail.properties ?? {},
      })
    }

    function handleClick(event: MouseEvent) {
      const element = nearestTrackableElement(event.target)
      if (!element) return

      const anchor = element.closest('a')
      const href = anchor?.getAttribute('href') ?? null
      const isOutbound = href ? /^https?:\/\//.test(href) && !href.includes(window.location.host) : false
      const eventName = element.getAttribute('data-track') ?? (isOutbound ? 'outbound_link_clicked' : 'ui_clicked')
      const label = textLabel(element)
      intelligenceRef.current.clickCount += 1
      intelligenceRef.current.lastActiveAt = Date.now()

      const lowerLabel = label.toLowerCase()
      if (href?.includes('/products/') || element.getAttribute('data-product-slug')) {
        intelligenceRef.current.productSignals += 1
      }
      if (
        lowerLabel.includes('afrekenen') ||
        lowerLabel.includes('voeg toe') ||
        lowerLabel.includes('betalen') ||
        href?.includes('/checkout')
      ) {
        intelligenceRef.current.commerceSignals += 1
      }

      clickHistoryRef.current = [
        ...clickHistoryRef.current.filter((item) => Date.now() - item.at < 2500),
        { x: event.clientX, y: event.clientY, at: Date.now(), label },
      ]

      const repeatedClicks = clickHistoryRef.current.filter(
        (item) => Math.abs(item.x - event.clientX) < 30 && Math.abs(item.y - event.clientY) < 30
      )
      if (repeatedClicks.length >= 3) {
        intelligenceRef.current.rageClickCount += 1
        intelligenceRef.current.frictionSignals += 1
        void trackEvent({
          event_name: 'rage_click_detected',
          properties: {
            label,
            x: event.clientX,
            y: event.clientY,
            count: repeatedClicks.length,
          },
        })
      }

      if (!anchor && element.tagName.toLowerCase() !== 'button' && !element.getAttribute('data-track')) {
        intelligenceRef.current.deadClickCount += 1
        void trackEvent({
          event_name: 'dead_click_detected',
          properties: {
            label,
            tag: element.tagName.toLowerCase(),
            x: event.clientX,
            y: event.clientY,
          },
        })
      }

      void trackEvent({
        event_name: eventName,
        properties: {
          label,
          tag: element.tagName.toLowerCase(),
          href,
          outbound: isOutbound,
          id: element.id || undefined,
          product_slug: element.getAttribute('data-product-slug') || anchor?.getAttribute('data-product-slug') || undefined,
          product_name: element.getAttribute('data-product-name') || anchor?.getAttribute('data-product-name') || undefined,
        },
      })
    }

    function handleSubmit(event: SubmitEvent) {
      if (!(event.target instanceof HTMLFormElement)) return
      const form = event.target
      void trackEvent({
        event_name: form.getAttribute('data-track-submit') ?? 'form_submitted',
        properties: {
          id: form.id || undefined,
          name: form.getAttribute('name') || undefined,
          action: form.getAttribute('action') || undefined,
        },
      })
    }

    function handleFocusOut(event: FocusEvent) {
      const element = event.target
      if (!(element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement)) return
      const type = element instanceof HTMLInputElement ? element.type : element.tagName.toLowerCase()
      if (type === 'password') return

      intelligenceRef.current.formFocusCount += 1
      intelligenceRef.current.lastActiveAt = Date.now()

      const length = element.value.length
      const lengthBucket = length === 0 ? 'empty' : length < 4 ? 'short' : length < 12 ? 'medium' : 'long'
      void trackEvent({
        event_name: 'form_field_engaged',
        properties: {
          field: element.name || element.id || 'unknown',
          type,
          filled: length > 0,
          length_bucket: lengthBucket,
          form_action: element.closest('form')?.getAttribute('action') || undefined,
        },
      })
    }

    function handleChange(event: Event) {
      const element = nearestTrackableElement(event.target)
      if (!(element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement)) return

      const type = element instanceof HTMLInputElement ? element.type : element.tagName.toLowerCase()
      if (type === 'password' || type === 'email' || type === 'tel') return

      const isSearch = type === 'search' || element.getAttribute('name')?.toLowerCase().includes('search')
      if (!isSearch) return

      void trackEvent({
        event_name: 'internal_search_performed',
        properties: {
          field: element.getAttribute('name') || element.id || 'search',
          query: element.value.slice(0, 180),
        },
      })
    }

    function handleVideo(event: Event) {
      if (!(event.target instanceof HTMLVideoElement)) return
      const video = event.target
      void trackEvent({
        event_name: `video_${event.type}`,
        properties: {
          src: video.currentSrc || video.getAttribute('src') || undefined,
          currentTime: Math.round(video.currentTime),
          duration: Number.isFinite(video.duration) ? Math.round(video.duration) : undefined,
        },
      })
    }

    window.addEventListener('mauyi:track', handleCustomTrack)
    document.addEventListener('click', handleClick, { capture: true })
    document.addEventListener('submit', handleSubmit, { capture: true })
    document.addEventListener('change', handleChange, { capture: true })
    document.addEventListener('focusout', handleFocusOut, { capture: true })
    document.addEventListener('play', handleVideo, { capture: true })
    document.addEventListener('pause', handleVideo, { capture: true })
    document.addEventListener('ended', handleVideo, { capture: true })

    return () => {
      window.removeEventListener('mauyi:track', handleCustomTrack)
      document.removeEventListener('click', handleClick, { capture: true })
      document.removeEventListener('submit', handleSubmit, { capture: true })
      document.removeEventListener('change', handleChange, { capture: true })
      document.removeEventListener('focusout', handleFocusOut, { capture: true })
      document.removeEventListener('play', handleVideo, { capture: true })
      document.removeEventListener('pause', handleVideo, { capture: true })
      document.removeEventListener('ended', handleVideo, { capture: true })
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const element = entry.target
        const slug = element.getAttribute('data-product-slug')
        if (!slug || visibleProductsRef.current.has(slug)) return
        visibleProductsRef.current.add(slug)

        void trackEvent({
          event_name: 'product_impression_viewed',
          properties: {
            product_slug: slug,
            product_name: element.getAttribute('data-product-name') || undefined,
            list_name: element.getAttribute('data-product-list') || undefined,
            position: element.getAttribute('data-product-position') || undefined,
          },
        })
      })
    }, { threshold: 0.55 })

    document.querySelectorAll('[data-track-product-impression="true"]').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    let ticking = false

    function handleScroll() {
      if (ticking) return
      ticking = true

      window.requestAnimationFrame(() => {
        ticking = false
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        if (scrollable <= 0) return

        const depth = Math.min(100, Math.round((window.scrollY / scrollable) * 100))
        intelligenceRef.current.maxScroll = Math.max(intelligenceRef.current.maxScroll, depth)
        intelligenceRef.current.lastActiveAt = Date.now()
        const milestone = [25, 50, 75, 100].find((value) => depth >= value && !scrollMilestonesRef.current.has(value))
        if (!milestone) return

        scrollMilestonesRef.current.add(milestone)
        void trackEvent({
          event_name: 'scroll_depth_reached',
          properties: { depth: milestone },
        })
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function markActive() {
      const now = Date.now()
      const delta = now - intelligenceRef.current.lastActiveAt
      if (delta > 0 && delta < 5000 && document.visibilityState === 'visible') {
        intelligenceRef.current.activeMs += delta
      }
      intelligenceRef.current.lastActiveAt = now
    }

    function sendSnapshot(reason: string) {
      markActive()
      const metrics = intelligenceRef.current
      const intentScore = scoreIntent(metrics, pathname)
      const frictionScore = scoreFriction(metrics)
      const segment = segmentVisitor(intentScore, frictionScore, pathname)
      metrics.lastSnapshotAt = Date.now()

      void trackEvent({
        event_name: 'visitor_intelligence_snapshot',
        properties: {
          reason,
          content_group: classifyPath(pathname),
          intent_score: intentScore,
          friction_score: frictionScore,
          engagement_score: Math.min(100, Math.round((metrics.activeMs / 1000) * 0.45 + metrics.maxScroll * 0.35 + metrics.clickCount * 2)),
          visitor_segment: segment,
          active_time_ms: Math.round(metrics.activeMs),
          time_on_page_ms: Date.now() - metrics.pageStartedAt,
          max_scroll: metrics.maxScroll,
          click_count: metrics.clickCount,
          rage_click_count: metrics.rageClickCount,
          dead_click_count: metrics.deadClickCount,
          form_focus_count: metrics.formFocusCount,
          product_signals: metrics.productSignals,
          commerce_signals: metrics.commerceSignals,
          friction_signals: metrics.frictionSignals,
          product_slug: pathname.startsWith('/products/') ? pathname.split('/')[2] : undefined,
        },
      })
    }

    const activityEvents = ['pointermove', 'keydown', 'touchstart']
    activityEvents.forEach((eventName) => window.addEventListener(eventName, markActive, { passive: true }))
    const interval = window.setInterval(() => sendSnapshot('heartbeat'), 20000)

    return () => {
      activityEvents.forEach((eventName) => window.removeEventListener(eventName, markActive))
      window.clearInterval(interval)
      sendSnapshot('route_change')
    }
  }, [pathname])

  useEffect(() => {
    function handleBeforeUnload() {
      const maxScroll = Math.round((window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) * 100)
      const metrics = intelligenceRef.current
      const intentScore = scoreIntent(metrics, pathname)
      const frictionScore = scoreFriction(metrics)
      void trackEvent({
        event_name: 'session_page_exited',
        properties: {
          time_on_page_ms: Math.round(performance.now()),
          max_scroll_estimate: Math.min(100, Math.max(maxScroll, metrics.maxScroll)),
          intent_score: intentScore,
          friction_score: frictionScore,
          visitor_segment: segmentVisitor(intentScore, frictionScore, pathname),
        },
      })
    }

    function handleVisibilityChange() {
      void trackEvent({
        event_name: document.visibilityState === 'hidden' ? 'page_hidden' : 'page_visible',
        properties: {
          visibility_state: document.visibilityState,
          time_on_page_ms: Math.round(performance.now()),
        },
      })
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  useEffect(() => {
    async function maybeSendFingerprint() {
      const consent = getConsent()
      if (!consent.fingerprinting || fingerprintSentRef.current) return
      fingerprintSentRef.current = true

      try {
        const fingerprint = await buildFingerprint()
        await fetch('/api/tracking/fingerprint', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          keepalive: true,
          body: JSON.stringify({
            anonymous_id: getAnonymousId(),
            session_id: getSessionId(),
            fingerprint,
            consent,
          }),
        })
      } catch {
        fingerprintSentRef.current = false
      }
    }

    void maybeSendFingerprint()

    function handleConsentUpdated() {
      void maybeSendFingerprint()
    }

    window.addEventListener('mauyi:consent-updated', handleConsentUpdated)
    return () => window.removeEventListener('mauyi:consent-updated', handleConsentUpdated)
  }, [])

  return null
}
