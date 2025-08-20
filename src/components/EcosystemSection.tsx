import Link from 'next/link'
import { Gem, Rocket, ArrowRight } from 'lucide-react'

export default function EcosystemSection() {
  return (
    <section className='flex w-full flex-col items-center justify-center p-[2%] py-32 relative'>
      <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent z-30' />
      <div className='absolute top-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#dcd7ce]/60 to-transparent z-30' />

      {/* Premium background layers */}
      <div className='absolute inset-0 luxury-texture opacity-30'></div>
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-[#a98b5d]/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-1/4 w-80 h-80 bg-[#dcd7ce]/5 rounded-full blur-3xl'></div>

      <div className='max-w-6xl mx-auto text-center space-y-8 relative z-10'>
        {/* Premium section header */}
        <div className='space-y-6'>
          <div className='flex justify-center mb-4'>
            <div className='premium-glass px-8 py-3 rounded-full border border-[#a98b5d]/20'>
              <span className='text-sm font-medium text-[#a98b5d] tracking-wider'>
                TWO EXCLUSIVE PATHS
              </span>
            </div>
          </div>

          <h2 className='text-4xl md:text-5xl font-light text-[#dcd7ce]'>
            An{' '}
            <span className='font-medium text-[#a98b5d] '>
              innovative ecosystem
            </span>
          </h2>

          <div className='w-32 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto'></div>

          <p className='text-xl text-[#dcd7ce] font-light leading-relaxed max-w-2xl mx-auto'>
            Two complementary axes under one premium platform.
            <br />
            Choose your exclusive pathway.
          </p>
        </div>
      </div>

      {/* Premium pathway cards */}

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 max-w-7xl w-full px-4'>
        <Link href='/investors-startups' className='group relative'>
          <div className='premium-glass elite-hover rounded-3xl p-10 border border-[#a98b5d]/20  h-full'>
            {/* Card header with icon */}
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                <Gem className='w-8 h-8 text-[#a98b5d]' />
              </div>
              <div>
                <h3 className='text-2xl md:text-3xl font-medium text-[#dcd7ce] mb-2'>
                  Startups & Investors
                </h3>
                <div className='w-16 h-0.5 bg-[#a98b5d]'></div>
              </div>
            </div>

            <p className='text-lg text-[#dcd7ce] mb-8 leading-relaxed font-light'>
              Credit‑based deck reviews, curated introductions, and transparent
              progress tracking for premium investment opportunities.
            </p>

            {/* Premium feature list */}
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-[#a98b5d]'></div>
                <span className='text-[#dcd7ce] font-medium'>
                  AI-powered rubric analysis
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-[#a98b5d]'></div>
                <span className='text-[#dcd7ce] font-medium'>
                  Curated investor outreach
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-[#a98b5d]'></div>
                <span className='text-[#dcd7ce] font-medium'>
                  Progress tracking & follow-ups
                </span>
              </div>
            </div>

            {/* Premium hover indicator */}
            <div className='mt-8 flex items-center gap-2 text-[#a98b5d] group-hover:translate-x-2 transition-transform duration-300'>
              <span className='font-medium'>Explore pathway</span>
              <ArrowRight className='w-5 h-5' />
            </div>
          </div>
        </Link>
        <Link href='/companies-providers' className='group relative'>
          <div className='premium-glass elite-hover rounded-3xl p-10 border border-[#a98b5d]/20  h-full'>
            {/* Card header with icon */}
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                <Rocket className='w-8 h-8 text-[#a98b5d]' />
              </div>
              <div>
                <h3 className='text-2xl md:text-3xl font-medium text-[#dcd7ce] mb-2'>
                  Startups & Providers
                </h3>
                <div className='w-16 h-0.5 bg-[#a98b5d]'></div>
              </div>
            </div>

            <p className='text-lg text-[#dcd7ce] mb-8 leading-relaxed font-light'>
              Scoped bounties, tri‑party orchestration, milestone protections,
              and optional intermediation for premium service delivery.
            </p>

            {/* Premium feature list */}
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-[#a98b5d]'></div>
                <span className='text-[#dcd7ce] font-medium'>
                  Private bounties with curated matching
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-[#a98b5d]'></div>
                <span className='text-[#dcd7ce] font-medium'>
                  Milestone releases & escrow protection
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-[#a98b5d]'></div>
                <span className='text-[#dcd7ce] font-medium'>
                  Hybrid compensation (cash + equity)
                </span>
              </div>
            </div>

            {/* Premium hover indicator */}
            <div className='mt-8 flex items-center gap-2 text-[#a98b5d] group-hover:translate-x-2 transition-transform duration-300'>
              <span className='font-medium'>Explore pathway</span>
              <ArrowRight className='w-5 h-5' />
            </div>
          </div>
        </Link>
      </div>

      {/* Premium footer element */}
      <div className='mt-20'>
        <p className='text-[#dcd7ce] font-light italic'>
          &ldquo;Where exclusive opportunities meet trusted execution&rdquo;
        </p>
      </div>
    </section>
  )
}
