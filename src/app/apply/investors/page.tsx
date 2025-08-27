'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import InvestorForm from '@/components/ApplyFounders/InvestorForm'
import InvestorSuccess from '@/components/ApplyFounders/InvestorSuccess'

export default function InvestorApplicationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className='min-h-screen bg-black text-white pt-20'>
      {!isSubmitted ? (
        <>
          {/* Header */}
          <div className='border-b border-gray-800'>
            <div className='max-w-4xl mx-auto px-4 py-6'>
              <Link
                href='/for-investors'
                className='inline-flex items-center gap-2 text-gray-400 hover:text-[#a98b5d] transition-colors mb-4'
              >
                <ArrowLeft className='w-4 h-4' />
                Back to Investors
              </Link>

              <h1 className='text-3xl sm:text-4xl font-bold mb-2'>
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  Apply to Join the NartaQ Founding Cohort as an Investor
                </span>
              </h1>

              <p className='text-gray-400'>
                Join an exclusive group of forward-thinking investors shaping
                the future of startup funding.
              </p>
            </div>
          </div>

          <InvestorForm onSubmitted={() => setIsSubmitted(true)} />
        </>
      ) : (
        <InvestorSuccess />
      )}
    </div>
  )
}
