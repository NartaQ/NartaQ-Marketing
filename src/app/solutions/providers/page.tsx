'use client'

import { MagicCard } from '@/components/magicui/magic-card'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { Spotlight } from '@/components/ui/spotlight'
import { FileCheck, Clock, DollarSign, Shield, CheckCircle, Users, Target, ArrowRight, Briefcase } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "For Providers | NartaQ",
  description: "Private bounties, clear acceptance, and protections that reduce client risk.",
};

export default function ForProvidersPage() {
  const benefits = [
    {
      icon: 'filecheck',
      title: 'Crystal-Clear Scope',
      description: 'Every project comes with detailed deliverables, acceptance criteria, and timelines documented upfront. No ambiguity, no scope creep.',
      color: 'from-[#a98b5d]/10 via-[#a98b5d]/5 to-transparent'
    },
    {
      icon: 'clock',
      title: 'Timeboxed Reviews',
      description: 'Stop waiting in review limbo. All reviews and payment releases follow scheduled timelines with clear SLAs.',
      color: 'from-[#dcd7ce]/10 via-[#dcd7ce]/5 to-transparent'
    },
    {
      icon: 'dollarsign',
      title: 'Hybrid Compensation',
      description: 'Access cash + equity/options arrangements for long-term alignment with high-growth startups and established companies.',
      color: 'from-[#5c5d63]/15 via-[#5c5d63]/8 to-transparent'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Browse Private Bounties',
      description: 'Access exclusive opportunities from verified startups and companies. Each bounty includes detailed scope and compensation.',
      icon: 'target'
    },
    {
      step: '02', 
      title: 'Submit Your Proposal',
      description: 'Respond to bounties that match your expertise. Include your approach, timeline, and any clarifying questions.',
      icon: 'filecheck'
    },
    {
      step: '03',
      title: 'Secure Assignment',
      description: 'Get selected based on your track record and proposal quality. Terms are locked in with clear success criteria.',
      icon: 'shield'
    },
    {
      step: '04',
      title: 'Deliver & Get Paid',
      description: 'Complete your work, submit for review, and receive payment upon acceptance. All transactions are protected.',
      icon: 'checkcircle'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'filecheck': return <FileCheck className="w-8 h-8 text-[#a98b5d]" />
      case 'clock': return <Clock className="w-8 h-8 text-[#a98b5d]" />
      case 'dollarsign': return <DollarSign className="w-8 h-8 text-[#a98b5d]" />
      case 'target': return <Target className="w-8 h-8 text-[#a98b5d]" />
      case 'shield': return <Shield className="w-8 h-8 text-[#a98b5d]" />
      case 'checkcircle': return <CheckCircle className="w-8 h-8 text-[#a98b5d]" />
      default: return <Target className="w-8 h-8 text-[#a98b5d]" />
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main>
        {/* Hero Section */}
        <section className='relative flex w-full flex-col items-center justify-center p-[2%] py-20 text-center overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <Spotlight />
          </div>
          <div className="absolute inset-0 luxury-texture opacity-25"></div>
          <div className="absolute top-1/5 right-1/4 w-96 h-96 bg-[#a98b5d]/4 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-1/5 left-1/4 w-80 h-80 bg-[#dcd7ce]/3 rounded-full blur-3xl floating"></div>
          
          <div className='relative z-10 max-w-4xl space-y-8 reveal-up'>
            <div className='flex justify-center mb-6'>
              <AnimatedGradientText
                className='text-sm font-medium'
                colorFrom='#a98b5d'
                colorTo='#dcd7ce'
              >
                <Briefcase className="w-4 h-4 mr-2" />
                For Elite Service Providers
              </AnimatedGradientText>
            </div>
            
            <h1 className='text-5xl md:text-7xl font-light '>
              Earn on outcomes,{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent font-medium'>
                not promises.
              </span>
            </h1>
            
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto"></div>
            
            <p className='text-xl md:text-2xl text-[#5c5d63] font-light max-w-3xl mx-auto leading-relaxed'>
              Join exclusive private bounties from verified startups and companies.
              <br />
              <span className="text-[#a98b5d]/90">Get paid when your work meets clear acceptance criteria.</span>
            </p>
            
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-8'>
              <ShimmerButton
                className='px-8 py-4 text-lg font-semibold'
                background='linear-gradient(135deg, #a98b5d 0%, #8a7249 100%)'
                shimmerColor='#dcd7ce'
              >
                <a href='mailto:providers@nartaq.com?subject=Provider%20Application' className='flex items-center space-x-2'>
                  <span>Apply as Provider</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </ShimmerButton>
              <Link
                href='#how-it-works'
                className='px-8 py-4 rounded-xl font-semibold border-2 border-[#5c5d63]/50 text-[#dcd7ce] hover:border-[#a98b5d] transition-all duration-300 premium-glass'
              >
                See How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='py-20 bg-gradient-to-b from-black to-[#232428]'>
          <div className='max-w-6xl mx-auto px-6'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
              <div className='space-y-3 reveal-up'>
                <div className='text-4xl md:text-5xl font-light text-[#a98b5d] '>
                  <NumberTicker value={94} />%
                </div>
                <p className='text-[#5c5d63] font-light'>On-Time Payment Rate</p>
              </div>
              <div className='space-y-3 reveal-up'>
                <div className='text-4xl md:text-5xl font-light text-[#a98b5d] '>
                  <NumberTicker value={2.8} />x
                </div>
                <p className='text-[#5c5d63] font-light'>Higher Rates vs Market</p>
              </div>
              <div className='space-y-3 reveal-up'>
                <div className='text-4xl md:text-5xl font-light text-[#a98b5d] '>
                  <NumberTicker value={48} />h
                </div>
                <p className='text-[#5c5d63] font-light'>Average Review Time</p>
              </div>
              <div className='space-y-3 reveal-up'>
                <div className='text-4xl md:text-5xl font-light text-[#a98b5d] '>
                  <NumberTicker value={200} />+
                </div>
                <p className='text-[#5c5d63] font-light'>Active Provider Network</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-24 px-6 relative'>
          <div className="absolute inset-0 luxury-texture opacity-20"></div>
          
          <div className='max-w-6xl mx-auto relative z-10'>
            <div className='text-center mb-16 reveal-up'>
              <div className="flex justify-center mb-6">
                <div className="premium-glass px-8 py-3 rounded-full border border-[#a98b5d]/20">
                  <span className="text-sm font-medium text-[#a98b5d] tracking-wider">
                    PROVIDER ADVANTAGES
                  </span>
                </div>
              </div>
              
              <h2 className='text-4xl md:text-5xl font-light mb-6 text-[#dcd7ce]'>
                Why Elite Providers Choose{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent font-medium'>
                  NartaQ
                </span>
              </h2>
              
              <p className='text-xl text-[#5c5d63] font-light max-w-3xl mx-auto'>
                Work with premium clients, earn competitive rates, and enjoy the protection of clear contracts.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {benefits.map((benefit, i) => (
                <div key={i} className='group premium-glass elite-hover rounded-3xl overflow-hidden border border-[#a98b5d]/20  relative reveal-up'>
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color}`}></div>
                  
                  <div className="relative z-10 p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                      {getIcon(benefit.icon)}
                    </div>
                    
                    <h3 className='text-xl font-medium text-[#dcd7ce] mb-4'>
                      {benefit.title}
                    </h3>
                    
                    <div className="w-12 h-0.5 bg-[#a98b5d] mb-4 group-hover:w-16 transition-all duration-300"></div>
                    
                    <p className='text-[#5c5d63] leading-relaxed font-light'>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id='how-it-works' className='py-24 bg-gradient-to-b from-[#232428] to-black'>
          <div className='max-w-6xl mx-auto px-6'>
            <div className='text-center mb-16 reveal-up'>
              <h2 className='text-4xl md:text-5xl font-light mb-6 text-[#dcd7ce]'>
                How NartaQ Works for{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent font-medium'>
                  Providers
                </span>
              </h2>
              <p className='text-xl text-[#5c5d63] font-light max-w-3xl mx-auto'>
                A streamlined process that connects you with premium opportunities and ensures fair compensation
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {process.map((step, i) => (
                <div key={i} className='group premium-glass elite-hover rounded-3xl overflow-hidden border border-[#a98b5d]/20  relative reveal-up'>
                  <div className="relative z-10 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-2xl font-light text-[#a98b5d]/40">
                        {step.step}
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                        {getIcon(step.icon)}
                      </div>
                    </div>
                    
                    <h3 className='text-lg font-medium text-[#dcd7ce] mb-4'>
                      {step.title}
                    </h3>
                    
                    <div className="w-8 h-0.5 bg-[#a98b5d] mb-4 group-hover:w-12 transition-all duration-300"></div>
                    
                    <p className='text-[#5c5d63] leading-relaxed font-light text-sm'>
                      {step.description}
                    </p>
                    
                    {/* Connection arrow (except for last item) */}
                    {i < process.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-20">
                        <div className="premium-glass w-6 h-6 rounded-full flex items-center justify-center border border-[#a98b5d]/20">
                          <ArrowRight className="w-3 h-3 text-[#a98b5d]" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section className='py-20 px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16 reveal-up'>
              <h2 className='text-4xl md:text-5xl font-light mb-6 text-[#dcd7ce]'>
                High-Demand{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent font-medium'>
                  Specializations
                </span>
              </h2>
              <p className='text-xl text-[#5c5d63] font-light max-w-3xl mx-auto'>
                Areas where we see the highest demand and best compensation rates
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {[
                { title: 'AI/ML Development', demand: 'Very High', rate: '€80-150/hr' },
                { title: 'Mobile App Development', demand: 'High', rate: '€60-120/hr' },
                { title: 'Blockchain Development', demand: 'High', rate: '€70-140/hr' },
                { title: 'UI/UX Design', demand: 'High', rate: '€50-100/hr' },
                { title: 'DevOps Engineering', demand: 'High', rate: '€65-130/hr' },
                { title: 'Data Science', demand: 'Medium', rate: '€55-110/hr' }
              ].map((spec, i) => (
                <MagicCard key={i} className='p-6 reveal-up'>
                  <div className='space-y-4'>
                    <h3 className='text-lg font-medium text-[#dcd7ce]'>{spec.title}</h3>
                    <div className='flex justify-between items-center'>
                      <span className='text-sm text-[#5c5d63]'>Demand</span>
                      <span className={`text-sm font-medium ${
                        spec.demand === 'Very High' ? 'text-[#a98b5d]' : 
                        spec.demand === 'High' ? 'text-[#dcd7ce]' : 'text-[#5c5d63]'
                      }`}>
                        {spec.demand}
                      </span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-sm text-[#5c5d63]'>Rate Range</span>
                      <span className='text-sm font-medium text-[#a98b5d]'>{spec.rate}</span>
                    </div>
                  </div>
                </MagicCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='py-20 bg-gradient-to-b from-[#232428] to-black'>
          <div className='max-w-6xl mx-auto px-6'>
            <div className='text-center mb-16 reveal-up'>
              <h2 className='text-4xl md:text-5xl font-light mb-6 text-[#dcd7ce]'>
                Success Stories from{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent font-medium'>
                  Our Providers
                </span>
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <MagicCard className='p-8 reveal-up'>
                <div className='space-y-6'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#a98b5d] to-[#8a7249] flex items-center justify-center text-white font-bold'>
                      MK
                    </div>
                    <div>
                      <h4 className='font-semibold text-[#dcd7ce]'>Malik Korchi</h4>
                      <p className='text-sm text-[#5c5d63]'>Full-Stack Developer, Tunis</p>
                    </div>
                  </div>
                  <p className='text-[#5c5d63] italic leading-relaxed'>
                    &ldquo;The project specs were incredibly clear, and payment came exactly on schedule. I've earned 40% more through NartaQ compared to other platforms.&rdquo;
                  </p>
                </div>
              </MagicCard>

              <MagicCard className='p-8 reveal-up'>
                <div className='space-y-6'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#5c5d63] to-[#3e3f44] flex items-center justify-center text-white font-bold'>
                      SL
                    </div>
                    <div>
                      <h4 className='font-semibold text-[#dcd7ce]'>Sophie Lefèvre</h4>
                      <p className='text-sm text-[#5c5d63]'>UX/UI Designer, Paris</p>
                    </div>
                  </div>
                  <p className='text-[#5c5d63] italic leading-relaxed'>
                    &ldquo;Working with startups through NartaQ has been amazing. Clear expectations, fast payments, and I even got equity in one of my favorite projects.&rdquo;
                  </p>
                </div>
              </MagicCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20'>
          <div className='max-w-4xl mx-auto px-6 text-center reveal-up'>
            <div className="premium-glass rounded-3xl p-8 md:p-12 border border-[#a98b5d]/20 ">
              <h2 className='text-4xl md:text-5xl font-light mb-6 text-[#dcd7ce]'>
                Ready to Join Our{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent font-medium'>
                  Elite Network?
                </span>
              </h2>
              
              <p className='text-xl text-[#5c5d63] font-light mb-8 max-w-2xl mx-auto leading-relaxed'>
                Connect with premium clients, work on meaningful projects, and earn competitive rates with clear protection.
              </p>
              
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <ShimmerButton
                  className='px-8 py-4 text-lg font-semibold'
                  background='linear-gradient(135deg, #a98b5d 0%, #8a7249 100%)'
                  shimmerColor='#dcd7ce'
                >
                  <a href='mailto:providers@nartaq.com?subject=Provider%20Application%20Request' className='flex items-center space-x-2'>
                    <span>Apply as Provider</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </ShimmerButton>
                <Link
                  href='/companies-providers'
                  className='px-8 py-4 rounded-xl font-semibold border-2 border-[#5c5d63]/50 text-[#dcd7ce] hover:border-[#a98b5d] transition-all duration-300 premium-glass'
                >
                  Learn About Orchestration
                </Link>
              </div>
              
              <p className='text-sm text-[#5c5d63] mt-6'>
                All applications are reviewed confidentially and we maintain strict NDA protection
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
