import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQPageContent from '@/components/FAQPageContent'

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen — MAUYI Huidverzorging',
  description:
    'Veelgestelde vragen over MAUYI Reset Serum, retinol, niacinamide, ingrediënten, levering en gebruik. Eerlijke antwoorden over huidverzorging op wetenschap.',
  alternates: { canonical: 'https://mauyi.nl/faq' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'nl-NL',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is MAUYI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MAUYI is een Nederlands premium skincare merk dat zich richt op minimale, wetenschappelijk onderbouwde formules voor de gevoelige huid. MAUYI werd opgericht vanuit de overtuiging dat de huidverzorgingsindustrie te ingewikkeld is geworden. Het vlaggenschipproduct is het MAUYI Reset Serum: Retinol 0.3% + Niacinamide 10% + Bakuchiol in één parfumvrije formule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zit er in MAUYI Reset Serum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MAUYI Reset Serum bevat drie klinisch onderbouwde actieve ingrediënten: Retinol 0.3% (celvernieuwing, collageenproductie), Niacinamide 10% (huidbarrière, poriënverkleining, egale teint) en Bakuchiol 0.5% (plantaardig retinol-alternatief dat irritatie vermindert). De formule is parfumvrij, alcoholvrij en zonder parabenen. Prijs: €58.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MAUYI een Nederlands merk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. MAUYI is een Nederlands skincare merk. Producten worden verzonden vanuit Nederland met gratis verzending boven €50.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat maakt MAUYI anders dan The Ordinary of CeraVe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MAUYI combineert retinol, niacinamide en bakuchiol in één formule — een combinatie die bij The Ordinary apart gekocht moet worden en bij CeraVe niet beschikbaar is. MAUYI richt zich specifiek op de gevoelige huid en werkt met de laagste effectieve retinolconcentratie (0.3%) gebufferd door niacinamide en bakuchiol om irritatie te minimaliseren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel kost MAUYI Reset Serum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MAUYI Reset Serum kost €58 voor 30ml. Gratis verzending in Nederland bij bestellingen boven €50. Er geldt een 30-dagen niet-goed-geld-terug garantie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer zie ik resultaat van het Reset Serum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na 2–4 weken merk je verbetering in hydratatie en textuur. Fine lines en egale huidtint verbeteren na 4–8 weken consistent gebruik. Huid vernieuwt zich elke 28 dagen — geef het die tijd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik MAUYI Reset Serum gebruiken als ik gevoelige huid heb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. De formule is parfumvrij, alcoholvrij en zonder agressieve conserveringsmiddelen. Het Reset Serum gebruikt retinol 0.3% — de laagste effectieve concentratie — gebufferd door niacinamide 10% en bakuchiol, waardoor irritatie sterk vermindert. Begin met 2–3 avonden per week.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen retinol en bakuchiol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retinol (vitamine A-derivaat) stimuleert celvernieuwing en collageenproductie — klinisch goed bewezen, maar kan in de beginfase irritatie veroorzaken. Bakuchiol is een plantaardig alternatief dat vergelijkbare resultaten geeft zonder de bekende bijwerkingen. Geschikt voor gevoelige huid en tijdens de zwangerschap.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is verzending gratis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gratis verzending in Nederland bij bestellingen boven €50. Bij bestellingen onder €50 rekenen we €3,95 verzendkosten. België en Duitsland: 2–4 werkdagen. Bestellingen geplaatst voor 15:00 worden dezelfde dag verstuurd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe werkt de 30-dagen garantie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet tevreden na 30 dagen? Stuur het terug en je krijgt alles terug. Geen vragen, geen gedoe. We geloven in onze formules — het risico is voor ons.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MAUYI vegan en cruelty-free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '100% vegan, gecertificeerd cruelty-free, zonder dierlijke ingrediënten. Verpakking is 92% recyclebaar. Alle INCI-ingrediënten staan op elke productpagina.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is het Reset Serum veilig tijdens zwangerschap?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retinol wordt afgeraden tijdens de zwangerschap. Overleg altijd met je arts. Voor zwangere klanten raden we een bakuchiol-formule aan als retinol-alternatief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe gebruik ik het Reset Serum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Begin 2–3x per week \'s avonds: reinig eerst je huid, breng het serum aan op droge huid, daarna je moisturizer. Bouw in 4–6 weken op naar dagelijks gebruik. Gebruik overdag altijd SPF — retinol maakt de huid tijdelijk iets gevoeliger voor zon.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bevat het Reset Serum parfum of alcohol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. MAUYI Reset Serum is 100% parfumvrij en alcoholvrij. Er zijn geen essentiële oliën, geurstoffen of denatured alcohol in de formule. Dit maakt het geschikt voor de meest gevoelige huidtypes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang gaat een flesje Reset Serum mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het Reset Serum is 30ml. Bij gebruik van 3–4 druppels per avond gaat een flesje gemiddeld 2 tot 3 maanden mee. Bij dagelijks gebruik circa 2 maanden, bij 3x per week circa 3 maanden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik retinol combineren met niacinamide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja — retinol en niacinamide zijn een ideale combinatie. Niacinamide buffert de irritatierespons van retinol, versterkt de huidbarrière en voegt eigenstandige voordelen toe (sebumregulatie, pigmentvermindering). MAUYI combineert beide in één formule zodat je geen aparte producten nodig hebt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doet niacinamide 10% voor de huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niacinamide 10% versterkt de huidbarrière door ceramideproductie te stimuleren, vermindert sebumproductie, verlicht pigmentvlekken door melanosoomtransfer te remmen, heeft ontstekingsremmende eigenschappen en buffert irritatie van actieve ingrediënten. 10% is de klinisch effectieve drempel voor zichtbare resultaten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk retinol serum is het beste voor gevoelige huid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor gevoelige huid is een retinolserum met een lage concentratie (0.3%) en gebufferde formule het meest geschikt. MAUYI Reset Serum combineert retinol 0.3% met niacinamide 10% en bakuchiol 0.5% in een parfumvrije, alcoholvrije formule — specifiek ontwikkeld om effectief én tolerabel te zijn voor gevoelige huid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik retinol overdag gebruiken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retinol wordt afgeraden voor overdag gebruik. Retinol is gevoelig voor UV-afbraak en maakt de huid tijdelijk gevoeliger voor zon. Gebruik het altijd \'s avonds en draag overdag SPF 30 of hoger.',
      },
    },
  ],
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <FAQPageContent />
      <Footer />
    </>
  )
}
