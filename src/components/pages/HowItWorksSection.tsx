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
    <section className='relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden'>
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
            OUR PLANNED WORKFLOW
          </div>

          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8'>
            <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
              How It Will Work
            </span>
          </h2>

          <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto px-4'>
            We are building a simple, guided process that automates the early
            stages of fundraising
          </p>
        </div>

        {/* Steps Grid */}
        <div className='flex flex-wrap justify-center gap-8 max-w-6xl mx-auto'>
          {steps.map((step, index) => (
            <div
              key={step.id}
              className='group text-center flex-1 min-w-[280px] max-w-[350px]'
            >
              <div className='w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300'>
                <step.icon className='w-10 h-10 text-[#a98b5d]' />
              </div>

              <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4'>
                {step.title}
              </h3>

              <p className='text-gray-400 text-lg leading-relaxed'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
