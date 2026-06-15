import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol voor Combinatiehuid — T-Zone en Droge Wangen Tegelijk | MAUYI',
  description:
    'Combinatiehuid reageert anders op retinol: vette T-zone droogt uit, droge wangen worden gevoelig. MAUYI Reset Serum balanceert beide zones — retinol 0.3% + niacinamide 10% + bakuchiol 0.5%.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/voor-combinatiehuid` },
  openGraph: {
    title: 'Retinol voor Combinatiehuid | MAUYI Reset Serum',
    description:
      'T-zone vet, wangen droog — combinatiehuid en retinol is een lastige combinatie. Reset Serum balanceert beide zones zonder één ervan te overbelasten.',
    url: `${BASE_URL}/products/reset-serum/voor-combinatiehuid`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum voor combinatiehuid' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Kan ik retinol gebruiken als ik combinatiehuid heb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, maar de aanpak is anders dan bij huid met één type. Combinatiehuid heeft een vette T-zone en droge of normale wangen. Retinol kan de T-zone nog meer uitdrogen als het te sterk is, terwijl de droge zones gevoeliger worden. Een lagere concentratie (0.3%) met niacinamide als buffer werkt voor beide zones goed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom droogt mijn T-zone uit met retinol terwijl die al vet is?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dit is een misverstand: vette huid produceert veel sebum, maar kan tegelijkertijd uitgedroogd zijn. Retinol versnelt celvernieuwing en dat kan tijdelijk het vochtgehalte verlagen. De T-zone reageert hier zichtbaarder op dan andere zones. Niacinamide reguleert sebum én ondersteunt de huidbarrière, waardoor dit effect minimaal blijft.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik retinol anders aanbrengen op combinatiehuid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Je kunt retinol gewoon gelijkmatig over het gehele gezicht aanbrengen — de formule is zo ontworpen dat het op beide zones werkt. Breng na het serum altijd een vochtinbrengende crème aan, ook op de T-zone. Veel mensen met combinatiehuid slaan de T-zone over bij hydratatie — dit vergist. Droge huid produceert juist méér sebum als compensatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe helpt niacinamide bij combinatiehuid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niacinamide (vitamine B3) remt de transfer van melanosomen naar huidcellen en reguleert talgproductie actief. Studies tonen aan dat 10% niacinamide de sebumproductie significant verlaagt na 4 weken gebruik. Op droge zones versterkt het de ceramidelaag en verbetert het vochtbehoud. Het is daarmee het ideale ingrediënt voor combinatiehuid: twee tegengestelde problemen, één oplossing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer zie ik resultaat als ik combinatiehuid heb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De T-zone verbetert doorgaans als eerste: minder glans, kleinere poriën en minder verstoppingen. Na 4–6 weken. Droge wangen worden zachter en egaler na 6–8 weken. Volledige balans tussen beide zones is vaak zichtbaar na 10–12 weken consistent gebruik.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Retinol serum voor combinatiehuid. Retinol 0.3% + Niacinamide 10% (sebumregulator) + Bakuchiol 0.5% balanceert T-zone en droge wangen in één parfumvrije avondformule.',
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
    { '@type': 'ListItem', position: 3, name: 'Voor Combinatiehuid', item: `${BASE_URL}/products/reset-serum/voor-combinatiehuid` },
  ],
}

export default function VoorCombinatiehuidPage() {
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
                <span className="text-stone-500">Voor Combinatiehuid</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  T-zone + droge zones
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Retinol dat werkt voor<br />
                <em className="italic text-[#C9A96E]">twee gezichten tegelijk.</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                Combinatiehuid is de moeilijkste huid om retinol voor te kiezen: de T-zone
                is al vet, de wangen zijn droog of normaal. De meeste serums overbelasten één zone.
                Reset Serum balanceert beide — zonder compromissen.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Combinatiehuid', 'T-zone balans', 'Sebumregulatie', 'Parfumvrij'].map((tag) => (
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
                alt="MAUYI Reset Serum voor combinatiehuid T-zone balans"
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
                Waarom de meeste retinols<br />
                <em className="italic">combinatiehuid niet begrijpen</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Combinatiehuid is geen één type huid — het zijn twee zones die tegelijkertijd
                aandacht vragen. De T-zone (voorhoofd, neus, kin) produceert overmatig sebum,
                wat leidt tot glans, verstopte poriën en mee-eters. De wangen en slapen zijn normaal
                tot droog, met een kwetsbaarder barrièrelaag.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Standaard retinolserums zijn geformuleerd voor één huidtype. Hogere concentraties
                drogen de wangen uit. Olie-gebaseerde formules verergeren de T-zone. Je kunt niet
                winnen — tot je een serum gebruikt dat beide problemen aanpakt vanuit de formule zelf.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed">
                Reset Serum combineert retinol 0.3% met niacinamide 10% — het enige ingrediënt dat
                zowel <strong className="font-medium text-[#1A1A1A]">sebum reguleert</strong> als de
                barrière versterkt. Één formule. Twee zones. Geen compromis.
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
              Drie ingrediënten voor<br />
              <em className="italic text-[#C9A96E]">balans in beide zones</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Elk ingrediënt lost een ander probleem op — samen zorgen ze voor balans zonder dat
              één zone teveel of te weinig krijgt.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'De porie-verfijner',
                  uitleg:
                    'Normaliseert de keratinisatie in poriën — de ophoping van dode huidcellen die verstoppingen veroorzaken in de T-zone. Tegelijkertijd stimuleert het collageenproductie rond poriën, waardoor ze strakker worden. 0.3% is effectief zonder de droge zones te irriteren.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'De sebumbalancer',
                  uitleg:
                    'Remt talgproductie actief door de expressie van lipasen te verlagen. Studies tonen 16% minder sebumuitscheiding na 4 weken bij 10% gebruik. Op droge zones versterkt het ceramiden en verbetert vochtbehoud. Het is het ideale ingrediënt voor combinatiehuid: één molecule, twee tegengestelde problemen opgelost.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'De verzachtende kracht',
                  uitleg:
                    'Plantaardig retinol-equivalent met anti-inflammatoire eigenschappen. Kalmeert de droge, licht geïrriteerde zones die gevoeliger zijn bij combinatiehuid. Versterkt het anti-aging effect van retinol zonder de tolerantiedrempel te verhogen — zodat ook droge wangen comfortabel blijven.',
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
                Reset Serum is gemaakt<br />voor jou als je…
              </h2>
              <ul className="space-y-4">
                {[
                  'Combinatiehuid hebt: vette T-zone, droge of normale wangen',
                  'Eerder retinol probeerde dat één zone overschaduwde',
                  'Last hebt van glans en verstopte poriën maar ook droge plekken',
                  'Balans wil zonder vijf verschillende producten voor elke zone',
                  'Anti-aging resultaten wil zonder je T-zone verder te verstoren',
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
                Hydrateer ook de T-zone.
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                <div>
                  <span className="text-[#C9A96E] font-medium">De fout die mensen maken:</span> de T-zone
                  overslaan bij het aanbrengen van moisturizer omdat die zone al vet is. Dit is contraproductief.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">De biologie:</span> uitgedroogde huid
                  compenseert door méér sebum te produceren. Door ook de T-zone te hydrateren, daalt de
                  sebumproductie op termijn.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Aanpak:</span> breng Reset Serum gelijkmatig
                  aan over het gehele gezicht. Daarna een lichte, niet-comedogene moisturizer — ook op de
                  T-zone. Consistentie maakt het verschil na 4–6 weken.
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
              Retinol en combinatiehuid
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Kan ik retinol gebruiken als ik combinatiehuid heb?',
                  a: 'Ja, maar de aanpak is anders. Combinatiehuid heeft een vette T-zone en droge of normale wangen. Retinol kan de T-zone verder uitdrogen als het te sterk is. Een lagere concentratie (0.3%) met niacinamide als buffer werkt voor beide zones goed.',
                },
                {
                  v: 'Waarom droogt mijn T-zone uit met retinol terwijl die al vet is?',
                  a: 'Vette huid produceert veel sebum maar kan tegelijk uitgedroogd zijn. Retinol versnelt celvernieuwing en verlaagt tijdelijk het vochtgehalte. Niacinamide reguleert sebum én ondersteunt de barrière, waardoor dit effect minimaal blijft.',
                },
                {
                  v: 'Moet ik retinol anders aanbrengen op combinatiehuid?',
                  a: 'Breng het gewoon gelijkmatig aan over het gehele gezicht. Breng daarna altijd een vochtinbrengende crème aan, ook op de T-zone. Droge huid produceert juist méér sebum als compensatie — ook de T-zone hydrateren is essentieel.',
                },
                {
                  v: 'Hoe helpt niacinamide bij combinatiehuid?',
                  a: 'Niacinamide remt talgproductie actief. Studies tonen aan dat 10% niacinamide de sebumproductie significant verlaagt na 4 weken. Op droge zones versterkt het de ceramidelaag en verbetert het vochtbehoud — ideaal voor combinatiehuid.',
                },
                {
                  v: 'Wanneer zie ik resultaat als ik combinatiehuid heb?',
                  a: 'De T-zone verbetert doorgaans als eerste: minder glans en kleinere poriën na 4–6 weken. Droge wangen worden zachter na 6–8 weken. Volledige balans tussen beide zones is vaak zichtbaar na 10–12 weken consistent gebruik.',
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
                T-zone en wangen.<br />
                <em className="italic text-[#C9A96E]">Eindelijk in balans.</em>
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
                Parfumvrij · Combinatiehuid · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
