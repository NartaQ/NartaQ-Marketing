import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NartaQ Talks - Where Capital Meets Vision | Investment Podcast',
  description: 'Join us for deep conversations with the world\'s leading investors, fund managers, and financial innovators. Uncover the strategies, insights, and stories behind successful capital allocation.',
  keywords: ['podcast', 'investing', 'venture capital', 'finance', 'hedge funds', 'fintech', 'NartaQ'],
  openGraph: {
    title: 'NartaQ Talks - Where Capital Meets Vision',
    description: 'Deep conversations with leading investors, fund managers, and financial innovators.',
    type: 'website',
    images: [
      {
        url: '/images/NartaQ Talks/Group 13.svg',
        width: 532,
        height: 532,
        alt: 'NartaQ Talks Podcast'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NartaQ Talks - Where Capital Meets Vision',
    description: 'Deep conversations with leading investors, fund managers, and financial innovators.',
    images: ['/images/NartaQ Talks/Group 13.svg']
  }
}

export default function TalksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
