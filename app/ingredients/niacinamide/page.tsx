import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Niacinamide: werking, concentraties en combinaties | MAUYI',
  description: 'Alles over niacinamide (vitamine B3): wat het doet voor je huid, waarom 10% de optimale concentratie is, hoe het retinol buffert en wat de wetenschappelijke basis is.',
  alternates: { canonical: `${BASE_URL}/ingredients/niacinamide` },
  openGraph: {
    title: 'Niacinamide — werking, 10% concentratie, combinaties | MAUYI',
    description: 'Niacinamide (vitamine B3) reguleert sebum, vermindert pigment, versterkt de huidbarrière en buffert retinol. Waarom 10% de effectieve drempel is.',
    url: `${BASE_URL}/ingredients/niacinamide`,
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat doet niacinamide voor de huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niacinamide (vitamine B3) heeft meerdere bewezen effecten: het versterkt de huidbarrière door ceramideproductie te stimuleren, vermindert sebumproductie (−16% na 4 weken bij 2%), verlicht pigmentvlekken door melanosoomtransfer te remmen, heeft ontstekingsremmende eigenschappen en buffert irritatie door retinol en andere actieve ingrediënten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke concentratie niacinamide werkt het beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '10% is de klinisch effectieve concentratie voor zichtbare resultaten op pigment, sebumregulatie en anti-aging. Studies tonen effecten bij 2% (sebumreductie) en 5% (barrièreverbetering), maar 10% geeft de meest complete respons. Boven 10% nemen bijwerkingen toe zonder proportioneel extra voordeel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan niacinamide gecombineerd worden met retinol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja — niacinamide en retinol zijn een ideale combinatie. Niacinamide buffert de irritatierespons van retinol, versterkt de huidbarrière die retinol kan compromitteren en voegt eigenstandige anti-aging en pigmentvermindering toe. Ze hoeven niet op verschillende tijdstippen gebruikt te worden — samen in één formule is het meest effectief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Maakt niacinamide echt niacinzuur aan dat huid rood maakt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dit is een veelverbreid misverstand. Niacinamide kan bij lage pH of hoge temperaturen gedeeltelijk omgezet worden naar niacinzuur, wat roodheid veroorzaakt. In een stabiele formule bij neutrale pH (zoals MAUYI Reset Serum) treedt dit niet op. Geformuleerde producten zijn hier op getest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel werkt niacinamide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Barrièreverbetering en sebumreductie zijn meetbaar na 4 weken. Pigmentvermindering treedt op na 8-12 weken consistente applicatie. Niacinamide werkt sneller dan retinol voor de meeste huidtypes — het heeft geen opbouwperiode nodig.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Niacinamide: werking, concentraties en combinaties met andere ingrediënten',
  description: 'Wetenschappelijk onderbouwde uitleg over niacinamide (vitamine B3): huidbarrière, sebumregulatie, pigmentvermindering en synergie met retinol.',
  url: `${BASE_URL}/ingredients/niacinamide`,
  datePublished: '2026-06-08',
  dateModified: '2026-06-08',
  inLanguage: 'nl-NL',
  keywords: 'niacinamide, vitamine B3, nicotinamide, huidbarrière, sebumregulatie, pigmentvermindering, retinol combinatie',
  author: { '@type': 'Organization', name: 'MAUYI', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'MAUYI', url: BASE_URL },
  isPartOf: { '@type': 'WebSite', name: 'MAUYI', url: BASE_URL },
  citation: [
    {
      '@type': 'ScholarlyArticle',
      name: 'Niacinamide: A B vitamin that improves aging facial skin appearance',
      author: 'Bissett DL, Oblong JE, Berge CA',
      datePublished: '2005',
      isPartOf: { '@type': 'Periodical', name: 'Dermatologic Surgery' },
      sameAs: 'https://doi.org/10.1097/00042728-200507001-00011',
    },
    {
      '@type': 'ScholarlyArticle',
      name: 'The effect of 2% niacinamide on facial sebum production',
      author: 'Draelos ZD, Matsubara A, Smiles K',
      datePublished: '2006',
      isPartOf: { '@type': 'Periodical', name: 'Journal of Cosmetic and Laser Therapy' },
      sameAs: 'https://doi.org/10.1080/14764170600740577',
    },
  ],
  about: {
    '@type': 'Thing',
    name: 'Niacinamide',
    description: 'Niacinamide (nicotinamide) is de amidevorm van vitamine B3. Het versterkt de huidbarrière, reguleert sebumproductie, vermindert pigmentatie en buffert irritatie van actieve ingrediënten zoals retinol.',
    sameAs: [
      'https://en.wikipedia.org/wiki/Nicotinamide',
      'https://examine.com/supplements/vitamin-b3/',
      'https://pubchem.ncbi.nlm.nih.gov/compound/Nicotinamide',
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Ingrediënten', item: `${BASE_URL}/ingredients` },
    { '@type': 'ListItem', position: 3, name: 'Niacinamide', item: `${BASE_URL}/ingredients/niacinamide` },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Niacinamide: werking, concentraties en combinaties',
  url: `${BASE_URL}/ingredients/niacinamide`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.ingredient-definition'],
  },
}

export default function NiacinamideIngredientPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
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
              <span className="text-[#1A1A1A] font-medium">Niacinamide</span>
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
              Niacinamide: werking, de 10%-drempel en combinaties
            </h1>
            <p className="ingredient-definition text-[17px] text-[#6B6560] font-light leading-relaxed">
              Niacinamide is de amidevorm van vitamine B3, een wateroplosbaar ingrediënt dat de huidbarrière versterkt, sebumproductie reguleert, pigmentatie vermindert en ontstekingen remt. Het is een van de meest veelzijdige actieve ingrediënten in huidverzorging — geschikt voor alle huidtypes, zonder opbouwperiode.
            </p>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { number: '10%', label: 'Effectieve concentratie', sub: 'Klinisch aanbevolen' },
              { number: '−16%', label: 'Sebumreductie', sub: 'Na 4 weken bij 2%+' },
              { number: '4 wk', label: 'Eerste resultaten', sub: 'Barrière en sebum' },
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

          {/* What is niacinamide */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Wat is niacinamide en hoe werkt het?
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Niacinamide is de amidevorm van vitamine B3 (niacine). In de huid dient het als precursor voor NADH en NADPH — coënzymen die betrokken zijn bij talloze cellulaire processen, waaronder energiemetabolisme, DNA-herstel en antioxidantdefensie.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Op huidniveau heeft niacinamide drie primaire werkingsmechanismen: het stimuleert ceramide- en proteïneproductie in de buitenste huidlagen (barrièrefunction), het remt de overdracht van melanosomen van melanocyten naar keratinocyten (pigmentregulatie), en het reguleert sebumproductie via invloed op talgklieren.
          </p>

          {/* What niacinamide treats */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Wat behandelt niacinamide?
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              { concern: 'Vette/combinatiehuid', mechanism: 'Vermindert sebumproductie −16% na 4 weken' },
              { concern: 'Vergrote poriën', mechanism: 'Minder sebum = minder porienuitzetting' },
              { concern: 'Pigmentvlekken', mechanism: 'Remt melanosoomtransfer ongeacht UV-oorzaak' },
              { concern: 'Rosacea en roodheid', mechanism: 'Ontstekingsremmend, barrièreversterking' },
              { concern: 'Droge huid', mechanism: 'Ceramideproductie — betere vochtretentie' },
              { concern: 'Irritatie door actieve stoffen', mechanism: 'Buffert retinol en AHA/BHA irritatie' },
            ].map((item) => (
              <div key={item.concern} className="bg-white rounded-xl border border-stone-100 px-4 py-4">
                <p className="text-[13px] font-semibold text-[#1A1A1A] mb-1">{item.concern}</p>
                <p className="text-[12px] text-[#6B6560] font-light leading-relaxed">{item.mechanism}</p>
              </div>
            ))}
          </div>

          {/* Why 10% */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Waarom 10% en niet minder?
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Niacinamide heeft een duidelijke concentratierespons. Studies tonen significante effecten bij verschillende drempelwaarden:
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b-2 border-[#C9A96E]/30">
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">Concentratie</th>
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">Bewezen effecten</th>
                  <th className="text-left py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">Beperking</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[
                  ['2–5%', 'Sebumreductie, milde barrièreverbetering', 'Onvoldoende voor pigment en anti-aging'],
                  ['5%', 'Barrièreverbetering, milde pigmentverlichting', 'Anti-aging en sebumeffect suboptimaal'],
                  ['10%', 'Volledig spectrum: pigment, sebum, anti-aging, barrière', '—'],
                  ['>10%', 'Geen extra voordeel boven 10%', 'Hogere kans op roodheid (niacinzuur)'],
                ].map(([conc, effects, limit], i) => (
                  <tr key={i} className={conc === '10%' ? 'bg-[#FAF8F5]' : ''}>
                    <td className="py-3 pr-6 font-semibold text-[#1A1A1A]">
                      {conc}
                      {conc === '10%' && (
                        <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#C9A96E]">↑ MAUYI</span>
                      )}
                    </td>
                    <td className="py-3 pr-6 text-[#4A4540]">{effects}</td>
                    <td className="py-3 text-[#9A9590] text-[13px]">{limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Niacinamide + retinol synergy */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Niacinamide en retinol: waarom ze samen werken
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            De combinatie niacinamide + retinol is klinisch onderbouwd als superior aan elk ingrediënt afzonderlijk. Niacinamide buffert twee van de belangrijkste bijwerkingen van retinol: barrièrecompromittering en inflammatoire respons.
          </p>
          <div className="bg-[#FAF8F5] border-l-[3px] border-[#C9A96E] px-5 py-4 rounded-r-xl mb-5">
            <p className="text-[14px] text-[#5C5754] leading-relaxed font-light italic">
              Retinol versnelt celvernieuwing maar verstoort tijdelijk de huidbarrière. Niacinamide compenseert dit direct door ceramideproductie te stimuleren — de combinatie levert meer resultaat met minder irritatie dan retinol alleen.
            </p>
          </div>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            Het mythe dat niacinamide en retinol niet samen gebruikt kunnen worden (vanwege de nicotinezuurconversie) is achterhaald. In stabiele, gebufferde formules treedt dit niet op. MAUYI Reset Serum is op basis van precies deze combinatie geformuleerd — retinol 0.3% + niacinamide 10% in één avondserum.
          </p>

          {/* FAQ */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-12 mb-6 leading-snug">Veelgestelde vragen</h2>
          <div className="space-y-4 mb-12">
            {[
              {
                q: 'Hoe snel werkt niacinamide?',
                a: 'Barrièreverbetering en sebumreductie zijn meetbaar na 4 weken dagelijks gebruik. Pigmentvermindering vereist 8-12 weken. Niacinamide heeft — anders dan retinol — geen opbouwperiode nodig.',
              },
              {
                q: 'Kan ik niacinamide elke dag gebruiken?',
                a: 'Ja, niacinamide is veilig voor dagelijks gebruik — ook tweemaal daags (ochtend en avond). Er is geen irritatierisico en geen opbouwprotocol nodig.',
              },
              {
                q: 'Is niacinamide geschikt voor alle huidtypes?',
                a: 'Ja. Niacinamide is een van de weinige ingrediënten die voor alle huidtypes voordelen biedt: vette huid profiteert van sebumreductie, droge huid van ceramideproductie, gevoelige huid van de ontstekingsremmende werking.',
              },
              {
                q: 'Wat is het verschil tussen niacinamide en niacine?',
                a: 'Niacine (nicotinezuur) veroorzaakt huidroodheid (flushing) door vasodilatatie. Niacinamide is de amidevorm die dit effect niet heeft bij correcte formulering. In huidverzorgingsproducten wordt altijd niacinamide gebruikt, niet niacine.',
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
                <span className="text-[12px] text-[#9A9590] font-light">niacinamide buffert retinol-irritatie</span>
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
              Niacinamide 10% + Retinol 0.3% — samen in één formule
            </p>
            <p className="text-stone-400 text-[14px] font-light mb-6">
              De klinisch onderbouwde combinatie. Parfumvrij, gebufferd voor gevoelige huid.
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
