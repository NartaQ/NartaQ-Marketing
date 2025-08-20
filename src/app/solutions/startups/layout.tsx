import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Startups - Get Funded & Hire A-Players | NartaQ',
  description: 'Connect with smart investors who fund your stage and sector. Hire A-player talent without equity dilution. Skip 18 months of fundraising with our exclusive network.',
  keywords: [
    'startup funding',
    'get investment',
    'hire developers',
    'startup talent',
    'venture capital',
    'angel investors',
    'startup services',
    'equity-free hiring',
    'startup experts',
    'funding platform'
  ],
  openGraph: {
    title: 'For Startups - Get Funded & Hire A-Players | NartaQ',
    description: 'Connect with smart investors who fund your stage and sector. Hire A-player talent without equity dilution.',
    images: [
      {
        url: '/images/startups-og.png',
        width: 1200,
        height: 630,
        alt: 'NartaQ for Startups - Get Funded & Hire A-Players',
      },
    ],
  },
  twitter: {
    title: 'For Startups - Get Funded & Hire A-Players | NartaQ',
    description: 'Connect with smart investors who fund your stage and sector. Hire A-player talent without equity dilution.',
  },
  alternates: {
    canonical: '/solutions/startups',
  },
}

export default function StartupsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}