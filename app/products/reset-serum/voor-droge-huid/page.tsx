import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol Serum voor Droge Huid — Zonder Uitdroging | MAUYI',
  description:
    'Retinol en droge huid gaan zelden samen. MAUYI Reset Serum combineert retinol 0.3% met niacinamide 10% voor barrièreversterking — zodat droge huid wél de anti-aging voordelen krijgt zonder schilfering.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/voor-droge-huid` },
  openGraph: {
    title: 'Retinol Serum voor Droge Huid | MAUYI Reset Serum',
    description:
      'Droge huid en retinol in balans. Niacinamide 10% versterkt de vochtbarrière terwijl retinol werkt — geen uitdroging, wel resultaat.',
    url: `${BASE_URL}/products/reset-serum/voor-droge-huid`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum voor droge huid' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Kan ik retinol gebruiken als ik droge huid heb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, maar de formule rondom retinol is cruciaal. Retinol op zichzelf kan droge huid verder uitdrogen door de huidbarrière tijdelijk te verstoren. Niacinamide 10% in Reset Serum stimuleert ceramideproductie en houdt vocht vast — de combinatie zorgt dat droge huid retinol verdraagt zonder schilfering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom wordt mijn huid droger van retinol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retinol versnelt celvernieuwing, wat tijdelijk de huidbarrière verstoort. Huidcellen bereiken het oppervlak sneller dan normaal, wat kan leiden tot een minder goed georganiseerde barrière en daardoor meer vochtverlies (TEWL). Dit is de retinizatieperiode — tijdelijk, en te beperken met de juiste ondersteunende ingrediënten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik retinol voor of na mijn vochtinbrengende crème aanbrengen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retinol wordt aangebracht op droge huid na het reinigen, vóór de vochtinbrengende crème. De vochtinbrengende crème "sandwiches" het retinol vervolgens in — dit heet de sandwich-methode. Voor extra droge of zeer gevoelige huid: breng de vochtinbrengende crème aan vóór het serum (buffermethode) voor nog minder irritatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke ingrediënten helpen bij droge huid en retinol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niacinamide versterkt de ceramidelaag en houdt vocht vast. Bakuchiol is minder uitdrogend dan puur retinol en heeft anti-inflammatoire eigenschappen. Hyaluronzuur in je vochtinbrengende crème trekt vocht aan van buitenaf. De combinatie van deze drie maakt retinol draagbaar voor droge huid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Helpt retinol ook bij droge huid zelf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indirect ja. Retinol stimuleert de aanmaak van glycosaminoglycanen — de moleculen die vocht vasthouden in de dermis. Op de lange termijn (12+ weken) verbetert retinol de huidhydratatie structureel. Maar in de eerste 4–8 weken is extra vochtinbreng essentieel om de retinizatieperiode te overbruggen.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Retinol serum voor droge huid. Retinol 0.3% + Niacinamide 10% voor barrièreversterking + Bakuchiol 0.5% in één parfumvrije avondformule.',
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
    { '@type': 'ListItem', position: 3, name: 'Voor Droge Huid', item: `${BASE_URL}/products/reset-serum/voor-droge-huid` },
  ],
}

export default function VoorDroegeHuidPage() {
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
                <span className="text-stone-500">Droge Huid</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  Voor droge huid
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Retinol serum dat je<br />
                <em className="italic text-[#C9A96E]">droge huid niet uitdroogt.</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                Retinol en droge huid zijn geen goede combinatie — tenzij je de barrière actief beschermt
                terwijl retinol werkt. Reset Serum bevat niacinamide 10% als vochtvasthouder, zodat droge
                huid de anti-aging voordelen wél krijgt.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Barrièreversterkend', 'Geen schilfering', 'Droge huid', 'Parfumvrij'].map((tag) => (
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
                alt="MAUYI Reset Serum voor droge huid"
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
                Waarom retinol droge huid<br />
                <em className="italic">zo vaak maakt uitdroogt</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Retinol versnelt celvernieuwing — dat is de kern van alles wat het doet. Maar die versnelling
                verstoort tijdelijk de barrièrefunctie van de huid. Nieuwe cellen bereiken het oppervlak
                sneller dan normaal, waardoor er minder tijd is voor de lipide-matrix die huid waterdicht maakt.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Het resultaat: meer <strong className="font-medium text-[#1A1A1A]">transepidermaal waterverlies (TEWL)</strong>.
                Droge huid heeft al een minder effectieve barrière dan normale huid — dus de extra verstoring
                voelt extra heftig: strakheid, schilfering, soms zelfs irritatie.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed">
                De meeste retinolproducten doen niets tegen dit mechanisme. Reset Serum bevat niacinamide
                10% dat actief ceramideproductie stimuleert — de bouwsteen van een gezonde vochtbarrière.
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
              <em className="italic text-[#C9A96E]">retinol en hydratatie combineren</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Elk ingrediënt heeft een specifieke rol in het beschermen van de vochtbarrière terwijl retinol werkt.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'De anti-aging kern',
                  uitleg:
                    '0.3% is de laagste klinisch effectieve concentratie. Voor droge huid is dit niet alleen voldoende — het is ook de concentratie die de barrière het minst verstoort. Hogere percentages geven snellere, maar ook meer uitdrogende resultaten.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'De barrièrebeschermer',
                  uitleg:
                    'Stimuleert ceramide- en vetzuurproductie — de lipiden die huid waterdicht maken. Verbetert aantoonbaar de huidhydratatie en vermindert TEWL. Precies wat droge huid nodig heeft als retinol de barrière tijdelijk verstoort.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'De zachte versterker',
                  uitleg:
                    'Bakuchiol is van nature minder uitdrogend dan retinol terwijl het via dezelfde receptorpathway werkt. Het vergroot het totale retinol-achtige effect zonder extra droogheid toe te voegen — een slim alternatief voor een hogere retinolconcentratie.',
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
                  'Droge, strakke of schilferige huid',
                  'Eerder retinol gestopt vanwege uitdroging',
                  'Eczeem-neiging of een verstoorde huidbarrière',
                  'Huid die snel reageert op externe omstandigheden (kou, wind)',
                  'Anti-aging wil zonder de droogheid die retinol normaal geeft',
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
                Sandwich voor maximale hydratatie
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                <div>
                  <span className="text-[#C9A96E] font-medium">Methode 1 (standaard):</span> Reinigen → droog deppen
                  → Reset Serum → vochtinbrengende crème. De crème sandwiches het serum in.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Methode 2 (extra droge huid):</span> Reinigen →
                  lichte vochtinbrengende crème → Reset Serum (buffermethode). Vertraagt absorptie voor minder irritatie.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Week 1–3:</span> 2× per week. Voeg langzaam
                  frequentie toe naarmate huid went.
                </div>
                <div className="pt-2 border-t border-white/10 text-stone-500 text-[12px]">
                  Overdag altijd SPF. Gebruik 's ochtends hyaluronzuur of een rijke dagcrème als aanvulling.
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
              Retinol & droge huid
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Kan ik retinol gebruiken als ik droge huid heb?',
                  a: 'Ja, maar de formule rondom retinol is cruciaal. Niacinamide 10% in Reset Serum stimuleert ceramideproductie en houdt vocht vast — de combinatie zorgt dat droge huid retinol verdraagt zonder schilfering.',
                },
                {
                  v: 'Waarom wordt mijn huid droger van retinol?',
                  a: 'Retinol versnelt celvernieuwing en verstoort tijdelijk de huidbarrière. Dit vergroot het transepidermaal waterverlies (TEWL). Droge huid heeft al een zwakkere barrière, dus dit effect is sterker. Niacinamide beschermt actief tegen dit mechanisme.',
                },
                {
                  v: 'Moet ik retinol voor of na mijn vochtinbrengende crème aanbrengen?',
                  a: 'Standaard: retinol vóór de vochtinbrengende crème op droge huid. Voor extra droge of gevoelige huid: de buffermethode — lichte vochtinbrengende crème vóór het serum — vermindert absorptiesnelheid en irritatie.',
                },
                {
                  v: 'Welke ingrediënten helpen bij droge huid en retinol?',
                  a: 'Niacinamide versterkt de ceramidelaag. Bakuchiol is minder uitdrogend dan puur retinol. Hyaluronzuur trekt vocht aan. De combinatie van deze drie maakt retinol draagbaar voor droge huid.',
                },
                {
                  v: 'Helpt retinol ook bij droge huid zelf?',
                  a: 'Indirect ja. Retinol stimuleert glycosaminoglycanen — de moleculen die vocht vasthouden in de dermis. Op de lange termijn (12+ weken) verbetert retinol de huidhydratatie structureel. In de eerste 4–8 weken is extra vochtinbreng essentieel.',
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
                Retinol dat je droge huid<br />
                <em className="italic text-[#C9A96E]">niet in de steek laat.</em>
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
                Parfumvrij · Barrièreversterkend · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
