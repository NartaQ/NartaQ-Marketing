import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Service Providers - Premium Projects & Fair Pay | NartaQ',
  description: 'Work with funded startups that value expertise. Get guaranteed payments via escrow. Build equity wealth with winning clients. Join our exclusive expert network.',
  keywords: [
    'premium consulting',
    'startup projects',
    'freelance experts',
    'consulting marketplace',
    'expert services',
    'high-paying projects',
    'startup consulting',
    'technical services',
    'business consulting',
    'elite consultants'
  ],
  openGraph: {
    title: 'For Service Providers - Premium Projects & Fair Pay | NartaQ',
    description: 'Work with funded startups that value expertise. Get guaranteed payments via escrow. Build equity wealth with winning clients.',
    images: [
      {
        url: '/images/providers-og.png',
        width: 1200,
        height: 630,
        alt: 'NartaQ for Service Providers - Premium Projects & Fair Pay',
      },
    ],
  },
  twitter: {
    title: 'For Service Providers - Premium Projects & Fair Pay | NartaQ',
    description: 'Work with funded startups that value expertise. Get guaranteed payments via escrow. Build equity wealth with winning clients.',
  },
  alternates: {
    canonical: '/solutions/providers',
  },
}

export default function ProvidersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}