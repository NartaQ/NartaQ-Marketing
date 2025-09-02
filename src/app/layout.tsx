import type { Metadata, Viewport } from 'next'
import Script from 'next/script'

import Footer from '@/components/pages/Footer'
import LenisProvider from '@/components/pages/LenisProvider'
import IntercomProvider from '@/components/lazyLoadIntercom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import 'lenis/dist/lenis.css'
import UnifiedNavigation from '@/components/pages/UnifiedNavigation'
import {
  organizationSchema,
  serviceSchema,
  websiteSchema,
} from '@/lib/structured-data'

const fontSans = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

const fontMono = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    default:
      'NartaQ - The AI-Powered Protocol for Startup Funding | Venture Matchmaking',
    template: '%s | NartaQ',
  },
  description:
    'AI-powered venture matchmaking protocol. Connect founders with the right investors through trustless matching, automated deal execution, and guided closing. Decentralized, democratic, data-driven.',
  keywords: [
    'AI venture matching',
    'startup funding protocol',
    'venture capital automation',
    'dealflow matching',
    'startup investor matching',
    'AI powered funding',
    'decentralized venture capital',
    'automated deal execution',
    'venture matchmaking',
    'startup funding platform',
    'investor startup matching',
    'AI deal sourcing',
  ],
  authors: [{ name: 'NartaQ' }],
  creator: 'NartaQ',
  publisher: 'NartaQ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.nartaq.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NartaQ - Premium Investment & Talent Platform',
    description:
      'Elite platform connecting funded startups with smart investors and expert talent. Get investment, hire A-players, or find premium projects.',
    url: 'https://www.nartaq.com',
    siteName: 'NartaQ',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NartaQ - Premium Investment & Talent Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NartaQ - Premium Investment & Talent Platform',
    description:
      'Elite platform connecting funded startups with smart investors and expert talent. Get investment, hire A-players, or find premium projects.',
    images: ['/images/twitter-image.png'],
    creator: '@nartaq',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <head>
        <meta name='apple-mobile-web-app-title' content='NartaQ' />
        <meta name='application-name' content='NartaQ' />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              websiteSchema,
              serviceSchema,
            ]),
          }}
        />
      </head>
      <body
        className={`w-screen overflow-x-hidden ${fontSans.variable} ${fontMono.variable} antialiased bg-black text-white`}
      >
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-CZ3D93J3CR'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CZ3D93J3CR');
          `}
        </Script>
        <Analytics />
        <SpeedInsights />
        <LenisProvider>
          <UnifiedNavigation />
          <main className='main mt-[var(--header-height)]'>{children}</main>
          <Footer />
        </LenisProvider>
        <IntercomProvider />
      </body>
    </html>
  )
}
