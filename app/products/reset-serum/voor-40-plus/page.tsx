import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Retinol op je 40e — Diepere Rimpels en Hormonale Huidveranderingen | MAUYI',
  description:
    'Op je 40e versnelt huidveroudering door hormonale veranderingen en cumulatief collageenverlies. MAUYI Reset Serum met retinol 0.3% + niacinamide 10% geeft huid op je 40e wat het nodig heeft.',
  alternates: { canonical: `${BASE_URL}/products/reset-serum/voor-40-plus` },
  openGraph: {
    title: 'Retinol op je 40e | MAUYI Reset Serum',
    description:
      'Na je 40e verandert de huid sneller: minder collageen, diepere rimpels, hormonale invloeden. Retinol 0.3% is de slimste investering voor huid op je 40e.',
    url: `${BASE_URL}/products/reset-serum/voor-40-plus`,
    type: 'article',
    images: [{ url: `${BASE_URL}/reset-serum-new.jpg`, width: 1200, height: 800, alt: 'MAUYI Reset Serum voor 40 plus' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is retinol nog effectief als ik in de 40 ben?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absoluut. Retinol werkt op elke leeftijd, maar de resultaten zijn op je 40e zichtbaarder omdat de uitdagingen groter zijn. Huid in de 40 heeft minder collageen, langzamere celvernieuwing, en begint hormonale veranderingen te tonen. Retinol stimuleert collageen actief, versnelt celvernieuwing en vermindert de zichtbaarheid van rimpels op alle dieptes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke huidveranderingen treden op na je 40e?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na je 40e wordt cumulatief collageenverlies zichtbaar als rimpels die dieper worden, huid die minder veerkrachtig is, en lichte terugval van gezichtscontouren. Hormonale veranderingen (oestrogeendaling) versnellen dit bij vrouwen: de huid wordt dunner, droger, en verliest collageen versneld. Celvernieuwing vertraagt naar 60–90 dagen, waardoor huid doffer en ongelijker oogt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik op mijn 40e een hogere concentratie retinol gebruiken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet noodzakelijk — effectiviteit is meer afhankelijk van consistentie dan concentratie. 0.3% geeft klinisch bewezen collageenstimulatie. Als huid volledig gewend is na 6–12 maanden dagelijks gebruik, kun je overwegen naar 0.5% te gaan. Huid op je 40e is soms gevoeliger door hormonale veranderingen — verhoog concentratie geleidelijk en alleen als huid dat verdraagt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verschilt retinol voor 40-plus van retinol voor 30-plus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De werking is identiek, maar de inzet is anders. Op je 30e gebruik je retinol preventief — collageen stimuleren voordat rimpels structureel worden. Op je 40e is de aanpak reactief én preventief: bestaande rimpels verminderen én verdere versnelling vertragen. Huid op je 40e profiteert ook meer van de barrièreversterkende eigenschappen van niacinamide, omdat hormonale veranderingen de barrière verzwakken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke andere producten zijn belangrijk naast retinol op je 40e?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SPF 30+ elke ochtend is niet onderhandelbaar — dit is de meest impactvolle anti-aging interventie. Een rijkere vochtinbrengende crème dan je op je 30e gebruikte (huid wordt droger door oestrogeendaling). Vitamine C serum \'s ochtends voor antioxidante bescherming en synergistische collageenstimulatie. Oogcrème voor de dunne huid rondom de ogen.',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MAUYI Reset Serum',
  description: 'Anti-aging retinol serum voor 40-plussers. Retinol 0.3% stimuleert collageen + Niacinamide 10% versterkt de barrière + Bakuchiol 0.5% voor additief anti-aging effect.',
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
    { '@type': 'ListItem', position: 3, name: 'Voor 40+', item: `${BASE_URL}/products/reset-serum/voor-40-plus` },
  ],
}

export default function Voor40PlusPage() {
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
                <span className="text-stone-500">Voor 40+</span>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  40+ anti-aging
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Na je 40e verandert huid.<br />
                <em className="italic text-[#C9A96E]">Jouw routine ook.</em>
              </h1>

              <p className="text-stone-400 font-light leading-relaxed mb-8 text-[15px]">
                Op je 40e is collageenverlies geen abstractie meer — het is zichtbaar in diepere
                rimpels, minder veerkracht en soms hormonaal gedreven veranderingen. Reset Serum
                stimuleert collageen actief en versterkt de barrière die na je 40e kwetsbaarder wordt.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['40+ anti-aging', 'Collageenstimulatie', 'Barrièreherstel', 'Parfumvrij'].map((tag) => (
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
                alt="MAUYI Reset Serum voor 40 plus anti-aging"
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
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">De biologie</span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Wat er werkelijk verandert<br />
                <em className="italic">na je 40e</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Op je 40e heeft cumulatief collageenverlies — circa 1% per jaar vanaf je 25e — zijn
                tol geëist. Je bent 15–20% van je collageenreserves kwijt. Dat vertaalt zich naar
                rimpels die dieper worden, jukbeenderen die minder geprononceerd lijken, en wangen
                die licht inzakken.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-4">
                Voor vrouwen versnelt dit proces na de overgang: oestrogeendaling draagt bij aan
                30% verlies van huidcollageen in de eerste vijf jaar na de menopauze. De huid
                wordt dunner, droger, en verliest elasticiteit sneller dan in de decennia daarvoor.
              </p>
              <p className="text-[15px] text-[#6B6560] font-light leading-relaxed">
                Retinol is het enige niet-receptplichtige ingrediënt met klinisch bewijs voor
                <strong className="font-medium text-[#1A1A1A]"> collageenstimulatie en rimpelvermindering</strong>
                op deze diepte. Gecombineerd met niacinamide dat de barrière versterkt, is Reset
                Serum de meest complete avondformule voor huid na de 40.
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
              <em className="italic text-[#C9A96E]">huid na de veertig</em>
            </h2>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed mb-12 max-w-xl">
              Elk ingrediënt heeft een andere rol in het aanpakken van de uitdagingen die huid op
              je 40e specifiek heeft.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  nummer: '01',
                  naam: 'Retinol 0.3%',
                  rol: 'De collageenhersteller',
                  uitleg:
                    'Activeert RAR-receptoren (retinolzuur-receptoren) in fibroblasten — de cellen die collageen produceren. Remt collagenasen die bestaand collageen afbreken. Op je 40e werkt dit mechanisme even krachtig als op je 30e, maar het herstel is zichtbaarder omdat de uitgangswaarden lager zijn. Na 12 weken consistent gebruik: meetbare toename in huiddikte en -elasticiteit.',
                  kleur: 'from-amber-900/20 to-amber-800/10',
                },
                {
                  nummer: '02',
                  naam: 'Niacinamide 10%',
                  rol: 'De barrièreverstärker',
                  uitleg:
                    'Verhoogt ceramide- en vetzuursynthese in de huidbarrière — essentieel na de 40, wanneer hormonale veranderingen de barrière verzwakken. Een sterkere barrière betekent minder vochtverlies, minder irritatie, en retinol dat effectiever kan werken. Vermindert ook zichtbare poriën en egaleert huidtint.',
                  kleur: 'from-stone-200/60 to-stone-100/40',
                },
                {
                  nummer: '03',
                  naam: 'Bakuchiol 0.5%',
                  rol: 'De additieve verjonger',
                  uitleg:
                    'Vergelijkbare retinol-activiteit via dezelfde RAR-pathway maar zonder irritatie. Klinisch bewezen: even effectief als 0.5% retinol in rimpelvermindering. Additief effect wanneer gecombineerd met retinol. Op je 40e — wanneer huid soms gevoeliger is door hormonale schommelingen — biedt bakuchiol extra bescherming.',
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
                  'In de 40–55 bent en diepere rimpels wil verminderen',
                  'Merkt dat huid minder elastisch is dan vroeger',
                  'Hormonale huidveranderingen ervaart door de overgang',
                  'Eerder retinol probeerde maar het te irriterend vond',
                  'Een effectieve avondroutine wil die écht resultaat geeft',
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
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-4">Protocol voor 40+</div>
              <h3 className="text-xl font-semibold mb-4 leading-snug" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Vier producten die het verschil maken.
              </h3>
              <div className="space-y-4 text-[13px] text-stone-400 font-light leading-relaxed">
                <div>
                  <span className="text-[#C9A96E] font-medium">Ochtend:</span> SPF 30+ — niet onderhandelbaar.
                  Zonneschade versnelt alles wat retinol probeert te herstellen.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">'s Avonds:</span> Reset Serum op droge huid.
                  Begin 2× per week, bouw op naar 5–7× per week. Huid op je 40e went doorgaans iets trager.
                </div>
                <div>
                  <span className="text-[#C9A96E] font-medium">Altijd:</span> Rijkere moisturizer dan op je 30e.
                  Hormonale droging vraagt om meer barrièreondersteuning.
                </div>
                <div className="pt-2 border-t border-white/10 text-stone-500 text-[12px]">
                  Optioneel: vitamine C serum \'s ochtends voor synergistische collageenstimulatie en antioxidante bescherming.
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
              Retinol op je 40e
            </h2>

            <div className="space-y-0 divide-y divide-stone-200">
              {[
                {
                  v: 'Is retinol nog effectief als ik in de 40 ben?',
                  a: 'Absoluut. Retinol werkt op elke leeftijd, en de resultaten zijn op je 40e zichtbaarder omdat de uitdagingen groter zijn. Het stimuleert collageen actief, versnelt celvernieuwing en vermindert rimpels op alle dieptes.',
                },
                {
                  v: 'Welke huidveranderingen treden op na je 40e?',
                  a: 'Cumulatief collageenverlies wordt zichtbaar als diepere rimpels en minder veerkracht. Hormonale veranderingen (oestrogeendaling) versnellen dit bij vrouwen: dunnere, drogere huid die sneller verlies toont. Celvernieuwing vertraagt naar 60–90 dagen.',
                },
                {
                  v: 'Moet ik op mijn 40e een hogere concentratie retinol gebruiken?',
                  a: 'Niet noodzakelijk. 0.3% geeft klinisch bewezen collageenstimulatie. Als huid volledig gewend is na 6–12 maanden, kun je naar 0.5%. Huid op je 40e is soms gevoeliger door hormonale veranderingen — verhoog concentratie geleidelijk.',
                },
                {
                  v: 'Hoe verschilt het voor 40-plus van voor 30-plus?',
                  a: 'Op je 30e is retinol preventief. Op je 40e is het reactief én preventief: bestaande rimpels verminderen én verdere versnelling vertragen. Huid op je 40e profiteert ook meer van niacinamide\'s barrièreversterkende eigenschappen door hormonale veranderingen.',
                },
                {
                  v: 'Welke andere producten zijn belangrijk naast retinol op je 40e?',
                  a: 'SPF 30+ elke ochtend (niet onderhandelbaar). Een rijkere moisturizer dan op je 30e. Optioneel: vitamine C \'s ochtends. Oogcrème voor de dunne huid rondom de ogen.',
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
                Huid na je 40e.<br />
                <em className="italic text-[#C9A96E]">Sterker dan ooit.</em>
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
                Parfumvrij · Anti-aging 40+ · NL &amp; BE
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
