import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'CeraVe Retinol Alternatief — Meer Resultaat met MAUYI Reset Serum',
  description:
    'CeraVe Resurfacing Retinol Serum is mild maar zwak. MAUYI Reset Serum geeft retinol 0.3% + niacinamide 10% + bakuchiol 0.5% — effectiever voor zichtbaar resultaat.',
  alternates: { canonical: `${BASE_URL}/alternatives/cerave` },
  openGraph: {
    title: 'CeraVe Retinol Alternatief | MAUYI Reset Serum',
    description: 'CeraVe heeft ingekapseld retinol op een lage concentratie. Voor echt zichtbaar resultaat heb je een krachtigere formule nodig.',
    url: `${BASE_URL}/alternatives/cerave`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum als CeraVe alternatief' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom werkt CeraVe retinol minder goed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CeraVe Resurfacing Retinol Serum gebruikt ingekapseld retinol op een relatief lage concentratie, gericht op milde verbetering. De ceramide-rijke formule is goed voor barrièrescherm maar biedt geen hoge-concentratie niacinamide of bakuchiol. Voor significante anti-aging of pigmentverbetering is een sterkere formule effectiever.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MAUYI minder geschikt voor gevoelige huid dan CeraVe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet noodzakelijk. CeraVe is bewust mild geformuleerd, maar MAUYI Reset Serum is ook ontwikkeld met gevoelige huid als uitgangspunt: retinol 0.3% (laagste effectieve concentratie) wordt gebufferd door niacinamide dat irritatie remt en bakuchiol dat anti-inflammatoir werkt. Klinische resultaten zijn wel zichtbaarder dan bij CeraVe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat bevat CeraVe retinol precies en wat mist er?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CeraVe Resurfacing Retinol bevat ingekapseld retinol, ceramiden en een kleine hoeveelheid niacinamide. Wat mist: een effectieve concentratie niacinamide (10% voor zichtbare sebumregulatie en pigmentvermindering), bakuchiol als additieve anti-aging versterker, en een duidelijke retinolconcentratie op het etiket.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik CeraVe retinol combineren met MAUYI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat wordt afgeraden. Meerdere retinolproducten tegelijk gebruiken verhoogt het irritatierisico zonder proportioneel meer resultaat. Kies één retinolproduct en gebruik dat consistent. Als je overstapt van CeraVe naar MAUYI, begin dan gewoon met 2–3 avonden per week en bouw op.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MAUYI duurder dan CeraVe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CeraVe Resurfacing Retinol kost circa €20–25. MAUYI Reset Serum kost €58. Het verschil zit in de formule-intensiteit: MAUYI bevat een hogere retinolconcentratie, 10% niacinamide (vs. CeraVe\'s onbekende lage %) en bakuchiol. Als je merkbaar resultaat wil, is de investering gerechtvaardigd.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Krachtig alternatief voor CeraVe retinol: retinol 0.3% + niacinamide 10% + bakuchiol 0.5% in één parfumvrije avondformule.',
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
    { '@type': 'ListItem', position: 3, name: 'CeraVe Alternatief', item: `${BASE_URL}/alternatives/cerave` },
  ],
}

const comparison = [
  { aspect: 'Retinol type', mauyi: '0.3% zuiver retinol', competitor: 'Ingekapseld retinol (lage %)' },
  { aspect: 'Niacinamide', mauyi: '10% (bewezen concentratie)', competitor: 'Klein percentage (onbekend)' },
  { aspect: 'Bakuchiol', mauyi: '0.5% retinol booster', competitor: 'Niet aanwezig' },
  { aspect: 'Resultaat snelheid', mauyi: 'Zichtbaar na 4–6 weken', competitor: 'Milde verbetering na 8–12 weken' },
  { aspect: 'Parfumvrij', mauyi: 'Ja', competitor: 'Ja' },
  { aspect: 'Prijs', mauyi: '€58', competitor: '€20–25' },
]

export default function CeraVeAlternatiefPage() {
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
              <span className="text-stone-500">CeraVe Retinol Alternatief</span>
            </nav>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Alternatieven vergelijken</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6 max-w-3xl"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              CeraVe retinol is veilig.<br />
              <em className="italic text-[#C9A96E]">Maar mild genoeg voor resultaat?</em>
            </h1>
            <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px] max-w-2xl">
              CeraVe is een betrouwbaar merk voor barrièrezorg. Hun retinol is mild en veilig — maar door de
              lage ingekapselde concentratie geven veel gebruikers aan weinig verschil te zien. Als je
              zichtbaar resultaat wil, heb je een formule nodig die echt levert.
            </p>
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
        </section>

        <section className="bg-white border-b border-stone-100">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Vergelijking</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-10" style={{ fontFamily: 'var(--font-cormorant)' }}>
              MAUYI vs CeraVe Retinol
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="text-left py-3 pr-6 font-medium text-[#9A9590] text-[11px] uppercase tracking-[0.15em] w-1/3">Aspect</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1A1A1A] w-1/3"><span className="text-[#C9A96E]">MAUYI</span> Reset Serum</th>
                    <th className="text-left py-3 px-4 font-medium text-[#9A9590] w-1/3">CeraVe Resurfacing Retinol</th>
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
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Waarom overstappen</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-12" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Drie redenen voor<br /><em className="italic text-[#C9A96E]">meer resultaat</em>
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nr: '01',
                  titel: 'Transparante retinolconcentratie',
                  tekst: 'CeraVe gebruikt ingekapseld retinol zonder een duidelijke concentratie te vermelden. MAUYI Reset Serum is helder: 0.3% zuiver retinol — de sweet spot tussen effectiviteit en tolerantie, klinisch bewezen voor celvernieuwing en collageenstimulatie.',
                },
                {
                  nr: '02',
                  titel: 'Niacinamide 10% niet 1%',
                  tekst: 'CeraVe bevat een kleine hoeveelheid niacinamide, maar niet op de concentratie waar klinische studies effect aantonen (5–10%). MAUYI bevat 10% niacinamide — de concentratie die proven is voor sebumreductie, pigmentvermindering en barrièreversterking.',
                },
                {
                  nr: '03',
                  titel: 'Bakuchiol erbij inbegrepen',
                  tekst: 'CeraVe heeft geen bakuchiol. Bakuchiol heeft bewezen anti-aging effect via dezelfde retinolreceptorpathway, additief aan retinol. In Reset Serum zit 0.5% standaard meegeformuleerd voor een sterker, completer resultaat.',
                },
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
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] leading-tight mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Kies CeraVe als je…
              </h2>
              <ul className="space-y-3">
                {['Drogisterij-toegankelijkheid belangrijk vindt', 'Een budget van €20–25 hebt', 'Heel voorzichtig wil beginnen met een minimale formule', 'Al ceramides uit andere producten haalt'].map((punt) => (
                  <li key={punt} className="flex items-start gap-3">
                    <span className="text-stone-300 mt-0.5 shrink-0">—</span>
                    <span className="text-[14px] text-[#6B6560] font-light">{punt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] leading-tight mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Kies MAUYI als je…
              </h2>
              <ul className="space-y-3 mb-8">
                {['Daadwerkelijk zichtbaar resultaat wil na 4–8 weken', 'Een transparante formule wil met bekende concentraties', 'Niacinamide én retinol in één stap wil', 'Geen genoegen neemt met milde verbetering'].map((punt) => (
                  <li key={punt} className="flex items-start gap-3">
                    <svg className="w-4 h-4 mt-0.5 text-[#C9A96E] shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8l4 4 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Veelgestelde vragen</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-10 leading-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>MAUYI vs CeraVe</h2>
            <div className="space-y-0 divide-y divide-stone-200">
              {[
                { v: 'Waarom werkt CeraVe retinol minder goed?', a: 'CeraVe gebruikt ingekapseld retinol op lage concentratie, gericht op milde verbetering. Er is geen hoge niacinamide of bakuchiol. Voor significante anti-aging is een sterkere formule effectiever.' },
                { v: 'Is MAUYI minder geschikt voor gevoelige huid dan CeraVe?', a: 'Niet noodzakelijk. MAUYI is ook ontwikkeld met gevoelige huid als uitgangspunt: retinol 0.3% gebufferd door niacinamide en bakuchiol. Klinische resultaten zijn wel zichtbaarder.' },
                { v: 'Wat mist CeraVe retinol?', a: 'Effectieve concentratie niacinamide (10% voor sebumregulatie), bakuchiol als anti-aging versterker, en een transparante retinolconcentratie op het etiket.' },
                { v: 'Kan ik CeraVe retinol combineren met MAUYI?', a: 'Afgeraden. Meerdere retinolproducten verhogen irritatierisico. Kies één retinolproduct en gebruik dat consistent.' },
                { v: 'Is MAUYI duurder dan CeraVe?', a: 'CeraVe kost €20–25, MAUYI €58. Het verschil: hogere retinolconcentratie, 10% niacinamide vs. CeraVe\'s onbekende lage %, én bakuchiol inbegrepen.' },
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

        <section className="bg-[#0A0908]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">MAUYI Reset Serum</div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Mild genoeg.<br /><em className="italic text-[#C9A96E]">Krachtig genoeg.</em>
              </h2>
              <p className="mt-3 text-stone-500 font-light text-[14px]">30 ml · €58 · Gratis verzending vanaf €45</p>
            </div>
            <div className="flex flex-col sm:items-end gap-3 shrink-0">
              <Link href="/products/reset-serum" className="inline-flex items-center gap-2.5 bg-[#C9A96E] hover:bg-[#B8965C] text-[#0A0908] font-semibold text-[14px] tracking-[0.04em] px-8 py-4 rounded-xl transition-colors whitespace-nowrap">
                Bestel Reset Serum — €58
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M2 7h10M8 3l4 4-4 4" /></svg>
              </Link>
              <span className="text-stone-600 text-[12px] font-light">Parfumvrij · Retinol 0.3% + Niacinamide 10% · NL &amp; BE</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
