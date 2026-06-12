import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol Serum voor Hyperpigmentatie — MAUYI Reset Serum',
  description:
    'Donkere vlekken, melasma en post-acne hyperpigmentatie aanpakken met retinol en niacinamide. MAUYI Reset Serum: bewezen formule voor een egaler huidtoon. Parfumvrij.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/voor-hyperpigmentatie` },
  openGraph: {
    title: 'Retinol Serum voor Hyperpigmentatie | MAUYI Reset Serum',
    description:
      'Retinol 0.3% + niacinamide 10% voor donkere vlekken en ongelijke huidtoon. Klinisch bewezen effectiviteit bij hyperpigmentatie.',
    url: `${BASE_URL}/products/reset-serum/voor-hyperpigmentatie`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum voor hyperpigmentatie' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'nl-NL',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe werkt retinol bij hyperpigmentatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retinol versnelt celvernieuwing, waardoor gepigmenteerde huidcellen sneller worden vervangen door nieuwe, ongepigmenteerde cellen. Dit verdunt de concentratie melanine aan het huidoppervlak over tijd. Tegelijkertijd remt niacinamide 10% de overdracht van melanine naar huidcellen (melanosomen) — dubbele aanpak, dubbele effectiviteit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt retinol bij post-acne vlekken (PIH)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Post-inflammatoire hyperpigmentatie (PIH) — de bruine vlekken die overblijven na puistjes — reageert goed op retinol. Retinol versnelt de vervanging van gepigmenteerde cellen en verkleint de actieve melanineproductie op de plek van de vroegere ontsteking. Niacinamide ondersteunt dit door het melanine-transferproces te remmen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan retinol melasma verbeteren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retinol kan melasma verbeteren maar is geen volledige oplossing. Melasma heeft een hormonale component die retinol niet aanpakt. Voor milde tot matige melasma is de combinatie retinol + niacinamide effectief voor egalisering. Voor ernstige melasma is aanvullende behandeling (azelaic acid, kojic acid of dermatologische interventie) aan te raden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt het voor donkere vlekken vervagen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post-acne vlekken en milde zonnevlekken vervagen bij consistent gebruik na 8–12 weken. Diepere of oudere pigmentatie kan 16–24 weken vragen. Cruciale factor: overdag consequent SPF 30 of hoger gebruiken — UV stimuleert melanineproductie en ondermijnt alle andere behandeling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is SPF echt zo belangrijk bij hyperpigmentatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absoluut. UV-straling is de grootste trigger voor melanineproductie. Zonder dagelijkse SPF-bescherming wordt elk pigmentatiebeheel teniet gedaan. Retinol maakt je huid ook extra UV-gevoelig. Gebruik overdag altijd SPF 30 of hoger — dit is niet optioneel bij de behandeling van hyperpigmentatie.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Retinol serum voor hyperpigmentatie. Retinol 0.3% + Niacinamide 10% + Bakuchiol 0.5% voor donkere vlekken en ongelijke huidtoon.',
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
    { '@type': 'ListItem', position: 3, name: 'Voor Hyperpigmentatie', item: `${BASE_URL}/products/reset-serum/voor-hyperpigmentatie` },
  ],
}

export default function VoorHyperpigmentatiePage() {
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
                <span className="text-stone-500">Hyperpigmentatie</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  Tegen hyperpigmentatie
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Donkere vlekken aanpakken<br />
                <em className="italic text-[#C9A96E]">met bewezen formule.</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                Retinol versnelt celvernieuwing zodat gepigmenteerde cellen sneller worden vervangen.
                Niacinamide remt de melanine-overdracht naar huidcellen. Samen de meest effectieve
                niet-medische combinatie voor hyperpigmentatie.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Hyperpigmentatie', 'Post-acne vlekken', 'Egale huidtoon', 'Parfumvrij'].map((tag) => (
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
                alt="MAUYI Reset Serum voor hyperpigmentatie"
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
                Drie soorten<br />
                <em className="italic">hyperpigmentatie</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                <strong className="font-medium text-[#1A1A1A]">Zonnevlekken</strong> — ontstaan door langdurige UV-blootstelling die melanocyten aanzet tot overproductie van melanine op specifieke plekken.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                <strong className="font-medium text-[#1A1A1A]">Post-inflammatoire hyperpigmentatie (PIH)</strong> — bruine vlekken na acne, eczeem of andere huidontstekingen. Melanocyten reageren op ontsteking met overmatige pigmentaanmaak.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed">
                <strong className="font-medium text-[#1A1A1A]">Melasma</strong> — hormonaal gestuurde pigmentatie, vaak symmetrisch op wangen en voorhoofd. Verergert door UV en hormonale veranderingen. Retinol + niacinamide zijn effectief voor egalisering; ernstige melasma vereist aanvullende behandeling.
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
              Dubbele aanpak<br />
              <em className="italic text-[#C9A96E]">op melanine</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Retinol en niacinamide pakken hyperpigmentatie via twee verschillende mechanismen aan.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'Celvernieuwing versneller',
                  uitleg:
                    'Versnelt de vervanging van gepigmenteerde huidcellen door nieuwe ongepigmenteerde cellen. Vermindert ook de expressie van tyrosinase — het enzym dat melanineproductie aanstuurt. Dubbele aanpak op pigmentvorming.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'Melanine-remmer',
                  uitleg:
                    'Remt de overdracht van melanosomen (melaninepakketjes) van melanocyten naar keratinocyten. Dit is een bewezen, directe aanpak op het pigmentatieproces — klinisch effectief bij concentraties vanaf 2%, MAUYI gebruikt 10%.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'Anti-inflammatoir',
                  uitleg:
                    'Bakuchiol heeft anti-inflammatoire eigenschappen die PIH (post-inflammatoire hyperpigmentatie) helpen voorkomen. Minder ontsteking = minder melaninestimulatie. Ondersteunt het algehele egaliserende effect.',
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
                  'Donkere vlekken hebt na acne, zon of ontsteking',
                  'Een ongelijke huidtoon wil egaliseren',
                  'Milde melasma wil behandelen zonder medische interventie',
                  'Zonnevlekken wil verminderen met consistent gebruik',
                  'Geen hydrochinon of agressieve bleekproducten wil',
                  'Een bewezen, geduldige aanpak verkiest boven snelle maar irriterende oplossingen',
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
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-4">Kritieke gebruikstip</div>
              <h3 className="text-xl font-semibold mb-4 leading-snug" style={{ fontFamily: 'var(--font-cormorant)' }}>
                SPF is niet optioneel
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                <div>
                  <span className="text-[#C9A96E] font-medium">Avond:</span> Reset Serum op droge huid.
                  Niacinamide werkt actief op melanine-overdracht.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Ochtend:</span> SPF 30 of hoger is verplicht.
                  UV ondermijnt al je behandeling.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Na 8–12 weken:</span> Post-acne vlekken
                  en milde zonnevlekken merkbaar vervaagd.
                </div>
                <div className="pt-2 border-t border-white/10 text-stone-500 text-[12px]">
                  Zelfs op bewolkte dagen: UV-A penetreert wolken en glas. Dagelijkse SPF is niet onderhandelbaar.
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
              Hyperpigmentatie &amp; retinol
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Hoe werkt retinol bij hyperpigmentatie?',
                  a: 'Retinol versnelt celvernieuwing waardoor gepigmenteerde cellen sneller worden vervangen door nieuwe ongepigmenteerde cellen. Niacinamide 10% remt tegelijkertijd de melanine-overdracht naar huidcellen — dubbele aanpak, dubbele effectiviteit.',
                },
                {
                  v: 'Werkt retinol bij post-acne vlekken?',
                  a: 'Ja. Post-inflammatoire hyperpigmentatie (PIH) — bruine vlekken na puistjes — reageert goed op retinol. Retinol versnelt de vervanging van gepigmenteerde cellen. Niacinamide ondersteunt dit door het melanine-transferproces te remmen.',
                },
                {
                  v: 'Hoe lang duurt het voor donkere vlekken vervagen?',
                  a: 'Post-acne vlekken en milde zonnevlekken vervagen bij consistent gebruik na 8–12 weken. Diepere of oudere pigmentatie kan 16–24 weken vragen. Dagelijkse SPF is essentieel — zonder bescherming wordt elk resultaat teniet gedaan.',
                },
                {
                  v: 'Kan retinol melasma verbeteren?',
                  a: 'Retinol kan melasma verbeteren maar is geen volledige oplossing. Melasma heeft een hormonale component die retinol niet aanpakt. Voor milde melasma is de combinatie retinol + niacinamide effectief. Ernstige melasma vereist aanvullende dermatologische behandeling.',
                },
                {
                  v: 'Is SPF echt zo belangrijk bij hyperpigmentatie?',
                  a: 'Absoluut. UV stimuleert melanineproductie — de grootste trigger voor hyperpigmentatie. Zonder dagelijkse SPF 30+ wordt elk behandelingsresultaat teniet gedaan. Retinol maakt huid ook extra UV-gevoelig. SPF is niet optioneel.',
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
                Donkere vlekken verminderen.<br />
                <em className="italic text-[#C9A96E]">Egale huid bereiken.</em>
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
                Parfumvrij · Egale huidtoon · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
