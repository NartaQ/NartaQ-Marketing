'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  BookOpen,
  Video,
  Calculator,
  Download,
  ExternalLink,
  Clock,
  Users,
  FileText,
  Headphones,
  BarChart3,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ResourceHub() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const resources = [
    {
      type: 'Guide',
      icon: BookOpen,
      title: 'Cold Email Templates That Get 60% Replies',
      description:
        'Proven email templates and strategies used by successful founders to connect with investors.',
      category: 'Fundraising',
      readTime: '15 min read',
      downloads: '12.3K',
      badge: 'Most Popular',
      color: '#a98b5d',
    },
    {
      type: 'Webinar',
      icon: Video,
      title: 'Pitching to Climate Tech VCs',
      description:
        'Live session with top climate VCs sharing what they look for in early-stage investments.',
      category: 'Pitch Deck',
      duration: '45 min',
      attendees: '2.1K',
      badge: 'Live',
      color: '#5c5d63',
    },
    {
      type: 'Tool',
      icon: Calculator,
      title: 'Service Provider ROI Calculator',
      description:
        'Calculate your potential revenue and ROI when working with funded startups through our platform.',
      category: 'Business Tools',
      calculations: '8.7K',
      badge: 'Interactive',
      color: '#3e3f44',
    },
    {
      type: 'Report',
      icon: BarChart3,
      title: 'Q4 2024 Funding Landscape Report',
      description:
        'Comprehensive analysis of funding trends, sector performance, and investor preferences.',
      category: 'Market Intelligence',
      pages: '47 pages',
      downloads: '5.2K',
      badge: 'New',
      color: '#a98b5d',
    },
    {
      type: 'Podcast',
      icon: Headphones,
      title: 'Founder Stories: From Idea to Series A',
      description:
        'Weekly interviews with successful founders sharing their fundraising journey and lessons learned.',
      category: 'Inspiration',
      episodes: '24 episodes',
      listeners: '15K+',
      badge: 'Weekly',
      color: '#5c5d63',
    },
    {
      type: 'Template',
      icon: FileText,
      title: 'Due Diligence Checklist for Investors',
      description:
        'Complete checklist covering technical, financial, and market due diligence for early-stage investments.',
      category: 'Investment',
      items: '127 items',
      downloads: '3.8K',
      badge: 'Essential',
      color: '#3e3f44',
    },
  ]

  const categories = [
    { name: 'All Resources', count: 156, active: true },
    { name: 'Fundraising', count: 42 },
    { name: 'Investment', count: 38 },
    { name: 'Business Tools', count: 29 },
    { name: 'Market Intelligence', count: 25 },
    { name: 'Legal & Compliance', count: 22 },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.resource-card', { opacity: 0, y: 40, rotationX: -15 })
      gsap.set('.category-filter', { opacity: 0, x: -20 })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          },
        })
        .to('.category-filter', {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        })
        .to(
          '.resource-card',
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
          },
          '-=0.3'
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className='relative py-24 bg-gradient-to-b from-[#3e3f44] via-black to-[#232428] overflow-hidden'
    >
      <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent z-30' />
      <div className='absolute top-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#dcd7ce]/60 to-transparent z-30' />

      {/* Background Elements */}
      <div className='absolute inset-0 luxury-texture opacity-30' />
      <div className='absolute top-0 right-1/4 w-96 h-96 bg-[#a98b5d]/5 rounded-full blur-3xl' />
      <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-[#5c5d63]/5 rounded-full blur-3xl' />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16 space-y-4'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full premium-glass border border-[#a98b5d]/20'>
            <span className='text-sm font-medium text-[#a98b5d]'>
              RESOURCE HUB
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-light text-[#dcd7ce]'>
            <span className='text-[#a98b5d] font-medium'>Knowledge Center</span>{' '}
            for Growth
          </h2>
          <p className='text-xl text-[#5c5d63] max-w-3xl mx-auto'>
            Curated resources, tools, and insights to accelerate your success
          </p>
        </div>

        {/* Category Filters */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 justify-items-center mb-12'>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-filter px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                category.active
                  ? 'bg-[#a98b5d] text-black'
                  : 'premium-glass border border-[#a98b5d]/20 text-[#dcd7ce] hover:bg-[#a98b5d]/10'
              }`}
            >
              {category.name}
              <span className='ml-2 text-sm opacity-70'>
                ({category.count})
              </span>
            </button>
          ))}
        </div>

        {/* Resource Cards Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16'>
          {resources.map((resource, index) => {
            const Icon = resource.icon

            return (
              <div
                key={index}
                className='resource-card premium-glass elite-hover rounded-2xl border border-[#a98b5d]/20 overflow-hidden group cursor-pointer'
              >
                {/* Card Header */}
                <div className='p-6 space-y-4'>
                  {/* Type Badge & Icon */}
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <div
                        className='w-10 h-10 rounded-xl flex items-center justify-center'
                        style={{ backgroundColor: `${resource.color}20` }}
                      >
                        <Icon
                          className='w-5 h-5'
                          style={{ color: resource.color }}
                        />
                      </div>
                      <span
                        className='text-sm font-medium'
                        style={{ color: resource.color }}
                      >
                        {resource.type}
                      </span>
                    </div>

                    {resource.badge && (
                      <span className='px-2 py-1 rounded-full bg-[#a98b5d]/20 text-[#a98b5d] text-xs font-medium'>
                        {resource.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className='space-y-3'>
                    <h3 className='text-lg font-semibold text-[#dcd7ce] leading-tight group-hover:text-[#a98b5d] transition-colors duration-300'>
                      {resource.title}
                    </h3>
                    <p className='text-[#5c5d63] text-sm leading-relaxed'>
                      {resource.description}
                    </p>
                  </div>

                  {/* Metadata */}
                  <div className='flex items-center justify-between text-xs text-[#5c5d63]'>
                    <span className='px-2 py-1 rounded-full bg-[#232428] border border-[#5c5d63]/20'>
                      {resource.category}
                    </span>
                    <div className='flex items-center gap-4'>
                      {resource.readTime && (
                        <div className='flex items-center gap-1'>
                          <Clock className='w-3 h-3' />
                          <span>{resource.readTime}</span>
                        </div>
                      )}
                      {resource.duration && (
                        <div className='flex items-center gap-1'>
                          <Clock className='w-3 h-3' />
                          <span>{resource.duration}</span>
                        </div>
                      )}
                      {resource.downloads && (
                        <div className='flex items-center gap-1'>
                          <Download className='w-3 h-3' />
                          <span>{resource.downloads}</span>
                        </div>
                      )}
                      {resource.attendees && (
                        <div className='flex items-center gap-1'>
                          <Users className='w-3 h-3' />
                          <span>{resource.attendees}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className='px-6 pb-6'>
                  <button className='w-full py-3 px-4 rounded-xl bg-[#a98b5d]/10 border border-[#a98b5d]/30 text-[#a98b5d] font-medium hover:bg-[#a98b5d]/20 transition-all duration-300 flex items-center justify-center gap-2'>
                    <span>
                      {resource.type === 'Tool'
                        ? 'Use Tool'
                        : resource.type === 'Webinar'
                        ? 'Register'
                        : 'Access Resource'}
                    </span>
                    <ExternalLink className='w-4 h-4' />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Newsletter Signup */}
        <div className='premium-glass rounded-3xl p-8 border border-[#a98b5d]/20 max-w-2xl mx-auto text-center'>
          <h3 className='text-2xl font-semibold text-[#dcd7ce] mb-4'>
            Stay Updated with New Resources
          </h3>
          <p className='text-[#5c5d63] mb-6'>
            Get weekly insights, new tools, and exclusive content delivered to
            your inbox
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <input
              type='email'
              placeholder='Enter your email address'
              className='flex-1 px-4 py-3 rounded-xl bg-[#232428] border border-[#5c5d63]/30 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:outline-none transition-colors duration-300'
            />
            <button className='px-8 py-3 rounded-xl bg-[#a98b5d] text-black font-semibold hover:bg-[#dcd7ce] transition-all duration-300 whitespace-nowrap'>
              Subscribe
            </button>
          </div>
          <p className='text-xs text-[#5c5d63] mt-3'>
            No spam. Unsubscribe anytime. 12,000+ subscribers trust us.
          </p>
        </div>
      </div>
    </section>
  )
}
