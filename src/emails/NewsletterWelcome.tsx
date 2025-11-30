import { Button, Heading, Section, Text } from '@react-email/components'
import * as React from 'react'
import { Layout } from './components/Layout'

interface NewsletterWelcomeProps {
  name?: string
}

export default function NewsletterWelcome({ name = '{{name}}' }: NewsletterWelcomeProps) {
  const preview = "You're in. (Save this email)"
  const displayName = name && name !== '{{name}}' ? name : 'there'

  return (
    <Layout preview={preview}>
      <Section style={content}>
        <Heading style={h1}>You're in.</Heading>

        <Text style={text}>Hi {displayName},</Text>

        <Text style={text}>
          You're on the list. You'll be the first to know when we launch, and you'll get access to our best content on startup funding.
        </Text>

        <Text style={text}>
          We'll only email you when we have something valuable to share. No fluff.
        </Text>

        <Section style={buttonContainer}>
          <Button style={button} href="https://www.nartaq.com">
            Explore NartaQ
          </Button>
        </Section>

        <Text style={regards}>
          Talk soon,
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

