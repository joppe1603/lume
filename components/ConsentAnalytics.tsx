'use client'

import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { getConsent } from '@/lib/tracking'

export default function ConsentAnalytics() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    function sync() {
      setEnabled(getConsent().analytics)
    }

    sync()
    window.addEventListener('mauyi:consent-updated', sync)
    return () => window.removeEventListener('mauyi:consent-updated', sync)
  }, [])

  return enabled ? <Analytics /> : null
}

