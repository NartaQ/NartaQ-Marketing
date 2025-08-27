'use client'

import { motion } from 'framer-motion'

export default function InsightsHero() {
  return (
    <section className='relative min-h-[60vh] flex items-center justify-center'>
      {/* Background with neon grid effect */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-black via-[#0a0b14] to-[#1a1b23]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_70%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_70%)]' />
        
        {/* Grid overlay */}
        <div 
          className='absolute inset-0 opacity-20'
          style={{
            backgroundImage: `
              linear-gradient(rgba(147,51,234,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147,51,234,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className='relative z-10 container mx-auto px-4 max-w-7xl text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-6xl lg:text-7xl font-bold'
          >
            <span className='bg-gradient-to-r from-[#dcd7ce] via-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
              NartaQ Insights
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'
          >
            Discover how we&apos;re building the technology to connect companies to the right community of investors.
          </motion.p>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className='flex justify-center mt-8'
          >
            <div className='w-24 h-1 bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent rounded-full' />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-[#a98b5d] rounded-full opacity-40'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}