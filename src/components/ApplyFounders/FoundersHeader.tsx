'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function FoundersHeader() {
  return (
    <div className='border-b border-gray-800'>
      <div className='max-w-4xl mx-auto px-4 py-6'>
        <Link
          href='/for-founders'
          className='inline-flex items-center gap-2 text-gray-400 hover:text-[#a98b5d] transition-colors mb-4'
        >
          <ArrowLeft className='w-4 h-4' />
          Back to Founders
        </Link>

        <h1 className='text-3xl sm:text-4xl font-bold mb-2'>
          <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
            Apply to Join the NartaQ Founding Cohort as a Founder
          </span>
        </h1>

        <p className='text-gray-400'>
          Connect with investors who understand your vision and want to fund
          your growth.
        </p>
      </div>
    </div>
  )
}
