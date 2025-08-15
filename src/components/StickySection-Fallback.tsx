'use client'

import { useEffect, useState, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface StickySectionProps {
  className?: string
}

export default function StickySectionFallback({
  className,
}: StickySectionProps) {
  const [isMobile, setIsMobile] = useState(false)

  // Memoized resize handler to prevent unnecessary re-renders
  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [checkMobile])

  const stickyText = {
    title: 'Our Innovation Process',
    subtitle: 'How we transform ideas into reality',
    description:
      'We follow a proven methodology that combines creativity with technical excellence to deliver exceptional results for our clients.',
  }

  const scrollingContent = [
    {
      step: '01',
      title: 'Discovery & Research',
      description:
        'We start by understanding your business goals, target audience, and market landscape. Through comprehensive research and stakeholder interviews, we identify opportunities and challenges.',
      features: [
        'Market Analysis',
        'User Research',
        'Competitive Study',
        'Goal Definition',
      ],
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description:
        'Based on our research, we develop a strategic roadmap that aligns with your objectives. We create detailed project plans, timelines, and resource allocation strategies.',
      features: [
        'Strategic Planning',
        'Resource Allocation',
        'Timeline Creation',
        'Risk Assessment',
      ],
    },
    {
      step: '03',
      title: 'Design & Prototyping',
      description:
        'Our design team creates intuitive and engaging user experiences. We develop wireframes, prototypes, and high-fidelity designs that bring your vision to life.',
      features: [
        'UI/UX Design',
        'Prototyping',
        'User Testing',
        'Design Systems',
      ],
    },
    {
      step: '04',
      title: 'Development & Implementation',
      description:
        'Our development team builds robust, scalable solutions using cutting-edge technologies. We follow best practices and maintain high code quality standards.',
      features: [
        'Frontend Development',
        'Backend Architecture',
        'API Integration',
        'Quality Assurance',
      ],
    },
    {
      step: '05',
      title: 'Testing & Optimization',
      description:
        'We conduct thorough testing across all devices and browsers. Performance optimization ensures your solution runs smoothly and efficiently.',
      features: [
        'Cross-browser Testing',
        'Performance Optimization',
        'Security Testing',
        'User Acceptance Testing',
      ],
    },
    {
      step: '06',
      title: 'Launch & Support',
      description:
        'We handle the deployment process and provide ongoing support. Our team ensures smooth operations and continuous improvements post-launch.',
      features: [
        'Deployment',
        'Monitoring',
        'Maintenance',
        'Continuous Support',
      ],
    },
    {
      step: '07',
      title: 'Analytics & Insights',
      description:
        'We implement comprehensive analytics to track performance and user behavior. This data-driven approach helps us make informed decisions for future improvements.',
      features: [
        'Performance Analytics',
        'User Behavior Tracking',
        'Conversion Optimization',
        'Reporting Dashboard',
      ],
    },
    {
      step: '08',
      title: 'Scaling & Growth',
      description:
        'As your business grows, we help scale your solution to meet increasing demands. We provide guidance on infrastructure improvements and feature enhancements.',
      features: [
        'Infrastructure Scaling',
        'Feature Enhancement',
        'Performance Monitoring',
        'Growth Strategy',
      ],
    },
  ]

  if (isMobile) {
    // Mobile layout - no sticky behavior
    return (
      <section
        key='mobile-layout'
        className={cn(
          'py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900',
          className
        )}
      >
        <div className='container mx-auto px-4'>
          {/* Mobile header */}
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              {stickyText.title}
            </h2>
            <p className='text-xl text-gray-300 mb-6'>{stickyText.subtitle}</p>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              {stickyText.description}
            </p>
          </div>

          {/* Mobile content */}
          <div className='space-y-8'>
            {scrollingContent.map((item, index) => (
              <div
                key={`mobile-${item.step}-${index}`}
                className='bg-gray-800/50 rounded-xl p-6 border border-gray-700'
              >
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center'>
                    <span className='text-white font-bold text-sm'>
                      {item.step}
                    </span>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-semibold text-white mb-3'>
                      {item.title}
                    </h3>
                    <p className='text-gray-300 mb-4'>{item.description}</p>
                    <div className='grid grid-cols-2 gap-2'>
                      {item.features.map((feature, featureIndex) => (
                        <div
                          key={`mobile-${feature}-${featureIndex}`}
                          className='flex items-center gap-2'
                        >
                          <div className='w-1.5 h-1.5 bg-blue-400 rounded-full'></div>
                          <span className='text-sm text-gray-400'>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Desktop layout with CSS sticky positioning (more reliable than GSAP)
  return (
    <section
      key='desktop-layout'
      className={cn(
        'min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900',
        className
      )}
    >
      <div className='container mx-auto px-4'>
        <div className='flex lg:flex-row flex-col'>
          {/* Sticky left content using CSS sticky */}
          <div className='lg:w-1/2 lg:h-screen lg:flex lg:items-start py-20'>
            <div
              className='lg:sticky lg:top-20 space-y-6 lg:pr-12'
              style={{ alignSelf: 'flex-start' }}
            >
              <h2 className='text-4xl lg:text-5xl font-bold text-white leading-tight'>
                {stickyText.title}
              </h2>
              <p className='text-xl text-gray-300'>{stickyText.subtitle}</p>
              <p className='text-gray-400 text-lg leading-relaxed'>
                {stickyText.description}
              </p>
              <div className='pt-6'>
                <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full'></div>
              </div>
            </div>
          </div>

          {/* Scrolling right content */}
          <div className='lg:w-1/2 py-20'>
            <div className='space-y-16 lg:pl-12'>
              {scrollingContent.map((item, index) => (
                <div key={`${item.step}-${index}`} className='group'>
                  <div className='bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/50'>
                    <div className='flex items-start gap-6'>
                      <div className='flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                        <span className='text-white font-bold text-lg'>
                          {item.step}
                        </span>
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300'>
                          {item.title}
                        </h3>
                        <p className='text-gray-300 mb-6 leading-relaxed'>
                          {item.description}
                        </p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                          {item.features.map((feature, featureIndex) => (
                            <div
                              key={`${feature}-${featureIndex}`}
                              className='flex items-center gap-3'
                            >
                              <div className='w-2 h-2 bg-blue-400 rounded-full group-hover:bg-purple-400 transition-colors duration-300'></div>
                              <span className='text-gray-400 group-hover:text-gray-300 transition-colors duration-300'>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
