'use client'

import { motion } from 'framer-motion'
import { Mail, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const LAST_UPDATED = '2025-09-03'

export default function DataRequestPage() {
  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Navigation breadcrumb */}
      <div className='bg-black/50 backdrop-blur-sm border-b border-[#a98b5d]/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <nav className='flex items-center space-x-2 text-sm text-gray-400'>
            <Link
              href='/'
              className='hover:text-[#a98b5d] transition-colors'
            >
              Home
            </Link>
            <ChevronRight className='w-4 h-4' />
            <Link
              href='/legal'
              className='hover:text-[#a98b5d] transition-colors'
            >
              Legal
            </Link>
            <ChevronRight className='w-4 h-4' />
            <span className='text-[#a98b5d]'>Contact Us</span>
          </nav>
        </div>
      </div>

      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          {/* Header */}
          <div className='inline-flex items-center space-x-2 bg-[#a98b5d]/10 border border-[#a98b5d]/20 rounded-full px-4 py-2 mb-6'>
            <Mail className='w-5 h-5 text-[#a98b5d]' />
            <span className='text-[#a98b5d] text-sm font-medium'>Contact Us</span>
          </div>
          
          <h1 className='text-5xl md:text-6xl font-bold text-[#dcd7ce] mb-6'>
            Get in{' '}
            <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
              Touch
            </span>
          </h1>
          
          <p className='text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8'>
            Have questions or need assistance? We're here to help.
          </p>
          
          <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-8 mb-8'>
            <div className='flex items-center justify-center space-x-4'>
              <Mail className='w-8 h-8 text-[#a98b5d]' />
              <div>
                <h3 className='text-2xl font-semibold text-[#dcd7ce] mb-2'>Email Us</h3>
                <a
                  href='mailto:contact@nartaq.com'
                  className='text-xl text-[#a98b5d] hover:underline'
                >
                  contact@nartaq.com
                </a>
              </div>
            </div>
          </div>

          <div className='space-x-4'>
            <Link href='/'>
              <Button variant='outline' className='border-[#a98b5d]/30 text-[#a98b5d] hover:bg-[#a98b5d]/10'>
                Return Home
              </Button>
            </Link>
          </div>
          
          <p className='text-sm text-gray-400 mt-8'>
            Last updated: {LAST_UPDATED}
          </p>
        </motion.div>
      </div>
    </div>
  )
}
