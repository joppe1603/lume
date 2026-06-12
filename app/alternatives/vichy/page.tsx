import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: `Vichy Alternatief (${new Date().getFullYear()}): MAUYI vs Vichy LiftActiv Retinol | MAUYI`,
  description: 'Op zoek naar een alternatief voor Vichy LiftActiv Retinol Specialist? MAUYI Reset Serum biedt hogere retinolconcentratie, niacinamide 10% en bakuchiol — zonder parfum. Eerlijke vergelijking.',
  alternates: {
    canonical: `${BASE_URL}/alternatives/vichy`,
  },
  openGraph: {
    title: 'Vichy Alternatief: MAUYI vs Vichy LiftActiv vergeleken',
    description: 'Waarom mensen overstappen van Vichy naar MAUYI. Vergelijking op retinolconcentratie, parfumvrij en niacinamidebuffer.',
    url: `${BASE_URL}/alternatives/vichy`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vichy Alternatief | MAUYI',
    description: 'Hogere retinolconcentratie, niacinamide 10% en zonder parfum — in één formule.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'nl-NL',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is een goed alternatief voor Vichy LiftActiv Retinol Specialist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MAUYI Reset Serum is een goed alternatief voor Vichy LiftActiv Retinol Specialist. Het bevat retinol 0.3% (hogere concentratie), niacinamide 10% als buffer, bakuchiol 0.5% en is parfumvrij. Vichy LiftActiv bevat parfum en heeft een lagere retinolconcentratie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bevat Vichy LiftActiv Retinol Specialist parfum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, Vichy LiftActiv Retinol Specialist bevat parfum (fragrance). Voor mensen met een gevoelige of reactieve huid is dit relevant — parfum is een van de meest voorkomende oorzaken van huidreacties op cosmetica. MAUYI Reset Serum is altijd parfumvrij.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel retinol zit er in Vichy LiftActiv?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vichy LiftActiv Retinol Specialist bevat 0.2% pure retinol. MAUYI Reset Serum bevat 0.3% retinol — 50% hogere concentratie — gebufferd met niacinamide 10% om irritatie te minimaliseren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom stappen mensen over van Vichy naar MAUYI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest genoemde redenen zijn: Vichy LiftActiv bevat parfum (wat gevoelige huid kan irriteren), de retinolconcentratie is lager (0.2% vs 0.3%), en er zit geen niacinamide in om de retinol te bufferen. MAUYI combineert alle drie voordelen in één formule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doet Vichy goed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vichy is een gerenommeerd apothekersmerk met brede verkrijgbaarheid. De thermalwaterbasis geeft een prettig gebruik. LiftActiv Retinol Specialist heeft goed klinisch onderzoek achter zich. Een goede keuze voor wie liever koopt bij de apotheek of drogist.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is er een parfumvrij alternatief voor Vichy retinol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. MAUYI Reset Serum is volledig parfumvrij en bevat retinol 0.3%, niacinamide 10% en bakuchiol 0.5%. Het is specifiek geformuleerd voor mensen die retinol willen gebruiken zonder parfum of irriterende hulpstoffen.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Alternatieven', item: `${BASE_URL}/alternatives` },
    { '@type': 'ListItem', position: 3, name: 'Vichy alternatief', item: `${BASE_URL}/alternatives/vichy` },
  ],
}

export default function VichyAlternativePage() {
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
              <Link href="/alternatives" className="hover:text-[#C9A96E] transition-colors">Alternatieven</Link>
              <span>/</span>
              <span className="text-[#1A1A1A] font-medium">Vichy alternatief</span>
            </nav>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-6 sm:px-8 py-16">

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Alternatief</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-[1.1] mb-5" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Vichy alternatief: wat mensen zoeken en waarom
            </h1>
            <p className="text-[17px] text-[#6B6560] font-light leading-relaxed">
              Vichy LiftActiv Retinol Specialist is een van de populairste retinolserums van de apotheek. Maar het bevat parfum, heeft een lagere retinolconcentratie dan veel mensen denken en mist een niacinamidebuffer. Steeds meer mensen zoeken een transparanter alternatief. Dit is een eerlijke vergelijking.
            </p>
          </div>

          {/* TL;DR */}
          <div className="bg-[#1A1A1A] rounded-2xl px-6 py-6 mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">TL;DR</p>
            <p className="text-stone-300 text-[15px] leading-relaxed font-light">
              Vichy is een sterk apothekersmerk met brede verkrijgbaarheid en een prettige gebruikservaring. MAUYI biedt hogere retinolconcentratie (0.3% vs 0.2%), geen parfum, en niacinamide als buffer. Kies Vichy als je vertrouwt op het apothekersmerk en graag ter plaatse koopt. Kies MAUYI als je parfumvrij wilt en meer actief ingrediënt zoekt.
            </p>
          </div>

          {/* Why people switch */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Waarom mensen een alternatief zoeken voor Vichy
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Vichy heeft een sterke reputatie als apothekersmerk — dat is geen toeval. De producten zijn goed geformuleerd, klinisch getest, en verkrijgbaar in een omgeving die vertrouwen uitstraalt. LiftActiv Retinol Specialist was een van de eerste retinolserums die breed beschikbaar was bij de apotheek in Nederland.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Maar naarmate huidverzorgingskennis groeit, stellen consumenten meer gerichte vragen. Waarom bevat het serum parfum als retinol de huid al gevoeliger maakt? Waarom zit er geen niacinamide in als dat bewezen de irritatie vermindert? En is 0.2% retinol genoeg voor merkbare resultaten op langere termijn?
          </p>
          <div className="bg-[#FAF8F5] border-l-[3px] border-[#C9A96E] px-5 py-4 rounded-r-xl mb-5">
            <p className="text-[14px] text-[#5C5754] leading-relaxed italic font-light">
              "Vichy LiftActiv bevat parfum. In combinatie met retinol — dat de huidbarrière tijdelijk verzwakt — is dat een combinatie die gevoelige huid extra kan irriteren."
            </p>
          </div>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            Voor mensen met een gevoelige of reactieve huid is parfum in een retinolserum een dealbreaker. MAUYI is parfumvrij by design — niet als marketingboodschap, maar als formulekeuze.
          </p>

          {/* Comparison table */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-6 leading-snug">
            Vergelijking: Vichy LiftActiv vs MAUYI
          </h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b-2 border-[#C9A96E]/30">
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">Kenmerk</th>
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">Vichy LiftActiv</th>
                  <th className="text-left py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#C9A96E]">MAUYI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[
                  { feature: 'Retinolconcentratie', competitor: '0.2%', mauyi: '0.3%', winner: 'mauyi' },
                  { feature: 'Niacinamide (buffer)', competitor: 'Afwezig', mauyi: '10% — geïntegreerd', winner: 'mauyi' },
                  { feature: 'Bakuchiol', competitor: 'Afwezig', mauyi: '0.5%', winner: 'mauyi' },
                  { feature: 'Parfum', competitor: 'Aanwezig', mauyi: 'Parfumvrij', winner: 'mauyi' },
                  { feature: 'Thermalwater basis', competitor: 'Ja (Vichy thermalwater)', mauyi: 'Nee', winner: 'competitor' },
                  { feature: 'Hyaluronzuur', competitor: 'Aanwezig', mauyi: 'Drievoudig complex', winner: 'mauyi' },
                  { feature: 'Prijs', competitor: '~€35–42 / 30ml', mauyi: '€58 / 30ml', winner: 'competitor' },
                  { feature: 'Verkrijgbaarheid', competitor: 'Apotheek, drogist', mauyi: 'Online (mauyi.nl)', winner: 'competitor' },
                  { feature: 'Herkomst', competitor: 'Frankrijk', mauyi: 'Nederland', winner: 'neutral' },
                ].map(({ feature, competitor, mauyi, winner }, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-6 font-medium text-[#1A1A1A]">{feature}</td>
                    <td className={`py-3 pr-6 ${winner === 'competitor' ? 'text-[#1A1A1A] font-medium' : 'text-[#6B6560]'}`}>{competitor}</td>
                    <td className={`py-3 ${winner === 'mauyi' ? 'text-[#C9A96E] font-semibold' : 'text-[#6B6560]'}`}>{mauyi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Deep comparison sections */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Parfum in een retinolserum: waarom het relevant is
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            <strong>Vichy LiftActiv Retinol Specialist</strong> bevat parfum (vermeld als &apos;Parfum&apos; of &apos;Fragrance&apos; op de ingrediëntenlijst). In veel cosmetica is dat niet problematisch — maar retinol is een uitzonderingsgeval. Retinol verhoogt de celomzetsnelheid en maakt de huid tijdelijk gevoeliger. In die fase reageert de huid sterker op potentieel irriterende stoffen, waaronder parfum.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            <strong>MAUYI Reset Serum</strong> is volledig parfumvrij. Niet als verkoopargument, maar als formulekeuze die consistent is met het doel: een retinolserum dat ook bij gevoelige huid gebruikt kan worden zonder extra risico op reacties.
          </p>

          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Concentratie: 0.2% vs 0.3%
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Het verschil tussen 0.2% en 0.3% klinkt klein. In de praktijk is 0.3% retinol 50% meer actief ingrediënt — dat is geen marginale verbetering. Klinisch onderzoek toont aan dat retinolconcentraties van 0.3% meetbare verbetering geven in huidtextuur, fijne lijntjes en egalisering van de huidtoon bij consistent gebruik.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            MAUYI buffert die hogere concentratie met niacinamide 10% — zodat de hogere dosis niet automatisch leidt tot meer irritatie. Vichy biedt de buffer niet en heeft een lagere basisconcentratie.
          </p>

          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Thermalwater vs actieve ingrediënten
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Vichy&apos;s grote onderscheidend punt is het gebruik van Vichy thermalwater — mineraalwater met een specifieke samenstelling dat als basisingrediënt dient. Het geeft producten een prettige huidaanvoeling en is een sterk merkidentiteitsmoment.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            MAUYI kiest voor een andere aanpak: de nadruk ligt volledig op klinisch actieve ingrediënten in bewezen concentraties. Thermalwater draagt bij aan het sensorische profiel; retinol 0.3%, niacinamide 10% en bakuchiol 0.5% dragen bij aan het resultaat. Het zijn andere prioriteiten — geen betere of slechtere.
          </p>

          {/* Who should choose what */}
          <div className="grid sm:grid-cols-2 gap-5 my-10">
            <div className="bg-white rounded-2xl border border-stone-100 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9A9590] mb-3">Kies Vichy als je</p>
              <ul className="space-y-2">
                {[
                  'Vertrouwt op het apothekersmerk',
                  'Retinol voor het eerst gebruikt (instapconcentratie)',
                  'Liever koopt bij de apotheek',
                  'De textuur en sensoriek van thermalwaterproducten waardeert',
                  'Een Frans premium merk prefereert',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-[14px] text-[#5C5754]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0F0E0C] rounded-2xl p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">Kies MAUYI als je</p>
              <ul className="space-y-2">
                {[
                  'Parfumvrij wilt vanwege gevoelige huid',
                  'Een hogere retinolconcentratie zoekt (0.3%)',
                  'Retinol en niacinamide samen wilt gebruiken',
                  'Bakuchiol als aanvulling wilt',
                  'Een transparant Nederlands alternatief prefereert',
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
                q: 'Wat is een goed alternatief voor Vichy LiftActiv Retinol Specialist?',
                a: 'MAUYI Reset Serum: parfumvrij, retinol 0.3% (hogere concentratie), niacinamide 10% als buffer en bakuchiol 0.5% in één avondserum.',
              },
              {
                q: 'Bevat Vichy LiftActiv parfum?',
                a: 'Ja. Vichy LiftActiv Retinol Specialist bevat parfum. Voor gevoelige huid kan dit in combinatie met retinol irritatie veroorzaken. MAUYI is volledig parfumvrij.',
              },
              {
                q: 'Hoeveel retinol zit er in Vichy LiftActiv?',
                a: 'Vichy LiftActiv Retinol Specialist bevat 0.2% pure retinol. MAUYI Reset Serum bevat 0.3% retinol — 50% hogere concentratie, gebufferd met niacinamide 10%.',
              },
              {
                q: 'Is MAUYI duurder dan Vichy?',
                a: 'MAUYI kost €58, Vichy LiftActiv circa €35–42. Het prijsverschil is reëel. MAUYI vervangt echter ook een apart niacinamide-serum en bevat bakuchiol als extra actief ingrediënt.',
              },
              {
                q: 'Is er een parfumvrij alternatief voor Vichy retinol?',
                a: 'Ja. MAUYI Reset Serum is volledig parfumvrij, met retinol 0.3%, niacinamide 10% en bakuchiol 0.5%. Geformuleerd voor mensen met gevoelige of reactieve huid.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-stone-100 px-5 py-4">
                <p className="text-[15px] font-semibold text-[#1A1A1A] mb-2">{item.q}</p>
                <p className="text-[14px] text-[#5C5754] leading-relaxed font-light">{item.a}</p>
              </div>
            ))}
          </div>

          {/* Related */}
          <div className="border border-stone-100 rounded-2xl p-6 mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A9590] mb-4">Meer vergelijkingen</p>
            <div className="space-y-4">
              {[
                {
                  href: '/alternatives/la-roche-posay',
                  title: 'La Roche-Posay alternatief →',
                  desc: 'Apothekersmerk vs hogere concentratie',
                },
                {
                  href: '/alternatives/neutrogena',
                  title: 'Neutrogena alternatief →',
                  desc: 'Drogistmerk vs transparante concentraties',
                },
                {
                  href: '/alternatives/the-ordinary',
                  title: 'The Ordinary alternatief →',
                  desc: 'Losse ingrediënten vs gecombineerde formule',
                },
                {
                  href: '/vs/la-roche-posay',
                  title: 'MAUYI vs La Roche-Posay →',
                  desc: 'Directe head-to-head vergelijking',
                },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="flex items-start gap-3 group">
                  <div>
                    <p className="text-[14px] font-semibold text-[#1A1A1A] group-hover:text-[#C9A96E] transition-colors">
                      {link.title}
                    </p>
                    <p className="text-[13px] text-[#9A9590] font-light mt-0.5">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#1A1A1A] rounded-2xl px-6 py-8 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">MAUYI Reset Serum</p>
            <p className="text-white text-[18px] font-semibold mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Retinol 0.3%. Niacinamide 10%. Parfumvrij.
            </p>
            <p className="text-stone-400 text-[14px] font-light mb-6">
              Hogere concentratie. Niacinamidebuffer. Geen parfum. Nederlands.
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
