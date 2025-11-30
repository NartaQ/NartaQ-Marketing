import { Button, Heading, Section, Text } from '@react-email/components'
import * as React from 'react'
import { Layout } from './components/Layout'

interface InvestorConfirmationProps {
  investorName: string
  investorType: string
  memberNumber: number
}

export default function InvestorConfirmation({
  investorName = '{{investorName}}',
  investorType = '{{investorType}}',
  memberNumber = 127,
}: InvestorConfirmationProps) {
  const preview = `You're in, ${investorName}. (Save this email)`
  const investorNameDisplay = investorName || 'investor'

  return (
    <Layout preview={preview}>
      <Section style={content}>
        <Heading style={h1}>You're Founding Member #{memberNumber} of 250.</Heading>

        <Text style={text}>Hey {investorNameDisplay},</Text>

        <Text style={text}>
          Welcome to NartaQ. Your application as a <strong style={strong}>{investorType}</strong> is confirmed. You're officially one of the first 250 founding members.
        </Text>

        <Section style={card}>
          <Heading style={cardTitle}>Here's what happens next:</Heading>
          <ul style={list}>
            <li style={listItem}>
              <strong>Early Access:</strong> You'll get first look at our curated deal flow.
            </li>
            <li style={listItem}>
              <strong>Priority Access:</strong> We'll send you high-potential startups that match your thesis before anyone else.
            </li>
            <li style={listItem}>
              <strong>Community:</strong> Connect with other top-tier investors and founders.
            </li>
          </ul>
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
            P.S. We're at {memberNumber}/250. Tell your investor friends before we're full.
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
