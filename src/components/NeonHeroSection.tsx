'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Zap, Users, Target } from 'lucide-react'
import Link from 'next/link'
import { useRive } from '@rive-app/react-canvas'

export default function NeonHeroSection() {
  const { RiveComponent } = useRive({
    src: "/nartaq-logo.riv",
    autoplay: true,
  })

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Rive Logo Animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[30vw] md:h-[30vw] blur-[2px] opacity-0"
        initial={{ opacity: 0}}
        animate={{ opacity: 0.6}}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <RiveComponent className="w-full h-full" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center bg-blend-difference ">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#a98b5d]" />
          <span className="text-sm font-medium text-[#dcd7ce]">AI-POWERED PLATFORM IN DEVELOPMENT</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 px-2"
        >
          <span className="text-[#dcd7ce]">Building the AI-Powered </span>
          <br />
          <span className="text-glow bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">
            Platform
          </span>{' '}
          <span className="text-[#dcd7ce]">for Startup Funding</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-6 leading-relaxed px-4"
        >
          We're building a merit-based platform that connects the best founders with the right capital, 
          regardless of location or network. Get matched with investors or discover your next investment with NartaQ.
        </motion.p>

        {/* Enhanced Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/5 border border-[#a98b5d]/20 rounded-2xl p-6 max-w-5xl mx-auto mb-8 sm:mb-12"
        >
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Our AI-powered platform revolutionizes startup funding by eliminating network bias and geographic 
            barriers. We use advanced algorithms to analyze market opportunities, team capabilities, and 
            investor preferences, creating optimal matches based on merit and compatibility rather than 
            connections. Join the founding cohort of entrepreneurs and investors building the future of 
            equitable startup funding.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center items-center mb-8 sm:mb-12 px-4"
        >
          <Link
            href="mailto:contact@nartaq.com?subject=Join%20Founding%20Cohort"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-[#a98b5d]/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              Join the Founding Cohort
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>

        {/* Current Status/Milestone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-8 px-4"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#a98b5d]/10 border border-[#a98b5d]/30 rounded-full backdrop-blur-xl">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-[#dcd7ce] font-medium">
              Phase 1: Building our founding community of 1,000+ participants
            </span>
          </div>
        </motion.div>

        {/* Key Features Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto px-4"
        >
          {[
            { icon: Users, text: "Community Sourcing" },
            { icon: Target, text: "AI-Powered Matching" },
            { icon: Zap, text: "Transparent Process" }
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 border border-[#a98b5d]/20 rounded-full backdrop-blur-xl"
            >
              <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-[#a98b5d] flex-shrink-0" />
              <span className="text-xs sm:text-sm text-[#dcd7ce] whitespace-nowrap">{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  )
}