import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import { render } from '@react-email/render'
import * as React from 'react'

interface WaitlistConfirmationProps {
  baseUrl?: string
  email?: string
}

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.mauyi.nl'
const DISCOUNT_CODE = 'MAUYI15'

export default function WaitlistConfirmation({
  baseUrl = BASE,
  email = '',
}: WaitlistConfirmationProps) {
  const shopUrl = `${baseUrl}/products/reset-serum`
  const privacyUrl = `${baseUrl}/privacy`
  const unsubscribeUrl = `${baseUrl}/unsubscribe?email=${encodeURIComponent(email)}`

  return (
    <Html lang="nl">
      <Head />
      <Preview>Je kortingscode: {DISCOUNT_CODE} — 15% korting op je eerste bestelling bij MAUYI</Preview>
      <Body style={body}>
        <Container style={container}>

          {/* ─── HEADER ─── */}
          <Section style={header}>
            <Text style={brandLabel}>MAUYI</Text>
            <Text style={headerSub}>Welkom bij de nieuwsbrief</Text>
          </Section>

          {/* ─── MAIN BODY ─── */}
          <Section style={mainBody}>

            <Heading as="h1" style={headline}>
              Fijn dat je erbij bent.
            </Heading>

            <Text style={intro}>
              Je staat nu ingeschreven voor de MAUYI nieuwsbrief. Je ontvangt nieuwe artikelen
              over huidverzorging en ingrediënten, en als eerste updates over nieuwe producten.
            </Text>

            <Hr style={divider} />

            {/* ─── DISCOUNT CODE ─── */}
            <Text style={codeLabel}>Jouw kortingscode</Text>

            <Section style={codeBox}>
              <Text style={codeText}>{DISCOUNT_CODE}</Text>
              <Text style={codeSubtext}>15% korting op je eerste bestelling</Text>
            </Section>

            <Text style={codeHint}>
              Voer deze code in bij het afrekenen op mauyi.nl. Geldig op alle producten.
            </Text>

            <Hr style={divider} />

            {/* ─── CTA ─── */}
            <Section style={{ textAlign: 'center' as const, paddingTop: '8px' }}>
              <Button href={shopUrl} style={ctaButton}>
                Bekijk Reset Serum →
              </Button>
            </Section>

            <Text style={productHint}>
              Reset Serum · Retinol 0.3% + Niacinamide 10% + Bakuchiol · Parfumvrij
            </Text>

          </Section>

          {/* ─── FOOTER ─── */}
          <Section style={footer}>
            <Text style={footerText}>
              Je ontvangt dit bericht omdat je je hebt aangemeld via mauyi.nl.
            </Text>
            <Text style={footerLinks}>
              <Link href={privacyUrl} style={goldLink}>Privacybeleid</Link>
              <span style={{ color: '#C8C4BF', margin: '0 8px' }}>·</span>
              <Link href={unsubscribeUrl} style={grayLink}>Uitschrijven</Link>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  )
}

export async function renderWaitlistEmail(baseUrl: string, email: string): Promise<string> {
  return await render(<WaitlistConfirmation baseUrl={baseUrl} email={email} />)
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

const headline: React.CSSProperties = {
  margin: '0 0 20px',
  fontSize: '28px',
  fontWeight: 600,
  color: '#1A1A1A',
  fontFamily: "Georgia, 'Times New Roman', serif",
  lineHeight: 1.2,
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

const codeLabel: React.CSSProperties = {
  margin: '0 0 12px',
  fontSize: '10px',
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  color: '#9A9590',
}

const codeBox: React.CSSProperties = {
  backgroundColor: '#0F0E0C',
  borderRadius: '14px',
  padding: '24px 32px',
  textAlign: 'center',
  marginBottom: '16px',
}

const codeText: React.CSSProperties = {
  margin: '0 0 6px',
  fontSize: '32px',
  fontWeight: 700,
  letterSpacing: '0.18em',
  color: '#C9A96E',
  fontFamily: "Georgia, 'Times New Roman', serif",
}

const codeSubtext: React.CSSProperties = {
  margin: 0,
  fontSize: '12px',
  color: '#9A9590',
  letterSpacing: '0.04em',
  fontWeight: 300,
}

const codeHint: React.CSSProperties = {
  margin: '0 0 32px',
  fontSize: '13px',
  color: '#9A9590',
  lineHeight: 1.6,
  fontWeight: 300,
  textAlign: 'center' as const,
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

const productHint: React.CSSProperties = {
  margin: '16px 0 0',
  fontSize: '11px',
  color: '#B8B4B0',
  textAlign: 'center' as const,
  letterSpacing: '0.02em',
  fontWeight: 300,
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
