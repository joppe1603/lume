import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Indeed Labs Retinol Reface Alternatief — MAUYI Reset Serum',
  description:
    'Op zoek naar een alternatief voor Indeed Labs Retinol Reface? MAUYI Reset Serum heeft retinol 0.3% + niacinamide 10% + bakuchiol 0.5% voor duidelijk zichtbaarder resultaat.',
  alternates: { canonical: `${BASE_URL}/alternatives/indeed-labs` },
  openGraph: {
    title: 'Indeed Labs Retinol Reface Alternatief | MAUYI',
    description: 'Retinol Reface heeft een basisformule. MAUYI Reset Serum gaat verder met niacinamide 10% en bakuchiol 0.5% voor completer anti-aging effect.',
    url: `${BASE_URL}/alternatives/indeed-labs`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum als Indeed Labs alternatief' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat zijn de nadelen van Indeed Labs Retinol Reface?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indeed Labs Retinol Reface bevat retinol en hyaluronzuur maar geen niacinamide op effectieve concentratie en geen bakuchiol. De retinolconcentratie wordt niet duidelijk vermeld op de verpakking. Voor mensen die naast celvernieuwing ook sebumregulatie, pigmentvermindering of additief anti-aging effect willen, is een completere formule effectiever.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MAUYI Reset Serum beter dan Retinol Reface?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MAUYI Reset Serum heeft een transparantere formule: 0.3% retinol, 10% niacinamide en 0.5% bakuchiol — alle concentraties vermeld. Retinol Reface vermeldt geen retinolconcentratie. Niacinamide op 10% geeft klinisch bewezen voordelen die Retinol Reface niet biedt: sebumreductie van 16% na 4 weken en significante pigmentvermindering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel kost Indeed Labs Retinol Reface vergeleken met MAUYI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indeed Labs Retinol Reface kost circa €20–25. MAUYI Reset Serum kost €58. Het verschil zit in formulecomplexiteit: MAUYI heeft 10% niacinamide en 0.5% bakuchiol die bij Indeed Labs ontbreken, en een transparante retinolconcentratie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen retinol en retinyl retinoate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retinol is een goed onderzochte, directe retinoidvorm die door enzymen in de huid wordt omgezet naar retinoïnezuur. Retinyl retinoate (soms gebruikt als "gentle retinol" equivalent) heeft minder klinisch bewijs voor anti-aging resultaten dan puur retinol. MAUYI gebruikt 0.3% zuiver retinol — de best gedocumenteerde retinoidvorm voor collageenstimulatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Indeed Labs Retinol Reface geschikt voor gevoelige huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indeed Labs positioneert Retinol Reface als mild product. MAUYI Reset Serum is ook geschikt voor gevoelige huid: de niacinamide 10% in de formule heeft bewezen de irritatiefase van retinol significant te verminderen, en bakuchiol heeft anti-inflammatoire eigenschappen. Beide producten zijn toegankelijk voor gevoelige huid.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Completer alternatief voor Indeed Labs Retinol Reface: retinol 0.3% + niacinamide 10% + bakuchiol 0.5% in één parfumvrije avondformule.',
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
    { '@type': 'ListItem', position: 2, name: 'Alternatieven', item: `${BASE_URL}/alternatives` },
    { '@type': 'ListItem', position: 3, name: 'Indeed Labs Alternatief', item: `${BASE_URL}/alternatives/indeed-labs` },
  ],
}

const comparison = [
  { aspect: 'Retinol concentratie', mauyi: '0.3% (transparant)', competitor: 'Niet vermeld op verpakking' },
  { aspect: 'Niacinamide', mauyi: '10% (bewezen concentratie)', competitor: 'Niet of minimaal aanwezig' },
  { aspect: 'Bakuchiol', mauyi: '0.5% retinol booster', competitor: 'Niet aanwezig' },
  { aspect: 'Formule transparantie', mauyi: 'Alle concentraties vermeld', competitor: 'Concentraties niet vermeld' },
  { aspect: 'Parfumvrij', mauyi: 'Ja', competitor: 'Ja' },
  { aspect: 'Prijs', mauyi: '€58', competitor: '€20–25' },
]

export default function IndeedLabsAlternatiefPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />
      <main className="bg-[#FAF8F5]">

        <section className="bg-[#0A0908] text-white">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
            <nav className="flex items-center gap-2 mb-8 text-[11px] text-stone-600 tracking-wide">
              <Link href="/" className="hover:text-[#C9A96E] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/alternatives" className="hover:text-[#C9A96E] transition-colors">Alternatieven</Link>
              <span>/</span>
              <span className="text-stone-500">Indeed Labs Alternatief</span>
            </nav>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Alternatieven vergelijken</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6 max-w-3xl"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Retinol Reface heeft een basisformule.<br />
              <em className="italic text-[#C9A96E]">MAUYI gaat verder.</em>
            </h1>
            <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px] max-w-2xl">
              Indeed Labs Retinol Reface is een toegankelijk instapproduct. Maar de retinolconcentratie staat
              niet op de verpakking, er is geen effectieve niacinamide en geen bakuchiol. Als je meer wilt dan
              een basisformule, biedt MAUYI Reset Serum een transparantere en completere keuze.
            </p>
            <Link href="/products/reset-serum" className="inline-flex items-center gap-2.5 bg-[#C9A96E] hover:bg-[#B8965C] text-[#0A0908] font-semibold text-[14px] tracking-[0.04em] px-7 py-3.5 rounded-xl transition-colors">
              Bekijk Reset Serum
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M2 7h10M8 3l4 4-4 4" /></svg>
            </Link>
          </div>
        </section>

        <section className="bg-white border-b border-stone-100">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <div className="flex items-center gap-3 mb-5"><div className="w-5 h-px bg-[#C9A96E]" /><span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Vergelijking</span></div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-10" style={{ fontFamily: 'var(--font-cormorant)' }}>
              MAUYI vs Indeed Labs Retinol Reface
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="text-left py-3 pr-6 font-medium text-[#9A9590] text-[11px] uppercase tracking-[0.15em] w-1/3">Aspect</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1A1A1A] w-1/3"><span className="text-[#C9A96E]">MAUYI</span> Reset Serum</th>
                    <th className="text-left py-3 px-4 font-medium text-[#9A9590] w-1/3">Indeed Labs Retinol Reface</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.aspect} className={`border-b border-stone-100 ${i % 2 === 0 ? 'bg-[#FAF8F5]/50' : ''}`}>
                      <td className="py-3 pr-6 text-[#6B6560] font-light text-[13px]">{row.aspect}</td>
                      <td className="py-3 px-4 font-medium text-[#1A1A1A]">{row.mauyi}</td>
                      <td className="py-3 px-4 text-[#9A9590] font-light">{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-[#FAF8F5]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <div className="flex items-center gap-3 mb-5"><div className="w-5 h-px bg-[#C9A96E]" /><span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Waarom overstappen</span></div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-12" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Transparant. Compleet.<br /><em className="italic text-[#C9A96E]">Bewezen concentraties.</em>
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { nr: '01', titel: 'Alle concentraties vermeld', tekst: 'Indeed Labs vermeldt de retinolconcentratie niet op de verpakking van Retinol Reface. MAUYI is volledig transparant: 0.3% retinol, 10% niacinamide, 0.5% bakuchiol. Je weet precies wat je gebruikt en waarom — geen giswerk.' },
                { nr: '02', titel: 'Niacinamide 10% ingebakken', tekst: 'Retinol Reface bevat geen niacinamide op effectieve concentratie. Niacinamide 10% is klinisch bewezen voor 16% minder sebumuitscheiding, significante pigmentvermindering en barrièreversterking. MAUYI heeft het standaard ingebakken — niet als optioneel toevoeging.' },
                { nr: '03', titel: 'Bakuchiol voor additief anti-aging', tekst: 'Indeed Labs Retinol Reface heeft geen bakuchiol. Bakuchiol werkt via dezelfde retinolreceptorpathway met additief anti-aging effect en anti-inflammatoire eigenschappen. MAUYI\'s 0.5% bakuchiol versterkt het retinolresultaat — ook voor huid die gevoeliger reageert.' },
              ].map((item) => (
                <div key={item.nr} className="bg-white rounded-2xl border border-stone-200/60 p-6">
                  <div className="text-[11px] font-bold text-[#C9A96E] tracking-[0.2em] mb-3">{item.nr}</div>
                  <h3 className="text-[17px] font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>{item.titel}</h3>
                  <p className="text-[13px] text-[#6B6560] font-light leading-relaxed">{item.tekst}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white border-t border-stone-100">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] leading-tight mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>Kies Indeed Labs als je…</h2>
              <ul className="space-y-3">
                {['Budget je eerste prioriteit is (€20–25)', 'Voorzichtig wil beginnen met een instapretinol', 'Drogisterj/apotheek-beschikbaarheid fijn vindt', 'Al goede resultaten ziet met Retinol Reface'].map((punt) => (
                  <li key={punt} className="flex items-start gap-3"><span className="text-stone-300 mt-0.5 shrink-0">—</span><span className="text-[14px] text-[#6B6560] font-light">{punt}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] leading-tight mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>Kies MAUYI als je…</h2>
              <ul className="space-y-3 mb-8">
                {['Transparante concentraties wil weten', 'Niacinamide 10% en bakuchiol in je routine wil', 'Meer zichtbaar resultaat wil dan een basisformule', 'Een complete avondroutine in één stap zoekt'].map((punt) => (
                  <li key={punt} className="flex items-start gap-3">
                    <svg className="w-4 h-4 mt-0.5 text-[#C9A96E] shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l4 4 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-[14px] text-[#4A4540] font-light">{punt}</span>
                  </li>
                ))}
              </ul>
              <Link href="/products/reset-serum" className="inline-flex items-center gap-2.5 bg-[#C9A96E] hover:bg-[#B8965C] text-[#0A0908] font-semibold text-[14px] tracking-[0.04em] px-7 py-3.5 rounded-xl transition-colors">
                Bekijk Reset Serum
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M2 7h10M8 3l4 4-4 4" /></svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#FAF8F5] border-t border-stone-100">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <div className="flex items-center gap-3 mb-5"><div className="w-5 h-px bg-[#C9A96E]" /><span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Veelgestelde vragen</span></div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-10 leading-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>MAUYI vs Indeed Labs</h2>
            <div className="space-y-0 divide-y divide-stone-200">
              {[
                { v: 'Wat zijn de nadelen van Indeed Labs Retinol Reface?', a: 'Geen niacinamide op effectieve concentratie, geen bakuchiol, retinolconcentratie niet vermeld. Voor completere anti-aging is een completere formule effectiever.' },
                { v: 'Is MAUYI beter dan Retinol Reface?', a: 'MAUYI heeft transparante concentraties (0.3% retinol, 10% niacinamide, 0.5% bakuchiol). Retinol Reface vermeldt geen retinolconcentratie. Niacinamide 10% geeft klinisch bewezen voordelen die Retinol Reface niet biedt.' },
                { v: 'Hoeveel kost Indeed Labs vergeleken met MAUYI?', a: 'Indeed Labs kost €20–25, MAUYI €58. Het verschil: niacinamide 10%, bakuchiol 0.5% en transparante concentraties.' },
                { v: 'Is Indeed Labs Retinol Reface geschikt voor gevoelige huid?', a: 'Ja, het is een mild product. MAUYI is ook geschikt: niacinamide 10% vermindert de irritatiefase van retinol, bakuchiol heeft anti-inflammatoire eigenschappen.' },
                { v: 'Wat is het verschil tussen retinol en retinyl retinoate?', a: 'Retinol is goed onderzocht en wordt enzymatisch omgezet naar retinoïnezuur. MAUYI gebruikt 0.3% zuiver retinol — de best gedocumenteerde vorm voor collageenstimulatie.' },
              ].map((item) => (
                <details key={item.v} className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                    <span className="text-[15px] font-medium text-[#1A1A1A]">{item.v}</span>
                    <svg className="w-4 h-4 text-[#C9A96E] shrink-0 transition-transform group-open:rotate-180" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </summary>
                  <p className="mt-3 text-[14px] text-[#6B6560] font-light leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FAF8F5] border-t border-stone-100">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 py-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A9590] mb-5">Meer vergelijkingen</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: '/alternatives/the-ordinary', name: 'The Ordinary alternatief', sub: 'Losse ingrediënten vs één formule' },
                { href: '/alternatives/cerave', name: 'CeraVe alternatief', sub: 'Milde retinol vergeleken' },
                { href: '/alternatives/la-roche-posay', name: 'La Roche-Posay alternatief', sub: 'Redermic R vs MAUYI Reset Serum' },
                { href: '/alternatives/paulas-choice', name: "Paula's Choice alternatief", sub: 'Wetenschappelijke formules vergeleken' },
                { href: '/alternatives', name: 'Alle alternatieven →', sub: 'Volledig overzicht van alle merken' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="bg-white rounded-xl border border-stone-100 px-5 py-4 hover:border-[#C9A96E]/40 hover:shadow-sm transition-all group">
                  <p className="text-[14px] font-semibold text-[#1A1A1A] group-hover:text-[#C9A96E] transition-colors mb-1">{item.name}</p>
                  <p className="text-[12px] text-[#9A9590] font-light">{item.sub}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0A0908]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">MAUYI Reset Serum</div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Verder dan de basis.<br /><em className="italic text-[#C9A96E]">Transparant. Compleet.</em>
              </h2>
              <p className="mt-3 text-stone-500 font-light text-[14px]">30 ml · €58 · Gratis verzending vanaf €45</p>
            </div>
            <div className="flex flex-col sm:items-end gap-3 shrink-0">
              <Link href="/products/reset-serum" className="inline-flex items-center gap-2.5 bg-[#C9A96E] hover:bg-[#B8965C] text-[#0A0908] font-semibold text-[14px] tracking-[0.04em] px-8 py-4 rounded-xl transition-colors whitespace-nowrap">
                Bestel Reset Serum — €58
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M2 7h10M8 3l4 4-4 4" /></svg>
              </Link>
              <span className="text-stone-600 text-[12px] font-light">Parfumvrij · Retinol 0.3% + Niacinamide 10% + Bakuchiol · NL &amp; BE</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
