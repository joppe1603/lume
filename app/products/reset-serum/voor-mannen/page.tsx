import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol Serum voor Mannen — MAUYI Reset Serum',
  description:
    'Retinol voor mannen die huidveroudering, grove poriën en ongelijke textuur willen aanpakken. MAUYI Reset Serum: retinol 0.3% + niacinamide 10% + bakuchiol. Parfumvrij, eenvoudige routine.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/voor-mannen` },
  openGraph: {
    title: 'Retinol Serum voor Mannen | MAUYI Reset Serum',
    description:
      'Één serum voor rimpels, poriën en huidtextuur. Retinol 0.3% + niacinamide 10% + bakuchiol 0.5%. Parfumvrij, effectief.',
    url: `${BASE_URL}/products/reset-serum/voor-mannen`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum voor mannen' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'nl-NL',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hebben mannen baat bij retinol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Mannenhuid veroudert net als vrouwenhuid, maar op een andere manier: mannenhuid is gemiddeld 20–25% dikker en produceert meer talg — wat grotere poriën en meer oneffenheden verklaart. Retinol normaliseert talgproductie, verkleint poriën zichtbaar en versnelt celvernieuwing. MAUYI Reset Serum is door zijn parfumvrije, minimalistische formule ook praktisch voor een mannelijke routine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is retinol geschikt voor huid die dagelijks scheert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ja, maar gebruik retinol niet direct voor of na het scheren als je huid geïrriteerd is. Scheren verwijdert een dunne laag huid — retinol op vers geschoren huid kan branden of irriteren. Gebruik Reset Serum 's avonds, na scheren, op droge en gekalmeerde huid.",
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe pas ik retinol in een eenvoudige mannenroutine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Eenvoudig: reinig 's avonds, dep droog, breng een dunne laag Reset Serum aan, eindig met een vochtinbrengende crème. Overdag: reinigen + SPF. Dat is de volledige routine. Geen tien producten nodig.",
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel zie ik resultaat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Omdat mannenhuid gemiddeld dikker is, zien veel mannen iets later resultaat dan vrouwen. Verwacht na 6–8 weken een egaler huidtextuur en kleinere poriën. Na 12 weken zijn verbeteringen in rimpeldiepte en huidtoon duidelijk zichtbaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik retinol combineren met aftershave?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gebruik geen aftershave met alcohol direct vóór retinol. Alcohol droogt en irriteert de huid — retinol daar bovenop geeft dubbele irritatie. Gebruik in de ochtend aftershave als je wil, maar retinol hoort in de avondroutine, los van aftershave.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Retinol serum voor mannen. Retinol 0.3% + Niacinamide 10% + Bakuchiol 0.5% in één parfumvrije avondformule.',
  brand: { '@type': 'Brand', name: 'MAUYI' },
  image: `${BASE_URL}/reset-serum-new.jpg`,
  url: `${BASE_URL}/products/reset-serum`,
  offers: {
    '@type': 'Offer',
    price: '58.00',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: `${BASE_URL}/products/reset-serum`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Reset Serum', item: `${BASE_URL}/products/reset-serum` },
    { '@type': 'ListItem', position: 3, name: 'Voor Mannen', item: `${BASE_URL}/products/reset-serum/voor-mannen` },
  ],
}

export default function VoorMannenPage() {
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
                <span className="text-stone-500">Voor Mannen</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  Voor mannen
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Retinol serum.<br />
                <em className="italic text-[#C9A96E]">Zonder poespas.</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                Grove poriën, ongelijke textuur, beginnende rimpels — retinol is het actieve ingrediënt
                met de meeste klinische onderbouwing. Reset Serum: één flesje, één routine,
                zichtbaar resultaat.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Parfumvrij', 'Eenvoudige routine', 'Poriënverkleining', 'Anti-aging'].map((tag) => (
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
                alt="MAUYI Reset Serum voor mannen"
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
                Mannenhuid veroudert anders,<br />
                <em className="italic">maar ook</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Mannenhuid is gemiddeld 20–25% dikker dan vrouwenhuid en produceert meer talg — dit leidt
                tot grotere poriën, meer oneffenheden en een grovere textuur. Tegelijkertijd veroudert
                mannenhuid ook: rond het 35ste levensjaar neemt collageenproductie aantoonbaar af.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Dagelijks scheren beschadigt daarnaast de huidbarrière subtiel, wat irritatie en
                oneffenheden in de hand werkt. De meeste huidverzorgingsproducten zijn niet ontworpen
                voor deze specifieke combinatie.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed">
                Retinol pakt talgproductie, celvernieuwing en collageenstimulatie tegelijk aan.
                Niacinamide ondersteunt de barrière. Samen in één formule — geen ingewikkelde routine nodig.
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
              Drie ingrediënten,<br />
              <em className="italic text-[#C9A96E]">één resultaat</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Geen marketinglijst. Drie actieve ingrediënten die elk een specifiek probleem aanpakken.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'Kernaanpak',
                  uitleg:
                    'Normaliseert talgproductie, versnelt celvernieuwing en stimuleert collageen. Pakt poriën, textuur en rimpels tegelijkertijd aan. 0.3% — effectief zonder overdreven irritatie.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'Huidbarrière & poriën',
                  uitleg:
                    'Vermindert porigrootte zichtbaar, reguleert talgproductie en versterkt de huidbarrière die door dagelijks scheren onder druk staat. Vermindert ook roodheid.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'Tolerantie-opbouw',
                  uitleg:
                    'Plantaardig actief dat retinol versterkt en de huid helpt wennen. Mannen die retinol voor het eerst gebruiken bouwen zo sneller tolerantie op zonder overmatige schilfering.',
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
                Reset Serum is geschikt<br />als je…
              </h2>
              <ul className="space-y-4">
                {[
                  'Man bent en begint met actieve huidverzorging',
                  'Last hebt van grove poriën of een vette T-zone',
                  'Scheerirritatie of ongelijke huidtextuur wil verminderen',
                  'Beginnende rimpels of huidverslapping wil aanpakken',
                  'Geen geurende producten wil — Reset Serum is parfumvrij',
                  'Eén avondroutine wil zonder veertien stappen',
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
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-4">De mannenroutine</div>
              <h3 className="text-xl font-semibold mb-4 leading-snug" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Eenvoudig en effectief
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                <div>
                  <span className="text-[#C9A96E] font-medium">Ochtend:</span> Reinigen + SPF.
                  Dat is alles.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Avond:</span> Reinigen, dep droog,
                  dunne laag Reset Serum, vochtinbrengende crème.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Opbouw:</span> Start met 2–3×
                  per week, bouw op naar dagelijks gebruik.
                </div>
                <div className="pt-2 border-t border-white/10 text-stone-500 text-[12px]">
                  Na scheren, wacht 15–20 minuten voor je retinol aanbrengt op geïrriteerde huid.
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
              Retinol voor mannen
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Hebben mannen baat bij retinol?',
                  a: 'Ja. Mannenhuid veroudert net als vrouwenhuid en heeft dezelfde problemen: poriën, textuur, rimpels. Retinol normaliseert talgproductie, verkleint poriën en stimuleert collageen. MAUYI Reset Serum is parfumvrij en praktisch voor een eenvoudige routine.',
                },
                {
                  v: 'Is retinol geschikt als ik dagelijks scheer?',
                  a: "Ja, maar gebruik retinol niet direct na het scheren op geïrriteerde huid. Wacht 15–20 minuten of gebruik het 's avonds ruim na het scheren. Scheren verwijdert subtiel een laag huid — retinol op verse schaafwonden kan branden.",
                },
                {
                  v: 'Hoe pas ik retinol in een eenvoudige routine?',
                  a: "Eenvoudig: 's avonds reinigen, dep droog, dunne laag Reset Serum, vochtinbrengende crème. Overdag: reinigen + SPF. Geen tien producten nodig.",
                },
                {
                  v: 'Hoe snel zie ik resultaat?',
                  a: 'Mannenhuid is gemiddeld dikker, waardoor resultaten iets later zichtbaar zijn. Verwacht na 6–8 weken een egaler huidtextuur en kleinere poriën. Na 12 weken zijn rimpelverbetering en huidtoon duidelijk zichtbaar.',
                },
                {
                  v: 'Kan ik retinol combineren met aftershave?',
                  a: 'Gebruik geen aftershave met alcohol direct vóór retinol. Alcohol irriteert en droogt de huid — retinol daaroverheen geeft dubbele irritatie. Gebruik in de ochtend aftershave als je wil, maar retinol hoort in de avondroutine.',
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
                Eén flesje.<br />
                <em className="italic text-[#C9A96E]">Alle resultaten.</em>
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
                Parfumvrij · Voor mannen · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
