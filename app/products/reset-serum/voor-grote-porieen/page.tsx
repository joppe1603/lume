import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol Serum voor Grote Poriën — MAUYI Reset Serum',
  description:
    'Grote poriën verkleinen met retinol en niacinamide. MAUYI Reset Serum normaliseert talgproductie, versterkt de huidstructuur en maakt poriën zichtbaar kleiner — bewezen formule.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/voor-grote-porieen` },
  openGraph: {
    title: 'Retinol Serum voor Grote Poriën | MAUYI Reset Serum',
    description:
      'Niacinamide 10% + retinol 0.3% voor zichtbaar kleinere poriën. Parfumvrij, effectief bij overmatige talgproductie.',
    url: `${BASE_URL}/products/reset-serum/voor-grote-porieen`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum voor grote poriën' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'nl-NL',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Kunnen poriën echt kleiner worden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Poriën kunnen niet permanent worden verkleind — de grootte wordt grotendeels bepaald door genetica. Maar ze kunnen er zichtbaar kleiner uitzien: wanneer talgklieren minder talg produceren en de huidstructuur rond de poriën steviger wordt, valt het licht anders en ogen poriën kleiner. Niacinamide 10% en retinol 0.3% zijn de klinisch best onderbouwde ingrediënten hiervoor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe helpt niacinamide bij grote poriën?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niacinamide reguleert talgproductie en versterkt de huidstructuur rond poriën. Meerdere klinische studies tonen aan dat niacinamide 2%–10% de zichtbaarheid van poriën significant vermindert na 4–8 weken gebruik. MAUYI Reset Serum bevat 10% niacinamide — de hoogste effectieve concentratie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doet retinol voor poriën?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retinol versnelt celvernieuwing, waardoor ophoping van dode huidcellen in de poriën wordt voorkomen. Verstopte poriën worden groter. Retinol houdt poriën vrij en stimuleert collageen rondom de poriën — wat de structuur versterkt en poriën optisch verkleint.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt het voor ik resultaat zie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij consistent gebruik (dagelijks of 4–5× per week) zien de meeste mensen na 4–6 weken een merkbare vermindering van poriezichtbaarheid. Optimaal resultaat is zichtbaar na 8–12 weken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik Reset Serum gebruiken bij een vette huid met grote poriën?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, Reset Serum is uitstekend geschikt voor vette huid met grote poriën. Retinol normaliseert overmatige talgproductie, niacinamide reguleert talg en verkleint poriën zichtbaar. De formule is lichtgewicht en niet-comedogeen.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Retinol serum voor grote poriën. Niacinamide 10% + Retinol 0.3% + Bakuchiol 0.5% in één parfumvrije avondformule.',
  brand: { '@type': 'Brand', name: 'MAUYI' },
  image: `${BASE_URL}/reset-serum-new.jpg`,
  url: `${BASE_URL}/products/reset-serum`,
  offers: {
    '@type': 'Offer',
    price: '58.00',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: `${BASE_URL}/products/reset-serum`,
    seller: { '@type': 'Organization', name: 'MAUYI' },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'EUR' },
      shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'NL' },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 1, unitCode: 'DAY' },
        transitTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 3, unitCode: 'DAY' },
      },
    },
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'NL',
      returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
      merchantReturnDays: 30,
      returnMethod: 'https://schema.org/ReturnByMail',
      returnFees: 'https://schema.org/FreeReturn',
      merchantReturnLink: `${BASE_URL}/retourbeleid`,
    },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Reset Serum', item: `${BASE_URL}/products/reset-serum` },
    { '@type': 'ListItem', position: 3, name: 'Voor Grote Poriën', item: `${BASE_URL}/products/reset-serum/voor-grote-porieen` },
  ],
}

export default function VoorGrotePoriënPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />
      <main className="bg-[#FAF8F5]">

        {/* ── Hero ── */}
        <section className="bg-[#0A0908] text-white">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 mb-8 text-[11px] text-stone-600 tracking-wide">
                <Link href="/" className="hover:text-[#C9A96E] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/products/reset-serum" className="hover:text-[#C9A96E] transition-colors">Reset Serum</Link>
                <span>/</span>
                <span className="text-stone-500">Grote Poriën</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  Voor grote poriën
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Poriën zichtbaar kleiner.<br />
                <em className="italic text-[#C9A96E]">Bewezen formule.</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                Niacinamide 10% reguleert talgproductie en verkleint poriën zichtbaar.
                Retinol 0.3% houdt poriën vrij van ophoping en versterkt de huidstructuur eromheen.
                Samen de krachtigste combinatie voor poriezichtbaarheid.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Poriënverkleining', 'Talgregulatie', 'Niacinamide 10%', 'Parfumvrij'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-[#C9A96E] bg-[#C9A96E]/10 border border-[#C9A96E]/20 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/products/reset-serum"
                className="inline-flex items-center gap-2.5 bg-[#C9A96E] hover:bg-[#B8965C] text-[#0A0908] font-semibold text-[14px] tracking-[0.04em] px-7 py-3.5 rounded-xl transition-colors"
              >
                Bekijk Reset Serum
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </Link>
            </div>

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden lg:block hidden">
              <Image
                src="/reset-serum-new.jpg"
                alt="MAUYI Reset Serum voor grote poriën"
                fill
                className="object-cover object-center"
                sizes="50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/40 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* ── Het probleem ── */}
        <section className="bg-white border-b border-stone-100">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Het probleem</span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Waarom poriën<br />
                <em className="italic">zichtbaarder worden</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Porigrootte wordt bepaald door genetica, talgproductie en huidstructuur. Wanneer talgklieren
                overactief zijn, worden poriën opgespannen door de extra talg en opgehoopte dode huidcellen.
                Dat maakt ze groter en zichtbaarder.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Naarmate huid veroudert en collageen afneemt, verliest de huid rondom poriën zijn stevigheid —
                waardoor ze letterlijk uitzakken en groter lijken. Zonschade verergert dit proces aanzienlijk.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed">
                De oplossing is tweeledig: talgproductie reguleren én de huidstructuur rondom poriën versterken.
                Precies wat niacinamide en retinol samen aanpakken.
              </p>
            </div>
          </div>
        </section>

        {/* ── De formule ── */}
        <section className="bg-[#FAF8F5]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">De formule</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-4"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              De krachtigste combinatie<br />
              <em className="italic text-[#C9A96E]">voor poriënverkleining</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Elk ingrediënt pakt een andere oorzaak van grote poriën aan.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'Celvernieuwing & structuur',
                  uitleg:
                    'Versnelt celvernieuwing zodat poriën vrij blijven van ophoping. Stimuleert collageen rondom poriën voor stevigere huidstructuur. Klinisch bewezen de zichtbaarheid van poriën te verminderen.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'Talgregulatie & poriën',
                  uitleg:
                    'Klinisch onderbouwde werkzaamheid bij poriezichtbaarheid. Reguleert talgproductie, vermindert de grootte van met talg gevulde poriën en versterkt de huidbarrière. 10% — maximale concentratie.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'Ondersteuner',
                  uitleg:
                    'Versterkt de werking van retinol zonder extra irritatie. Bakuchiol heeft ook zelfstandige activiteit op celvernieuwing — wat de totale effectiviteit op poriën verhoogt.',
                  kleur: 'from-[#C9A96E]/20 to-[#C9A96E]/8',
                },
              ].map((item) => (
                <div
                  key={item.naam}
                  className={`bg-gradient-to-br ${item.kleur} rounded-2xl p-6 border border-stone-200/60`}
                >
                  <div className="text-[11px] font-bold text-[#C9A96E] tracking-[0.2em] mb-3">{item.nummer}</div>
                  <div className="text-[17px] font-semibold text-[#1A1A1A] mb-1" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {item.naam}
                  </div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#C9A96E] mb-4">{item.rol}</div>
                  <p className="text-[13px] text-[#6B6560] font-light leading-relaxed">{item.uitleg}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Voor wie ── */}
        <section className="bg-white border-t border-stone-100">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Voor wie</span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Reset Serum is bij uitstek<br />geschikt als je…
              </h2>
              <ul className="space-y-4">
                {[
                  'Zichtbare grote poriën hebt op neus, wangen of kin',
                  'Last hebt van een vette of combinatiehuid',
                  'Blackheads of verstopte poriën wil voorkomen',
                  'Meerdere afzonderlijke producten voor poriën wil samenvoegen',
                  'Geen agressieve chemische exfoliants wil gebruiken',
                  'Een consistente avondroutine wil opbouwen',
                ].map((punt) => (
                  <li key={punt} className="flex items-start gap-3">
                    <svg className="w-4 h-4 mt-0.5 text-[#C9A96E] shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8l4 4 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[14px] text-[#4A4540] font-light leading-relaxed">{punt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0A0908] rounded-2xl p-8 text-white">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-4">Gebruikstip</div>
              <h3 className="text-xl font-semibold mb-4 leading-snug" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Consistentie is alles
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                <div>
                  <span className="text-[#C9A96E] font-medium">Week 1–2:</span> 2–3× per week &apos;s avonds.
                  Houd niacinamide actief op je huid.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Week 3+:</span> Dagelijks gebruik voor
                  optimale talgregulatie en poriënverkleining.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Na 4–6 weken:</span> Merkbare vermindering
                  van poriezichtbaarheid.
                </div>
                <div className="pt-2 border-t border-white/10 text-stone-500 text-[12px]">
                  Overdag SPF verplicht — UV vergroot poriën door collageen af te breken.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-[#FAF8F5] border-t border-stone-100">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Veelgestelde vragen</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-10 leading-tight"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Grote poriën &amp; retinol
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Kunnen poriën echt kleiner worden?',
                  a: 'Poriën kunnen niet permanent worden verkleind — grootte wordt bepaald door genetica. Maar ze kunnen er zichtbaar kleiner uitzien: niacinamide 10% en retinol 0.3% verminderen de ophoping in poriën en versterken de huidstructuur eromheen, waardoor poriën optisch kleiner ogen.',
                },
                {
                  v: 'Hoe helpt niacinamide bij grote poriën?',
                  a: 'Niacinamide reguleert talgproductie en versterkt de huidstructuur rondom poriën. Klinische studies tonen dat niacinamide 2%–10% de zichtbaarheid van poriën significant vermindert na 4–8 weken. MAUYI gebruikt 10% — de hoogste effectieve concentratie.',
                },
                {
                  v: 'Wat doet retinol voor poriën?',
                  a: 'Retinol versnelt celvernieuwing, waardoor ophoping in poriën wordt voorkomen. Verstopte poriën worden groter — retinol houdt ze vrij. Retinol stimuleert ook collageen rondom poriën, wat de structuur versterkt en ze optisch verkleint.',
                },
                {
                  v: 'Hoe lang duurt het voor ik resultaat zie?',
                  a: 'Bij dagelijks of 4–5× per week gebruik zien de meeste mensen na 4–6 weken een merkbare vermindering van poriezichtbaarheid. Optimaal resultaat na 8–12 weken.',
                },
                {
                  v: 'Kan ik Reset Serum gebruiken bij vette huid?',
                  a: 'Ja, uitstekend. Retinol normaliseert overmatige talgproductie, niacinamide reguleert talg en verkleint poriën. De formule is lichtgewicht en niet-comedogeen — werkt juist goed bij vette huid.',
                },
              ].map((item) => (
                <details key={item.v} className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                    <span className="text-[15px] font-medium text-[#1A1A1A]">{item.v}</span>
                    <svg
                      className="w-4 h-4 text-[#C9A96E] shrink-0 transition-transform group-open:rotate-180"
                      viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
                    >
                      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-[14px] text-[#6B6560] font-light leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#0A0908]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">
                MAUYI Reset Serum
              </div>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-white leading-tight"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Poriën kleiner,<br />
                <em className="italic text-[#C9A96E]">huid egaler.</em>
              </h2>
              <p className="mt-3 text-stone-500 font-light text-[14px]">
                30 ml · €58 · Gratis verzending vanaf €45
              </p>
            </div>
            <div className="flex flex-col sm:items-end gap-3 shrink-0">
              <Link
                href="/products/reset-serum"
                className="inline-flex items-center gap-2.5 bg-[#C9A96E] hover:bg-[#B8965C] text-[#0A0908] font-semibold text-[14px] tracking-[0.04em] px-8 py-4 rounded-xl transition-colors whitespace-nowrap"
              >
                Bestel Reset Serum — €58
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </Link>
              <span className="text-stone-600 text-[12px] font-light text-center sm:text-right">
                Parfumvrij · Poriënverkleining · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
