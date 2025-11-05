import { Button, Heading, Section, Text } from '@react-email/components'
import * as React from 'react'
import { Layout } from './components/Layout'

interface FounderConfirmationProps {
  founderName: string
  companyName: string
}

export default function FounderConfirmation({
  founderName = '{{founderName}}',
  companyName = '{{companyName}}',
}: FounderConfirmationProps) {
  return (
    <Layout preview={`Application Received for ${companyName} ✓`}>
      <Section style={content}>
        <Heading style={h1}>Application Received!</Heading>
        
        <Text style={text}>Hi {founderName},</Text>
        
        <Text style={text}>
          Thank you for applying to NartaQ with <strong style={strong}>{companyName}</strong>.
          We've received your application and our team is reviewing it.
        </Text>
        
        <Section style={card}>
          <Heading style={cardTitle}>What happens next?</Heading>
          <ol style={orderedList}>
            <li style={listItem}>
              <strong>Review (3-5 business days):</strong> Our team evaluates your application
              based on market opportunity, traction, and team strength.
            </li>
            <li style={listItem}>
              <strong>AI Matching:</strong> If approved, we match you with relevant investors
              using our proprietary algorithm.
            </li>
            <li style={listItem}>
              <strong>Investor Introductions:</strong> Connect with interested investors through
              our platform.
            </li>
            <li style={listItem}>
              <strong>DAO Setup:</strong> Get institutional-grade governance infrastructure from
              day one.
            </li>
          </ol>
        </Section>
        
        <Text style={text}>
          In the meantime, make sure your pitch deck and metrics are up to date. Strong traction
          data significantly increases your chances of getting matched.
        </Text>
        
        <Section style={buttonContainer}>
          <Button style={button} href="https://www.nartaq.com/for-founders">
            Learn More
          </Button>
        </Section>
        
        <Text style={regards}>
          Best of luck,
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

const orderedList = {
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
