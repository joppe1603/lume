import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: `MAUYI vs CeraVe: eerlijke vergelijking (${new Date().getFullYear()}) | MAUYI`,
  description: 'MAUYI vs CeraVe retinol serum — wat is het verschil? Vergelijk ingrediënten, concentraties, prijzen en gebruiksgemak. Welke past bij jouw huid?',
  openGraph: {
    title: 'MAUYI vs CeraVe | MAUYI',
    description: 'Een eerlijke vergelijking tussen MAUYI Reset Serum en het CeraVe Resurfacing Retinol Serum.',
    url: `${BASE_URL}/vs/cerave`,
    type: 'website',
  },
  alternates: { canonical: `${BASE_URL}/vs/cerave` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'nl-NL',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen MAUYI en CeraVe retinol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CeraVe Resurfacing Retinol Serum bevat ingekapseld retinol, niacinamide en ceramiden. MAUYI Reset Serum bevat retinol 0.3% (transparante concentratie), niacinamide 10% (hoger dan CeraVe) en bakuchiol als extra buffer. MAUYI is parfumvrij en specifiek geformuleerd voor gevoelige huid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MAUYI beter dan CeraVe voor gevoelige huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beide merken zijn ontwikkeld voor gevoelige huid. CeraVe kiest voor ceramiden als barrièreherstel-aanpak. MAUYI combineert niacinamide 10% en bakuchiol om irritatie van retinol actief te bufferen. 91% van MAUYI-klanten met gevoelige huid rapporteert geen irritatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel niacinamide zit er in CeraVe vs MAUYI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CeraVe vermeldt geen exacte niacinamideconcentratie in het Resurfacing Retinol Serum. MAUYI bevat 10% niacinamide — de klinisch bewezen drempel voor zichtbaar effect op huidbarrière, sebumregulatie en pigmentvermindering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost MAUYI vs CeraVe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CeraVe Resurfacing Retinol Serum kost circa €20–25 voor 30ml. MAUYI Reset Serum kost €58 voor 30ml. Het prijsverschil wordt verklaard door de hogere niacinamideconcentratie (10%), het bakuchiolcomplex en de 30-dagen geld-terug garantie.',
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
    { '@type': 'ListItem', position: 3, name: 'MAUYI vs CeraVe', item: `${BASE_URL}/vs/cerave` },
  ],
}

const comparisonRows = [
  { category: 'Retinol', mauyi: '0.3% — transparant vermeld', cerave: 'Ingekapseld retinol — concentratie niet vermeld', winner: 'mauyi' as const },
  { category: 'Niacinamide', mauyi: '10% — klinisch effectieve drempel', cerave: 'Aanwezig — concentratie niet vermeld', winner: 'mauyi' as const },
  { category: 'Bakuchiol', mauyi: '0.5% — plant-based retinolbuffer', cerave: 'Niet aanwezig', winner: 'mauyi' as const },
  { category: 'Ceramiden', mauyi: 'Niet aanwezig', cerave: '3 ceramiden — barrièreherstel', winner: 'cerave' as const },
  { category: 'Parfumvrij', mauyi: 'Altijd', cerave: 'Ja', winner: 'neutral' as const },
  { category: 'Alcoholvrij', mauyi: 'Ja', cerave: 'Ja', winner: 'neutral' as const },
  { category: 'Prijs', mauyi: '€58 / 30ml', cerave: '~€22 / 30ml', winner: 'cerave' as const },
  { category: 'Herkomst', mauyi: 'Nederland', cerave: 'USA', winner: 'neutral' as const },
  { category: 'Garantie', mauyi: '30-dagen geld terug', cerave: 'Geen standaard garantie', winner: 'mauyi' as const },
  { category: 'Concentratietransparantie', mauyi: 'Volledig — retinol, niacinamide, bakuchiol %', cerave: 'Deels — geen exacte percentages', winner: 'mauyi' as const },
]

export default function MauyiVsCeraVePage() {
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
              <span className="text-[#1A1A1A] font-medium">MAUYI vs CeraVe</span>
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
              MAUYI vs CeraVe: welke retinol past bij jou?
            </h1>
            <p className="text-[17px] text-[#6B6560] font-light leading-relaxed">
              Beide merken richten zich op gevoelige huid en bevatten retinol plus niacinamide. Maar de aanpak verschilt fundamenteel. Hier is een eerlijke vergelijking op ingrediënten, concentraties en transparantie.
            </p>
          </div>

          <div className="bg-[#1A1A1A] rounded-2xl px-6 py-6 mb-14">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">TL;DR</p>
            <p className="text-stone-300 text-[15px] leading-relaxed font-light">
              CeraVe focust op ceramiden en barrièreherstel — sterk bewezen, betaalbaar, breed verkrijgbaar. MAUYI kiest voor hogere actieve concentraties: niacinamide 10%, retinol 0.3% en bakuchiol als extra buffer. Het grootste verschil is transparantie: MAUYI vermeldt alle percentages, CeraVe niet.
            </p>
          </div>

          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-6 leading-snug">Snelle vergelijking</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b-2 border-[#C9A96E]/30">
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590] w-[34%]">Kenmerk</th>
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#C9A96E] w-[33%]">MAUYI</th>
                  <th className="text-left py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590] w-[33%]">CeraVe</th>
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
                    <td className={`py-3 ${row.winner === 'cerave' ? 'text-[#1A1A1A] font-medium' : 'text-[#6B6560]'}`}>
                      {row.winner === 'cerave' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-400 mr-2 mb-0.5 align-middle" />}
                      {row.cerave}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">Ingrediënten en concentraties</h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            <strong>CeraVe Resurfacing Retinol Serum</strong> gebruikt ingekapseld retinol — een stabielere vorm die geleidelijk vrijkomt in de huid. De exacte concentratie wordt niet vermeld. Niacinamide en drie ceramiden (1, 3 en 6-II) zijn toegevoegd voor barrièreondersteuning. Een solide, dermatologisch gevalideerde formule.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            <strong>MAUYI Reset Serum</strong> vermelt alle actieve concentraties: retinol 0.3%, niacinamide 10% en bakuchiol 0.5%. Niacinamide 10% is de klinisch bewezen drempel voor significante effecten op huidbarrière, poriënverkleining en pigmentvermindering. Bakuchiol versterkt het retinoleffect en vermindert tegelijk irritatie — een combinatie die bij CeraVe niet aanwezig is.
          </p>
          <div className="bg-[#FAF8F5] border-l-[3px] border-[#C9A96E] px-5 py-4 rounded-r-xl mb-10">
            <p className="text-[14px] text-[#5C5754] leading-relaxed font-light italic">
              Het verschil: CeraVe kiest voor ceramiden als vangnet na retinolgebruik. MAUYI kiest voor niacinamide en bakuchiol om irritatie vóór te zijn — in dezelfde formule.
            </p>
          </div>

          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">Transparantie over percentages</h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            CeraVe vermeldt geen exacte retinol- of niacinamideconcentraties. Dat is een bewuste merkstrategie die gebruikelijk is in de massamarkt — maar het maakt het moeilijker om producten objectief te vergelijken.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            MAUYI vermeldt alle actieve percentages op de verpakking en productpagina. Dit is geen marketingkeuze, maar een standpunt: je hebt het recht te weten wat je op je huid smeert en in welke concentratie.
          </p>

          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">Prijs</h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            CeraVe wint op prijs: het Resurfacing Retinol Serum kost circa €20–25 voor 30ml en is breed verkrijgbaar bij drogisterijen. MAUYI kost €58 voor 30ml. Dat verschil reflecteert hogere actieve concentraties, bakuchiol als premium ingrediënt, en de 30-dagen geld-terug garantie.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 my-12">
            <div className="bg-white rounded-2xl border border-stone-100 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9A9590] mb-4">Kies CeraVe als je</p>
              <ul className="space-y-3">
                {[
                  'Een bewezen, betaalbare retinol zoekt',
                  'Ceramiden wilt voor barrièreherstel',
                  'Breed verkrijgbaar wilt (drogist/apotheek)',
                  'Zo weinig mogelijk wilt uitgeven',
                  'Dermatologisch gevalideerde formules verkiest',
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
                  'Exacte concentraties wilt weten',
                  'Niacinamide 10% (klinisch effectief) wilt',
                  'Bakuchiol als extra irritatiebuffer wilt',
                  'Gevoelige huid hebt en zeker wilt zijn',
                  'Een Nederlandse, transparante formule verkiest',
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
                q: 'Wat is het verschil tussen MAUYI en CeraVe retinol?',
                a: 'CeraVe bevat ceramiden voor barrièreherstel en ingekapseld retinol (concentratie niet vermeld). MAUYI vermeldt retinol 0.3%, niacinamide 10% en bakuchiol 0.5% — hogere actieve concentraties, volledig transparant.',
              },
              {
                q: 'Is MAUYI beter dan CeraVe voor gevoelige huid?',
                a: 'Beide zijn ontwikkeld voor gevoelige huid. CeraVe gebruikt ceramiden als barrièreondersteuning na retinol. MAUYI buffeert irritatie direct in de formule via niacinamide 10% en bakuchiol — een proactievere aanpak.',
              },
              {
                q: 'Hoeveel niacinamide zit er in CeraVe vs MAUYI?',
                a: 'CeraVe vermeldt geen concentratie. MAUYI bevat 10% niacinamide — de drempel die klinisch gevalideerd is voor zichtbare resultaten op huidbarrière, sebum en pigmentatie.',
              },
              {
                q: 'Wat kost MAUYI vs CeraVe?',
                a: 'CeraVe Resurfacing Retinol Serum kost circa €20–25. MAUYI Reset Serum kost €58. MAUYI biedt een 30-dagen geld-terug garantie.',
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
                { href: '/alternatives/cerave', label: 'CeraVe alternatief →', sub: 'Waarom mensen overstappen van CeraVe naar MAUYI' },
                { href: '/vs/the-ordinary', label: 'MAUYI vs The Ordinary →', sub: 'Losse ingrediënten vs gecombineerde formule' },
                { href: '/vs/la-roche-posay', label: 'MAUYI vs La Roche-Posay →', sub: 'Apotheek retinol vergeleken met MAUYI' },
                { href: '/alternatives/the-ordinary', label: 'The Ordinary alternatief →', sub: 'Eén formule vs 100+ losse producten' },
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
              Alle concentraties vermeld. Gebufferd voor gevoelige huid. Nederlands.
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
