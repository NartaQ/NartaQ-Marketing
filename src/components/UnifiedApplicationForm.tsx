'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Users, Building2, CheckCircle } from 'lucide-react'
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
    <div className='min-h-screen bg-black flex items-center justify-center p-4'>
      <div className='w-full max-w-4xl'>
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
              <div className='mb-12'>
                <h1 className='font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight'>
                  <span className='text-glow bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                    Join NartaQ
                  </span>
                </h1>
                <p className='font-serif text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed'>
                  Choose your path to be part of our ecosystem
                </p>
              </div>

              {/* Type Selection Cards */}
              <div className='grid md:grid-cols-2 gap-8 max-w-3xl mx-auto'>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleTypeSelect('founder')}
                  className='group cursor-pointer'
                >
                  <div className='bg-gradient-to-br from-gray-900/80 to-black/80 border border-[#a98b5d]/20 rounded-3xl p-8 hover:border-[#a98b5d]/50 transition-all duration-300'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='w-16 h-16 bg-[#a98b5d]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#a98b5d]/30 transition-colors'>
                        <Building2 className='w-8 h-8 text-[#a98b5d]' />
                      </div>
                      <h3 className='font-serif text-2xl font-semibold text-white mb-4'>
                        I'm a Founder
                      </h3>
                      <p className='font-serif text-gray-300 leading-relaxed mb-6'>
                        Looking for investment and want to connect with the right investors for my startup
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
                  <div className='bg-gradient-to-br from-gray-900/80 to-black/80 border border-[#a98b5d]/20 rounded-3xl p-8 hover:border-[#a98b5d]/50 transition-all duration-300'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='w-16 h-16 bg-[#a98b5d]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#a98b5d]/30 transition-colors'>
                        <Users className='w-8 h-8 text-[#a98b5d]' />
                      </div>
                      <h3 className='font-serif text-2xl font-semibold text-white mb-4'>
                        I'm an Investor
                      </h3>
                      <p className='font-serif text-gray-300 leading-relaxed mb-6'>
                        Looking to discover and invest in promising startups in our network
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
              <div className='mb-8'>
                <Button
                  onClick={handleBack}
                  variant='ghost'
                  className='text-gray-400 hover:text-white font-serif text-lg p-0 h-auto'
                >
                  <ArrowLeft className='w-5 h-5 mr-2' />
                  Back to selection
                </Button>
              </div>

              {/* Form Header */}
              <div className='text-center mb-12'>
                <h1 className='font-serif text-4xl md:text-5xl font-bold text-white mb-4'>
                  {selectedType === 'founder' ? 'Founder Application' : 'Investor Application'}
                </h1>
                <p className='font-serif text-lg text-gray-300'>
                  {selectedType === 'founder' 
                    ? 'Tell us about your startup and vision' 
                    : 'Tell us about your investment focus and criteria'
                  }
                </p>
              </div>

              {/* Form Component */}
              {selectedType === 'founder' ? (
                <FounderMultiStepForm onSubmissionSuccess={handleSubmissionSuccess} />
              ) : (
                <InvestorMultiStepForm onSubmissionSuccess={handleSubmissionSuccess} />
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
                
                <h1 className='font-serif text-4xl md:text-5xl font-bold text-white mb-6'>
                  Application Submitted!
                </h1>
                
                <p className='font-serif text-xl text-gray-300 mb-8 leading-relaxed'>
                  Thank you for your application. Our team will review it and get back to you as soon as possible.
                </p>
                
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                 
                  <Button
                    onClick={() => window.location.href = '/'}
                    className='font-serif text-lg px-8 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black hover:scale-105 transition-transform'
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