'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function InvestorSuccess() {
  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center p-4'>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className='max-w-2xl mx-auto text-center'
      >
        <div className='w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] flex items-center justify-center'>
          <CheckCircle className='w-10 h-10 text-black' />
        </div>

        <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-[#dcd7ce]'>
          Application Received!
        </h1>

        <p className='text-lg text-gray-400 mb-8 leading-relaxed'>
          Thank you! Your application to join the Founding Investor Cohort has
          been received. Our team will review your information and be in touch
          soon. Welcome to the future of venture capital.
        </p>

        <Link
          href='/'
          className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300'
        >
          <ArrowLeft className='w-4 h-4' />
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
