import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'FAQ - Frequently Asked Questions about NartaQ',
    description: 'Find answers to common questions about NartaQ, our AI-powered venture matchmaking platform, and how we connect elite investors with exceptional startups.',
    keywords: [
        'NartaQ FAQ',
        'venture capital questions',
        'startup funding FAQ',
        'AI matchmaking questions',
        'investor questions',
        'founder questions',
        'venture capital platform FAQ'
    ],
    openGraph: {
        title: 'FAQ - Frequently Asked Questions about NartaQ',
        description: 'Find answers to common questions about NartaQ, our AI-powered venture matchmaking platform.',
        siteName: 'NartaQ',
    },
    twitter: {
        title: 'FAQ - Frequently Asked Questions about NartaQ',
        description: 'Find answers to common questions about NartaQ, our AI-powered venture matchmaking platform.',
    },
    alternates: {
        canonical: 'https://www.nartaq.com/faq',
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