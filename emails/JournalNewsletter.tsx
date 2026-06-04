import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import { render } from '@react-email/render'
import * as React from 'react'

interface JournalNewsletterProps {
  baseUrl?: string
  email?: string
  issueNumber?: number
}

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.mauyi.nl'

const articles = [
  {
    slug: 'zonnebescherming-skincare-routine',
    label: 'Gids',
    title: 'Zonnebescherming in je skincare routine',
    excerpt: '80–90% van huidveroudering komt niet door leeftijd — maar door UV. Dit is waarom SPF het meest onderschatte product in elke routine is.',
    readTime: '5 min',
  },
  {
    slug: 'retinol-beginners-gids',
    label: 'Gids',
    title: 'Retinol voor beginners',
    excerpt: 'Welke concentratie, hoe opbouwen en wat je niet combineert. Alles om zonder irritatie te starten.',
    readTime: '6 min',
  },
  {
    slug: 'bakuchiol-vs-retinol',
    label: 'Ingrediënten',
    title: 'Bakuchiol vs retinol: wat werkt beter?',
    excerpt: 'Klinisch onderzoek vergelijkt ze direct. Het antwoord is genuanceerder dan de marketing doet geloven.',
    readTime: '6 min',
  },
]

export default function JournalNewsletter({
  baseUrl = BASE,
  email = '',
  issueNumber = 1,
}: JournalNewsletterProps) {
  const unsubscribeUrl = `${baseUrl}/unsubscribe?email=${encodeURIComponent(email)}`
  const journalUrl = `${baseUrl}/journal`
  const shopUrl = `${baseUrl}/products/reset-serum`

  const [featured, ...rest] = articles

  return (
    <Html lang="nl">
      <Head />
      <Preview>Nieuw in het MAUYI Journal — zonnebescherming, retinol en wat echt werkt.</Preview>
      <Body style={body}>
        <Container style={container}>

          {/* ─── HEADER ─── */}
          <Section style={header}>
            <Text style={brandLabel}>MAUYI</Text>
            <Text style={headerSub}>Journal · Editie {issueNumber}</Text>
          </Section>

          {/* ─── INTRO ─── */}
          <Section style={mainBody}>
            <Text style={intro}>
              Nieuwe artikelen in het MAUYI Journal — over ingrediënten, routines
              en de wetenschap achter wat echt werkt. Geen reclame. Wel inhoud.
            </Text>

            <Hr style={divider} />

            {/* ─── FEATURED ARTICLE ─── */}
            <Text style={sectionLabel}>Uitgelicht</Text>

            <Section style={featuredCard}>
              <Text style={articleCategory}>{featured.label}</Text>
              <Text style={featuredTitle}>{featured.title}</Text>
              <Text style={articleExcerpt}>{featured.excerpt}</Text>
              <Link
                href={`${baseUrl}/journal/${featured.slug}`}
                style={readLink}
              >
                Lees artikel · {featured.readTime} →
              </Link>
            </Section>

            <Hr style={divider} />

            {/* ─── MORE ARTICLES ─── */}
            <Text style={sectionLabel}>Meer uit het Journal</Text>

            {rest.map((article) => (
              <Section key={article.slug} style={smallCard}>
                <Text style={articleCategory}>{article.label}</Text>
                <Text style={smallTitle}>{article.title}</Text>
                <Text style={articleExcerpt}>{article.excerpt}</Text>
                <Link
                  href={`${baseUrl}/journal/${article.slug}`}
                  style={readLink}
                >
                  Lees artikel · {article.readTime} →
                </Link>
              </Section>
            ))}

            <Hr style={divider} />

            {/* ─── PRODUCT CTA ─── */}
            <Section style={productSection}>
              <Text style={productLabel}>Reset Serum</Text>
              <Text style={productTitle}>
                Retinol 0.3% · Niacinamide 10% · Bakuchiol
              </Text>
              <Text style={productDesc}>
                De ingrediënten waar je net over las, in één parfumvrije formule.
              </Text>
              <Section style={{ textAlign: 'center' as const, paddingTop: '8px' }}>
                <Button href={shopUrl} style={ctaButton}>
                  Bekijk Reset Serum →
                </Button>
              </Section>
            </Section>

            <Hr style={divider} />

            {/* ─── JOURNAL LINK ─── */}
            <Section style={{ textAlign: 'center' as const }}>
              <Link href={journalUrl} style={allArticlesLink}>
                Bekijk alle Journal artikelen →
              </Link>
            </Section>

          </Section>

          {/* ─── FOOTER ─── */}
          <Section style={footer}>
            <Text style={footerText}>
              Je ontvangt dit bericht omdat je je hebt aangemeld via mauyi.nl.
            </Text>
            <Text style={footerLinks}>
              <Link href={`${baseUrl}/privacy`} style={goldLink}>Privacybeleid</Link>
              <span style={{ color: '#C8C4BF', margin: '0 8px' }}>·</span>
              <Link href={unsubscribeUrl} style={grayLink}>Uitschrijven</Link>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  )
}

export async function renderJournalNewsletterEmail(
  baseUrl: string,
  email: string,
  issueNumber?: number,
): Promise<string> {
  return await render(
    <JournalNewsletter baseUrl={baseUrl} email={email} issueNumber={issueNumber} />,
  )
}

// ─── STYLES ───────────────────────────────────────────────────────────────────

const body: React.CSSProperties = {
  margin: 0,
  padding: 0,
  backgroundColor: '#F2EFE9',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
}

const container: React.CSSProperties = {
  maxWidth: '520px',
  margin: '0 auto',
  backgroundColor: '#FFFFFF',
  borderRadius: '20px',
  overflow: 'hidden',
  border: '1px solid #E4DFD9',
}

const header: React.CSSProperties = {
  backgroundColor: '#0F0E0C',
  padding: '36px 40px',
  textAlign: 'center',
}

const brandLabel: React.CSSProperties = {
  margin: '0 0 8px',
  fontSize: '22px',
  fontWeight: 600,
  letterSpacing: '0.2em',
  color: '#FFFFFF',
}

const headerSub: React.CSSProperties = {
  margin: 0,
  fontSize: '10px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.24em',
  color: '#C9A96E',
}

const mainBody: React.CSSProperties = {
  padding: '44px 40px 40px',
}

const intro: React.CSSProperties = {
  margin: '0 0 32px',
  fontSize: '15px',
  color: '#5C5754',
  lineHeight: 1.75,
  fontWeight: 300,
}

const divider: React.CSSProperties = {
  borderColor: '#EDE9E4',
  margin: '0 0 28px',
}

const sectionLabel: React.CSSProperties = {
  margin: '0 0 16px',
  fontSize: '10px',
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '0.22em',
  color: '#C9A96E',
}

const featuredCard: React.CSSProperties = {
  backgroundColor: '#FAF8F5',
  borderRadius: '16px',
  padding: '28px 28px 24px',
  marginBottom: '28px',
  borderLeft: '3px solid #C9A96E',
}

const smallCard: React.CSSProperties = {
  backgroundColor: '#FAFAF8',
  borderRadius: '12px',
  padding: '20px 24px 18px',
  marginBottom: '12px',
  border: '1px solid #EDE9E4',
}

const articleCategory: React.CSSProperties = {
  margin: '0 0 8px',
  fontSize: '9px',
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  color: '#C9A96E',
}

const featuredTitle: React.CSSProperties = {
  margin: '0 0 12px',
  fontSize: '20px',
  fontWeight: 600,
  color: '#1A1A1A',
  lineHeight: 1.25,
  fontFamily: "Georgia, 'Times New Roman', serif",
}

const smallTitle: React.CSSProperties = {
  margin: '0 0 10px',
  fontSize: '16px',
  fontWeight: 600,
  color: '#1A1A1A',
  lineHeight: 1.3,
  fontFamily: "Georgia, 'Times New Roman', serif",
}

const articleExcerpt: React.CSSProperties = {
  margin: '0 0 14px',
  fontSize: '13px',
  color: '#6B6560',
  lineHeight: 1.7,
  fontWeight: 300,
}

const readLink: React.CSSProperties = {
  fontSize: '12px',
  fontWeight: 600,
  color: '#C9A96E',
  textDecoration: 'none',
  letterSpacing: '0.02em',
}

const productSection: React.CSSProperties = {
  textAlign: 'center' as const,
  padding: '8px 0 28px',
}

const productLabel: React.CSSProperties = {
  margin: '0 0 6px',
  fontSize: '10px',
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '0.22em',
  color: '#9A9590',
}

const productTitle: React.CSSProperties = {
  margin: '0 0 10px',
  fontSize: '18px',
  fontWeight: 600,
  color: '#1A1A1A',
  fontFamily: "Georgia, 'Times New Roman', serif",
  lineHeight: 1.3,
}

const productDesc: React.CSSProperties = {
  margin: '0 0 24px',
  fontSize: '13px',
  color: '#6B6560',
  lineHeight: 1.65,
  fontWeight: 300,
}

const ctaButton: React.CSSProperties = {
  display: 'inline-block',
  backgroundColor: '#C9A96E',
  color: '#1A1A1A',
  fontWeight: 700,
  fontSize: '14px',
  letterSpacing: '0.02em',
  textDecoration: 'none',
  borderRadius: '14px',
  padding: '14px 32px',
}

const allArticlesLink: React.CSSProperties = {
  fontSize: '13px',
  fontWeight: 600,
  color: '#9A9590',
  textDecoration: 'none',
  letterSpacing: '0.02em',
}

const footer: React.CSSProperties = {
  padding: '24px 40px',
  textAlign: 'center',
  borderTop: '1px solid #F0EDE9',
  backgroundColor: '#FAFAF8',
}

const footerText: React.CSSProperties = {
  margin: '0 0 6px',
  fontSize: '11px',
  color: '#9A9590',
  fontWeight: 300,
  lineHeight: 1.5,
}

const footerLinks: React.CSSProperties = {
  margin: 0,
  fontSize: '11px',
}

const goldLink: React.CSSProperties = {
  color: '#C9A96E',
  textDecoration: 'none',
}

const grayLink: React.CSSProperties = {
  color: '#9A9590',
  textDecoration: 'none',
}
