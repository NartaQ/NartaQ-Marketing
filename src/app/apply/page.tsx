import UnifiedApplicationForm from '@/components/UnifiedApplicationForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply to NartaQ - Join Our Founding Community',
  description: 'Apply to join NartaQ\'s founding cohort as a founder or investor. Be part of building the future of merit-based startup funding and AI-powered venture matchmaking.',
  keywords: [
    'startup application',
    'investor application',
    'founding cohort',
    'venture capital community',
    'AI matchmaking',
    'startup funding application'
  ],
  openGraph: {
    title: 'Apply to NartaQ - Join Our Founding Community',
    description: 'Apply to join our founding cohort as a founder or investor. Be part of building the future of merit-based startup funding.',
    siteName: 'NartaQ',
  },
  twitter: {
    title: 'Apply to NartaQ - Join Our Founding Community',
    description: 'Apply to join our founding cohort as a founder or investor. Be part of building the future of merit-based startup funding.',
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