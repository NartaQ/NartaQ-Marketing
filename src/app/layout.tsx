import type { Metadata, Viewport } from "next";

import Footer from "@/components/pages/Footer";
import IntercomProvider from "@/components/lazyLoadIntercom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import {
  organizationSchema,
  serviceSchema,
  websiteSchema,
} from "@/lib/structured-data";
import Script from "next/script";
import UnifiedNavigation from "@/components/pages/UnifiedNavigation";
import LenisProvider from "@/components/pages/LenisProvider";
import AnalyticsProvider from "@/components/analytics/PostHogProvider";
import { CookieConsentBanner } from "@/lib/cookie-consent";
import "@/lib/app-bootstrap"; // Initialize app utilities

const fontSans = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  preload: true, // Enable preloading for critical font
  weight: ["400", "700", "900"],
  display: "swap", // Add font-display: swap
});

const fontMono = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  preload: true, // Enable preloading for critical font
  display: "swap", // Add font-display: swap
});

export const metadata: Metadata = {
  title: {
    default:
      "NartaQ - The AI-Powered Protocol for Startup Funding | Venture Matchmaking",
    template: "",
  },
  description:
    "AI-powered venture matchmaking protocol connecting founders with the right investors through automated deal execution and guided closing.",
  keywords: [
    "AI venture matching",
    "startup funding protocol",
    "venture capital automation",
    "dealflow matching",
    "startup investor matching",
    "AI powered funding",
    "decentralized venture capital",
    "automated deal execution",
    "venture matchmaking",
    "startup funding platform",
    "investor startup matching",
    "AI deal sourcing",
  ],
  authors: [{ name: "NartaQ" }],
  creator: "NartaQ",
  publisher: "NartaQ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.nartaq.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NartaQ - Premium Investment & Talent Platform",
    description:
      "Elite platform connecting funded startups with smart investors and expert talent. Get investment, hire A-players, or find premium projects.",
    url: "https://www.nartaq.com",
    siteName: "NartaQ",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NartaQ - Premium Investment & Talent Platform",
    description:
      "Elite platform connecting funded startups with smart investors and expert talent. Get investment, hire A-players, or find premium projects.",
    creator: "@nartaq",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark lenis" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="NartaQ" />
        <meta name="application-name" content="NartaQ" />

        {/* Critical resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//vercel.live" />
        <link rel="dns-prefetch" href="//vitals.vercel-insights.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//snap.licdn.com" />
        <link rel="preconnect" href="https://js-eu1.hs-scripts.com" />
        <link rel="preconnect" href="https://js-eu1.hs-analytics.net" />
        <link rel="preconnect" href="https://js-eu1.hs-banner.com" />
        <link rel="preconnect" href="https://js-eu1.hscollectedforms.net" />
        <link rel="preconnect" href="https://js-eu1.hsadspixel.net" />

        <link rel="manifest" href="/manifest.json" />

        {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '777686951638867');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=777686951638867&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* LinkedIn Insight Tag */}
        <Script
          id="linkedin-insight-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "8697081";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
                if (!l) {
                  window.lintrk = function(a,b) {
                    window.lintrk.q.push([a,b]);
                  };
                  window.lintrk.q = [];
                }
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";
                b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
              })(window.lintrk);
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=8697081&fmt=gif"
          />
        </noscript>

        <Script id="critical-sw-registration" strategy="lazyOnload">
          {`if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js')
            });
          }`}
        </Script>

        <script
          type="application/ld+json"
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
          id="deferred-google-analytics"
          strategy="afterInteractive"
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
                      send_page_view: true
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
        <AnalyticsProvider />
        <LenisProvider>
          <UnifiedNavigation />
          <main className="main mt-[var(--header-height)]">{children}</main>
          <Footer />
        </LenisProvider>
        <IntercomProvider />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
