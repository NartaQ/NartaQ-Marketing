'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Heart,
  Rocket,
  CreditCard,
  Leaf,
  Brain,
  ShoppingBag,
  Cog,
  Shield,
  Globe,
  Zap,
  Database,
  Smartphone,
  ArrowRight,
  TrendingUp,
  Sparkles
} from 'lucide-react'

export default function IndustryVerticals() {
  const [, setHoveredVertical] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const verticals = [
    {
      name: 'Healthtech',
      icon: Heart,
      emoji: '🏥',
      color: '#e74c3c',
      deals: '2.1K+',
      growth: '+24%',
      description: 'Digital health solutions and medical innovation'
    },
    {
      name: 'Deeptech',
      icon: Rocket,
      emoji: '🚀',
      color: '#3498db',
      deals: '1.8K+',
      growth: '+31%',
      description: 'Advanced technology and space exploration'
    },
    {
      name: 'Fintech',
      icon: CreditCard,
      emoji: '💳',
      color: '#f39c12',
      deals: '3.2K+',
      growth: '+18%',
      description: 'Financial technology and payment solutions'
    },
    {
      name: 'Climate Tech',
      icon: Leaf,
      emoji: '🌱',
      color: '#27ae60',
      deals: '1.5K+',
      growth: '+42%',
      description: 'Sustainable technology and green energy'
    },
    {
      name: 'AI/ML',
      icon: Brain,
      emoji: '🤖',
      color: '#9b59b6',
      deals: '4.1K+',
      growth: '+67%',
      description: 'Artificial intelligence and machine learning'
    },
    {
      name: 'Consumer',
      icon: ShoppingBag,
      emoji: '🛍️',
      color: '#e91e63',
      deals: '2.8K+',
      growth: '+15%',
      description: 'Direct-to-consumer brands and marketplaces'
    },
    {
      name: 'Industrial',
      icon: Cog,
      emoji: '⚙️',
      color: '#607d8b',
      deals: '1.2K+',
      growth: '+28%',
      description: 'Manufacturing and industrial automation'
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      emoji: '🔐',
      color: '#ff5722',
      deals: '1.9K+',
      growth: '+35%',
      description: 'Information security and data protection'
    },
    {
      name: 'Web3',
      icon: Globe,
      emoji: '🌐',
      color: '#795548',
      deals: '2.3K+',
      growth: '+89%',
      description: 'Blockchain and decentralized technologies'
    },
    {
      name: 'Edtech',
      icon: Zap,
      emoji: '📚',
      color: '#ff9800',
      deals: '1.7K+',
      growth: '+22%',
      description: 'Educational technology and learning platforms'
    },
    {
      name: 'Biotech',
      icon: Database,
      emoji: '🧬',
      color: '#4caf50',
      deals: '1.4K+',
      growth: '+26%',
      description: 'Biotechnology and life sciences'
    },
    {
      name: 'Mobility',
      icon: Smartphone,
      emoji: '🚗',
      color: '#2196f3',
      deals: '1.6K+',
      growth: '+33%',
      description: 'Transportation and autonomous vehicles'
    },
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden">
      {/* Neon Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(169, 139, 93, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(169, 139, 93, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-[#a98b5d]/20 to-[#dcd7ce]/10 rounded-3xl backdrop-blur-xl border border-[#a98b5d]/30 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-[#dcd7ce]/20 to-[#a98b5d]/10 rounded-full backdrop-blur-xl border border-[#dcd7ce]/30 animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-8">
            <TrendingUp className="w-4 h-4 text-[#a98b5d]" />
            <span className="text-sm font-medium text-[#dcd7ce]">INDUSTRY VERTICALS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-[#dcd7ce]">Specialized Networks </span>
            <br />
            <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">
              Across Sectors
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Deep expertise and connections across 20+ high-growth sectors
          </p>
        </motion.div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {verticals.map((vertical, index) => {
            const Icon = vertical.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setHoveredVertical(index)}
                onMouseLeave={() => setHoveredVertical(null)}
              >
                <div className="relative h-48 bg-gradient-to-br from-black/60 to-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl border border-[#333]/50 overflow-hidden hover:border-[#a98b5d]/50 transition-all duration-500 p-6">
                  {/* Icon */}
                  <div className="mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl backdrop-blur-xl border border-white/10 flex items-center justify-center relative"
                      style={{
                        background: `linear-gradient(135deg, ${vertical.color}20, ${vertical.color}10)`
                      }}
                    >
                      <Icon 
                        className="w-6 h-6" 
                        style={{ color: vertical.color }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#dcd7ce] group-hover:text-[#a98b5d] transition-colors duration-300">
                      {vertical.name}
                    </h3>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#a98b5d] font-semibold">
                        {vertical.deals}
                      </span>
                      <span 
                        className="font-semibold"
                        style={{ color: vertical.color }}
                      >
                        {vertical.growth}
                      </span>
                    </div>

                    {/* Description on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {vertical.description}
                      </p>
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at center, ${vertical.color} 0%, transparent 70%)`
                    }}
                  />

                  {/* Bottom border accent */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${vertical.color}, transparent)`
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {[
            { value: '20+', label: 'Industry Sectors' },
            { value: '25K+', label: 'Active Deals' },
            { value: '150+', label: 'Countries' },
            { value: '$12B+', label: 'Total Funding' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 2 + index * 0.1 }}
              className="text-center relative"
            >
              <div className="relative bg-gradient-to-br from-black/60 to-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl border border-[#333]/50 p-6 group hover:border-[#a98b5d]/50 transition-all duration-500">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
                
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#dcd7ce]/10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.4 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-black/60 to-[#0a0a0a]/80 backdrop-blur-xl rounded-3xl border border-[#333]/50 p-8">
            <Sparkles className="w-8 h-8 text-[#a98b5d] mx-auto mb-4" />
            
            <h3 className="text-3xl font-bold text-[#dcd7ce] mb-4">
              Don&apos;t see your sector?
            </h3>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              We&apos;re constantly expanding our network. Join our waitlist to be notified 
              when your industry vertical launches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(169, 139, 93, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold rounded-xl shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center gap-2">
                  Request New Vertical
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-[#a98b5d]/50 text-[#dcd7ce] font-semibold rounded-xl hover:border-[#a98b5d] hover:bg-[#a98b5d]/10 transition-all duration-300"
              >
                View All Sectors
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
