import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'The Ordinary Alternatief (2024): MAUYI als eenvoudiger alternatief | MAUYI',
  description: 'Op zoek naar een alternatief voor The Ordinary? MAUYI combineert retinol 0.3%, niacinamide 10% en hyaluronzuur in één formule — geen combinatiepuzzel, minder irritatie. Eerlijke vergelijking.',
  alternates: {
    canonical: `${BASE_URL}/alternatives/the-ordinary`,
  },
  openGraph: {
    title: 'The Ordinary Alternatief: MAUYI vs The Ordinary vergeleken',
    description: 'Waarom mensen overstappen van The Ordinary naar MAUYI. Eerlijke vergelijking op formule, prijs en gebruiksgemak.',
    url: `${BASE_URL}/alternatives/the-ordinary`,
    type: 'article',
    images: [
      {
        url: `${BASE_URL}/mauyi-vs-the-ordinary.jpg`,
        width: 1280,
        height: 853,
        alt: 'MAUYI Reset Serum naast The Ordinary producten — vergelijking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ordinary Alternatief | MAUYI',
    description: 'Eén formule met retinol, niacinamide en hyaluronzuur — geen losse producten, geen combinatiepuzzel.',
    images: [`${BASE_URL}/mauyi-vs-the-ordinary.jpg`],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is een goed alternatief voor The Ordinary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MAUYI Reset Serum is een alternatief voor meerdere The Ordinary producten tegelijk. Het combineert retinol 0.3%, niacinamide 10% en hyaluronzuurcomplex in één gebufferde avondformule — zonder dat je zelf moet uitzoeken welke producten je kunt combineren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom stappen mensen over van The Ordinary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest genoemde redenen zijn: het enorme productaanbod (100+ producten) maakt het lastig om een routine samen te stellen, sommige combinaties veroorzaken irritatie, en de producten zijn individueel effectief maar niet geformuleerd om samen te werken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MAUYI duurder dan The Ordinary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MAUYI Reset Serum kost €58 voor 30ml. Een vergelijkbare The Ordinary routine (retinol, niacinamide en hyaluronzuur apart) kost €15–25, maar vereist drie losse producten en kennis over de juiste volgorde en combinaties.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doet The Ordinary goed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Ordinary biedt uitstekende toegankelijkheid: transparante ingrediëntenlijsten, een grote productrange en lage prijzen. Voor mensen die graag experimenteren met losse ingrediënten is het een sterke keuze.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk alternatief voor The Ordinary retinol is er?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MAUYI Reset Serum bevat retinol 0.3% — gebufferd met niacinamide 10% zodat het minder irriteert dan het standaard The Ordinary Retinol 0.5% product. Ideaal voor mensen die met retinol willen beginnen of gevoelige huid hebben.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is er een Nederlands alternatief voor The Ordinary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. MAUYI is een Nederlands huidverzorgingsmerk dat geformuleerd is op basis van klinisch bewijs. Het Reset Serum is het enige Nederlandse serum dat retinol, niacinamide en hyaluronzuur combineert in één gebufferde formule.',
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
    { '@type': 'ListItem', position: 3, name: 'The Ordinary alternatief', item: `${BASE_URL}/alternatives/the-ordinary` },
  ],
}

export default function TheOrdinaryAlternativePage() {
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
              <span className="text-[#1A1A1A] font-medium">The Ordinary alternatief</span>
            </nav>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-6 sm:px-8 py-16">

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Vergelijking</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-[1.1] mb-5" style={{ fontFamily: 'var(--font-cormorant)' }}>
              The Ordinary alternatief: wat mensen zoeken en waarom
            </h1>
            <p className="text-[17px] text-[#6B6560] font-light leading-relaxed">
              The Ordinary heeft huidverzorging democratisch gemaakt. Maar het productaanbod van 100+ SKU's, de complexe combinatieregels en de verwarring over volgorde zorgen er bij veel mensen voor dat ze op zoek gaan naar iets eenvoudigers. Dit is een eerlijke vergelijking.
            </p>
          </div>

          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden mb-10 aspect-[3/2] relative">
            <Image
              src="/mauyi-vs-the-ordinary.jpg"
              alt="MAUYI Reset Serum naast The Ordinary producten op marmeren ondergrond"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          {/* TL;DR */}
          <div className="bg-[#1A1A1A] rounded-2xl px-6 py-6 mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">TL;DR</p>
            <p className="text-stone-300 text-[15px] leading-relaxed font-light">
              The Ordinary is sterk in losse ingrediënten tegen lage prijzen — ideaal als je weet wat je doet. MAUYI is één formule die retinol, niacinamide en hyaluronzuur combineert in de juiste concentraties, gebufferd zodat ze samenwerken. Kies The Ordinary als je wilt experimenteren. Kies MAUYI als je wilt dat het gewoon werkt.
            </p>
          </div>

          {/* Why people switch */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Waarom mensen een alternatief zoeken voor The Ordinary
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            The Ordinary lost een reëel probleem op: actieve ingrediënten waren voorheen alleen verkrijgbaar in dure merken. Door transparante ingrediëntenlijsten en lage prijzen maakten ze evidence-based skincare toegankelijk.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Maar de aanpak heeft een keerzijde. Het merk verkoopt ingrediënten, geen routines. De catalogus telt meer dan 100 producten. Veel mensen kopen retinol, kopen niacinamide, kopen hyaluronzuur — en weten dan niet in welke volgorde, welke concentratie, en of ze überhaupt samen gebruikt kunnen worden.
          </p>
          <div className="bg-[#FAF8F5] border-l-[3px] border-[#C9A96E] px-5 py-4 rounded-r-xl mb-8">
            <p className="text-[14px] text-[#5C5754] leading-relaxed italic font-light">
              De meest voorkomende klacht over The Ordinary: "Ik weet niet wat ik moet kopen en in welke volgorde ik alles moet gebruiken."
            </p>
          </div>

          {/* Comparison table */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-6 leading-snug">
            Vergelijking: The Ordinary vs MAUYI
          </h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b-2 border-[#C9A96E]/30">
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">Kenmerk</th>
                  <th className="text-left py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A9590]">The Ordinary</th>
                  <th className="text-left py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#C9A96E]">MAUYI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[
                  ['Aanpak', 'Losse ingrediënten, jij bouwt de routine', 'Één gecombineerde formule'],
                  ['Retinol', '0.2% of 0.5% (aparte producten)', '0.3% gebufferd met niacinamide'],
                  ['Niacinamide', '10% (apart product)', '10% — geïntegreerd in de formule'],
                  ['Hyaluronzuur', 'Apart product, één molecuulgewicht', 'Drievoudig complex (3 gewichten)'],
                  ['Parfumvrij', 'Per product verschilt het', 'Altijd parfumvrij'],
                  ['Prijs', '€5–15 per product', '€58 voor alles-in-één'],
                  ['Herkomst', 'Canada / UK', 'Nederland'],
                  ['Combinatiekennis vereist', 'Ja — foutief combineren kan irritatie geven', 'Nee — formule is klaar voor gebruik'],
                  ['Productaanbod', '100+ producten', 'Gefocust — één serum'],
                ].map(([feature, ordinary, mauyi], i) => (
                  <tr key={i}>
                    <td className="py-3 pr-6 font-medium text-[#1A1A1A]">{feature}</td>
                    <td className="py-3 pr-6 text-[#6B6560]">{ordinary}</td>
                    <td className="py-3 text-[#1A1A1A] font-medium">{mauyi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Deep comparison */}
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Formule: losse ingrediënten vs gecombineerde aanpak
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            <strong>The Ordinary</strong> verkoopt Retinol 0.2% en 0.5% als losse producten. Niacinamide 10% is een apart serum. Hyaluronzuur is weer een apart product. Dat betekent drie aankoopbeslissingen, drie producten in je routine, en de verantwoordelijkheid om ze in de juiste volgorde en frequentie te gebruiken zonder irritatie te veroorzaken.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            <strong>MAUYI</strong> combineert Retinol 0.3%, Niacinamide 10% en Hyaluronzuurcomplex (drie molecuulgewichten) in één avondserum. De niacinamide buffert de retinol — minder irritatie, geen volgorde om te onthouden. Dit is geen compromis in effectiviteit; het is een formulekeuze die gebaseerd is op klinische synergie tussen de ingrediënten.
          </p>

          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
            Prijs: goedkoper is niet altijd goedkoper
          </h2>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-5">
            Een The Ordinary Retinol 0.5% kost €6. De Niacinamide 10% + Zinc 1% kost €6. De Hyaluronic Acid 2% + B5 kost €8. Samen: €20 voor drie producten die je afzonderlijk gebruikt.
          </p>
          <p className="text-[15px] text-[#4A4540] leading-[1.85] mb-8">
            MAUYI Reset Serum kost €58 — meer, dat klopt. Maar het is één product, in één concentratie die klinisch effectief is, met ingrediënten die elkaar versterken. Voor mensen die moeite hebben met een ingewikkelde routine of die te veel producten gebruiken met wisselende resultaten, is de vergelijking anders dan puur op prijs.
          </p>

          {/* Who should choose what */}
          <div className="grid sm:grid-cols-2 gap-5 my-10">
            <div className="bg-white rounded-2xl border border-stone-100 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9A9590] mb-3">Kies The Ordinary als je</p>
              <ul className="space-y-2">
                {[
                  'Graag experimenteert met losse ingrediënten',
                  'Kennis hebt van formuleringen en combinaties',
                  'Zo laag mogelijk wilt uitgeven',
                  'Een grote productrange wilt verkennen',
                  'Specifieke enkelvoudige concentraties zoekt',
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
                  'Een routine wilt die gewoon werkt zonder uitzoeken',
                  'Gevoelige huid hebt en irritatie wilt voorkomen',
                  'Retinol, niacinamide en hyaluronzuur combineert',
                  'Geen zin hebt in drie losse producten',
                  'Een Nederlands merk wilt steunen',
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
                q: 'Wat is een goed alternatief voor The Ordinary?',
                a: 'MAUYI Reset Serum vervangt meerdere The Ordinary producten tegelijk: retinol 0.3%, niacinamide 10% en hyaluronzuurcomplex in één gebufferde avondformule.',
              },
              {
                q: 'Waarom stappen mensen over van The Ordinary?',
                a: 'Het meest genoemde probleem is het complexe productaanbod. Meer dan 100 producten, combinatieregels, en de kans op irritatie als je verkeerd combineert. Veel mensen willen een eenvoudigere routine met hetzelfde effect.',
              },
              {
                q: 'Is MAUYI duurder dan The Ordinary?',
                a: 'Per product wel. Maar MAUYI vervangt drie losse producten (retinol, niacinamide, hyaluronzuur) die je bij The Ordinary apart zou kopen. De totale kosten liggen dichterbij dan het lijkt.',
              },
              {
                q: 'Wat doet The Ordinary goed?',
                a: 'The Ordinary biedt transparante ingrediëntenlijsten, lage prijzen en een enorme productrange. Voor mensen die actieve ingrediënten willen verkennen zonder veel geld uit te geven, is het een uitstekende keuze.',
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
            <Link href="/vs/the-ordinary" className="flex items-start gap-3 group">
              <div>
                <p className="text-[14px] font-semibold text-[#1A1A1A] group-hover:text-[#C9A96E] transition-colors">
                  MAUYI vs The Ordinary →
                </p>
                <p className="text-[13px] text-[#9A9590] font-light mt-0.5">
                  Directe vergelijking op formule, prijs en gebruiksgemak
                </p>
              </div>
            </Link>
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
