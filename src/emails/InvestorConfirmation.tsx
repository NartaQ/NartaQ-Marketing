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
          We're excited to connect you with exceptional founders across Africa and developing countries.
        </Text>
        
        <Section style={card}>
          <Heading style={cardTitle}>What you get access to:</Heading>
          <ul style={list}>
            <li style={listItem}>
              <strong>Curated Deal Flow:</strong> Pre-vetted startups with strong fundamentals
              and verified traction metrics
            </li>
            <li style={listItem}>
              <strong>AI-Powered Matching:</strong> Get matched with startups aligned to your
              sector expertise and stage focus
            </li>
            <li style={listItem}>
              <strong>Full Transparency:</strong> Blockchain-based cap tables with real-time
              equity tracking
            </li>
            <li style={listItem}>
              <strong>Early Access:</strong> First look at high-potential deals in emerging markets
            </li>
          </ul>
        </Section>
        
        <Text style={text}>
          Our team is reviewing your profile and will notify you when we have relevant opportunities
          that match your investment criteria.
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
