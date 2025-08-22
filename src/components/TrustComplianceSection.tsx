import { Shield, Lock, Scale } from 'lucide-react'

export default function TrustComplianceSection() {
  const trustFeatures = [
    {
      title: 'We Check Everyone',
      desc: 'We check IDs twice and call past employers.',
      iconName: 'shield',
      color: 'from-[#a98b5d]/20 to-[#a98b5d]/5',
    },
    {
      title: 'Bank-Level Security',
      desc: 'EU data storage, full encryption, NDAs, and IP protection.',
      iconName: 'lock',
      color: 'from-[#dcd7ce]/20 to-[#dcd7ce]/5',
    },
    {
      title: 'Fast Problem Solving',
      desc: 'Expert dispute help with quick decisions.',
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
      className='flex w-full flex-col items-center justify-center p-[2%] py-32 relative'
    >
      {/* Premium background elements */}
      <div className='absolute inset-0 luxury-texture opacity-20'></div>
      <div className='absolute top-1/4 right-1/5 w-80 h-80 bg-[#a98b5d]/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 left-1/5 w-96 h-96 bg-[#dcd7ce]/3 rounded-full blur-3xl'></div>

      <div className='max-w-6xl mx-auto text-center space-y-8 relative z-10'>
        {/* Premium section header */}
        <div className='space-y-6'>
          <div className='flex justify-center mb-4'>
            <div className='premium-glass px-8 py-3 rounded-full border border-[#a98b5d]/20'>
              <span className='text-sm font-medium text-[#a98b5d] tracking-wider'>
                TRUSTED BY DESIGN
              </span>
            </div>
          </div>

          <h2 className='text-4xl md:text-5xl font-light text-[#dcd7ce]'>
            <span className='font-medium text-[#a98b5d] '>
              Safe & secure
            </span>{' '}
            by design
          </h2>

          <div className='w-32 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto'></div>

          <p className='text-xl text-[#dcd7ce] font-light leading-relaxed max-w-4xl mx-auto'>
            We check everyone twice. Store data in Europe. Sign NDAs. Protect your IP.
            Track everything for legal safety.
            <br />
            <br />
            <span className='text-[#a98b5d]/80'>
              Project briefs never change once posted. We timestamp all work. 
              Private projects stay private.
            </span>
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20 max-w-7xl w-full px-4'>
        {trustFeatures.map((card, i) => (
          <div
            key={i}
            className='group premium-glass elite-hover rounded-3xl p-8 border border-[#a98b5d]/20  relative overflow-hidden'
          >
            {/* Card background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-50 rounded-3xl`}
            ></div>

            <div className='relative z-10'>
              {/* Icon container */}
              <div className='w-20 h-20 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                {getIcon(card.iconName)}
              </div>

              <h3 className='text-2xl font-medium text-[#dcd7ce] mb-4'>
                {card.title}
              </h3>

              <div className='w-12 h-0.5 bg-[#a98b5d] mb-4'></div>

              <p className='text-[#dcd7ce] leading-relaxed font-light'>
                {card.desc}
              </p>

              {/* Premium accent line */}
              <div className='mt-6 h-px bg-gradient-to-r from-transparent via-[#a98b5d]/30 to-transparent'></div>
            </div>
          </div>
        ))}
      </div>

      {/* Premium trust indicators */}
      <div className='mt-20 text-center'>
        <div className='flex justify-center items-center space-x-8 text-[#dcd7ce] text-sm font-light'>
          <div className='flex items-center space-x-2'>
            <span className='w-2 h-2 bg-[#a98b5d] rounded-full'></span>
            <span>SOC 2 Compliant</span>
          </div>
          <div className='flex items-center space-x-2'>
            <span className='w-2 h-2 bg-[#a98b5d] rounded-full'></span>
            <span>GDPR Ready</span>
          </div>
          <div className='flex items-center space-x-2'>
            <span className='w-2 h-2 bg-[#a98b5d] rounded-full'></span>
            <span>Enterprise Grade</span>
          </div>
        </div>
      </div>
    </section>
  )
}
