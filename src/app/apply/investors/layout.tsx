import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply as an Investor | NartaQ',
  description: 'Join NartaQ as an investor to discover high-potential startups through AI-powered deal sourcing. Access comprehensive due diligence reports and connect with vetted founders.',
  keywords: ['investor application', 'startup investment', 'deal sourcing', 'due diligence', 'AI matching', 'founder screening'],
  openGraph: {
    title: 'Apply as an Investor | NartaQ',
    description: 'Join NartaQ as an investor to discover high-potential startups through AI-powered deal sourcing and comprehensive due diligence.',
    type: 'website',
    url: 'https://nartaq.com/apply/investors',
    siteName: 'NartaQ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply as an Investor | NartaQ',
    description: 'Join NartaQ as an investor to discover high-potential startups through AI-powered deal sourcing.',
  },
}

export default function InvestorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}