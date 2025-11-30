'use client'

import { useRef } from 'react'

import {
  UserCheck,
  Brain,
  Handshake,
  FileSignature,
  Banknote,
  CheckCircle2,
} from 'lucide-react'

export default function HowItWorksSection() {
  const ref = useRef(null)

  const steps = [
    {
      id: 1,
      icon: UserCheck,
      title: 'Connect & Verify',
      description:
        'Create your verified profile with identity confirmation and investment preferences. Our team will personally learn your criteria and preferences to prepare for AI-powered learning.',
    },
    {
      id: 2,
      icon: Brain,
      title: 'Intelligent Matching',
      description:
        'Our AI engine analyzes multiple data points to identify high-potential matches, providing personalized deal recommendations based on compatibility and success patterns.',
    },
    {
      id: 3,
      icon: Handshake,
      title: 'Secure Discussion',
      description:
        'Enter a protected environment with conversation templates and market guidance. AI assists with standard terms and deal structure recommendations.',
    },
    {
      id: 4,
      icon: FileSignature,
      title: 'Automated Documentation',
      description:
        'Streamlined deal closure generates all necessary legal documentation, manages signatures, and handles regulatory requirements.',
    },
    {
      id: 5,
      icon: Banknote,
      title: 'Transparent Fund Transfer',
      description:
        'Funds are held securely with automated release based on agreed milestones. Smart contracts ensure transparent and efficient capital deployment.',
    },
  ]

  return (
    <section className='relative py-16 sm:py-24 lg:py-32  overflow-hidden'>
      {/* Background Grid */}
      <div className='absolute inset-0 grid-pattern opacity-20'>
        <div
          className='w-full h-full'
          style={{
            backgroundImage: `
            linear-gradient(rgba(169, 139, 93, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(169, 139, 93, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div
        ref={ref}
        className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
      >
        {/* Section Header */}
        <div className='text-center mb-16 sm:mb-20'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-6'>
            <CheckCircle2 className='w-4 h-4' />
            THE PROCESS
          </div>

          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8'>
            <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
              3 Steps To Funded
            </span>
          </h2>

          <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto px-4'>
            We stripped away the bureaucracy. Here is the simple, guided path from
            "hello" to "wired funds".
          </p>
        </div>

        {/* Steps Grid */}
        <div className='flex flex-wrap justify-center gap-8 max-w-6xl mx-auto'>
          <div className='group text-center flex-1 min-w-[280px] max-w-[350px]'>
            <div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center border-2 border-[#a98b5d]/30'>
              <UserCheck className='w-8 h-8 text-[#a98b5d]' />
            </div>
            <h3 className='text-xl font-bold text-[#dcd7ce] mb-4'>
              1. Verify & Profile
            </h3>
            <p className='text-gray-400 text-lg leading-relaxed'>
              Create your profile in minutes. We verify your identity and deal criteria
              so you never waste time on fake leads.
            </p>
          </div>

          <div className='group text-center flex-1 min-w-[280px] max-w-[350px]'>
            <div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center border-2 border-[#a98b5d]/30'>
              <Brain className='w-8 h-8 text-[#a98b5d]' />
            </div>
            <h3 className='text-xl font-bold text-[#dcd7ce] mb-4'>
              2. Get Matched
            </h3>
            <p className='text-gray-400 text-lg leading-relaxed'>
              Our AI instantly scans thousands of profiles to find your perfect match.
              Get introduced to investors who are actively looking for you.
            </p>
          </div>

          <div className='group text-center flex-1 min-w-[280px] max-w-[350px]'>
            <div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center border-2 border-[#a98b5d]/30'>
              <Banknote className='w-8 h-8 text-[#a98b5d]' />
            </div>
            <h3 className='text-xl font-bold text-[#dcd7ce] mb-4'>
              3. Close & Scale
            </h3>
            <p className='text-gray-400 text-lg leading-relaxed'>
              Use our automated legal workflows to sign term sheets and transfer funds
              securely. No lawyers, no delays.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
