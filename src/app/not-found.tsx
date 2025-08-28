'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'


export default function NotFoundPage() {
 return (
  <div className='flex min-h-screen flex-col bg-black text-white relative overflow-hidden'>
   {/* Premium background layers - matching main site */}
   <div className='fixed inset-0 -z-10'>
    {/* Base gradient */}
    <div className='absolute inset-0 bg-gradient-to-br from-black via-[#232428] to-[#1a1b1f]'></div>

    {/* Floating orbs for ambiance */}
    <div className='absolute top-1/4 left-1/6 w-96 h-96 bg-[#a98b5d]/3 rounded-full blur-3xl floating'></div>
    <div className='absolute bottom-1/3 right-1/5 w-80 h-80 bg-[#dcd7ce]/2 rounded-full blur-3xl floating'></div>
    <div className='absolute top-2/3 left-1/3 w-64 h-64 bg-[#a98b5d]/2 rounded-full blur-3xl floating'></div>

    {/* Premium texture overlay */}
    <div className='absolute inset-0 luxury-texture opacity-40'></div>

    {/* Subtle noise for premium feel */}
    <div
     className='absolute inset-0 opacity-5'
     style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
     }}
    ></div>
   </div>

   {/* Main 404 Content */}
   <div className='flex flex-col items-center justify-center min-h-screen px-4 relative z-10'>
    <div className='text-center space-y-8 max-w-2xl mx-auto'>
     {/* 404 Number with premium styling */}
     <div className='space-y-4'>
      <h1
       className='text-8xl md:text-9xl font-light tracking-wider '
       style={{ color: '#a98b5d' }}
      >
       404
      </h1>
      <div className='w-32 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto'></div>
     </div>

     {/* Error message */}
     <div className='space-y-4'>
      <h2
       className='text-2xl md:text-3xl font-light'
       style={{ color: '#dcd7ce' }}
      >
       Page Not Found
      </h2>
      <p
       className='text-lg opacity-80 leading-relaxed'
       style={{ color: '#a98b5dcc' }}
      >
       The page you&apos;re looking for seems to have wandered off into the digital void.
       <br className='hidden md:block' />
       Let&apos;s get you back to familiar territory.
      </p>
     </div>

     {/* Action buttons with premium styling */}
     <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mt-12'>
      <Link
       href='/'
       className='group relative px-8 py-4 rounded-xl font-semibold text-black transition-all duration-500 elite-hover flex items-center gap-3'
       style={{ backgroundColor: '#a98b5d' }}
      >
       <Home className='w-5 h-5' />
       <span className='relative z-10'>Back to Home</span>
       <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
      </Link>

      <button
       onClick={() => window.history.back()}
       className='group px-8 py-4 rounded-xl font-semibold border-2 premium-glass elite-hover transition-all duration-500 flex items-center gap-3'
       style={{ color: '#dcd7ce', borderColor: '#a98b5d40' }}
      >
       <ArrowLeft className='w-5 h-5' />
       <span>Go Back</span>
      </button>
     </div>

     {/* Search suggestion */}
     <div className='mt-12 premium-glass rounded-2xl p-6 elite-hover'>
      <div className='flex items-center justify-center gap-3 mb-4'>
       <Search className='w-5 h-5 text-[#a98b5d]' />
       <h3 className='font-medium text-[#dcd7ce]'>Looking for something specific?</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
       <Link
        href='/for-founders'
        className='text-[#a98b5d] hover:text-[#dcd7ce] transition-colors duration-300'
       >
        → For Founders
       </Link>
       <Link
        href='/for-investors'
        className='text-[#a98b5d] hover:text-[#dcd7ce] transition-colors duration-300'
       >
        → For Investors
       </Link>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}
