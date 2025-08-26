import { Shield, Lock, Scale } from 'lucide-react'

export default function TrustComplianceSection() {
  const trustFeatures = [
    {
      title: 'Verified Participants',
      desc: 'All investors and founders undergo multi-layer verification including KYC, accreditation checks, and reputation scoring.',
      iconName: 'shield',
      color: 'from-[#a98b5d]/20 to-[#a98b5d]/5',
    },
    {
      title: 'Bank-Level Security',
      desc: 'Enterprise-grade encryption, secure data storage, and comprehensive privacy protection for all transactions.',
      iconName: 'lock',
      color: 'from-[#dcd7ce]/20 to-[#dcd7ce]/5',
    },
    {
      title: 'Smart Legal Framework',
      desc: 'Automated compliance checking, standardized legal templates, and built-in dispute resolution mechanisms.',
      iconName: 'scale',
      color: 'from-[#5c5d63]/30 to-[#5c5d63]/10',
    },
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <Shield className='w-10 h-10 text-[#a98b5d]' />
      case 'lock':
        return <Lock className='w-10 h-10 text-[#a98b5d]' />
      case 'scale':
        return <Scale className='w-10 h-10 text-[#a98b5d]' />
      default:
        return <Shield className='w-10 h-10 text-[#a98b5d]' />
    }
  }

  return (
    <section
      id='trust-compliance'
      className='flex w-full flex-col items-center justify-center p-[2%] py-16 sm:py-24 lg:py-32 relative'
    >
      {/* Premium background elements */}
      <div className='absolute inset-0 luxury-texture opacity-20'></div>
      <div className='absolute top-1/4 right-1/5 w-80 h-80 bg-[#a98b5d]/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 left-1/5 w-96 h-96 bg-[#dcd7ce]/3 rounded-full blur-3xl'></div>

      <div className='max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10 px-4 sm:px-6 lg:px-8'>
        {/* Premium section header */}
        <div className='space-y-4 sm:space-y-6'>
          <div className='flex justify-center mb-4'>
            <div className='premium-glass px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-[#a98b5d]/20'>
              <span className='text-xs sm:text-sm font-medium text-[#a98b5d] tracking-wider'>
                OUR COMMITMENT TO TRUST & COMPLIANCE
              </span>
            </div>
          </div>

          <h2 className='text-3xl sm:text-4xl md:text-5xl font-light text-[#dcd7ce]'>
            <span className='font-medium text-[#a98b5d] '>
              Trust & Compliance
            </span>{' '}
            Built In
          </h2>

          <div className='w-32 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto'></div>

          <p className='text-lg sm:text-xl text-[#dcd7ce] font-light leading-relaxed max-w-4xl mx-auto'>
            We are building our platform with a focus on enterprise-grade
            security and a clear path to regulatory compliance in all relevant
            jurisdictions.
            <br />
            <br />
            <span className='text-[#a98b5d]/80'>
              Every participant will be verified. All transactions will be
              compliant. Complete audit trails will ensure regulatory adherence
              as we scale globally.
            </span>
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20 max-w-7xl w-full px-4'>
        {trustFeatures.map((card, i) => (
          <div
            key={i}
            className=' elite-hover rounded-3xl p-6 sm:p-8 border border-[#a98b5d]/20  relative overflow-hidden'
          >
            {/* Card background gradient */}
            <div
              className={`absolute inset-0 border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent rounded-3xl`}
            ></div>

            <div className='relative z-10'>
              {/* Icon container */}
              <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300'>
                {getIcon(card.iconName)}
              </div>

              <h3 className='text-xl sm:text-2xl font-medium text-[#dcd7ce] mb-3 sm:mb-4'>
                {card.title}
              </h3>

              <div className='w-12 h-0.5 bg-[#a98b5d] mb-3 sm:mb-4'></div>

              <p className='text-[#dcd7ce] leading-relaxed font-light text-sm sm:text-base'>
                {card.desc}
              </p>

              {/* Premium accent line */}
              <div className='mt-4 sm:mt-6 h-px bg-gradient-to-r from-transparent via-[#a98b5d]/30 to-transparent'></div>
            </div>
          </div>
        ))}
      </div>

      {/* Premium trust indicators */}
      <div className='mt-16 sm:mt-20 text-center'>
        <div className='flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-[#dcd7ce] text-xs sm:text-sm font-light'>
          <div className='flex items-center space-x-2'>
            <span className='w-2 h-2 bg-[#a98b5d] rounded-full'></span>
            <span>Building for SEC Compliance</span>
          </div>
          <div className='flex items-center space-x-2'>
            <span className='w-2 h-2 bg-[#a98b5d] rounded-full'></span>
            <span>GDPR Foundation</span>
          </div>
          <div className='flex items-center space-x-2'>
            <span className='w-2 h-2 bg-[#a98b5d] rounded-full'></span>
            <span>Enterprise Security</span>
          </div>
          <div className='flex items-center space-x-2'>
            <span className='w-2 h-2 bg-[#a98b5d] rounded-full'></span>
            <span>Multi-Jurisdiction Ready</span>
          </div>
        </div>
      </div>
    </section>
  )
}
