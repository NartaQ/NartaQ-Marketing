'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Zap, Users, Target } from 'lucide-react'
import Link from 'next/link'

export default function NeonHeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Large Central Glowing Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] blur-3xl" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#a98b5d]" />
          <span className="text-sm font-medium text-[#dcd7ce]">AI-POWERED PROTOCOL</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-[#dcd7ce]">The AI-Powered </span>
          <br />
          <span className="text-glow bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">
            Protocol
          </span>{' '}
          <span className="text-[#dcd7ce]">for Startup Funding</span>
        </motion.h1>
        <div className='w-64 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto mb-6'></div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Decentralize discovery, simplify execution. AI-powered matching connects the best founders with the right capital—no bias, no barriers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            href="/solutions/startups"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-2">
              Apply for Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          
          <Link
            href="/solutions/investors"
            className="px-8 py-4 border border-[#a98b5d]/50 text-[#dcd7ce] font-semibold rounded-xl backdrop-blur-xl hover:bg-[#a98b5d]/10 transition-all duration-300 hover:border-[#a98b5d] hover:scale-105"
          >
            Request Investor Deck
          </Link>
        </motion.div>

        {/* Key Features Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto"
        >
          {[
            { icon: Users, text: "Sourcing DAO" },
            { icon: Target, text: "AI Vetting" },
            { icon: Zap, text: "Shared Success" }
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#a98b5d]/20 rounded-full backdrop-blur-xl"
            >
              <feature.icon className="w-4 h-4 text-[#a98b5d]" />
              <span className="text-sm text-[#dcd7ce]">{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  )
}