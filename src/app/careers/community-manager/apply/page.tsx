'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ArrowLeft, CheckCircle, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '@/components/pageTransition/animations'
import CareerMultiStepForm from '@/components/forms/CareerMultiStepForm'

type ApplicationStatus = 'filling' | 'success'

export default function CommunityManagerApplyPage() {
  const [status, setStatus] = useState<ApplicationStatus>('filling')
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    if (pathname === href) return
    animatePageOut(href, router)
  }

  const handleSubmissionSuccess = () => {
    setStatus('success')
  }

  return (
    <div className='min-h-screen bg-black flex items-center justify-center p-4'>
      <div className='w-full max-w-4xl'>
        <AnimatePresence mode='wait'>
          {status === 'filling' && (
            <div key='form'>
              {/* Navigation */}
              <div className='mb-8'>
                <Link
                  title='Back to Community Manager'
                  href='/careers/community-manager'
                  onClick={(e) =>
                    handleNavigation(e, '/careers/community-manager')
                  }
                  className='inline-flex items-center gap-2 text-[#dcd7ce] hover:text-[#a98b5d] transition-colors group'
                >
                  <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
                  <span className='font-serif text-lg'>
                    Back to Position Details
                  </span>
                </Link>
              </div>

              {/* Form Header */}
              <div className='text-center mb-12'>
                <div className='w-16 h-16 bg-[#a98b5d]/20 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <Users className='w-8 h-8 text-[#a98b5d]' />
                </div>
                <h1 className='font-serif text-4xl md:text-5xl font-bold text-white mb-4'>
                  <span className='text-glow bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                    Community Manager Application
                  </span>
                </h1>
                <p className='font-serif text-lg text-gray-300 max-w-2xl mx-auto'>
                  Ready to build and nurture our growing community? Tell us
                  about your experience and vision for community growth.
                </p>
              </div>

              {/* Form Component */}
              <CareerMultiStepForm
                onSubmissionSuccess={handleSubmissionSuccess}
                position='Community Manager'
              />
            </div>
          )}

          {status === 'success' && (
            <div key='success' className='text-center'>
              <div className='max-w-2xl mx-auto'>
                <div className='w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8'>
                  <CheckCircle className='w-12 h-12 text-green-400' />
                </div>

                <h1 className='font-serif text-4xl md:text-5xl font-bold text-white mb-6'>
                  Application Submitted!
                </h1>

                <p className='font-serif text-xl text-gray-300 mb-8 leading-relaxed'>
                  Thank you for your interest in the Community Manager position
                  at NartaQ. Our team will review your application and get back
                  to you within 5-7 business days.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Link
                    title='View Position Details'
                    href='/careers/community-manager'
                    onClick={(e) =>
                      handleNavigation(e, '/careers/community-manager')
                    }
                  >
                    <Button
                      variant='outline'
                      className='font-serif text-lg px-8 py-3 border-[#a98b5d] text-[#a98b5d] hover:bg-white hover:text-white transition-colors'
                    >
                      View Position Details
                    </Button>
                  </Link>
                  <Link
                    title='Back to Careers'
                    href='/careers'
                    onClick={(e) => handleNavigation(e, '/careers')}
                  >
                    <Button className='font-serif text-lg px-8 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black hover:scale-105 transition-transform'>
                      View Other Positions
                    </Button>
                  </Link>
                  <Link title='Back to Home' href='/' onClick={(e) => handleNavigation(e, '/')}>
                    <Button
                      variant='outline'
                      className='font-serif text-lg px-8 py-3 border-[#dcd7ce] text-[#dcd7ce] hover:bg-white hover:text-black transition-colors'
                    >
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
