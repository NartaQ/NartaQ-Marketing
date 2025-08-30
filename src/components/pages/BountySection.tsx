import { FileText, Lock, DollarSign } from 'lucide-react'
import { WobbleCard } from '../ui/wobble-card'

export default function BountySection() {
  const bountyFeatures = [
    {
      title: 'Precision Briefs',
      desc: 'Immutable brief versions with crystal-clear acceptance criteria and intelligent auto-expiry to eliminate race conditions.',
      iconName: 'filetext',
      gradient: 'from-[#a98b5d]/10 via-[#a98b5d]/5 to-transparent',
    },
    {
      title: 'Private Bounties',
      desc: 'Exclusive access restricted to pre-vetted service providers. Full NDA integration for confidential projects.',
      iconName: 'lock',
      gradient: 'from-[#dcd7ce]/10 via-[#dcd7ce]/5 to-transparent',
    },
    {
      title: 'Managed Payouts',
      desc: 'Automated payouts on acceptance with sophisticated milestone support and partial payment capabilities.',
      iconName: 'dollarsign',
      gradient: 'from-[#5c5d63]/15 via-[#5c5d63]/8 to-transparent',
    },
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'filetext':
        return <FileText className='w-8 h-8 text-[#a98b5d]' />
      case 'lock':
        return <Lock className='w-8 h-8 text-[#a98b5d]' />
      case 'dollarsign':
        return <DollarSign className='w-8 h-8 text-[#a98b5d]' />
      default:
        return <FileText className='w-8 h-8 text-[#a98b5d]' />
    }
  }

  return (
    <section
      id='bounties'
      className='flex w-full flex-col items-center justify-center p-[2%] py-20 relative'
    >
      {/* Premium background elements */}
      <div className='absolute inset-0 luxury-texture opacity-25'></div>
      <div className='absolute top-0 left-1/3 w-96 h-96 bg-[#a98b5d]/4 rounded-full blur-3xl floating'></div>
      <div className='absolute bottom-0 right-1/3 w-80 h-80 bg-[#dcd7ce]/3 rounded-full blur-3xl floating'></div>

      <div className='max-w-6xl mx-auto text-center space-y-8 relative z-10'>
        {/* Premium section header */}
        <div className='space-y-6'>
          <div className='flex justify-center mb-4'>
            <div className='premium-glass px-8 py-3 rounded-full border border-[#a98b5d]/20'>
              <span className='text-sm font-medium text-[#a98b5d] tracking-wider'>
                EXCLUSIVE BOUNTY SYSTEM
              </span>
            </div>
          </div>

          <h2 className='text-4xl md:text-5xl font-light text-[#dcd7ce] '>
            <span className='font-medium text-[#a98b5d] '>
              Elite micro‑tasks
            </span>
            <br />
            ship fast, safely
          </h2>

          <div className='w-32 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto'></div>

          <p className='text-xl text-[#dcd7ce] font-light leading-relaxed max-w-4xl mx-auto'>
            Startups post clear micro-tasks with budget ranges and success
            criteria.
            <br />
            <br />
            <span className='text-[#a98b5d]/90'>
              Experts can apply or submit work. All submissions get time stamps
              and reviews against set criteria. Winners get paid when work is
              approved.
            </span>
          </p>
        </div>
      </div>

      {/* Premium feature showcase with WobbleCard */}
      <div className='mt-20 max-w-7xl w-full px-4'>
        <div className='grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {/* First card - spans 2 columns on large screens */}
          <WobbleCard
            containerClassName='col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 min-h-[400px] border border-[#a98b5d]/20'
            className=''
          >
            <div className='max-w-lg'>
              <div className='mb-6'>
                <div className='w-18 h-18 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                  {getIcon(bountyFeatures[0].iconName)}
                </div>
              </div>
              <h2 className='text-left text-balance text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.015em] text-[#dcd7ce] mb-4'>
                {bountyFeatures[0].title}
              </h2>
              <div className='w-16 h-0.5 bg-[#a98b5d] mb-6'></div>
              <p className='text-left text-lg text-[#dcd7ce]/90 leading-relaxed font-light'>
                {bountyFeatures[0].desc}
              </p>
            </div>
          </WobbleCard>

          {/* Second card */}
          <WobbleCard containerClassName='col-span-1 min-h-[400px] bg-gradient-to-br from-[#dcd7ce]/15 to-[#dcd7ce]/5 border border-[#a98b5d]/20'>
            <div className='mb-6'>
              <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                {getIcon(bountyFeatures[1].iconName)}
              </div>
            </div>
            <h2 className='text-left text-balance text-xl md:text-2xl lg:text-3xl font-medium tracking-[-0.015em] text-[#dcd7ce] mb-4'>
              {bountyFeatures[1].title}
            </h2>
            <div className='w-12 h-0.5 bg-[#a98b5d] mb-4'></div>
            <p className='text-left text-base text-[#dcd7ce]/90 leading-relaxed font-light'>
              {bountyFeatures[1].desc}
            </p>
          </WobbleCard>

          {/* Third card - spans full width */}
          <WobbleCard containerClassName='col-span-1 lg:col-span-3 bg-gradient-to-br from-[#5c5d63]/20 to-[#5c5d63]/10 min-h-[300px] border border-[#a98b5d]/20'>
            <div className='max-w-2xl'>
              <div className='mb-6'>
                <div className='w-18 h-18 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                  {getIcon(bountyFeatures[2].iconName)}
                </div>
              </div>
              <h2 className='text-left text-balance text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.015em] text-[#dcd7ce] mb-4'>
                {bountyFeatures[2].title}
              </h2>
              <div className='w-16 h-0.5 bg-[#a98b5d] mb-6'></div>
              <p className='text-left text-lg text-[#dcd7ce]/90 leading-relaxed font-light max-w-3xl'>
                {bountyFeatures[2].desc}
              </p>
            </div>
          </WobbleCard>
        </div>
      </div>

      {/* Premium process flow */}
      <div className='mt-20'>
        <div className='text-center mb-12'>
          <h3 className='text-2xl font-light text-[#dcd7ce] mb-4'>
            The Premium Process
          </h3>
          <div className='w-24 h-px bg-[#a98b5d] mx-auto'></div>
        </div>

        <div className='flex justify-center items-center space-x-4 max-w-4xl mx-auto'>
          {[
            {
              step: '01',
              label: 'Post Brief',
              desc: 'Define scope & criteria',
            },
            {
              step: '02',
              label: 'Curated Match',
              desc: 'Vetted providers apply',
            },
            {
              step: '03',
              label: 'Secure Delivery',
              desc: 'Milestone protection',
            },
            { step: '04', label: 'Auto Payout', desc: 'On acceptance' },
          ].map((item, i) => (
            <div
              key={`process-step-${i}-${item.step}`}
              className='flex-1 text-center'
            >
              <div className='premium-glass rounded-2xl p-6 mb-3 elite-hover'>
                <div className='text-2xl font-light text-[#a98b5d] mb-2'>
                  {item.step}
                </div>
                <div className='font-medium text-[#dcd7ce] text-sm mb-1'>
                  {item.label}
                </div>
                <div className='text-xs text-[#dcd7ce]'>{item.desc}</div>
              </div>
              {i < 3 && (
                <div className='hidden lg:block absolute top-1/2 transform -translate-y-1/2 left-full w-8 text-[#a98b5d]/40 text-2xl font-light'>
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
