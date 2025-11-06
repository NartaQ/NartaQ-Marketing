import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
} from '@react-email/components'
import * as React from 'react'

// NartaQ Logo - Using SendGrid CDN for maximum email client compatibility
// SVG inline doesn't work in Gmail, Outlook, and many other email clients
const NartaqLogo = () => (
  <Img
    src="http://cdn.mcauto-images-production.sendgrid.net/d4d3fcd03090806e/15522205-ff20-4ea7-9b74-d1c529a97c26/166x32.png"
    width="166"
    height="32"
    alt="NartaQ"
    style={{
      display: 'block',
      margin: '0 auto',
      maxWidth: '100%',
      height: 'auto',
    }}
  />
)

interface LayoutProps {
  preview: string
  children: React.ReactNode
}

export const Layout = ({ preview, children }: LayoutProps) => {
  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
      </Head>
      <Preview>{preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Logo */}
          <Section style={header}>
            <NartaqLogo />
          </Section>

          {/* Content */}
          {children}

          {/* Footer */}
          <Section style={footer}>
            <p style={footerText}>
              NartaQ SAS • 60 rue François 1er, 75008 Paris, France
            </p>
            <p style={footerText}>
              RCS Paris 992 848 242
            </p>
            <p style={footerTextSmall}>
              This email was sent to you because you applied to NartaQ or subscribed to our updates.
              This platform does not provide investment advice. Consult with qualified professionals
              before making investment decisions.
            </p>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#000000',
  fontFamily: 'Helvetica, Arial, sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0',
  maxWidth: '600px',
  backgroundColor: '#000000',
}

const header = {
  padding: '32px 20px',
  textAlign: 'center' as const,
  borderBottom: '1px solid #a98b5d',
}

const footer = {
  padding: '32px 20px',
  borderTop: '1px solid #333333',
  marginTop: '40px',
}

const footerText = {
  margin: '8px 0',
  color: '#888888',
  fontSize: '14px',
  fontFamily: 'Helvetica, Arial, sans-serif',
  lineHeight: '20px',
  textAlign: 'center' as const,
}

const footerTextSmall = {
  margin: '16px 0 0',
  color: '#666666',
  fontSize: '12px',
  fontFamily: 'Helvetica, Arial, sans-serif',
  lineHeight: '18px',
  textAlign: 'center' as const,
}
