import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: `MAUYI vs The Ordinary: eerlijke vergelijking (${new Date().getFullYear()}) | MAUYI`,
  description: 'MAUYI vs The Ordinary — wat is het verschil? Vergelijk ingrediënten, formules, prijzen en gebruiksgemak. Welke past bij jouw huid en routine?',
  openGraph: {
    title: 'MAUYI vs The Ordinary | MAUYI',
    description: 'Een eerlijke vergelijking tussen MAUYI Reset Serum en The Ordinary. Formules, prijzen en wie welk merk het beste past.',
    url: `${BASE_URL}/vs/the-ordinary`,
    type: 'website',
  },
  alternates: {
    canonical: `${BASE_URL}/vs/the-ordinary`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen MAUYI en The Ordinary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Ordinary verkoopt losse ingrediënten die je zelf combineert — retinol, niacinamide en hyaluronzuur zijn aparte producten. MAUYI combineert deze drie ingrediënten in één gebufferde avondformule. MAUYI kost meer per product, maar vervangt meerdere The Ordinary producten tegelijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MAUYI beter dan The Ordinary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '"Beter" hangt af van je wensen. The Ordinary is goedkoper en biedt meer keuze in losse ingrediënten. MAUYI is eenvoudiger: één product dat retinol, niacinamide en hyaluronzuur combineert in klinisch effectieve concentraties, gebufferd voor gevoelige huid. Kies The Ordinary voor controle en prijs. Kies MAUYI voor eenvoud en synergie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik MAUYI gebruiken naast The Ordinary producten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technisch gezien kan dat, maar het is niet nodig. MAUYI Reset Serum bevat al retinol 0.3%, niacinamide 10% en hyaluronzuurcomplex. Als je ook The Ordinary retinol of niacinamide gebruikt, loop je het risico op te hoge concentraties en irritatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk merk is geschikt voor gevoelige huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MAUYI is specifiek geformuleerd voor gevoelige huid. De retinol is gebufferd met niacinamide, wat irritatie vermindert. The Ordinary heeft ook producten voor gevoelige huid, maar je moet zelf uitzoeken welke combinaties veilig zijn.',
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
    { '@type': 'ListItem', position: 3, name: 'MAUYI vs The Ordinary', item: `${BASE_URL}/vs/the-ordinary` },
  ],
}

const comparisonRows = [
  {
    category: 'Aanpak',
    mauyi: 'Één gecombineerde avondformule',
    ordinary: 'Losse ingrediënten — jij bouwt je routine',
    winner: 'mauyi' as const,
  },
  {
    category: 'Retinol',
    mauyi: '0.3% — gebufferd met niacinamide',
    ordinary: '0.2% of 0.5% — losstaand product',
    winner: 'neutral' as const,
  },
  {
    category: 'Niacinamide',
    mauyi: '10% — ingebouwd in de formule',
    ordinary: '10% — apart serum (€6)',
    winner: 'mauyi' as const,
  },
  {
    category: 'Hyaluronzuur',
    mauyi: 'Drievoudig complex (laag, midden, hoog molecuulgewicht)',
    ordinary: 'Enkelvoudig molecuulgewicht',
    winner: 'mauyi' as const,
  },
  {
    category: 'Parfumvrij',
    mauyi: 'Altijd',
    ordinary: 'Per product verschilt het',
    winner: 'mauyi' as const,
  },
  {
    category: 'Prijs',
    mauyi: '€58 — alles-in-één (30ml)',
    ordinary: '€15–25 voor vergelijkbare producten (3x)',
    winner: 'ordinary' as const,
  },
  {
    category: 'Herkomst',
    mauyi: 'Nederland',
    ordinary: 'Canada / UK',
    winner: 'neutral' as const,
  },
  {
    category: 'Combinatiekennis',
    mauyi: 'Niet nodig — formule is klaar',
    ordinary: 'Vereist — foute combinaties kunnen irriteren',
    winner: 'mauyi' as const,
  },
  {
    category: 'Productrange',
    mauyi: 'Gefocust — één serum',
    ordinary: '100+ producten',
    winner: 'neutral' as const,
  },
  {
    category: 'Geschikt voor gevoelige huid',
    mauyi: 'Ja — specifiek geformuleerd',
    ordinary: 'Deels — afhankelijk van het product',
    winner: 'mauyi' as const,
  },
]

export default function MauyiVsTheOrdinaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <main className="bg-[#FAF8F5] min-h-screen">

        {/* Breadcrumb */}
        <div className="bg-white border-b border-stone-100">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 py-4">
            <nav className="flex items-center gap-2 text-xs text-[#9A9590]">
              <Link href="/" className="hover:text-[#C9A96E] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#1A1A1A] font-medium">MAUYI vs The Ordinary</span>
            </nav>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-6 sm:px-8 py-16">

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Directe vergelijking</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-[1.1] mb-5" style={{ fontFamily: 'var(--font-cormorant)' }}>
              MAUYI vs The Ordinary: welke past bij jou?
            </h1>
            <p className="text-[17px] text-[#6B6560] font-light leading-relaxed">
              Twee merken met hetzelfde doel — effectieve huidverzorging — maar een fundamenteel andere aanpak. Hier is een eerlijke vergelijking, zonder marketingpraat.
            </p>
          </div>

          {/* TL;DR */}
          <div className="bg-[#1A1A1A] rounded-2xl px-6 py-6 mb-14">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">TL;DR</p>
            <p className="text-stone-300 text-[15px] leading-relaxed font-light">
              The Ordinary biedt de goedkoopste losse ingrediënten op de markt — ideaal voor wie weet wat ze doen. MAUYI kiest een andere route: één weloverwogen formule die retinol, niacinamide en hyaluronzuur combineert in de juiste verhouding, gebufferd voor gevoelige huid. Beide zijn eerlijk en effectief. Het verschil zit in hoe je wilt werken.
            </p>
          </div>

          {/* At-a-glance table */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-6 leading-snug">
            Snelle vergelijking
          </h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b-2 border-[#C9A96E]/30">
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590] w-[34%]">Kenmerk</th>
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#C9A96E] w-[33%]">MAUYI</th>
                  <th className="text-left py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590] w-[33%]">The Ordinary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-6 font-medium text-[#1A1A1A]">{row.category}</td>
                    <td className={`py-3 pr-6 ${row.winner === 'mauyi' ? 'text-[#1A1A1A] font-medium' : 'text-[#6B6560]'}`}>
                      {row.winner === 'mauyi' && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C9A96E] mr-2 mb-0.5 align-middle" />
                      )}
                      {row.mauyi}
                    </td>
                    <td className={`py-3 ${row.winner === 'ordinary' ? 'text-[#1A1A1A] font-medium' : 'text-[#6B6560]'}`}>
                      {row.winner === 'ordinary' && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-400 mr-2 mb-0.5 align-middle" />
                      )}
                      {row.ordinary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detailed comparison by category */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-12 mb-4 leading-snug">
            Formulering en ingrediënten
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            <strong>The Ordinary</strong> bouwde zijn reputatie op transparantie: één ingrediënt per product, duidelijke concentraties, lage prijs. Retinol 0.2%, Retinol 0.5%, Niacinamide 10% + Zinc 1%, Hyaluronic Acid 2% + B5 — elk apart verkrijgbaar. Sterk als je weet wat je doet. Maar de verantwoordelijkheid voor de combinatie ligt bij jou.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            <strong>MAUYI</strong> nam een andere formulestrategie: retinol 0.3% gecombineerd met niacinamide 10% in dezelfde formule. Niacinamide buffert de retinol, wat irritatie vermindert — dit is klinisch gedocumenteerd. Daar bovenop het drievoudig hyaluronzuurcomplex voor hydratatie op drie huiddieptes. Het resultaat is een formule waarbij de ingrediënten elkaar versterken in plaats van dat jij dat moet managen.
          </p>
          <div className="bg-[#FAF8F5] border-l-[3px] border-[#C9A96E] px-5 py-4 rounded-r-xl mb-10">
            <p className="text-[14px] text-[#5C5754] leading-relaxed font-light italic">
              Het verschil is niet welke ingrediënten je gebruikt, maar hoe ze samenwerken. The Ordinary verkoopt ingrediënten. MAUYI verkoopt een formule.
            </p>
          </div>

          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Prijs en waarde
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-2.5 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">Product</th>
                  <th className="text-left py-2.5 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">Merk</th>
                  <th className="text-right py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">Prijs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr>
                  <td className="py-2.5 pr-6 text-[#4A4540]">Retinol 0.5% in Squalane (30ml)</td>
                  <td className="py-2.5 pr-6 text-[#9A9590]">The Ordinary</td>
                  <td className="py-2.5 text-right text-[#4A4540]">€6</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-6 text-[#4A4540]">Niacinamide 10% + Zinc 1% (30ml)</td>
                  <td className="py-2.5 pr-6 text-[#9A9590]">The Ordinary</td>
                  <td className="py-2.5 text-right text-[#4A4540]">€6</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-6 text-[#4A4540]">Hyaluronic Acid 2% + B5 (30ml)</td>
                  <td className="py-2.5 pr-6 text-[#9A9590]">The Ordinary</td>
                  <td className="py-2.5 text-right text-[#4A4540]">€8</td>
                </tr>
                <tr className="border-t-2 border-stone-200">
                  <td className="py-2.5 pr-6 font-medium text-[#9A9590]">Subtotaal (3 producten)</td>
                  <td className="py-2.5 pr-6 text-[#9A9590]">The Ordinary</td>
                  <td className="py-2.5 text-right font-medium text-[#9A9590]">±€20</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="py-2.5 pr-6 font-semibold text-[#1A1A1A]">Reset Serum (retinol + niacinamide + hyaluronzuur, 30ml)</td>
                  <td className="py-2.5 pr-6 font-semibold text-[#C9A96E]">MAUYI</td>
                  <td className="py-2.5 text-right font-semibold text-[#1A1A1A]">€58</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            The Ordinary wint op prijs — dat is eerlijk. Maar €20 vs €58 is ook: drie producten in je routine beheren vs één. Drie aankoopbeslissingen vs één. En het risico dat je retinol en niacinamide in de verkeerde volgorde gebruikt vs een formule die dat voor je oplost. Voor wie tijd en eenvoud waardeert, verschuift de vergelijking.
          </p>

          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Gebruiksgemak
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            <strong>The Ordinary</strong> heeft een steile leercurve. De catalogus van 100+ producten is bewust transparant maar tegelijk overweldigend. Welk retinolpercentage is goed voor beginners? Mag niacinamide samen met retinol? In welke volgorde? De website biedt een routine-builder, maar die voegt ook extra stappen toe.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            <strong>MAUYI</strong> heeft geen routine-builder nodig. Reset Serum is één avondproduct. Reinigen, serum, moisturizer. Klaar. Er is niks om uit te zoeken over volgorde of compatibiliteit — dat is al opgelost in de formulering.
          </p>

          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Gevoelige huid
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            <strong>The Ordinary</strong> heeft producten voor gevoelige huid — zoals de Buffet serum of de Hyaluronic Acid. Maar retinol, zeker op hogere concentraties, kan irriteren. Zeker als het gecombineerd wordt met vitamin C of AHA/BHA. The Ordinary geeft hier wel adviezen over, maar de verantwoordelijkheid blijft bij de gebruiker.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            <strong>MAUYI</strong> is van begin af aan gebouwd voor gevoelige huid. De niacinamide in de formule buffert de retinol actief, wat de kans op roodheid en schilfering vermindert. Geen aparte bufferstap nodig. Altijd parfumvrij. Getest op gevoelige huid.
          </p>

          {/* Who it's for */}
          <div className="grid sm:grid-cols-2 gap-5 my-12">
            <div className="bg-white rounded-2xl border border-stone-100 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9A9590] mb-4">Kies The Ordinary als je</p>
              <ul className="space-y-3">
                {[
                  'Graag experimenteert met individuele ingrediënten',
                  'Verstand hebt van huidverzorging en formuleringen',
                  'Zo min mogelijk wilt uitgeven',
                  'Een breed aanbod wilt verkennen',
                  'Eigen routines wilt samenstellen',
                  'Specifieke enkelvoudige concentraties zoekt',
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
                  'Wilt dat je routine gewoon werkt, zonder uitzoeken',
                  'Gevoelige huid hebt of snel reageert op retinol',
                  'Retinol, niacinamide en hyaluronzuur combineert',
                  'Minder producten in je routine wilt',
                  'Een bewuste, gefocuste aanpak verkiest',
                  'Een Nederlands merk wilt steunen',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-[14px] text-stone-300 font-light">
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
                q: 'Wat is het verschil tussen MAUYI en The Ordinary?',
                a: 'The Ordinary verkoopt losse ingrediënten die je zelf combineert. MAUYI combineert retinol, niacinamide en hyaluronzuur in één gebufferde formule. Minder producten, minder uitzoekwerk, minder kans op irritatie.',
              },
              {
                q: 'Is MAUYI beter dan The Ordinary?',
                a: '"Beter" hangt af van je situatie. Voor mensen die willen experimenteren en zo min mogelijk willen uitgeven, is The Ordinary uitstekend. Voor mensen die een eenvoudige, effectieve avondroutine willen zonder combinatiepuzzel, past MAUYI beter.',
              },
              {
                q: 'Kan ik MAUYI gebruiken naast The Ordinary producten?',
                a: 'Dat kan, maar let op overlapping. MAUYI Reset Serum bevat al retinol 0.3%, niacinamide 10% en hyaluronzuurcomplex. Als je ook The Ordinary retinol of niacinamide gebruikt, kunnen concentraties te hoog worden.',
              },
              {
                q: 'Welk merk is geschikt voor gevoelige huid?',
                a: 'MAUYI is specifiek geformuleerd voor gevoelige huid — de niacinamide buffert de retinol actief. The Ordinary heeft ook gentiele opties, maar je moet zelf de juiste combinaties zoeken.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-stone-100 px-5 py-4">
                <p className="text-[15px] font-semibold text-[#1A1A1A] mb-2">{item.q}</p>
                <p className="text-[14px] text-[#5C5754] leading-relaxed font-light">{item.a}</p>
              </div>
            ))}
          </div>

          {/* Related pages */}
          <div className="border border-stone-100 rounded-2xl p-6 mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A9590] mb-4">Meer vergelijkingen</p>
            <div className="flex flex-col gap-4">
              {[
                { href: '/alternatives/the-ordinary', name: 'The Ordinary alternatief →', sub: 'Waarom mensen overstappen — en of MAUYI de juiste keuze is' },
                { href: '/alternatives/cerave', name: 'CeraVe alternatief →', sub: 'MAUYI vs CeraVe: milde retinol vergeleken' },
                { href: '/alternatives/la-roche-posay', name: 'La Roche-Posay alternatief →', sub: 'MAUYI vs Redermic R en andere LRP retinols' },
                { href: '/alternatives/neutrogena', name: 'Neutrogena alternatief →', sub: 'Geen concentratie vermeld vs transparante formule' },
                { href: '/alternatives/vichy', name: 'Vichy alternatief →', sub: 'Parfum in retinolserum vs parfumvrij' },
                { href: '/alternatives/paulas-choice', name: "Paula's Choice alternatief →", sub: "MAUYI vs Paula's Choice: wetenschappelijk vergeleken" },
                { href: '/alternatives/indeed-labs', name: 'Indeed Labs alternatief →', sub: 'MAUYI vs Bakuchiol Reface Serum en andere opties' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="flex items-start gap-3 group">
                  <div>
                    <p className="text-[14px] font-semibold text-[#1A1A1A] group-hover:text-[#C9A96E] transition-colors">
                      {item.name}
                    </p>
                    <p className="text-[13px] text-[#9A9590] font-light mt-0.5">{item.sub}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#1A1A1A] rounded-2xl px-6 py-8 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">MAUYI Reset Serum</p>
            <p className="text-white text-[18px] font-semibold mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Retinol. Niacinamide. Hyaluronzuur. Eén formule.
            </p>
            <p className="text-stone-400 text-[14px] font-light mb-6">
              Gebufferd voor gevoelige huid. Parfumvrij. Nederlands.
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
