import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol Serum voor Acne Littekens — MAUYI Reset Serum',
  description:
    'Acne is weg, maar de vlekken blijven. MAUYI Reset Serum vervaagt post-acne pigmentatie met retinol 0.3% + niacinamide 10% + bakuchiol. Parfumvrij, ook geschikt voor acne-gevoelige huid.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/voor-acne-littekens` },
  openGraph: {
    title: 'Retinol Serum voor Acne Littekens | MAUYI Reset Serum',
    description:
      'Post-acne pigmentatie aanpakken zonder irritatie. Retinol 0.3% + niacinamide 10% + bakuchiol in één parfumvrije formule.',
    url: `${BASE_URL}/products/reset-serum/voor-acne-littekens`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum voor acne littekens' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Helpt retinol tegen acne littekens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Retinol versnelt de celvernieuwing waardoor gepigmenteerde huidcellen sneller worden afgestoten. Niacinamide 10% blokkeert tegelijkertijd de melanineoverdracht van melanocyten naar huidcellen — de combinatie werkt sneller dan elk ingrediënt apart.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen acne littekens en post-acne pigmentatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Echte acne littekens zijn structurele huidschade (kuiltjes of verheven plekken) die retinol maar gedeeltelijk verbetert. Post-acne pigmentatie (PIH) zijn de rode of bruine vlekken die na een puistje achterblijven — dit zijn vlakke verkleuringen die retinol + niacinamide wél effectief aanpakt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik Reset Serum gebruiken als ik nog actieve acne heb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retinol kan actieve acne helpen door de talgproductie te reguleren en poriën vrij te houden, maar de huid kan in de eerste weken eerst "purgen" — tijdelijk meer puistjes door versnelde celvernieuwing. Start met 2× per week en bouw langzaam op om dit te minimaliseren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt het voordat acne vlekken vervagen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post-acne hyperpigmentatie vervaagt bij consistent gebruik na 6–12 weken merkbaar. Recente vlekken (jonger dan 3 maanden) reageren sneller. Echt diepere huidverkleuring kan 3–6 maanden duren. SPF overdag is essentieel — UV verduistert pigmentvlekken actief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt dit ook op hormonale acne vlekken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Hormonale acne laat dezelfde post-inflammatoire hyperpigmentatie achter als andere acne. Niacinamide remt de melanineoverdracht ongeacht de oorzaak van de pigmentatie. Retinol versnelt het uitwisselen van de verkleurde huidcellen.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Retinol serum voor acne littekens en post-acne pigmentatie. Retinol 0.3% + Niacinamide 10% + Bakuchiol 0.5% in één parfumvrije avondformule.',
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
    { '@type': 'ListItem', position: 3, name: 'Voor Acne Littekens', item: `${BASE_URL}/products/reset-serum/voor-acne-littekens` },
  ],
}

export default function VoorAcneLittekensPage() {
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
                <span className="text-stone-500">Acne Littekens</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  Voor acne littekens
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Retinol serum dat<br />
                <em className="italic text-[#C9A96E]">acne littekens vervaagt.</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                De acne is weg, maar de vlekken blijven. Reset Serum pakt post-acne pigmentatie aan bij de bron:
                snellere celvernieuwing én remming van melanineoverdracht — tegelijk, in één formule.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Vervaagt PIH', 'Acne-gevoelige huid', 'Parfumvrij', 'Zonder comedogene stoffen'].map((tag) => (
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
                alt="MAUYI Reset Serum voor acne littekens"
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
                Waarom acne vlekken<br />
                <em className="italic">zo hardnekkig zijn</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Wanneer een puistje ontstoken raakt, reageert je huid met een noodmechanisme: extra melanineproductie
                om het weefsel te beschermen. Die melanine blijft achter in de huidcellen — ook nadat de ontsteking
                allang weg is. Het resultaat: rode of bruine vlekken die maanden kunnen duren.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Dit heet <strong className="font-medium text-[#1A1A1A]">post-inflammatoire hyperpigmentatie (PIH)</strong> —
                en het is geen litteken maar een verkleuring van de bovenste huidlagen. Dat maakt het aanpakbaar,
                maar niet met willekeurige producten.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed">
                Je hebt iets nodig dat de verkleurde cellen sneller vervangt én de melanineproductie afremt.
                Tegelijk. Niet twee losse producten — één geïntegreerde formule.
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
              <em className="italic text-[#C9A96E]">pigmentatie aanpakken bij de bron</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Elke stap in het PIH-proces wordt door een ander ingrediënt onderschept. Dat is waarom de combinatie werkt.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'De celvernieuwer',
                  uitleg:
                    'Versnelt de afschilfering van gepigmenteerde huidcellen. Hoe sneller de celcyclus, hoe eerder de verkleurde cellen het huidoppervlak verlaten. 0.3% is effectief genoeg voor resultaat, laag genoeg voor acne-gevoelige huid.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'De melanineremmer',
                  uitleg:
                    'Blokkeert de overdracht van melanosomen van melanocyten naar huidcellen — de stap waardoor pigment zich verspreidt. Klinisch bewezen brightener. Vermindert ook roodheid en ontstekingen die PIH verergeren.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'De anti-inflammatoire kracht',
                  uitleg:
                    'Ontstekingen triggeren PIH. Bakuchiol is een plantaardig ingrediënt met bewezen anti-inflammatoire werking — het helpt voorkomen dat nieuwe puistjes nieuwe vlekken achterlaten terwijl de bestaande vervagen.',
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
                  'Rode of bruine vlekken hebt na puistjes',
                  'Acne-gevoelige huid hebt die snel irriteert',
                  'Een egalere huidtint wilt zonder agressieve behandelingen',
                  'Eerder brighteners probeerde die niet werkten',
                  'Eén product wil in plaats van een uitgebreide routine',
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
                SPF is niet optioneel
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                <div>
                  <span className="text-[#C9A96E] font-medium">Week 1–2:</span> 2× per week, 's avonds op droge huid.
                  Laat je huid wennen aan het actieve retinol.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Week 3–4:</span> Verhoog naar 3–4× als er geen
                  irritatie optreedt. PIH vervaagt zichtbaar.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Elke ochtend:</span> SPF 30 of hoger verplicht.
                  UV verduistert hyperpigmentatie actief — zonder SPF werkt retinol maar half.
                </div>
                <div className="pt-2 border-t border-white/10 text-stone-500 text-[12px]">
                  Na reinigen, vóór vochtinbrengende crème. Geen AHA/BHA combineren op dezelfde avond.
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
              Retinol & acne littekens
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Helpt retinol tegen acne littekens?',
                  a: 'Ja. Retinol versnelt de celvernieuwing waardoor gepigmenteerde huidcellen sneller worden afgestoten. Niacinamide 10% blokkeert tegelijkertijd de melanineoverdracht — de combinatie werkt sneller dan elk ingrediënt apart.',
                },
                {
                  v: 'Wat is het verschil tussen acne littekens en post-acne pigmentatie?',
                  a: 'Echte acne littekens zijn structurele huidschade (kuiltjes, verheven plekken). Post-acne pigmentatie (PIH) zijn de rode of bruine vlakke verkleuringen die na een puistje achterblijven — dit pakt retinol + niacinamide effectief aan.',
                },
                {
                  v: 'Kan ik Reset Serum gebruiken als ik nog actieve acne heb?',
                  a: 'Retinol kan actieve acne helpen door de talgproductie te reguleren, maar je kunt de eerste weken purgen — tijdelijk meer puistjes door versnelde celvernieuwing. Start met 2× per week en bouw langzaam op.',
                },
                {
                  v: 'Hoe lang duurt het voordat vlekken vervagen?',
                  a: 'Post-acne pigmentatie vervaagt bij consistent gebruik na 6–12 weken merkbaar. Recente vlekken reageren sneller dan oudere. SPF overdag is essentieel — UV verduistert pigmentvlekken actief.',
                },
                {
                  v: 'Werkt dit ook op hormonale acne vlekken?',
                  a: 'Ja. Hormonale acne laat dezelfde post-inflammatoire hyperpigmentatie achter. Niacinamide remt de melanineoverdracht ongeacht de oorzaak. Retinol versnelt het uitwisselen van de verkleurde huidcellen.',
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
                <em className="italic text-[#C9A96E]">egalere huidtint?</em>
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
                Parfumvrij · Acne-geschikt · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
