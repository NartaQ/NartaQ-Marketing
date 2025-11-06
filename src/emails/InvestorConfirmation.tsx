import { Button, Heading, Section, Text } from '@react-email/components'
import * as React from 'react'
import { Layout } from './components/Layout'

interface InvestorConfirmationProps {
  investorName: string
  investorType: string
}

export default function InvestorConfirmation({
  investorName = '{{investorName}}',
  investorType = '{{investorType}}',
}: InvestorConfirmationProps) {
  // Default to "investor" if type is missing or empty
  const displayType = investorType && investorType !== '{{investorType}}' ? investorType : 'investor'
  
  return (
    <Layout preview="Welcome to NartaQ Investor Network ✓">
      <Section style={content}>
        <Heading style={h1}>Welcome to NartaQ!</Heading>
        
        <Text style={text}>Hi {investorName},</Text>
        
        <Text style={text}>
          Thank you for joining NartaQ as a <strong style={strong}>{displayType}</strong>.
          We're delighted to have you as one of our founding investors as we build the platform.
        </Text>
        
        <Section style={card}>
          <Heading style={cardTitle}>Welcome to the founding cohort! 🎉</Heading>
          <Text style={cardText}>
            We're currently building NartaQ's AI-powered matching engine and blockchain infrastructure.
            As a founding member, you'll benefit from:
          </Text>
          <ul style={list}>
            <li style={listItem}>
              <strong>First Access:</strong> Priority access to pre-vetted startups when we launch
            </li>
            <li style={listItem}>
              <strong>Premium Deal Flow:</strong> Curated founders from Africa and emerging markets
            </li>
            <li style={listItem}>
              <strong>Transparent Infrastructure:</strong> Blockchain-based governance and cap tables
            </li>
            <li style={listItem}>
              <strong>Network Benefits:</strong> Connect with other exceptional investors in our community
            </li>
          </ul>
        </Section>
        
        <Text style={text}>
          We'll keep you updated on our launch progress through our website at{' '}
          <strong style={strong}>www.nartaq.com</strong>. Stay tuned for exciting opportunities!
        </Text>
        
        <Section style={buttonContainer}>
          <Button style={button} href="https://www.nartaq.com/for-investors">
            Explore Opportunities
          </Button>
        </Section>
        
        <Text style={regards}>
          Looking forward to working together,
          <br />
          The NartaQ Team
        </Text>
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
