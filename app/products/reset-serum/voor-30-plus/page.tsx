import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol op je 30e Beginnen — Waarom Nu het Juiste Moment Is | MAUYI',
  description:
    'Op je 30e begint collageenverlies merkbaar te worden. MAUYI Reset Serum is ontworpen voor preventieve anti-aging: retinol 0.3% stimuleert collageen voordat rimpels diep worden. Start nu.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/voor-30-plus` },
  openGraph: {
    title: 'Retinol Beginnen op je 30e | MAUYI Reset Serum',
    description:
      'Je 30e is het ideale moment om te beginnen met retinol. Preventieve collageenstimulatie — voordat rimpels structureel worden.',
    url: `${BASE_URL}/products/reset-serum/voor-30-plus`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum voor 30 plus' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom is je 30e een goed moment om te beginnen met retinol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Collageenproductie begint af te nemen vanaf je 25e met circa 1% per jaar. Op je 30e is dat verlies al merkbaar in huidtextuur en elasticiteit — maar huid is dan nog jong genoeg om sterk te reageren op retinol. Preventieve collageenstimulatie op je 30e is effectiever dan reactieve behandeling op je 45e.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de eerste tekenen van huidveroudering op je 30e?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De eerste tekenen op je 30e zijn subtiel: huid die minder snel terugveert na een glimlach, fijne lijntjes rond de ogen en mond, lichte verlies van gezichtsvolume, en huid die minder glad aanvoelt dan op je 25e. Dit zijn allemaal signalen dat collageenproductie vertraagt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is retinol ook geschikt als ik nog geen rimpels heb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja — preventieve anti-aging is effectiever dan reactief. Retinol stimuleert collageen en houdt de huid in een actieve celvernieuwingscyclus. Beginnen vóórdat rimpels diep zijn, betekent dat je ze nooit zo diep laat worden. Het is de beste investering die je kunt doen voor je huid op de lange termijn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik als ik in de dertig ben een hogere concentratie gebruiken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet noodzakelijk. 0.3% is effectief voor preventieve en vroege anti-aging — het geeft klinisch bewezen collageenstimulatie zonder de irritatie van hogere concentraties. Als je huid volledig gewend is na 6+ maanden dagelijks gebruik, kun je overwegen naar 0.5% te gaan. Maar voor de meeste mensen in de 30-40 is 0.3% meer dan genoeg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke andere producten heb ik nodig naast retinol op mijn 30e?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een goede basisroutine voor je 30e bestaat uit: (1) SPF 30+ elke ochtend — de meest bewezen anti-aging interventie. (2) Retinol serum \'s avonds. (3) Een hydraterende crème. Optioneel: vitamine C serum \'s ochtends voor synergistisch antioxidant-effect. Je hebt geen tien producten nodig — consistentie met drie goede producten overtreft altijd een gecompliceerde routine zonder consistentie.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Preventief anti-aging retinol serum voor 30-plussers. Retinol 0.3% stimuleert collageen + Niacinamide 10% + Bakuchiol 0.5% in één parfumvrije avondformule.',
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
    { '@type': 'ListItem', position: 3, name: 'Voor 30+', item: `${BASE_URL}/products/reset-serum/voor-30-plus` },
  ],
}

export default function Voor30PlusPage() {
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
                <span className="text-stone-500">Voor 30+</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  30+ preventieve anti-aging
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Waarom je op je 30e<br />
                <em className="italic text-[#C9A96E]">met retinol moet beginnen.</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                Op je 30e begint collageenverlies merkbaar te worden. Niet met diepe rimpels —
                maar in subtiele elasticiteitsverlies, fijnere lijntjes en huid die minder snel herstelt.
                Dit is het moment om preventief te handelen, niet te wachten tot het zichtbaarder is.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Preventieve anti-aging', 'Collageenstimulatie', '30–40 jaar', 'Parfumvrij'].map((tag) => (
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
                alt="MAUYI Reset Serum voor 30 plus preventieve anti-aging"
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
                Wat er in je huid gebeurt<br />
                <em className="italic">tussen je 25e en 35e</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Vanaf je 25e daalt je collageenproductie met circa 1% per jaar. Dat klinkt weinig — maar
                na tien jaar ben je 10% kwijt. Collageen is het structurele eiwit dat huid zijn
                stevigheid, volume en veerkracht geeft. Minder collageen betekent huid die minder snel
                terugveert, fijner aanvoelt, en sneller rimpelt.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Gelijktijdig vertraagt de celvernieuwing. Op je 20e vernieuwde je huid elke 28 dagen.
                Op je 35e duurt dat al 45–60 dagen. Dode huidcellen hopen op, de huid verliest zijn
                glans, en het zelfherstellend vermogen neemt af.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed">
                Retinol is het enige niet-receptplichtige ingrediënt dat beide processen actief keert:
                het <strong className="font-medium text-[#1A1A1A]">stimuleert collageenproductie</strong> en
                versnelt celvernieuwing terug naar het tempo van jongere huid.
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
              <em className="italic text-[#C9A96E]">preventieve huidverjonging</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Elk ingrediënt heeft een andere rol in het actief vertragen van de veroudering — samen compenseren
              ze wat biologie langzaam afneemt.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'De collageen-activator',
                  uitleg:
                    'Bindt aan retinolreceptoren in de dermis en activeert genen die betrokken zijn bij collageensynthese. Tegelijkertijd remt het collagenasen — enzymen die bestaand collageen afbreken. Op je 30e is huid nog jong genoeg om sterk te reageren op dit signaal.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'De elasticiteitsverbeteraar',
                  uitleg:
                    'Verhoogt de synthese van ceramiden en vetzuren in de huidbarrière. Vermindert fijne lijntjes door huid voller en hydratatieer te laten ogen. Klinisch bewezen: verbetert huidtextuur en elasticiteit bij 5–10% gebruik na 8 weken.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'De anti-aging versterker',
                  uitleg:
                    'Plantaardig retinol-equivalent dat via dezelfde retinolreceptorpathway werkt. Klinische studies tonen vergelijkbare anti-aging resultaten als retinol — additief effect wanneer gecombineerd. Voor de 30-plusser: meer effect met minder risico op irritatie.',
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
                  'Tussen de 30 en 45 bent en preventief wil handelen',
                  'Eerste subtiele tekenen van veroudering opmerkt',
                  'Wil voorkomen dat rimpels dieper worden',
                  'Eerder retinol probeerde maar bang was voor bijwerkingen',
                  'Een effectieve avondroutine wil in één stap',
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
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-4">Preventief protocol</div>
              <h3 className="text-xl font-semibold mb-4 leading-snug" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Drie producten. Dat is alles.
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                <div>
                  <span className="text-[#C9A96E] font-medium">Ochtend:</span> SPF 30 of hoger. Dit is
                  de meest bewezen anti-aging interventie die bestaat. Niet optioneel.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">'s Avonds:</span> Reset Serum op droge
                  huid na reinigen. Begin 2× per week, bouw op naar dagelijks in 4–6 weken.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Altijd:</span> Een goede vochtinbrengende
                  crème na het serum. Huid die goed gehydrateerd is, reageert beter op retinol.
                </div>
                <div className="pt-2 border-t border-white/10 text-stone-500 text-[12px]">
                  Consistentie over jaren telt meer dan perfectie over weken. Kies één routine en hou het vol.
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
              Retinol op je 30e
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Waarom is je 30e een goed moment om te beginnen met retinol?',
                  a: 'Collageenproductie daalt vanaf je 25e met circa 1% per jaar. Op je 30e is dat verlies merkbaar maar huid is nog jong genoeg om sterk te reageren. Preventieve collageenstimulatie op je 30e is effectiever dan reactieve behandeling op je 45e.',
                },
                {
                  v: 'Wat zijn de eerste tekenen van veroudering op je 30e?',
                  a: 'Huid die minder snel terugveert, fijne lijntjes rond de ogen en mond, licht volumeverlies, en huid die minder glad aanvoelt. Allemaal subtiel, maar signalen dat collageenproductie vertraagt.',
                },
                {
                  v: 'Is retinol ook geschikt als ik nog geen rimpels heb?',
                  a: 'Ja — preventieve anti-aging is effectiever dan reactief. Beginnen vóórdat rimpels diep zijn, betekent dat je ze nooit zo diep laat worden. Het is de beste investering voor je huid op de lange termijn.',
                },
                {
                  v: 'Moet ik een hogere concentratie gebruiken naarmate ik ouder word?',
                  a: '0.3% is effectief voor preventieve en vroege anti-aging. Als huid volledig gewend is na 6+ maanden dagelijks gebruik, kun je naar 0.5% gaan. Voor de meeste mensen in de 30–40 is 0.3% meer dan genoeg.',
                },
                {
                  v: 'Welke andere producten heb ik nodig naast retinol?',
                  a: 'SPF 30+ elke ochtend (de meest bewezen anti-aging interventie), retinol \'s avonds, en een hydraterende crème. Optioneel: vitamine C \'s ochtends. Je hebt geen tien producten nodig — consistentie met drie goede producten overtreft een gecompliceerde routine.',
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
                Begin nu.<br />
                <em className="italic text-[#C9A96E]">Voordat het te laat is.</em>
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
                Parfumvrij · Preventieve anti-aging · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
