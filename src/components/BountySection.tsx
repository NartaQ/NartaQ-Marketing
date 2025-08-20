import { FileText, Lock, DollarSign } from 'lucide-react'

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
            Startups post precisely scoped micro‑tasks with transparent budget
            ranges and detailed acceptance criteria.
            <br />
            <br />
            <span className='text-[#a98b5d]/90'>
              Vetted service providers can apply or submit under
              first‑acceptable or shortlist‑then‑award rules. All submissions
              are timestamped and evaluated against pre‑set criteria with
              automatic payouts on acceptance.
            </span>
          </p>
        </div>
      </div>

      {/* Premium feature showcase */}
      <div className='mt-20 max-w-7xl w-full px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {bountyFeatures.map((card, i) => (
            <div
              key={i}
              className='group premium-glass elite-hover rounded-3xl overflow-hidden border border-[#a98b5d]/20  relative'
            >
              {/* Dynamic background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}
              ></div>

              <div className='relative z-10 p-8'>
                {/* Premium icon container */}
                <div className='mb-6'>
                  <div className='w-18 h-18 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center group-hover:scale-110 transition-all duration-500'>
                    {getIcon(card.iconName)}
                  </div>
                </div>

                <h3 className='text-2xl font-medium text-[#dcd7ce] mb-4'>
                  {card.title}
                </h3>

                <div className='w-12 h-0.5 bg-[#a98b5d] mb-6 group-hover:w-16 transition-all duration-300'></div>

                <p className='text-[#dcd7ce] leading-relaxed font-light text-lg'>
                  {card.desc}
                </p>

                {/* Premium hover effect */}
                <div className='mt-8 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                  <div className='flex items-center text-[#a98b5d] text-sm font-medium'>
                    <span>Learn more</span>
                    <span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'>
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
            <div key={i} className='flex-1 text-center'>
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
