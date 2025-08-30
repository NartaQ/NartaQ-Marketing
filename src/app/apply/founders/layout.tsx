import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply as a Founder | NartaQ',
  description: 'Join NartaQ as a founder seeking investment. Connect with qualified investors, get AI-powered valuations, and accelerate your fundraising process through our intelligent matching platform.',
  keywords: ['founder application', 'startup funding', 'investor matching', 'fundraising platform', 'AI valuation', 'due diligence'],
  openGraph: {
    title: 'Apply as a Founder | NartaQ',
    description: 'Join NartaQ as a founder seeking investment. Connect with qualified investors and accelerate your fundraising through AI-powered matching.',
    type: 'website',
    url: 'https://nartaq.com/apply/founders',
    siteName: 'NartaQ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply as a Founder | NartaQ',
    description: 'Join NartaQ as a founder seeking investment. Connect with qualified investors and accelerate your fundraising.',
  },
}

export default function FoundersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}