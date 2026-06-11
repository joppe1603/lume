import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol: werking, concentraties en hoe je het correct gebruikt | MAUYI',
  description: 'Alles over retinol: wat het doet, welke concentratie effectief is, hoe je begint zonder irritatie en waarom 0.3% de optimale startconcentratie is. Wetenschappelijk onderbouwd.',
  alternates: { canonical: `${BASE_URL}/ingredients/retinol` },
  openGraph: {
    title: 'Retinol — werking, concentraties, gebruik | MAUYI',
    description: 'Retinol stimuleert celvernieuwing en collageen. Leer welke concentratie werkt, hoe je begint en hoe je irritatie voorkomt.',
    url: `${BASE_URL}/ingredients/retinol`,
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat doet retinol precies voor je huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retinol (vitamine A) versnelt celvernieuwing en stimuleert collageen- en elastineproductie. Het verzacht rimpels, verbetert huidtextuur, vermindert pigmentatie en verkleint poriën. Het werkt door aan te binden op retinoïdereceptoren in huidcellen, waardoor gendepressie de productie van structuurproteïnen versnelt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke retinolconcentratie is het beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '0.3% is de optimale startconcentratie voor de meeste mensen. Klinisch onderzoek toont aan dat 0.3% statistisch significant collageen verhoogt en rimpels vermindert (Kafi et al., 2007), met minder irritatie dan hogere concentraties. 1% of hoger geeft hogere resultaten maar ook hogere irritatiekansen — ideaal voor ervaren gebruikers zonder gevoelige huid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe begin je met retinol zonder irritatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Begin 2× per week, bouw op naar dagelijks gebruik over 4-6 weken. Gebruik 's avonds op droge huid, gevolgd door een hydraterende moisturizer. Combineer met niacinamide (10%) om de irritatierespons te verminderen. Gebruik altijd SPF overdag — retinol verhoogt UV-gevoeligheid.",
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer zie je resultaat van retinol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Huidtextuur verbetert na 4-8 weken. Rimpelreductie en collageeninductie zijn meetbaar na 12 weken. Pigmentatievermindering kan 3-6 maanden duren. Klinische studies gebruiken doorgaans 12-24 weken als meetperiode voor significante resultaten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik retinol combineren met niacinamide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja — dit is een wetenschappelijk onderbouwde combinatie. Niacinamide buffert de irritatierespons van retinol, versterkt de huidbarrière en voegt additionele anti-aging en pigmentvermindering toe. Samen zijn ze effectiever dan afzonderlijk. MAUYI Reset Serum is geformuleerd op basis van precies deze synergie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is retinol veilig voor gevoelige huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, mits de concentratie en opbouwstrategie kloppen. 0.3% retinol gebufferd met niacinamide 10% is ook goed verdraagbaar voor gevoelige huid. Begin langzaam (2×/week), gebruik een hydraterende moisturizer na applicatie en vermijd andere actieve ingrediënten in de eerste weken.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Retinol: werking, concentraties en hoe je het correct gebruikt',
  description: 'Wetenschappelijk onderbouwde uitleg over retinol: celvernieuwing, optimale concentratie, opbouwschema en hoe je irritatie voorkomt.',
  url: `${BASE_URL}/ingredients/retinol`,
  datePublished: '2026-06-08',
  dateModified: '2026-06-08',
  author: { '@type': 'Organization', name: 'MAUYI', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'MAUYI', url: BASE_URL },
  citation: [
    {
      '@type': 'ScholarlyArticle',
      name: 'Improvement of naturally aged skin with vitamin A (retinol)',
      author: 'Kafi R, Kwak HS, Schumaker WE, et al.',
      datePublished: '2007',
      isPartOf: { '@type': 'Periodical', name: 'Archives of Dermatology' },
      sameAs: 'https://doi.org/10.1001/archderm.143.5.606',
    },
    {
      '@type': 'ScholarlyArticle',
      name: 'Topical retinol improves fine wrinkles associated with natural aging',
      author: 'Shupack J, et al.',
      datePublished: '1993',
      isPartOf: { '@type': 'Periodical', name: 'Journal of Investigative Dermatology' },
      sameAs: 'https://doi.org/10.1111/1523-1747.ep12362860',
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Ingrediënten', item: `${BASE_URL}/ingredients` },
    { '@type': 'ListItem', position: 3, name: 'Retinol', item: `${BASE_URL}/ingredients/retinol` },
  ],
}

export default function RetinolIngredientPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <main className="bg-[#FAF8F5] min-h-screen">

        {/* Breadcrumb */}
        <div className="bg-white border-b border-stone-100">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 py-4">
            <nav className="flex items-center gap-2 text-xs text-[#9A9590]">
              <Link href="/" className="hover:text-[#C9A96E] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/ingredients" className="hover:text-[#C9A96E] transition-colors">Ingrediënten</Link>
              <span>/</span>
              <span className="text-[#1A1A1A] font-medium">Retinol</span>
            </nav>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-6 sm:px-8 py-16">

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Ingrediëntengids</span>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-[1.1] mb-5"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Retinol: hoe het werkt, welke concentratie en hoe je begint
            </h1>
            <p className="text-[17px] text-[#6B6560] font-light leading-relaxed">
              Retinol is het best gedocumenteerde anti-aging ingrediënt in huidverzorging. Decennia klinisch onderzoek bevestigen de werking. Toch weten de meeste mensen niet precies wat het doet, welke concentratie effectief is en hoe je irritatie voorkomt.
            </p>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { number: '0.3%', label: 'Optimale startconcentratie', sub: 'Klinisch bewezen effectief' },
              { number: '12 wk', label: 'Meetbaar resultaat', sub: 'Rimpels en textuur' },
              { number: '40+', label: 'Jaren klinisch onderzoek', sub: 'Meest bestudeerde actief' },
            ].map((stat) => (
              <div key={stat.number} className="bg-white rounded-xl border border-stone-100 px-4 py-5 text-center">
                <p className="text-[24px] font-semibold text-[#1A1A1A] mb-1" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {stat.number}
                </p>
                <p className="text-[12px] font-semibold text-[#1A1A1A] mb-0.5">{stat.label}</p>
                <p className="text-[11px] text-[#9A9590] font-light">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* What is retinol */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Wat is retinol en hoe werkt het?
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Retinol is een vorm van vitamine A. In de huid wordt retinol omgezet naar retinoïnezuur — de actieve vorm die aanvindt op retinoïdereceptoren in huidcellen. Dit activeert genen die verantwoordelijk zijn voor celvernieuwing, collageenproductie en pigmentregulatie.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Het resultaat is een versnelde huidcelcyclus: dode cellen worden sneller afgestoten, nieuwe cellen migreren sneller naar de oppervlakte. Tegelijkertijd stimuleert retinol fibroblasten — de cellen die collageen en elastine aanmaken — wat leidt tot dikkere, veerkrachtiger huid op lange termijn.
          </p>
          <div className="bg-[#FAF8F5] border-l-[3px] border-[#C9A96E] px-5 py-4 rounded-r-xl mb-8">
            <p className="text-[14px] text-[#5C5754] leading-relaxed font-light italic">
              Klinische studie (Kafi et al., 2007): 0.4% retinol lotion gedurende 24 weken resulteerde in significante vermindering van fijne lijntjes, verbeterde huidtextuur en verhoogde collageenproductie vergeleken met placebo.
            </p>
          </div>

          {/* What retinol treats */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Wat behandelt retinol?
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              { concern: 'Rimpels en fijne lijntjes', mechanism: 'Stimuleert collageensynthese, verdikt de dermis' },
              { concern: 'Huidtextuur en -toon', mechanism: 'Versnelt celvernieuwing, verwijdert dode huidcellen' },
              { concern: 'Pigmentvlekken', mechanism: 'Remt melaninedistributie, versnelt afstoting gepigmenteerde cellen' },
              { concern: 'Poriëngrootte', mechanism: 'Normaliseert keratinisatie in poriën, vermindert verstoppingen' },
              { concern: 'Acnelittekens', mechanism: 'Verbetert huidstructuur door collageen en celvernieuwing' },
              { concern: 'Zonschade', mechanism: 'Herstelt fotogemodificeerde cellen, stimuleert dermale herstel' },
            ].map((item) => (
              <div key={item.concern} className="bg-white rounded-xl border border-stone-100 px-4 py-4">
                <p className="text-[13px] font-semibold text-[#1A1A1A] mb-1">{item.concern}</p>
                <p className="text-[12px] text-[#6B6560] font-light leading-relaxed">{item.mechanism}</p>
              </div>
            ))}
          </div>

          {/* Concentrations */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Welke concentratie retinol is effectief?
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Meer is niet altijd beter. Retinolconcentraties range van 0.025% tot 2%, maar de optimale dosering hangt af van je huidtolerantie en het doel.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b-2 border-[#C9A96E]/30">
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">Concentratie</th>
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">Voor wie</th>
                  <th className="text-left py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">Verwacht effect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[
                  ['0.025–0.1%', 'Absolute beginners, zeer gevoelige huid', 'Mild — textuurverbetering na 12+ weken'],
                  ['0.3%', 'Meeste huidtypes — ideale startdosering', 'Klinisch effectief voor rimpels, textuur, pigment'],
                  ['0.5%', 'Regelmatige gebruikers zonder irritatie', 'Sterkere anti-aging, meer kans op irritatie'],
                  ['1%+', 'Ervaren gebruikers, niet gevoelige huid', 'Maximale effectiviteit, hoger irritatierisico'],
                ].map(([conc, who, effect], i) => (
                  <tr key={i} className={conc.startsWith('0.3') ? 'bg-[#FAF8F5]' : ''}>
                    <td className="py-3 pr-6 font-semibold text-[#1A1A1A]">
                      {conc}
                      {conc.startsWith('0.3') && (
                        <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#C9A96E]">↑ MAUYI</span>
                      )}
                    </td>
                    <td className="py-3 pr-6 text-[#6B6560]">{who}</td>
                    <td className="py-3 text-[#4A4540]">{effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How to use */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Hoe gebruik je retinol correct?
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            De eerste weken zijn cruciaal. Retinol triggert bij starten altijd een aanpassingsperiode (de "retinol uglies") — schilfering, milde roodheid en droogheid. Dit is normaal en verdwijnt na 2-4 weken. Goed opbouwen verkort deze periode aanzienlijk.
          </p>

          <div className="space-y-3 mb-8">
            {[
              {
                week: 'Week 1–2',
                instruction: '2× per week appliceren',
                detail: 'Op droge, schoongemaakte huid. Wacht 20 minuten na reinigen.',
              },
              {
                week: 'Week 3–4',
                instruction: '3–4× per week opbouwen',
                detail: 'Alleen uitbreiden als er geen irritatie is. Bij irritatie: houd het bij 2×.',
              },
              {
                week: 'Week 5–8',
                instruction: 'Naar dagelijks gebruik',
                detail: 'De meeste mensen verdragen dagelijks gebruik na 4-6 weken opbouw.',
              },
              {
                week: 'Altijd',
                instruction: 'SPF overdag, moisturizer daarna',
                detail: 'Retinol verhoogt UV-gevoeligheid. Zonder SPF ontkracht je het effect.',
              },
            ].map((step) => (
              <div key={step.week} className="flex gap-4 bg-white rounded-xl border border-stone-100 px-5 py-4">
                <div className="shrink-0 w-[72px]">
                  <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#C9A96E]">{step.week}</span>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#1A1A1A] mb-0.5">{step.instruction}</p>
                  <p className="text-[13px] text-[#6B6560] font-light">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Retinol + other ingredients */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Retinol combineren: wat werkt en wat niet
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            <div className="bg-white rounded-xl border border-stone-100 px-5 py-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-emerald-600 mb-3">Goede combinaties</p>
              <ul className="space-y-2">
                {[
                  ['Niacinamide (10%)', 'Buffert irritatie, additieve anti-aging'],
                  ['Hyaluronzuur', 'Hydrateert, compenseert droogheid'],
                  ['Bakuchiol', 'Vergelijkbare werking, synergistisch effect'],
                  ['Ceramiden', 'Barrièreherstel, minder roodheid'],
                ].map(([ingr, why]) => (
                  <li key={ingr} className="text-[13px] text-[#4A4540]">
                    <span className="font-semibold text-[#1A1A1A]">{ingr}</span>
                    <span className="text-[#6B6560]"> — {why}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-stone-100 px-5 py-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-rose-500 mb-3">Vermijd samen</p>
              <ul className="space-y-2">
                {[
                  ['Vitamine C (s\'avonds)', 'Verzwakt elkaar bij lage pH — gebruik overdag/\'s avonds wisselen'],
                  ['AHA/BHA (tegelijk)', 'Stapeling van exfolianten vergroot irritatierisico'],
                  ['Benzoylperoxide', 'Oxideert retinol, vermindert effectiviteit'],
                ].map(([ingr, why]) => (
                  <li key={ingr} className="text-[13px] text-[#4A4540]">
                    <span className="font-semibold text-[#1A1A1A]">{ingr}</span>
                    <span className="text-[#6B6560]"> — {why}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-12 mb-6 leading-snug">Veelgestelde vragen</h2>
          <div className="space-y-4 mb-12">
            {[
              {
                q: 'Wanneer zie je resultaat van retinol?',
                a: 'Huidtextuur verbetert na 4-8 weken. Rimpelreductie en collageeninductie zijn meetbaar na 12 weken consistente applicatie. Pigmentatievermindering kan 3-6 maanden duren.',
              },
              {
                q: 'Is retinol veilig voor gevoelige huid?',
                a: '0.3% retinol, gebufferd met niacinamide 10%, is ook verdraagbaar voor gevoelige huid. Begin met 2× per week en bouw langzaam op. De irritatierespons vermindert sterk als niacinamide aanwezig is in de formule.',
              },
              {
                q: 'Waarom moet je SPF gebruiken bij retinol?',
                a: 'Retinol versnelt celvernieuwing — de nieuwe, jongere cellen zijn gevoeliger voor UV-schade dan oude cellen. Zonder SPF ontstaat er nieuwe fotoveroudering die het retinoleffect tenietdoet.',
              },
              {
                q: 'Kan ik retinol gebruiken als ik zwanger ben?',
                a: 'Nee. Retinoïden (inclusief retinol) zijn gecontra-indiceerd tijdens zwangerschap. Gebruik bakuchiol als alternatief — dit heeft vergelijkbare werking maar is veilig tijdens zwangerschap.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-stone-100 px-5 py-4">
                <p className="text-[15px] font-semibold text-[#1A1A1A] mb-2">{item.q}</p>
                <p className="text-[14px] text-[#5C5754] leading-relaxed font-light">{item.a}</p>
              </div>
            ))}
          </div>

          {/* Related ingredients */}
          <div className="border border-stone-100 rounded-2xl p-6 mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A9590] mb-4">Gerelateerde ingrediënten</p>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/ingredients/niacinamide" className="flex items-center gap-2 group">
                <span className="text-[14px] font-semibold text-[#1A1A1A] group-hover:text-[#C9A96E] transition-colors">
                  Niacinamide →
                </span>
                <span className="text-[12px] text-[#9A9590] font-light">buffert retinol, eigenstandige werking</span>
              </Link>
              <Link href="/ingredients/bakuchiol" className="flex items-center gap-2 group">
                <span className="text-[14px] font-semibold text-[#1A1A1A] group-hover:text-[#C9A96E] transition-colors">
                  Bakuchiol →
                </span>
                <span className="text-[12px] text-[#9A9590] font-light">plant-alternatief, synergistisch</span>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#1A1A1A] rounded-2xl px-6 py-8 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">MAUYI Reset Serum</p>
            <p className="text-white text-[18px] font-semibold mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Retinol 0.3% — de optimale concentratie, klaar voor gebruik
            </p>
            <p className="text-stone-400 text-[14px] font-light mb-6">
              Gebufferd met niacinamide 10% + bakuchiol 0.5%. Geen opbouwpuzzel.
            </p>
            <Link
              href="/products/reset-serum"
              className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#0F0E0C] px-8 py-3.5 rounded-xl text-[14px] font-semibold hover:bg-[#B8935A] transition-colors"
            >
              Bekijk Reset Serum →
            </Link>
          </div>

        </article>
      </main>

      <Footer />
    </>
  )
}
