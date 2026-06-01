import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pers & Media | MAUYI',
  description: 'Persmateriaal voor MAUYI — productspecificaties, merkfeitjes, foto\'s en contactgegevens voor redacteuren en journalisten.',
  openGraph: {
    title: 'Pers & Media | MAUYI',
    description: 'Persmateriaal voor MAUYI — productspecificaties, merkfeitjes en contactgegevens voor redacteuren en journalisten.',
    url: 'https://mauyi.nl/press',
  },
}

const facts = [
  { label: 'Opgericht', value: '2026, Nederland' },
  { label: 'Rechtsvorm', value: 'MAUYI B.V.' },
  { label: 'Productie', value: 'Geformuleerd en geproduceerd in Nederland' },
  { label: 'Product', value: 'Reset Serum — avondserum met retinol, niacinamide en bakuchiol' },
  { label: 'Positionering', value: 'Evidence-based, minimaal, parfumvrij' },
  { label: 'Prijs', value: '€58 / 30ml' },
  { label: 'Beschikbaarheid', value: 'Direct via mauyi.nl' },
  { label: 'Instagram', value: '@mauyi' },
]

const ingredients = [
  {
    name: 'Retinol 0.3%',
    role: 'Celvernieuwing',
    detail: 'Goudstandaard in anti-aging dermatologie. Stimuleert collageenproductie, versnelt celomloop, vermindert fijne lijntjes en oneffenheden.',
  },
  {
    name: 'Niacinamide 10%',
    role: 'Barrièreherstel',
    detail: 'Klinisch effectieve dosering voor ceramideproductie, talgcontrole, poriënverfijning en melanineremming. Buffert retinol-irritatie.',
  },
  {
    name: 'Bakuchiol 0.5%',
    role: 'Kalmering & synergie',
    detail: 'Plantaardig retinoïde-agonist. Versterkt retinolwerking via alternatief receptorpad, verlaagt irritatiedrempel, veilig tijdens zwangerschap.',
  },
  {
    name: 'Hyaluronzuur complex',
    role: 'Hydratatie',
    detail: 'Multi-moleculair gewichtscomplex voor hydratatie op oppervlak én in diepere huidlagen.',
  },
  {
    name: 'Panthenol (B5)',
    role: 'Herstel',
    detail: 'Pro-vitamine B5. Trekt vocht aan, kalmeert, ondersteunt huidherstel na actieve ingrediënten.',
  },
]

const angles = [
  {
    headline: '"Gemaakt in Nederland"',
    body: 'MAUYI is een van de weinige Nederlandse indie-merken met een volledig wetenschappelijk onderbouwde retinol-formule — geformuleerd en geproduceerd in Nederland.',
  },
  {
    headline: 'Eén serum, drie werkzame ingrediënten',
    body: 'Retinol 0.3% + Niacinamide 10% + Bakuchiol 0.5% in één parfumvrije formule. Geen vulstoffen, geen marketingingrediënten — alleen wat klinisch bewijs heeft.',
  },
  {
    headline: 'Minimal skincare als filosofie',
    body: 'MAUYI\'s filosofie: de gemiddelde vrouw gebruikt 12 producten per dag, dermatologen adviseren 3-4. Reset Serum vervangt drie aparte stappen in één.',
  },
  {
    headline: 'Bakuchiol + retinol combinatie',
    body: 'De combinatie van bakuchiol en retinol in één formule is klinisch onderbouwd: bakuchiol buffert de irritatie terwijl het de retinolwerking versterkt (British Journal of Dermatology, 2019).',
  },
]

export default function PressPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAF8F5] min-h-screen">

        {/* Header */}
        <div className="bg-[#1A1A1A] text-white">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Pers & Media</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-semibold leading-tight mb-5"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Persmateriaal MAUYI
            </h1>
            <p className="text-stone-400 text-lg font-light leading-relaxed max-w-2xl">
              Alles wat redacteuren, bloggers en journalisten nodig hebben over MAUYI en het Reset Serum. Voor vragen of samples: hello@mauyi.nl
            </p>
            <a
              href="mailto:hello@mauyi.nl?subject=Persverzoek MAUYI"
              className="inline-flex items-center gap-2 mt-8 bg-[#C9A96E] hover:bg-[#D4B47A] text-[#1A1A1A] px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              Stuur een persverzoek
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 space-y-16">

          {/* Brand facts */}
          <section>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A96E] mb-6">Merkfeitjes</p>
            <div className="bg-white rounded-2xl overflow-hidden divide-y divide-stone-100">
              {facts.map((f) => (
                <div key={f.label} className="flex gap-6 px-6 py-4">
                  <span className="text-[13px] font-semibold text-[#1A1A1A] w-40 shrink-0">{f.label}</span>
                  <span className="text-[13px] text-[#6B6560]">{f.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Brand story */}
          <section>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A96E] mb-6">Merkverhaal</p>
            <div className="bg-white rounded-2xl px-8 py-8 space-y-4">
              <p className="text-[15px] text-[#4A4540] leading-[1.85]">
                MAUYI is een Nederlands huidverzorgingsmerk opgericht met één gedachte: dat de gemiddelde skincare-routine te ingewikkeld is geworden — en dat de huid daaronder lijdt.
              </p>
              <p className="text-[15px] text-[#4A4540] leading-[1.85]">
                Het Reset Serum is de productbelichaming van die filosofie: Retinol 0.3%, Niacinamide 10% en Bakuchiol 0.5% in één parfumvrije, dermatologisch verantwoorde avondformule. Geen vulstoffen. Geen onnodige stappen. Alleen wat klinisch bewijs heeft.
              </p>
              <p className="text-[15px] text-[#4A4540] leading-[1.85]">
                MAUYI is geformuleerd en geproduceerd in Nederland, en richt zich op consumenten die bewuster kiezen — minder producten, betere ingrediënten, meer consistentie.
              </p>
            </div>
          </section>

          {/* Product ingredients */}
          <section>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A96E] mb-6">Reset Serum — Actieve Ingrediënten</p>
            <div className="space-y-3">
              {ingredients.map((ing) => (
                <div key={ing.name} className="bg-white rounded-2xl px-6 py-5">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <p className="text-[14px] font-semibold text-[#1A1A1A]">{ing.name}</p>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C9A96E] mt-0.5">{ing.role}</p>
                    </div>
                    <p className="text-[13px] text-[#6B6560] leading-relaxed pt-0.5">{ing.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-[#9A9590] mt-4 px-1">
              Volledige INCI: Aqua, Glycerin, Niacinamide, Sodium Hyaluronate, Bakuchiol, Retinol, Panthenol, Ceramide NP, Allantoin, Carbomer, Sodium Hydroxide, Ethylhexylglycerin, Phenoxyethanol.
            </p>
          </section>

          {/* Editorial angles */}
          <section>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A96E] mb-6">Redactionele invalshoeken</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {angles.map((a) => (
                <div key={a.headline} className="bg-white rounded-2xl px-6 py-6">
                  <p className="text-[14px] font-semibold text-[#1A1A1A] mb-2">{a.headline}</p>
                  <p className="text-[13px] text-[#6B6560] leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Images */}
          <section>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A96E] mb-6">Productfoto&apos;s</p>
            <div className="bg-white rounded-2xl px-8 py-8">
              <p className="text-[14px] text-[#4A4540] leading-relaxed mb-4">
                Hoge resolutie productfoto&apos;s zijn beschikbaar op aanvraag via{' '}
                <a href="mailto:hello@mauyi.nl?subject=Beeldmateriaal MAUYI" className="text-[#C9A96E] hover:underline">
                  hello@mauyi.nl
                </a>
                . Stuur een kort berichtje met het gewenste formaat en gebruik.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                <div className="aspect-square bg-stone-100 rounded-xl overflow-hidden">
                  <img src="/reset-serum-new.jpg" alt="Reset Serum productfoto" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-stone-100 rounded-xl overflow-hidden">
                  <img src="/journal-barrier.jpg" alt="MAUYI lifestyle" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-stone-100 rounded-xl overflow-hidden">
                  <img src="/journal-featured.jpg" alt="MAUYI brand" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* Claims */}
          <section>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A96E] mb-6">Geciteerde claims</p>
            <div className="bg-white rounded-2xl px-8 py-8 space-y-4">
              {[
                { claim: '"Retinol 0.3% — de ideale instapconcentratie voor effectieve celvernieuwing zonder overmatige irritatie"', source: 'Op basis van klinische richtlijnen dermatologie' },
                { claim: '"Niacinamide 10% — clinisch effectief voor barrièreherstel, talgcontrole en melanineremming"', source: 'Journal of Cosmetic Dermatology, meerdere studies' },
                { claim: '"Bakuchiol 0.5% — vergelijkbaar effectief als retinol, significant minder irritatie"', source: 'British Journal of Dermatology, 2019' },
                { claim: '"Parfumvrij — geen parfumstoffen of etherische oliën"', source: 'Formule-verificatie' },
              ].map((c) => (
                <div key={c.claim} className="border-l-2 border-[#C9A96E] pl-4">
                  <p className="text-[14px] text-[#1A1A1A] font-medium leading-snug">{c.claim}</p>
                  <p className="text-[12px] text-[#9A9590] mt-1">{c.source}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A96E] mb-6">Perscontact</p>
            <div className="bg-[#1A1A1A] rounded-2xl px-8 py-8 text-white">
              <p className="text-[15px] font-semibold mb-1">hello@mauyi.nl</p>
              <p className="text-stone-400 text-[13px] mb-6">Voor samplingverzoeken, interviews, redactionele vragen en beeldmateriaal.</p>
              <div className="space-y-2 text-[13px] text-stone-400">
                <p>Reactie binnen 2 werkdagen.</p>
                <p>Samples beschikbaar voor erkende beauty-redacties en -blogs.</p>
                <p>Geen vergoeding voor redactionele plaatsingen — alleen eerlijke coverage.</p>
              </div>
              <a
                href="mailto:hello@mauyi.nl?subject=Persverzoek MAUYI"
                className="inline-flex items-center gap-2 mt-6 bg-[#C9A96E] hover:bg-[#D4B47A] text-[#1A1A1A] px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
              >
                hello@mauyi.nl
              </a>
            </div>
          </section>

          {/* Back */}
          <div className="pt-4 border-t border-stone-200">
            <Link href="/" className="inline-flex items-center gap-2 text-[13px] text-[#9A9590] hover:text-[#C9A96E] transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M10 6H2M6 2L2 6l4 4" />
              </svg>
              Terug naar MAUYI
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
