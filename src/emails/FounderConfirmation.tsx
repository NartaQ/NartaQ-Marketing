import { Button, Heading, Section, Text } from '@react-email/components'
import * as React from 'react'
import { Layout } from './components/Layout'

interface FounderConfirmationProps {
  founderName: string
  companyName: string
  memberNumber: number
}

export default function FounderConfirmation({
  founderName = '{{founderName}}',
  companyName = '{{companyName}}',
  memberNumber = 127,
}: FounderConfirmationProps) {
  const preview = `You're in, ${founderName}. (Save this email)`
  const founderNameDisplay = founderName || 'founder'

  return (
    <Layout preview={preview}>
      <Section style={content}>
        <Heading style={h1}>You're Founding Member #{memberNumber} of 250.</Heading>

        <Text style={text}>Hey {founderNameDisplay},</Text>

        <Text style={text}>
          Welcome to NartaQ. Your application for <strong style={strong}>{companyName}</strong> is confirmed. You're officially one of the first 250 founding members.
        </Text>

        <Section style={card}>
          <Heading style={cardTitle}>Here's what happens next:</Heading>
          <ol style={orderedList}>
            <li style={listItem}>We'll send you platform access asap.</li>
            <li style={listItem}>You'll get an onboarding call (15 min, optional).</li>
            <li style={listItem}>Your AI matching starts immediately.</li>
          </ol>
        </Section>

        <Text style={text}>
          Questions? Just send me an email to <a href="mailto:contact@nartaq.com">contact@nartaq.com</a>. I read every one.
        </Text>

        <Text style={regards}>
          - Riadh Jouini
          <br />
          Co-Founder, NartaQ
        </Text>

        <Section style={{ borderTop: '1px solid #333333', marginTop: '32px', paddingTop: '32px' }}>
          <Text style={{ ...text, fontSize: '14px', fontStyle: 'italic' }}>
            P.S. We're at {memberNumber}/250. Tell your founder friends before we're full.
          </Text>
        </Section>

      </Section>
    </Layout>
  )
}

const content = {
  padding: '40px 20px',
}

const h1 = {
  color: '#dcd7ce',
  fontSize: '28px',
  fontWeight: '700',
  lineHeight: '1.3',
  margin: '0 0 24px',
}

const text = {
  color: '#dcd7ce',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px',
}

const strong = {
  color: '#a98b5d',
  fontWeight: '600',
}

const card = {
  backgroundColor: '#111111',
  border: '1px solid #333333',
  borderRadius: '12px',
  padding: '24px',
  margin: '24px 0',
}

const cardTitle = {
  color: '#a98b5d',
  fontSize: '20px',
  fontWeight: '600',
  margin: '0 0 16px',
}

const orderedList = {
  color: '#dcd7ce',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0',
  paddingLeft: '20px',
}

const list = {
  color: '#dcd7ce',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0',
  paddingLeft: '20px',
}

const cardText = {
  color: '#dcd7ce',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0 0 12px',
}

const listItem = {
  margin: '12px 0',
}

const buttonContainer = {
  margin: '32px 0',
  textAlign: 'center' as const,
}

const button = {
  backgroundColor: '#a98b5d',
  borderRadius: '8px',
  color: '#000000',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 32px',
}

const regards = {
  color: '#dcd7ce',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '32px 0 0',
}
