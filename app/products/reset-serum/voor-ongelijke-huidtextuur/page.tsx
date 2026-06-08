import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol voor Ongelijke Huidtextuur en Poriën — MAUYI Reset Serum',
  description:
    'Grove huidtextuur, zichtbare poriën, hobbelige huid. MAUYI Reset Serum verbetert huidtextuur met retinol 0.3% + niacinamide 10% — voor een gladde, gelijkmatige huid zonder agressieve behandelingen.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/voor-ongelijke-huidtextuur` },
  openGraph: {
    title: 'Retinol voor Ongelijke Huidtextuur | MAUYI Reset Serum',
    description:
      'Grove textuur en grote poriën aanpakken. Retinol 0.3% + niacinamide 10% verfijnen huidtextuur en minimaliseren poriën.',
    url: `${BASE_URL}/products/reset-serum/voor-ongelijke-huidtextuur`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum voor ongelijke huidtextuur' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Helpt retinol bij ongelijke huidtextuur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Retinol is een van de meest effectieve ingrediënten voor het verfijnen van huidtextuur. Het versnelt celvernieuwing zodat verdikte, verhoornde huidcellen sneller worden afgestoten. Na 6–8 weken is een merkbaar gladder huidoppervlak zichtbaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kunnen poriën echt kleiner worden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Poriën kunnen niet permanent kleiner worden — hun grootte wordt genetisch bepaald. Maar poriën kunnen er aanzienlijk kleiner uitzien. Verstopte poriën (mee-eters, talg) maken ze visueel groter. Retinol houdt poriën schoon door celvernieuwing; niacinamide regelt talgproductie en verbetert de poriewand-structuur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat veroorzaakt grove huidtextuur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grove huidtextuur wordt veroorzaakt door ophoping van dode huidcellen (hyperkeratose), verstopte poriën, littekens van acne, UV-schade die collageen afbreekt, en verminderde celvernieuwing met de leeftijd. Retinol pakt al deze oorzaken aan: versnelt celvernieuwing, stimuleert collageen, en houdt poriën vrij.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt het voordat huidtextuur verbetert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Verbetering in huidtextuur is een van de snelst zichtbare effecten van retinol. Na 4–6 weken consistent gebruik melden de meeste mensen een gladder, egaler huidoppervlak. Poriegrootte verbetert iets later — na 8–12 weken — omdat dit collageenanmaak rondom poriën vereist.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik retinol combineren met niacinamide voor textuurverbetering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absoluut — en de combinatie werkt beter dan elk ingrediënt apart. Retinol versnelt celvernieuwing en verfijnt het huidoppervlak. Niacinamide regelt de talgproductie (die poriën verstopt en textuur ruwer maakt) en versterkt de huidbarrière. Reset Serum bevat beide in therapeutische concentraties.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Retinol serum voor ongelijke huidtextuur en zichtbare poriën. Retinol 0.3% + Niacinamide 10% verfijnen het huidoppervlak in één parfumvrije avondformule.',
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
    { '@type': 'ListItem', position: 3, name: 'Voor Ongelijke Huidtextuur', item: `${BASE_URL}/products/reset-serum/voor-ongelijke-huidtextuur` },
  ],
}

export default function VoorOnegelijkeHuidtextuurPage() {
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
                <span className="text-stone-500">Huidtextuur</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  Voor huidtextuur
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Retinol serum voor een<br />
                <em className="italic text-[#C9A96E]">gladde, gelijkmatige huid.</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                Grove textuur, zichtbare poriën, hobbeligs huidoppervlak — allemaal veroorzaakt door
                vertraagde celvernieuwing en ophoping van dode huidcellen. Reset Serum versnelt dit
                proces en verbetert tegelijkertijd de poriëstructuur.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Textuurverbetering', 'Porieverfijning', 'Gladde huid', 'Parfumvrij'].map((tag) => (
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
                alt="MAUYI Reset Serum voor ongelijke huidtextuur"
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
                Waarom huidtextuur ruw<br />
                <em className="italic">wordt naarmate je ouder wordt</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Jonge huid vernieuwt zichzelf elke 28 dagen. Naarmate je ouder wordt, vertraagt dit proces
                naar 40–60 dagen. Dode huidcellen hopen op aan het oppervlak, poriën raken verstopt, en
                de huid verliest de gladde, egale textuur die ze ooit had.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Zichtbare poriën worden groter doordat talg en dode cellen zich ophopen in de porieopening.
                UV-schade breekt collageen af rondom poriën, waardoor de wanden verzakken en poriën
                nog prominenter worden.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed">
                Scrubs en peelings verwijderen tijdelijk de bovenste laag — maar ze lossen de
                <strong className="font-medium text-[#1A1A1A]"> oorzaak</strong> niet op: een vertraagde
                celcyclus. Retinol doet dat wél.
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
              <em className="italic text-[#C9A96E]">textuur structureel verfijnen</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Elk ingrediënt pakt een ander aspect van ruwe huidtextuur aan — van celvernieuwing tot talgregulatie.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'De textuurverbeteraar',
                  uitleg:
                    'Versnelt de celcyclus zodat verouderde, verdikte huidcellen sneller worden afgestoten. Het huidoppervlak wordt fijner en gladder. Tegelijkertijd stimuleert retinol collageen rondom poriën — wat ze smaller laat lijken.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'De porieverfijner',
                  uitleg:
                    'Regelt de talgproductie die poriën verstopt en zichtbaar maakt. Verbetert de structuur van de poriëwanden. Studies tonen aantoonbare verkleining van de zichtbare poriegrootte na 8 weken — zonder de huid uit te drogen.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'De zachte verfijner',
                  uitleg:
                    'Verbetert huidtextuur via dezelfde pathway als retinol, maar met minder irritatie. Draagt bij aan een glad huidoppervlak zonder de droogheid of schilfering die agressievere exfolianten meebrengen.',
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
                Reset Serum is de juiste keuze<br />als je…
              </h2>
              <ul className="space-y-4">
                {[
                  'Grove of hobbelige huidtextuur hebt',
                  'Grote of zichtbare poriën wilt verfijnen',
                  'Mee-eters of verstopte poriën hebt',
                  'Huid die minder glad aanvoelt dan vroeger',
                  'Wil stoppen met scrubs die de huid irriteren',
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
                Geen scrubs meer nodig
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                <div>
                  <span className="text-[#C9A96E] font-medium">Week 1–2:</span> 2× per week. Retinol begint
                  de celcyclus te versnellen — je huid kan licht schilferen. Dat is normaal.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Maand 1–2:</span> Dagelijks gebruik. Textuur
                  verbetert zichtbaar. Stop met fysieke scrubs — retinol exfolieert chemisch, wat zachter is.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Optioneel:</span> Combineer met een zachte
                  chemische peeling (BHA) 1× per week op een andere avond dan retinol.
                </div>
                <div className="pt-2 border-t border-white/10 text-stone-500 text-[12px]">
                  Overdag SPF 30+. Verfijnde textuur is gevoeliger voor UV — die bescherming is ook bescherming van je resultaten.
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
              Retinol & huidtextuur
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Helpt retinol bij ongelijke huidtextuur?',
                  a: 'Ja. Retinol versnelt celvernieuwing zodat verdikte, verhoornde huidcellen sneller worden afgestoten. Na 6–8 weken is een merkbaar gladder huidoppervlak zichtbaar.',
                },
                {
                  v: 'Kunnen poriën echt kleiner worden?',
                  a: 'Poriën worden niet permanent kleiner, maar zien er aanzienlijk kleiner uit. Retinol houdt poriën vrij door celvernieuwing; niacinamide regelt talgproductie en verbetert de poriewand-structuur. Het visuele verschil is significant.',
                },
                {
                  v: 'Wat veroorzaakt grove huidtextuur?',
                  a: 'Ophoping van dode huidcellen, verstopte poriën, acne-littekens, UV-schade en verminderde celvernieuwing met de leeftijd. Retinol pakt al deze oorzaken aan.',
                },
                {
                  v: 'Hoe lang duurt het voordat huidtextuur verbetert?',
                  a: 'Textuurverbetering is een van de snelst zichtbare effecten. Na 4–6 weken melden de meeste mensen een gladder, egaler oppervlak. Poriegrootte verbetert na 8–12 weken door collageenanmaak rondom poriën.',
                },
                {
                  v: 'Kan ik retinol combineren met niacinamide voor textuur?',
                  a: 'Absoluut — de combinatie werkt beter dan elk ingrediënt apart. Retinol verfijnt het huidoppervlak; niacinamide regelt talg en versterkt de barrière. Reset Serum bevat beide in therapeutische concentraties in één formule.',
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
                <em className="italic text-[#C9A96E]">gladde, gelijkmatige huid?</em>
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
                Parfumvrij · Textuurverbetering · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
