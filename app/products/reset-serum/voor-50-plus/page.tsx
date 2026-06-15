import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol Serum voor 50-plus — MAUYI Reset Serum',
  description:
    'Huid na je 50ste veroudert anders: minder collageen, dunnere barrière, meer rimpels. MAUYI Reset Serum — retinol 0.3% + niacinamide 10% + bakuchiol — voor zichtbare regeneratie bij rijpere huid.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/voor-50-plus` },
  openGraph: {
    title: 'Retinol Serum voor 50-plus | MAUYI Reset Serum',
    description:
      'Retinol 0.3% + niacinamide 10% + bakuchiol 0.5% voor rijpere huid na je 50ste. Parfumvrij, zichtbaar resultaat.',
    url: `${BASE_URL}/products/reset-serum/voor-50-plus`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum voor 50-plus' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'nl-NL',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is retinol veilig voor huid na je 50ste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Retinol is juist bij rijpere huid klinisch het meest effectief bewezen actieve ingrediënt. Na je 50ste neemt de collageenproductie sterk af en wordt celvernieuwing trager — precies wat retinol aanpakt. Gebruik wel een gebufferde formule: MAUYI Reset Serum combineert retinol 0.3% met niacinamide 10% en bakuchiol 0.5% om irritatie te minimaliseren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke concentratie retinol is geschikt voor rijpere huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor rijpere huid is 0.3% retinol de ideale startconcentratie — klinisch effectief zonder de barrière te beschadigen. Rijpere huid is dunner en droger, waardoor hogere concentraties (0.5%–1%) sneller irritatie, schilfering en roodheid veroorzaken. MAUYI Reset Serum gebruikt 0.3% als effectieve én veilige dosering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik retinol combineren met mijn hormooncrème?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat hangt af van de hormooncrème. Topische oestrogeencrèmes worden doorgaans overdag gebruikt — retinol \'s avonds — dus er is geen directe interactie. Gebruik nooit beide producten tegelijkertijd op dezelfde huid. Raadpleeg bij twijfel altijd je huisarts of dermatoloog.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel zie ik resultaat na mijn 50ste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rijpere huid heeft een langzamere celvernieuwingscyclus, waardoor resultaten iets langer op zich laten wachten. De meeste gebruikers boven de 50 zien na 6–8 weken een egaler en meer stralende huidtint. Significante verbetering van rimpeldiepte en huidfirmheid is zichtbaar na 12–16 weken consistent gebruik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MAUYI Reset Serum ook geschikt voor droge rijpere huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Niacinamide 10% in de formule versterkt de huidbarrière en houdt vocht vast — essentieel voor de drogere en dunnere huid die veel mensen boven de 50 hebben. Gebruik het serum altijd gevolgd door een goede vochtinbrengende crème voor optimale hydratatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe gebruik ik retinol als ik boven de 50 ben?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Begin met 2× per week 's avonds op droge huid. Verhoog na 2–3 weken naar 3–4× per week als je huid geen irritatie vertoont. Daarna dagelijks mogelijk. Overdag altijd SPF 30 of hoger, want retinol vergroot de UV-gevoeligheid. Volg met een rijke vochtinbrengende crème om de barrière te ondersteunen.",
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Retinol serum voor rijpere huid na de 50. Retinol 0.3% + Niacinamide 10% + Bakuchiol 0.5% in één parfumvrije avondformule.',
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
    { '@type': 'ListItem', position: 3, name: 'Voor 50-plus', item: `${BASE_URL}/products/reset-serum/voor-50-plus` },
  ],
}

export default function Voor50PlusPage() {
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
                <span className="text-stone-500">50-plus</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  Voor rijpere huid
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Retinol serum voor<br />
                <em className="italic text-[#C9A96E]">huid na je 50ste.</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                Na je 50ste produceert je huid minder collageen, wordt de barrière dunner en vertraagt celvernieuwing.
                Reset Serum is gebouwd voor precies dit moment — met de concentraties die klinisch effectief zijn,
                zonder onnodige irritatie.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Rijpere huid', 'Anti-aging', 'Parfumvrij', 'Collageen-stimulerend'].map((tag) => (
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
                alt="MAUYI Reset Serum voor rijpere huid 50-plus"
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
                Wat er verandert<br />
                <em className="italic">na je 50ste</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Rond je 50ste daalt de oestrogeenproductie sterk. Dit heeft directe gevolgen voor je huid:
                collageenproductie neemt af met circa 30% in de eerste vijf jaar na de menopauze, huiddikte neemt af,
                en de barrièrefunctie verzwakt.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Celvernieuwing vertraagt van gemiddeld 28 dagen naar 45–60 dagen — dode huidcellen hopen op,
                de huid ziet er dof en ongelijk uit, rimpels worden dieper. Dit is geen cosmetisch probleem:
                het is biologisch en vereist een gerichte aanpak.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed">
                Retinol is het enige topicale ingrediënt met consistente klinische onderbouwing voor
                collageenstimulatie en versnelde celvernieuwing bij rijpere huid.
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
              <em className="italic text-[#C9A96E]">rijpere huid die werken</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Elk ingrediënt heeft een specifieke rol voor de veranderingen die rijpere huid ondergaat.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'Collageenstimulator',
                  uitleg:
                    'Stimuleert fibroblastactiviteit en collageensynthese. Klinisch bewezen de rimpeldiepte te verminderen en huidfirmheid te verbeteren bij consistent gebruik over 12–16 weken.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'Barrièreherstel',
                  uitleg:
                    'Versterkt de verzwakkende huidbarrière die hoort bij rijpere huid. Vermindert fijne lijntjes, verbetert huidtoon en houdt vocht vast — essentieel voor drogere huid na de menopauze.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'Regeneratie-versterker',
                  uitleg:
                    'Plantaardig actief dat de retinol-activiteit versterkt zonder extra irritatie. Klinische studies tonen vergelijkbare resultaten op rimpels en huidtextuur als retinol — samen werken ze synergetisch.',
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
                  'Boven de 50 bent en zichtbare anti-aging resultaten wil',
                  'Dunnere of drogere huid hebt door hormonale veranderingen',
                  'Rimpeldiepte en huidfirmheid wil verbeteren',
                  'Geen zware of geurende producten wil op rijpere huid',
                  'Eén effectieve avondroutine wil in plaats van meerdere serums',
                  'Overgang- of post-menopauze huidproblemen wil aanpakken',
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
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-4">Gebruikstip voor rijpere huid</div>
              <h3 className="text-xl font-semibold mb-4 leading-snug" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Langzaam opbouwen, consistent doorzetten
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                <div>
                  <span className="text-[#C9A96E] font-medium">Week 1–3:</span> 2× per week &apos;s avonds op droge huid.
                  Rijpere huid went trager aan retinol.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Week 4–6:</span> Verhoog naar 3–4× per week
                  als er geen irritatie is.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Daarna:</span> Dagelijks gebruik. Volg altijd
                  met een rijke vochtinbrengende crème.
                </div>
                <div className="pt-2 border-t border-white/10 text-stone-500 text-[12px]">
                  Overdag SPF 30 of hoger verplicht. Rijpere huid is extra gevoelig voor UV-veroudering.
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
              Retinol na je 50ste
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Is retinol veilig voor huid na je 50ste?',
                  a: 'Ja. Retinol is juist bij rijpere huid het meest effectief bewezen actieve ingrediënt. Na je 50ste neemt collageenproductie sterk af en vertraagt celvernieuwing — precies wat retinol aanpakt. Een gebufferde formule zoals Reset Serum minimaliseert irritatie.',
                },
                {
                  v: 'Welke concentratie retinol is geschikt voor rijpere huid?',
                  a: 'Voor rijpere huid is 0.3% retinol de ideale startconcentratie — klinisch effectief zonder de barrière te beschadigen. Hogere concentraties (0.5%–1%) veroorzaken bij dunnere, drogere rijpere huid sneller irritatie en schilfering.',
                },
                {
                  v: 'Hoe snel zie ik resultaat na mijn 50ste?',
                  a: 'Rijpere huid heeft een langzamere celvernieuwingscyclus. De meeste gebruikers boven de 50 zien na 6–8 weken een egaler en meer stralende huidtint. Significante verbetering van rimpeldiepte en huidfirmheid is zichtbaar na 12–16 weken.',
                },
                {
                  v: 'Kan ik retinol combineren met mijn hormooncrème?',
                  a: "Topische oestrogeencrèmes worden doorgaans overdag gebruikt — retinol 's avonds — dus er is geen directe interactie. Gebruik nooit beide op dezelfde huid tegelijkertijd. Raadpleeg bij twijfel altijd je huisarts of dermatoloog.",
                },
                {
                  v: 'Is MAUYI ook geschikt voor droge rijpere huid?',
                  a: 'Ja. Niacinamide 10% in de formule versterkt de huidbarrière en houdt vocht vast — essentieel voor drogere en dunnere huid na de 50. Gebruik het serum altijd gevolgd door een rijke vochtinbrengende crème.',
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
                Rijpere huid verdient<br />
                <em className="italic text-[#C9A96E]">een serieuze formule.</em>
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
                Parfumvrij · Rijpere huid · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
