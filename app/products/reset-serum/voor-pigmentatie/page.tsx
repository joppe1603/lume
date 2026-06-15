import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol Serum voor Pigmentatie en Donkere Vlekken — MAUYI',
  description:
    'Zonnevlekken, hormonale pigmentatie, ongelijke huidtint. MAUYI Reset Serum combineert retinol 0.3% met niacinamide 10% — de brightening-combinatie die pigmentatie bij de bron aanpakt.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/voor-pigmentatie` },
  openGraph: {
    title: 'Retinol Serum voor Pigmentatie | MAUYI Reset Serum',
    description:
      'Donkere vlekken aanpakken bij de bron. Retinol 0.3% + niacinamide 10% + bakuchiol voor een egale, heldere huidtint.',
    url: `${BASE_URL}/products/reset-serum/voor-pigmentatie`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum voor pigmentatie' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Helpt retinol tegen pigmentatie en donkere vlekken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Retinol versnelt de celvernieuwing zodat gepigmenteerde huidcellen sneller worden afgestoten. Niacinamide blokkeert de melanineoverdracht van melanocyten naar huidcellen. De combinatie is klinisch bewezen effectiever dan elk ingrediënt apart voor het verminderen van hyperpigmentatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk type pigmentatie reageert het beste op retinol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post-inflammatoire hyperpigmentatie (PIH) en lentigo solaris (zonnevlekken) reageren het best. Melasma (hormonale pigmentatie) is hardnekkiger en reageert langzamer — hier is niacinamide als melanineremmer extra belangrijk. Congenitale nevi (aangeboren moedervlekken) reageren niet op cosmetische behandeling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt het voordat pigmentatie vervaagt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oppervlakkige pigmentatie vervaagt bij consistent gebruik na 6–10 weken merkbaar. Diepere hyperpigmentatie (zoals melasma) kan 3–6 maanden duren. Het is essentieel om dagelijks SPF te gebruiken — zon verduistert pigmentvlekken actief en ondermijnt het effect van retinol volledig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik retinol combineren met vitamine C voor pigmentatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retinol en vitamine C zijn beide effectief tegen pigmentatie maar werken via andere mechanismen. Ze kunnen worden gecombineerd, maar niet op dezelfde avond — vitamine C is optimaal in de ochtend (antioxidant + UV-bescherming synergistisch), retinol \'s avonds. Zo gebruik je beide in hun optimale context.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom is SPF zo belangrijk bij pigmentatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UV-straling activeert melanocyten direct. Elke blootstelling zonder bescherming stimuleert nieuwe melanineproductie en verduistert bestaande vlekken — zelfs bewolkt weer of diffuus daglicht via ramen. Zonder dagelijks SPF 30+ is geen retinolbehandeling effectief op de lange termijn.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Brightening retinol serum voor pigmentatie en donkere vlekken. Retinol 0.3% + Niacinamide 10% + Bakuchiol 0.5% in één parfumvrije avondformule.',
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
    { '@type': 'ListItem', position: 3, name: 'Voor Pigmentatie', item: `${BASE_URL}/products/reset-serum/voor-pigmentatie` },
  ],
}

export default function VoorPigmentatiePage() {
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
                <span className="text-stone-500">Pigmentatie</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  Voor pigmentatie
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Retinol serum dat donkere<br />
                <em className="italic text-[#C9A96E]">vlekken aanpakt bij de bron.</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                Pigmentatie en donkere vlekken ontstaan door overactieve melanocyten. Reset Serum pakt dit
                tweezijdig aan: retinol stoot verkleurde cellen sneller af, niacinamide remt de melanineoverdracht
                zelf — zodat vlekken niet alleen vervagen maar ook minder snel terugkomen.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Brightening', 'Anti-pigmentatie', 'SPF-advies inbegrepen', 'Parfumvrij'].map((tag) => (
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
                alt="MAUYI Reset Serum voor pigmentatie en donkere vlekken"
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
                Waarom pigmentatie<br />
                <em className="italic">zo moeilijk te behandelen is</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Pigmentatie is meer dan een oppervlakkige verkleuring. Melanocyten — de pigmentcellen in je huid —
                reageren op prikkels (UV, ontsteking, hormonen) door overmatig melanine te produceren. Dat melanine
                wordt opgenomen door omliggende huidcellen en zichtbaar als donkere vlekken.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Het probleem: de meeste brighteners werken maar op één stap in dit proces. Ze bleken de vlekken
                oppervlakkig of remmen tijdelijk de melanineproductie — maar zodra je stopt, of zodra er zon
                bij komt, komen de vlekken terug.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed">
                Effectieve behandeling vereist een aanpak op meerdere niveaus tegelijk:
                snellere afstoting van verkleurde cellen <em>en</em> remming van nieuwe melanineoverdracht.
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
              Drie ingrediënten die<br />
              <em className="italic text-[#C9A96E]">pigmentatie op elk niveau aanpakken</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Elk ingrediënt onderschept een andere stap in het pigmentatieproces.
              Dat is waarom de combinatie structureel werkt waar losse brighteners falen.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'De celvernieuwer',
                  uitleg:
                    'Versnelt de huidcelcyclus zodat gepigmenteerde cellen sneller het oppervlak verlaten en vervangen worden door nieuwe, onverkleuurde cellen. Hoe sneller de omlooptijd, hoe eerder vlekken zichtbaar vervagen.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'De melanineremmer',
                  uitleg:
                    'Remt de overdracht van melanosomen (melaninepakketten) van melanocyten naar keratinocyten. Dit is de stap waardoor pigment zich verspreidt. Klinisch bewezen brightener — effectief op alle huidtypen zonder bleekmiddeleffect.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'De antioxidant',
                  uitleg:
                    'Oxidatieve stress is een van de triggers voor overmatige melanineproductie. Bakuchiol werkt als plantaardig antioxidant dat deze trigger vermindert — terwijl het tegelijkertijd de tolerantie voor retinol verhoogt.',
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
                Reset Serum is geschikt<br />als je last hebt van…
              </h2>
              <ul className="space-y-4">
                {[
                  'Zonnevlekken of leeftijdsvlekken',
                  'Hormonale pigmentatie of melasma',
                  'Ongelijke huidtint of doffe huid',
                  'Rode of bruine vlekken na puistjes (PIH)',
                  'Brighteners die niet het gewenste resultaat geven',
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
                Zon is je grootste vijand
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                <div>
                  <span className="text-[#C9A96E] font-medium">'s Avonds:</span> Reset Serum op droge huid
                  na reinigen. Retinol werkt 's nachts terwijl de celvernieuwing plaatsvindt.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Elke ochtend:</span> SPF 30 of hoger is
                  niet optioneel. UV verduistert hyperpigmentatie actief — ook bewolkt weer.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Optioneel:</span> Vitamine C in de
                  ochtend werkt synergistisch met retinol 's avonds voor snellere resultaten.
                </div>
                <div className="pt-2 border-t border-white/10 text-stone-500 text-[12px]">
                  Begin 2× per week, bouw op naar dagelijks gebruik in 3–4 weken.
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
              Retinol & pigmentatie
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Helpt retinol tegen pigmentatie en donkere vlekken?',
                  a: 'Ja. Retinol versnelt de celvernieuwing zodat gepigmenteerde huidcellen sneller worden afgestoten. Niacinamide blokkeert de melanineoverdracht van melanocyten naar huidcellen. De combinatie is klinisch bewezen effectiever dan elk ingrediënt apart.',
                },
                {
                  v: 'Welk type pigmentatie reageert het beste op retinol?',
                  a: 'Post-inflammatoire hyperpigmentatie (PIH) en zonnevlekken reageren het best. Melasma (hormonale pigmentatie) is hardnekkiger en reageert langzamer — hier is niacinamide als melanineremmer extra belangrijk.',
                },
                {
                  v: 'Hoe lang duurt het voordat pigmentatie vervaagt?',
                  a: 'Oppervlakkige pigmentatie vervaagt bij consistent gebruik na 6–10 weken. Diepere hyperpigmentatie kan 3–6 maanden duren. Dagelijks SPF is essentieel — zon verduistert pigmentvlekken actief en ondermijnt retinol volledig.',
                },
                {
                  v: 'Kan ik retinol combineren met vitamine C voor pigmentatie?',
                  a: 'Ja, maar niet op hetzelfde moment. Vitamine C is optimaal in de ochtend (antioxidant + SPF-synergistisch), retinol \'s avonds. Zo gebruik je beide ingrediënten in hun optimale context voor maximale brightening.',
                },
                {
                  v: 'Waarom is SPF zo belangrijk bij pigmentatie?',
                  a: 'UV activeert melanocyten direct. Elke blootstelling zonder bescherming stimuleert nieuwe melanineproductie en verduistert bestaande vlekken — zelfs via ramen. Zonder dagelijks SPF 30+ is geen retinolbehandeling op de lange termijn effectief.',
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
                Klaar voor een<br />
                <em className="italic text-[#C9A96E]">egale, heldere huidtint?</em>
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
                Parfumvrij · Brightening · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
