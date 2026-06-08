import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol voor Vette Huid — Poriën Kleiner en Minder Glans | MAUYI',
  description:
    'Vette huid en retinol: retinol 0.3% reguleert sebum, verfijnt poriën en vermindert mee-eters. MAUYI Reset Serum met niacinamide 10% is de avondroutine voor vette huid die werkt.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/voor-vette-huid` },
  openGraph: {
    title: 'Retinol voor Vette Huid | MAUYI Reset Serum',
    description:
      'Overmatig sebum, glanzende huid en verstopte poriën. Retinol reguleert talg aanmaak op cellulair niveau — meer dan welk ander product ook.',
    url: `${BASE_URL}/products/reset-serum/voor-vette-huid`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum voor vette huid' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is retinol goed voor vette huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja — retinol is een van de meest effectieve actieve ingrediënten voor vette huid. Het normaliseert de keratinisatie in poriën (waardoor verstoppingen verminderen), remt overmatige talgproductie op cellulair niveau, en verfijnt de poriestructuur. Gecombineerd met niacinamide dat sebum actief reguleert, is het de meest complete oplossing voor vette huid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik retinol gebruiken als ik al een vette huid heb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absoluut. Vette huid verdraagt retinol doorgaans beter dan droge of gevoelige huid — de extra sebum biedt een zekere bufferwerking. Begin wel op 2–3 keer per week en bouw op naar dagelijks. Gebruik daarna altijd een lichte, niet-comedogene moisturizer. Vette huid heeft hydratatie nodig, ook al voelt het niet zo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verkleint retinol poriën?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Poriën kunnen niet letterlijk kleiner worden — hun grootte is genetisch bepaald. Maar ze kunnen er veel kleiner uitzien. Retinol normaliseert de ophoping van keratinecellen in poriën (de vulling die ze groter laat lijken), stimuleert collageen dat de poorirand aantrekt, en vermindert de sebumproductie die poriën openblaast. Resultaat: aanzienlijk verfijnde poriestructuur na 8–12 weken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik moisturizer gebruiken als ik een vette huid heb en retinol gebruik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, dit is essentieel. Veel mensen met vette huid slaan moisturizer over omdat ze bang zijn voor extra olie. Maar uitgedroogde huid compenseert door juist méér sebum te produceren — wat het probleem verergert. Een lichte, niet-comedogene moisturizer na het serum reguleert dit mechanisme en maakt retinol effectiever.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer zie ik minder glans en kleinere poriën?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De eerste verbetering — minder dagelijkse glans en iets verfijndere poriën — is merkbaar na 4–6 weken consistent gebruik. Significante vermindering van mee-eters en porieverfijning na 8–10 weken. Voor structurele verbetering van poriegrootte is 3–6 maanden consistent gebruik nodig.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Retinol serum voor vette huid. Retinol 0.3% normaliseert poriën + Niacinamide 10% reguleert sebum + Bakuchiol 0.5% in één niet-comedogene avondformule.',
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
    { '@type': 'ListItem', position: 3, name: 'Voor Vette Huid', item: `${BASE_URL}/products/reset-serum/voor-vette-huid` },
  ],
}

export default function VoorVetteHuidPage() {
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
                <span className="text-stone-500">Voor Vette Huid</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  Sebumregulatie + poriën
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Minder glans. Kleinere poriën.<br />
                <em className="italic text-[#C9A96E]">Retinol doet het van binnenuit.</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                Vette huid is geen kwestie van slechte reiniging of de verkeerde crème.
                Het is overproductie van sebum op cellulair niveau. Retinol en niacinamide
                zijn de enige ingrediënten die dit mechanisme direct aanpakken — niet maskeren.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Vette huid', 'Poriënverfijning', 'Sebumregulatie', 'Niet-comedogeen'].map((tag) => (
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
                alt="MAUYI Reset Serum voor vette huid poriënverfijning"
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
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">De biologie</span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Waarom vette huid glans geeft<br />
                <em className="italic">en wat er werkelijk aan de hand is</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Vette huid ontstaat door talgklieren die te actief zijn — gestimuleerd door
                androgenen (hormonen), genetica, en soms verkeerde huidverzorging. Die overmatige
                sebumproductie vult poriën, oxideert aan de lucht (mee-eters), en geeft de
                glanzende finish die de meeste mensen willen vermijden.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Veel producten maskeren het symptoom: matterende primers, absorberend poeder,
                sterke reinigers. Maar sterke reinigers vernietigen de huidbarrière, waardoor de huid
                nog meer sebum aanmaakt ter compensatie. Het is een negatieve cyclus die zichzelf
                versterkt.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed">
                Retinol en niacinamide doorbreken die cyclus aan de bron. Retinol normaliseert de
                <strong className="font-medium text-[#1A1A1A]"> keratinisatiecyclus in poriën</strong>,
                niacinamide remt de talgproductie op enzymatisch niveau. Niet maskeren — reguleren.
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
              <em className="italic text-[#C9A96E]">sebum aanpakken aan de bron</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Elk ingrediënt heeft een andere route naar hetzelfde doel: minder glans, kleinere
              poriën, en gezonder uitziende huid.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'De poriënormaliseerder',
                  uitleg:
                    'Normaliseert de keratinisatie — het proces waarbij dode huidcellen ophopen in poriën en ze dichtstoppen. Door celvernieuwing te versnellen, worden verstoppingen afgebroken en blijven poriën vrij. Tegelijkertijd stimuleert retinol collageen rond poriën, waardoor ze strakker worden en er visueel kleiner uitzien.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'De sebumremmer',
                  uitleg:
                    'Verlaagt de activiteit van lipasen — enzymen die talgproductie stimuleren. Klinische studie: 10% niacinamide verlaagt sebumuitscheiding met 16% na 4 weken. Reduceert zichtbare poriegrootte door talgvolume in poriën te verlagen. Resultaat: merkbaar minder glans na 3–4 weken consistent gebruik.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'De anti-inflammatoire kracht',
                  uitleg:
                    'Vette huid is gevoeliger voor laaggradige ontsteking — sebum oxideert en irriteert de poriewand. Bakuchiol heeft bewezen anti-inflammatoire eigenschappen die deze irritatie verminderen. Minder ontsteking betekent minder roodheid rond poriën en een gezonder, egaler huidtinimage.',
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
                  'Overmatig glanzende huid hebt door de dag heen',
                  'Grote of zichtbare poriën hebt, vooral in de T-zone',
                  'Last hebt van mee-eters of verstopte poriën',
                  'Eerder retinol probeerde maar te vet of comedogeen vond',
                  'Anti-aging wil zonder je huid verder te verstoppen',
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
                Vette huid heeft ook hydratatie nodig.
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                <div>
                  <span className="text-[#C9A96E] font-medium">De veelgemaakte fout:</span> moisturizer
                  overslaan omdat je huid al vet aanvoelt. Dit activeert het omgekeerde effect: de huid
                  compenseert uitdroging door méér sebum aan te maken.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">De juiste aanpak:</span> gebruik na Reset
                  Serum een lichte, niet-comedogene moisturizer. Geen zware crèmes — een gel-texture
                  of water-based formule werkt het beste voor vette huid.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Resultaat na 4–6 weken:</span> minder
                  sebumoverproductie, kleinere poriën, minder mee-eters. Consistent gebruik telt meer
                  dan productaccumulatie.
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
              Retinol en vette huid
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Is retinol goed voor vette huid?',
                  a: 'Ja — retinol is een van de meest effectieve ingrediënten voor vette huid. Het normaliseert poriën, remt overmatige talgproductie op cellulair niveau, en verfijnt de poriestructuur. Gecombineerd met niacinamide is het de meest complete oplossing.',
                },
                {
                  v: 'Kan ik retinol gebruiken als ik al een vette huid heb?',
                  a: 'Absoluut. Vette huid verdraagt retinol doorgaans beter dan droge huid. Begin op 2–3 keer per week en bouw op naar dagelijks. Gebruik daarna altijd een lichte, niet-comedogene moisturizer.',
                },
                {
                  v: 'Hoe verkleint retinol poriën?',
                  a: 'Poriën kunnen niet kleiner worden — hun grootte is genetisch bepaald. Maar ze zien er veel kleiner uit: retinol normaliseert de keratinophoping in poriën, stimuleert collageen dat de poorirand aantrekt, en vermindert de sebumproductie die poriën openblaast.',
                },
                {
                  v: 'Moet ik moisturizer gebruiken met vette huid en retinol?',
                  a: 'Ja, essentieel. Vette huid die geen hydratatie krijgt, compenseert door nog meer sebum aan te maken. Een lichte, niet-comedogene moisturizer na het serum reguleert dit mechanisme en maakt retinol effectiever.',
                },
                {
                  v: 'Wanneer zie ik minder glans en kleinere poriën?',
                  a: 'Minder dagelijkse glans en verfijnde poriën na 4–6 weken. Significante vermindering van mee-eters na 8–10 weken. Voor structurele porieverfijning is 3–6 maanden consistent gebruik nodig.',
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
                Minder glans.<br />
                <em className="italic text-[#C9A96E]">Meer controle.</em>
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
                Parfumvrij · Vette huid · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
