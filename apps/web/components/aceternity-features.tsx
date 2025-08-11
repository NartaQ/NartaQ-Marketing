'use client'

import { Button } from '@investi/ui'
import { Card, CardContent } from '@investi/ui'
import {
  Search,
  Users,
  Mail,
  BarChart3,
  Target,
  Zap,
  Brain,
  Shield,
  ArrowRight,
  Star,
  Building2,
  Check,
  TrendingUp,
  FileText,
  MessageSquare,
  Filter,
  DollarSign,
  BookOpen,
  Headphones,
  ExternalLink,
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lottie from 'lottie-react'
import { Marquee } from '@/components/ui/marquee'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Simple Lottie animation for data visualization
const dataAnimation = {
  v: '5.7.4',
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: 'Data Flow',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Bar 1',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        p: { a: 0, k: [50, 100, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [100, 0, 100] },
            { t: 30, s: [100, 100, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'rc',
              s: { a: 0, k: [20, 80] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 4 },
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0.2, 0.6, 1, 1] },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
    },
  ],
}

const features = [
  {
    icon: Search,
    title: 'AI-Powered Investor Discovery',
    description:
      'Find the perfect investors for your startup using advanced AI matching algorithms that analyze 50+ data points.',
    gradient: 'from-primary-500 to-primary-600',
    delay: 0,
  },
  {
    icon: Mail,
    title: 'Smart Outreach System',
    description:
      'Personalized email campaigns with 40% response rates. Our AI crafts compelling messages that get results.',
    gradient: 'from-secondary-500 to-secondary-600',
    delay: 0.1,
  },
  {
    icon: Users,
    title: 'Network Intelligence',
    description:
      'Leverage your existing connections to get warm introductions to top-tier investors in your industry.',
    gradient: 'from-primary-500 to-primary-600',
    delay: 0.2,
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description:
      'Track every interaction, measure engagement, and optimize your fundraising strategy with real-time insights.',
    gradient: 'from-secondary-500 to-secondary-600',
    delay: 0.3,
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    description:
      'Filter investors by stage, check size, industry focus, and geographic preferences for maximum relevance.',
    gradient: 'from-primary-500 to-primary-600',
    delay: 0.4,
  },
  {
    icon: Zap,
    title: 'Instant Deal Flow',
    description:
      'Get discovered by investors actively seeking startups in your space through our curated deal flow platform.',
    gradient: 'from-secondary-500 to-secondary-600',
    delay: 0.5,
  },
]

const additionalFeatures = [
  {
    icon: Brain,
    title: 'AI Recommendations',
    description:
      'Smart suggestions on timing, approach, and investor prioritization.',
    stats: '95% accuracy',
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description:
      'Enterprise-grade security protecting your sensitive business data.',
    stats: 'SOC 2 compliant',
  },
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechFlow',
    company: 'Series A - $12M',
    content:
      'Investi helped us connect with the right investors and close our Series A in just 3 months.',
    rating: 5,
    avatar: 'SC',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Founder, DataSync',
    company: 'Seed - $2.5M',
    content:
      'The AI matching was incredible. Every investor we met was genuinely interested in our space.',
    rating: 5,
    avatar: 'MR',
  },
  {
    name: 'Emily Watson',
    role: 'Co-founder, GreenTech',
    company: 'Series B - $25M',
    content:
      'From cold outreach to warm introductions, Investi transformed our fundraising process.',
    rating: 5,
    avatar: 'EW',
  },
  {
    name: 'David Kim',
    role: 'CEO, FinanceAI',
    company: 'Series A - $8M',
    content:
      'The analytics dashboard gave us insights we never had before. Game-changing platform.',
    rating: 5,
    avatar: 'DK',
  },
  {
    name: 'Lisa Thompson',
    role: 'Founder, HealthTech',
    company: 'Seed - $1.8M',
    content:
      'Raised our seed round 40% faster than expected. The investor network is unmatched.',
    rating: 5,
    avatar: 'LT',
  },
  {
    name: 'Alex Johnson',
    role: 'CEO, CloudScale',
    company: 'Series A - $15M',
    content:
      "Investi's personalized outreach templates had a 45% response rate. Incredible results.",
    rating: 5,
    avatar: 'AJ',
  },
]

// Professional free features data
const freeFeatures = [
  { icon: Search, text: 'Unlimited investor search' },
  { icon: FileText, text: 'Unlimited deck sharing' },
  { icon: BarChart3, text: 'Unlimited deck analytics' },
  { icon: Users, text: 'Unlimited CRM' },
  { icon: Users, text: 'Unlimited team members' },
  { icon: MessageSquare, text: 'Automatic follow-ups' },
  { icon: BookOpen, text: 'Fundraising webinars' },
  { icon: Target, text: 'Fundability test' },
]

// Premium features data
const premiumFeatures = [
  {
    icon: TrendingUp,
    title: '5x more outreach',
    description:
      'Reach out to up to 5 investors per day directly via Investi, and fill your funding pipeline.',
    highlight: false,
  },
  {
    icon: Filter,
    title: '10 investor filters',
    description:
      'Target the right investors with exclusive filters: check size, lead preferences, etc.',
    highlight: false,
  },
  {
    icon: Search,
    title: 'Intro finder',
    description:
      'Plug in your email. Investi scans your network and finds who can make an intro to your dream investor.',
    highlight: true,
  },
  {
    icon: DollarSign,
    title: '$2,000,000 discount',
    description:
      'Get massive discount on Airtable, Stripe, Hubspot, Azure and many exclusive deals.',
    highlight: false,
  },
  {
    icon: BookOpen,
    title: 'Fundraising masterclass',
    description:
      'Learn how to raise like a pro: 24 videos of 10 min each to guide you from zero to funded.',
    highlight: false,
  },
  {
    icon: BarChart3,
    title: 'Unlimited deck reviews',
    description:
      "Get actionable feedback on your pitch deck, as often as you need, until it's perfect.",
    highlight: false,
  },
  {
    icon: FileText,
    title: 'Pitch deck template',
    description:
      'Build a top 1% pitch deck with our battle-tested template. Works on PowerPoint & Google Slides.',
    highlight: false,
  },
  {
    icon: Headphones,
    title: 'Support Investi',
    description:
      'Your membership helps us make venture capital a better, more open industry.',
    highlight: false,
  },
]

export function AceternityFeatures() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // More aggressive scroll triggers for faster component appearance
    const scrollConfig = {
      start: 'top 95%', // Start animation much earlier
      end: 'bottom 5%',
      toggleActions: 'play none none reverse',
      refreshPriority: 1, // Higher priority for smoother performance
      fastScrollEnd: true, // Optimize for fast scrolling
    }

    // Title animation - appears immediately when section comes into view
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 }, // Reduced movement for faster animation
      {
        opacity: 1,
        y: 0,
        duration: 0.6, // Faster duration
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          ...scrollConfig,
          start: 'top 100%', // Even more aggressive for title
        },
      }
    )

    // Feature cards with optimized stagger - much faster appearance
    const cards = gridRef.current?.querySelectorAll('.feature-card')
    if (cards) {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 40, // Reduced movement
          scale: 0.95, // Less dramatic scale
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5, // Much faster
          stagger: 0.05, // Faster stagger
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            ...scrollConfig,
          },
        }
      )
    }

    // Optimize ScrollTrigger for better performance
    ScrollTrigger.config({
      limitCallbacks: true, // Limit callback frequency
      syncInterval: 150, // Sync less frequently for better performance
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className='py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900 to-zinc-950 relative overflow-hidden'
    >
      {/* Enhanced Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary-500/3 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-secondary-500/3 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/2 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-light text-sm font-medium mb-6'>
            <Zap className='w-4 h-4 mr-2' />
            Comprehensive Fundraising Platform
          </div>
          <h2
            ref={titleRef}
            className='fast-animate text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight mb-6 text-zinc-100 leading-tight'
          >
            Everything you need to{' '}
            <span className='text-gradient-hero'>raise capital</span>
          </h2>
          <p className='text-lg sm:text-xl text-zinc-300 max-w-4xl mx-auto leading-relaxed font-medium'>
            Our comprehensive platform provides all the tools, insights, and
            connections you need to successfully fund your startup and scale
            your business.
          </p>
        </div>

        {/* Main Features Grid */}
        <div
          ref={gridRef}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20'
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className='feature-card instant-card group relative overflow-hidden bg-zinc-900/60 border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-primary h-full'
            >
              {/* Enhanced gradient overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

              {/* Subtle border glow */}
              <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm'></div>

              <CardContent className='p-6 sm:p-8 relative z-10 h-full flex flex-col'>
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                >
                  <feature.icon className='h-7 w-7 sm:h-8 sm:w-8 text-white' />
                </div>

                <h3 className='text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-zinc-100 group-hover:text-primary-light transition-colors duration-300'>
                  {feature.title}
                </h3>

                <p className='text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors duration-300 mb-6 flex-grow text-sm sm:text-base font-medium'>
                  {feature.description}
                </p>

                <Button
                  variant='ghost'
                  size='sm'
                  className='text-primary hover:text-primary-light hover:bg-primary-500/10 p-0 h-auto font-medium group/btn self-start'
                >
                  Learn more
                  <ArrowRight className='ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1' />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features with Enhanced Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20'>
          {additionalFeatures.map((feature, index) => (
            <Card
              key={index}
              className='group relative overflow-hidden bg-zinc-900/60 border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl shadow-primary'
            >
              <CardContent className='p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6'>
                <div className='flex-shrink-0'>
                  <div className='w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                    <feature.icon className='h-7 w-7 sm:h-8 sm:w-8 text-primary' />
                  </div>
                </div>

                <div className='flex-1 min-w-0'>
                  <h3 className='text-lg sm:text-xl font-semibold mb-2 text-zinc-100'>
                    {feature.title}
                  </h3>
                  <p className='text-zinc-300 mb-3 text-sm sm:text-base leading-relaxed font-medium'>
                    {feature.description}
                  </p>
                  <div className='inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20'>
                    <div className='w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse'></div>
                    <span className='text-xs sm:text-sm text-amber-400 font-medium'>
                      {feature.stats}
                    </span>
                  </div>
                </div>

                {index === 0 && (
                  <div className='flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 opacity-60 hidden sm:block'>
                    <Lottie
                      animationData={dataAnimation}
                      loop={true}
                      autoplay={true}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories Marquee */}
        <div className='mb-16 sm:mb-20'>
          <div className='text-center mb-8 sm:mb-12'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-success-500/10 border border-success-500/20 text-success-light text-sm font-medium mb-4'>
              <Star className='w-4 h-4 mr-2 fill-current' />
              Success Stories
            </div>
            <h3 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-100 mb-3'>
              Trusted by successful founders
            </h3>
            <p className='text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto font-medium'>
              Join thousands who have raised over $2.5B using our platform
            </p>
          </div>

          <div className='relative'>
            {/* Gradient overlays for smooth edges */}
            <div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none'></div>
            <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none'></div>

            <Marquee pauseOnHover className='[--duration:40s] py-4'>
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className='w-72 sm:w-80 mx-3 sm:mx-4 bg-zinc-900/60 border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg shadow-primary'
                >
                  <CardContent className='p-5 sm:p-6'>
                    <div className='flex items-start gap-3 sm:gap-4 mb-4'>
                      <div className='w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg'>
                        {testimonial.avatar}
                      </div>
                      <div className='flex-1 min-w-0'>
                        <h4 className='font-semibold text-zinc-100 text-sm sm:text-base truncate'>
                          {testimonial.name}
                        </h4>
                        <p className='text-zinc-400 text-xs sm:text-sm truncate'>
                          {testimonial.role}
                        </p>
                        <div className='flex items-center gap-1 mt-1'>
                          <Building2 className='h-3 w-3 text-success flex-shrink-0' />
                          <span className='text-success text-xs font-medium truncate'>
                            {testimonial.company}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='flex items-center gap-1 mb-3'>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className='h-3 w-3 sm:h-4 sm:w-4 fill-primary text-primary'
                        />
                      ))}
                    </div>

                    <p className='text-zinc-300 text-xs sm:text-sm leading-relaxed line-clamp-3 font-medium'>
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Professional Features Section */}
        <div className='mb-16 sm:mb-20'>
          {/* Free Features Section - Claude Dark Mode */}
          <div className='bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 mb-12'>
            <div className='max-w-4xl mx-auto'>
              <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
                {/* Illustration placeholder */}
                <div className='flex-shrink-0 w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-primary-500/20 rounded-3xl flex items-center justify-center relative overflow-hidden'>
                  <div className='absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10'></div>
                  <div className='relative z-10 text-center'>
                    <div className='w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg'>
                      <Zap className='w-8 h-8 text-white' />
                    </div>
                    <div className='text-zinc-200 text-sm font-medium'>
                      Investi Platform
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1 text-center lg:text-left'>
                  <h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 mb-6 leading-tight'>
                    90% Of Investi's Features Are Available To All Founders{' '}
                    <span className='text-primary'>For Free, Forever</span>
                  </h3>

                  {/* Free features grid */}
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                    {freeFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className='flex items-center gap-3 text-zinc-300'
                      >
                        <div className='w-5 h-5 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-sm'>
                          <Check className='w-3 h-3 text-white' />
                        </div>
                        <span className='text-sm font-medium'>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className='mt-8'>
                    <Button
                      variant='ghost'
                      className='text-primary hover:text-primary-light hover:bg-primary-500/10 font-medium group'
                    >
                      And many, many more
                      <ExternalLink className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Features Section */}
          <div className='text-center mb-12'>
            <h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 mb-4'>
              Raise <span className='text-primary'>10x</span> Faster With
              Premium
            </h3>
            <p className='text-zinc-300 text-lg mb-2'>
              Investi Premium Gives You Advanced Features To Raise Better And
              Faster.
            </p>
            <p className='text-zinc-400 mb-8'>
              Upgrade for{' '}
              <span className='text-primary font-semibold'>$99/month</span> or
              just <span className='text-primary font-semibold'>$299/year</span>
              .
            </p>
          </div>

          {/* Premium features grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12'>
            {premiumFeatures.map((feature, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] ${feature.highlight
                  ? 'bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border-primary-500/30 ring-2 ring-primary-500/20'
                  : 'bg-zinc-900/60 border-zinc-800/50'
                  } backdrop-blur-sm hover:shadow-xl shadow-primary`}
              >
                <CardContent className='p-6 sm:p-8'>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.highlight
                      ? 'gradient-primary shadow-lg'
                      : 'bg-gradient-to-br from-zinc-700 to-zinc-800'
                      }`}
                  >
                    <feature.icon
                      className={`h-6 w-6 ${feature.highlight ? 'text-white' : 'text-zinc-300'}`}
                    />
                  </div>

                  <h4 className='text-lg font-bold text-zinc-100 mb-3'>
                    {feature.title}
                  </h4>

                  <p className='text-zinc-300 text-sm leading-relaxed'>
                    {feature.description}
                  </p>

                  {feature.highlight && (
                    <div className='absolute top-4 right-4'>
                      <div className='w-2 h-2 bg-primary rounded-full animate-pulse'></div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Premium CTA */}
          <div className='text-center'>
            <Button
              size='lg'
              className='gradient-primary hover-primary text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-primary'
            >
              Join for free
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
          </div>
        </div>

        {/* Enhanced CTA Section - Claude Style */}
        <div className='relative'>
          {/* Background glow effect */}
          <div className='absolute inset-0 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-primary-600/10 rounded-3xl blur-xl'></div>

          <div className='relative text-center bg-gradient-to-r from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 text-primary-light text-sm font-medium mb-6'>
              <Zap className='w-4 h-4 mr-2' />
              Get Started Today
            </div>

            <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-100 mb-4 sm:mb-6'>
              Ready to accelerate your fundraising?
            </h3>
            <p className='text-zinc-300 mb-8 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed'>
              Join thousands of successful founders who have raised over $2.5B
              using our platform. Start your free trial today and connect with
              the right investors tomorrow.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button
                size='lg'
                className='gradient-primary hover-primary px-8 py-4 sm:py-6 text-base sm:text-lg text-white hover:scale-105 transition-all duration-300 shadow-primary w-full sm:w-auto'
              >
                Start Free Trial
                <ArrowRight className='ml-2 h-4 w-4 sm:h-5 sm:w-5' />
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 px-8 py-4 sm:py-6 text-base sm:text-lg transition-all duration-300 w-full sm:w-auto'
              >
                Schedule Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8 pt-6 border-t border-zinc-800/50'>
              <div className='flex items-center gap-2 text-zinc-400 text-sm'>
                <Shield className='w-4 h-4 text-success' />
                <span>SOC 2 Compliant</span>
              </div>
              <div className='flex items-center gap-2 text-zinc-400 text-sm'>
                <Users className='w-4 h-4 text-zinc-400' />
                <span>10,000+ Active Users</span>
              </div>
              <div className='flex items-center gap-2 text-zinc-400 text-sm'>
                <Star className='w-4 h-4 text-primary fill-current' />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
