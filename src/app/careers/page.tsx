'use client'

import { animatePageOut } from '@/components/pageTransition/animations'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  Brain,
  Building,
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  MapPin,
  Rocket,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function CareersPage() {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()

    // Don't animate if we're already on the page
    if (pathname === href) return

    // Trigger page transition animation
    animatePageOut(href, router)
  }
  return (
    <div className='min-h-screen bg-black text-white relative overflow-hidden'>
      {/* Enhanced Animated Grid Background */}
      <div className='absolute inset-0 grid-pattern opacity-20' />
      <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black' />

      {/* Premium Gradient Orbs */}
      <div className='absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#a98b5d]/30 to-[#dcd7ce]/30 rounded-full blur-3xl animate-pulse' />
      <div className='absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#dcd7ce]/20 to-[#a98b5d]/20 rounded-full blur-3xl animate-pulse delay-1000' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/10 rounded-full blur-2xl animate-pulse delay-500' />

      {/* Main Content */}
      <div className='relative z-10'>
        {/* Hero Section */}
        <div className='min-h-screen flex items-center justify-center'>
          <div className='max-w-6xl mx-auto px-4 text-center'>
            {/* Premium Badge */}
            <div className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/40 rounded-full text-sm font-semibold text-[#dcd7ce] mb-8 backdrop-blur-sm'>
              <Trophy className='w-4 h-4 text-[#a98b5d]' />
              Pre-Seed Startup • Series A Track
              <Sparkles className='w-4 h-4 text-[#a98b5d]' />
            </div>

            {/* Main Headline */}
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-none'>
              <span className='bg-gradient-to-r from-white via-[#dcd7ce] to-white bg-clip-text text-transparent'>
                Join the Future of
              </span>
              <br />
              <span className='bg-gradient-to-r from-[#a98b5d] via-[#dcd7ce] to-[#a98b5d] bg-clip-text text-transparent glow-text'>
                Investment Technology
              </span>
            </h1>

            {/* Enhanced Subtitle */}
            <p className='text-xl md:text-2xl text-gray-300/90 max-w-4xl mx-auto mb-8 leading-relaxed'>
              Build the AI-powered DAO creation platform revolutionizing how
              elite investors and exceptional startups collaborate in the
              France-Tunisia corridor.
            </p>

            {/* Company Highlights */}
            <div className='flex flex-wrap justify-center gap-8 mb-12'>
              {[
                {
                  icon: <Building className='w-5 h-5' />,
                  label: 'Pre-Seed Stage',
                  sublabel: 'High Growth Potential',
                },
                {
                  icon: <Users className='w-5 h-5' />,
                  label: 'Remote-First',
                  sublabel: 'Global Team',
                },
                {
                  icon: <Target className='w-5 h-5' />,
                  label: 'Mission-Driven',
                  sublabel: 'Impact-Focused',
                },
                {
                  icon: <DollarSign className='w-5 h-5' />,
                  label: 'Competitive Equity',
                  sublabel: 'Early Employee Benefits',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center gap-2 text-center'
                >
                  <div className='flex items-center gap-2 text-[#a98b5d]'>
                    {item.icon}
                    <span className='text-sm font-semibold text-white'>
                      {item.label}
                    </span>
                  </div>
                  <span className='text-xs text-gray-400'>{item.sublabel}</span>
                </div>
              ))}
            </div>

            {/* Main CTA */}
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-16'>
              <Link
                href='/careers/apply'
                onClick={(e) => handleNavigation(e, '/careers/apply')}
              >
                <Button className='group relative px-12 py-5 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#a98b5d]/30'>
                  <Rocket className='w-6 h-6 mr-3 group-hover:animate-pulse' />
                  Apply Now - Shape the Future
                  <ArrowRight className='w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform' />
                </Button>
              </Link>

              <div className='flex items-center gap-2 text-gray-400'>
                <CheckCircle className='w-4 h-4 text-green-400' />
                <span className='text-sm'>
                  Early-stage equity • Remote-first • Competitive packages
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Why NartaQ is a Dream Opportunity */}
        <div className='py-20 px-4'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  Why NartaQ is Your Dream Opportunity
                </span>
              </h2>
              <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
                Join a pre-seed startup building the infrastructure for the
                future of investment. We're creating the platform that enables
                DAO creation and governance for elite investors and exceptional
                startups.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
              {[
                {
                  icon: <Rocket className='w-8 h-8' />,
                  title: 'Early-Stage Impact',
                  description:
                    'Ground-floor opportunity to shape product direction and company culture. Your work directly influences our Series A trajectory.',
                  highlight: 'High Growth Potential',
                },
                {
                  icon: <Brain className='w-8 h-8' />,
                  title: 'Cutting-Edge Technology',
                  description:
                    'Work with AI, blockchain, DAO governance, and modern frameworks. Build the future of decentralized investment infrastructure.',
                  highlight: 'Innovation Leader',
                },
                {
                  icon: <Award className='w-8 h-8' />,
                  title: 'Elite Network Access',
                  description:
                    'Direct exposure to top-tier investors, successful entrepreneurs, and France-Tunisia tech ecosystem leaders.',
                  highlight: 'Premium Connections',
                },
                {
                  icon: <TrendingUp className='w-8 h-8' />,
                  title: 'Exceptional Growth',
                  description:
                    'Fast-track your career in a rapidly scaling startup. Learn from experienced founders and industry experts.',
                  highlight: 'Career Acceleration',
                },
                {
                  icon: <Shield className='w-8 h-8' />,
                  title: 'Mission-Driven Work',
                  description:
                    'Bridge exceptional Tunisian talent with global capital. Create lasting impact on entrepreneurship and innovation.',
                  highlight: 'Meaningful Purpose',
                },
                {
                  icon: <Globe className='w-8 h-8' />,
                  title: 'Global Remote Culture',
                  description:
                    'Work from anywhere with a diverse, international team. Flexible hours and focus on results, not location.',
                  highlight: 'Work-Life Balance',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className='group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-[#a98b5d]/40 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm'
                >
                  <div className='flex items-start justify-between mb-6'>
                    <div className='w-16 h-16 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 rounded-2xl flex items-center justify-center text-[#a98b5d] group-hover:scale-110 transition-transform duration-300'>
                      {item.icon}
                    </div>
                    <span className='text-xs text-[#a98b5d] font-bold px-3 py-1 bg-[#a98b5d]/10 rounded-full border border-[#a98b5d]/20'>
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className='text-xl font-bold text-white mb-3 group-hover:text-[#dcd7ce] transition-colors'>
                    {item.title}
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Current Openings */}
        <div className='py-20 px-4 bg-gradient-to-r from-black via-gray-900/30 to-black'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  Open Positions
                </span>
              </h2>
              <p className='text-xl text-gray-300 max-w-4xl mx-auto'>
                Join our team and help build the future of DAO-powered
                investment infrastructure. All positions offer competitive
                equity packages and remote-first flexibility.
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-8 mb-16'>
              {[
                {
                  title: 'Community Manager',
                  slug: 'community-manager',
                  description:
                    'Build and nurture our community of entrepreneurs, investors, and DAO creators. Drive engagement through content, events, and strategic partnerships.',
                  skills: [
                    'Community Building',
                    'Content Creation',
                    'Social Media',
                    'Event Management',
                    'Partnership Development',
                    'Analytics',
                  ],
                  requirements: [
                    'Community management experience',
                    'Tech/startup community experience',
                    'French-English bilingual preferred',
                    'Web3/blockchain community experience is a plus',
                  ],
                },
                {
                  title: 'Digital Marketing Analyst',
                  slug: 'digital-marketing-analyst',
                  description:
                    'Drive growth through data-driven marketing strategies. Focus on B2B enterprise clients and institutional investor acquisition.',
                  skills: [
                    'B2B Marketing',
                    'Google Analytics',
                    'SEO/SEM',
                    'Marketing Automation',
                    'Content Strategy',
                    'Lead Generation',
                  ],
                  requirements: [
                    'B2B marketing experience',
                    'SaaS/tech marketing experience',
                    'Data-driven approach',
                    'Enterprise client acquisition experience',
                  ],
                },
                {
                  title: 'DevOps Engineer (Azure)',
                  slug: 'devops-engineer',
                  description:
                    'Scale our cloud infrastructure on Azure, implement CI/CD pipelines, and ensure high availability for our enterprise DAO creation platform.',
                  skills: [
                    'Azure Cloud',
                    'Kubernetes',
                    'Docker',
                    'Terraform',
                    'CI/CD',
                    'Security',
                  ],
                  requirements: [
                    'DevOps experience',
                    'Azure certification preferred',
                    'Enterprise security experience',
                    'Startup scaling experience',
                  ],
                },
                {
                  title: 'UI/UX Designer',
                  slug: 'ui-ux-designer',
                  description:
                    'Design intuitive interfaces for complex DAO governance tools. Create user experiences that make decentralized investment accessible to institutional clients.',
                  skills: [
                    'Figma',
                    'User Research',
                    'Design Systems',
                    'Prototyping',
                    'B2B SaaS',
                    'Enterprise UX',
                  ],
                  requirements: [
                    'B2B product design experience',
                    'Enterprise software experience',
                    'Financial/investment platform experience preferred',
                    'Portfolio with complex interfaces',
                  ],
                },
                {
                  title: 'Backend Developer (NestJS)',
                  slug: 'backend-developer',
                  description:
                    'Build scalable APIs and services using NestJS and PostgreSQL. Work on AI-powered matching algorithms and data processing.',
                  skills: [
                    'NestJS',
                    'PostgreSQL',
                    'TypeScript',
                    'Microservices',
                    'AI/ML',
                    'API Development',
                  ],
                  requirements: [
                    'Backend development experience',
                    'NestJS or similar framework experience',
                    'PostgreSQL database experience',
                    'RESTful API development',
                  ],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className='group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-[#a98b5d]/40 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm cursor-pointer relative overflow-hidden'
                  onClick={() => {
                    const href = `/careers/${job.slug}`
                    if (pathname === href) return
                    animatePageOut(href, router)
                  }}
                >
                  {/* Hover overlay */}
                  <div className='absolute inset-0 bg-gradient-to-r from-[#a98b5d]/5 to-[#dcd7ce]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                  <div className='relative z-10'>
                    <div className='flex justify-between items-start mb-6'>
                      <div className='flex-1'>
                        <h3 className='text-2xl font-bold text-white group-hover:text-[#dcd7ce] transition-colors mb-2'>
                          {job.title}
                        </h3>
                      </div>
                      <div className='flex gap-2 items-center'>
                        <Button
                          size='sm'
                          className='ml-2 px-4 py-2 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold text-xs rounded-lg hover:scale-105 transition-all duration-300 shadow-lg'
                          onClick={(e) => {
                            e.stopPropagation()
                            const href = `/careers/${job.slug}`
                            if (pathname === href) return
                            animatePageOut(href, router)
                          }}
                        >
                          View Details
                          <ArrowRight className='w-3 h-3 ml-1' />
                        </Button>
                      </div>
                    </div>

                    <p className='text-gray-300 mb-6 leading-relaxed'>
                      {job.description}
                    </p>

                    <div className='mb-6'>
                      <h4 className='text-white font-semibold mb-3'>
                        Key Skills
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {job.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className='text-xs px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg border border-gray-600/30'
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className='text-white font-semibold mb-3'>
                        Requirements
                      </h4>
                      <ul className='space-y-2'>
                        {job.requirements.map((req, reqIndex) => (
                          <li
                            key={reqIndex}
                            className='flex items-start gap-2 text-sm text-gray-300'
                          >
                            <CheckCircle className='w-4 h-4 text-[#a98b5d] mt-0.5 flex-shrink-0' />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Final CTA Section */}
            <div className='text-center bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-3xl p-12 backdrop-blur-sm'>
              <h3 className='text-3xl font-bold text-white mb-4'>
                Ready to Shape the Future?
              </h3>
              <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
                Don't see the perfect role? We're always looking for exceptional
                talent. Send us your application and let's explore how you can
                contribute to our mission.
              </p>
              <Link
                href='/careers/apply'
                onClick={(e) => handleNavigation(e, '/careers/apply')}
              >
                <Button className='group px-12 py-5 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#a98b5d]/30'>
                  <Zap className='w-6 h-6 mr-3 group-hover:animate-pulse' />
                  Apply Now - Join NartaQ
                  <ArrowRight className='w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform' />
                </Button>
              </Link>
              <div className='flex items-center justify-center gap-6 mt-8 text-sm text-gray-400'>
                <div className='flex items-center gap-2'>
                  <MapPin className='w-4 h-4' />
                  <span>Remote-First</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Clock className='w-4 h-4' />
                  <span>Flexible Hours</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Award className='w-4 h-4' />
                  <span>Competitive Equity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values & Culture */}
        <div className='py-20 px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  Our Culture & Values
                </span>
              </h2>
              <p className='text-xl text-gray-300 max-w-4xl mx-auto'>
                Built on excellence, driven by impact, united by our mission to
                revolutionize investment technology.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              {[
                {
                  icon: <Brain className='w-8 h-8' />,
                  title: 'Innovation First',
                  description:
                    'We push boundaries with cutting-edge technology and creative solutions. Every challenge is an opportunity to innovate.',
                  values: [
                    'Continuous Learning',
                    'Technical Excellence',
                    'Creative Problem Solving',
                  ],
                },
                {
                  icon: <Users className='w-8 h-8' />,
                  title: 'Collaborative Excellence',
                  description:
                    'We win together through diverse perspectives, open communication, and shared ownership of our mission.',
                  values: ['Team First', 'Global Mindset', 'Knowledge Sharing'],
                },
                {
                  icon: <Target className='w-8 h-8' />,
                  title: 'Impact Driven',
                  description:
                    'Everything we build serves our mission to bridge exceptional talent with global capital and create lasting value.',
                  values: [
                    'Mission Focus',
                    'Quality Delivery',
                    'Long-term Thinking',
                  ],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className='group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-[#a98b5d]/40 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm text-center'
                >
                  <div className='w-16 h-16 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 rounded-2xl flex items-center justify-center text-[#a98b5d] group-hover:scale-110 transition-transform duration-300 mx-auto mb-6'>
                    {item.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white mb-4 group-hover:text-[#dcd7ce] transition-colors'>
                    {item.title}
                  </h3>
                  <p className='text-gray-300 mb-6 leading-relaxed'>
                    {item.description}
                  </p>
                  <div className='space-y-2'>
                    {item.values.map((value, valueIndex) => (
                      <div
                        key={valueIndex}
                        className='flex items-center justify-center gap-2 text-sm text-gray-400'
                      >
                        <CheckCircle className='w-4 h-4 text-[#a98b5d]' />
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Grid Pattern Styles */}
      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(
            rgba(169, 139, 93, 0.1) 1px,
            transparent 1px
          );
          background-size: 40px 40px;
          animation: float 20s ease-in-out infinite;
        }
        .glow-text {
          text-shadow:
            0 0 20px rgba(169, 139, 93, 0.5),
            0 0 40px rgba(169, 139, 93, 0.3),
            0 0 60px rgba(169, 139, 93, 0.1);
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }
      `}</style>
    </div>
  )
}
