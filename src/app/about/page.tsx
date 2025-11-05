import { Users, Globe, Target, Lightbulb, Rocket, TrendingUp, Linkedin, Building2, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About NartaQ - Democratizing Access to Startup Capital',
  description: 'NartaQ is building the infrastructure for merit-based startup funding. We connect exceptional founders with the right investors, regardless of geography or network.',
  keywords: [
    'startup funding platform',
    'venture capital',
    'emerging markets',
    'Africa startups',
    'developing countries investment',
    'blockchain governance',
    'DAO equity management'
  ],
  openGraph: {
    title: 'About NartaQ - Democratizing Access to Startup Capital',
    description: 'Building the infrastructure for merit-based startup funding across Africa and developing countries.',
    siteName: 'NartaQ',
  },
  twitter: {
    title: 'About NartaQ - Democratizing Access to Startup Capital',
    description: 'Building the infrastructure for merit-based startup funding across Africa and developing countries.',
  },
  alternates: {
    canonical: 'https://www.nartaq.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <div className='pt-32 pb-16'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          
          {/* Hero Section */}
          <div className='text-center mb-32'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight'>
              <span className='block text-[#dcd7ce] mb-2'>Building the infrastructure for</span>
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                merit-based startup funding
              </span>
            </h1>
            <p className='text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              We're connecting exceptional founders with the right investors across Africa and developing countries, 
              where talent is abundant but access to capital remains broken.
            </p>
          </div>

          {/* Stats Banner */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 max-w-5xl mx-auto'>
            <div className='text-center'>
              <div className='text-4xl font-bold text-[#a98b5d] mb-2'>850K+</div>
              <div className='text-sm text-gray-400'>Market Opportunity<br/>(Startups Globally)</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-[#a98b5d] mb-2'>$171B+</div>
              <div className='text-sm text-gray-400'>Capital Flowing<br/>(VC Assets)</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-[#a98b5d] mb-2'>192</div>
              <div className='text-sm text-gray-400'>Countries<br/>(Global Reach)</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-[#a98b5d] mb-2'>10x</div>
              <div className='text-sm text-gray-400'>Potential Returns<br/>(Emerging Markets)</div>
            </div>
          </div>

          {/* WHAT Section */}
          <section className='mb-32'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-6'>
                <Lightbulb className='w-4 h-4' />
                WHAT WE DO
              </div>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#dcd7ce] mb-6'>
                A platform where <span className='text-[#a98b5d]'>merit wins</span>
              </h2>
            </div>

            <div className='max-w-4xl mx-auto mb-12'>
              <p className='text-lg text-gray-300 leading-relaxed mb-6'>
                NartaQ is the <strong className='text-[#dcd7ce]'>first venture matchmaking platform</strong> purpose-built 
                for Africa and developing countries. We combine intelligent founder-investor matching with institutional-grade 
                infrastructure—giving every startup the governance, transparency, and credibility they need from day one.
              </p>
              <p className='text-lg text-gray-300 leading-relaxed'>
                Unlike traditional platforms that favor warm introductions and Silicon Valley networks, we use 
                <strong className='text-[#dcd7ce]'> data-driven evaluation</strong> to assess startups based on what actually 
                matters: market opportunity, team capability, product innovation, and traction metrics.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-6'>
              <div className='p-6 rounded-xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all'>
                <Zap className='w-8 h-8 text-[#a98b5d] mb-4' />
                <h3 className='text-xl font-bold text-[#dcd7ce] mb-3'>Smart Matching</h3>
                <p className='text-gray-400'>AI-powered algorithms connect founders with investors based on sector expertise, stage focus, and strategic fit.</p>
              </div>
              <div className='p-6 rounded-xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all'>
                <Building2 className='w-8 h-8 text-[#a98b5d] mb-4' />
                <h3 className='text-xl font-bold text-[#dcd7ce] mb-3'>DAO Governance</h3>
                <p className='text-gray-400'>Each startup gets its own blockchain-based DAO, turning governance tokens into company shares with full transparency.</p>
              </div>
              <div className='p-6 rounded-xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all'>
                <TrendingUp className='w-8 h-8 text-[#a98b5d] mb-4' />
                <h3 className='text-xl font-bold text-[#dcd7ce] mb-3'>Full Transparency</h3>
                <p className='text-gray-400'>Real-time cap tables, automated compliance, and institutional-grade record-keeping from day one.</p>
              </div>
            </div>
          </section>

          {/* WHY Section */}
          <section className='mb-32'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-6'>
                <Target className='w-4 h-4' />
                WHY IT MATTERS
              </div>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#dcd7ce] mb-6'>
                The old system is <span className='text-[#a98b5d]'>fundamentally broken</span>
              </h2>
            </div>

            <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12'>
              <div className='p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20'>
                <h3 className='text-2xl font-bold text-red-400 mb-4'>The Problem</h3>
                <ul className='space-y-3 text-gray-300'>
                  <li className='flex items-start gap-3'>
                    <span className='text-red-400 mt-1'>•</span>
                    <span><strong>Network bias:</strong> 70% of VC deals come from warm introductions, excluding brilliant founders without "connections"</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-red-400 mt-1'>•</span>
                    <span><strong>Geographic inequality:</strong> Silicon Valley receives 50x more VC funding per capita than Africa</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-red-400 mt-1'>•</span>
                    <span><strong>Broken infrastructure:</strong> Traditional cap tables live in spreadsheets, creating opacity and governance chaos</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-red-400 mt-1'>•</span>
                    <span><strong>Missed opportunity:</strong> Exceptional founders in developing countries struggle to access capital despite massive market potential</span>
                  </li>
                </ul>
              </div>

              <div className='p-8 rounded-2xl bg-gradient-to-br from-[#a98b5d]/10 to-transparent border border-[#a98b5d]/20'>
                <h3 className='text-2xl font-bold text-[#a98b5d] mb-4'>Our Solution</h3>
                <ul className='space-y-3 text-gray-300'>
                  <li className='flex items-start gap-3'>
                    <span className='text-[#a98b5d] mt-1'>✓</span>
                    <span><strong>Merit-based matching:</strong> AI evaluates startups on fundamentals—market size, traction, team quality—not pedigree</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-[#a98b5d] mt-1'>✓</span>
                    <span><strong>Focus on underserved:</strong> Purpose-built for Africa and developing countries where talent density is high but capital access is low</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-[#a98b5d] mt-1'>✓</span>
                    <span><strong>Institutional infrastructure:</strong> Blockchain-based DAO governance gives startups enterprise-grade systems from day one</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-[#a98b5d] mt-1'>✓</span>
                    <span><strong>Global ambition:</strong> Prove the model in emerging markets, then scale to democratize startup funding worldwide</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='max-w-4xl mx-auto p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent'>
              <blockquote className='text-xl text-gray-300 italic leading-relaxed text-center'>
                "Access to capital shouldn't depend on your alumni network or geographic proximity to Sand Hill Road. 
                Exceptional founders deserve institutional-grade infrastructure and merit-based access to investors—regardless of where they're building."
              </blockquote>
            </div>
          </section>

          {/* WHO WE ARE Section */}
          <section className='mb-32'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-6'>
                <Users className='w-4 h-4' />
                WHO WE ARE
              </div>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#dcd7ce] mb-6'>
                Two founders, <span className='text-[#a98b5d]'>one vision</span>
              </h2>
            </div>

            <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12'>
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
              <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 text-center'>
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

            <div className='max-w-3xl mx-auto text-center'>
              <p className='text-lg text-gray-300 leading-relaxed'>
                Based in <strong className='text-[#dcd7ce]'>Paris, France</strong>, we're building the infrastructure 
                that will power the next generation of African and developing country startups. Our team combines deep 
                expertise in venture capital, blockchain technology, and emerging markets to deliver institutional-grade 
                solutions purpose-built for underserved founders.
              </p>
            </div>
          </section>

          {/* FOR WHOM Section */}
          <section className='mb-32'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-6'>
                <Globe className='w-4 h-4' />
                FOR WHOM
              </div>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#dcd7ce] mb-6'>
                Built for <span className='text-[#a98b5d]'>exceptional founders</span> everywhere
              </h2>
            </div>

            <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
              <div className='p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent'>
                <Rocket className='w-12 h-12 text-[#a98b5d] mb-6' />
                <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4'>For Founders</h3>
                <p className='text-gray-300 mb-4'>
                  If you're building a scalable startup in Africa or developing countries and struggling to access capital 
                  despite strong fundamentals, we're here for you.
                </p>
                <ul className='space-y-2 text-gray-400'>
                  <li className='flex items-start gap-2'>
                    <span className='text-[#a98b5d] mt-1'>→</span>
                    <span>Merit-based matching with investors in your sector</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-[#a98b5d] mt-1'>→</span>
                    <span>Institutional-grade governance from day one</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-[#a98b5d] mt-1'>→</span>
                    <span>Access to global investor networks</span>
                  </li>
                </ul>
              </div>

              <div className='p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent'>
                <TrendingUp className='w-12 h-12 text-[#a98b5d] mb-6' />
                <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4'>For Investors</h3>
                <p className='text-gray-300 mb-4'>
                  If you're looking for high-potential deals outside traditional networks and want exposure to 
                  emerging markets with 10x upside, we bring you curated opportunities.
                </p>
                <ul className='space-y-2 text-gray-400'>
                  <li className='flex items-start gap-2'>
                    <span className='text-[#a98b5d] mt-1'>→</span>
                    <span>Pre-vetted startups with strong fundamentals</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-[#a98b5d] mt-1'>→</span>
                    <span>Full transparency with blockchain-based cap tables</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-[#a98b5d] mt-1'>→</span>
                    <span>Early access to high-growth markets</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='mt-12 max-w-4xl mx-auto p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent text-center'>
              <p className='text-lg text-gray-300 leading-relaxed'>
                <strong className='text-[#dcd7ce]'>Our focus:</strong> Tech-enabled startups in fintech, e-commerce, 
                logistics, healthcare, education, and B2B SaaS across Africa, the Middle East, Latin America, 
                Southeast Asia, and emerging Europe. If you're solving real problems with scalable solutions in these regions, 
                we want to connect you with the right investors.
              </p>
            </div>
          </section>

          {/* HOW Section */}
          <section className='mb-32'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-6'>
                <Zap className='w-4 h-4' />
                HOW IT WORKS
              </div>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#dcd7ce] mb-6'>
                Simple process, <span className='text-[#a98b5d]'>powerful results</span>
              </h2>
            </div>

            <div className='grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12'>
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center border-2 border-[#a98b5d]/30'>
                  <span className='text-2xl font-bold text-[#a98b5d]'>1</span>
                </div>
                <h4 className='font-bold text-[#dcd7ce] mb-2'>Apply</h4>
                <p className='text-sm text-gray-400'>Submit your startup profile with key metrics and traction data</p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center border-2 border-[#a98b5d]/30'>
                  <span className='text-2xl font-bold text-[#a98b5d]'>2</span>
                </div>
                <h4 className='font-bold text-[#dcd7ce] mb-2'>Get Matched</h4>
                <p className='text-sm text-gray-400'>Our AI evaluates your fundamentals and matches you with relevant investors</p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center border-2 border-[#a98b5d]/30'>
                  <span className='text-2xl font-bold text-[#a98b5d]'>3</span>
                </div>
                <h4 className='font-bold text-[#dcd7ce] mb-2'>Connect</h4>
                <p className='text-sm text-gray-400'>Pitch to interested investors through our platform</p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center border-2 border-[#a98b5d]/30'>
                  <span className='text-2xl font-bold text-[#a98b5d]'>4</span>
                </div>
                <h4 className='font-bold text-[#dcd7ce] mb-2'>Close & Govern</h4>
                <p className='text-sm text-gray-400'>Automated cap table management via blockchain DAO</p>
              </div>
            </div>

            <div className='max-w-4xl mx-auto p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent'>
              <h4 className='text-xl font-bold text-[#a98b5d] mb-4 text-center'>What makes us different</h4>
              <div className='grid md:grid-cols-2 gap-4 text-gray-300'>
                <div className='flex items-start gap-3'>
                  <span className='text-[#a98b5d] mt-1'>✓</span>
                  <span><strong>No warm intro needed:</strong> We evaluate based on data, not connections</span>
                </div>
                <div className='flex items-start gap-3'>
                  <span className='text-[#a98b5d] mt-1'>✓</span>
                  <span><strong>Institutional infrastructure:</strong> DAO governance from day one</span>
                </div>
                <div className='flex items-start gap-3'>
                  <span className='text-[#a98b5d] mt-1'>✓</span>
                  <span><strong>Geographic focus:</strong> Purpose-built for emerging markets</span>
                </div>
                <div className='flex items-start gap-3'>
                  <span className='text-[#a98b5d] mt-1'>✓</span>
                  <span><strong>Full transparency:</strong> Real-time cap tables, no spreadsheets</span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className='text-center'>
            <div className='relative p-12 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent max-w-4xl mx-auto'>
              <h3 className='text-3xl sm:text-4xl font-bold text-[#dcd7ce] mb-6'>
                Ready to <span className='text-[#a98b5d]'>get started?</span>
              </h3>
              <p className='text-lg text-gray-400 mb-8 max-w-2xl mx-auto'>
                Join the founders and investors building the future of merit-based startup funding.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/apply'
                  className='px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300'
                >
                  Apply for Early Access
                </Link>
                <Link
                  href='/for-investors'
                  className='px-8 py-4 border border-[#a98b5d]/50 text-[#dcd7ce] font-semibold rounded-xl hover:bg-[#a98b5d]/10 transition-all duration-300'
                >
                  Explore for Investors
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
