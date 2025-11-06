import { Button, Heading, Section, Text } from '@react-email/components'
import * as React from 'react'
import { Layout } from './components/Layout'

interface CareerConfirmationProps {
  applicantName: string
  position: string
}

export default function CareerConfirmation({
  applicantName = '{{applicantName}}',
  position = '{{position}}',
}: CareerConfirmationProps) {
  return (
    <Layout preview={`Application Received for ${position} ✓`}>
      <Section style={content}>
        <Heading style={h1}>Application Received!</Heading>
        
        <Text style={text}>Hi {applicantName},</Text>
        
        <Text style={text}>
          Thank you for your interest in the <strong style={strong}>{position}</strong> position
          at NartaQ. We've received your application and are excited about your interest in joining us!
        </Text>
        
        <Section style={card}>
          <Heading style={cardTitle}>Join us in building the future 🚀</Heading>
          <Text style={cardText}>
            We're currently building NartaQ's platform to democratize startup funding across Africa
            and developing countries. As an early team member, you'll have the opportunity to:
          </Text>
          <ul style={list}>
            <li style={listItem}>
              <strong>Shape the Product:</strong> Build features that will impact thousands of founders and investors
            </li>
            <li style={listItem}>
              <strong>Work with Cutting-Edge Tech:</strong> AI matching, blockchain governance, and Web3 infrastructure
            </li>
            <li style={listItem}>
              <strong>Make Real Impact:</strong> Help unlock capital for exceptional founders in emerging markets
            </li>
            <li style={listItem}>
              <strong>Founding Team Benefits:</strong> Equity, ownership, and the chance to build something meaningful
            </li>
          </ul>
        </Section>
        
        <Text style={text}>
          Our hiring team will review your application and reach out if there's a good fit.
          Follow our progress at <strong style={strong}>www.nartaq.com</strong> as we build!
        </Text>
        
        <Section style={buttonContainer}>
          <Button style={button} href="https://www.nartaq.com/about">
            Learn More About Us
          </Button>
        </Section>
        
        <Text style={regards}>
          Thank you for your interest,
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

const cardText = {
  color: '#dcd7ce',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0 0 12px',
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
