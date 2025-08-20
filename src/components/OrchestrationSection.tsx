import {
  Target,
  Users,
  CheckCircle,
  CreditCard,
  ArrowRight,
} from 'lucide-react'

export default function OrchestrationSection() {
  const orchestrationSteps = [
    {
      title: 'Scope Definition',
      desc: 'Crystal-clear deliverables, acceptance criteria, and precision timelines with immutable documentation.',
      icon: 'target',
      color: 'from-[#a98b5d]/10 via-[#a98b5d]/5 to-transparent',
    },
    {
      title: 'Elite Assignment',
      desc: 'Curated vetted service providers or specialized micro‑teams matched precisely to your requirements.',
      icon: 'users',
      color: 'from-[#dcd7ce]/10 via-[#dcd7ce]/5 to-transparent',
    },
    {
      title: 'Premium Delivery',
      desc: 'Milestone reviews with comprehensive audit trails, approval gates, and white-glove quality assurance.',
      icon: 'checkcircle',
      color: 'from-[#5c5d63]/15 via-[#5c5d63]/8 to-transparent',
    },
    {
      title: 'Secure Release',
      desc: 'Sophisticated staged payouts with optional intermediation for complex work and dispute protection.',
      icon: 'creditcard',
      color: 'from-[#a98b5d]/12 via-[#a98b5d]/6 to-transparent',
    },
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'target':
        return <Target className='w-8 h-8 text-[#a98b5d]' />
      case 'users':
        return <Users className='w-8 h-8 text-[#a98b5d]' />
      case 'checkcircle':
        return <CheckCircle className='w-8 h-8 text-[#a98b5d]' />
      case 'creditcard':
        return <CreditCard className='w-8 h-8 text-[#a98b5d]' />
      default:
        return <Target className='w-8 h-8 text-[#a98b5d]' />
    }
  }

  return (
    <section
      id='orchestration'
      className='flex w-full flex-col items-center justify-center p-[2%] py-32 relative'
    >
      {/* Premium background elements */}
      <div className='absolute inset-0 luxury-texture opacity-25'></div>
      <div className='absolute top-1/5 right-1/4 w-96 h-96 bg-[#a98b5d]/4 rounded-full blur-3xl floating'></div>
      <div className='absolute bottom-1/5 left-1/4 w-80 h-80 bg-[#dcd7ce]/3 rounded-full blur-3xl floating'></div>

      <div className='max-w-6xl mx-auto text-center space-y-8 relative z-10'>
        {/* Premium section header */}
        <div className='space-y-6'>
          <div className='flex justify-center mb-4'>
            <div className='premium-glass px-8 py-3 rounded-full border border-[#a98b5d]/20'>
              <span className='text-sm font-medium text-[#a98b5d] tracking-wider'>
                TRI-PARTY ORCHESTRATION
              </span>
            </div>
          </div>

          <h2 className='text-4xl md:text-5xl font-light text-[#dcd7ce] '>
            From <span className='font-medium text-[#a98b5d] '>term sheet</span>{' '}
            to delivery
            <br />
            <span className='text-3xl md:text-4xl opacity-80'>
              sophisticated orchestration
            </span>
          </h2>

          <div className='w-32 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto'></div>

          <p className='text-xl text-[#dcd7ce] font-light leading-relaxed max-w-4xl mx-auto'>
            Transform funding intent into shipped outcomes with our premium
            orchestration platform.
            <br />
            <br />
            <span className='text-[#a98b5d]/90'>
              Define scopes and milestones, assign vetted service providers, and
              release escrow‑style payouts on acceptance. Full support for
              hybrid compensation with standardized legal templates.
            </span>
          </p>
        </div>
      </div>

      {/* Premium orchestration flow */}
      <div className='mt-20 max-w-7xl w-full px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
          {orchestrationSteps.map((card, i) => (
            <div
              key={i}
              className='group premium-glass elite-hover rounded-3xl overflow-hidden border border-[#a98b5d]/20  relative'
            >
              {/* Dynamic background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color}`}
              ></div>

              <div className='relative z-10 p-8'>
                {/* Step number and icon */}
                <div className='flex items-center justify-between mb-6'>
                  <div className='text-3xl font-light text-[#a98b5d]/40'>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center group-hover:scale-110 transition-all duration-500'>
                    {getIcon(card.icon)}
                  </div>
                </div>

                <h3 className='text-xl font-medium text-[#dcd7ce] mb-4'>
                  {card.title}
                </h3>

                <div className='w-12 h-0.5 bg-[#a98b5d] mb-4 group-hover:w-16 transition-all duration-300'></div>

                <p className='text-[#dcd7ce] leading-relaxed font-light text-sm'>
                  {card.desc}
                </p>

                {/* Connection arrow (except for last item) */}
                {i < orchestrationSteps.length - 1 && (
                  <div className='hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-20'>
                    <div className='premium-glass w-6 h-6 rounded-full flex items-center justify-center border border-[#a98b5d]/20'>
                      <ArrowRight className='w-3 h-3 text-[#a98b5d]' />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium value proposition */}
      <div className='mt-20'>
        <div className='premium-glass rounded-3xl p-8 md:p-12 border border-[#a98b5d]/20 max-w-4xl mx-auto '>
          <div className='text-center space-y-6'>
            <h3 className='text-2xl md:text-3xl font-light text-[#dcd7ce]'>
              <span className='font-medium text-[#a98b5d]'>
                Hybrid compensation
              </span>{' '}
              supported
            </h3>

            <p className='text-lg text-[#dcd7ce] font-light leading-relaxed'>
              Cash + equity/options arrangements with standardized legal
              templates via our trusted partner network. All structures are
              NDA-protected and jurisdiction-compliant.
            </p>

            <div className='flex justify-center'>
              <a
                href='mailto:contact@nartaq.com?subject=Orchestration%20Inquiry'
                className='premium-glass elite-hover px-8 py-4 rounded-xl border border-[#a98b5d]/30 hover:border-[#a98b5d]/60 transition-all duration-300 inline-flex items-center gap-3'
              >
                <span className='text-[#a98b5d] font-medium'>
                  Learn about orchestration
                </span>
                <ArrowRight className='w-4 h-4 text-[#a98b5d]' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
