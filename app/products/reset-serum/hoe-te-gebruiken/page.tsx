import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Hoe gebruik je MAUYI Reset Serum? Complete gebruikshandleiding',
  description:
    'Stap-voor-stap handleiding voor MAUYI Reset Serum. Wanneer aanbrengen, hoeveel, hoe opbouwen, wat combineren en wat vermijden. Alles wat je nodig hebt voor optimaal resultaat.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/hoe-te-gebruiken` },
  openGraph: {
    title: 'Hoe gebruik je MAUYI Reset Serum? | Gebruikshandleiding',
    description:
      'Complete gebruikshandleiding voor Reset Serum: opbouwschema, layering, combinaties en veelgemaakte fouten.',
    url: `${BASE_URL}/products/reset-serum/hoe-te-gebruiken`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'Hoe gebruik je MAUYI Reset Serum' }],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Hoe gebruik je MAUYI Reset Serum?',
  description: 'Stap-voor-stap gebruikshandleiding voor MAUYI Reset Serum met retinol 0.3%, niacinamide 10% en bakuchiol 0.5%.',
  image: `${BASE_URL}/reset-serum-new.jpg`,
  totalTime: 'PT5M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Reinig je huid',
      text: 'Reinig je gezicht grondig met een milde cleanser. Verwijder alle make-up, SPF en talg.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Dep droog',
      text: 'Dep je huid droog met een schone handdoek. Breng retinol altijd aan op droge huid — natte huid verhoogt de absorptiediepte en dus de kans op irritatie.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Breng Reset Serum aan',
      text: 'Neem 2–3 druppels op je vingertoppen. Verdeel over voorhoofd, wangen, neus en kin. Vermijd oogleden en de lip-rand. Massage voorzichtig in.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Wacht 60–90 seconden',
      text: 'Laat het serum intrekken voordat je een vochtinbrengende crème aanbrengt. Dit voorkomt dilutie van de actieve ingrediënten.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Breng vochtinbrengende crème aan',
      text: 'Sluit af met een vochtinbrengende crème zonder actieve ingrediënten. Dit versterkt de barrière en minimaliseert mogelijke irritatie.',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'nl-NL',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wanneer gebruik ik Reset Serum: ochtend of avond?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Altijd 's avonds. Retinol is UV-gevoelig: blootstelling aan zonlicht na gebruik versnelt afbraak van retinol en maakt je huid extra gevoelig voor UV-schade. Gebruik Reset Serum uitsluitend als laatste stap in je avondroutine, vóór je nachtcrème.",
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel product gebruik ik per keer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Twee tot drie druppels zijn voldoende voor het hele gezicht. Meer gebruiken verhoogt niet het effect — het verhoogt alleen de kans op irritatie. Een kleine hoeveelheid gelijkmatig verdeeld is effectiever dan een dikke laag op één plek.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe bouw ik het gebruik op?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Week 1–2: 2× per week. Week 3–4: 3–4× per week als er geen irritatie is. Daarna: dagelijks mogelijk. Houd bij hoe je huid reageert. Bij aanhoudende roodheid of schilfering: terugschalen en langzamer opbouwen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik Reset Serum combineren met andere actieve ingrediënten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Combineer niet op dezelfde avond: AHA/BHA (glycolzuur, salicylzuur), vitamine C, benzoylperoxide. Combineer wél op andere avonden of overdag: vitamine C (overdag), hyaluronzuur (vóór retinol), ceramides (na retinol). Eenvoudigste regel: retinol alleen op retinol-avonden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doe ik overdag als ik retinol gebruik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Overdag altijd SPF 30 of hoger. Retinol versnelt celvernieuwing, waardoor je huid tijdelijk dunner en gevoeliger is voor UV. Zonder SPF ondermijn je de resultaten en vergroot je de kans op pigmentatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn veelgemaakte fouten bij retinol gebruik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest gemaakte fouten: (1) Te snel opbouwen — begin altijd langzaam. (2) Aanbrengen op natte huid — altijd wachten tot huid droog is. (3) Combineren met AHA/BHA op dezelfde avond — overmatige irritatie. (4) Geen SPF overdag — resultaten worden teniet gedaan. (5) Stoppen bij eerste tekenen van irritatie — milde irritatie is normaal bij opbouw.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Reset Serum', item: `${BASE_URL}/products/reset-serum` },
    { '@type': 'ListItem', position: 3, name: 'Hoe te gebruiken', item: `${BASE_URL}/products/reset-serum/hoe-te-gebruiken` },
  ],
}

const steps = [
  {
    nummer: '01',
    titel: 'Reinig je huid',
    uitleg: 'Verwijder alle make-up, SPF en talg met een milde cleanser. Een schone huid zorgt voor optimale opname.',
  },
  {
    nummer: '02',
    titel: 'Dep droog',
    uitleg: 'Breng retinol altijd aan op droge huid. Natte huid verhoogt de absorptiediepte en daarmee de kans op irritatie.',
  },
  {
    nummer: '03',
    titel: '2–3 druppels aanbrengen',
    uitleg: 'Verdeel over voorhoofd, wangen, neus en kin. Vermijd oogleden en liprand. Massage voorzichtig in.',
  },
  {
    nummer: '04',
    titel: '60–90 seconden wachten',
    uitleg: 'Laat het serum intrekken voordat je je nachtcrème aanbrengt. Dit voorkomt dilutie van actieve ingrediënten.',
  },
  {
    nummer: '05',
    titel: 'Afsluiten met vochtinbrenger',
    uitleg: 'Gebruik een crème zonder actieve ingrediënten. Dit versterkt de barrière en minimaliseert mogelijke irritatie.',
  },
]

export default function HoeTeGebruikenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
                <span className="text-stone-500">Gebruikshandleiding</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  Gebruikshandleiding
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Hoe gebruik je<br />
                <em className="italic text-[#C9A96E]">Reset Serum correct?</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                Retinol werkt alleen als je het correct gebruikt. Verkeerd gebruik leidt tot irritatie
                of geen resultaat. Deze handleiding legt alles uit: wanneer, hoeveel, hoe opbouwen
                en wat te combineren.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {["'s Avonds gebruiken", 'Droge huid', 'Opbouwschema', 'SPF overdag'].map((tag) => (
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
                alt="MAUYI Reset Serum gebruikshandleiding"
                fill
                className="object-cover object-center"
                sizes="50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/40 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* ── Stap-voor-stap ── */}
        <section className="bg-white border-b border-stone-100">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Stap voor stap</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-12"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              De avondroutine<br />
              <em className="italic">in vijf stappen</em>
            </h2>

            <div className="space-y-6">
              {steps.map((stap) => (
                <div key={stap.nummer} className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded-xl flex items-center justify-center">
                    <span className="text-[13px] font-bold text-[#C9A96E]">{stap.nummer}</span>
                  </div>
                  <div className="pt-1">
                    <p className="text-[16px] font-semibold text-[#1A1A1A] mb-1">{stap.titel}</p>
                    <p className="text-[14px] text-[#6B6560] font-light leading-relaxed">{stap.uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Opbouwschema ── */}
        <section className="bg-[#FAF8F5]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Opbouwschema</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-4"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Begin rustig,<br />
              <em className="italic text-[#C9A96E]">bouw gestaag op</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-10 max-w-xl">
              Retinol werkt door consistent gebruik over tijd. Haast ondermijnt het resultaat.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  fase: 'Fase 1',
                  periode: 'Week 1–2',
                  frequentie: '2× per week',
                  toelichting: 'Begin conservatief. Observeer hoe je huid reageert. Verwacht mild trekken of lichte roodheid — dit is normaal.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  fase: 'Fase 2',
                  periode: 'Week 3–4',
                  frequentie: '3–4× per week',
                  toelichting: 'Verhoog als er geen aanhoudende irritatie is. Huid begint te wennen aan de actieve ingrediënten.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  fase: 'Fase 3',
                  periode: 'Vanaf week 5',
                  frequentie: 'Dagelijks',
                  toelichting: 'Dagelijks gebruik voor optimale celvernieuwing en langetermijnresultaten. Houd SPF altijd aanwezig overdag.',
                  kleur: 'from-[#C9A96E]/20 to-[#C9A96E]/8',
                },
              ].map((fase) => (
                <div key={fase.fase} className={`bg-gradient-to-br ${fase.kleur} rounded-2xl p-6 border border-stone-200/60`}>
                  <div className="text-[11px] font-bold text-[#C9A96E] tracking-[0.2em] mb-2">{fase.fase}</div>
                  <div className="text-[13px] font-medium text-[#9A9590] mb-1">{fase.periode}</div>
                  <div className="text-[18px] font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {fase.frequentie}
                  </div>
                  <p className="text-[13px] text-[#6B6560] font-light leading-relaxed">{fase.toelichting}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Combineren ── */}
        <section className="bg-white border-t border-stone-100">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Combineren</span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Wat wél en niet<br />combineren
              </h2>

              <div className="mb-6">
                <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-emerald-600 mb-3">Combineer wél</p>
                <ul className="space-y-2">
                  {[
                    'Hyaluronzuur — vóór retinol, voor hydratatie',
                    'Ceramide crème — ná retinol, voor barrièreherstel',
                    'Vitamine C — overdag (niet dezelfde avond)',
                    'SPF overdag — altijd, verplicht',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8l4 4 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[13px] text-[#4A4540] font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-red-500 mb-3">Vermijd dezelfde avond</p>
                <ul className="space-y-2">
                  {[
                    'AHA/BHA (glycolzuur, salicylzuur) — overmatige irritatie',
                    'Vitamine C — pH-conflict, verhoogde irritatie',
                    'Benzoylperoxide — neutraliseert retinol',
                    'Andere retinol-/retinoid-producten',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 text-red-400 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
                      </svg>
                      <span className="text-[13px] text-[#4A4540] font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#0A0908] rounded-2xl p-8 text-white h-fit">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-4">Veelgemaakte fouten</div>
              <h3 className="text-xl font-semibold mb-5 leading-snug" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Voorkom de meest gemaakte fouten
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                {[
                  { fout: 'Te snel opbouwen', oplossing: 'Begin altijd met 2× per week, ongeacht je eerdere ervaring met retinol.' },
                  { fout: 'Aanbrengen op natte huid', oplossing: 'Wacht tot je huid volledig droog is na het reinigen — minimaal 2 minuten.' },
                  { fout: 'Geen SPF overdag', oplossing: 'SPF is verplicht. Zonder zon-bescherming worden retinol-resultaten teniet gedaan.' },
                  { fout: 'Stoppen bij irritatie', oplossing: 'Milde irritatie bij opbouw is normaal. Schaal terug naar 1× per week en bouw langzamer op.' },
                ].map((item) => (
                  <div key={item.fout} className="border-b border-white/8 pb-4 last:border-0 last:pb-0">
                    <span className="text-white font-medium">{item.fout}:</span>{' '}
                    <span>{item.oplossing}</span>
                  </div>
                ))}
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
              Gebruik & routine
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: "Wanneer gebruik ik Reset Serum: ochtend of avond?",
                  a: "Altijd 's avonds. Retinol is UV-gevoelig — blootstelling aan zonlicht na gebruik versnelt afbraak en maakt je huid extra gevoelig voor UV-schade.",
                },
                {
                  v: 'Hoeveel product gebruik ik per keer?',
                  a: 'Twee tot drie druppels voor het hele gezicht. Meer gebruiken verhoogt niet het effect — het verhoogt alleen de kans op irritatie.',
                },
                {
                  v: 'Hoe bouw ik het gebruik op?',
                  a: 'Week 1–2: 2× per week. Week 3–4: 3–4× per week. Daarna dagelijks mogelijk. Houd bij hoe je huid reageert en schaal terug bij aanhoudende irritatie.',
                },
                {
                  v: 'Kan ik Reset Serum combineren met andere actieve ingrediënten?',
                  a: 'Niet op dezelfde avond: AHA/BHA, vitamine C, benzoylperoxide. Wél combineren: hyaluronzuur vóór retinol, ceramide crème erna, vitamine C overdag.',
                },
                {
                  v: 'Wat doe ik overdag als ik retinol gebruik?',
                  a: 'Overdag altijd SPF 30 of hoger. Retinol versnelt celvernieuwing, waardoor je huid tijdelijk gevoeliger is voor UV. Zonder SPF ondermijn je de resultaten.',
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
                Klaar om te beginnen?<br />
                <em className="italic text-[#C9A96E]">Nu weet je hoe.</em>
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
                Parfumvrij · Retinol 0.3% · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
