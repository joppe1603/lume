import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol Bijwerkingen — Wat te verwachten en hoe MAUYI ze minimaliseert',
  description:
    'Retinol bijwerkingen zoals roodheid, schilfering en purging uitgelegd. Hoe de formule van MAUYI Reset Serum (retinol 0.3% + niacinamide 10% + bakuchiol) ze minimaliseert.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/bijwerkingen` },
  openGraph: {
    title: 'Retinol Bijwerkingen | MAUYI Reset Serum',
    description:
      'Roodheid, schilfering, purging: wat zijn normale retinol bijwerkingen en wanneer moet je stoppen? Eerlijk antwoord.',
    url: `${BASE_URL}/products/reset-serum/bijwerkingen`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'Retinol bijwerkingen uitgelegd' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'nl-NL',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat zijn normale bijwerkingen van retinol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Normale bijwerkingen bij het opstarten zijn: milde roodheid, lichte schilfering, een licht trekkerig gevoel en verhoogde gevoeligheid voor UV. Dit staat bekend als "retinoid dermatitis" en is een teken dat retinol actief werkt. Het verdwijnt doorgaans na 2–4 weken bij opbouw.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is retinol purging en hoe lang duurt het?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Purging is een tijdelijke toename van puistjes bij het starten met retinol. Retinol versnelt celvernieuwing, waardoor verstoppingen die zich diep in de poriën bevinden sneller naar het oppervlak komen. Dit is normaal en duurt 2–6 weken. Purging onderscheidt zich van een echte uitbraak: het verschijnt op plaatsen waar je al eerder puistjes had en verdwijnt vanzelf.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer moet ik stoppen met retinol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stop onmiddellijk en raadpleeg een dermatoloog als je ervaart: ernstige, aanhoudende roodheid of verbranding, open wonden of blaren, hevige schilfering die niet verbetert, of allergische reacties (urticaria, zwelling). Milde irritatie bij opbouw is normaal; ernstige reacties zijn dat niet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe minimaliseert MAUYI Reset Serum bijwerkingen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MAUYI Reset Serum gebruikt drie strategieën: (1) Retinol 0.3% — effectief maar niet te hoog. Hogere concentraties (0.5%–1%) veroorzaken significant meer irritatie zonder proportioneel meer resultaat. (2) Niacinamide 10% — bufferend ingrediënt dat de huidbarrière versterkt en roodheid vermindert terwijl retinol werkt. (3) Bakuchiol 0.5% — verhoogt tolerantie voor retinol, laat huid sneller wennen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is retinol veilig om te gebruiken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Retinol is het meest onderzochte topicale ingrediënt in de dermatologie, met een veiligheidsprofiel van decennia. De bijwerkingen zijn dosisafhankelijk en grotendeels te voorkomen met de juiste opbouw. Niet geschikt tijdens zwangerschap of borstvoeding — overleg altijd met een arts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mag ik retinol gebruiken tijdens de zwangerschap?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Retinol (en alle retinoïden) zijn gecontra-indiceerd tijdens zwangerschap en borstvoeding. Dit geldt voor alle retinol-concentraties, inclusief de lagere OTC-producten. Overleg met je verloskundige of gynaecoloog voor veilige alternatieven.',
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
    { '@type': 'ListItem', position: 3, name: 'Bijwerkingen', item: `${BASE_URL}/products/reset-serum/bijwerkingen` },
  ],
}

const bijwerkingen = [
  {
    naam: 'Milde roodheid',
    ernst: 'Normaal',
    ernstKleur: 'text-amber-600 bg-amber-50',
    uitleg: 'Roodheid in de eerste weken is een teken van verhoogde celactiviteit. Verdwijnt doorgaans na 2–4 weken opbouw.',
    aanpak: 'Schaal terug naar 1–2× per week en bouw langzamer op.',
  },
  {
    naam: 'Schilfering',
    ernst: 'Normaal',
    ernstKleur: 'text-amber-600 bg-amber-50',
    uitleg: 'Versnelde celvernieuwing drijft dode huidcellen sneller naar het oppervlak — dit ziet eruit als schilfering. Normaal bij opbouw.',
    aanpak: 'Gebruik meer hydratatie erna. Scrub niet — dit verergert irritatie.',
  },
  {
    naam: 'Purging',
    ernst: 'Normaal (tijdelijk)',
    ernstKleur: 'text-amber-600 bg-amber-50',
    uitleg: 'Tijdelijke toename van puistjes doordat retinol verstoppingen sneller naar het oppervlak drijft. Duurt 2–6 weken.',
    aanpak: 'Doorzetten. Purging verdwijnt vanzelf. Verschilt van reguliere acne: zit op bekende plekken en verdwijnt snel.',
  },
  {
    naam: 'Verhoogde UV-gevoeligheid',
    ernst: 'Verwacht',
    ernstKleur: 'text-blue-600 bg-blue-50',
    uitleg: 'Retinol maakt de huid tijdelijk gevoeliger voor UV-schade. Niet gevaarlijk bij correcte SPF-gebruik.',
    aanpak: 'Dagelijkse SPF 30 of hoger is verplicht bij retinol-gebruik. Geen onderhandeling.',
  },
  {
    naam: 'Ernstige brandende sensatie',
    ernst: 'Stop — raadpleeg arts',
    ernstKleur: 'text-red-600 bg-red-50',
    uitleg: 'Ernstig branden wijst op mogelijke contact-dermatitis of te agressieve opbouw. Dit is geen normale bijwerking.',
    aanpak: 'Stop gebruik. Herstel barrière met ceramide-crème. Raadpleeg een dermatoloog.',
  },
  {
    naam: 'Zwelling of urticaria',
    ernst: 'Stop — raadpleeg arts',
    ernstKleur: 'text-red-600 bg-red-50',
    uitleg: 'Zwelling, hevige jeuk of een allergische reactie is een contra-indicatie voor verdere gebruik.',
    aanpak: 'Stop onmiddellijk. Dit is een allergische reactie — retinol is niet geschikt voor jou.',
  },
]

export default function BijwerkingenPage() {
  return (
    <>
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
                <span className="text-stone-500">Bijwerkingen</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  Eerlijk & transparant
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Retinol bijwerkingen:<br />
                <em className="italic text-[#C9A96E]">wat is normaal?</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                Retinol heeft bijwerkingen. Dat hoort erbij — en de meeste zijn normaal en tijdelijk.
                Deze pagina legt eerlijk uit wat je kunt verwachten, wanneer je door moet zetten
                en wanneer je moet stoppen.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Eerlijk & transparant', 'Klinisch onderbouwd', 'Geen verborgen informatie'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-[#C9A96E] bg-[#C9A96E]/10 border border-[#C9A96E]/20 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/products/reset-serum/hoe-te-gebruiken"
                className="inline-flex items-center gap-2.5 bg-[#C9A96E] hover:bg-[#B8965C] text-[#0A0908] font-semibold text-[14px] tracking-[0.04em] px-7 py-3.5 rounded-xl transition-colors"
              >
                Lees de gebruikshandleiding
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </Link>
            </div>

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden lg:block hidden">
              <Image
                src="/reset-serum-new.jpg"
                alt="MAUYI Reset Serum bijwerkingen transparant"
                fill
                className="object-cover object-center"
                sizes="50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/40 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* ── Bijwerkingen overzicht ── */}
        <section className="bg-white border-b border-stone-100">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Overzicht</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-12"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Alle bijwerkingen<br />
              <em className="italic">uitgelegd</em>
            </h2>

            <div className="space-y-4">
              {bijwerkingen.map((b) => (
                <div key={b.naam} className="bg-[#FAF8F5] rounded-2xl border border-stone-100 px-6 py-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="text-[15px] font-semibold text-[#1A1A1A]">{b.naam}</p>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${b.ernstKleur}`}>
                      {b.ernst}
                    </span>
                  </div>
                  <p className="text-[13px] text-[#6B6560] font-light leading-relaxed mb-2">{b.uitleg}</p>
                  <p className="text-[12px] font-medium text-[#C9A96E]">Aanpak: {b.aanpak}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Hoe MAUYI minimaliseert ── */}
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
              Hoe Reset Serum<br />
              <em className="italic text-[#C9A96E]">bijwerkingen minimaliseert</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Elke formulekeuze is gemaakt met irritatieminimalisatie in gedachten.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'Juiste dosering',
                  uitleg:
                    'Hogere concentraties (0.5%–1%) veroorzaken significant meer irritatie zonder proportioneel meer resultaat. 0.3% is de sweet spot: klinisch effectief, minimale bijwerkingen.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'Irritatie-buffer',
                  uitleg:
                    'Versterkt de huidbarrière terwijl retinol werkt. Vermindert roodheid en kalmeerde ontstekingen actief. De combinatie niacinamide + retinol is klinisch bewezen minder irriterend dan retinol alleen.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'Tolerantie-opbouw',
                  uitleg:
                    'Verhoogt de tolerantie voor retinol. Je huid went sneller, reageert minder heftig op het nieuwe actieve ingrediënt. Klinische studies tonen minder irritatie bij combinatie retinol + bakuchiol vs. retinol alleen.',
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

        {/* ── FAQ ── */}
        <section className="bg-white border-t border-stone-100">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Veelgestelde vragen</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-10 leading-tight"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Bijwerkingen &amp; veiligheid
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Wat zijn normale bijwerkingen van retinol?',
                  a: 'Normale bijwerkingen bij opstarten: milde roodheid, lichte schilfering, trekkerig gevoel en verhoogde UV-gevoeligheid. Dit staat bekend als retinoid dermatitis en verdwijnt doorgaans na 2–4 weken bij opbouw.',
                },
                {
                  v: 'Wat is retinol purging en hoe lang duurt het?',
                  a: 'Tijdelijke toename van puistjes doordat retinol verstoppingen sneller naar het oppervlak drijft. Normaal en duurt 2–6 weken. Purging verschijnt op bekende plekken en verdwijnt vanzelf — anders dan reguliere acne-uitbraak.',
                },
                {
                  v: 'Wanneer moet ik stoppen met retinol?',
                  a: 'Stop onmiddellijk bij: ernstige aanhoudende verbranding, open wonden of blaren, hevige schilfering die niet verbetert, of allergische reacties zoals zwelling of urticaria. Raadpleeg dan een dermatoloog.',
                },
                {
                  v: 'Hoe minimaliseert MAUYI bijwerkingen?',
                  a: 'Drie strategieën: (1) Retinol 0.3% — effectief maar niet te hoog. (2) Niacinamide 10% — bufferend, versterkt barrière, vermindert roodheid. (3) Bakuchiol 0.5% — verhoogt tolerantie voor retinol.',
                },
                {
                  v: 'Mag ik retinol gebruiken tijdens de zwangerschap?',
                  a: 'Nee. Retinol en alle retinoïden zijn gecontra-indiceerd tijdens zwangerschap en borstvoeding, ongeacht de concentratie. Overleg met je verloskundige of gynaecoloog voor veilige alternatieven.',
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
                Gebufferd voor minder irritatie.<br />
                <em className="italic text-[#C9A96E]">Meer resultaat.</em>
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
                Parfumvrij · Minimale bijwerkingen · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
