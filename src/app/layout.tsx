import type { Metadata, Viewport } from 'next'

import Footer from '@/components/pages/Footer'
import IntercomProvider from '@/components/lazyLoadIntercom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import {
  organizationSchema,
  serviceSchema,
  websiteSchema,
} from '@/lib/structured-data'
import Script from 'next/script'
import UnifiedNavigation from '@/components/pages/UnifiedNavigation'
import LenisProvider from '@/components/pages/LenisProvider'

const fontSans = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  preload: true, // Enable preloading for critical font
  weight: ['400', '700', '900'],
  display: 'swap', // Add font-display: swap
})

const fontMono = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
  preload: true, // Enable preloading for critical font
  display: 'swap', // Add font-display: swap
})

export const metadata: Metadata = {
  title: {
    default:
      'NartaQ - The AI-Powered Protocol for Startup Funding | Venture Matchmaking',
    template: '%s | NartaQ',
  },
  description:
    'AI-powered venture matchmaking protocol connecting founders with the right investors through automated deal execution and guided closing.',
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
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NartaQ - Premium Investment & Talent Platform',
    description:
      'Elite platform connecting funded startups with smart investors and expert talent. Get investment, hire A-players, or find premium projects.',
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
    <html lang='en' className='dark lenis' suppressHydrationWarning>
      <head>
        <meta name='apple-mobile-web-app-title' content='NartaQ' />
        <meta name='application-name' content='NartaQ' />
        
        {/* Critical resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//vercel.live" />
        <link rel="dns-prefetch" href="//vitals.vercel-insights.com" />


        <link rel="manifest" href="/manifest.json" />
       
        <Script id="critical-sw-registration" strategy="lazyOnload">
          {`if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                  console.log('SW registered: ', registration);
                })
                .catch((registrationError) => {
                  console.log('SW registration failed: ', registrationError);
                });
            });
          }`}
        </Script>        

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
          id='deferred-google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              // Import and initialize deferred analytics
              (function() {
                let gtmLoaded = false;
                
                function loadGTM() {
                  if (gtmLoaded) return;
                  gtmLoaded = true;
                  
                  // Check for Do Not Track
                  if (navigator.doNotTrack === '1') return;
                  
                  // Load GTM script
                  const script = document.createElement('script');
                  script.async = true;
                  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CZ3D93J3CR';
                  script.onload = function() {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-CZ3D93J3CR', {
                      send_page_view: false // Prevent automatic page view
                    });
                    window.gtag = gtag;
                  };
                  document.head.appendChild(script);
                }
                
                // Load on user interaction
                const events = ['mousedown', 'keydown', 'touchstart', 'scroll'];
                const loadOnce = () => {
                  loadGTM();
                  events.forEach(e => document.removeEventListener(e, loadOnce));
                };
                
                events.forEach(e => {
                  document.addEventListener(e, loadOnce, { passive: true, once: true });
                });
                
                // Fallback: load after 8 seconds
                setTimeout(loadGTM, 8000);
                
                // Load on visibility change
                document.addEventListener('visibilitychange', () => {
                  if (!document.hidden) loadGTM();
                });
              })();
            `,
          }}
        />
      
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
