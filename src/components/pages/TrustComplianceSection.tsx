'use client'

import { useRef } from 'react'

import { Shield, Lock, Scale, CheckCircle2 } from 'lucide-react'

export default function TrustComplianceSection() {
  const ref = useRef(null)

  const trustFeatures = [
    {
      title: 'Verified Participants',
      description:
        'All investors and founders undergo multi-layer verification including KYC, accreditation checks, and reputation scoring.',
      icon: Shield,
    },
    {
      title: 'Bank-Level Security',
      description:
        'Enterprise-grade encryption, secure data storage, and comprehensive privacy protection for all transactions.',
      icon: Lock,
    },
    {
      title: 'Smart Legal Framework',
      description:
        'Automated compliance checking, standardized legal templates, and built-in dispute resolution mechanisms.',
      icon: Scale,
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
            TRUST & COMPLIANCE
          </div>

          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8'>
            <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
              Your Data Is Safer Than In Your Bank
            </span>
          </h2>

          <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto px-4'>
            We use the same encryption as the world's largest financial institutions.
            Your IP is yours, and your money is safe.
          </p>
        </div>

        {/* Trust Features Grid */}
        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          <div className='group text-center'>
            <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center border border-[#a98b5d]/30'>
              <Shield className='w-8 h-8 text-[#a98b5d]' />
            </div>
            <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4'>
              No Scammers Allowed
            </h3>
            <p className='text-gray-400 text-lg leading-relaxed'>
              We manually verify every single investor and founder. If they aren't real,
              they don't get in. Period.
            </p>
          </div>

          <div className='group text-center'>
            <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 flex items-center justify-center border border-[#a98b5d]/30'>
              <Lock className='w-8 h-8 text-[#a98b5d]' />
            </div>
            <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4'>
              Fort Knox Security
            </h3>
            <p className='text-gray-400 text-lg leading-relaxed'>
              Enterprise-grade encryption protects your pitch deck, financial data,
              and personal information from prying eyes.
            </p>
          </div>

          <div className='group text-center'>
            <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 flex items-center justify-center border border-[#a98b5d]/30'>
              <Scale className='w-8 h-8 text-[#a98b5d]' />
            </div>
            <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4'>
              Ironclad Legal Protection
            </h3>
            <p className='text-gray-400 text-lg leading-relaxed'>
              Our smart contracts and legal templates are vetted by top-tier law firms
              to ensure every deal is enforceable and compliant.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
