'use client'

import { useState } from 'react'

import { ArrowLeft, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CareerMultiStepForm from '@/components/forms/CareerMultiStepForm'

export default function DevOpsEngineerApplyPage() {
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)

  if (applicationSubmitted) {
    return (
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <div className='max-w-2xl mx-auto px-4 text-center'>
          <div className='bg-gradient-to-br from-[#a98b5d]/5 to-transparent border border-[#a98b5d]/20 rounded-2xl p-12 backdrop-blur-sm'>
            <CheckCircle className='w-16 h-16 text-green-400 mx-auto mb-6' />
            <h1 className='text-3xl font-bold text-white mb-4'>
              Application Submitted!
            </h1>
            <p className='text-gray-300 mb-8'>
              Thank you for applying for the DevOps Engineer position. We'll
              review your application and get back to you soon.
            </p>
            <Link href='/careers'>
              <Button className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold'>
                Back to Careers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-black text-white relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#a98b5d]/20 via-gray-900 to-black' />
      <div className='absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#a98b5d]/30 to-[#dcd7ce]/30 rounded-full blur-3xl animate-pulse' />
      <div className='absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#dcd7ce]/20 to-[#a98b5d]/20 rounded-full blur-3xl animate-pulse delay-1000' />

      <div className='relative z-10'>
        {/* Header */}
        <div className='pt-8 px-4'>
          <div className='max-w-4xl mx-auto flex items-center justify-between'>
            <Link
              href='/careers/devops-engineer'
              className='inline-flex items-center gap-2 text-[#dcd7ce] hover:text-[#a98b5d] transition-colors group'
            >
              <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
              <span>Back to Position</span>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className='py-12 px-4'>
          <div className='max-w-4xl mx-auto'>
            {/* Header */}
            <div className='text-center mb-12'>
              <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                <span className='bg-gradient-to-r from-white via-[#dcd7ce] to-white bg-clip-text text-transparent'>
                  Apply for DevOps Engineer
                </span>
              </h1>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Join our team as a DevOps Engineer and help build scalable
                infrastructure for our investment platform.
              </p>
            </div>

            {/* Application Form */}
            <div>
              <CareerMultiStepForm
                onSubmissionSuccess={() => setApplicationSubmitted(true)}
                position='DevOps Engineer'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
