'use client'

import { MagicCard } from '@/components/magicui/magic-card'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { Spotlight } from '@/components/ui/spotlight'
import Link from 'next/link'

export default function ForInvestorsPage() {
  return (
    <div className='flex min-h-screen flex-col bg-black text-white'>
      <main>
        {/* Hero Section */}
        <section className='relative flex w-full flex-col items-center justify-center p-[2%] py-20 text-center overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <Spotlight />
          </div>
          <div className='relative z-10 max-w-4xl space-y-8'>
            <div className='flex justify-center mb-6'>
              <AnimatedGradientText
                className='text-sm font-medium'
                colorFrom='#a98b5d'
                colorTo='#dcd7ce'
              >
                🎯 For Smart Capital
              </AnimatedGradientText>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold '>
              See fewer decks.{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Make better picks.
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto'>
              Pay small credits to trigger rubric‑based reviews. We route only the startups that clear your investment criteria.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-8'>
              <ShimmerButton
                className='px-8 py-4 text-lg font-semibold'
                background='linear-gradient(135deg, #a98b5d 0%, #8a7249 100%)'
                shimmerColor='#dcd7ce'
              >
                Request Investor Memo
              </ShimmerButton>
              <Link
                href='#how-it-works'
                className='px-8 py-4 rounded-lg font-semibold border-2 border-[#5c5d63] text-[#dcd7ce] hover:border-[#a98b5d] transition-all duration-300'
              >
                See How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='py-16 bg-gradient-to-b from-black to-[#232428]'>
          <div className='max-w-6xl mx-auto px-6'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
              <div className='space-y-2'>
                <div className='text-4xl md:text-5xl font-bold text-[#a98b5d]'>
                  <NumberTicker value={95} />%
                </div>
                <p className='text-neutral-400'>Quality Score Accuracy</p>
              </div>
              <div className='space-y-2'>
                <div className='text-4xl md:text-5xl font-bold text-[#a98b5d]'>
                  <NumberTicker value={73} />%
                </div>
                <p className='text-neutral-400'>Noise Reduction</p>
              </div>
              <div className='space-y-2'>
                <div className='text-4xl md:text-5xl font-bold text-[#a98b5d]'>
                  <NumberTicker value={48} />h
                </div>
                <p className='text-neutral-400'>Average Review Time</p>
              </div>
              <div className='space-y-2'>
                <div className='text-4xl md:text-5xl font-bold text-[#a98b5d]'>
                  <NumberTicker value={12} />x
                </div>
                <p className='text-neutral-400'>Better Signal-to-Noise</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id='how-it-works' className='py-20 px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                How NartaQ Works for{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  Investors
                </span>
              </h2>
              <p className='text-xl text-neutral-300 max-w-3xl mx-auto'>
                A systematic approach to startup evaluation that saves time and improves decision quality
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <MagicCard
                className='p-8 h-full'
                gradientColor='#a98b5d'
                gradientOpacity={0.1}
              >
                <div className='space-y-6'>
                  <div className='w-16 h-16 rounded-full bg-gradient-to-br from-[#a98b5d] to-[#8a7249] flex items-center justify-center text-2xl font-bold text-black'>
                    1
                  </div>
                  <h3 className='text-2xl font-semibold text-[#dcd7ce]'>
                    Set Your Criteria
                  </h3>
                  <p className='text-neutral-300 leading-relaxed'>
                    Define your investment thesis: stage, sector, geography, ticket size, and specific requirements. Our AI learns your preferences.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <span className='px-3 py-1 bg-[#a98b5d]/20 text-[#a98b5d] rounded-full text-sm'>Stage Matching</span>
                    <span className='px-3 py-1 bg-[#a98b5d]/20 text-[#a98b5d] rounded-full text-sm'>Sector Focus</span>
                    <span className='px-3 py-1 bg-[#a98b5d]/20 text-[#a98b5d] rounded-full text-sm'>Geo Preferences</span>
                  </div>
                </div>
              </MagicCard>

              <MagicCard
                className='p-8 h-full'
                gradientColor='#5c5d63'
                gradientOpacity={0.1}
              >
                <div className='space-y-6'>
                  <div className='w-16 h-16 rounded-full bg-gradient-to-br from-[#5c5d63] to-[#3e3f44] flex items-center justify-center text-2xl font-bold text-white'>
                    2
                  </div>
                  <h3 className='text-2xl font-semibold text-[#dcd7ce]'>
                    AI-Powered Screening
                  </h3>
                  <p className='text-neutral-300 leading-relaxed'>
                    Startups submit decks through our platform. Our AI evaluates them against your rubric, scoring market size, team, traction, and fit.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <span className='px-3 py-1 bg-[#5c5d63]/20 text-[#dcd7ce] rounded-full text-sm'>Market Analysis</span>
                    <span className='px-3 py-1 bg-[#5c5d63]/20 text-[#dcd7ce] rounded-full text-sm'>Team Assessment</span>
                    <span className='px-3 py-1 bg-[#5c5d63]/20 text-[#dcd7ce] rounded-full text-sm'>Traction Review</span>
                  </div>
                </div>
              </MagicCard>

              <MagicCard
                className='p-8 h-full'
                gradientColor='#dcd7ce'
                gradientOpacity={0.1}
              >
                <div className='space-y-6'>
                  <div className='w-16 h-16 rounded-full bg-gradient-to-br from-[#dcd7ce] to-[#b8b3a8] flex items-center justify-center text-2xl font-bold text-black'>
                    3
                  </div>
                  <h3 className='text-2xl font-semibold text-[#dcd7ce]'>
                    Curated Introductions
                  </h3>
                  <p className='text-neutral-300 leading-relaxed'>
                    Only startups that meet your threshold get routed to you. Each intro includes AI analysis, key metrics, and next steps.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <span className='px-3 py-1 bg-[#dcd7ce]/20 text-[#dcd7ce] rounded-full text-sm'>Quality Filter</span>
                    <span className='px-3 py-1 bg-[#dcd7ce]/20 text-[#dcd7ce] rounded-full text-sm'>Smart Routing</span>
                    <span className='px-3 py-1 bg-[#dcd7ce]/20 text-[#dcd7ce] rounded-full text-sm'>Rich Context</span>
                  </div>
                </div>
              </MagicCard>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-20 bg-gradient-to-b from-[#232428] to-black'>
          <div className='max-w-6xl mx-auto px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                Why Leading Investors Choose{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  NartaQ
                </span>
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <MagicCard className='p-8'>
                <div className='space-y-4'>
                  <div className='text-4xl'>🎯</div>
                  <h3 className='text-2xl font-semibold text-[#a98b5d]'>Signal You Can Trust</h3>
                  <p className='text-neutral-300'>
                    Structured rubrics and reviewer accountability eliminate spray-and-pray submissions. Every startup is pre-qualified against your specific criteria.
                  </p>
                </div>
              </MagicCard>

              <MagicCard className='p-8'>
                <div className='space-y-4'>
                  <div className='text-4xl'>⚡</div>
                  <h3 className='text-2xl font-semibold text-[#a98b5d]'>Save 10+ Hours Weekly</h3>
                  <p className='text-neutral-300'>
                    Stop reviewing hundreds of irrelevant decks. Our AI does the initial screening, so you only see opportunities that match your thesis.
                  </p>
                </div>
              </MagicCard>

              <MagicCard className='p-8'>
                <div className='space-y-4'>
                  <div className='text-4xl'>🔍</div>
                  <h3 className='text-2xl font-semibold text-[#a98b5d]'>Deep Market Intelligence</h3>
                  <p className='text-neutral-300'>
                    Get comprehensive analysis on market size, competitive landscape, and growth potential before your first meeting.
                  </p>
                </div>
              </MagicCard>

              <MagicCard className='p-8'>
                <div className='space-y-4'>
                  <div className='text-4xl'>🤝</div>
                  <h3 className='text-2xl font-semibold text-[#a98b5d]'>Warm Introductions Only</h3>
                  <p className='text-neutral-300'>
                    Every introduction comes with context, mutual interest confirmation, and clear next steps. No cold outreach or spam.
                  </p>
                </div>
              </MagicCard>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='py-20 px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                Trusted by Leading{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  Investors
                </span>
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <MagicCard className='p-8'>
                <div className='space-y-6'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#a98b5d] to-[#8a7249] flex items-center justify-center text-white font-bold'>
                      JD
                    </div>
                    <div>
                      <h4 className='font-semibold text-[#dcd7ce]'>Jean Dupont</h4>
                      <p className='text-sm text-neutral-400'>Partner, TechVentures Paris</p>
                    </div>
                  </div>
                  <p className='text-neutral-300 italic'>
                    &ldquo;NartaQ has transformed our deal flow. We&rsquo;re seeing 3x more qualified opportunities and spending 70% less time on initial screening.&rdquo;
                  </p>
                </div>
              </MagicCard>

              <MagicCard className='p-8'>
                <div className='space-y-6'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#5c5d63] to-[#3e3f44] flex items-center justify-center text-white font-bold'>
                      AB
                    </div>
                    <div>
                      <h4 className='font-semibold text-[#dcd7ce]'>Ahmed Ben Ali</h4>
                      <p className='text-sm text-neutral-400'>Managing Director, MENA Growth Fund</p>
                    </div>
                  </div>
                  <p className='text-neutral-300 italic'>
                    &ldquo;The Franco-Tunisian corridor focus is brilliant. We&rsquo;re finding exceptional startups we never would have discovered otherwise.&rdquo;
                  </p>
                </div>
              </MagicCard>

              <MagicCard className='p-8'>
                <div className='space-y-6'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#dcd7ce] to-[#b8b3a8] flex items-center justify-center text-black font-bold'>
                      SM
                    </div>
                    <div>
                      <h4 className='font-semibold text-[#dcd7ce]'>Sarah Martin</h4>
                      <p className='text-sm text-neutral-400'>Principal, Innovation Capital</p>
                    </div>
                  </div>
                  <p className='text-neutral-300 italic'>
                    &ldquo;The AI screening is incredibly accurate. It understands our investment criteria better than most junior analysts.&rdquo;
                  </p>
                </div>
              </MagicCard>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className='py-20 bg-gradient-to-b from-black to-[#232428]'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Simple,{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Transparent Pricing
              </span>
            </h2>
            <p className='text-xl text-neutral-300 mb-12 max-w-2xl mx-auto'>
              Pay only for qualified introductions. No monthly fees, no long-term contracts.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
              <MagicCard className='p-8'>
                <div className='space-y-6'>
                  <h3 className='text-2xl font-semibold text-[#dcd7ce]'>Credit Pack</h3>
                  <div className='text-4xl font-bold text-[#a98b5d]'>
                    Contact for Pricing
                  </div>
                  <p className='text-neutral-300'>
                    Pay per qualified introduction. Pricing varies by stage and sector focus.
                  </p>
                  <ul className='space-y-3 text-left'>
                    <li className='flex items-center space-x-3'>
                      <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                      <span>AI-powered deck screening</span>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                      <span>Curated investor matching</span>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                      <span>Detailed analysis reports</span>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                      <span>Follow-up tracking</span>
                    </li>
                  </ul>
                </div>
              </MagicCard>

              <MagicCard className='p-8 border-2 border-[#a98b5d]'>
                <div className='space-y-6'>
                  <div className='bg-[#a98b5d] text-black px-3 py-1 rounded-full text-sm font-medium inline-block'>
                    Most Popular
                  </div>
                  <h3 className='text-2xl font-semibold text-[#dcd7ce]'>Enterprise</h3>
                  <div className='text-4xl font-bold text-[#a98b5d]'>
                    Custom
                  </div>
                  <p className='text-neutral-300'>
                    Dedicated sourcing, analytics, and white-glove service for institutional investors.
                  </p>
                  <ul className='space-y-3 text-left'>
                    <li className='flex items-center space-x-3'>
                      <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                      <span>Dedicated relationship manager</span>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                      <span>Custom screening criteria</span>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                      <span>Advanced analytics dashboard</span>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                      <span>Priority deal flow</span>
                    </li>
                  </ul>
                </div>
              </MagicCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 px-6'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Ready to Upgrade Your{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Deal Flow?
              </span>
            </h2>
            <p className='text-xl text-neutral-300 mb-8 max-w-2xl mx-auto'>
              Join leading investors who are already using NartaQ to find better deals faster.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <ShimmerButton
                className='px-8 py-4 text-lg font-semibold'
                background='linear-gradient(135deg, #a98b5d 0%, #8a7249 100%)'
                shimmerColor='#dcd7ce'
              >
                <a href='mailto:invest@nartaq.com?subject=Investor%20Memo%20Request' className='flex items-center space-x-2'>
                  <span>Request Investor Memo</span>
                  <span>→</span>
                </a>
              </ShimmerButton>
              <Link
                href='/investors-startups'
                className='px-8 py-4 rounded-lg font-semibold border-2 border-[#5c5d63] text-[#dcd7ce] hover:border-[#a98b5d] transition-all duration-300'
              >
                Learn More
              </Link>
            </div>
            <p className='text-sm text-neutral-400 mt-6'>
              NDA-protected investor memo available upon request
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}