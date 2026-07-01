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

export default function TrackingProvider() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const fingerprintSentRef = useRef(false)
  const scrollMilestonesRef = useRef<Set<number>>(new Set())
  const clickHistoryRef = useRef<Array<{ x: number; y: number; at: number; label: string }>>([])
  const visibleProductsRef = useRef<Set<string>>(new Set())

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
    void trackEvent({
      event_name: 'page_viewed',
      page_path: query ? `${pathname}?${query}` : pathname,
      properties: {
        title: document.title,
        content_group: pathname.split('/').filter(Boolean)[0] || 'home',
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

      clickHistoryRef.current = [
        ...clickHistoryRef.current.filter((item) => Date.now() - item.at < 2500),
        { x: event.clientX, y: event.clientY, at: Date.now(), label },
      ]

      const repeatedClicks = clickHistoryRef.current.filter(
        (item) => Math.abs(item.x - event.clientX) < 30 && Math.abs(item.y - event.clientY) < 30
      )
      if (repeatedClicks.length >= 3) {
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
    document.addEventListener('play', handleVideo, { capture: true })
    document.addEventListener('pause', handleVideo, { capture: true })
    document.addEventListener('ended', handleVideo, { capture: true })

    return () => {
      window.removeEventListener('mauyi:track', handleCustomTrack)
      document.removeEventListener('click', handleClick, { capture: true })
      document.removeEventListener('submit', handleSubmit, { capture: true })
      document.removeEventListener('change', handleChange, { capture: true })
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
    function handleBeforeUnload() {
      const maxScroll = Math.round((window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) * 100)
      void trackEvent({
        event_name: 'session_page_exited',
        properties: {
          time_on_page_ms: Math.round(performance.now()),
          max_scroll_estimate: Math.min(100, maxScroll),
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
