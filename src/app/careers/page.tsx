'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Users, Zap, Heart, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CareersPage() {
  return (
    <div className='min-h-screen bg-black text-white relative overflow-hidden'>
      {/* Animated Grid Background */}
      <div className='absolute inset-0 grid-pattern opacity-30' />

      {/* Gradient Orbs */}
      <div className='absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 rounded-full blur-3xl animate-pulse' />
      <div className='absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#dcd7ce]/10 to-[#a98b5d]/10 rounded-full blur-3xl animate-pulse delay-1000' />

      {/* Main Content */}
      <div className='relative z-10 min-h-screen flex items-center justify-center'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 rounded-full text-sm font-medium text-[#dcd7ce] mb-8'
          >
            <Sparkles className='w-4 h-4 text-[#a98b5d]' />
            Join Our Mission
            <Sparkles className='w-4 h-4 text-[#a98b5d]' />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className='text-6xl md:text-8xl font-bold mb-8 tracking-tight'
          >
            <span className='bg-gradient-to-r from-white via-[#dcd7ce] to-[#a98b5d] bg-clip-text text-transparent'>
              Shape the Future
            </span>
            <br />
            <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent glow-text'>
              of Investment
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='text-xl md:text-2xl text-gray-300/80 max-w-3xl mx-auto mb-12 leading-relaxed'
          >
            Join our talented team building the AI-powered platform that's
            revolutionizing how startups connect with investors. Be part of
            something extraordinary.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className='flex flex-wrap justify-center gap-8 mb-12'
          >
            {[
              {
                icon: <Users className='w-5 h-5' />,
                label: 'Remote-First Culture',
              },
              { icon: <Globe className='w-5 h-5' />, label: 'Global Team' },
              { icon: <Heart className='w-5 h-5' />, label: 'Mission-Driven' },
            ].map((item, index) => (
              <div
                key={index}
                className='flex items-center gap-2 text-gray-400'
              >
                <div className='text-[#a98b5d]'>{item.icon}</div>
                <span className='text-sm font-medium'>{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
          >
            <Link href='/careers/apply'>
              <Button className='group relative px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#a98b5d]/25'>
                <Zap className='w-5 h-5 mr-2 group-hover:animate-pulse' />
                Apply Now
                <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
              </Button>
            </Link>

            <div className='text-sm text-gray-500'>
              All roles • Remote-first • Competitive equity
            </div>
          </motion.div>

          {/* Why Join Us - Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className='mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'
          >
            {[
              {
                icon: <Zap className='w-6 h-6' />,
                title: 'Cutting-Edge Tech',
                description:
                  'Work with AI, modern frameworks, and innovative solutions',
              },
              {
                icon: <Users className='w-6 h-6' />,
                title: 'World-Class Team',
                description:
                  'Collaborate with talented professionals from around the globe',
              },
              {
                icon: <Heart className='w-6 h-6' />,
                title: 'Meaningful Impact',
                description:
                  'Help entrepreneurs and investors create lasting value together',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#a98b5d]/30 hover:bg-white/10 transition-all duration-300'
              >
                <div className='w-12 h-12 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 rounded-xl flex items-center justify-center mb-4 text-[#a98b5d] group-hover:scale-110 transition-transform'>
                  {item.icon}
                </div>
                <h3 className='text-lg font-semibold text-white mb-2 group-hover:text-[#dcd7ce] transition-colors'>
                  {item.title}
                </h3>
                <p className='text-gray-400 text-sm leading-relaxed'>
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Grid Pattern Styles */}
      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(
            rgba(169, 139, 93, 0.15) 1px,
            transparent 1px
          );
          background-size: 50px 50px;
        }
        .glow-text {
          text-shadow: 0 0 20px rgba(169, 139, 93, 0.5);
        }
      `}</style>
    </div>
  )
}
