import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol voor Zonschade — Fotoveroudering Terugdraaien | MAUYI',
  description:
    'Zonschade stapelt op over jaren: pigmentvlekken, gerimpelde huid, verlies van gelijkmatige tint. MAUYI Reset Serum met retinol 0.3% draait fotoveroudering actief terug — bewezen door klinisch onderzoek.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/voor-zonschade` },
  openGraph: {
    title: 'Retinol voor Zonschade | MAUYI Reset Serum',
    description:
      'Jarenlange UV-blootstelling beschadigt DNA, versnelt collageeafbraak en veroorzaakt ongelijke pigmentatie. Retinol is het enige ingrediënt dat fotoveroudering op cellulair niveau aanpakt.',
    url: `${BASE_URL}/products/reset-serum/voor-zonschade`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum voor zonschade' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Kan retinol zonschade herstellen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja — retinol is het enige niet-receptplichtige ingrediënt met klinisch bewijs voor het terugdraaien van fotoveroudering. Het versnelt celvernieuwing waardoor beschadigde cellen sneller worden vervangen, remt melanineproductie (bruine vlekken), stimuleert collageen dat UV-schade heeft afgebroken, en verbetert de algehele huidstructuur na jarenlange zonblootstelling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen zonschade en gewone huidveroudering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gewone veroudering (intrinsiek) is genetisch bepaald en gradueel. Zonschade (fotoveroudering) is cumulatief en versnelt het verouderingsproces significant. UV-straling beschadigt collageen rechtstreeks door vrije radicalen, activeert melanocyten die pigmentvlekken veroorzaken, en tast het DNA van huidcellen aan. Fotoveroudering is verantwoordelijk voor 80–90% van zichtbare huidveroudering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt het voordat retinol zonschade verbetert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ongelijkmatige pigmentatie begint te vervagen na 8–12 weken consistent gebruik. Huidtextuurverbetering is merkbaar na 6–8 weken. Voor significante vermindering van diepere zonnevlekken is 4–6 maanden nodig. Retinol draait jarenlange schade niet in weken terug — maar consistentie levert bewezen, cumulatieve verbetering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik SPF gebruiken als ik retinol gebruik voor zonschade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dit is absoluut essentieel — en de meeste mensen weten dit niet. Retinol versnelt celvernieuwing, waardoor nieuw aangemaakte cellen extra gevoelig zijn voor UV-straling. Zonder SPF herstelt retinol overdag wat het \'s nachts heeft verbeterd. SPF 30+ elke ochtend is geen optie — het is een voorwaarde voor effectief retinolgebruik bij zonschade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt retinol ook op oude zonnevlekken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, ook op oudere pigmentatie. Retinol versnelt de afschilferingssnelheid van gepigmenteerde cellen, waardoor melanine sneller de oppervlakte verlaat. Niacinamide blokkeert de overdracht van melanosomen van melanocyten naar keratinocyten — een aanvullend mechanisme dat ook bij oude vlekken werkt. Gecombineerd: het meest effectieve niet-receptplichtige duo voor pigmentvlekken.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Retinol serum voor zonschade en fotoveroudering. Retinol 0.3% draait UV-schade terug + Niacinamide 10% blokkeert melanineoverdracht + Bakuchiol 0.5% antioxidant.',
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
    { '@type': 'ListItem', position: 2, name: 'Reset Serum', item: `${BASE_URL}/products/reset-serum` },
    { '@type': 'ListItem', position: 3, name: 'Voor Zonschade', item: `${BASE_URL}/products/reset-serum/voor-zonschade` },
  ],
}

export default function VoorZonschadePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />
      <main className="bg-[#FAF8F5]">

        {/* ── Hero ── */}
        <section className="bg-[#0A0908] text-white">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 mb-8 text-[11px] text-stone-600 tracking-wide">
                <Link href="/" className="hover:text-[#C9A96E] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/products/reset-serum" className="hover:text-[#C9A96E] transition-colors">Reset Serum</Link>
                <span>/</span>
                <span className="text-stone-500">Voor Zonschade</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  Fotoveroudering + pigmentatie
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Jaren zonschade.<br />
                <em className="italic text-[#C9A96E]">Retinol draait het terug.</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                80–90% van zichtbare huidveroudering wordt veroorzaakt door de zon — niet door
                leeftijd. Pigmentvlekken, gerimpelde textuur, ongelijke tint: allemaal UV.
                Retinol is het enige niet-receptplichtige ingrediënt dat fotoveroudering op
                cellulair niveau aanpakt.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Fotoveroudering', 'Zonnevlekken', 'UV-herstell', 'Parfumvrij'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-[#C9A96E] bg-[#C9A96E]/10 border border-[#C9A96E]/20 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

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

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden lg:block hidden">
              <Image
                src="/reset-serum-new.jpg"
                alt="MAUYI Reset Serum voor zonschade fotoveroudering"
                fill
                className="object-cover object-center"
                sizes="50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/40 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* ── Het probleem ── */}
        <section className="bg-white border-b border-stone-100">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">De wetenschap</span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Wat UV werkelijk doet<br />
                <em className="italic">met je huid over de jaren</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                UV-straling (UVA en UVB) beschadigt huid op meerdere niveaus tegelijk. UVA
                penetreert de dermis en beschadigt collageen en elastine via vrije radicalen —
                de structurele eiwitten die huid zijn stevigheid geven. UVB beschadigt het
                DNA van huidcellen en activeert melanocyten overactief, wat leidt tot
                onregelmatige pigmentatie.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Cumulatieve UV-schade stapelt elke dag op — ook op bewolkte dagen.
                Fotoveroudering is verantwoordelijk voor 80–90% van wat wij zien als
                huidveroudering: rimpels, pigmentvlekken, ongelijke textuur, verlies van
                gelijkmatige tint. Niet leeftijd. De zon.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed">
                Retinol is de enige niet-receptplichtige substantie met peer-reviewed bewijs voor
                <strong className="font-medium text-[#1A1A1A]"> het terugdraaien van fotoveroudering</strong> —
                niet alleen oppervlakkige exfoliatie, maar herstel op dermaal niveau.
              </p>
            </div>
          </div>
        </section>

        {/* ── De formule ── */}
        <section className="bg-[#FAF8F5]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">De formule</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-4"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Drie ingrediënten die<br />
              <em className="italic text-[#C9A96E]">UV-schade actief herstellen</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Elk ingrediënt pakt een ander aspect van fotoveroudering aan — samen herstellen
              ze de drie dimensies van UV-schade.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'De fotoverouderingsomkeerder',
                  uitleg:
                    'Versnelt celvernieuwing waardoor UV-beschadigde cellen sneller worden vervangen door gezonde nieuwe cellen. Stimuleert collageen dat UV-straling heeft afgebroken. Normaliseert de dikte van de epidermis die UV dun maakt. Klinisch bewijs: significante verbetering van zonschade na 12–24 weken retinolgebruik in meerdere gerandomiseerde trials.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'De pigmentblokkeerder',
                  uitleg:
                    'Blokkeert actief de overdracht van melanosomen van melanocyten (pigmentcellen) naar keratinocyten (huidcellen). Dit is een uniek mechanisme: niacinamide werkt vóórdat pigment zichtbaar wordt aan de oppervlakte, niet alleen daarna. Resultaat: minder nieuwe pigmentvorming én verlichting van bestaande vlekken na 4–8 weken.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'De antioxidant-versterker',
                  uitleg:
                    'Heeft bewezen antioxidante eigenschappen die vrije radicalen neutraliseren — exact de schade die UV-straling veroorzaakt. Vermindert oxidatieve stress in de huid, wat UV-schade direct tegenwerkt. Gecombineerd met retinol: additief effect op fotoveroudering en pigmentvermindering zonder extra irritatie.',
                  kleur: 'from-[#C9A96E]/20 to-[#C9A96E]/8',
                },
              ].map((item) => (
                <div
                  key={item.naam}
                  className={`bg-gradient-to-br ${item.kleur} rounded-2xl p-6 border border-stone-200/60`}
                >
                  <div className="text-[11px] font-bold text-[#C9A96E] tracking-[0.2em] mb-3">{item.nummer}</div>
                  <div className="text-[17px] font-semibold text-[#1A1A1A] mb-1" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {item.naam}
                  </div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#C9A96E] mb-4">{item.rol}</div>
                  <p className="text-[13px] text-[#6B6560] font-light leading-relaxed">{item.uitleg}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Voor wie ── */}
        <section className="bg-white border-t border-stone-100">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Voor wie</span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Reset Serum is gemaakt<br />voor jou als je…
              </h2>
              <ul className="space-y-4">
                {[
                  'Zichtbare zonnevlekken of onegale pigmentatie hebt',
                  'Merkt dat huid na jaren zon rimpeliger of ruwer is',
                  'Als kind of jongvolwassene veel tijd in de zon hebt doorgebracht',
                  'Huidskleur wil egaliseren zonder agressieve behandelingen',
                  'Fotoveroudering wil aanpakken én verdere schade wil voorkomen',
                ].map((punt) => (
                  <li key={punt} className="flex items-start gap-3">
                    <svg className="w-4 h-4 mt-0.5 text-[#C9A96E] shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8l4 4 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[14px] text-[#4A4540] font-light leading-relaxed">{punt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0A0908] rounded-2xl p-8 text-white">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-4">Kritische waarschuwing</div>
              <h3 className="text-xl font-semibold mb-4 leading-snug" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Zonder SPF werkt retinol niet.
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                <div>
                  <span className="text-[#C9A96E] font-medium">Waarom dit cruciaal is:</span> retinol
                  versnelt celvernieuwing, waardoor nieuwe huidcellen extra gevoelig zijn voor UV.
                  Zonder SPF herstelt retinol &#39;s nachts wat de zon overdag weer beschadigt.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">De regel:</span> SPF 30+ elke ochtend,
                  ook op bewolkte dagen, ook binnenshuis (UVA penetreert glas). Zonder SPF is retinol
                  voor zonschade zinloos — en mogelijk schadelijk.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Protocol:</span> Reset Serum &#39;s avonds
                  op droge huid → rijke moisturizer → SPF de volgende ochtend. Elke dag. Geen uitzonderingen.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-[#FAF8F5] border-t border-stone-100">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Veelgestelde vragen</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-10 leading-tight"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Retinol en zonschade
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Kan retinol zonschade herstellen?',
                  a: 'Ja — retinol is het enige niet-receptplichtige ingrediënt met klinisch bewijs voor het terugdraaien van fotoveroudering. Het versnelt celvernieuwing, remt melanineproductie, stimuleert collageen dat UV heeft afgebroken, en verbetert algehele huidstructuur.',
                },
                {
                  v: 'Wat is het verschil tussen zonschade en gewone huidveroudering?',
                  a: 'Gewone veroudering is genetisch en gradueel. Zonschade is cumulatief en versnelt veroudering significant. UV beschadigt collageen via vrije radicalen, activeert melanocyten overactief, en tast het DNA van huidcellen aan. Fotoveroudering is verantwoordelijk voor 80–90% van zichtbare huidveroudering.',
                },
                {
                  v: 'Hoe lang duurt het voordat retinol zonschade verbetert?',
                  a: 'Pigmentatie begint te vervagen na 8–12 weken. Huidtextuurverbetering na 6–8 weken. Voor significante vermindering van diepere zonnevlekken is 4–6 maanden nodig. Consistentie levert bewezen, cumulatieve verbetering.',
                },
                {
                  v: 'Moet ik SPF gebruiken als ik retinol gebruik voor zonschade?',
                  a: 'Absoluut essentieel. Retinol versnelt celvernieuwing waardoor nieuwe cellen extra gevoelig zijn voor UV. Zonder SPF herstelt retinol \'s nachts wat de zon overdag beschadigt. SPF 30+ elke ochtend is een voorwaarde, geen optie.',
                },
                {
                  v: 'Werkt retinol ook op oude zonnevlekken?',
                  a: 'Ja. Retinol versnelt de afschilferingssnelheid van gepigmenteerde cellen. Niacinamide blokkeert melanosoomoverdracht — ook bij oude vlekken. Gecombineerd: het meest effectieve niet-receptplichtige duo voor pigmentvlekken van elke leeftijd.',
                },
              ].map((item) => (
                <details key={item.v} className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                    <span className="text-[15px] font-medium text-[#1A1A1A]">{item.v}</span>
                    <svg
                      className="w-4 h-4 text-[#C9A96E] shrink-0 transition-transform group-open:rotate-180"
                      viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
                    >
                      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-[14px] text-[#6B6560] font-light leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#0A0908]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">
                MAUYI Reset Serum
              </div>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-white leading-tight"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Jaren zon undone.<br />
                <em className="italic text-[#C9A96E]">Nacht voor nacht.</em>
              </h2>
              <p className="mt-3 text-stone-500 font-light text-[14px]">
                30 ml · €58 · Gratis verzending vanaf €45
              </p>
            </div>
            <div className="flex flex-col sm:items-end gap-3 shrink-0">
              <Link
                href="/products/reset-serum"
                className="inline-flex items-center gap-2.5 bg-[#C9A96E] hover:bg-[#B8965C] text-[#0A0908] font-semibold text-[14px] tracking-[0.04em] px-8 py-4 rounded-xl transition-colors whitespace-nowrap"
              >
                Bestel Reset Serum — €58
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </Link>
              <span className="text-stone-600 text-[12px] font-light text-center sm:text-right">
                Parfumvrij · Fotoveroudering · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
