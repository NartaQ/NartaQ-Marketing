import { Users, Globe, Target, Heart, Star, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About NartaQ - Building a Merit-Based Future for Startup Funding',
  description: 'Learn about NartaQ\'s mission to democratize startup funding through AI-powered venture matchmaking. Connecting exceptional founders with the right investors globally.',
  keywords: [
    'merit-based funding',
    'venture capital democratization',
    'AI venture matching',
    'startup ecosystem',
    'equal opportunity funding',
    'geographic bias',
    'venture capital reform'
  ],
  openGraph: {
    title: 'About NartaQ - Building a Merit-Based Future for Startup Funding',
    description: 'Learn about NartaQ\'s mission to democratize startup funding through AI-powered venture matchmaking globally.',
    siteName: 'NartaQ',
  },
  twitter: {
    title: 'About NartaQ - Building a Merit-Based Future for Startup Funding',
    description: 'Learn about NartaQ\'s mission to democratize startup funding through AI-powered venture matchmaking globally.',
  },
  alternates: {
    canonical: 'https://www.nartaq.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <div className='min-h-screen bg-black text-white'>
      <div className='pt-32 pb-16'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Hero Section */}
          <div className='text-center mb-20'>
            <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-8'>
              <Heart className='w-4 h-4' />
              OUR STORY
            </div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
              <span className='text-[#dcd7ce]'>Building a</span>
              <br />
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Merit-Based Future
              </span>
            </h1>
            <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8'>
              We believe exceptional founders deserve access to capital
              regardless of their network, location, or background. NartaQ is
              our answer to a broken system that favors connections over
              innovation and perpetuates inequality in startup funding.
            </p>

            <div className='bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/5 border border-[#a98b5d]/20 rounded-2xl p-8 max-w-5xl mx-auto'>
              <p className='text-gray-300 leading-relaxed mb-4'>
                The traditional venture capital model relies heavily on warm
                introductions, alumni networks, and geographic proximity to
                Silicon Valley. This system inadvertently excludes brilliant
                founders from underrepresented regions, backgrounds, and
                industries who lack the "right" connections but possess
                groundbreaking ideas and execution capability.
              </p>
              <p className='text-gray-300 leading-relaxed mb-4'>
                Our platform leverages artificial intelligence and comprehensive
                data analysis to evaluate startups based on merit: market
                opportunity, team capability, product innovation, traction
                metrics, and growth potential. By removing human bias and
                network dependencies from initial screening, we create equal
                opportunities for all exceptional founders.
              </p>
              <p className='text-gray-300 leading-relaxed'>
                Starting with emerging markets, we're proving that
                geography shouldn't determine access to capital. Our vision
                extends globally, connecting underserved startup ecosystems with
                appropriate investors who value innovation over introductions.
              </p>
            </div>
          </div>

          {/* Our Vision Section */}
          <section className='py-16 sm:py-24 lg:py-32'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6'>
                <Target className='w-4 h-4 text-[#a98b5d]' />
                <span className='text-sm font-medium text-[#dcd7ce]'>
                  OUR VISION
                </span>
              </div>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#dcd7ce] mb-6'>
                Democratizing Startup{' '}
                <span className='text-[#a98b5d]'>Funding</span>
              </h2>
              <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
                The current venture capital system prioritizes networks over
                merit. We're building the infrastructure to change that.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
              <div className='text-center'>
                <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
                  <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                    <Users className='w-8 h-8 text-[#a98b5d]' />
                  </div>
                  <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                    Merit Over Networks
                  </h3>
                  <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
                  <p className='text-[#dcd7ce] leading-relaxed'>
                    We prioritize breakthrough innovations over warm
                    introductions, ensuring exceptional founders get the
                    recognition they deserve.
                  </p>
                </div>
              </div>

              <div className='text-center'>
                <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
                  <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                    <Globe className='w-8 h-8 text-[#a98b5d]' />
                  </div>
                  <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                    Global Access
                  </h3>
                  <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
                  <p className='text-[#dcd7ce] leading-relaxed'>
                    Breaking down geographic barriers so brilliant founders
                    everywhere have equal access to capital and opportunities.
                  </p>
                </div>
              </div>

              <div className='text-center'>
                <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
                  <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                    <Target className='w-8 h-8 text-[#a98b5d]' />
                  </div>
                  <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                    Data-Driven Decisions
                  </h3>
                  <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
                  <p className='text-[#dcd7ce] leading-relaxed'>
                    Using AI and systematic evaluation to make funding decisions
                    based on potential impact rather than pedigree or location.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Team Section */}
          <section id='team' className='py-16 sm:py-24 lg:py-32'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6'>
                <Users className='w-4 h-4 text-[#a98b5d]' />
                <span className='text-sm font-medium text-[#dcd7ce]'>
                  THE TEAM
                </span>
              </div>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#dcd7ce] mb-6'>
                Meet the <span className='text-[#a98b5d]'>Founders</span>
              </h2>
              <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
                Two founders united by a shared vision of democratizing startup
                funding
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
              {/* Riadh Profile */}
              <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 text-center'>
                <div className='w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] p-0.5'>
                  <div className='w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center'>
                    <Image
                      title='riadhjouini'
                      width={100}
                      height={100}
                      src='/images/team/riadh.avif'
                      alt='Riadh Jouini'
                      className='w-full h-full object-cover rounded-2xl'
                      
                    />
                  </div>
                </div>
                <h3 className='text-xl sm:text-2xl font-bold text-[#dcd7ce] mb-2'>
                  Riadh Jouini
                </h3>
                <p className='text-[#a98b5d] font-semibold mb-4'>
                  Co-Founder & CEO
                </p>
                <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-6'></div>

                <div className='flex justify-center gap-4'>
                  <Link
                    title='Riadh Jouini LinkedIn Profile'
                    href='https://linkedin.com/in/riadh-jouini'
                    className='w-10 h-10 rounded-xl bg-[#a98b5d]/20 flex items-center justify-center text-[#a98b5d] hover:bg-[#a98b5d]/30 transition-colors'
                  >
                    <Linkedin aria-label='LinkedIn Profile' className='w-5 h-5' />
                  </Link>
                </div>
              </div>

              {/* Jesser Profile */}
              <div
     
                className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 text-center'
              >
                <div className='w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] p-0.5'>
                  <div className='w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center'>
                    <Image
                      width={100}
                      height={100}
                      src='/images/team/jesser.avif'
                      alt='Jesser Bedoui'
                      className='w-full h-full object-cover rounded-2xl'
                      title='jesserbedoui'
                    />
                  </div>
                </div>
                <h3 className='text-xl sm:text-2xl font-bold text-[#dcd7ce] mb-2'>
                  Jesser Bedoui
                </h3>
                <p className='text-[#a98b5d] font-semibold mb-4'>
                  Co-Founder & CTO
                </p>
                <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-6'></div>
                <div className='flex justify-center gap-4'>
                  <Link
                    href='https://linkedin.com/in/jesser-bedoui'
                    title='Jesser Bedoui LinkedIn Profile'
                    className='w-10 h-10 rounded-xl bg-[#a98b5d]/20 flex items-center justify-center text-[#a98b5d] hover:bg-[#a98b5d]/30 transition-colors'
                  >
                    <Linkedin aria-label='LinkedIn Profile' className='w-5 h-5' />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Our Focus Section */}
          <section id='focus' className='py-16 sm:py-24 lg:py-32'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6'>
                <Globe className='w-4 h-4 text-[#a98b5d]' />
                <span className='text-sm font-medium text-[#dcd7ce]'>
                  OUR FOCUS
                </span>
              </div>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#dcd7ce] mb-6'>
                Emerging Markets{' '}
                <span className='text-[#a98b5d]'>Innovation</span>
              </h2>
              <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
                Our strategic focus on regions with exceptional talent
                density, cultural diversity, and untapped potential
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
              <div className='text-center'>
                <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
                  <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                    <Users className='w-8 h-8 text-[#a98b5d]' />
                  </div>
                  <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                    Exceptional Talent
                  </h3>
                  <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
                  <p className='text-[#dcd7ce] leading-relaxed'>
                    Emerging markets produce world-class engineers, researchers, and
                    entrepreneurs with diverse cultural perspectives and
                    competitive advantages in global markets.
                  </p>
                </div>
              </div>

              <div className='text-center'>
                <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
                  <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                    <Globe className='w-8 h-8 text-[#a98b5d]' />
                  </div>
                  <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                    Strategic Location
                  </h3>
                  <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
                  <p className='text-[#dcd7ce] leading-relaxed'>
                    Strategic positioning in key global markets with
                    regulatory compatibility, timezone alignment, and growing policy
                    support for tech innovation and cross-border partnerships.
                  </p>
                </div>
              </div>

              <div className='text-center'>
                <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
                  <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                    <Target className='w-8 h-8 text-[#a98b5d]' />
                  </div>
                  <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                    Untapped Potential
                  </h3>
                  <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
                  <p className='text-[#dcd7ce] leading-relaxed'>
                    Systematic underinvestment despite exceptional founder
                    quality creates massive opportunities. Growing success
                    stories demonstrate the corridor's potential for 10x
                    returns.
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-16 max-w-4xl mx-auto text-center'>
              <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent'>
                <h4 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-6'>
                  Why Start Here?
                </h4>
                <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-6'></div>
                <div className='space-y-4 text-[#dcd7ce] leading-relaxed'>
                  <p>
                    Emerging markets represent the perfect testing
                    ground for our vision: focused geographic regions with
                    cultural diversity, regulatory opportunities, and
                    exceptional founder quality that's systematically
                    undervalued by traditional VC.
                  </p>
                  <p>
                    By proving our model in these markets, we create a blueprint for
                    expanding to other high-potential regions
                    globally—ultimately building the infrastructure for truly
                    merit-based startup funding worldwide.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className='text-center py-16 sm:py-24 lg:py-32'>
            <div className='relative p-12 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent max-w-4xl mx-auto'>
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                <Star className='w-8 h-8 text-[#a98b5d]' />
              </div>
              <h3 className='text-3xl sm:text-4xl font-bold text-[#dcd7ce] mb-6'>
                Join Our <span className='text-[#a98b5d]'>Mission</span>
              </h3>
              <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-6'></div>
              <p className='text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed'>
                Be part of building a more equitable future for startup funding.
                Whether you're a founder, investor, or ecosystem partner,
                there's a place for you in this revolution.
              </p>
              <div className='grid sm:grid-cols-2 gap-4 max-w-md mx-auto'>
                <Link
                  href='/for-founders'
                  title='For Founders'
                  className='px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300'
                >
                  Join as Founder
                </Link>
                <Link
                  href='/for-investors'
                  title='For Investors'
                  className='px-8 py-4 border border-[#a98b5d]/50 text-[#dcd7ce] font-semibold rounded-xl hover:bg-[#a98b5d]/10 transition-all duration-300'
                >
                  Join as Investor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
