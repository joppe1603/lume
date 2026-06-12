import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'La Roche-Posay Redermic R Alternatief — MAUYI Reset Serum',
  description:
    'La Roche-Posay Redermic R is duur en heeft geen niacinamide of bakuchiol. MAUYI Reset Serum geeft retinol 0.3% + niacinamide 10% + bakuchiol 0.5% voor dezelfde prijs.',
  alternates: { canonical: `${BASE_URL}/alternatives/la-roche-posay` },
  openGraph: {
    title: 'La Roche-Posay Redermic R Alternatief | MAUYI',
    description: 'Redermic R heeft een goede reputatie maar mist de ingrediënten die écht het verschil maken: niacinamide 10% en bakuchiol.',
    url: `${BASE_URL}/alternatives/la-roche-posay`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum als La Roche-Posay alternatief' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom is MAUYI een beter alternatief voor La Roche-Posay Redermic R?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Roche-Posay Redermic R bevat retinol 0.3% maar geen niacinamide op effectieve concentratie en geen bakuchiol. MAUYI Reset Serum heeft dezelfde retinolconcentratie (0.3%) aangevuld met niacinamide 10% — bewezen voor sebumreductie en pigmentvermindering — en bakuchiol 0.5% voor additief anti-aging effect. Meer in één formule voor een vergelijkbare prijs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is La Roche-Posay Redermic R niet beter voor gevoelige huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Roche-Posay heeft een reputatie voor gevoelige huid, maar Redermic R bevat geen niacinamide als irritatiebuffer. MAUYI Reset Serum is specifiek ontworpen met gevoelige huid als uitgangspunt: niacinamide 10% vermindert de irritatiefase actief, bakuchiol heeft anti-inflammatoire eigenschappen. Klinische vergelijking: beide zijn geschikt voor gevoelige huid, MAUYI geeft meer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost La Roche-Posay Redermic R vergeleken met MAUYI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Roche-Posay Redermic R kost circa €35–40 voor 30 ml. MAUYI Reset Serum kost €58 voor 30 ml. Dat is €18–23 meer voor niacinamide 10%, bakuchiol 0.5% en een parfumvrije formule zonder onnodige toevoegingen. Of dit de meerprijs waard is, hangt af van welke ingrediënten voor jou prioriteit hebben.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft La Roche-Posay niacinamide in hun retinol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Redermic R bevat wat niacinamide, maar niet op de concentratie (5–10%) die klinisch is bewezen voor sebumreductie, pigmentvermindering en barrièreversterking. MAUYI bevat 10% niacinamide — de concentratie die studies consequent als effectief aanwijzen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is La Roche-Posay Redermic R nog steeds een goede keuze?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja — Redermic R is een degelijk product met een goede reputatie en 0.3% retinol. Als je al goede resultaten ziet, hoef je niet te wisselen. Als je méér wil — met name sebumregulatie, pigmentvermindering of additief anti-aging via bakuchiol — dan is MAUYI een completere keuze voor een niet veel hogere prijs.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Completer alternatief voor La Roche-Posay Redermic R: retinol 0.3% + niacinamide 10% + bakuchiol 0.5% in één parfumvrije avondformule.',
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
    { '@type': 'ListItem', position: 3, name: 'La Roche-Posay Alternatief', item: `${BASE_URL}/alternatives/la-roche-posay` },
  ],
}

const comparison = [
  { aspect: 'Retinol concentratie', mauyi: '0.3% zuiver retinol', competitor: '0.3% retinol' },
  { aspect: 'Niacinamide', mauyi: '10% (bewezen concentratie)', competitor: 'Kleine hoeveelheid (< 5%)' },
  { aspect: 'Bakuchiol', mauyi: '0.5% retinol booster', competitor: 'Niet aanwezig' },
  { aspect: 'Hyaluronzuur', mauyi: 'Niet in formule', competitor: 'Aanwezig' },
  { aspect: 'Parfumvrij', mauyi: 'Ja', competitor: 'Nee (bevat parfum)' },
  { aspect: 'Prijs', mauyi: '€58 / 30 ml', competitor: '€35–40 / 30 ml' },
]

export default function LaRochePosayAlternatiefPage() {
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
              <span className="text-stone-500">La Roche-Posay Alternatief</span>
            </nav>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Alternatieven vergelijken</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6 max-w-3xl"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Redermic R heeft 0.3% retinol.<br />
              <em className="italic text-[#C9A96E]">MAUYI heeft hetzelfde — plus meer.</em>
            </h1>
            <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px] max-w-2xl">
              La Roche-Posay Redermic R is een degelijk product met een goede reputatie. Maar voor
              €35–40 krijg je alleen retinol en hyaluronzuur — geen niacinamide op effectieve concentratie,
              geen bakuchiol. MAUYI biedt meer in één formule.
            </p>
            <Link href="/products/reset-serum" className="inline-flex items-center gap-2.5 bg-[#C9A96E] hover:bg-[#B8965C] text-[#0A0908] font-semibold text-[14px] tracking-[0.04em] px-7 py-3.5 rounded-xl transition-colors">
              Bekijk Reset Serum
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M2 7h10M8 3l4 4-4 4" /></svg>
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
              MAUYI vs La Roche-Posay Redermic R
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="text-left py-3 pr-6 font-medium text-[#9A9590] text-[11px] uppercase tracking-[0.15em] w-1/3">Aspect</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1A1A1A] w-1/3"><span className="text-[#C9A96E]">MAUYI</span> Reset Serum</th>
                    <th className="text-left py-3 px-4 font-medium text-[#9A9590] w-1/3">La Roche-Posay Redermic R</th>
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
              Dezelfde retinol.<br /><em className="italic text-[#C9A96E]">Met niacinamide en bakuchiol erbij.</em>
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { nr: '01', titel: 'Niacinamide 10% vs. minimale hoeveelheid', tekst: 'Redermic R bevat een kleine hoeveelheid niacinamide — niet genoeg voor de klinisch bewezen effecten op sebumregulatie en pigmentvermindering. MAUYI bevat 10% niacinamide, de concentratie die studies consequent als effectief aanwijzen voor zichtbare verbetering.' },
                { nr: '02', titel: 'Parfumvrij vs. met parfum', tekst: 'La Roche-Posay Redermic R bevat parfum. Voor gevoelige huid of huid die al met retinol te maken heeft, is parfum een extra irritatiebron. MAUYI Reset Serum is volledig parfumvrij — precies als retinol al een actief is in de formule.' },
                { nr: '03', titel: 'Bakuchiol als extra anti-aging laag', tekst: 'Redermic R heeft geen bakuchiol. Bakuchiol heeft aangetoond additief te zijn aan retinol via dezelfde RAR-pathway. MAUYI\'s 0.5% bakuchiol geeft een extra laag anti-aging effect bovenop de retinolwerking — zonder irritatie toe te voegen.' },
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
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] leading-tight mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>Kies Redermic R als je…</h2>
              <ul className="space-y-3">
                {['Al goede resultaten ziet met Redermic R', 'Drogisterij- of apotheekbeschikbaarheid prioriteit geeft', 'Hyaluronzuur als vochtinbrenger in je formule wil', 'Vertrouwen hebt in het La Roche-Posay merk'].map((punt) => (
                  <li key={punt} className="flex items-start gap-3"><span className="text-stone-300 mt-0.5 shrink-0">—</span><span className="text-[14px] text-[#6B6560] font-light">{punt}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] leading-tight mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>Kies MAUYI als je…</h2>
              <ul className="space-y-3 mb-8">
                {['Niacinamide 10% in je retinolformule wil', 'Parfumvrije formule prefereert', 'Bakuchiol als extra anti-aging versterker wil', 'Meer actives in één stap zoekt'].map((punt) => (
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-10 leading-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>MAUYI vs La Roche-Posay</h2>
            <div className="space-y-0 divide-y divide-stone-200">
              {[
                { v: 'Waarom is MAUYI een beter alternatief voor Redermic R?', a: 'Dezelfde retinolconcentratie (0.3%) aangevuld met niacinamide 10% en bakuchiol 0.5%. Meer in één formule voor een vergelijkbare prijs.' },
                { v: 'Is La Roche-Posay niet beter voor gevoelige huid?', a: 'Redermic R bevat geen niacinamide als irritatiebuffer. MAUYI\'s niacinamide 10% vermindert de irritatiefase actief, bakuchiol heeft anti-inflammatoire eigenschappen.' },
                { v: 'Wat kost Redermic R vergeleken met MAUYI?', a: 'Redermic R is €35–40, MAUYI is €58 voor 30 ml. Het verschil: niacinamide 10%, bakuchiol 0.5% en parfumvrije formule.' },
                { v: 'Heeft La Roche-Posay niacinamide in hun retinol?', a: 'Ja, maar niet op de klinisch bewezen concentratie van 5–10%. MAUYI bevat 10% niacinamide.' },
                { v: 'Is Redermic R nog een goede keuze?', a: 'Ja — als je al goede resultaten ziet, hoef je niet te wisselen. Als je meer wil (sebumregulatie, pigmentvermindering, bakuchiol), is MAUYI een completere keuze.' },
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
                { href: '/alternatives/neutrogena', name: 'Neutrogena alternatief', sub: 'Geen concentratie vermeld vs transparant' },
                { href: '/alternatives/vichy', name: 'Vichy alternatief', sub: 'Parfum in retinolserum vs parfumvrij' },
                { href: '/alternatives/paulas-choice', name: "Paula's Choice alternatief", sub: 'Wetenschappelijke formules vergeleken' },
                { href: '/alternatives/indeed-labs', name: 'Indeed Labs alternatief', sub: 'Bakuchiol Reface vs MAUYI' },
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
                Retinol 0.3%.<br /><em className="italic text-[#C9A96E]">Plus wat Redermic R niet heeft.</em>
              </h2>
              <p className="mt-3 text-stone-500 font-light text-[14px]">30 ml · €58 · Gratis verzending vanaf €45</p>
            </div>
            <div className="flex flex-col sm:items-end gap-3 shrink-0">
              <Link href="/products/reset-serum" className="inline-flex items-center gap-2.5 bg-[#C9A96E] hover:bg-[#B8965C] text-[#0A0908] font-semibold text-[14px] tracking-[0.04em] px-8 py-4 rounded-xl transition-colors whitespace-nowrap">
                Bestel Reset Serum — €58
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M2 7h10M8 3l4 4-4 4" /></svg>
              </Link>
              <span className="text-stone-600 text-[12px] font-light">Parfumvrij · Retinol + Niacinamide 10% + Bakuchiol · NL &amp; BE</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
