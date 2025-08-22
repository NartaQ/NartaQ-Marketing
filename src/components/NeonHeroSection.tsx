'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, ArrowRight, Zap, Users, Target } from 'lucide-react'
import Link from 'next/link'

export default function NeonHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  useEffect(() => {
    // Add CSS for glow effects
    const style = document.createElement('style')
    style.textContent = `
      .neon-glow {
        box-shadow: 0 0 20px #a98b5d, 0 0 40px #a98b5d, 0 0 80px #a98b5d;
        filter: blur(0px);
      }
      
      .geometric-shape {
        background: linear-gradient(135deg, #a98b5d20, #dcd7ce10);
        border: 1px solid #a98b5d40;
        backdrop-filter: blur(20px);
      }
      
      .pulse-glow {
        animation: pulse-glow 3s ease-in-out infinite;
      }
      
      @keyframes pulse-glow {
        0%, 100% { 
          box-shadow: 0 0 20px #a98b5d40, 0 0 40px #a98b5d20, 0 0 60px #a98b5d10;
          transform: scale(1);
        }
        50% { 
          box-shadow: 0 0 40px #a98b5d60, 0 0 80px #a98b5d40, 0 0 120px #a98b5d20;
          transform: scale(1.02);
        }
      }
      
      .text-glow {
        text-shadow: 0 0 20px #a98b5d60, 0 0 40px #a98b5d30;
      }
      
      .grid-pattern {
        background-image: 
          linear-gradient(rgba(169, 139, 93, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(169, 139, 93, 0.1) 1px, transparent 1px);
        background-size: 40px 40px;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* 3D Floating Geometric Elements */}
      <motion.div
        style={{ y, rotate }}
        className="absolute top-20 left-20 w-32 h-32 geometric-shape rounded-xl pulse-glow"
      />
      
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-30%']) }}
        className="absolute top-40 right-32 w-24 h-24 geometric-shape rounded-full pulse-glow"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '80%']) }}
        className="absolute bottom-32 left-32 w-20 h-20 geometric-shape transform rotate-45 pulse-glow"
      />
      
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-60%']) }}
        className="absolute bottom-40 right-20 w-28 h-28 geometric-shape rounded-lg pulse-glow"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

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
          <span className="text-sm font-medium text-[#dcd7ce]">INVITATION-ONLY PLATFORM</span>
          <Sparkles className="w-4 h-4 text-[#a98b5d]" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="text-[#dcd7ce]">Connect faster with </span>
          <br />
          <span className="text-glow bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">
            Elite Networks
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Where funded startups find smart investors 
          and top talent. No cold calls. No broken promises. 
          Just results.
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
              <Zap className="w-5 h-5" />
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          
          <Link
            href="/solutions/investors"
            className="px-8 py-4 border border-[#a98b5d]/50 text-[#dcd7ce] font-semibold rounded-xl backdrop-blur-xl hover:bg-[#a98b5d]/10 transition-all duration-300 hover:border-[#a98b5d] hover:scale-105"
          >
            Browse Deals
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
            { icon: Users, text: "Elite Network" },
            { icon: Target, text: "Smart Matching" },
            { icon: Zap, text: "Fast Results" }
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