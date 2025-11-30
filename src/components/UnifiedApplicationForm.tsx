'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowLeft,
  Users,
  Building2,
  CheckCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import FounderMultiStepForm from './forms/FounderMultiStepForm'
import InvestorMultiStepForm from './forms/InvestorMultiStepForm'

type ApplicationType = 'founder' | 'investor' | null
type ApplicationStatus = 'selecting' | 'filling' | 'success'

export default function UnifiedApplicationForm() {
  const [selectedType, setSelectedType] = useState<ApplicationType>(null)
  const [status, setStatus] = useState<ApplicationStatus>('selecting')

  const handleTypeSelect = (type: ApplicationType) => {
    setSelectedType(type)
    setStatus('filling')
  }

  const handleBack = () => {
    if (status === 'filling') {
      setSelectedType(null)
      setStatus('selecting')
    }
  }

  const handleSubmissionSuccess = () => {
    setStatus('success')
  }

  return (
    <div className='min-h-screen bg-[#0a0a0a] flex items-start justify-center pt-12 sm:pt-16 md:pt-20 pb-8 px-4 sm:px-6 md:px-8'>
      <div className='w-full max-w-4xl px-2 sm:px-4'>
        <AnimatePresence mode='wait'>
          {status === 'selecting' && (
            <motion.div
              key='selection'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className='text-center'
            >
              {/* Header */}
              <div className='mb-8 sm:mb-12'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2'>
                  <span className='text-glow bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                    Join NartaQ
                  </span>
                </h1>
                <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2'>
                  Choose your path to be part of our ecosystem
                </p>
              </div>

              {/* Type Selection Cards */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto'>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleTypeSelect('founder')}
                  className='group cursor-pointer'
                >
                  <div className='bg-gradient-to-br from-[#a98b5d]/30 to-[#0a0a0a]/80 border border-[#a98b5d]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#a98b5d]/50 transition-all duration-300'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='w-12 h-12 sm:w-16 sm:h-16 bg-[#a98b5d]/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#a98b5d]/30 transition-colors'>
                        <Building2 className='w-6 h-6 sm:w-8 sm:h-8 text-[#a98b5d]' />
                      </div>
                      <h3 className='text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4'>
                        I'm a Founder
                      </h3>
                      <p className='text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6'>
                        Looking for investment and want to connect with the
                        right investors
                      </p>
                      <div className='flex items-center text-[#a98b5d] font-medium group-hover:translate-x-1 transition-transform'>
                        <span>Apply as Founder</span>
                        <ArrowRight className='w-5 h-5 ml-2' />
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleTypeSelect('investor')}
                  className='group cursor-pointer'
                >
                  <div className='bg-gradient-to-br from-[#a98b5d]/30 to-[#0a0a0a]/80 border border-[#a98b5d]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#a98b5d]/50 transition-all duration-300'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='w-12 h-12 sm:w-16 sm:h-16 bg-[#a98b5d]/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#a98b5d]/30 transition-colors'>
                        <Users className='w-6 h-6 sm:w-8 sm:h-8 text-[#a98b5d]' />
                      </div>
                      <h3 className='text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4'>
                        I'm an Investor
                      </h3>
                      <p className='text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6'>
                        Looking to discover and invest in promising startups in
                        our network
                      </p>
                      <div className='flex items-center text-[#a98b5d] font-medium group-hover:translate-x-1 transition-transform'>
                        <span>Apply as Investor</span>
                        <ArrowRight className='w-5 h-5 ml-2' />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {status === 'filling' && selectedType && (
            <motion.div
              key='form'
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Back Button */}
              <div className='mb-6 sm:mb-8 mt-4 sm:mt-8'>
                <Button
                  onClick={handleBack}
                  variant='ghost'
                  className='text-gray-400 hover:text-white cursor-pointer text-base sm:text-lg p-0 h-auto'
                >
                  <ArrowLeft className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                  Back to selection
                </Button>
              </div>

              {/* Form Header */}
              <div className='text-center mb-8 sm:mb-12 px-2'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4'>
                  {selectedType === 'founder'
                    ? 'Founder Application'
                    : 'Investor Application'}
                </h1>
                <p className='text-base sm:text-lg text-gray-300'>
                  {selectedType === 'founder'
                    ? 'Tell us about your startup and vision'
                    : 'Tell us about your investment focus and criteria'}
                </p>
              </div>

              {/* Form Component */}
              {selectedType === 'founder' ? (
                <FounderMultiStepForm
                  onSubmissionSuccess={handleSubmissionSuccess}
                />
              ) : (
                <InvestorMultiStepForm
                  onSubmissionSuccess={handleSubmissionSuccess}
                />
              )}
            </motion.div>
          )}

          {status === 'success' && (
            <motion.div
              key='success'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className='text-center'
            >
              <div className='max-w-2xl mx-auto'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className='w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8'
                >
                  <CheckCircle className='w-12 h-12 text-green-400' />
                </motion.div>

                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2'>
                  Application Submitted!
                </h1>

                <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-2'>
                  Thank you for your application. Our team will review it and
                  get back to you as soon as possible.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Button
                    onClick={() => (window.location.href = '/')}
                    className='text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black hover:scale-105 transition-transform'
                  >
                    Back to Home
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
