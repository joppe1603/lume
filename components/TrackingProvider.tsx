'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import {
  buildFingerprint,
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

  useEffect(() => {
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
      },
    })
  }, [pathname, searchParams])

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const element = nearestTrackableElement(event.target)
      if (!element) return

      const anchor = element.closest('a')
      const href = anchor?.getAttribute('href') ?? null
      const isOutbound = href ? /^https?:\/\//.test(href) && !href.includes(window.location.host) : false
      const eventName = element.getAttribute('data-track') ?? (isOutbound ? 'outbound_link_clicked' : 'ui_clicked')

      void trackEvent({
        event_name: eventName,
        properties: {
          label: textLabel(element),
          tag: element.tagName.toLowerCase(),
          href,
          outbound: isOutbound,
          id: element.id || undefined,
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

    document.addEventListener('click', handleClick, { capture: true })
    document.addEventListener('submit', handleSubmit, { capture: true })
    document.addEventListener('change', handleChange, { capture: true })
    document.addEventListener('play', handleVideo, { capture: true })
    document.addEventListener('pause', handleVideo, { capture: true })
    document.addEventListener('ended', handleVideo, { capture: true })

    return () => {
      document.removeEventListener('click', handleClick, { capture: true })
      document.removeEventListener('submit', handleSubmit, { capture: true })
      document.removeEventListener('change', handleChange, { capture: true })
      document.removeEventListener('play', handleVideo, { capture: true })
      document.removeEventListener('pause', handleVideo, { capture: true })
      document.removeEventListener('ended', handleVideo, { capture: true })
    }
  }, [])

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
