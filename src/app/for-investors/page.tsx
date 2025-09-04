
import {
  Eye,
  Gem,
  Search,
  Shield,
  TrendingUp,
  Clock,
  Target,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Investors - AI-Curated Deal Flow | NartaQ',
  description: 'Stop sifting through noise. Access pre-vetted, high-signal startups through our AI-powered investor platform. Join the founding cohort for exclusive deal access.',
  keywords: [
    'investor deal flow',
    'startup investing', 
    'venture capital platform',
    'AI investor matching',
    'pre-vetted startups',
    'investment opportunities',
    'startup vetting',
    'investor network'
  ],
  openGraph: {
    title: 'For Investors - AI-Curated Deal Flow | NartaQ',
    description: 'Your next investment, curated by AI. Access pre-vetted startups through our intelligent matching platform designed for serious investors.',
    siteName: 'NartaQ',
  },
  twitter: {
    title: 'For Investors - AI-Curated Deal Flow | NartaQ',
    description: 'Your next investment, curated by AI. Access pre-vetted startups through our intelligent matching platform designed for serious investors.',
  },
  alternates: {
    canonical: 'https://www.nartaq.com/for-investors',
  },
}

export default function ForInvestorsPage() {
  return (
    <>
      <div className='min-h-screen bg-black text-white'>
      {/* Hero Section */}
      <section className='py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black to-[#0a0a0a]'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-8'>
            <Gem className='w-4 h-4 text-[#a98b5d]' />
            <span className='text-sm font-medium text-[#dcd7ce]'>
              FOR INVESTORS
            </span>
          </div>

          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8'>
            <span className='text-[#dcd7ce]'>Your Next Investment,</span>{' '}
            <span className='text-[#a98b5d]'>Curated by AI</span>
          </h1>
          <div className='w-24 h-0.5 bg-[#a98b5d] mx-auto mb-8'></div>
          <p className='text-lg sm:text-xl text-[#dcd7ce]/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
            Stop sifting through noise. NartaQ is the AI-powered platform for
            investors seeking high-signal, pre-vetted startups globally.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              href='/apply'
              className='group relative bg-[#a98b5d] hover:bg-[#a98b5d]/90 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#a98b5d]/25'
            >
              <span className='relative z-10 flex items-center'>
                <TrendingUp className='w-5 h-5 mr-2' />
                Join the Founding Investor Cohort
              </span>
            </Link>
            <p className='text-gray-400 text-sm'>
              Get first access to an exclusive pipeline of vetted founders.{' '}
              <span className='text-[#a98b5d] font-semibold'>
                Limited spots available.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className='py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-black'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6'>
              <Clock className='w-4 h-4 text-[#a98b5d]' />
              <span className='text-sm font-medium text-[#dcd7ce]'>
                THE PROBLEM
              </span>
            </div>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
              <span className='text-[#dcd7ce]'>The Signal is Buried in</span>{' '}
              <span className='text-[#a98b5d]'>the Noise</span>
            </h2>
            <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              You need to find the best innovation, but the current system makes
              it a full-time job. Finding a single high-potential deal means
              sifting through hundreds of low-quality introductions.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            <div className='relative p-8 rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent hover:border-red-500/40 transition-all duration-300 h-full'>
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-500/5 flex items-center justify-center'>
                <Search className='w-8 h-8 text-red-400' />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-red-400 mb-4'>
                Endless Sifting, Zero Signal
              </h3>
              <div className='w-12 h-0.5 bg-red-400 mx-auto mb-4'></div>
              <p className='text-[#dcd7ce] leading-relaxed mb-4'>
                Endless decks and cold emails from unvetted founders. Your inbox
                is flooded with irrelevant opportunities.
              </p>
              <div className='text-sm font-semibold text-red-400 bg-red-500/10 px-3 py-1 rounded-full inline-block'>
                Low signal
              </div>
            </div>

            <div className='relative p-8 rounded-2xl border border-gray-500/20 bg-gradient-to-br from-red-500/5 to-transparent hover:border-gray-500/40 transition-all duration-300 h-full'>
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-500/20 to-gray-500/5 flex items-center justify-center'>
                <Shield className='w-8 h-8 text-red-400' />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-red-400 mb-4'>
                The Best Deals Are Hidden
              </h3>
              <div className='w-12 h-0.5 bg-gray-400 mx-auto mb-4'></div>
              <p className='text-[#dcd7ce] leading-relaxed mb-4'>
                Your deal flow is limited by your personal network and
                geography. Missing hidden gems outside your circle.
              </p>
              <div className='text-sm font-semibold text-red-400 bg-gray-500/10 px-3 py-1 rounded-full inline-block'>
                Network bias
              </div>
            </div>

            <div className='relative p-8 rounded-2xl border border-gray-500/20 bg-gradient-to-br from-red-500/5 to-transparent hover:border-gray-500/40 transition-all duration-300 h-full'>
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-500/20 to-gray-500/5 flex items-center justify-center'>
                <Clock className='w-8 h-8 text-red-400' />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-red-400 mb-4'>
                Your Time Is Your Most Valuable Asset
              </h3>
              <div className='w-12 h-0.5 bg-gray-400 mx-auto mb-4'></div>
              <p className='text-[#dcd7ce] leading-relaxed mb-4'>
                Hours wasted on manual sourcing, filtering, and vetting. Your
                time should be spent on making great investments.
              </p>
              <div className='text-sm font-semibold text-red-400 bg-gray-500/10 px-3 py-1 rounded-full inline-block'>
                Time waste
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className='py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black to-[#0a0a0a]'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6'>
              <CheckCircle className='w-4 h-4 text-[#a98b5d]' />
              <span className='text-sm font-medium text-[#dcd7ce]'>
                OUR SOLUTION
              </span>
            </div>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
              <span className='text-[#dcd7ce]'>Beyond the Network:</span>{' '}
              <span className='text-[#a98b5d]'>Our AI-Powered Solution</span>
            </h2>
            <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              NartaQ is your intelligent partner for sourcing. Our platform
              leverages AI to give you a clear, data-driven view of the market,
              helping you find opportunities that are a perfect fit for your
              criteria.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='space-y-8'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-[#a98b5d]/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                    <Target className='w-6 h-6 text-[#a98b5d]' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold mb-2'>
                      Precision Matching
                    </h3>
                    <p className='text-gray-300'>
                      Our AI engine analyzes hundreds of data points to find
                      founders who match your investment criteria, from sector
                      and stage to team experience.
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-[#a98b5d]/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                    <Shield className='w-6 h-6 text-[#a98b5d]' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold mb-2'>Vetted for You</h3>
                    <p className='text-gray-300'>
                      We verify every founder on the platform. Get essential
                      data on their business model, market size, and
                      traction—all in one place.
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-[#a98b5d]/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                    <Gem className='w-6 h-6 text-[#a98b5d]' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold mb-2'>
                      Merit-Based Deal Flow
                    </h3>
                    <p className='text-gray-300'>
                      Our system is built to eliminate bias, ensuring that you
                      discover brilliant founders regardless of their location
                      or network.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='bg-gradient-to-br from-[#a98b5d]/10 to-gray-900/30 rounded-3xl p-8 border border-[#a98b5d]/20 backdrop-blur-xl'>
                <div className='text-center mb-8'>
                  <h4 className='text-lg font-semibold text-[#a98b5d] mb-2'>
                    AI-Powered Filtering Process
                  </h4>
                  <p className='text-sm text-gray-400'>
                    From noise to signal in three steps
                  </p>
                </div>

                <div className='space-y-6'>
                  {/* Visual representation of filtering */}
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-400'>
                      Raw Applications
                    </span>
                    <div className='flex gap-1'>
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className='w-2 h-6 bg-gray-600 rounded-sm'
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className='flex items-center justify-center'>
                    <div className='w-8 h-1 bg-[#a98b5d] rounded-full'></div>
                    <div className='mx-2 text-[#a98b5d] text-xs font-semibold'>
                      AI FILTER
                    </div>
                    <div className='w-8 h-1 bg-[#a98b5d] rounded-full'></div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-400'>
                      High-Quality Matches
                    </span>
                    <div className='flex gap-1'>
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className='w-2 h-6 bg-[#a98b5d] rounded-sm'
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className='text-center pt-4 border-t border-gray-700'>
                    <p className='text-xs text-gray-400 italic'>
                      Focus on what matters: the right opportunities, at the
                      right time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Investor's Workflow Section */}
      <section className='py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-black'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6'>
              <Target className='w-4 h-4 text-[#a98b5d]' />
              <span className='text-sm font-medium text-[#dcd7ce]'>
                HOW IT WORKS
              </span>
            </div>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
              <span className='text-[#dcd7ce]'>Your 3-Step</span>{' '}
              <span className='text-[#a98b5d]'>Path to Investment</span>
            </h2>
          </div>

          <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            <div className='text-center'>
              <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
                <div className='w-16 h-16 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-2xl flex items-center justify-center text-black font-bold text-xl mb-6 mx-auto'>
                  1
                </div>
                <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                  Define Your Criteria
                </h3>
                <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
                <p className='text-[#dcd7ce] leading-relaxed'>
                  Create your profile and tell us your investment preferences.
                  Define your sectors, stages, check sizes, and deal criteria.
                </p>
              </div>
            </div>

            <div className='text-center'>
              <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
                <div className='w-16 h-16 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-2xl flex items-center justify-center text-black font-bold text-xl mb-6 mx-auto'>
                  2
                </div>
                <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                  Get Matched with Precision
                </h3>
                <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
                <p className='text-[#dcd7ce] leading-relaxed'>
                  Our AI delivers a curated list of high-probability matches.
                  Each founder is pre-vetted and scored based on your criteria.
                </p>
              </div>
            </div>

            <div className='text-center'>
              <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
                <div className='w-16 h-16 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-2xl flex items-center justify-center text-black font-bold text-xl mb-6 mx-auto'>
                  3
                </div>
                <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                  Connect, Close & Fund
                </h3>
                <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
                <p className='text-[#dcd7ce] leading-relaxed'>
                  Our platform provides a secure environment for communication
                  and streamlined tools for deal execution, including automated
                  documentation and fund transfer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className='py-24 bg-gradient-to-b from-black to-black'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            <span className='text-[#dcd7ce]'>The Future of Funding</span>{' '}
            <span className='text-[#a98b5d]'>Starts Here</span>
          </h2>
          <div className='w-24 h-0.5 bg-[#a98b5d] mx-auto mb-8'></div>
          <p className='text-xl text-[#dcd7ce]/80 mb-8 max-w-3xl mx-auto leading-relaxed'>
            Join the founding cohort of investors who are getting first access
            to the next generation of exceptional founders. Stop hunting for a
            signal and start investing in the future.
          </p>

          <div className='flex justify-center items-center mb-12'>
            <Link
              href='/apply'
              className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#a98b5d]/50'
            >
              <Target className='w-5 h-5' />
              Join the Founding Investor Cohort
              <ArrowRight className='w-5 h-5' />
            </Link>
          </div>

          <p className='text-sm text-gray-400 mb-8'>
            Get first access to an exclusive pipeline of vetted founders.{' '}
            <span className='text-[#a98b5d] font-semibold'>
              Limited spots available.
            </span>
          </p>

          <div className='mt-6 flex items-center justify-center space-x-6 text-sm text-gray-400'>
            <div className='flex items-center'>
              <Shield className='w-4 h-4 mr-1' />
              Accredited investors only
            </div>
            <div className='flex items-center'>
              <Eye className='w-4 h-4 mr-1' />
              Exclusive deal access
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
