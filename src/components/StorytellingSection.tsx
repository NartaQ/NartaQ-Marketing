'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Users, Rocket, Target, Sparkles } from 'lucide-react'

const stories = [
  {
    id: 'investor',
    title: 'Smart Investors',
    icon: Target,
    problem: {
      title: "You've seen it all.",
      description:
        "You've read hundreds of pitch decks, but the perfect startup stays hidden. You're tired of chasing leads and checking half-baked ideas.",
    },
    solution: {
      title: 'The next unicorn is just a click away',
      description: 'pre-vetted and ready to go.',
    },
    color: 'from-[#a98b5d] to-[#dcd7ce]',
    bgGradient: 'from-[#a98b5d]/10 to-[#dcd7ce]/10',
    glowColor: '#a98b5d',
  },
  {
    id: 'founder',
    title: 'Funded Startups',
    icon: Rocket,
    problem: {
      title: 'The fundraising treadmill never stops.',
      description:
        "You've spent months raising money. It's a full-time job that keeps you from building your company.",
    },
    solution: {
      title: 'You spend less time pitching and more time growing',
      description: 'Connect with the right investors from day one.',
    },
    color: 'from-[#5c5d63] to-[#a98b5d]',
    bgGradient: 'from-[#5c5d63]/10 to-[#a98b5d]/10',
    glowColor: '#5c5d63',
  },
  {
    id: 'provider',
    title: 'Expert Providers',
    icon: Users,
    problem: {
      title: 'Talent without the right connections.',
      description:
        "You're a top consultant with great skills, but finding good clients is hard. You're tired of competing on price. You want clients who value your work.",
    },
    solution: {
      title: 'Your next big project finds you',
      description:
        'So you can stop chasing leads and start doing what you do best.',
    },
    color: 'from-[#dcd7ce] to-[#a98b5d]',
    bgGradient: 'from-[#dcd7ce]/10 to-[#a98b5d]/10',
    glowColor: '#dcd7ce',
  },
]

export default function StorytellingSection() {
  const [activeStory, setActiveStory] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className='relative overflow-hidden py-8 bg-gradient-to-b from-black via-[#0f0f10] to-[#1a1b1f]'>
      {/* Color separation border */}
      <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent z-30' />
      <div className='absolute top-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#dcd7ce]/60 to-transparent z-30' />

      {/* Smooth transition overlay from HookText */}
      <div className='absolute top-2 left-0 right-0 h-16 bg-gradient-to-b from-black via-[#0a0a0a] to-transparent z-10' />

      {/* Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#a98b5d]/20 to-transparent rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-[#dcd7ce]/20 to-transparent rounded-full blur-3xl animate-pulse' />
      </div>

      <div className='container mx-auto px-6 relative z-20 pt-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className='text-center mb-20'
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-8">
            <Sparkles className="w-4 h-4 text-[#a98b5d]" />
            <span className="text-sm font-medium text-[#dcd7ce]">THREE ELITE NETWORKS</span>
          </div>
          
          <h2 className='text-5xl md:text-6xl font-bold leading-tight mb-6'>
            <span className='text-[#dcd7ce]'>Built for </span>
            <br />
            <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
              Different Goals
            </span>
          </h2>
          <p className='text-lg text-[#dcd7ce]/80 max-w-2xl mx-auto'>
            Each day, brilliant minds face the same challenges. Here are their
            stories.
          </p>
        </motion.div>

        {/* Interactive Story Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2 }}
              className="group relative"
              onMouseEnter={() => setActiveStory(index)}
            >
              <div className="relative h-96 bg-gradient-to-br from-black/60 to-[#0a0a0a]/80 backdrop-blur-xl rounded-3xl border border-[#333]/50 overflow-hidden hover:border-[#a98b5d]/50 transition-all duration-500">
                {/* Story Icon */}
                <div className="absolute top-6 left-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${story.bgGradient} backdrop-blur-xl border border-white/10`}>
                    <story.icon 
                      className={`w-6 h-6`}
                      style={{ color: story.glowColor }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-[#dcd7ce] mb-2">
                      {story.title}
                    </h3>
                    <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${story.color}`} />
                  </div>

                  {/* Problem Section */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">The Challenge:</p>
                    <p className="text-[#dcd7ce]/90 text-sm leading-relaxed">
                      {story.problem.description}
                    </p>
                  </div>

                  {/* Solution Preview */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#a98b5d]/50 to-transparent mb-3" />
                    <p className="text-sm text-[#a98b5d] font-semibold mb-1">
                      The Solution:
                    </p>
                    <p className="text-[#dcd7ce] text-sm leading-relaxed">
                      {story.solution.description}
                    </p>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: `radial-gradient(circle at center, ${story.glowColor}40 0%, transparent 70%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transformation Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center"
        >
          {/* Animated Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#333]" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="mx-8 w-8 h-8 bg-gradient-to-br from-[#a98b5d] to-[#dcd7ce] rounded-xl shadow-lg backdrop-blur-xl border border-[#a98b5d]/30"
            />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#333]" />
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            <span className="text-[#dcd7ce]">This is </span>
            <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">
              Nartaq
            </span>
          </motion.h3>

          <div className='grid md:grid-cols-3 gap-4 mb-8'>
            {stories.map((story, index) => (
              <motion.div
                key={`solution-${story.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className='bg-gradient-to-br from-[#232428]/50 to-[#3e3f44]/30 backdrop-blur-xl rounded-xl p-4 border border-[#5c5d63]/30 hover:border-[#a98b5d]/30 transition-all duration-300'
              >
                <div className='mb-3'>
                  <div
                    className={`w-8 h-1 bg-gradient-to-r ${story.color} rounded-full mb-3`}
                  />
                </div>
                <h4 className='text-base font-bold text-[#dcd7ce] mb-2'>
                  {story.solution.title}
                </h4>
                <p className='text-[#dcd7ce]/80 text-xs'>
                  {story.solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Welcome to Nartaq */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className='text-center'
        >
          <div className='relative inline-block mb-6'>
            <motion.h2
              className='text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#a98b5d] via-[#dcd7ce] to-[#a98b5d] bg-clip-text text-transparent'
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Welcome to Nartaq
            </motion.h2>

            {/* Decorative corners */}
            <div className='absolute -top-3 -left-3 w-6 h-6 border-l-3 border-t-3 border-[#a98b5d] rounded-tl-lg' />
            <div className='absolute -top-3 -right-3 w-6 h-6 border-r-3 border-t-3 border-[#a98b5d] rounded-tr-lg' />
            <div className='absolute -bottom-3 -left-3 w-6 h-6 border-l-3 border-b-3 border-[#a98b5d] rounded-bl-lg' />
            <div className='absolute -bottom-3 -right-3 w-6 h-6 border-r-3 border-b-3 border-[#a98b5d] rounded-br-lg' />
          </div>

          <p className='text-lg text-[#dcd7ce]/80 max-w-3xl mx-auto leading-relaxed mb-8'>
            Where perfect matches happen effortlessly. Every connection creates
            extraordinary value.
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(169, 139, 93, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className='group relative px-8 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-[#232428] font-bold text-base rounded-full shadow-lg transition-all duration-300 overflow-hidden'
          >
            Where perfect matches happen effortlessly, and every connection creates extraordinary value.
          </motion.button>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(169, 139, 93, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold rounded-full shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-[#a98b5d]/50 text-[#dcd7ce] font-semibold rounded-full hover:border-[#a98b5d] hover:bg-[#a98b5d]/10 transition-all duration-300"
            >
              View Success Stories
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
