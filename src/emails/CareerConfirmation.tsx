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
          at NartaQ. We've received your application and our team is reviewing it.
        </Text>
        
        <Section style={card}>
          <Heading style={cardTitle}>About NartaQ</Heading>
          <Text style={cardText}>
            We're building the infrastructure for merit-based startup funding across Africa
            and developing countries. Our mission is to connect exceptional founders with the
            right investors, regardless of geography or network.
          </Text>
          <Text style={cardText}>
            We're looking for talented individuals who are passionate about democratizing access
            to capital and want to make a real impact in emerging markets.
          </Text>
        </Section>
        
        <Text style={text}>
          Our hiring team will review your application and reach out if there's a good fit.
          This typically takes 5-7 business days.
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
