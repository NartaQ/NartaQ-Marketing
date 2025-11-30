
import CareerApplicationForm from '@/components/CareerApplicationForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Apply for Careers at NartaQ - Join Our Team',
    description: 'Apply to join NartaQ\'s team and help build the future of AI-powered venture matchmaking. Explore open positions and submit your application today.',
    keywords: [
        'career application',
        'job application',
        'join our team',
        'venture capital careers',
        'AI startup jobs',
        'investment technology careers'
    ],
    openGraph: {
        title: 'Apply for Careers at NartaQ - Join Our Team',
        description: 'Apply to join NartaQ\'s team and help build the future of AI-powered venture matchmaking.',
        siteName: 'NartaQ',
    },
    twitter: {
        title: 'Apply for Careers at NartaQ - Join Our Team',
        description: 'Apply to join NartaQ\'s team and help build the future of AI-powered venture matchmaking.',
    },
    alternates: {
        canonical: 'https://www.nartaq.com/careers/apply',
    },
    robots: {
        index: true,
        follow: true,
    },
}
export default function CareerApplyPage() {
    return (
        <div className='min-h-screen bg-[#0a0a0a] text-white'>
            <CareerApplicationForm />
        </div>
    )
}