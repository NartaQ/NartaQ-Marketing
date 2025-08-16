import { MagicCard } from '@/components/magicui/magic-card'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { Spotlight } from '@/components/ui/spotlight'
import { FileText, Target, Users, TrendingUp, CheckCircle, Rocket, Globe, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "For Startups | NartaQ",
  description: "Stop cold emailing. Get rubric feedback and warm intros when there's fit.",
};

export default function ForStartupsPage() {
  const benefits = [
    {
      icon: 'filetext',
      title: 'Actionable Rubric Feedback',
      description: 'Receive detailed, structured feedback on your pitch deck from seasoned reviewers. Know exactly what to improve before your next investor meeting.',
      color: 'from-[#a98b5d]/10 via-[#a98b5d]/5 to-transparent'
    },
    {
      icon: 'target',
      title: 'Precision Fit-First Intros',
      description: 'Connect only with investors who match your stage, sector, and funding needs. No more spray-and-pray outreach.',
      color: 'from-[#dcd7ce]/10 via-[#dcd7ce]/5 to-transparent'
    },
    {
      icon: 'globe',
      title: 'Franco-Tunisian Corridor Focus',
      description: 'Leverage our specialized network spanning France and Tunisia. Build credibility in this strategic corridor first.',
      color: 'from-[#5c5d63]/15 via-[#5c5d63]/8 to-transparent'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Submit Your Deck',
      description: 'Upload your pitch deck through our secure portal. Include your funding stage, sector, and specific requirements.',
      icon: 'filetext'
    },
    {
      step: '02', 
      title: 'Expert Review Process',
      description: 'Our vetted reviewers evaluate your deck against proven rubrics. Receive detailed feedback within 48-72 hours.',
      icon: 'checkcircle'
    },
    {
      step: '03',
      title: 'Smart Investor Matching',
      description: 'When your deck meets investor criteria, we facilitate warm introductions with context and clear next steps.',
      icon: 'users'
    },
    {
      step: '04',
      title: 'Accelerated Progress',
      description: 'Skip the cold outreach cycle. Focus on building your business while we handle qualified investor connections.',
      icon: 'rocket'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'filetext': return <FileText className="w-8 h-8 text-[#a98b5d]" />
      case 'target': return <Target className="w-8 h-8 text-[#a98b5d]" />
      case 'globe': return <Globe className="w-8 h-8 text-[#a98b5d]" />
      case 'checkcircle': return <CheckCircle className="w-8 h-8 text-[#a98b5d]" />
      case 'users': return <Users className="w-8 h-8 text-[#a98b5d]" />
      case 'rocket': return <Rocket className="w-8 h-8 text-[#a98b5d]" />
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
                <Rocket className="w-4 h-4 mr-2" />
                For Ambitious Startups
              </AnimatedGradientText>
            </div>
            
            <h1 className='text-5xl md:text-7xl font-light '>
              Less pitching.{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent font-medium'>
                More progress.
              </span>
            </h1>
            
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto"></div>
            
            <p className='text-xl md:text-2xl text-[#5c5d63] font-light max-w-3xl mx-auto leading-relaxed'>
              Submit your deck, receive structured rubric feedback, and connect with investors 
              <br />
              <span className="text-[#a98b5d]/90">only when there's genuine fit.</span>
            </p>
            
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-8'>
              <ShimmerButton
                className='px-8 py-4 text-lg font-semibold'
                background='linear-gradient(135deg, #a98b5d 0%, #8a7249 100%)'
                shimmerColor='#dcd7ce'
              >
                <a href='mailto:startups@nartaq.com?subject=Deck%20Submission%20Inquiry' className='flex items-center space-x-2'>
                  <span>Submit Your Deck</span>
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
                  <NumberTicker value={89} />%
                </div>
                <p className='text-[#5c5d63] font-light'>Feedback Satisfaction Rate</p>
              </div>
              <div className='space-y-3 reveal-up'>
                <div className='text-4xl md:text-5xl font-light text-[#a98b5d] '>
                  <NumberTicker value={3.2} />x
                </div>
                <p className='text-[#5c5d63] font-light'>Faster Investor Connections</p>
              </div>
              <div className='space-y-3 reveal-up'>
                <div className='text-4xl md:text-5xl font-light text-[#a98b5d] '>
                  <NumberTicker value={72} />h
                </div>
                <p className='text-[#5c5d63] font-light'>Average Review Turnaround</p>
              </div>
              <div className='space-y-3 reveal-up'>
                <div className='text-4xl md:text-5xl font-light text-[#a98b5d] '>
                  <NumberTicker value={15} />+
                </div>
                <p className='text-[#5c5d63] font-light'>Active Investor Partners</p>
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
                    STARTUP ADVANTAGES
                  </span>
                </div>
              </div>
              
              <h2 className='text-4xl md:text-5xl font-light mb-6 text-[#dcd7ce]'>
                Why Choose <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent font-medium'>NartaQ</span>
              </h2>
              
              <p className='text-xl text-[#5c5d63] font-light max-w-3xl mx-auto'>
                Skip the endless pitch cycle. Get meaningful feedback and connect with the right investors faster.
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
                  Startups
                </span>
              </h2>
              <p className='text-xl text-[#5c5d63] font-light max-w-3xl mx-auto'>
                A streamlined process that gets you in front of the right investors with the right preparation
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

        {/* Testimonials Section */}
        <section className='py-20 px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16 reveal-up'>
              <h2 className='text-4xl md:text-5xl font-light mb-6 text-[#dcd7ce]'>
                Success Stories from{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent font-medium'>
                  Our Startups
                </span>
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <MagicCard className='p-8 reveal-up'>
                <div className='space-y-6'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#a98b5d] to-[#8a7249] flex items-center justify-center text-white font-bold'>
                      LB
                    </div>
                    <div>
                      <h4 className='font-semibold text-[#dcd7ce]'>Leïla Ben Hassine</h4>
                      <p className='text-sm text-[#5c5d63]'>Co-founder, TechFlow (Series A)</p>
                    </div>
                  </div>
                  <p className='text-[#5c5d63] italic leading-relaxed'>
                    &ldquo;The feedback we received was incredibly detailed and actionable. We refined our deck based on their rubric and closed our Series A three months later.&rdquo;
                  </p>
                </div>
              </MagicCard>

              <MagicCard className='p-8 reveal-up'>
                <div className='space-y-6'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#5c5d63] to-[#3e3f44] flex items-center justify-center text-white font-bold'>
                      AM
                    </div>
                    <div>
                      <h4 className='font-semibold text-[#dcd7ce]'>Antoine Martin</h4>
                      <p className='text-sm text-[#5c5d63]'>CEO, DataVentures (Seed)</p>
                    </div>
                  </div>
                  <p className='text-[#5c5d63] italic leading-relaxed'>
                    &ldquo;NartaQ connected us with exactly the right investors. No more cold emails – just warm introductions that led to meaningful conversations.&rdquo;
                  </p>
                </div>
              </MagicCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-b from-black to-[#232428]'>
          <div className='max-w-4xl mx-auto px-6 text-center reveal-up'>
            <div className="premium-glass rounded-3xl p-8 md:p-12 border border-[#a98b5d]/20 ">
              <h2 className='text-4xl md:text-5xl font-light mb-6 text-[#dcd7ce]'>
                Ready to Elevate Your{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent font-medium'>
                  Fundraising?
                </span>
              </h2>
              
              <p className='text-xl text-[#5c5d63] font-light mb-8 max-w-2xl mx-auto leading-relaxed'>
                Join ambitious startups who are already using NartaQ to refine their pitch and connect with the right investors faster.
              </p>
              
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <ShimmerButton
                  className='px-8 py-4 text-lg font-semibold'
                  background='linear-gradient(135deg, #a98b5d 0%, #8a7249 100%)'
                  shimmerColor='#dcd7ce'
                >
                  <a href='mailto:startups@nartaq.com?subject=Deck%20Submission%20Request' className='flex items-center space-x-2'>
                    <span>Submit Your Deck</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </ShimmerButton>
                <Link
                  href='/investors-startups'
                  className='px-8 py-4 rounded-xl font-semibold border-2 border-[#5c5d63]/50 text-[#dcd7ce] hover:border-[#a98b5d] transition-all duration-300 premium-glass'
                >
                  Learn More
                </Link>
              </div>
              
              <p className='text-sm text-[#5c5d63] mt-6'>
                All deck submissions are NDA-protected and reviewed confidentially
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
