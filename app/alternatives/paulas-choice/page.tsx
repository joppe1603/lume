import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: "Paula's Choice Retinol Alternatief — MAUYI Reset Serum",
  description:
    "Paula's Choice 1% Retinol Booster is te sterk voor de meeste huidtypes en erg duur per ml. MAUYI Reset Serum geeft effectieve anti-aging met retinol 0.3% + niacinamide 10% + bakuchiol 0.5%.",
  alternates: { canonical: `${BASE_URL}/alternatives/paulas-choice` },
  openGraph: {
    title: "Paula's Choice Retinol Alternatief | MAUYI",
    description: "1% retinol klinkt indrukwekkend maar is voor de meeste mensen te sterk. MAUYI's 0.3% met bakuchiol geeft vergelijkbaar resultaat zonder de irritatie.",
    url: `${BASE_URL}/alternatives/paulas-choice`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: "MAUYI Reset Serum als Paula's Choice alternatief" }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Is Paula's Choice 1% Retinol te sterk?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "1% retinol is een hoge concentratie die significant irritatie, peeling en roodheid kan veroorzaken, zeker bij ongewende huid. Klinische studies tonen dat 0.3% retinol dezelfde mechanismen activeert — collageenstimulatie en celvernieuwing — zonder de bijwerkingen van hogere concentraties. MAUYI's 0.3% aangevuld met bakuchiol (dat via dezelfde pathway werkt) bereikt vergelijkbaar of beter anti-aging resultaat met een veel lagere irritatiedrempel.",
      },
    },
    {
      '@type': 'Question',
      name: "Hoe verschilt de prijs van Paula's Choice van MAUYI?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Paula's Choice 1% Retinol Booster kost circa €55–65 voor slechts 15 ml — wat neerkomt op €3,70–4,30 per ml. MAUYI Reset Serum kost €58 voor 30 ml — €1,93 per ml. MAUYI is per ml significant goedkoper én bevat meer actieve ingrediënten (niacinamide 10% en bakuchiol 0.5% die bij Paula's Choice ontbreken).",
      },
    },
    {
      '@type': 'Question',
      name: "Heeft Paula's Choice niacinamide in hun retinol booster?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Paula's Choice 1% Retinol Booster bevat geen niacinamide. De formule richt zich op hoge-concentratie retinol aangevuld met peptiden en antioxidanten. Niacinamide 10% — bewezen voor sebumreductie, pigmentvermindering en barrièreversterking — is niet aanwezig. Bij MAUYI zit 10% niacinamide standaard ingebakken.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is hogere retinolconcentratie altijd beter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee — dit is een van de meest voorkomende misvattingen over retinol. Effectiviteit is meer afhankelijk van consistentie dan concentratie. 1% retinol geeft significant meer irritatie, waardoor mensen stoppen of minder frequent gebruiken. 0.3% dagelijks consistent gebruikt levert meer resultaat dan 1% tweewekelijks door irritatie. Bovendien versterkt bakuchiol in MAUYI de retinolwerking via een aanvullende pathway.',
      },
    },
    {
      '@type': 'Question',
      name: "Voor wie is Paula's Choice 1% Retinol Booster wél geschikt?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Paula's Choice is geschikt voor ervaren retinolgebruikers met niet-gevoelige huid die al 6–12 maanden 0.5% retinol zonder problemen gebruiken en klaar zijn voor een concentratiestap. Het is een add-on booster, niet een all-in-one serum. Niet geschikt voor beginners, gevoelige huid of als hoofdretinolproduct.",
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: "Slimmer alternatief voor Paula's Choice retinol: retinol 0.3% + niacinamide 10% + bakuchiol 0.5%. Meer actives, lagere irritatiedrempel, lagere prijs per ml.",
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
    { '@type': 'ListItem', position: 3, name: "Paula's Choice Alternatief", item: `${BASE_URL}/alternatives/paulas-choice` },
  ],
}

const comparison = [
  { aspect: 'Retinol concentratie', mauyi: '0.3% (dagelijks draagbaar)', competitor: '1% (hoog, irritatierisico)' },
  { aspect: 'Niacinamide', mauyi: '10% (bewezen concentratie)', competitor: 'Niet aanwezig' },
  { aspect: 'Bakuchiol', mauyi: '0.5% retinol booster', competitor: 'Niet aanwezig' },
  { aspect: 'Inhoud', mauyi: '30 ml', competitor: '15 ml' },
  { aspect: 'Prijs per ml', mauyi: '€1,93 / ml', competitor: '±€3,70–4,30 / ml' },
  { aspect: 'Parfumvrij', mauyi: 'Ja', competitor: 'Ja' },
]

export default function PaulasChoiceAlternatiefPage() {
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
              <span className="text-stone-500">{"Paula's Choice Alternatief"}</span>
            </nav>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Alternatieven vergelijken</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6 max-w-3xl"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {"1% retinol klinkt meer."}<br />
              <em className="italic text-[#C9A96E]">{"Maar werkt het ook beter?"}</em>
            </h1>
            <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px] max-w-2xl">
              {"Paula's Choice 1% Retinol Booster is een serieuze formule voor gevorderde gebruikers. Maar 1% retinol is te sterk voor de meeste huidtypes, heeft geen niacinamide, en kost €3,70+ per ml. MAUYI bereikt vergelijkbaar resultaat slimmer."}
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
              {"MAUYI vs Paula's Choice Retinol"}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="text-left py-3 pr-6 font-medium text-[#9A9590] text-[11px] uppercase tracking-[0.15em] w-1/3">Aspect</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1A1A1A] w-1/3"><span className="text-[#C9A96E]">MAUYI</span> Reset Serum</th>
                    <th className="text-left py-3 px-4 font-medium text-[#9A9590] w-1/3">{"Paula's Choice 1% Retinol"}</th>
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
              Minder concentratie.<br /><em className="italic text-[#C9A96E]">Slimmere formule.</em>
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { nr: '01', titel: 'Meer actives per euro', tekst: "Paula's Choice 1% Retinol kost €55–65 voor 15 ml — dat is €3,70–4,30 per ml, zonder niacinamide of bakuchiol. MAUYI kost €1,93 per ml en bevat retinol 0.3% + niacinamide 10% + bakuchiol 0.5%. Drie bewezen actives voor de helft van de prijs per ml." },
                { nr: '02', titel: 'Effectief zonder de irritatie', tekst: '1% retinol veroorzaakt bij veel gebruikers significante peeling, roodheid en droogheid — waardoor ze stoppen of de frequentie verlagen. Lagere frequentie = minder resultaat. MAUYI\'s 0.3% met bakuchiol is dagelijks draagbaar, wat compounderende effecten geeft over maanden.' },
                { nr: '03', titel: 'Niacinamide als ontbrekend ingrediënt', tekst: "Paula's Choice 1% Retinol heeft geen niacinamide. Niacinamide 10% is bewezen voor sebumreductie, pigmentvermindering en barrièreversterking — en vermindert tegelijkertijd de irritatiefase van retinol. Het is het ingredient dat Paula's Choice mist en MAUYI standaard heeft." },
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
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] leading-tight mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>{"Kies Paula's Choice als je…"}</h2>
              <ul className="space-y-3">
                {['Al 6–12 maanden dagelijks 0.5% retinol gebruikt zonder irritatie', 'Bewust wil upgraden naar een hoge concentratie', 'Een add-on booster zoekt naast een basisroutine', 'Niet gevoelig reageert op sterke actives'].map((punt) => (
                  <li key={punt} className="flex items-start gap-3"><span className="text-stone-300 mt-0.5 shrink-0">—</span><span className="text-[14px] text-[#6B6560] font-light">{punt}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] leading-tight mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>Kies MAUYI als je…</h2>
              <ul className="space-y-3 mb-8">
                {['Een all-in-one avondserum wil met meerdere actives', 'Dagelijks zonder irritatie wil gebruiken', 'Niacinamide 10% en bakuchiol in je routine wil', 'Meer waarde per ml zoekt'].map((punt) => (
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-10 leading-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>{"MAUYI vs Paula's Choice"}</h2>
            <div className="space-y-0 divide-y divide-stone-200">
              {[
                { v: "Is Paula's Choice 1% Retinol te sterk?", a: "1% retinol kan significant irritatie geven. 0.3% activeert dezelfde mechanismen. MAUYI's 0.3% met bakuchiol bereikt vergelijkbaar anti-aging resultaat met lagere irritatiedrempel." },
                { v: "Hoe verschilt de prijs?", a: "Paula's Choice is €55–65 voor 15 ml (€3,70+ per ml). MAUYI is €58 voor 30 ml (€1,93 per ml). Plus MAUYI heeft niacinamide 10% en bakuchiol die bij Paula's Choice ontbreken." },
                { v: "Heeft Paula's Choice niacinamide?", a: "Nee — de 1% Retinol Booster heeft geen niacinamide. MAUYI bevat 10% niacinamide, bewezen voor sebumreductie, pigmentvermindering en barrièreversterking." },
                { v: 'Is hogere retinolconcentratie altijd beter?', a: 'Nee. Consistentie telt meer dan concentratie. 1% geeft meer irritatie waardoor mensen stoppen. 0.3% dagelijks levert meer resultaat dan 1% tweewekelijks door irritatie.' },
                { v: "Voor wie is Paula's Choice 1% wél geschikt?", a: "Voor gevorderde gebruikers die al 6–12 maanden 0.5% retinol zonder problemen gebruiken en bewust willen upgraden. Niet voor beginners of gevoelige huid." },
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
                { href: '/alternatives/neutrogena', name: 'Neutrogena alternatief', sub: 'Geen concentratie vermeld vs transparant' },
                { href: '/alternatives/vichy', name: 'Vichy alternatief', sub: 'Parfum in retinolserum vs parfumvrij' },
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
                Slimmer dan 1%.<br /><em className="italic text-[#C9A96E]">Meer actives voor minder.</em>
              </h2>
              <p className="mt-3 text-stone-500 font-light text-[14px]">30 ml · €58 · Gratis verzending vanaf €45</p>
            </div>
            <div className="flex flex-col sm:items-end gap-3 shrink-0">
              <Link href="/products/reset-serum" className="inline-flex items-center gap-2.5 bg-[#C9A96E] hover:bg-[#B8965C] text-[#0A0908] font-semibold text-[14px] tracking-[0.04em] px-8 py-4 rounded-xl transition-colors whitespace-nowrap">
                Bestel Reset Serum — €58
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M2 7h10M8 3l4 4-4 4" /></svg>
              </Link>
              <span className="text-stone-600 text-[12px] font-light">Parfumvrij · 30 ml · €1,93 per ml · NL &amp; BE</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
