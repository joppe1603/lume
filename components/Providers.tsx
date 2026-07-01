'use client'

import { Suspense } from 'react'
import { CartProvider } from '@/contexts/CartContext'
import ConsentAnalytics from '@/components/ConsentAnalytics'
import SlideCart from '@/components/SlideCart'
import TrackingProvider from '@/components/TrackingProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Suspense fallback={null}>
        <TrackingProvider />
      </Suspense>
      <ConsentAnalytics />
      {children}
      <SlideCart />
    </CartProvider>
  )
}
