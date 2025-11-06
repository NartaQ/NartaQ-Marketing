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
          We've received your application and are thrilled to have you join us as we build the platform.
        </Text>
        
        <Section style={card}>
          <Heading style={cardTitle}>You're among the first! 🎉</Heading>
          <Text style={cardText}>
            We're currently building NartaQ's matching platform and governance infrastructure.
            As one of our founding cohort members, you'll get:
          </Text>
          <ul style={list}>
            <li style={listItem}>
              <strong>Early Access:</strong> First to use the platform when we launch
            </li>
            <li style={listItem}>
              <strong>Priority Matching:</strong> Featured placement in our investor network
            </li>
            <li style={listItem}>
              <strong>DAO Infrastructure:</strong> Institutional-grade governance from day one
            </li>
            <li style={listItem}>
              <strong>Community Benefits:</strong> Shape the platform alongside other exceptional founders
            </li>
          </ul>
        </Section>
        
        <Text style={text}>
          We'll keep you updated on our progress through our website at{' '}
          <strong style={strong}>www.nartaq.com</strong>. In the meantime, make sure your pitch
          deck and traction metrics are ready—when we launch, we'll fast-track our founding cohort.
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
