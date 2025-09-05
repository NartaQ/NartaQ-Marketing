import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Careers - Join the NartaQ Team',
    description: 'Join NartaQ and help build the future of venture matchmaking. Explore career opportunities with our AI-powered platform connecting elite investors with exceptional startups.',
    keywords: [
        'NartaQ careers',
        'venture capital jobs',
        'startup jobs',
        'AI platform careers',
        'remote jobs',
        'tech careers',
        'community manager jobs'
    ],
    openGraph: {
        title: 'Careers - Join the NartaQ Team',
        description: 'Join NartaQ and help build the future of venture matchmaking. Explore career opportunities with our AI-powered platform.',
        siteName: 'NartaQ',
    },
    twitter: {
        title: 'Careers - Join the NartaQ Team',
        description: 'Join NartaQ and help build the future of venture matchmaking. Explore career opportunities with our AI-powered platform.',
    },
    alternates: {
        canonical: 'https://www.nartaq.com/careers',
    },
    robots: {
        index: true,
        follow: true,
    },
}
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children;
}