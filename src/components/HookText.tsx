'use client'

import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { TextAnimate } from '@/components/magicui/text-animate'
import { motion } from 'framer-motion'
import { Briefcase, Rocket, Sparkles, Target } from 'lucide-react'
import { LampContainer } from './ui/lamp'

export default function HookText() {
  return (
    <LampContainer>
      <div className='relative z-10 w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 md:pt-40 lg:pt-44 xl:pt-48 pb-16 sm:pb-20 md:pb-24 lg:pb-28 overflow-hidden'>
        {/* Enhanced Background Pattern - Responsive */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-16 sm:top-20 left-4 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 rounded-full border border-[#a98b5d]/30 animate-pulse'></div>
          <div className='absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 rounded-full border border-[#dcd7ce]/30 animate-pulse animation-delay-1000'></div>
          <div className='absolute top-1/2 left-1/4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 rounded-full border border-[#a98b5d]/20 animate-pulse animation-delay-2000'></div>
          <div className='absolute top-1/3 right-1/4 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 rounded-full border border-[#dcd7ce]/20 animate-pulse animation-delay-3000'></div>
          <div className='absolute bottom-1/3 left-1/5 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 rounded-full border border-[#a98b5d]/25 animate-pulse animation-delay-4000'></div>
        </div>

        {/* Main Hook Content */}
        <div className='max-w-7xl mx-auto text-center space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 w-full'>
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full border border-[#a98b5d]/40 bg-gradient-to-r from-[#232428]/80 to-[#1a1b1f]/80 backdrop-blur-lg'
          >
            {/* <Sparkles className='w-3 sm:w-4 h-3 sm:h-4 text-[#a98b5d] animate-pulse' /> */}
            <AnimatedGradientText
              className='text-xs sm:text-sm font-semibold'
              colorFrom='#a98b5d'
              colorTo='#dcd7ce'
            >
              {/* Your Gateway to Success */}
            </AnimatedGradientText>
          </motion.div>

          {/* Main Headline */}
          <div className='space-y-4 sm:space-y-6 md:space-y-8'>
            <TextAnimate
              animation='blurInUp'
              by='word'
              duration={2}
              delay={0.5}
              className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight tracking-tight px-4 sm:px-6 md:px-8 lg:px-0'
              style={{ color: '#dcd7ce' }}
            >
              Your next big opportunity starts here.
            </TextAnimate>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className='max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-4'
            >
              <TextAnimate
                animation='slideUp'
                by='word'
                duration={2}
                delay={2.5}
                className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-[#8a8b90] leading-relaxed'
              >
                Whether you seek investment, look to hire, or are ready to work,
                our platform bridges the gap between capital, projects, and
                people.
              </TextAnimate>
            </motion.div>
          </div>

          {/* Three Key Areas */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.5 }}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-8 mt-16 sm:mt-20 md:mt-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0'
          >
            {/* Seeking Investment */}
            <div className='group relative p-6 sm:p-8 md:p-6 lg:p-8 rounded-2xl border border-[#3e3f44]/60 bg-gradient-to-br from-[#232428]/60 to-[#1a1b1f]/60 backdrop-blur-xl hover:border-[#a98b5d]/60 transition-all duration-500 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-[#a98b5d]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <div className='relative z-10 space-y-4 sm:space-y-5'>
                <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300'>
                  <Rocket className='w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#a98b5d]' />
                </div>
                <h3 className='text-lg sm:text-xl md:text-lg lg:text-xl font-bold text-[#dcd7ce]'>
                  Seeking Investment
                </h3>
                <p className='text-sm sm:text-base md:text-sm lg:text-base text-[#8a8b90] leading-relaxed'>
                  Connect with strategic investors who understand your vision
                  and can accelerate your growth
                </p>
              </div>
            </div>

            {/* Looking to Hire */}
            <div className='group relative p-6 sm:p-8 md:p-6 lg:p-8 rounded-2xl border border-[#3e3f44]/60 bg-gradient-to-br from-[#232428]/60 to-[#1a1b1f]/60 backdrop-blur-xl hover:border-[#a98b5d]/60 transition-all duration-500 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-[#a98b5d]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <div className='relative z-10 space-y-4 sm:space-y-5'>
                <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300'>
                  <Briefcase className='w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#a98b5d]' />
                </div>
                <h3 className='text-lg sm:text-xl md:text-lg lg:text-xl font-bold text-[#dcd7ce]'>
                  Looking to Hire
                </h3>
                <p className='text-sm sm:text-base md:text-sm lg:text-base text-[#8a8b90] leading-relaxed'>
                  Access top-tier talent and specialized services to bring your
                  projects to life
                </p>
              </div>
            </div>

            {/* Ready to Work */}
            <div className='group relative p-6 sm:p-8 md:p-6 lg:p-8 rounded-2xl border border-[#3e3f44]/60 bg-gradient-to-br from-[#232428]/60 to-[#1a1b1f]/60 backdrop-blur-xl hover:border-[#a98b5d]/60 transition-all duration-500 hover:scale-105 sm:col-span-2 lg:col-span-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-[#a98b5d]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <div className='relative z-10 space-y-4 sm:space-y-5'>
                <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300'>
                  <Target className='w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#a98b5d]' />
                </div>
                <h3 className='text-lg sm:text-xl md:text-lg lg:text-xl font-bold text-[#dcd7ce]'>
                  Ready to Work
                </h3>
                <p className='text-sm sm:text-base md:text-sm lg:text-base text-[#8a8b90] leading-relaxed'>
                  Showcase your expertise and find meaningful projects that
                  match your skills
                </p>
              </div>
            </div>
          </motion.div>

          {/* Simple Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.5 }}
            className='mt-16 sm:mt-20 md:mt-24 pt-8 sm:pt-10 md:pt-12 border-t border-[#3e3f44]/40'
          >
            <p className='text-base sm:text-lg md:text-xl text-[#8a8b90] font-medium px-4 sm:px-6 md:px-8 lg:px-0'>
              Join our growing community of innovators, investors, and experts
            </p>
          </motion.div>
        </div>
      </div>
    </LampContainer>
  )
}
