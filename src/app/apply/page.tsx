import UnifiedApplicationForm from '@/components/UnifiedApplicationForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply to NartaQ - Join Our Founding Community',
  description: 'Apply for early access to NartaQ as a founder or investor. Be among the first to access AI-powered venture matchmaking and merit-based startup funding.',
  keywords: [
    'startup application',
    'investor application',
    'early access',
    'venture capital community',
    'AI matchmaking',
    'startup funding application'
  ],
  openGraph: {
    title: 'Apply to NartaQ - Join Our Founding Community',
    description: 'Apply for early access as a founder or investor. Be among the first to experience merit-based startup funding.',
    siteName: 'NartaQ',
  },
  twitter: {
    title: 'Apply - NartaQ',
    description: 'Apply for early access as a founder or investor. Be among the first to experience merit-based startup funding.',
  },
  alternates: {
    canonical: 'https://www.nartaq.com/apply',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ApplyPage() {
  return (
    <>      
      <div className='min-h-screen bg-black text-white'>
        <UnifiedApplicationForm />
      </div>
    </>
  )
}