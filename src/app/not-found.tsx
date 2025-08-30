'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFoundPage() {
 return (
  <div className='flex min-h-screen flex-col bg-black text-white'>
   <div className='flex flex-col items-center justify-center min-h-screen px-4'>
    <div className='text-center space-y-8 max-w-2xl mx-auto'>
     {/* 404 Number */}
     <div className='space-y-4'></div>
     <h1 className='text-8xl md:text-9xl font-light text-[#a98b5d]'>
      404
     </h1>
     <div className='w-32 h-px bg-[#a98b5d] mx-auto'></div>
     <div className='absolute bottom-1/3 right-1/5 w-80 h-80 bg-[#dcd7ce]/2 rounded-full blur-3xl floating'></div>
     <div className='absolute top-2/3 left-1/3 w-64 h-64 bg-[#a98b5d]/2 rounded-full blur-3xl floating'></div>
     {/* Error message */}
     <div className='space-y-4'>
      <h2 className='text-2xl md:text-3xl font-light text-[#dcd7ce]'>
       Page Not Found
      </h2>
      <p className='text-lg text-[#a98b5d] opacity-80 leading-relaxed'>
       The page you&apos;re looking for seems to have wandered off into the digital void.
       <br className='hidden md:block' />
       Let&apos;s get you back to familiar territory.
      </p>
     </div>

     {/* Action buttons */}
     <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mt-12'>
      <Link
       href='/'
       className='px-8 py-4 bg-[#a98b5d] text-black font-semibold rounded-lg hover:bg-[#dcd7ce] transition-colors flex items-center gap-3'
      >
       <Home className='w-5 h-5' />
       Back to Home
      </Link>

      <button
       onClick={() => window.history.back()}
       className='px-8 py-4 border-2 border-[#a98b5d] text-[#dcd7ce] font-semibold rounded-lg hover:bg-[#a98b5d] hover:text-black transition-colors flex items-center gap-3'
      >
       <ArrowLeft className='w-5 h-5' />
       Go Back
      </button>
     </div>

     {/* Search suggestion */}
     <div className='mt-12 border border-[#a98b5d]/30 rounded-lg p-6'>
      <div className='flex items-center justify-center gap-3 mb-4'>
       <Search className='w-5 h-5 text-[#a98b5d]' />
       <h3 className='font-medium text-[#dcd7ce]'>Looking for something specific?</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
       <Link
        href='/investors-startups'
        className='text-[#a98b5d] hover:text-[#dcd7ce] transition-colors'
       >
        → Startups & Investors
       </Link>
       <Link
        href='/companies-providers'
        className='text-[#a98b5d] hover:text-[#dcd7ce] transition-colors'
       >
        → Companies & Providers
       </Link>
      </div>
     </div>
    </div>
   </div >
  </div >
 )
}
