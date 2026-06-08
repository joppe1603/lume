import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol Serum tegen Rimpels — Klinisch Bewezen | MAUYI',
  description:
    'Retinol is het meest bewezen anti-aging ingrediënt ter wereld. MAUYI Reset Serum combineert retinol 0.3% met niacinamide 10% en bakuchiol voor zichtbaar minder rimpels, zonder irritatie.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/voor-rimpels` },
  openGraph: {
    title: 'Retinol Serum tegen Rimpels | MAUYI Reset Serum',
    description:
      'Het meest bewezen anti-aging ingrediënt in de juiste dosering. Retinol 0.3% + niacinamide + bakuchiol voor zichtbaar minder rimpels.',
    url: `${BASE_URL}/products/reset-serum/voor-rimpels`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum tegen rimpels' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Werkt retinol echt tegen rimpels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Retinol is het best gedocumenteerde anti-aging ingrediënt in dermato-cosmetica. Het stimuleert collageen- en elastineproductie, versnelt celvernieuwing en verbetert de huidstructuur. Klinische studies tonen consistent vermindering van fijne lijntjes na 8–12 weken dagelijks gebruik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Voor welke rimpels werkt retinol het beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retinol werkt het beste op fijne lijntjes en oppervlakkige rimpels veroorzaakt door UV-schade en verlies van collageen. Diepe expressierimpels (zoals nasolabiaalplooien) reageren minder sterk — daarvoor is dermatologische behandeling effectiever. Retinol is ook uitstekend voor preventieve anti-aging.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer zie ik resultaat bij rimpels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De eerste verbetering in huidtextuur en hydratatie is vaak al na 4 weken zichtbaar. Duidelijke vermindering van fijne lijntjes zie je na 8–12 weken. Maximale resultaten bij collageenanmaak zijn pas na 6 maanden consistent gebruik meetbaar — retinol is een marathon, geen sprint.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik retinol gebruiken rond de ogen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De huid rond de ogen is dunner en gevoeliger. Bij direct aanbrengen op het ooglid of de directe oogomgeving kan irritatie optreden. Veiligste methode: breng het serum aan op de rest van het gezicht en laat het van nature migreren naar de oogomgeving. Of gebruik een specifiek oogserum met lagere retinolconcentratie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Op welke leeftijd moet je beginnen met retinol voor rimpels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Collageen begint af te breken vanaf je 25e. Preventief gebruik (25–30 jaar) is effectiever dan reactief gebruik. Op je 30e is het ideale moment om te starten: oud genoeg voor klinisch significante collagenaseactiviteit, jong genoeg voor optimale huidrespons. Eerder dan 25 jaar is zelden nodig.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Anti-aging retinol serum voor rimpels. Retinol 0.3% + Niacinamide 10% + Bakuchiol 0.5% stimuleren collageenproductie in één parfumvrije avondformule.',
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
    { '@type': 'ListItem', position: 3, name: 'Voor Rimpels', item: `${BASE_URL}/products/reset-serum/voor-rimpels` },
  ],
}

export default function VoorRimpelsPage() {
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
                <span className="text-stone-500">Rimpels</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  Anti-aging
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Retinol serum dat<br />
                <em className="italic text-[#C9A96E]">rimpels klinisch aanpakt.</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                Retinol is het meest bewezen anti-aging ingrediënt in de dermatologie. Reset Serum combineert
                de optimale dosering met ondersteunende ingrediënten — zodat je de resultaten krijgt zonder
                de irritatie die de meeste retinolproducten meebrengen.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Stimuleert collageen', 'Anti-aging', 'Klinisch bewezen', 'Parfumvrij'].map((tag) => (
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
                alt="MAUYI Reset Serum tegen rimpels"
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
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Het probleem</span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Waarom rimpels ontstaan —<br />
                <em className="italic">en wat retinol eraan doet</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Vanaf je 25e verliest je huid elk jaar ongeveer 1% van haar collageen. Collageen is het structurele
                eiwit dat huid gespannen en vol houdt. Zonder voldoende collageen ontstaan fijne lijntjes,
                verliezen contouren hun definitie, en wordt de huid droger en dunner.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                UV-straling versnelt dit proces dramatisch door collagenasen te activeren — enzymen die
                bestaand collageen afbreken. Daarmee is zonbeschadiging verantwoordelijk voor
                een <strong className="font-medium text-[#1A1A1A]">groot deel van zichtbaar veroudering</strong>, meer dan genetica.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed">
                Retinol is het enige niet-receptplichtige ingrediënt dat collageen- en elastineproductie
                klinisch aantoonbaar stimuleert. De sleutel is de juiste dosering en een formule die lang genoeg
                vol te houden is.
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
              Drie ingrediënten voor<br />
              <em className="italic text-[#C9A96E]">zichtbaar minder rimpels</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Elk ingrediënt speelt een andere rol in het anti-aging proces — samen produceren ze
              resultaten die één ingrediënt alleen niet haalt.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'De collageenstimulator',
                  uitleg:
                    'Bindt aan retinolreceptoren in de dermis en activeert collageensynthese. Versnelt celvernieuwing zodat nieuwe, gezonde cellen het oppervlak bereiken. 0.3% levert klinisch significante resultaten met minimale irritatie.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'De rimpelvuller',
                  uitleg:
                    'Verhoogt de ceramideproductie en versterkt de huidbarrière — wat huid voller en hydrateer laat ogen. Studies tonen reductie van fijne lijntjes bij 5% al aan; 10% geeft een versterkt effect op huidtextuur en elasticiteit.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'De anti-aging versterker',
                  uitleg:
                    'Activeer dezelfde retinolreceptoren als retinol — maar langs een andere pathway. Klinische studies tonen vergelijkbare vermindering van rimpels als retinol 0.5%, zonder de bijwerkingen. Samen werken ze additief.',
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
                Reset Serum werkt het<br />beste als je…
              </h2>
              <ul className="space-y-4">
                {[
                  'Fijne lijntjes of vroege rimpels wilt aanpakken',
                  'Preventief wilt beginnen voordat rimpels zichtbaar worden',
                  '30+ bent en merkt dat je huid minder stevig aanvoelt',
                  'Eerder retinol stopte vanwege irritatie',
                  'Een efficiënte avondroutine wil zonder tien producten',
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
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-4">Gebruikstip</div>
              <h3 className="text-xl font-semibold mb-4 leading-snug" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Consistentie is alles
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                <div>
                  <span className="text-[#C9A96E] font-medium">Week 1–2:</span> 2–3× per week. Collageenstimulatie
                  begint al bij de eerste toepassingen, ook al zie je het nog niet.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Maand 2–3:</span> Dagelijks gebruik. Eerste
                  zichtbare verbetering in huidtextuur en hydratatie.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Maand 3+:</span> Meetbare vermindering van
                  fijne lijntjes. Maximale resultaten na 6 maanden consistent gebruik.
                </div>
                <div className="pt-2 border-t border-white/10 text-stone-500 text-[12px]">
                  's Avonds op droge huid. Overdag SPF 30 of hoger — UV is de belangrijkste oorzaak van huidveroudering.
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
              Retinol & rimpels
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Werkt retinol echt tegen rimpels?',
                  a: 'Ja. Retinol is het best gedocumenteerde anti-aging ingrediënt in dermato-cosmetica. Het stimuleert collageen- en elastineproductie en versnelt celvernieuwing. Klinische studies tonen consistent vermindering van fijne lijntjes na 8–12 weken dagelijks gebruik.',
                },
                {
                  v: 'Voor welke rimpels werkt retinol het beste?',
                  a: 'Retinol werkt het beste op fijne lijntjes en oppervlakkige rimpels door UV-schade en collageenverlies. Diepe expressierimpels reageren minder sterk. Voor preventie — starten voordat rimpels diep zijn — is retinol het meest effectief.',
                },
                {
                  v: 'Wanneer zie ik resultaat?',
                  a: 'Eerste verbetering in huidtextuur en hydratatie is al na 4 weken zichtbaar. Duidelijke vermindering van fijne lijntjes na 8–12 weken. Maximale resultaten bij collageenaanmaak zijn na 6 maanden consistent gebruik.',
                },
                {
                  v: 'Kan ik retinol gebruiken rond de ogen?',
                  a: 'De huid rond de ogen is dunner en gevoeliger. Veiligste methode: breng het serum aan op de rest van het gezicht en laat het van nature migreren. Of gebruik een specifiek oogserum met lagere retinolconcentratie voor de directe oogomgeving.',
                },
                {
                  v: 'Op welke leeftijd beginnen met retinol?',
                  a: 'Collageen begint af te breken vanaf je 25e. Preventief gebruik (25–30 jaar) is effectiever dan reactief gebruik. Op je 30e is het ideale moment om te starten: oud genoeg voor significante collagenaseactiviteit, jong genoeg voor optimale huidrespons.',
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
                Begin vandaag met<br />
                <em className="italic text-[#C9A96E]">bewezen anti-aging.</em>
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
                Parfumvrij · Anti-aging · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
