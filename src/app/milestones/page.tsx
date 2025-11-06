'use client'

import type { Metadata } from 'next'
import { CheckCircle2, Circle, Clock, Rocket, Zap, Globe, Shield, AlertCircle, Users, TrendingUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { getCohortStats } from '@/app/actions/cohort-stats'
import './animations.css'

interface Milestone {
  title: string
  date: string
  description: string
  status: 'completed' | 'in-progress' | 'upcoming'
  features: string[]
  icon: typeof Rocket
}

const milestones: Milestone[] = [
  {
    title: 'Platform Foundation',
    date: 'October - November 2025',
    description: 'Building the core platform and recruiting the founding cohort.',
    status: 'in-progress',
    icon: Rocket,
    features: [
      'Multi-step application system for founders, investors, and team members',
      'AI-powered profile analysis and matching',
      'Email notification system',
      'User authentication and onboarding',
      'Founding cohort recruitment',
      'Platform brand identity and messaging',
    ],
  },
  {
    title: 'Closed Pilot Program Launch',
    date: 'December 15, 2025 (Estimated)',
    description: 'Limited launch with founding cohort members to validate core matchmaking features.',
    status: 'upcoming',
    icon: Zap,
    features: [],
  },
  {
    title: 'Pilot Expansion & Refinement',
    date: 'January - February 2026',
    description: 'Scale pilot program based on early feedback and prepare for next phase.',
    status: 'upcoming',
    icon: Clock,
    features: [
      'Enhanced matching algorithms based on pilot data',
      'Advanced analytics and insights dashboard',
      'Automated deal flow management',
      'Integration with third-party data providers',
      'Mobile optimization',
      'Performance monitoring and optimization',
    ],
  },
  {
    title: 'Governance System Development',
    date: 'March - April 2026',
    description: 'Implement digital governance infrastructure for startup communities.',
    status: 'upcoming',
    icon: Shield,
    features: [
      'Digital governance infrastructure',
      'Community governance for each startup',
      'Governance token system',
      'Cap table management tools',
      'Voting and decision-making features',
      'Audit trail for all transactions',
    ],
  },
  {
    title: 'Public Beta Launch',
    date: 'May - June 2026',
    description: 'Open platform to broader audience with full governance features.',
    status: 'upcoming',
    icon: CheckCircle2,
    features: [
      'Full public access with tiered membership',
      'Complete governance for all startups',
      'Secondary market for governance tokens',
      'Investor tools and compliance',
      'Global payment processing integration',
      'Advanced security and audit features',
    ],
  },
  {
    title: 'Scale & Geographic Expansion',
    date: 'Q3 2026 and Beyond',
    description: 'Expand to priority markets with focus on Africa and developing countries.',
    status: 'upcoming',
    icon: Globe,
    features: [
      'Multi-language support',
      'Regional partnerships',
      'Local payment integrations',
      'Market-specific matching',
      'Regulatory compliance for key markets',
      'Community building and ecosystem development',
    ],
  },
]

const StatusBadge = ({ status }: { status: Milestone['status'] }) => {
  const config = {
    completed: {
      icon: CheckCircle2,
      text: 'Completed',
      className: 'bg-green-500/10 text-green-400 border-green-500/20',
    },
    'in-progress': {
      icon: Clock,
      text: 'In Progress',
      className: 'bg-[#a98b5d]/10 text-[#a98b5d] border-[#a98b5d]/20',
    },
    upcoming: {
      icon: Circle,
      text: 'Upcoming',
      className: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
    },
  }

  const { icon: Icon, text, className } = config[status]

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${className}`}
    >
      <Icon className='w-3.5 h-3.5' />
      {text}
    </span>
  )
}

const MilestoneCard = ({ milestone, index }: { milestone: Milestone; index: number }) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon = milestone.icon

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline connector */}
      {index < milestones.length - 1 && (
        <div className='absolute left-6 top-20 md:top-24 bottom-0 w-0.5 bg-gradient-to-b from-[#a98b5d] to-transparent hidden md:block'>
          <div 
            className={`absolute inset-0 bg-gradient-to-b from-[#a98b5d] to-transparent transition-all duration-1000 origin-top ${
              isVisible ? 'scale-y-100' : 'scale-y-0'
            }`}
          />
        </div>
      )}

      <div className='flex gap-6 max-md:flex-col'>
        {/* Timeline dot */}
        <div className='hidden md:flex flex-col items-center flex-shrink-0'>
          <div
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
              milestone.status === 'completed'
                ? 'bg-green-500/10 border-green-500'
                : milestone.status === 'in-progress'
                  ? 'bg-[#a98b5d]/10 border-[#a98b5d] animate-pulse'
                  : 'bg-gray-500/10 border-gray-500'
            } ${
              isVisible ? 'scale-100' : 'scale-0'
            }`}
          >
            <Icon className={`w-6 h-6 ${
              milestone.status === 'completed'
                ? 'text-green-400'
                : milestone.status === 'in-progress'
                  ? 'text-[#a98b5d]'
                  : 'text-gray-400'
            }`} />
          </div>
        </div>

        {/* Card content */}
        <div className='flex-1 pb-8 md:pb-12'>
          <div className='bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg md:rounded-xl p-4 md:p-6 hover:border-[#a98b5d]/50 hover:shadow-lg hover:shadow-[#a98b5d]/10 transition-all duration-300 group relative overflow-hidden'>
            {/* Animated background gradient */}
            <div className='absolute inset-0 bg-gradient-to-br from-[#a98b5d]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
            
            <div className='relative z-10'>
              <div className='flex items-start justify-between gap-3 md:gap-4 mb-3 md:mb-4 flex-wrap'>
                <div>
                  <h3 className='text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-[#a98b5d] transition-colors'>
                    {milestone.title}
                  </h3>
                  <p className='text-xs md:text-sm text-[#a98b5d] font-medium'>{milestone.date}</p>
                </div>
                <StatusBadge status={milestone.status} />
              </div>

              <p className='text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed'>{milestone.description}</p>

              { milestone.features.length > 0 && (
                <div>
                  <h4 className='text-xs md:text-sm font-semibold text-white mb-2 md:mb-3 flex items-center gap-2'>
                    <span className='w-1 h-4 bg-[#a98b5d] rounded-full' />
                    Key Features
                  </h4>
                  <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                  {milestone.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className='flex items-start gap-2 text-sm text-gray-400 transition-all duration-300 hover:text-gray-200'
                      style={{ 
                        transitionDelay: isVisible ? `${(idx + 1) * 50}ms` : '0ms',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(-10px)'
                      }}
                    >
                      <span className='text-[#a98b5d] mt-1'>•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div> )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CohortUrgencyBanner = () => {
  const [stats, setStats] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      const result = await getCohortStats()
      if (result.success && result.data) {
        setStats(result.data)
      }
      setIsLoading(false)
    }
    fetchStats()
  }, [])

  if (isLoading || !stats) {
    return (
      <div className='bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6 animate-pulse'>
        <div className='h-8 bg-gray-700 rounded w-3/4 mb-4' />
        <div className='h-4 bg-gray-700 rounded w-1/2' />
      </div>
    )
  }

  const { foundersCount, investorsCount, totalApplications, spotsRemaining, percentageFilled, targetLimit, isNearCapacity, isFull } = stats

  return (
    <div className={`relative overflow-hidden rounded-xl border ${
      isFull 
        ? 'bg-gradient-to-r from-red-600/20 to-red-500/20 border-red-500/50'
        : isNearCapacity 
          ? 'bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/30'
          : 'bg-gradient-to-r from-[#a98b5d]/10 to-orange-500/10 border-[#a98b5d]/30'
    } p-6 md:p-8`}>
      {/* Animated background effect */}
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer' />
      
      <div className='relative z-10'>
        <div className='flex items-start gap-4 mb-6'>
          <div className={`p-3 rounded-full ${
            isFull ? 'bg-red-500/20' : isNearCapacity ? 'bg-orange-500/20' : 'bg-[#a98b5d]/20'
          }`}>
            {isFull ? (
              <AlertCircle className='w-6 h-6 text-red-400' />
            ) : (
              <Users className='w-6 h-6 text-[#a98b5d]' />
            )}
          </div>
          <div className='flex-1'>
            <h2 className='text-2xl md:text-3xl font-bold text-white mb-2'>
              {isFull ? (
                'Founding Cohort Full'
              ) : isNearCapacity ? (
                <>
                  Only <span className='text-orange-400'>{spotsRemaining}</span> Spots Remaining!
                </>
              ) : (
                'Join Our Founding Cohort'
              )}
            </h2>
            <p className='text-gray-300 text-sm md:text-base'>
              {isFull ? (
                'We\'ve reached our target of 1,000 founding members. Applications are now closed. Join our waitlist to be notified when we open again.'
              ) : isNearCapacity ? (
                `We're almost at capacity! Applications will close once we reach ${targetLimit.toLocaleString()} members. Don't miss your chance to be part of the founding cohort.`
              ) : (
                `Be among the first ${targetLimit.toLocaleString()} founders and investors to shape the future of startup funding. Applications will close once we reach capacity.`
              )}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
          <div className='bg-black/30 rounded-lg p-4 border border-gray-700'>
            <div className='text-2xl md:text-3xl font-bold text-[#a98b5d]'>{foundersCount}</div>
            <div className='text-xs md:text-sm text-gray-400'>Founders Joined</div>
          </div>
          <div className='bg-black/30 rounded-lg p-4 border border-gray-700'>
            <div className='text-2xl md:text-3xl font-bold text-[#a98b5d]'>{investorsCount}</div>
            <div className='text-xs md:text-sm text-gray-400'>Investors Joined</div>
          </div>
          <div className='bg-black/30 rounded-lg p-4 border border-gray-700'>
            <div className='text-2xl md:text-3xl font-bold text-white'>{totalApplications}/{targetLimit}</div>
            <div className='text-xs md:text-sm text-gray-400'>Total Applications</div>
          </div>
          <div className='bg-black/30 rounded-lg p-4 border border-gray-700'>
            <div className={`text-2xl md:text-3xl font-bold ${
              isFull ? 'text-red-400' : isNearCapacity ? 'text-orange-400' : 'text-green-400'
            }`}>
              {isFull ? '0' : spotsRemaining}
            </div>
            <div className='text-xs md:text-sm text-gray-400'>Spots Left</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className='mb-6'>
          <div className='flex justify-between items-center mb-2'>
            <span className='text-sm text-gray-400'>Cohort Capacity</span>
            <span className='text-sm font-semibold text-white'>{percentageFilled}% Filled</span>
          </div>
          <div className='h-3 bg-gray-800 rounded-full overflow-hidden'>
            <div 
              className={`h-full transition-all duration-1000 ease-out ${
                isFull 
                  ? 'bg-gradient-to-r from-red-500 to-red-600'
                  : isNearCapacity 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500'
                    : 'bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d]'
              }`}
              style={{ width: `${percentageFilled}%` }}
            />
          </div>
        </div>

        {/* CTA */}
        {!isFull && (
          <div className='flex flex-wrap gap-4 items-center'>
            <a
              href='/apply'
              className='px-6 py-3 bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2'
            >
              <TrendingUp className='w-5 h-5' />
              Apply Now - Limited Spots
            </a>
            {isNearCapacity && (
              <span className='text-orange-400 text-sm font-medium animate-pulse flex items-center gap-2'>
                <AlertCircle className='w-4 h-4' />
                Closing Soon!
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

const StatCard = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={ref}
      className={`text-center p-4 md:p-6 rounded-lg md:rounded-xl bg-black/30 border border-gray-700 hover:border-[#a98b5d]/50 transition-all duration-500 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#a98b5d] mb-1 md:mb-2'>{value}</div>
      <div className='text-xs md:text-sm text-gray-400'>{label}</div>
    </div>
  )
}

export default function MilestonesPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white'>
      {/* Hero Section */}
      <section className='relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#a98b5d]/20 via-transparent to-transparent' />
        
        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#dcd7ce] via-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
              Our Journey to Revolutionize Startup Funding
            </h1>
            <p className='text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed'>
              Building the future of merit-based startup funding, one milestone at a time. 
              Track our progress as we develop institutional-grade infrastructure for the next generation of founders and investors.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='px-4 md:px-6 pb-12 md:pb-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6'>
            <StatCard value='6' label='Major Milestones' delay={0} />
            <StatCard value='Dec 15' label='Pilot Launch Target' delay={100} />
            <StatCard value='Q2 2026' label='Blockchain Integration' delay={200} />
            <StatCard value='Global' label='Geographic Reach' delay={300} />
          </div>
        </div>
      </section>

      {/* Cohort Urgency Banner */}
      <section className='px-4 md:px-6 pb-8 md:pb-12'>
        <div className='max-w-7xl mx-auto'>
          <CohortUrgencyBanner />
        </div>
      </section>

      {/* Timeline */}
      <section className='px-4 md:px-6 pb-12 md:pb-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='space-y-0'>
            {milestones.map((milestone, index) => (
              <MilestoneCard key={index} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='px-4 md:px-6 pb-16 md:pb-32'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-gradient-to-r from-black via-[#a98b5d]/5 to-black border border-[#a98b5d]/30 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-center'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white'>
              Be Part of Our Journey
            </h2>
            <p className='text-sm sm:text-base text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto'>
              Join our founding cohort and help shape the future of startup funding. 
              Get early access to our platform and be the first to experience merit-based matchmaking.
            </p>
            <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4'>
              <a
                href='/apply'
                className='px-6 sm:px-8 py-3 bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base w-full sm:w-auto'
              >
                Join Founding Cohort
              </a>
              <a
                href='/about'
                className='px-6 sm:px-8 py-3 bg-transparent border border-[#a98b5d] text-white font-semibold rounded-lg hover:bg-[#a98b5d]/10 transition-colors text-sm sm:text-base w-full sm:w-auto'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
