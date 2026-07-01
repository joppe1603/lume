import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacybeleid',
  description: 'Hoe MAUYI omgaat met jouw persoonsgegevens.',
  robots: { index: false, follow: false },
}

const lastUpdated = '1 juli 2026'

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAF8F5] min-h-screen">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 py-20">

          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">Juridisch</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-semibold text-[#1A1A1A] leading-tight mb-4"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Privacybeleid
            </h1>
            <p className="text-[#9A9590] text-sm font-light">
              Laatst bijgewerkt: {lastUpdated}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent mb-14" />

          {/* Content */}
          <div className="prose prose-stone max-w-none space-y-10 text-[15px] leading-[1.85] text-[#4A4540]">

            <section>
              <h2 className="text-[18px] font-semibold text-[#1A1A1A] mb-3">1. Wie zijn wij</h2>
              <p>
                MAUYI B.V. (hierna: &ldquo;MAUYI&rdquo;, &ldquo;wij&rdquo;, &ldquo;ons&rdquo;) is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit privacybeleid. Wij zijn bereikbaar via{' '}
                <a href="mailto:hallo@mauyi.nl" className="text-[#C9A96E] underline underline-offset-2">hallo@mauyi.nl</a>.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-semibold text-[#1A1A1A] mb-3">2. Welke gegevens verzamelen wij</h2>
              <p>Afhankelijk van hoe je MAUYI gebruikt, verzamelen wij de volgende gegevens:</p>
              <ul className="mt-3 space-y-2 list-none pl-0">
                {[
                  { label: 'E-mailadres', desc: 'Wanneer je je inschrijft voor de wachtlijst of nieuwsbrief.' },
                  { label: 'Bestelgegevens', desc: 'Naam, e-mailadres, adres, producten en orderstatus wanneer je een bestelling plaatst.' },
                  { label: 'Herkomst- en campagnedata', desc: 'Pagina, referrer en UTM-parameters zodat wij begrijpen hoe mensen MAUYI vinden.' },
                  { label: 'Gebruiksdata op onze website', desc: 'Paginaweergaven, klikken, formulierstappen, interne zoekopdrachten en outbound links binnen MAUYI.' },
                  { label: 'Technische gegevens', desc: 'IP-hash, user agent, browser, apparaat, schermgrootte, taal, tijdzone en foutmeldingen.' },
                  { label: 'Deviceherkenning', desc: 'Alleen met toestemming of waar strikt noodzakelijk voor beveiliging: browser- en apparaatsignalen zoals canvas/WebGL-capabilities, opgeslagen als hashes waar mogelijk.' },
                  { label: 'Toestemmingsgegevens', desc: 'Welke cookie- en trackingkeuzes je hebt gemaakt, wanneer en voor welke versie van dit beleid.' },
                ].map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                    <span><strong className="text-[#1A1A1A] font-medium">{item.label}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Wij volgen niet wat je buiten MAUYI op andere websites zoekt of bekijkt. Betaalgegevens worden verwerkt door onze betaalprovider; MAUYI bewaart zelf geen volledige kaart- of bankgegevens.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-semibold text-[#1A1A1A] mb-3">3. Waarom verwerken wij jouw gegevens</h2>
              <p>Wij verwerken gegevens voor de volgende doeleinden:</p>
              <ul className="mt-3 space-y-2 list-none pl-0">
                {[
                  'Het verwerken van wachtlijstinschrijvingen, bestellingen en klantenservice.',
                  'Het meten en verbeteren van pagina’s, formulieren, checkout en campagnes.',
                  'Het voorkomen van spam, fraude, misbruik, scraping en technische storingen.',
                  'Het tonen en meten van relevante marketing wanneer je daarvoor toestemming hebt gegeven.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Wij sturen geen ongewenste commerciële e-mails en verkopen jouw gegevens nooit aan derden.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-semibold text-[#1A1A1A] mb-3">4. Grondslag voor verwerking</h2>
              <p>
                Wij verwerken gegevens op basis van toestemming, uitvoering van een overeenkomst, gerechtvaardigd belang voor beveiliging en verbetering van onze website, of een wettelijke verplichting. Marketing, analytics en deviceherkenning gebruiken wij alleen wanneer jij daarvoor toestemming geeft, tenzij een beperkte verwerking strikt noodzakelijk is voor beveiliging of fraudepreventie.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-semibold text-[#1A1A1A] mb-3">5. Bewaartermijn</h2>
              <p>
                Wachtlijst- en nieuwsbriefgegevens bewaren wij totdat je je afmeldt of de lijst niet langer actief is. Ordergegevens bewaren wij zolang dat nodig is voor levering, klantenservice en wettelijke administratieplichten. Ruwe trackingevents bewaren wij in principe maximaal 12 maanden; geaggregeerde analytics kunnen langer bewaard blijven. Ruwe fingerprintcomponenten vermijden wij waar mogelijk of verwijderen wij binnen 30 dagen; hashes en risicosignalen bewaren wij maximaal 12 maanden, tenzij misbruiksonderzoek langer nodig maakt.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-semibold text-[#1A1A1A] mb-3">6. Cookies</h2>
              <p>
                Onze website gebruikt cookies en vergelijkbare technieken. Je kunt kiezen welke categorieën je accepteert via de cookiebanner die verschijnt bij je eerste bezoek.
              </p>
              <ul className="mt-3 space-y-3 list-none pl-0">
                {[
                  { label: 'Noodzakelijke cookies', desc: 'Altijd actief. Vereist voor het correct functioneren van de website, winkelwagen, beveiliging en het opslaan van jouw voorkeuren.' },
                  { label: 'Analytische cookies', desc: 'Alleen met jouw toestemming. Helpen ons begrijpen welke pagina’s, klikken en formulieren goed werken.' },
                  { label: 'Marketingcookies', desc: 'Alleen met jouw toestemming. Helpen campagnes te meten en relevante advertenties of doelgroepen te maken via toegestane platformen.' },
                  { label: 'Deviceherkenning', desc: 'Alleen met jouw toestemming, behalve beperkte noodzakelijke beveiligingssignalen. Helpt terugkerende apparaten, fraude en misbruik te herkennen.' },
                ].map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                    <span><strong className="text-[#1A1A1A] font-medium">{item.label}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-[18px] font-semibold text-[#1A1A1A] mb-3">7. Derde partijen</h2>
              <p>
                Wij maken gebruik van <strong className="text-[#1A1A1A] font-medium">Supabase</strong> voor opslag van wachtlijst-, order-, consent- en trackinggegevens. Supabase verwerkt gegevens in overeenstemming met de AVG en gebruikt waar nodig standaard contractbepalingen. Meer informatie: <a href="https://supabase.com/privacy" className="text-[#C9A96E] underline underline-offset-2" target="_blank" rel="noreferrer">supabase.com/privacy</a>.
              </p>
              <p className="mt-3">
                Voor betalingen gebruiken wij Mollie. Voor e-mailcommunicatie kunnen wij Resend gebruiken. Voor hosting en technische analytics gebruiken wij Vercel. Wij delen gegevens niet met derden voor verkoop, en beperken iedere verwerking tot wat nodig is voor de genoemde doeleinden of waarvoor jij toestemming hebt gegeven.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-semibold text-[#1A1A1A] mb-3">8. Jouw rechten</h2>
              <p>Op grond van de AVG heb je de volgende rechten:</p>
              <ul className="mt-3 space-y-2 list-none pl-0">
                {[
                  'Recht op inzage in jouw gegevens.',
                  'Recht op correctie van onjuiste gegevens.',
                  'Recht op verwijdering van jouw gegevens.',
                  'Recht op beperking van de verwerking.',
                  'Recht op overdraagbaarheid van gegevens.',
                  'Recht om bezwaar te maken tegen verwerking.',
                  'Recht om toestemming in te trekken.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Stuur een e-mail naar{' '}
                <a href="mailto:hallo@mauyi.nl" className="text-[#C9A96E] underline underline-offset-2">hallo@mauyi.nl</a>{' '}
                om gebruik te maken van jouw rechten. Wij reageren binnen 30 dagen.
              </p>
              <p className="mt-3">
                Je hebt ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens:{' '}
                <a href="https://autoriteitpersoonsgegevens.nl" className="text-[#C9A96E] underline underline-offset-2" target="_blank" rel="noreferrer">autoriteitpersoonsgegevens.nl</a>.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-semibold text-[#1A1A1A] mb-3">9. Beveiliging</h2>
              <p>
                Wij nemen passende technische en organisatorische maatregelen om jouw gegevens te beschermen tegen ongeautoriseerde toegang, verlies of misbruik. Alle verbindingen zijn beveiligd via HTTPS.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-semibold text-[#1A1A1A] mb-3">10. Wijzigingen</h2>
              <p>
                Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. De meest recente versie staat altijd op deze pagina met de datum van de laatste wijziging.
              </p>
            </section>

          </div>

          {/* Bottom divider + back link */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <Link href="/" className="inline-flex items-center gap-2 text-[13px] text-[#9A9590] hover:text-[#C9A96E] transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M10 6H2M6 2L2 6l4 4" />
              </svg>
              Terug naar home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
