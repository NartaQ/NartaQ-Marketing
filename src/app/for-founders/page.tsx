'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Target, Zap, Users, Clock, CheckCircle, HelpCircle, Rocket } from 'lucide-react'
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
            <span className="text-[#dcd7ce]">Get Matched.</span>{' '}
            <span className="text-[#a98b5d]">Not Rejected.</span>
          </motion.h1>

          {/* Subheadline - Founder Value Prop */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-[#dcd7ce]/80 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Stop wasting time on cold outreach and start a direct conversation with a vetted investor 
            who is actively looking for companies like yours.
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
                Join a select group of founders gaining priority access to investors. Applications are now open.
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Founder Pain Points Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6">
              <Clock className="w-4 h-4 text-[#a98b5d]" />
              <span className="text-sm font-medium text-[#dcd7ce]">THE PROBLEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#dcd7ce]">Fundraising is a</span>{' '}
              <span className="text-[#a98b5d]">Full-Time Job</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              You're spending your valuable time on cold outreach, rejections, and finding "warm intros" instead of building your business. The system is rigged against you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="relative p-8 rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent hover:border-red-500/40 transition-all duration-300 h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-500/5 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-4">Wasted Time</h3>
                <div className="w-12 h-0.5 bg-red-400 mx-auto mb-4"></div>
                <p className="text-[#dcd7ce] leading-relaxed mb-4">
                  Stop wasting months searching for the right investors. Your time should be spent building, not hunting for capital.
                </p>
                <div className="text-sm font-semibold text-red-400 bg-red-500/10 px-3 py-1 rounded-full inline-block">
                  Time drain
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="relative p-8 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent hover:border-orange-500/40 transition-all duration-300 h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center">
                  <Target className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-400 mb-4">Endless Rejections</h3>
                <div className="w-12 h-0.5 bg-orange-400 mx-auto mb-4"></div>
                <p className="text-[#dcd7ce] leading-relaxed mb-4">
                  Stop getting a "no" from investors who were never a good fit for your stage, sector, or vision.
                </p>
                <div className="text-sm font-semibold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full inline-block">
                  Poor matching
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="relative p-8 rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-transparent hover:border-yellow-500/40 transition-all duration-300 h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 flex items-center justify-center">
                  <Users className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4">No Access</h3>
                <div className="w-12 h-0.5 bg-yellow-400 mx-auto mb-4"></div>
                <p className="text-[#dcd7ce] leading-relaxed mb-4">
                  Stuck outside the exclusive networks of major tech hubs. Location bias kills great ideas.
                </p>
                <div className="text-sm font-semibold text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full inline-block">
                  Location bias
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="py-12 bg-gradient-to-b from-[#0a0a0a] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#a98b5d] mb-4">
              We're building a merit-based solution.
            </h2>
            <div className="w-16 h-0.5 bg-[#a98b5d] mx-auto mb-6"></div>
            <p className="text-lg text-[#dcd7ce]/80 leading-relaxed">
              We believe the best ideas should win. We're building the infrastructure to make that a reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6">
              <CheckCircle className="w-4 h-4 text-[#a98b5d]" />
              <span className="text-sm font-medium text-[#dcd7ce]">OUR SOLUTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#dcd7ce]">The NartaQ AI</span>{' '}
              <span className="text-[#a98b5d]">Advantage</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our proprietary AI engine does the heavy lifting for you. We analyze hundreds of data points to find investors who are a perfect match for your company's stage, sector, and vision. This ensures every introduction is high-signal and high-intent, so you're not wasting time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-[#a98b5d]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4">Find Investors Who Get It</h3>
                <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4"></div>
                <p className="text-[#dcd7ce] leading-relaxed mb-4">
                  Our proprietary AI engine does the heavy lifting for you. We analyze hundreds of data points to find investors who are a perfect match for your company's stage, sector, and vision.
                </p>
                <div className="text-sm font-semibold text-[#a98b5d] bg-[#a98b5d]/10 px-3 py-1 rounded-full inline-block">
                  AI-powered matching
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-[#a98b5d]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4">A Vetted Network</h3>
                <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4"></div>
                <p className="text-[#dcd7ce] leading-relaxed mb-4">
                  Access a curated network of active investors who are pre-vetted by NartaQ and actively looking to invest in companies like yours.
                </p>
                <div className="text-sm font-semibold text-[#a98b5d] bg-[#a98b5d]/10 px-3 py-1 rounded-full inline-block">
                  Quality network
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center">
                  <Target className="w-8 h-8 text-[#a98b5d]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4">The NartaQ Difference</h3>
                <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4"></div>
                <p className="text-[#dcd7ce] leading-relaxed mb-4">
                  Our AI analyzes your business, team, and deck to build a 'founder reputation profile' that goes beyond a single warm intro. We present a data-backed case for why you are a high-potential founder.
                </p>
                <div className="text-sm font-semibold text-[#a98b5d] bg-[#a98b5d]/10 px-3 py-1 rounded-full inline-block">
                  Merit-based matching
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works - Founder Journey */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6">
              <Target className="w-4 h-4 text-[#a98b5d]" />
              <span className="text-sm font-medium text-[#dcd7ce]">HOW IT WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#dcd7ce]">Your 3-Step</span>{' '}
              <span className="text-[#a98b5d]">Path to Funding</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-2xl flex items-center justify-center text-black font-bold text-xl mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4">Onboarding</h3>
                <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4"></div>
                <p className="text-[#dcd7ce] leading-relaxed">
                  Create your profile and we'll personally review it. We're on a mission to build a high-quality community. This human element builds trust.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-2xl flex items-center justify-center text-black font-bold text-xl mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4">Intelligent Matching</h3>
                <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4"></div>
                <p className="text-[#dcd7ce] leading-relaxed">
                  Get a curated list of high-probability matches. Our AI finds investors whose thesis matches your business, saving you countless hours of research.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-2xl flex items-center justify-center text-black font-bold text-xl mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4">Connect & Close</h3>
                <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4"></div>
                <p className="text-[#dcd7ce] leading-relaxed">
                  We provide a secure environment for discussion and manage the documentation and fund transfer, making the entire process frictionless.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials / Founding Cohort Metrics */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6">
              <Users className="w-4 h-4 text-[#a98b5d]" />
              <span className="text-sm font-medium text-[#dcd7ce]">TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#dcd7ce]">What Our Founding</span>{' '}
              <span className="text-[#a98b5d]">Founders Are Saying</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#a98b5d] rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-black font-bold">ML</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#dcd7ce]">Maria Lopez</h4>
                  <p className="text-gray-400 text-sm">Fintech Founder</p>
                </div>
              </div>
              <div className="w-12 h-0.5 bg-[#a98b5d] mb-4"></div>
              <p className="text-[#dcd7ce] leading-relaxed italic">
                "NartaQ connected me with the right investors quickly. The process was transparent, efficient, and merit-based - exactly what founders need."
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#a98b5d] rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-black font-bold">DK</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#dcd7ce]">David Kim</h4>
                  <p className="text-gray-400 text-sm">AI Startup Founder</p>
                </div>
              </div>
              <div className="w-12 h-0.5 bg-[#a98b5d] mb-4"></div>
              <p className="text-[#dcd7ce] leading-relaxed italic">
                "The quality of investors I was matched with was incredible. They understood my vision and invested based on our traction, not my network."
              </p>
            </motion.div>
          </div>
          
          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#a98b5d] mb-2">250+</div>
                <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-2"></div>
                <p className="text-[#dcd7ce]">Founders Onboarded</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#a98b5d] mb-2">10</div>
                <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-2"></div>
                <p className="text-[#dcd7ce]">Investor-Founder Matches Initiated</p>
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
              <span className="text-[#dcd7ce]">Ready to Fundraise on</span>{' '}
              <span className="text-[#a98b5d]">Your Own Terms?</span>
            </h2>
            <div className="w-24 h-0.5 bg-[#a98b5d] mx-auto mb-8"></div>
            <p className="text-xl text-[#dcd7ce]/80 mb-6 max-w-2xl mx-auto leading-relaxed">
              Stop waiting for a "warm intro" and start a merit-based conversation with the right investors. The future of funding is here.
            </p>
            
            <div className="mb-8 bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/10 rounded-full px-6 py-3 border border-[#a98b5d]/20 backdrop-blur-xl">
              <p className="text-[#a98b5d] font-semibold">
                Join 250+ founders already building a more equitable future
              </p>
            </div>
            
            <motion.a
              href="/apply/founders"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#a98b5d]/50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Target className="w-5 h-5" />
              Apply to the Founding Cohort
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}