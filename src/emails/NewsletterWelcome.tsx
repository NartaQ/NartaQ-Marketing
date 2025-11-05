import { Button, Heading, Section, Text } from '@react-email/components'
import * as React from 'react'
import { Layout } from './components/Layout'

interface NewsletterWelcomeProps {
  name?: string
}

export default function NewsletterWelcome({ name = '{{name}}' }: NewsletterWelcomeProps) {
  return (
    <Layout preview="Welcome to NartaQ Community 🎉">
      <Section style={content}>
        <Heading style={h1}>Welcome to NartaQ!</Heading>
        
        <Text style={text}>Hi {name},</Text>
        
        <Text style={text}>
          Thank you for joining our community! We're building the infrastructure for merit-based
          startup funding across Africa and developing countries.
        </Text>
        
        <Text style={text}>
          You'll be among the first to know about:
        </Text>
        
        <ul style={list}>
          <li style={listItem}>Platform launch announcements</li>
          <li style={listItem}>Founder and investor success stories</li>
          <li style={listItem}>Industry insights and market trends</li>
          <li style={listItem}>Exclusive early access opportunities</li>
        </ul>
        
        <Section style={buttonContainer}>
          <Button style={button} href="https://www.nartaq.com">
            Visit NartaQ
          </Button>
        </Section>
        
        <Text style={regards}>
          Best regards,
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

const list = {
  color: '#dcd7ce',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 24px',
  paddingLeft: '20px',
}

const listItem = {
  margin: '8px 0',
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

