import type { Metadata } from "next";

import "./globals.css";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import {
  organizationSchema,
  websiteSchema,
  serviceSchema,
} from '@/lib/structured-data'

const fontSans = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
  authors: [{ name: "NartaQ" }],
  creator: "NartaQ",
  publisher: "NartaQ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nartaq.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: 'NartaQ - Premium Investment & Talent Platform',
    description:
      'Elite platform connecting funded startups with smart investors and expert talent. Get investment, hire A-players, or find premium projects.',
    url: 'https://nartaq.com',
    siteName: 'NartaQ',
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "NartaQ - Premium Investment & Talent Platform",
      },
    ],
    locale: "en_US",
    type: "website",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="NartaQ" />
        <meta name="application-name" content="NartaQ" />
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
        className={`${fontSans.variable} ${fontMono.variable} antialiased bg-black text-white`}
      >
        <Analytics />
        <SpeedInsights />
        <Header />
        <main className='mt-[var(--header-height)]'>
          {/* <Spotlight /> */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
