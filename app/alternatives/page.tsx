import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'MAUYI als Alternatief voor Bekende Merken — Eerlijke Vergelijkingen',
  description: 'MAUYI Reset Serum vergeleken met The Ordinary, CeraVe, La Roche-Posay, Paula\'s Choice en Indeed Labs. Eerlijke vergelijkingen op formule, prijs en resultaat.',
  alternates: { canonical: `${BASE_URL}/alternatives` },
  openGraph: {
    title: 'MAUYI als Alternatief — Alle Vergelijkingen',
    description: 'Eerlijke vergelijkingen tussen MAUYI Reset Serum en de bekendste retinol-merken. Formuleverschillen, prijzen en voor wie welk merk het beste werkt.',
    url: `${BASE_URL}/alternatives`,
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Alternatieven', item: `${BASE_URL}/alternatives` },
  ],
}

const competitors = [
  {
    href: '/alternatives/the-ordinary',
    name: 'The Ordinary',
    tagline: 'alternatief voor losse ingrediënten',
    detail: 'The Ordinary verkoopt losse actieve ingrediënten. MAUYI combineert retinol, niacinamide en hyaluronzuur in één gebufferde formule — geen combinatiepuzzel.',
    searchVolume: '~800/mnd',
    reason: 'Te veel keuze, geen duidelijke routine',
  },
  {
    href: '/alternatives/cerave',
    name: 'CeraVe',
    tagline: 'alternatief voor milde retinol',
    detail: 'CeraVe Resurfacing Retinol is mild maar bevat een lage, niet-vermelde retinolconcentratie. MAUYI biedt een hogere, transparante concentratie (0.3%) met bakuchiol als versterker.',
    searchVolume: '~300/mnd',
    reason: 'Te mild, resultaten blijven uit',
  },
  {
    href: '/alternatives/la-roche-posay',
    name: 'La Roche-Posay',
    tagline: 'alternatief voor Redermic R',
    detail: 'La Roche-Posay Redermic R heeft 0.3% retinol maar bevat parfum en geen effectieve niacinamide-concentratie. MAUYI is parfumvrij en gebufferd met 10% niacinamide.',
    searchVolume: '~200/mnd',
    reason: 'Parfum in formule, minder niacinamide',
  },
  {
    href: '/alternatives/paulas-choice',
    name: "Paula's Choice",
    tagline: "alternatief voor Paula's Choice retinol",
    detail: "Paula's Choice biedt 1% retinol — vaak te sterk voor dagelijks gebruik. MAUYI gebruikt 0.3% die klinisch effectief is zonder de irritatiedrempel te overschrijden.",
    searchVolume: '~150/mnd',
    reason: 'Te hoge concentratie, irritatie bij gevoelige huid',
  },
  {
    href: '/alternatives/indeed-labs',
    name: 'Indeed Labs',
    tagline: 'alternatief voor Retinol Reface',
    detail: 'Indeed Labs vermeldt de retinolconcentratie niet op het etiket. MAUYI is volledig transparant: retinol 0.3%, niacinamide 10%, bakuchiol 0.5% — alles vermeld.',
    searchVolume: '~100/mnd',
    reason: 'Ondoorzichtige formulering',
  },
]

export default function AlternativesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main className="bg-[#FAF8F5] min-h-screen">

        {/* Breadcrumb */}
        <div className="bg-white border-b border-stone-100">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 py-4">
            <nav className="flex items-center gap-2 text-xs text-[#9A9590]">
              <Link href="/" className="hover:text-[#C9A96E] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#1A1A1A] font-medium">Alternatieven</span>
            </nav>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16">

          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Merkvergelijkingen</span>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1A1A1A] leading-[1.1] mb-5"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              MAUYI als alternatief voor bekende merken
            </h1>
            <p className="text-[17px] text-[#6B6560] font-light leading-relaxed max-w-2xl">
              Eerlijke vergelijkingen tussen MAUYI Reset Serum en de merken die je misschien al kent. Geen marketingtaal — formules, concentraties en voor wie welk merk het beste past.
            </p>
          </div>

          {/* Why people compare */}
          <div className="bg-white rounded-2xl border border-stone-100 px-7 py-7 mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A9590] mb-4">Waarom mensen vergelijken</p>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { label: 'Formule', text: 'Welke ingrediënten zitten erin en in welke concentraties?' },
                { label: 'Resultaat', text: 'Welk merk geeft het meest zichtbaar resultaat op lange termijn?' },
                { label: 'Gemak', text: 'Hoeveel producten heb je nodig voor een complete routine?' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[13px] font-semibold text-[#1A1A1A] mb-1">{item.label}</p>
                  <p className="text-[13px] text-[#6B6560] font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Competitor cards */}
          <div className="space-y-4 mb-14">
            {competitors.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block bg-white rounded-2xl border border-stone-100 px-6 py-6 hover:border-[#C9A96E]/40 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-[16px] font-semibold text-[#1A1A1A] group-hover:text-[#C9A96E] transition-colors">
                        {c.name}
                      </p>
                      <span className="text-[11px] text-[#9A9590] font-light">— {c.tagline}</span>
                    </div>
                    <p className="text-[14px] text-[#5C5754] font-light leading-relaxed mb-3">
                      {c.detail}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-[11px] text-[#9A9590]">
                        Meest genoemde reden: <span className="text-[#6B6560] font-medium">{c.reason}</span>
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0 text-[#C9A96E] text-[18px] mt-1 group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Methodology note */}
          <div className="bg-[#1A1A1A] rounded-2xl px-7 py-7 mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">Over deze vergelijkingen</p>
            <p className="text-stone-300 text-[15px] font-light leading-relaxed">
              Elke vergelijking is gebaseerd op openbaar beschikbare ingrediëntenlijsten, klinisch gepubliceerde concentraties en onze eigen formulekeuzes. We erkennen de sterke punten van elk merk. Het doel is niet om anderen af te breken — maar om je een eerlijk beeld te geven zodat jij kunt kiezen wat bij jouw huid past.
            </p>
          </div>

          {/* Cross-link to vs page */}
          <div className="border border-stone-100 rounded-2xl p-6 mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A9590] mb-4">Directe vergelijking</p>
            <Link href="/vs/the-ordinary" className="flex items-start gap-3 group">
              <div>
                <p className="text-[14px] font-semibold text-[#1A1A1A] group-hover:text-[#C9A96E] transition-colors">
                  MAUYI vs The Ordinary — uitgebreide vergelijking →
                </p>
                <p className="text-[13px] text-[#9A9590] font-light mt-0.5">
                  Ingredient-voor-ingredient vergelijking, met prijsberekening en voor-wie-tabel
                </p>
              </div>
            </Link>
          </div>

          {/* CTA */}
          <div className="bg-white rounded-2xl border border-stone-100 px-6 py-8 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">MAUYI Reset Serum</p>
            <p className="text-[#1A1A1A] text-[20px] font-semibold mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Retinol 0.3% · Niacinamide 10% · Bakuchiol 0.5%
            </p>
            <p className="text-[#6B6560] text-[14px] font-light mb-6">
              Één formule. Alle concentraties vermeld. Parfumvrij.
            </p>
            <Link
              href="/products/reset-serum"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-3.5 rounded-xl text-[14px] font-semibold hover:bg-[#2A2A2A] transition-colors"
            >
              Bekijk Reset Serum →
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
