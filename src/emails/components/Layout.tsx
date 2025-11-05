import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
} from '@react-email/components'
import * as React from 'react'

// NartaQ Logo SVG Component - Inline for maximum email client compatibility
const NartaqLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="166" height="32" style={{ display: 'block', margin: '0 auto' }}>
    <path d="m30.3 31.68-14.52-8.87V8.87l13.26 7.92V.63L30.3 0ZM13.57 7.61 1.27 0v31.68h1.25V14.9l11.05 6.65Zm0 0" style={{ stroke: 'none', fillRule: 'evenodd', fill: '#fff', fillOpacity: 1 }} />
    <path d="M29.04.63 30.3 0h-1.26c-5.06 0-11.05 2.22-13.26 8.55C17.98 7.92 29.04.63 29.04.63ZM2.52 31.05l-1.26.63h1.26c5.05 0 10.73-2.22 13.26-8.55-2.21.63-13.26 7.92-13.26 7.92Zm0 0" style={{ stroke: 'none', fillRule: 'evenodd', fill: '#a98b5d', fillOpacity: 1 }} />
    <path d="M62.8 4.44v.63l-1.26.63-.95 1.27V26.3a6.2 6.2 0 0 0-.63-.32l-.94.32L45.76 9.5v11.73l.31 2.53.64 1.27 2.2.32v.63h-1.57a55.54 55.54 0 0 0-4.42 0v-.63l1.58-.32.63-1.27V6.02l-.63-.63-1.58-.32v-.63c1.79.08 3.58.08 5.37 0L59.96 19V9.5l-.32-2.54-.62-1.27-2.22-.63v-.63c2 .07 4 .07 6 0Zm11.68 0 7.26 19 .94 1.6.95.3v.64h-4.42a124.3 124.3 0 0 0-4.73 0v-.63l1.9-.32v-2.22L71 8.87l.63-.95-4.42 12.04-.95 2.85v1.58l.95.96h1.58v.63c-.63-.02-1.26-.02-1.9 0h-4.1v-.63l1.27-.64 1.57-2.53 6.63-17.74h2.21Zm2.2 12.99v.63h-9.14l.31-.63Zm7.27-13 2.2.32h2.53c1.58-.07 3.16-.18 4.73-.31l4.74.63 2.52 1.9.95 2.85-.32 2.22a4.2 4.2 0 0 1-1.57 1.9l-2.53 1.27c-1.26.63-2.84.63-4.41.63h-3.16v-.63h2.84l2.52-.64a2.13 2.13 0 0 0 1.26-1.9l.32-2.53c0-1.59 0-2.85-.63-3.8a4 4 0 0 0-2.84-1.27c-.95 0-1.58.32-1.58.63l-.31 2.22V24.4l.63.96h1.57v.63h-2.2a102.3 102.3 0 0 0-7.26 0v-.63h1.57l.64-.96V6.02l-.64-.63-1.57-.32Zm5.68 10.78c1.8.05 3.6.27 5.36.63 1.9 0 3.16.32 4.1.95.95.64 1.27 1.59 1.58 2.85l.63 3.17.63 1.9.95.32h.63l.63-.64.32.32c-.96 1.3-2.5 2-4.1 1.9-.95 0-1.9-.31-2.53-.95-.63-.31-1.26-1.27-1.58-2.53l-.31-2.85-.63-2.22c-.32-.63-.32-1.27-.95-1.58l-1.26-.64h-3.47Zm33.76-10.77-.31 3.17v2.21a27.4 27.4 0 0 0 0 2.22h-.63c-.32-1.58-.63-3.17-1.26-4.12a3.25 3.25 0 0 0-1.58-1.9c-.95-.63-1.58-.63-2.53-.63h-.63v19l1.26.96h1.9v.63h-11.36v-.63h2.2l.95-.96v-19h-.63c-.95 0-1.57 0-2.2.63-.95.32-1.27.95-1.9 1.9l-1.26 4.12h-.63V7.6a53.34 53.34 0 0 0-.32-3.17c2.2.11 4.42.22 6.63.31h6c2.1-.07 4.2-.17 6.3-.31Zm10.1 0 7.26 19 .95 1.6.94.3v.64h-4.41a106.1 106.1 0 0 0-4.73 0v-.63l1.89-.32v-2.22l-5.37-13.94.63-.95-4.42 12.04-.94 2.85v1.58l.94.96h1.58v.63c-.63-.02-1.26-.02-1.89 0h-4.1v-.63l1.26-.64 1.26-2.53 6.95-17.74h2.21Zm2.21 12.99v.63h-9.15l.32-.63Zm16.73 8.87-3.79-.95a10.9 10.9 0 0 1-3.78-3.8 12.9 12.9 0 0 1-1.27-6.03c0-2.21.32-4.43 1.27-6.02a10.1 10.1 0 0 1 9.46-5.38c2.21 0 4.1.32 5.68 1.27s2.84 2.22 3.79 3.8a15.5 15.5 0 0 1 1.26 6.02c0 2.22-.63 4.12-1.57 6.02-.64 1.58-1.9 2.85-3.8 3.8-1.25.95-2.83 1.27-4.73 1.58l1.26.64c.95.95 1.9 1.58 4.43 1.27a12.01 12.01 0 0 0 5.36-2.54l-.95 2.85-1.26 1.9-1.58.64-2.2.31c-3.16 0-6-2.85-7.58-5.38Zm1.58-21.55c-.95 0-1.9.32-2.84 1.27a7.23 7.23 0 0 0-1.9 3.8 21.08 21.08 0 0 0 0 11.09 11.14 11.14 0 0 0 2.21 3.8c.95.95 1.9 1.27 2.84 1.27 1.27 0 2.21-.63 2.84-1.27.95-.95 1.58-2.21 2.21-3.8.99-3.75.88-7.71-.31-11.4-.32-1.59-1.27-2.54-1.9-3.49a4.05 4.05 0 0 0-3.15-1.27Zm0 0" style={{ stroke: 'none', fillRule: 'nonzero', fill: '#fff', fillOpacity: 1 }} />
    <path d="m152.43 26.3-3.79-.95a10.9 10.9 0 0 1-3.78-3.8 12.9 12.9 0 0 1-1.27-6.03c0-2.21.32-4.43 1.27-6.02a10.1 10.1 0 0 1 9.46-5.38c2.21 0 4.1.32 5.68 1.27s2.84 2.22 3.79 3.8a15.5 15.5 0 0 1 1.26 6.02c0 2.22-.63 4.12-1.57 6.02-.64 1.58-1.9 2.85-3.8 3.8-1.25.95-2.83 1.27-4.73 1.58l1.26.64c.95.95 1.9 1.58 4.43 1.27a12.01 12.01 0 0 0 5.36-2.54l-.95 2.85-1.26 1.9-1.58.64-2.2.31c-3.16 0-6-2.85-7.58-5.38Zm1.58-21.55c-.95 0-1.9.32-2.84 1.27a7.23 7.23 0 0 0-1.9 3.8 21.08 21.08 0 0 0 0 11.09 11.14 11.14 0 0 0 2.21 3.8c.95.95 1.9 1.27 2.84 1.27 1.27 0 2.21-.63 2.84-1.27.95-.95 1.58-2.21 2.21-3.8.99-3.75.88-7.71-.31-11.4-.32-1.59-1.27-2.54-1.9-3.49a4.05 4.05 0 0 0-3.15-1.27Zm0 0" style={{ stroke: 'none', fillRule: 'nonzero', fill: '#a98b5d', fillOpacity: 1 }} />
  </svg>
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
