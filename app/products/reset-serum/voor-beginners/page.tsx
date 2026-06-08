import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol voor Beginners — Begin met de Juiste Dosering | MAUYI',
  description:
    'Nog nooit retinol gebruikt? MAUYI Reset Serum is ontworpen om mee te beginnen. Retinol 0.3% — de bewezen beginnersdosering — gebufferd met niacinamide 10% en bakuchiol voor minimale startproblemen.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/voor-beginners` },
  openGraph: {
    title: 'Retinol voor Beginners | MAUYI Reset Serum',
    description:
      'De juiste beginnersdosering, de juiste ingrediënten. Start retinol zonder de typische bijwerkingen van de eerste weken.',
    url: `${BASE_URL}/products/reset-serum/voor-beginners`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum voor beginners' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welke retinolconcentratie is goed voor beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor beginners is 0.2–0.3% de ideale startconcentratie. Lager dan 0.1% geeft weinig resultaat; hoger dan 0.5% veroorzaakt bij beginners vaak irritatie, roodheid en schilfering. 0.3% levert klinisch bewezen resultaat terwijl de huid de kans krijgt te wennen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is retinol purging en is dat normaal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Purging is een tijdelijke toename van puistjes of mee-eters in de eerste 2–6 weken van retinolgebruik. Het wordt veroorzaakt door versnelde celvernieuwing die bestaande verstoppingen naar het oppervlak drijft. Het is normaal, tijdelijk, en een teken dat retinol werkt. Bakuchiol in Reset Serum helpt de ernst te beperken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Op welke leeftijd kan ik beginnen met retinol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retinol is geschikt vanaf 25 jaar voor preventieve anti-aging. Jongere mensen kunnen het gebruiken voor acne of pigmentatie, maar de huid is dan al van nature in een intensieve celvernieuwingscyclus. Ouder dan 25: de preventieve voordelen wegen zwaarder dan de risico\'s bij correcte dosering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe begin ik met retinol als ik er nooit eerder mee begonnen ben?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start met 2× per week op droge huid na het reinigen. Week 3–4: verhoog naar 3–4× als er geen irritatie is. Daarna: dagelijks gebruik. Gebruik altijd SPF overdag en meng niet met andere actieve ingrediënten (AHA/BHA) op dezelfde avond.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik retinol gebruiken als ik zwanger ben of borstvoeding geef?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Retinol (en alle vitamine A-derivaten) worden afgeraden tijdens zwangerschap en borstvoeding vanwege mogelijke teratogene effecten. Bakuchiol is een veilig plantaardig alternatief dat vergelijkbare anti-aging voordelen biedt en wel veilig is tijdens zwangerschap.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Retinol serum voor beginners. Retinol 0.3% beginnersdosering + Niacinamide 10% + Bakuchiol 0.5% voor een zachte start met retinol.',
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
    { '@type': 'ListItem', position: 3, name: 'Voor Beginners', item: `${BASE_URL}/products/reset-serum/voor-beginners` },
  ],
}

export default function VoorBeginnersPage() {
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
                <span className="text-stone-500">Voor Beginners</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  Voor beginners
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Je eerste retinol.<br />
                <em className="italic text-[#C9A96E]">De juiste dosering.</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                Retinol heeft een reputatie voor irritatie die het niet verdient — als je met de verkeerde
                concentratie begint. Reset Serum bevat 0.3%: de dosering die bewezen resultaat geeft
                zonder de bijwerkingen die beginners wegjagen.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Beginnersvriendelijk', '0.3% sweet spot', 'Minimale purging', 'Parfumvrij'].map((tag) => (
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
                alt="MAUYI Reset Serum voor retinol beginners"
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
                Waarom zoveel mensen<br />
                <em className="italic">stoppen met retinol</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Retinol heeft een slechte reputatie bij beginners — en dat komt vrijwel altijd door één ding:
                te hoog beginnen. Producten met 0.5%, 1% of zelfs 2% retinol zijn voor gevorderde gebruikers
                met al opgebouwde tolerantie, niet als startpunt.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Wanneer een onvoorbereide huid plotseling te veel retinol krijgt, reageert ze met de
                zogenaamde <strong className="font-medium text-[#1A1A1A]">retinization</strong>: de periode van
                roodheid, schilfering en droogheid terwijl de huid went. Dit is tijdelijk — maar de meeste
                mensen stoppen al na de eerste week, net voor het punt waarop de huid stabiliseert.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed">
                De oplossing is niet minder retinol. De oplossing is de juiste dosering, gecombineerd
                met ingrediënten die de overgangsperiode actief verkorten.
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
              Drie ingrediënten voor een<br />
              <em className="italic text-[#C9A96E]">zachte start met retinol</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Elk ingrediënt speelt een rol in het vergemakkelijken van de overgang naar retinolgebruik.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'De sweet spot',
                  uitleg:
                    '0.1% is te laag voor klinisch bewijs. 0.5%+ is voor gevorderd gebruik. 0.3% is de gedocumenteerde beginnersdosering: effectief genoeg voor meetbare resultaten, laag genoeg voor de huid om rustig te wennen zonder dramatische irritatie.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'De transitiehulp',
                  uitleg:
                    'Versterkt de huidbarrière actief terwijl retinol celvernieuwing opstart. Vermindert de roodheid en droogheid die horen bij de retinizatieperiode. Huid adapteert sneller — zodat je eerder op dagelijks gebruik kunt overstappen.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'De tolerantie-opbouwer',
                  uitleg:
                    'Werkt via dezelfde receptorpathway als retinol. Dat betekent: de huid raakt gewend aan retinol-achtige signalen nog voordat de volledige retinolactiviteit zijn piek bereikt. Klinisch bewezen: minder bijwerkingen bij gecombineerd gebruik.',
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
                Reset Serum is ideaal<br />als je…
              </h2>
              <ul className="space-y-4">
                {[
                  'Nog nooit retinol hebt gebruikt',
                  'Eerder stopte vanwege irritatie of schilfering',
                  '25+ bent en preventief wil beginnen met anti-aging',
                  'Retinol wil proberen maar bang bent voor bijwerkingen',
                  'Liever één goed product dan tien losse serums',
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
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-4">Beginners protocol</div>
              <h3 className="text-xl font-semibold mb-4 leading-snug" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Stap voor stap opbouwen
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                <div>
                  <span className="text-[#C9A96E] font-medium">Week 1–2:</span> 2× per week, 's avonds op
                  droge huid. Observeer hoe je huid reageert. Lichte roodheid en droogheid zijn normaal.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Week 3–4:</span> 3–4× per week als er geen
                  irritatie is. De huid went nu aantoonbaar aan retinol.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Maand 2+:</span> Dagelijks gebruik mogelijk.
                  Overdag altijd SPF 30 of hoger — dit is het belangrijkste bijproduct van retinol gebruik.
                </div>
                <div className="pt-2 border-t border-white/10 text-stone-500 text-[12px]">
                  Combineer nooit met AHA of BHA op dezelfde avond als beginner. Houd je routine simpel.
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
              Beginnen met retinol
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Welke retinolconcentratie is goed voor beginners?',
                  a: 'Voor beginners is 0.2–0.3% de ideale startconcentratie. Lager dan 0.1% geeft weinig resultaat; hoger dan 0.5% veroorzaakt bij beginners vaak irritatie. 0.3% levert klinisch bewezen resultaat terwijl de huid de kans krijgt te wennen.',
                },
                {
                  v: 'Wat is retinol purging en is dat normaal?',
                  a: 'Purging is een tijdelijke toename van puistjes in de eerste 2–6 weken. Het wordt veroorzaakt door versnelde celvernieuwing die bestaande verstoppingen naar het oppervlak drijft. Het is tijdelijk en een teken dat retinol werkt. Bakuchiol in Reset Serum helpt de ernst te beperken.',
                },
                {
                  v: 'Op welke leeftijd kan ik beginnen met retinol?',
                  a: 'Retinol is geschikt vanaf 25 jaar voor preventieve anti-aging. Jongere mensen kunnen het gebruiken voor acne of pigmentatie. Ouder dan 25: de preventieve voordelen wegen zwaarder dan de risico\'s bij correcte dosering.',
                },
                {
                  v: 'Hoe begin ik met retinol?',
                  a: 'Start 2× per week op droge huid na reinigen. Week 3–4: verhoog naar 3–4× als er geen irritatie is. Daarna dagelijks gebruik. Gebruik altijd SPF overdag en meng niet met AHA/BHA op dezelfde avond.',
                },
                {
                  v: 'Kan ik retinol gebruiken als ik zwanger ben?',
                  a: 'Nee. Retinol en alle vitamine A-derivaten zijn afgeraden tijdens zwangerschap en borstvoeding. Bakuchiol is een veilig plantaardig alternatief dat vergelijkbare anti-aging voordelen biedt en wél veilig is tijdens zwangerschap.',
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
                Start vandaag met<br />
                <em className="italic text-[#C9A96E]">de juiste dosering.</em>
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
                Beginnersvriendelijk · Parfumvrij · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
