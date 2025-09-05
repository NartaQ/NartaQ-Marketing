import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers at NartaQ - Join the Future of Investment Technology',
  description: 'Join our pre-seed startup building AI-powered DAO creation platform. Remote-first culture, competitive equity, and opportunity to shape the future of venture capital.',
  keywords: [
    'startup jobs',
    'remote work',
    'investment technology careers',
    'DAO development',
    'AI careers',
    'venture capital tech',
    'pre-seed startup',
    'blockchain jobs'
  ],
  openGraph: {
    title: 'Careers at NartaQ - Join the Future of Investment Technology',
    description: 'Build the AI-powered DAO creation platform revolutionizing how elite investors and exceptional startups collaborate. Remote-first startup with competitive equity.',
   
    siteName: 'NartaQ',
  },
  twitter: {
    title: 'Careers at NartaQ - Join the Future of Investment Technology',
    description: 'Build the AI-powered DAO creation platform revolutionizing how elite investors and exceptional startups collaborate.',
  },
  alternates: {
    canonical: 'https://www.nartaq.com/careers',
  },
}
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children;
}