import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Bakuchiol: werking, verschil met retinol en hoe je het gebruikt | MAUYI',
  description: 'Bakuchiol is het plantaardige alternatief voor retinol met vergelijkbare anti-aging werking. Leer wat bakuchiol doet, hoe het verschilt van retinol en waarom 0.5% synergie geeft.',
  alternates: { canonical: `${BASE_URL}/ingredients/bakuchiol` },
  openGraph: {
    title: 'Bakuchiol — werking, bakuchiol vs retinol | MAUYI',
    description: 'Bakuchiol activeert dezelfde receptoren als retinol maar is veiliger tijdens zwangerschap en minder irriterend. Klinische vergelijking en optimale concentratie.',
    url: `${BASE_URL}/ingredients/bakuchiol`,
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is bakuchiol en wat doet het?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bakuchiol is een plantaardige verbinding gewonnen uit de Psoralea corylifolia plant. Het activeert retinoïdereceptoren op vergelijkbare wijze als retinol en heeft bewezen anti-aging effecten: stimuleert collageenproductie, verbetert huidtextuur en vermindert fijne lijntjes. Anders dan retinol is bakuchiol stabiel in licht en lucht, heeft geen opbouwperiode en is veilig tijdens zwangerschap.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen bakuchiol en retinol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bakuchiol en retinol activeren beide retinoïdereceptoren maar via verschillende chemische wegen. Retinol is klinisch beter gedocumenteerd voor hogere concentratie-effecten. Bakuchiol is milder (geen initiële schilfering), stabiel in zon en veilig tijdens zwangerschap. Klinische studie (Dhaliwal et al., 2019) vond vergelijkbare effectiviteit bij 0.5% bakuchiol vs 0.5% retinol na 12 weken, met significant minder bijwerkingen bij bakuchiol.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan bakuchiol gecombineerd worden met retinol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja — dit is een bewezen synergistische combinatie. Ze activeren overlappende maar niet identieke mechanismen: samen geven ze meer anti-aging effect dan elk afzonderlijk. MAUYI Reset Serum bevat retinol 0.3% én bakuchiol 0.5% in één formule voor dit additieve effect.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is bakuchiol veilig tijdens zwangerschap?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bakuchiol wordt als veilig beschouwd tijdens zwangerschap — in tegenstelling tot retinoïden (inclusief retinol). Raadpleeg echter altijd je arts of verloskundige voor het gebruik van huidverzorgingsproducten tijdens zwangerschap.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke concentratie bakuchiol werkt het beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '0.5% is de klinisch bestudeerde en meest gebruikte effectieve concentratie, gebaseerd op de landmark studie van Dhaliwal et al. (2019). Hogere concentraties zijn minder goed bestudeerd. In combinatie met retinol (synergie) kan een lagere concentratie bakuchiol effectief zijn.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bakuchiol: werking, verschil met retinol en hoe je het gebruikt',
  description: 'Wetenschappelijk onderbouwde uitleg over bakuchiol: klinische studies, vergelijking met retinol, optimale concentratie en synergiewerking.',
  url: `${BASE_URL}/ingredients/bakuchiol`,
  datePublished: '2026-06-08',
  dateModified: '2026-06-08',
  author: { '@type': 'Organization', name: 'MAUYI', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'MAUYI', url: BASE_URL },
  citation: [
    {
      '@type': 'ScholarlyArticle',
      name: 'Prospective, randomized, double-blind assessment of topical bakuchiol and retinol for facial photoageing',
      author: 'Dhaliwal S, Rybak I, Ellis SR, et al.',
      datePublished: '2019',
      isPartOf: { '@type': 'Periodical', name: 'British Journal of Dermatology' },
      sameAs: 'https://doi.org/10.1111/bjd.16918',
    },
    {
      '@type': 'ScholarlyArticle',
      name: 'Bakuchiol: a retinol-like functional compound that regulates skin differentiation and photoaging',
      author: 'Chaudhuri RK, Bojanowski K',
      datePublished: '2014',
      isPartOf: { '@type': 'Periodical', name: 'International Journal of Cosmetic Science' },
      sameAs: 'https://doi.org/10.1111/ics.12117',
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Ingrediënten', item: `${BASE_URL}/ingredients` },
    { '@type': 'ListItem', position: 3, name: 'Bakuchiol', item: `${BASE_URL}/ingredients/bakuchiol` },
  ],
}

export default function BakuchiolIngredientPage() {
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
              <span className="text-[#1A1A1A] font-medium">Bakuchiol</span>
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
              Bakuchiol: het plantaardige alternatief dat retinol versterkt
            </h1>
            <p className="text-[17px] text-[#6B6560] font-light leading-relaxed">
              Bakuchiol is een plantaardig ingrediënt afkomstig uit de Psoralea corylifolia (babchi) plant, met bewezen anti-aging effecten vergelijkbaar aan retinol. Klinische studies bevestigen de werking — met minder irritatie, stabiel in zon en veilig tijdens zwangerschap. In combinatie met retinol zijn ze samen effectiever dan afzonderlijk.
            </p>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { number: '0.5%', label: 'Klinisch bestudeerde dosering', sub: 'Dhaliwal et al. 2019' },
              { number: '=', label: 'Vergelijkbaar aan retinol', sub: 'Bij 12 weken gebruik' },
              { number: '↑↑', label: 'Synergie met retinol', sub: 'Additief anti-aging effect' },
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

          {/* What is bakuchiol */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Wat is bakuchiol?
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Bakuchiol is een meroterpeen gewonnen uit zaden en bladeren van de Psoralea corylifolia (babchi) plant, traditioneel gebruikt in de Ayurvedische en Chinese geneeskunde. Als anti-aging ingrediënt in westerse huidverzorging werd het serieus bestudeerd vanaf 2014, met als doorbraakpublicatie de gerandomiseerde studie van Dhaliwal et al. in het British Journal of Dermatology (2019).
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Bakuchiol activeert retinoïd-receptoren in huidcellen — dezelfde receptoren die retinol activeert. Dit geeft vergelijkbare effecten op collageensynthese en celvernieuwing. Het moleculaire pad is echter anders dan bij retinol, wat verklaart waarom ze synergistisch werken als ze gecombineerd worden.
          </p>
          <div className="bg-[#FAF8F5] border-l-[3px] border-[#C9A96E] px-5 py-4 rounded-r-xl mb-8">
            <p className="text-[14px] text-[#5C5754] leading-relaxed font-light italic">
              Studie (Dhaliwal et al., 2019, BJD): 0.5% bakuchiol tweemaal daags versus 0.5% retinol eenmaal daags gedurende 12 weken. Vergelijkbare vermindering van rimpeloppervlak en pigmentatie. Bakuchiol-groep: significant minder schilfering, droogheid en stinging.
            </p>
          </div>

          {/* Bakuchiol vs retinol */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Bakuchiol vs retinol: eerlijke vergelijking
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b-2 border-[#C9A96E]/30">
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">Kenmerk</th>
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">Bakuchiol</th>
                  <th className="text-left py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">Retinol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[
                  ['Anti-aging effect', 'Vergelijkbaar (0.5% vs 0.5%)', 'Sterk, beter gedocumenteerd bij hogere %'],
                  ['Opbouwperiode', 'Geen — direct te gebruiken', 'Ja, 4-6 weken opbouwen'],
                  ['Irritatierisico', 'Laag — zelfs bij gevoelige huid', 'Matig bij start, afneemt na opbouw'],
                  ['Stabiliteit', 'Stabiel in licht en lucht', 'Breekt af bij UV-blootstelling'],
                  ['Zwangerschap', 'Veilig (geadviseerd alternatief)', 'Gecontra-indiceerd'],
                  ['Huidtypes', 'Alle huidtypes inclusief zeer gevoelig', 'Alle huidtypes, aanpassing vereist'],
                  ['Klinisch bewijs', 'Sterker toenemend (2014–heden)', 'Decennia uitgebreid klinisch bewijs'],
                ].map(([feature, bak, ret], i) => (
                  <tr key={i}>
                    <td className="py-3 pr-6 font-medium text-[#1A1A1A]">{feature}</td>
                    <td className="py-3 pr-6 text-[#4A4540]">{bak}</td>
                    <td className="py-3 text-[#4A4540]">{ret}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Synergy */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Bakuchiol + retinol: synergie
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Bakuchiol en retinol activeren retinoïdereceptoren via verschillende moleculaire routes. Dit is precies waarom de combinatie additief werkt: ze versterken elkaars effect zonder elkaars werking te blokkeren of te concurreren.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Bovendien heeft bakuchiol anti-inflammatoire en antioxidante eigenschappen. Dit compenseert direct de initiële irritatierespons van retinol — vergelijkbaar aan wat niacinamide doet, maar via een ander mechanisme. De drievoudige combinatie (retinol + niacinamide + bakuchiol) in MAUYI Reset Serum adresseert zo de drie hoofdoorzaken van retinol-intolerantie: inflammatie, barrièrecompromittering en oxidatieve stress.
          </p>

          {/* Who should use bakuchiol */}
          <div className="grid sm:grid-cols-2 gap-5 my-10">
            <div className="bg-white rounded-2xl border border-stone-100 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9A9590] mb-3">Ideaal voor bakuchiol als retinol-alternatief</p>
              <ul className="space-y-2">
                {[
                  'Zwangerschap of borstvoeding',
                  'Extreme gevoeligheid voor retinol',
                  'Wil geen opbouwperiode',
                  'Dag én nacht actief ingredient',
                  'Voorkeur voor plantaardige formules',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-[14px] text-[#5C5754]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0F0E0C] rounded-2xl p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">Ideaal voor bakuchiol + retinol combinatie</p>
              <ul className="space-y-2">
                {[
                  'Maximale anti-aging effectiviteit',
                  'Vermindert retinol-irritatie',
                  'Wil één avondserum voor alles',
                  'Geen extreme gevoeligheid',
                  'Consistente routine aanhouden',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-[14px] text-stone-300 font-light">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0" />
                    {item}
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
                q: 'Is bakuchiol echt net zo effectief als retinol?',
                a: 'Bij vergelijkbare concentraties (0.5% vs 0.5%) en een studieduur van 12 weken: ja, vergelijkbaar voor de gemeten eindpunten (rimpeloppervlak, pigmentatie). Voor langetermijn anti-aging en collageeninductie heeft retinol meer en sterkere klinische data. Bakuchiol is een sterke aanvulling of alternatief, niet per se een superiorere vervanging.',
              },
              {
                q: 'Kan ik bakuchiol overdag gebruiken?',
                a: 'Ja — anders dan retinol is bakuchiol stabiel in UV-licht. Je kunt bakuchiol zowel ochtend als avond gebruiken. Gebruik altijd SPF bij dagsgebruik van anti-aging ingrediënten in het algemeen.',
              },
              {
                q: 'Wordt bakuchiol goed verdragen bij acne-gevoelige huid?',
                a: 'Ja. Bakuchiol heeft anti-inflammatoire en antibacteriële eigenschappen die juist gunstig zijn voor acne-gevoelige huid. Het is niet-comedogeen en verbetert huidtextuur zonder de typische retinol-purge.',
              },
              {
                q: 'Hoe lang duurt het voordat bakuchiol werkt?',
                a: 'Eerste resultaten zijn zichtbaar na 4-6 weken. Significante verbetering in rimpels en textuur na 12 weken, vergelijkbaar met retinol maar zonder de aanpassingsperiode in de eerste weken.',
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
              <Link href="/ingredients/retinol" className="flex items-center gap-2 group">
                <span className="text-[14px] font-semibold text-[#1A1A1A] group-hover:text-[#C9A96E] transition-colors">
                  Retinol →
                </span>
                <span className="text-[12px] text-[#9A9590] font-light">synergie met bakuchiol</span>
              </Link>
              <Link href="/ingredients/niacinamide" className="flex items-center gap-2 group">
                <span className="text-[14px] font-semibold text-[#1A1A1A] group-hover:text-[#C9A96E] transition-colors">
                  Niacinamide →
                </span>
                <span className="text-[12px] text-[#9A9590] font-light">drievoudige anti-aging combinatie</span>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#1A1A1A] rounded-2xl px-6 py-8 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">MAUYI Reset Serum</p>
            <p className="text-white text-[18px] font-semibold mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Bakuchiol 0.5% + Retinol 0.3% + Niacinamide 10%
            </p>
            <p className="text-stone-400 text-[14px] font-light mb-6">
              De synergistische combinatie. Één formule, maximale effectiviteit.
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
