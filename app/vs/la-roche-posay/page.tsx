import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: `MAUYI vs La Roche-Posay: eerlijke vergelijking (${new Date().getFullYear()}) | MAUYI`,
  description: 'MAUYI vs La Roche-Posay retinol — Redermic R vs Reset Serum. Vergelijk concentraties, ingrediënten en prijzen. Welke retinol past bij gevoelige huid?',
  openGraph: {
    title: 'MAUYI vs La Roche-Posay | MAUYI',
    description: 'Redermic R vs MAUYI Reset Serum: eerlijke vergelijking op retinolconcentratie, niacinamide en geschiktheid voor gevoelige huid.',
    url: `${BASE_URL}/vs/la-roche-posay`,
    type: 'website',
  },
  alternates: { canonical: `${BASE_URL}/vs/la-roche-posay` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'nl-NL',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen MAUYI en La Roche-Posay retinol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Roche-Posay Redermic R bevat 0.1% puur retinol — een lage concentratie voor beginners. MAUYI Reset Serum bevat 0.3% retinol gebufferd met niacinamide 10% en bakuchiol 0.5%. MAUYI is effectiever voor mensen die meer dan een beginnersdosis retinol willen, maar toch gevoelige-huid-vriendelijk willen blijven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is La Roche-Posay Redermic R goed voor gevoelige huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, La Roche-Posay is speciaal ontwikkeld voor gevoelige huid. Redermic R heeft een lage retinolconcentratie (0.1%) met neurosensine als kalmerend ingrediënt. MAUYI gebruikt een hogere retinolconcentratie (0.3%) maar buffert dit via niacinamide 10% en bakuchiol, wat een vergelijkbaar tolerantieprofiel geeft bij hogere effectiviteit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke retinol is effectiever: MAUYI of La Roche-Posay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MAUYI Reset Serum bevat 0.3% retinol — drie keer meer dan Redermic R (0.1%). Hogere retinolconcentraties zijn in klinische studies geassocieerd met sterkere celvernieuwing en collageenanslag. Voor beginners kan Redermic R een goede instap zijn; voor mensen die bewezen resultaten willen, biedt MAUYI meer actieve concentratie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bevat La Roche-Posay Redermic R niacinamide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Redermic R bevat geen niacinamide. MAUYI Reset Serum combineert retinol met niacinamide 10% — een synergetische combinatie waarbij niacinamide de retinolrespons buffert en eigenstandige voordelen toevoegt (huidbarrière, sebumregulatie, pigmentvermindering).',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Vergelijkingen', item: `${BASE_URL}/vs` },
    { '@type': 'ListItem', position: 3, name: 'MAUYI vs La Roche-Posay', item: `${BASE_URL}/vs/la-roche-posay` },
  ],
}

const comparisonRows = [
  { category: 'Retinol concentratie', mauyi: '0.3% — klinisch effectief', lrp: '0.1% (Redermic R) — instapconcentratie', winner: 'mauyi' as const },
  { category: 'Niacinamide', mauyi: '10% — geïntegreerd als buffer', lrp: 'Niet aanwezig', winner: 'mauyi' as const },
  { category: 'Bakuchiol', mauyi: '0.5% — plant-based synergist', lrp: 'Niet aanwezig', winner: 'mauyi' as const },
  { category: 'Kalmerende ingrediënten', mauyi: 'Niacinamide + bakuchiol', lrp: 'Neurosensine (peptide)', winner: 'neutral' as const },
  { category: 'Parfumvrij', mauyi: 'Ja', lrp: 'Ja', winner: 'neutral' as const },
  { category: 'Prijs', mauyi: '€58 / 30ml', lrp: '~€35–45 / 30ml', winner: 'lrp' as const },
  { category: 'Herkomst', mauyi: 'Nederland', lrp: 'Frankrijk', winner: 'neutral' as const },
  { category: 'Verkrijgbaar', mauyi: 'Online — mauyi.nl', lrp: 'Apotheek, drogist, online', winner: 'lrp' as const },
  { category: 'Garantie', mauyi: '30-dagen geld terug', lrp: 'Geen standaard garantie', winner: 'mauyi' as const },
  { category: 'Concentratietransparantie', mauyi: 'Volledig — alle % vermeld', lrp: 'Retinol % vermeld, rest niet', winner: 'mauyi' as const },
]

export default function MauyiVsLaRochePosayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <main className="bg-[#FAF8F5] min-h-screen">
        <div className="bg-white border-b border-stone-100">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 py-4">
            <nav className="flex items-center gap-2 text-xs text-[#9A9590]">
              <Link href="/" className="hover:text-[#C9A96E] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/alternatives" className="hover:text-[#C9A96E] transition-colors">Vergelijkingen</Link>
              <span>/</span>
              <span className="text-[#1A1A1A] font-medium">MAUYI vs La Roche-Posay</span>
            </nav>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-6 sm:px-8 py-16">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Directe vergelijking</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-[1.1] mb-5" style={{ fontFamily: 'var(--font-cormorant)' }}>
              MAUYI vs La Roche-Posay: retinol voor gevoelige huid vergeleken
            </h1>
            <p className="text-[17px] text-[#6B6560] font-light leading-relaxed">
              La Roche-Posay Redermic R is een van de meest aanbevolen apotheekretinols voor gevoelige huid. MAUYI Reset Serum kiest voor een hogere retinolconcentratie met een ingebouwde buffer. Hier is een eerlijke vergelijking.
            </p>
          </div>

          <div className="bg-[#1A1A1A] rounded-2xl px-6 py-6 mb-14">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">TL;DR</p>
            <p className="text-stone-300 text-[15px] leading-relaxed font-light">
              La Roche-Posay Redermic R is een uitstekende instap in retinol — lage concentratie (0.1%), verkrijgbaar bij de apotheek, klinisch getest. MAUYI gaat verder: retinol 0.3% gebufferd door niacinamide 10% en bakuchiol 0.5% voor hogere effectiviteit bij vergelijkbare tolerantie. Voor wie klaar is voor meer dan beginner-retinol.
            </p>
          </div>

          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-6 leading-snug">Snelle vergelijking</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b-2 border-[#C9A96E]/30">
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590] w-[34%]">Kenmerk</th>
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#C9A96E] w-[33%]">MAUYI</th>
                  <th className="text-left py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590] w-[33%]">La Roche-Posay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-6 font-medium text-[#1A1A1A]">{row.category}</td>
                    <td className={`py-3 pr-6 ${row.winner === 'mauyi' ? 'text-[#1A1A1A] font-medium' : 'text-[#6B6560]'}`}>
                      {row.winner === 'mauyi' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C9A96E] mr-2 mb-0.5 align-middle" />}
                      {row.mauyi}
                    </td>
                    <td className={`py-3 ${row.winner === 'lrp' ? 'text-[#1A1A1A] font-medium' : 'text-[#6B6560]'}`}>
                      {row.winner === 'lrp' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-400 mr-2 mb-0.5 align-middle" />}
                      {row.lrp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">Retinolconcentratie: 0.1% vs 0.3%</h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            <strong>La Roche-Posay Redermic R</strong> bevat 0.1% puur retinol — bewust laag gehouden voor mensen die nog nooit retinol hebben gebruikt of die eerder irritatie ervaarden. Het merk voegt neurosensine toe (een kalmerend peptide) en hyaluronzuur voor comfort. Een doordachte beginnerformule.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            <strong>MAUYI Reset Serum</strong> bevat 0.3% retinol — drie keer meer dan Redermic R. Dit is de laagste concentratie waarbij klinische studies consequent celvernieuwing en collageenstimulatie aantonen. Niacinamide 10% en bakuchiol 0.5% in dezelfde formule compenseren de hogere retinol met actieve buffering, niet alleen kalmerende add-ons.
          </p>
          <div className="bg-[#FAF8F5] border-l-[3px] border-[#C9A96E] px-5 py-4 rounded-r-xl mb-10">
            <p className="text-[14px] text-[#5C5754] leading-relaxed font-light italic">
              Redermic R is ontworpen voor maximale veiligheid bij minimale effectiviteit. MAUYI is ontworpen voor maximale effectiviteit bij aanvaardbare veiligheid — via ingebouwde buffering.
            </p>
          </div>

          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">Niacinamide: absent vs 10%</h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            Redermic R bevat geen niacinamide. MAUYI bevat 10% niacinamide — een ingrediënt dat niet alleen helpt bij het bufferen van retinolirritatie, maar ook eigenstandige voordelen heeft: het versterkt de huidbarrière door ceramideproductie te stimuleren, reguleert sebum, verlicht pigmentvlekken en heeft ontstekingsremmende eigenschappen. Deze combinatie maakt MAUYI in één stap effectiever op meerdere huidproblemen tegelijk.
          </p>

          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">Prijs en verkrijgbaarheid</h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            La Roche-Posay Redermic R kost circa €35–45 en is verkrijgbaar bij apotheken, drogisterijen en online. MAUYI kost €58 en is alleen via mauyi.nl verkrijgbaar, met gratis verzending boven €50 en een 30-dagen geld-terug garantie.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 my-12">
            <div className="bg-white rounded-2xl border border-stone-100 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9A9590] mb-4">Kies La Roche-Posay als je</p>
              <ul className="space-y-3">
                {[
                  'Net begint met retinol',
                  'Een apotheekformule verkiest',
                  'Breed verkrijgbaar wilt (apotheek/drogist)',
                  'Voorzichtig wilt beginnen bij 0.1%',
                  'Neurosensine als kalmeerder verkiest',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-[14px] text-[#5C5754]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0F0E0C] rounded-2xl p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-4">Kies MAUYI als je</p>
              <ul className="space-y-3">
                {[
                  'Meer dan 0.1% retinol wilt zonder extra irritatie',
                  'Niacinamide 10% in dezelfde formule wilt',
                  'Bakuchiol als plant-based synergist wilt',
                  'Bewezen resultaten sneller wilt zien',
                  'Een transparante Nederlandse formule verkiest',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-[14px] text-stone-300 font-light">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-12 mb-6 leading-snug">Veelgestelde vragen</h2>
          <div className="space-y-4 mb-12">
            {[
              {
                q: 'Wat is het verschil tussen MAUYI en La Roche-Posay retinol?',
                a: 'Redermic R bevat 0.1% retinol zonder niacinamide — een veilige instapformule. MAUYI bevat 0.3% retinol gebufferd met niacinamide 10% en bakuchiol 0.5% voor hogere effectiviteit bij vergelijkbare tolerantie.',
              },
              {
                q: 'Is Redermic R goed voor gevoelige huid?',
                a: 'Ja, Redermic R is een van de meest aanbevolen apotheekkeuzes voor gevoelige huid dankzij de lage retinolconcentratie. MAUYI biedt een hogere concentratie maar compenseert dat actief via niacinamide en bakuchiol.',
              },
              {
                q: 'Welke retinol is effectiever?',
                a: 'MAUYI bevat 0.3% retinol — drie keer meer dan Redermic R. Klinische studies tonen aan dat 0.3% consistent betere celvernieuwing geeft dan 0.1%. De ingebouwde buffering in MAUYI maakt hogere effectiviteit bereikbaar zonder extra irritatie.',
              },
              {
                q: 'Bevat La Roche-Posay Redermic R niacinamide?',
                a: 'Nee. MAUYI bevat niacinamide 10%, wat retinolirritatie buffert en eigenstandige voordelen toevoegt voor huidbarrière, sebum en pigmentatie.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-stone-100 px-5 py-4">
                <p className="text-[15px] font-semibold text-[#1A1A1A] mb-2">{item.q}</p>
                <p className="text-[14px] text-[#5C5754] leading-relaxed font-light">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="border border-stone-100 rounded-2xl p-6 mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A9590] mb-4">Meer vergelijkingen</p>
            <div className="flex flex-col gap-4">
              {[
                { href: '/alternatives/la-roche-posay', label: 'La Roche-Posay alternatief →', sub: 'Waarom mensen overstappen naar MAUYI' },
                { href: '/vs/cerave', label: 'MAUYI vs CeraVe →', sub: 'Ceramiden vs niacinamide+bakuchiol aanpak' },
                { href: '/vs/the-ordinary', label: 'MAUYI vs The Ordinary →', sub: 'Losse ingrediënten vs gecombineerde formule' },
                { href: '/alternatives/the-ordinary', label: 'The Ordinary alternatief →', sub: 'Één formule vs 100+ losse producten' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="flex items-start gap-3 group">
                  <div>
                    <p className="text-[14px] font-semibold text-[#1A1A1A] group-hover:text-[#C9A96E] transition-colors">{item.label}</p>
                    <p className="text-[13px] text-[#9A9590] font-light mt-0.5">{item.sub}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-[#1A1A1A] rounded-2xl px-6 py-8 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">MAUYI Reset Serum</p>
            <p className="text-white text-[18px] font-semibold mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Retinol 0.3%. Niacinamide 10%. Bakuchiol 0.5%.
            </p>
            <p className="text-stone-400 text-[14px] font-light mb-6">
              Meer dan beginnersdosis retinol — zonder extra irritatie.
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
