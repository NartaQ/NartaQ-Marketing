import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata } from 'next'

import '@investi/ui/globals.css'
import '@/styles/aceternity.css'
import '@/styles/unified-colors.css'
import '@/styles/scroll-performance.css'
import { Providers } from '@/components/providers'
import { ScrollOptimizer } from '@/components/scroll-optimizer'

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'OpenVC - The Future of Venture Capital',
  description:
    'Connect startups with investors through our AI-powered platform. Streamline due diligence, automate matching, and accelerate funding decisions.',
  keywords: [
    'venture capital',
    'startup funding',
    'investors',
    'AI matching',
    'due diligence',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <ScrollOptimizer />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
