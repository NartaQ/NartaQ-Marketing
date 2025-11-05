'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Globe, Target } from 'lucide-react'
import NewsletterModal from './NewsletterModal'

export default function BlogCTAButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
        <div className='relative group'>
          <div className='absolute -inset-0.5 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
          <Link
            href='#latest'
            className='relative px-8 py-4 bg-black rounded-2xl leading-none flex items-center gap-3 text-[#dcd7ce] hover:text-white transition-colors'
          >
            <Globe className='w-5 h-5' />
            <span className='font-semibold'>Explore All Topics</span>
          </Link>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className='px-8 py-4 border border-[#a98b5d]/40 text-[#a98b5d] rounded-2xl hover:bg-[#a98b5d]/10 hover:border-[#a98b5d]/60 transition-all duration-300 flex items-center gap-3 font-semibold'
        >
          <Target className='w-5 h-5' />
          Subscribe to Updates
        </button>
      </div>

      <NewsletterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
