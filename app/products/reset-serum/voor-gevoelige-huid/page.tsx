import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol Serum voor Gevoelige Huid — MAUYI Reset Serum',
  description:
    'Gevoelige huid en retinol gaan zelden samen. MAUYI Reset Serum is anders: retinol 0.3% gebufferd met bakuchiol en niacinamide 10% — minder irritatie, wél resultaat. Parfumvrij.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/voor-gevoelige-huid` },
  openGraph: {
    title: 'Retinol Serum voor Gevoelige Huid | MAUYI Reset Serum',
    description:
      'Speciaal geformuleerd voor gevoelige huid. Retinol 0.3% + niacinamide 10% + bakuchiol in één parfumvrije formule.',
    url: `${BASE_URL}/products/reset-serum/voor-gevoelige-huid`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum voor gevoelige huid' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Kan ik retinol gebruiken als ik gevoelige huid heb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, maar alleen met de juiste formule. Standaard retinolproducten irriteren gevoelige huid omdat ze geen ingrediënten bevatten die de barrière ondersteunen. MAUYI Reset Serum combineert retinol 0.3% met niacinamide 10% (voor barrièreherstel) en bakuchiol 0.5% (verhoogt tolerantie) — speciaal zodat gevoelige huid de actieve ingrediënten wél verdraagt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom irriteert retinol mijn huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retinol versnelt celvernieuwing, wat aanvankelijk roodheid, schilfering of een branderig gevoel kan veroorzaken — de zogenaamde "retinoid dermatitis". Gevoelige huid heeft een zwakkere barrièrefunctie, waardoor dit effect sterker is. Bakuchiol vermindert dit door als adaptogeen te werken: het laat je huid wennen aan retinol zonder directe irritatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat maakt MAUYI geschikt voor gevoelige huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vier dingen: (1) Retinol 0.3% — effectief maar niet te agressief. (2) Niacinamide 10% — versterkt de huidbarrière en vermindert roodheid terwijl retinol werkt. (3) Bakuchiol 0.5% — verhoogt de tolerantie voor retinol. (4) Volledig parfumvrij — geen geurstoffen die gevoelige huid triggeren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel zie ik resultaat bij gevoelige huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste mensen met gevoelige huid zien na 4–6 weken een egaler huidtextuur en verminderde roodheid. Merkbare anti-aging resultaten (fijnere lijntjes, verbeterde textuur) zijn zichtbaar na 8–12 weken. Begin met 2–3x per week om je huid te laten wennen, daarna dagelijks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MAUYI Reset Serum ook geschikt voor rosacea of reactieve huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor rosacea raden we altijd overleg met een dermatoloog aan voordat je retinol introduceert. Voor reactieve huid (die rood wordt van externe prikkels maar geen chronische aandoening heeft) is MAUYI Reset Serum bewust zo geformuleerd: geen parfum, geen essentiële oliën, niacinamide als kalmerende buffer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik MAUYI combineren met mijn dagcrème voor gevoelige huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Gebruik het Reset Serum \'s avonds na het reinigen op droge huid. Daarna een eenvoudige vochtinbrengende crème (zonder actieve ingrediënten) als afdichting. Overdag: SPF verplicht, want retinol maakt je huid gevoeliger voor UV.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Retinol serum voor gevoelige huid. Retinol 0.3% + Niacinamide 10% + Bakuchiol 0.5% in één parfumvrije avondformule.',
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
    { '@type': 'ListItem', position: 3, name: 'Voor Gevoelige Huid', item: `${BASE_URL}/products/reset-serum/voor-gevoelige-huid` },
  ],
}

export default function VoorGevoeligeHuidPage() {
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
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 mb-8 text-[11px] text-stone-600 tracking-wide">
                <Link href="/" className="hover:text-[#C9A96E] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/products/reset-serum" className="hover:text-[#C9A96E] transition-colors">Reset Serum</Link>
                <span>/</span>
                <span className="text-stone-500">Gevoelige Huid</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  Voor gevoelige huid
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Retinol serum dat<br />
                <em className="italic text-[#C9A96E]">gevoelige huid verdraagt.</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                De meeste retinolproducten zijn te agressief voor gevoelige huid. Reset Serum is anders:
                drie actieve ingrediënten die elkaar in balans houden — zodat je huid de voordelen wél krijgt,
                zonder de irritatie.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Parfumvrij', 'Gevoelige huid', 'Dermatologisch getest', 'Geen essentiële oliën'].map((tag) => (
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

            {/* Product image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden lg:block hidden">
              <Image
                src="/reset-serum-new.jpg"
                alt="MAUYI Reset Serum voor gevoelige huid"
                fill
                className="object-cover object-center"
                sizes="50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/40 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* ── Waarom gevoelige huid moeite heeft met retinol ── */}
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
                Waarom retinol gevoelige huid<br />
                <em className="italic">zo vaak irriteert</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Retinol werkt door celvernieuwing te versnellen. Die versnelling is precies wat donkere vlekken,
                rimpels en ongelijke textuur aanpakt — maar het is ook de reden dat gevoelige huid er zo slecht
                op reageert.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Gevoelige huid heeft een zwakkere huidbarrière. Dat betekent dat actieve ingrediënten dieper
                en sneller doordringen — en dus meer irritatie veroorzaken dan bedoeld. Roodheid, schilfering,
                een branderig gevoel: de zogenaamde <strong className="font-medium text-[#1A1A1A]">retinoid dermatitis</strong>.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed">
                Veel mensen stoppen dan met retinol. Terwijl het probleem niet retinol is — maar de formulering eromheen.
              </p>
            </div>
          </div>
        </section>

        {/* ── De oplossing: 3 ingrediënten die samenwerken ── */}
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
              <em className="italic text-[#C9A96E]">elkaar in balans houden</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Reset Serum werkt niet ondanks gevoelige huid — het is er speciaal voor ontworpen.
              Elk ingrediënt heeft een rol.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'De actieve kern',
                  uitleg:
                    'Klinisch effectieve dosering. Niet zo laag dat er niets gebeurt, niet zo hoog dat gevoelige huid het niet aankan. 0.3% is de sweet spot voor beginners én gevoelige huid.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'De buffer',
                  uitleg:
                    'Versterkt de huidbarrière terwijl retinol werkt. Vermindert roodheid, kalmeert ontstekingen en houdt vocht vast. Precies wat gevoelige huid nodig heeft als retinol celvernieuwing opstart.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'De tolerantie-verhoger',
                  uitleg:
                    'Plantaardig adaptogeen dat clinisch bewezen de tolerantie voor retinol verhoogt. Je huid went sneller, reageert minder heftig. Niet als retinolvervanger — als versterker.',
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
                Reset Serum is speciaal<br />geschikt als je…
              </h2>
              <ul className="space-y-4">
                {[
                  'Eerder retinol hebt geprobeerd maar irritatie kreeg',
                  'Gevoelige, reactieve of barrière-gevoelige huid hebt',
                  'Retinol wil gebruiken maar niet weet waar te beginnen',
                  'Meerdere losse producten wil vervangen door één formule',
                  'Liever geen parfum, kleurstoffen of essentiële oliën gebruikt',
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

            {/* Usage tip box */}
            <div className="bg-[#0A0908] rounded-2xl p-8 text-white">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-4">Gebruikstip</div>
              <h3 className="text-xl font-semibold mb-4 leading-snug" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Begin rustig, bouw op
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                <div>
                  <span className="text-[#C9A96E] font-medium">Week 1–2:</span> 2× per week, 's avonds op droge huid.
                  Observeer hoe je huid reageert.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Week 3–4:</span> Verhoog naar 3–4× per week als er
                  geen irritatie is.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Daarna:</span> Dagelijks gebruik mogelijk.
                  Overdag altijd SPF 30 of hoger.
                </div>
                <div className="pt-2 border-t border-white/10 text-stone-500 text-[12px]">
                  Na reinigen, vóór je nachtcrème. Geen andere actieve ingrediënten mixen die avond.
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
              Gevoelige huid & retinol
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Kan ik retinol gebruiken als ik gevoelige huid heb?',
                  a: 'Ja, maar alleen met de juiste formule. Standaard retinolproducten irriteren gevoelige huid omdat ze geen ingrediënten bevatten die de barrière ondersteunen. MAUYI Reset Serum combineert retinol 0.3% met niacinamide 10% en bakuchiol 0.5% — speciaal zodat gevoelige huid de actieve ingrediënten wél verdraagt.',
                },
                {
                  v: 'Waarom irriteert retinol mijn huid?',
                  a: 'Retinol versnelt celvernieuwing. Gevoelige huid heeft een zwakkere barrière, waardoor actieve ingrediënten dieper doordringen en meer irritatie veroorzaken dan bedoeld. Bakuchiol in het Reset Serum vermindert dit door als adaptogeen te werken.',
                },
                {
                  v: 'Hoe snel zie ik resultaat?',
                  a: 'Bij gevoelige huid zie je na 4–6 weken een egaler huidtextuur en minder roodheid. Merkbare anti-aging resultaten zijn zichtbaar na 8–12 weken. Begin met 2–3× per week om je huid te laten wennen.',
                },
                {
                  v: 'Is dit ook geschikt voor rosacea?',
                  a: 'Voor rosacea raden we altijd overleg met een dermatoloog aan voordat je retinol introduceert. Voor reactieve huid (rood van externe prikkels, maar geen chronische aandoening) is Reset Serum bewust zo geformuleerd: geen parfum, geen essentiële oliën, niacinamide als kalmerende buffer.',
                },
                {
                  v: 'Kan ik dit combineren met mijn dagcrème?',
                  a: "Ja. Gebruik het Reset Serum 's avonds na reinigen op droge huid, daarna een eenvoudige vochtinbrengende crème. Overdag altijd SPF, want retinol maakt je huid gevoeliger voor UV.",
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
                Klaar om retinol<br />
                <em className="italic text-[#C9A96E]">eindelijk te laten werken?</em>
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
                Parfumvrij · Voor gevoelige huid · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
