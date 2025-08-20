'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const stories = [
  {
    id: 'investor',
    title: 'The Investor',
    problem: {
      title: "You've seen it all.",
      description:
        "As an investor, you've sorted through hundreds of pitch decks, but the perfect startup remains a ghost. You're exhausted from chasing leads and doing due diligence on half-baked ideas.",
    },
    solution: {
      title: 'The next unicorn is just a click away',
      description: 'pre-vetted and ready to go.',
    },
    color: 'from-[#a98b5d] to-[#dcd7ce]',
    bgGradient: 'from-[#a98b5d]/10 to-[#dcd7ce]/10',
  },
  {
    id: 'founder',
    title: 'The Startup Founder',
    problem: {
      title: 'The fundraising treadmill never stops.',
      description:
        "As a startup founder, you've spent months on the fundraising treadmill. It's a full-time job that keeps you from building your company.",
    },
    solution: {
      title: 'You spend less time pitching and more time growing',
      description: 'Connect with the right investors from day one.',
    },
    color: 'from-[#5c5d63] to-[#a98b5d]',
    bgGradient: 'from-[#5c5d63]/10 to-[#a98b5d]/10',
  },
  {
    id: 'provider',
    title: 'The Service Provider',
    problem: {
      title: 'Talent without the right connections.',
      description:
        "As a service provider, you're a top-tier consultant with incredible talent, but finding high-quality clients is a constant struggle. You're tired of competing on price and want to connect with startups that value your expertise.",
    },
    solution: {
      title: 'Your next big project finds you',
      description:
        'So you can stop chasing leads and start doing what you do best.',
    },
    color: 'from-[#3e3f44] to-[#5c5d63]',
    bgGradient: 'from-[#3e3f44]/10 to-[#5c5d63]/10',
  },
]

export default function StorytellingSection() {
  const [, setActiveStory] = useState(0)

  return (
    <section className='relative overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#a98b5d]/20 to-transparent rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-[#dcd7ce]/20 to-transparent rounded-full blur-3xl animate-pulse' />
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#dcd7ce] via-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
            Three Stories, One Solution
          </h2>
          <p className='text-lg text-[#dcd7ce]/80 max-w-2xl mx-auto'>
            Each day, brilliant minds face the same challenges. Here are their
            stories.
          </p>
        </motion.div>

        {/* Story Cards */}
        <div className='grid lg:grid-cols-3 gap-6 mb-16'>
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className='group relative'
              onMouseEnter={() => setActiveStory(index)}
            >
              {/* Magic Card Effect */}
              <div className='relative bg-gradient-to-br from-[#232428]/80 to-[#3e3f44]/60 backdrop-blur-xl rounded-2xl p-6 border border-[#5c5d63]/50 hover:border-[#a98b5d]/50 transition-all duration-500 overflow-hidden'>
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${story.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className='relative z-10'>
                  {/* Header */}
                  <div className='mb-6'>
                    <div
                      className={`w-12 h-1 bg-gradient-to-r ${story.color} rounded-full mb-4 group-hover:w-16 transition-all duration-300`}
                    />
                    <h3 className='text-xl font-bold text-[#dcd7ce]'>
                      {story.title}
                    </h3>
                  </div>

                  {/* Problem */}
                  <div className='mb-6'>
                    <h4 className='text-lg font-semibold text-[#a98b5d] mb-3'>
                      {story.problem.title}
                    </h4>
                    <p className='text-sm text-[#dcd7ce]/80 leading-relaxed'>
                      {story.problem.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className='w-full h-px bg-gradient-to-r from-transparent via-[#5c5d63] to-transparent mb-6' />

                  {/* Solution */}
                  <div>
                    <h4 className='text-lg font-semibold text-[#a98b5d] mb-3'>
                      What if...
                    </h4>
                    <p className='text-sm text-[#dcd7ce] font-semibold leading-relaxed mb-2'>
                      {story.solution.title}
                    </p>
                    <p className='text-sm text-[#dcd7ce]/80'>
                      {story.solution.description}
                    </p>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#a98b5d]/30 transition-colors duration-500' />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transformation Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className='text-center mb-16'
        >
          {/* Transformation Divider */}
          <div className='flex items-center justify-center mb-8'>
            <div className='flex-1 h-px bg-gradient-to-r from-transparent to-[#5c5d63]' />
            <div className='mx-8 w-3 h-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-full shadow-lg' />
            <div className='flex-1 h-px bg-gradient-to-l from-transparent to-[#5c5d63]' />
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-[#dcd7ce] via-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'
          >
            Imagine a world where...
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
            {/* Button shine effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700' />

            <span className='relative flex items-center'>
              Start Your Story
              <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
