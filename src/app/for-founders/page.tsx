'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Target, Zap, Users, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useRive } from '@rive-app/react-canvas'

export default function ForFoundersPage() {
  const { RiveComponent } = useRive({
    src: "/nartaq-logo.riv",
    autoplay: true,
  })

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section - Founder Focused */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Rive Animation */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[30vw] md:h-[30vw] blur-[2px] opacity-40"
          initial={{ opacity: 0}}
          animate={{ opacity: 0.4}}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <RiveComponent className="w-full h-full" />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-8"
          >
            <Target className="w-4 h-4 text-[#a98b5d]" />
            <span className="text-sm font-medium text-[#dcd7ce]">FOR FOUNDERS</span>
          </motion.div>

          {/* Main Headline - Founder Pain Point Focused */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-[#dcd7ce]">Your Next Fundraise,</span>
            <br />
            <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">
              Powered by NartaQ
            </span>
          </motion.h1>

          {/* Subheadline - Founder Value Prop */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            We connect the best founders with the right capital. Our AI-powered platform finds you investors who are a perfect fit for your vision, regardless of your network.
          </motion.p>

          {/* Single CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center items-center mb-12"
          >
            <Link
              href="/apply/founders"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-[#a98b5d]/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center gap-2">
                <Target className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                Apply to the Founding Cohort
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#a98b5d]/10 border border-[#a98b5d]/30 rounded-full backdrop-blur-xl">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-[#dcd7ce] font-medium">
                Building founding community of 500+ exceptional founders
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Founder Pain Points Section */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#dcd7ce]">Fundraising is a</span>{' '}
              <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">Full-Time Job</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              You're spending your valuable time on cold outreach, rejections, and finding "warm intros" instead of building your business. The system is rigged against you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 * 0.2 }}
              className="bg-gradient-to-b from-white/5 to-white/0 border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300"
            >
              <Clock className="w-12 h-12 text-red-400 mb-6" />
              <h3 className="text-xl font-bold text-[#dcd7ce] mb-4">Wasted Time</h3>
              <p className="text-gray-400 leading-relaxed mb-4">Weeks and months spent searching for the right investors instead of building your product.</p>
              <div className="text-sm font-semibold text-red-400 bg-red-500/10 px-3 py-1 rounded-full inline-block">
                18mo average
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 * 0.2 }}
              className="bg-gradient-to-b from-white/5 to-white/0 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-300"
            >
              <Target className="w-12 h-12 text-orange-400 mb-6" />
              <h3 className="text-xl font-bold text-[#dcd7ce] mb-4">Endless Rejections</h3>
              <p className="text-gray-400 leading-relaxed mb-4">Getting a "no" from investors who were never a good fit for your stage or sector.</p>
              <div className="text-sm font-semibold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full inline-block">
                90% mismatch
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2 * 0.2 }}
              className="bg-gradient-to-b from-white/5 to-white/0 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all duration-300"
            >
              <Users className="w-12 h-12 text-yellow-400 mb-6" />
              <h3 className="text-xl font-bold text-[#dcd7ce] mb-4">No Access</h3>
              <p className="text-gray-400 leading-relaxed mb-4">Stuck outside the exclusive networks of major tech hubs. Location bias kills great ideas.</p>
              <div className="text-sm font-semibold text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full inline-block">
                Location bias
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#dcd7ce]">Get Matched.</span>{' '}
              <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">Not Rejected.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              We believe the best ideas should win. Our platform is built to provide a fair, transparent, and efficient path to funding.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 * 0.2 }}
              className="bg-gradient-to-b from-[#a98b5d]/10 to-transparent border border-[#a98b5d]/20 rounded-2xl p-8 hover:border-[#a98b5d]/40 transition-all duration-300"
            >
              <Sparkles className="w-12 h-12 text-[#a98b5d] mb-6" />
              <h3 className="text-xl font-bold text-[#dcd7ce] mb-4">Find Investors Who Get It</h3>
              <p className="text-gray-400 leading-relaxed mb-4">Our AI finds investors whose criteria match your company's DNA—from sector and stage to values and vision.</p>
              <div className="text-sm font-semibold text-[#a98b5d] bg-[#a98b5d]/10 px-3 py-1 rounded-full inline-block">
                3x higher success rate
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 * 0.2 }}
              className="bg-gradient-to-b from-[#a98b5d]/10 to-transparent border border-[#a98b5d]/20 rounded-2xl p-8 hover:border-[#a98b5d]/40 transition-all duration-300"
            >
              <CheckCircle className="w-12 h-12 text-[#a98b5d] mb-6" />
              <h3 className="text-xl font-bold text-[#dcd7ce] mb-4">A Vetted Network</h3>
              <p className="text-gray-400 leading-relaxed mb-4">Access a curated network of active investors who are pre-vetted by NartaQ and actively looking to invest.</p>
              <div className="text-sm font-semibold text-[#a98b5d] bg-[#a98b5d]/10 px-3 py-1 rounded-full inline-block">
                90 days to funding
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2 * 0.2 }}
              className="bg-gradient-to-b from-[#a98b5d]/10 to-transparent border border-[#a98b5d]/20 rounded-2xl p-8 hover:border-[#a98b5d]/40 transition-all duration-300"
            >
              <Zap className="w-12 h-12 text-[#a98b5d] mb-6" />
              <h3 className="text-xl font-bold text-[#dcd7ce] mb-4">Focus on Building</h3>
              <p className="text-gray-400 leading-relaxed mb-4">Our platform streamlines the entire fundraising process, freeing you up to focus on what you do best.</p>
              <div className="text-sm font-semibold text-[#a98b5d] bg-[#a98b5d]/10 px-3 py-1 rounded-full inline-block">
                Fair evaluation
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works - Founder Journey */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#dcd7ce]">Your 3-Step</span>{' '}
              <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">Path to Funding</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-full flex items-center justify-center text-black font-bold text-xl mb-4 mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold text-[#dcd7ce] mb-2">Tell Us About Your Business</h3>
              <p className="text-gray-400 leading-relaxed">Create your verified profile and upload your deck. Our team will personally learn your criteria and preferences.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-full flex items-center justify-center text-black font-bold text-xl mb-4 mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold text-[#dcd7ce] mb-2">Get Your Match</h3>
              <p className="text-gray-400 leading-relaxed">Our AI finds high-probability matches and connects you with investors who fund your stage and sector.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2 * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-full flex items-center justify-center text-black font-bold text-xl mb-4 mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold text-[#dcd7ce] mb-2">Connect & Close</h3>
              <p className="text-gray-400 leading-relaxed">Enter a secure environment to connect with investors and manage the deal to a successful close.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials / Founding Cohort Metrics */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#dcd7ce]">What Our Founding</span>{' '}
              <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">Founders Are Saying</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#a98b5d]/10 to-transparent border border-[#a98b5d]/20 rounded-2xl p-8"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#a98b5d] rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">ML</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Maria Lopez</h4>
                  <p className="text-gray-400 text-sm">Fintech Founder</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed italic">
                "NartaQ connected me with investors in 3 weeks, not 18 months. The process was transparent, efficient, and merit-based."
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#a98b5d]/10 to-transparent border border-[#a98b5d]/20 rounded-2xl p-8"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#a98b5d] rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">DK</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">David Kim</h4>
                  <p className="text-gray-400 text-sm">AI Startup Founder</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed italic">
                "The quality of investors I was matched with was incredible. They understood my vision and invested based on our traction, not my network."
              </p>
            </motion.div>
          </div>
          
          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#a98b5d]/5 to-transparent border border-[#a98b5d]/20 rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#a98b5d] mb-2">250+</div>
                <p className="text-gray-300">Founders Onboarded</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#a98b5d] mb-2">10</div>
                <p className="text-gray-300">Investor-Founder Matches Initiated</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#dcd7ce]">Ready to Stop</span>{' '}
              <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">Fundraising Full-Time?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join exceptional founders who are building the future. Get connected with investors who fund based on merit, not network.
            </p>
            <Link
              href="/apply/founders"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#a98b5d]/50"
            >
              <Target className="w-5 h-5" />
              Apply to the Founding Cohort
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}