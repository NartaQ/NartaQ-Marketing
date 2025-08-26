import { Eye, Gem, Search, Shield, TrendingUp, Clock, Target } from 'lucide-react'
import Link from 'next/link'

export default function ForInvestorsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#a98b5d]/10 text-[#a98b5d] border border-[#a98b5d]/20">
              <Gem className="w-4 h-4 mr-2" />
              For Investors
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Stop Sifting.
            <span className="block bg-gradient-to-r from-[#a98b5d] via-yellow-400 to-[#a98b5d] bg-clip-text text-transparent">
              Start Sourcing.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The AI-Powered Platform for Curated Deal Flow. We're building a merit-based engine that identifies the next generation of founders, delivering a vetted, high-signal deal pipeline straight to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/apply/investors" className="group relative bg-[#a98b5d] hover:bg-[#a98b5d]/90 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#a98b5d]/25">
              <span className="relative z-10 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Join the Founding Cohort
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#a98b5d] to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </Link>
            <p className="text-gray-400 text-sm">
              Early access • No commitment required
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Signal is Buried in 
              <span className="text-[#a98b5d]"> the Noise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              You need to find the best innovation, but the current system makes it a full-time job. Finding a single high-potential deal means sifting through hundreds of low-quality introductions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-950/20 border border-red-800/30 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-red-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-300">High Noise</h3>
              <p className="text-gray-300 leading-relaxed">
                Endless decks and cold emails from unvetted founders. Your inbox is flooded with irrelevant opportunities.
              </p>
            </div>
            
            <div className="bg-orange-950/20 border border-orange-800/30 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-300">Access Bias</h3>
              <p className="text-gray-300 leading-relaxed">
                Your deal flow is limited by your personal network and geography. Missing hidden gems outside your circle.
              </p>
            </div>
            
            <div className="bg-yellow-950/20 border border-yellow-800/30 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-yellow-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Time-Consuming</h3>
              <p className="text-gray-300 leading-relaxed">
                Hours wasted on manual sourcing, filtering, and vetting. Your time should be spent on making great investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Next Investment,
              <span className="text-[#a98b5d]"> Curated by AI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              NartaQ is your intelligent partner for sourcing. Our platform leverages AI to give you a clear, data-driven view of the market, helping you find opportunities that are a perfect fit for your criteria.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#a98b5d]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-[#a98b5d]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Precision Matching</h3>
                    <p className="text-gray-300">
                      Our AI engine analyzes hundreds of data points to find founders who match your investment criteria, from sector and stage to team experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#a98b5d]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#a98b5d]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Vetted for You</h3>
                    <p className="text-gray-300">
                      We verify every founder on the platform. Get essential data on their business model, market size, and traction—all in one place.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#a98b5d]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Gem className="w-6 h-6 text-[#a98b5d]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Merit-Based Deal Flow</h3>
                    <p className="text-gray-300">
                      Our system is built to eliminate bias, ensuring that you discover brilliant founders regardless of their location or network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#a98b5d]/10 to-yellow-400/5 rounded-2xl p-8 border border-[#a98b5d]/20">
                <div className="text-center mb-6">
                  <h4 className="text-lg font-semibold text-[#a98b5d] mb-2">AI Analyzer Filtering</h4>
                  <p className="text-sm text-gray-400">Thousands of profiles analyzed daily</p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Signal Quality</span>
                    <span className="text-2xl font-bold text-[#a98b5d]">94%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#a98b5d] to-yellow-400 h-2 rounded-full" style={{width: '94%'}}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Match Accuracy</span>
                    <span className="text-2xl font-bold text-[#a98b5d]">87%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#a98b5d] to-yellow-400 h-2 rounded-full" style={{width: '87%'}}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Time Saved</span>
                    <span className="text-2xl font-bold text-[#a98b5d]">75%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#a98b5d] to-yellow-400 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Investor's Workflow Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From Profile to Portfolio.
              <span className="text-[#a98b5d]"> Your 3-Step Workflow</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#a98b5d] to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Set Your Criteria</h3>
              <p className="text-gray-300 leading-relaxed">
                Create your profile and tell us your investment preferences. Define your sectors, stages, check sizes, and deal criteria.
              </p>
              {/* Connection line */}
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#a98b5d] to-transparent transform translate-x-10"></div>
            </div>
            
            <div className="relative text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#a98b5d] to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Get Matched</h3>
              <p className="text-gray-300 leading-relaxed">
                Our AI delivers a curated list of high-probability matches. Each founder is pre-vetted and scored based on your criteria.
              </p>
              {/* Connection line */}
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#a98b5d] to-transparent transform translate-x-10"></div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#a98b5d] to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Connect & Close</h3>
              <p className="text-gray-300 leading-relaxed">
                Enter a secure environment to connect with founders and manage the deal from first contact to funding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Founding Cohort Metrics */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Founding Investors
              <span className="text-[#a98b5d]"> Are Saying</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-[#a98b5d]/10 to-transparent border border-[#a98b5d]/20 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#a98b5d] rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">JK</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">John Kim</h4>
                  <p className="text-gray-400 text-sm">Seed Investor</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed italic">
                "The quality of deal flow through NartaQ has been exceptional. I'm seeing founders I would never have discovered through my traditional networks."
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#a98b5d]/10 to-transparent border border-[#a98b5d]/20 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#a98b5d] rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Sarah Martinez</h4>
                  <p className="text-gray-400 text-sm">Early Stage VC</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed italic">
                "NartaQ has saved me countless hours of sourcing. The AI matching is incredibly accurate - I'm only seeing deals that truly fit my thesis."
              </p>
            </div>
          </div>
          
          {/* Metrics */}
          <div className="bg-gradient-to-r from-[#a98b5d]/5 to-transparent border border-[#a98b5d]/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#a98b5d] mb-2">50+</div>
                <p className="text-gray-300">Beta Investors Onboarded</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#a98b5d] mb-2">12</div>
                <p className="text-gray-300">Deals in Progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Stop Sifting and
            <span className="text-[#a98b5d]"> Start Sourcing</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the founding cohort of investors who are getting first access to the next generation of exceptional founders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/apply/investors" className="group relative bg-[#a98b5d] hover:bg-[#a98b5d]/90 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#a98b5d]/25">
              <span className="relative z-10 flex items-center text-lg">
                <TrendingUp className="w-5 h-5 mr-2" />
                Join the Founding Cohort
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#a98b5d] to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-1" />
              Accredited investors only
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              Exclusive deal access
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}