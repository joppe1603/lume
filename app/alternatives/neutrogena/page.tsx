import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: `Neutrogena Alternatief (${new Date().getFullYear()}): MAUYI vs Neutrogena Retinol | MAUYI`,
  description: 'Op zoek naar een alternatief voor Neutrogena retinol? MAUYI Reset Serum combineert retinol 0.3%, niacinamide 10% en bakuchiol in één gebufferde formule — hogere concentratie, minder irritatie. Eerlijke vergelijking.',
  alternates: {
    canonical: `${BASE_URL}/alternatives/neutrogena`,
  },
  openGraph: {
    title: 'Neutrogena Alternatief: MAUYI vs Neutrogena vergeleken',
    description: 'Waarom mensen overstappen van Neutrogena Rapid Wrinkle Repair naar MAUYI. Vergelijking op retinolconcentratie, formule en resultaten.',
    url: `${BASE_URL}/alternatives/neutrogena`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neutrogena Alternatief | MAUYI',
    description: 'Hogere retinolconcentratie, niacinamide 10% en bakuchiol in één formule — geen losse producten.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'nl-NL',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is een goed alternatief voor Neutrogena Rapid Wrinkle Repair?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MAUYI Reset Serum is een goed alternatief voor Neutrogena Rapid Wrinkle Repair. Het bevat retinol 0.3% (hogere concentratie dan de meeste Neutrogena formules), aangevuld met niacinamide 10% als buffer en bakuchiol als plantaardig retinol-alternatief. Eén product vervangt een hele retinolroutine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel retinol zit er in Neutrogena Rapid Wrinkle Repair?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neutrogena vermeldt de exacte retinolconcentratie niet op de verpakking. De formule bevat retinol maar de precieze hoeveelheid is niet openbaar. MAUYI vermeldt expliciet 0.3% retinol — een klinisch bewezen effectieve concentratie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom stappen mensen over van Neutrogena naar MAUYI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest genoemde redenen zijn: Neutrogena vermeldt geen exacte retinolconcentratie, de formule bevat geen niacinamide als buffer, en mensen zoeken een product dat retinol en niacinamide combineert om irritatie te verminderen. MAUYI biedt transparantie over alle concentraties.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Neutrogena geschikt voor gevoelige huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neutrogena Rapid Wrinkle Repair kan irritatie geven bij gevoelige huid, met name omdat er geen niacinamide in de formule zit om de retinol te bufferen. MAUYI combineert retinol met niacinamide 10%, wat de kans op roodheid en schilfering significant verlaagt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doet Neutrogena goed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neutrogena is breed verkrijgbaar (drogist, supermarkt), betaalbaar en bekend. De Rapid Wrinkle Repair lijn heeft jarenlange naamsbekendheid en is bewezen effectief voor anti-aging. Een goede keuze voor mensen die een instapproduct willen van een gevestigd merk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is er een Nederlands alternatief voor Neutrogena?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. MAUYI is een Nederlands huidverzorgingsmerk. Het Reset Serum is het enige Nederlandse serum dat retinol 0.3%, niacinamide 10%, bakuchiol en hyaluronzuurcomplex combineert in één gebufferde avondformule.',
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
    { '@type': 'ListItem', position: 3, name: 'Neutrogena alternatief', item: `${BASE_URL}/alternatives/neutrogena` },
  ],
}

export default function NeutrogenaAlternativePage() {
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
              <span className="text-[#1A1A1A] font-medium">Neutrogena alternatief</span>
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
              Neutrogena alternatief: wat mensen zoeken en waarom
            </h1>
            <p className="text-[17px] text-[#6B6560] font-light leading-relaxed">
              Neutrogena Rapid Wrinkle Repair staat bekend als een van de meest verkochte retinolproducten van de drogist. Maar de onduidelijke concentraties en het ontbreken van een niacinamidebuffer zorgen ervoor dat steeds meer mensen op zoek gaan naar een transparanter alternatief. Dit is een eerlijke vergelijking.
            </p>
          </div>

          {/* TL;DR */}
          <div className="bg-[#1A1A1A] rounded-2xl px-6 py-6 mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">TL;DR</p>
            <p className="text-stone-300 text-[15px] leading-relaxed font-light">
              Neutrogena is toegankelijk, betaalbaar en breed verkrijgbaar. MAUYI is transparanter over concentraties, combineert retinol met niacinamide als buffer, en voegt bakuchiol toe. Kies Neutrogena als je een vertrouwd instapproduct wilt. Kies MAUYI als je weet wat er in je serum zit en irritatie wilt minimaliseren.
            </p>
          </div>

          {/* Why people switch */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Waarom mensen een alternatief zoeken voor Neutrogena
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Neutrogena Rapid Wrinkle Repair is voor veel mensen het eerste retinolproduct dat ze ooit gebruikten. Het is goedkoop, herkenbaar en verkrijgbaar bij elke Etos of kruidvat. Dat is een sterk punt.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Maar naarmate mensen meer over huidverzorging leren, beginnen vragen te rijzen. Hoeveel retinol zit er eigenlijk in? Waarom staat er geen percentage op de verpakking? En waarom irriteert het soms zo?
          </p>
          <div className="bg-[#FAF8F5] border-l-[3px] border-[#C9A96E] px-5 py-4 rounded-r-xl mb-5">
            <p className="text-[14px] text-[#5C5754] leading-relaxed italic font-light">
              "Neutrogena vermeldt geen exacte retinolconcentratie. Je weet niet wat je gebruikt — dat is het grootste bezwaar voor mensen die bewust kiezen."
            </p>
          </div>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            Bovendien bevat Neutrogena Rapid Wrinkle Repair geen niacinamide. Dat is een ingrediënt dat retinol buffert — het vermindert roodheid en schilfering, de klassieke bijwerkingen van retinol. Wie gevoelige huid heeft, merkt dat gebrek.
          </p>

          {/* Comparison table */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-6 leading-snug">
            Vergelijking: Neutrogena vs MAUYI
          </h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b-2 border-[#C9A96E]/30">
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">Kenmerk</th>
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">Neutrogena</th>
                  <th className="text-left py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#C9A96E]">MAUYI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[
                  { feature: 'Retinolconcentratie', competitor: 'Niet vermeld', mauyi: '0.3% — expliciet vermeld', winner: 'mauyi' },
                  { feature: 'Niacinamide (buffer)', competitor: 'Afwezig', mauyi: '10% — geïntegreerd', winner: 'mauyi' },
                  { feature: 'Bakuchiol', competitor: 'Afwezig', mauyi: '0.5%', winner: 'mauyi' },
                  { feature: 'Hyaluronzuur', competitor: 'Aanwezig (enkelvoudig)', mauyi: 'Drievoudig complex', winner: 'mauyi' },
                  { feature: 'Parfumvrij', competitor: 'Nee', mauyi: 'Ja', winner: 'mauyi' },
                  { feature: 'Prijs', competitor: '~€18–22 / 29ml', mauyi: '€58 / 30ml', winner: 'competitor' },
                  { feature: 'Verkrijgbaarheid', competitor: 'Drogist, supermarkt', mauyi: 'Online (mauyi.nl)', winner: 'competitor' },
                  { feature: 'Herkomst', competitor: 'VS / internationaal', mauyi: 'Nederland', winner: 'neutral' },
                  { feature: 'Transparantie concentraties', competitor: 'Niet vermeld', mauyi: 'Volledig disclosed', winner: 'mauyi' },
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
            Concentraties: transparantie vs black box
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            <strong>Neutrogena</strong> vermeldt retinol als ingrediënt maar geeft geen percentage. Dat is een gangbare praktijk in de mainstream beauty-industrie — maar het maakt het onmogelijk om te weten of je een effectieve dosis gebruikt. Dermatologisch bewezen effectieve retinolconcentraties beginnen bij 0.025%; voor anti-aging op langere termijn is 0.1%–0.3% de standaard.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            <strong>MAUYI</strong> vermeldt elke concentratie expliciet: retinol 0.3%, niacinamide 10%, bakuchiol 0.5%. Je weet wat je gebruikt, hoe veel, en waarom. Voor mensen die bewust kiezen voor hun huid is dat geen detail — het is het uitgangspunt.
          </p>

          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Irritatie: waarom de buffer zo belangrijk is
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Retinol versnelt celvernieuwing — dat is waarom het werkt. Maar diezelfde werking kan de huid tijdelijk gevoeliger maken. De eerste weken van retinolgebruik gaan vaak gepaard met lichte roodheid, schilfering en een strakke huid.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            Niacinamide (vitamine B3) is één van de weinige ingrediënten waarvan klinisch is aangetoond dat het deze bijwerkingen vermindert. Door retinol en niacinamide in dezelfde formule te combineren — zoals MAUYI doet — wordt de retinolervaring zachter zonder dat er effectiviteit verloren gaat. Neutrogena heeft deze buffer niet ingebouwd.
          </p>

          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Prijs: drogistprijs vs direct-to-consumer
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Neutrogena Rapid Wrinkle Repair kost circa €18–22 bij de drogist. MAUYI Reset Serum kost €58 en is alleen online verkrijgbaar. Het prijsverschil is reëel.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            Maar de vergelijking is niet één-op-één. MAUYI vervangt ook je niacinamide-serum en je hyaluronzuurserum — producten die je bij Neutrogena apart zou moeten kopen. De totale routinekosten liggen dichter bij elkaar dan de stickerprijzen doen vermoeden. Bovendien betaal je bij MAUYI voor bewezen concentraties, niet voor distributiekosten van supermarktketens.
          </p>

          {/* Who should choose what */}
          <div className="grid sm:grid-cols-2 gap-5 my-10">
            <div className="bg-white rounded-2xl border border-stone-100 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9A9590] mb-3">Kies Neutrogena als je</p>
              <ul className="space-y-2">
                {[
                  'Een betaalbaar instapproduct wilt',
                  'Retinol voor het eerst gebruikt',
                  'Liever koopt bij de drogist',
                  'Een vertrouwd Amerikaans merk prefereert',
                  'Niet bezig wilt zijn met concentraties',
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
                  'Wilt weten wat er in je serum zit',
                  'Gevoelige huid hebt en irritatie wilt voorkomen',
                  'Retinol en niacinamide samen wilt gebruiken',
                  'Een transparant Nederlands merk prefereert',
                  'Klaar bent met de instapformule',
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
                q: 'Wat is een goed alternatief voor Neutrogena Rapid Wrinkle Repair?',
                a: 'MAUYI Reset Serum is een alternatief met hogere transparantie: retinol 0.3% (expliciet vermeld), niacinamide 10% als buffer en bakuchiol 0.5% in één gebufferde avondformule.',
              },
              {
                q: 'Hoeveel retinol zit er in Neutrogena?',
                a: 'Neutrogena vermeldt geen exacte retinolconcentratie. De producten bevatten retinol, maar in welke hoeveelheid is niet openbaar. MAUYI vermeldt 0.3% — een klinisch actieve concentratie.',
              },
              {
                q: 'Waarom irriteert Neutrogena mijn huid?',
                a: 'Retinolproducten zonder niacinamidebuffer geven vaker irritatie. Neutrogena Rapid Wrinkle Repair bevat geen niacinamide. MAUYI combineert retinol met niacinamide 10%, waardoor de kans op roodheid en schilfering significant lager is.',
              },
              {
                q: 'Is MAUYI duurder dan Neutrogena?',
                a: 'MAUYI kost €58, Neutrogena circa €18–22. Maar MAUYI vervangt ook je niacinamide-serum en hyaluronzuurserum. De totale routinekosten liggen dichter bij elkaar dan de stickerprijzen suggereren.',
              },
              {
                q: 'Is er een Nederlands alternatief voor Neutrogena?',
                a: 'Ja. MAUYI is een Nederlands huidverzorgingsmerk dat retinol 0.3%, niacinamide 10%, bakuchiol en hyaluronzuurcomplex combineert in één gebufferde avondformule.',
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
                  href: '/alternatives/the-ordinary',
                  title: 'The Ordinary alternatief →',
                  desc: 'Losse ingrediënten vs gecombineerde formule',
                },
                {
                  href: '/alternatives/la-roche-posay',
                  title: 'La Roche-Posay alternatief →',
                  desc: 'Apothekersmerk vs transparante concentraties',
                },
                {
                  href: '/alternatives/cerave',
                  title: 'CeraVe alternatief →',
                  desc: 'Ceramideformule vs retinol + niacinamide',
                },
                {
                  href: '/alternatives/vichy',
                  title: 'Vichy alternatief →',
                  desc: 'Thermalwater vs actieve ingrediënten',
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
              Retinol 0.3%. Niacinamide 10%. Bakuchiol 0.5%.
            </p>
            <p className="text-stone-400 text-[14px] font-light mb-6">
              Elke concentratie vermeld. Gebufferd. Parfumvrij. Nederlands.
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
