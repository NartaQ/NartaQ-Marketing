'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function IndustryVerticals() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const verticals = [
    {
      name: 'Healthtech',
      icon: Heart,
      emoji: '🏥',
      color: '#e74c3c',
      deals: '2.1K+',
    },
    {
      name: 'Deeptech',
      icon: Rocket,
      emoji: '🚀',
      color: '#3498db',
      deals: '1.8K+',
    },
    {
      name: 'Fintech',
      icon: CreditCard,
      emoji: '💳',
      color: '#f39c12',
      deals: '3.2K+',
    },
    {
      name: 'Climate Tech',
      icon: Leaf,
      emoji: '🌱',
      color: '#27ae60',
      deals: '1.5K+',
    },
    {
      name: 'AI/ML',
      icon: Brain,
      emoji: '🤖',
      color: '#9b59b6',
      deals: '4.1K+',
    },
    {
      name: 'Consumer',
      icon: ShoppingBag,
      emoji: '🛍️',
      color: '#e91e63',
      deals: '2.8K+',
    },
    {
      name: 'Industrial',
      icon: Cog,
      emoji: '⚙️',
      color: '#607d8b',
      deals: '1.2K+',
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      emoji: '🔐',
      color: '#ff5722',
      deals: '1.9K+',
    },
    {
      name: 'Web3',
      icon: Globe,
      emoji: '🌐',
      color: '#795548',
      deals: '2.3K+',
    },
    {
      name: 'Edtech',
      icon: Zap,
      emoji: '📚',
      color: '#ff9800',
      deals: '1.7K+',
    },
    {
      name: 'Biotech',
      icon: Database,
      emoji: '🧬',
      color: '#4caf50',
      deals: '1.4K+',
    },
    {
      name: 'Mobility',
      icon: Smartphone,
      emoji: '🚗',
      color: '#2196f3',
      deals: '1.6K+',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.vertical-card', { opacity: 0, scale: 0.8, rotation: -5 })

      gsap.to('.vertical-card', {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: {
          amount: 1.2,
          grid: [3, 4],
          from: 'center',
        },
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      })

      // Floating animation for cards
      gsap.to('.vertical-card', {
        y: '-10px',
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className='relative py-24 bg-gradient-to-b from-[#3e3f44] via-black to-[#232428] overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 luxury-texture opacity-30' />
      <div className='absolute top-0 left-1/3 w-96 h-96 bg-[#a98b5d]/5 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-1/3 w-96 h-96 bg-[#5c5d63]/5 rounded-full blur-3xl' />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16 space-y-4'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full premium-glass border border-[#a98b5d]/20'>
            <span className='text-sm font-medium text-[#a98b5d]'>
              INDUSTRY VERTICALS
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-light text-[#dcd7ce]'>
            <span className='text-[#a98b5d] font-medium'>
              Specialized Networks
            </span>{' '}
            Across Sectors
          </h2>
          <p className='text-xl text-[#5c5d63] max-w-3xl mx-auto'>
            Deep expertise and connections across 20+ high-growth sectors
          </p>
        </div>

        {/* Verticals Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16'>
          {verticals.map((vertical, index) => {
            const Icon = vertical.icon

            return (
              <div
                key={index}
                className='vertical-card premium-glass elite-hover rounded-2xl p-6 border border-[#a98b5d]/20 text-center space-y-4 group cursor-pointer'
              >
                {/* Icon */}
                <div className='relative'>
                  <div className='w-16 h-16 rounded-2xl bg-[#a98b5d]/10 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300'>
                    <Icon className='w-8 h-8 text-[#a98b5d]' />
                  </div>
                  <div className='text-2xl absolute -top-2 -right-2'>
                    {vertical.emoji}
                  </div>
                </div>

                {/* Content */}
                <div className='space-y-2'>
                  <h3 className='text-lg font-semibold text-[#dcd7ce] group-hover:text-[#a98b5d] transition-colors duration-300'>
                    {vertical.name}
                  </h3>
                  <p className='text-sm text-[#5c5d63]'>
                    {vertical.deals} active deals
                  </p>
                </div>

                {/* Hover Effect */}
                <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='w-full h-1 bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent rounded-full' />
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16'>
          <div className='text-center space-y-2'>
            <div className='text-3xl font-bold text-[#a98b5d]'>20+</div>
            <div className='text-[#5c5d63] text-sm'>Industry Sectors</div>
          </div>
          <div className='text-center space-y-2'>
            <div className='text-3xl font-bold text-[#a98b5d]'>25K+</div>
            <div className='text-[#5c5d63] text-sm'>Active Deals</div>
          </div>
          <div className='text-center space-y-2'>
            <div className='text-3xl font-bold text-[#a98b5d]'>150+</div>
            <div className='text-[#5c5d63] text-sm'>Countries</div>
          </div>
          <div className='text-center space-y-2'>
            <div className='text-3xl font-bold text-[#a98b5d]'>$12B+</div>
            <div className='text-[#5c5d63] text-sm'>Total Funding</div>
          </div>
        </div>

        {/* CTA */}
        <div className='text-center mt-16'>
          <h3 className='text-2xl font-semibold text-[#dcd7ce] mb-4'>
            Don&apos;t see your sector?
          </h3>
          <p className='text-[#5c5d63] mb-6 max-w-2xl mx-auto'>
            We&apos;re constantly expanding our network. Join our waitlist to be
            notified when your industry vertical launches.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='px-8 py-3 rounded-xl bg-[#a98b5d] text-black font-semibold hover:bg-[#dcd7ce] transition-all duration-300'>
              Request New Vertical
            </button>
            <button className='px-8 py-3 rounded-xl border border-[#a98b5d]/30 text-[#a98b5d] font-semibold hover:bg-[#a98b5d]/10 transition-all duration-300'>
              View All Sectors
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
