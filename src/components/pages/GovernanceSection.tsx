'use client'

import { useRef } from 'react'
import { Shield, Lock, FileCheck, TrendingUp } from 'lucide-react'

export default function GovernanceSection() {
  const ref = useRef(null)

  const features = [
    {
      icon: Shield,
      title: 'Tokenized Equity',
      description:
        'Each startup gets blockchain-based governance tokens representing company shares, enabling transparent cap table management.',
    },
    {
      icon: FileCheck,
      title: 'On-Chain Governance',
      description:
        'Create proposals, verify legal documents, and vote on strategic decisions—all recorded with cryptographic proof.',
    },
    {
      icon: Lock,
      title: 'Automated Compliance',
      description:
        'Fundraising rounds, equity assignments, and regulatory requirements are handled automatically with tamper-proof records.',
    },
    {
      icon: TrendingUp,
      title: 'Transparent Operations',
      description:
        'Token holders have voting rights proportional to ownership, with full audit trail of all governance actions.',
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
            <Shield className='w-4 h-4' />
            BLOCKCHAIN INFRASTRUCTURE
          </div>

          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8'>
            <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
              The Infrastructure of Trust
            </span>
          </h2>

          <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto px-4'>
            We don't just match you. We give you the legal and technical rails to close deals
            instantly and securely, without the $50k legal bill.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
          <div className='group text-center p-6 rounded-2xl border border-[#a98b5d]/10 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/30 transition-all duration-300'>
            <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300'>
              <Shield className='w-8 h-8 text-[#a98b5d]' />
            </div>
            <h3 className='text-xl font-bold text-[#dcd7ce] mb-3'>
              Instant Cap Table Updates
            </h3>
            <p className='text-gray-400 leading-relaxed'>
              Forget messy spreadsheets. Your equity is tokenized and updated automatically
              the second a deal closes.
            </p>
          </div>

          <div className='group text-center p-6 rounded-2xl border border-[#a98b5d]/10 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/30 transition-all duration-300'>
            <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300'>
              <FileCheck className='w-8 h-8 text-[#a98b5d]' />
            </div>
            <h3 className='text-xl font-bold text-[#dcd7ce] mb-3'>
              Voting Rights That Work
            </h3>
            <p className='text-gray-400 leading-relaxed'>
              Proposals, legal docs, and strategic decisions are voted on-chain.
              No more chasing signatures via email.
            </p>
          </div>

          <div className='group text-center p-6 rounded-2xl border border-[#a98b5d]/10 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/30 transition-all duration-300'>
            <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300'>
              <Lock className='w-8 h-8 text-[#a98b5d]' />
            </div>
            <h3 className='text-xl font-bold text-[#dcd7ce] mb-3'>
              Compliance on Autopilot
            </h3>
            <p className='text-gray-400 leading-relaxed'>
              KYC, AML, and accreditation checks are handled automatically.
              We keep you compliant so you can focus on building.
            </p>
          </div>

          <div className='group text-center p-6 rounded-2xl border border-[#a98b5d]/10 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/30 transition-all duration-300'>
            <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300'>
              <TrendingUp className='w-8 h-8 text-[#a98b5d]' />
            </div>
            <h3 className='text-xl font-bold text-[#dcd7ce] mb-3'>
              Full Audit Trail
            </h3>
            <p className='text-gray-400 leading-relaxed'>
              Every decision and transaction is recorded forever.
              Total transparency for investors, total protection for founders.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className='mt-16 text-center'>
          <div className='inline-block p-6 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-r from-[#a98b5d]/5 to-transparent max-w-3xl'>
            <p className='text-gray-300 leading-relaxed'>
              <strong className='text-[#a98b5d]'>Why it matters:</strong> Traditional cap tables live in spreadsheets.
              We give startups institutional-grade infrastructure from day one—secure, transparent, and investor-ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
