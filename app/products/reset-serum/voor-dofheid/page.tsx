import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol Serum tegen Doffe Huid — MAUYI Reset Serum',
  description:
    'Doffe huid aanpakken met retinol en niacinamide. MAUYI Reset Serum versnelt celvernieuwing voor meer glans en een egaler huidtoon — zichtbaar resultaat na 4–6 weken. Parfumvrij.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/voor-dofheid` },
  openGraph: {
    title: 'Retinol Serum tegen Doffe Huid | MAUYI Reset Serum',
    description:
      'Doffe huid aanpakken: retinol 0.3% versnelt celvernieuwing, niacinamide 10% verbetert huidglans. Zichtbaar resultaat na 4–6 weken.',
    url: `${BASE_URL}/products/reset-serum/voor-dofheid`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum tegen doffe huid' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'nl-NL',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom ziet mijn huid er dof uit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Doffe huid ontstaat wanneer dode huidcellen ophopen op het huidoppervlak en licht niet gelijkmatig reflecteren. Dit gebeurt naarmate celvernieuwing vertraagt (bij ouder worden), maar ook bij stress, slaaptekort, dehydratatie en overmatig zonlicht. Retinol versnelt celvernieuwing en verwijdert de opgehoopte laag — direct meer glans.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe helpt retinol bij doffe huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retinol versnelt celvernieuwing significant: de cyclus van 28–45 dagen wordt teruggebracht naar 14–21 dagen bij consistent gebruik. Dit betekent dat dode huidcellen sneller worden vervangen door nieuwe, verse cellen — wat direct bijdraagt aan een stralende, egale huidtint.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doet niacinamide voor huidglans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niacinamide remt de overdracht van melanine naar huidcellen, wat zorgt voor een egaler huidtoon. Daarnaast versterkt het de huidbarrière en verbetert het de hydratatie — een gehydrateerde huid reflecteert licht beter en ziet er stralender uit. Bij 10% niacinamide zijn deze effecten klinisch significant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel verdwijnt doffe huid met retinol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste gebruikers merken na 3–4 weken een zichtbaar egaler en stralender huidtint. De volle glans-effecten van retinol op celvernieuwing zijn zichtbaar na 6–8 weken consistent gebruik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik Reset Serum combineren met vitamine C voor meer glans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ja, maar gebruik ze niet tegelijkertijd. Vitamine C is een dagproduct (antioxidant, UV-bescherming), retinol is een avondproduct. Zo vermijd je pH-conflicten en irritatie. Gebruik vitamine C 's ochtends, Reset Serum 's avonds — optimale combinatie voor huidglans.",
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Retinol serum voor doffe huid. Retinol 0.3% + Niacinamide 10% + Bakuchiol 0.5% voor celvernieuwing en huidglans.',
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
    { '@type': 'ListItem', position: 3, name: 'Voor Doffe Huid', item: `${BASE_URL}/products/reset-serum/voor-dofheid` },
  ],
}

export default function VoorDofheidPage() {
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
                <span className="text-stone-500">Doffe Huid</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  Tegen doffe huid
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Van doffe huid naar<br />
                <em className="italic text-[#C9A96E]">zichtbare glans.</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                Doffe huid wordt veroorzaakt door opgehoopte dode huidcellen die licht niet gelijkmatig
                reflecteren. Retinol versnelt celvernieuwing — nieuwe cellen komen sneller aan het oppervlak.
                Niacinamide zorgt voor een egaler huidtoon. Samen: zichtbare glans.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Huidglans', 'Celvernieuwing', 'Egale huidtoon', 'Parfumvrij'].map((tag) => (
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
                alt="MAUYI Reset Serum tegen doffe huid"
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
                Waarom huid<br />
                <em className="italic">dof wordt</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Elk celvernieuwingsproces laat dode huidcellen achter op het oppervlak. Bij jonge huid
                (28-daagse cyclus) worden deze snel afgestoten. Naarmate je ouder wordt, vertraagt die
                cyclus tot 45–60 dagen — dode cellen hopen op, licht reflecteert ongelijkmatig.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Stress, slaaptekort, dehydratatie en UV-schade versterken dit effect. Het resultaat:
                een grijsachtige, matte huid die er vermoeid uitziet — ook al ben je uitgerust.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed">
                Chemische exfoliants (AHA/BHA) pakken dit symptomatisch aan. Retinol pakt de oorzaak aan:
                de celvernieuwingscyclus zelf. Dieper, structureler, duurzamer resultaat.
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
              <em className="italic text-[#C9A96E]">stralende huid</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Elk ingrediënt draagt bij aan meer glans vanuit een andere hoek.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'Celvernieuwing versneller',
                  uitleg:
                    'Activeert retinolzuurreceptoren in huidcellen en versnelt de celvernieuwingscyclus van 28–45 dagen naar 14–21 dagen. Dode cellen worden sneller vervangen door verse, gladde cellen — direct zichtbaar als meer glans.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'Huidtoon egalisering',
                  uitleg:
                    'Remt melanine-overdracht naar huidcellen en verbetert zo de egaalheid van de huidtoon. Verhoogt ook barrièrefunctie en hydratatie — een gehydrateerde huid reflecteert licht beter en ziet er stralender uit.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'Anti-oxidant ondersteuner',
                  uitleg:
                    'Plantaardig actief met antioxidante eigenschappen die huid beschermen tegen oxidatieve stress — een bekende oorzaak van doffe, verouderde uitstraling. Versterkt de algehele glans van de huid.',
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
                  'Een grijzige of matte huidtint hebt die er vermoeid uitziet',
                  'Merkt dat je huid niet meer straalt zoals vroeger',
                  'Niet wil scrubben maar toch celvernieuwing wil stimuleren',
                  'Last hebt van een ongelijke huidtoon door UV of veroudering',
                  'AHA/BHA wil vermijden maar toch exfoliatie-resultaten wil',
                  'Een structurele oplossing zoekt, geen tijdelijke glow',
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
                Combineer voor maximale glans
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                <div>
                  <span className="text-[#C9A96E] font-medium">Avond:</span> Reset Serum op droge huid,
                  gevolgd door vochtinbrengende crème.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Ochtend:</span> Vitamine C serum (optioneel)
                  + SPF — beide ondersteunen een stralende huidtoon.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Na 3–4 weken:</span> Egaler huidtint en
                  meer glans al merkbaar.
                </div>
                <div className="pt-2 border-t border-white/10 text-stone-500 text-[12px]">
                  Hydratatie is essentieel voor glans. Nooit retinol zonder vochtinbrengende crème erna.
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
              Doffe huid &amp; retinol
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Waarom ziet mijn huid er dof uit?',
                  a: 'Doffe huid ontstaat wanneer dode huidcellen ophopen op het huidoppervlak. Celvernieuwing vertraagt bij ouder worden, stress en dehydratatie. Retinol versnelt celvernieuwing en verwijdert de opgehoopte laag — direct meer glans.',
                },
                {
                  v: 'Hoe helpt retinol bij doffe huid?',
                  a: 'Retinol versnelt celvernieuwing van 28–45 dagen naar 14–21 dagen bij consistent gebruik. Dode huidcellen worden sneller vervangen door verse cellen — wat direct bijdraagt aan een stralende, egale huidtint.',
                },
                {
                  v: 'Hoe snel verdwijnt doffe huid?',
                  a: 'De meeste gebruikers merken na 3–4 weken een zichtbaar egaler en stralender huidtint. De volledige glans-effecten zijn zichtbaar na 6–8 weken consistent gebruik.',
                },
                {
                  v: 'Wat doet niacinamide voor huidglans?',
                  a: 'Niacinamide remt de overdracht van melanine naar huidcellen, wat zorgt voor een egaler huidtoon. Verbetert ook hydratatie — een gehydrateerde huid reflecteert licht beter en ziet er stralender uit.',
                },
                {
                  v: 'Kan ik Reset Serum combineren met vitamine C?',
                  a: "Ja, maar gebruik ze niet tegelijkertijd. Vitamine C is een dagproduct, retinol een avondproduct. Gebruik vitamine C 's ochtends, Reset Serum 's avonds — optimale combinatie voor huidglans.",
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
                Van dof naar<br />
                <em className="italic text-[#C9A96E]">stralend.</em>
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
                Parfumvrij · Huidglans · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
