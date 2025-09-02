'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, CheckCircle, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CareerMultiStepForm from './forms/CareerMultiStepForm'

type ApplicationStatus = 'filling' | 'success'

export default function CareerApplicationForm() {
 const [status, setStatus] = useState<ApplicationStatus>('filling')

 const handleSubmissionSuccess = () => {
  setStatus('success')
 }

 return (
  <div className='min-h-screen bg-black flex items-center justify-center p-4'>
   <div className='w-full max-w-4xl'>
    <AnimatePresence mode='wait'>
     {status === 'filling' && (
      <motion.div
       key='form'
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -20 }}
       transition={{ duration: 0.5 }}
      >
       {/* Form Header */}
       <div className='text-center mb-12'>
        <div className='w-16 h-16 bg-[#a98b5d]/20 rounded-full flex items-center justify-center mx-auto mb-6'>
         <Briefcase className='w-8 h-8 text-[#a98b5d]' />
        </div>
        <h1 className='font-serif text-4xl md:text-5xl font-bold text-white mb-4'>
         <span className='text-glow bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
          Join Our Team
         </span>
        </h1>
        <p className='font-serif text-lg text-gray-300 max-w-2xl mx-auto'>
         Ready to make an impact? Tell us about yourself and let's build the future together.
        </p>
       </div>

       {/* Form Component */}
       <CareerMultiStepForm onSubmissionSuccess={handleSubmissionSuccess} />
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
         Thank you for your interest in joining NartaQ. Our team will review your application and get back to you within 5-7 business days.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
         <Button
          onClick={() => window.location.href = '/careers'}
          variant='outline'
          className='font-serif text-lg px-8 py-3 border-[#a98b5d] text-[#a98b5d] hover:bg-white hover:text-white transition-colors'
         >
          View Other Positions
         </Button>
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