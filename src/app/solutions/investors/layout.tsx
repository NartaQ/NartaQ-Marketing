import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Investors - Find Next Unicorns Early | NartaQ',
  description: 'Discover pre-vetted startups with proven traction. Access exclusive deal flow in the France-Tunisia corridor. Connect with startups that match your investment thesis.',
  keywords: [
    'startup investment',
    'deal flow platform',
    'venture capital',
    'angel investing',
    'startup deals',
    'investment opportunities',
    'France Tunisia deals',
    'early stage investing',
    'startup screening',
    'investment network'
  ],
  openGraph: {
    title: 'For Investors - Find Next Unicorns Early | NartaQ',
    description: 'Discover pre-vetted startups with proven traction. Access exclusive deal flow in the France-Tunisia corridor.',
    images: [
      {
        url: '/images/investors-og.png',
        width: 1200,
        height: 630,
        alt: 'NartaQ for Investors - Find Next Unicorns Early',
      },
    ],
  },
  twitter: {
    title: 'For Investors - Find Next Unicorns Early | NartaQ',
    description: 'Discover pre-vetted startups with proven traction. Access exclusive deal flow in the France-Tunisia corridor.',
  },
  alternates: {
    canonical: '/solutions/investors',
  },
}

export default function InvestorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}