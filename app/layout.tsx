import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import SiteChrome from '@/components/SiteChrome'
import Providers from '@/components/Providers'
import CookieBanner from '@/components/CookieBanner'
import NewsletterPopup from '@/components/NewsletterPopup'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
})

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'MAUYI — Wetenschappelijk Geformuleerde Huidverzorging Nederland',
    template: '%s | MAUYI',
  },
  description:
    'MAUYI Reset Serum: Retinol 0.3% + Niacinamide 10% + Bakuchiol in één parfumvrije formule voor gevoelige huid. Wetenschappelijk geformuleerde huidverzorging. €58, gratis verzending.',
  authors: [{ name: 'MAUYI B.V.', url: BASE_URL }],
  creator: 'MAUYI B.V.',
  publisher: 'MAUYI B.V.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: BASE_URL,
    siteName: 'MAUYI',
    title: 'MAUYI — Wetenschappelijk Geformuleerde Huidverzorging Nederland',
    description:
      'Reset Serum: Retinol 0.3% + Niacinamide 10% + Bakuchiol. Parfumvrij, voor gevoelige huid. €58.',
    images: [
      {
        url: '/reset-serum-new.jpg',
        width: 1200,
        height: 630,
        alt: 'MAUYI Reset Serum — Retinol 0.3% + Niacinamide 10% + Bakuchiol',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAUYI — Retinol Serum Nederland | Wetenschappelijk Geformuleerd',
    description: 'Reset Serum: Retinol 0.3% + Niacinamide 10% + Bakuchiol. Parfumvrij, voor gevoelige huid. €58.',
    images: ['/reset-serum-new.jpg'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MAUYI',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  description: 'MAUYI is een Nederlands premium skincare merk dat zich richt op minimale, wetenschappelijk onderbouwde formules voor de gevoelige huid. Het vlaggenschipproduct is het MAUYI Reset Serum: een combinatie van Retinol 0.3%, Niacinamide 10% en Bakuchiol in één parfumvrije, alcoholvrije formule.',
  foundingLocation: { '@type': 'Place', addressCountry: 'NL', addressLocality: 'Nederland' },
  knowsAbout: ['retinol', 'niacinamide', 'bakuchiol', 'gevoelige huid', 'huidbarrière', 'anti-aging skincare', 'parfumvrije huidverzorging'],
  contactPoint: { '@type': 'ContactPoint', email: 'hallo@mauyi.nl', contactType: 'customer service' },
  sameAs: ['https://www.instagram.com/mauyiskincare', 'https://www.tiktok.com/@mauyi'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MAUYI',
  url: BASE_URL,
  description: 'Wetenschappelijk geformuleerde huidverzorging voor gevoelige huid. Retinol, Niacinamide en Bakuchiol in parfumvrije formules.',
  inLanguage: 'nl-NL',
  publisher: {
    '@type': 'Organization',
    name: 'MAUYI',
    url: BASE_URL,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <SiteChrome />
        <Providers>
          {children}
        </Providers>
        <NewsletterPopup />
        <CookieBanner />
      </body>
    </html>
  )
}
