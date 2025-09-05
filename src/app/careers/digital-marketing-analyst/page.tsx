'use client'

import { animatePageOut } from '@/components/pageTransition/animations'
import { Button } from '@/components/ui/button'

import {
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle,
  Globe,
  Search,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function DigitalMarketingAnalystPage() {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    if (pathname === href) return
    animatePageOut(href, router)
  }

  return (
    <div className='min-h-screen bg-black text-white relative overflow-hidden'>
      {/* Main Content */}
      <div className='relative z-10'>
        {/* Navigation Header */}
        <div className='pt-8 px-4'>
          <div className='max-w-6xl mx-auto'>
            <Link
              title='Back to Careers'
              href='/careers'
              onClick={(e) => handleNavigation(e, '/careers')}
              className='inline-flex items-center gap-2 text-[#dcd7ce] hover:text-[#a98b5d] transition-colors group'
            >
              <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
              <span className='font-serif text-lg'>Back to Careers</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className='py-20 px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              {/* Position Badge */}
              <div className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 rounded-full text-sm font-semibold text-[#dcd7ce] mb-8 backdrop-blur-xl'>
                <TrendingUp className='w-4 h-4 text-[#a98b5d]' />
                Digital Marketing Analyst
                <span className='text-green-400'>• Open Position</span>
              </div>

              {/* Main Title */}
              <h1 className='text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-none'>
                <span className='bg-gradient-to-r from-white via-[#dcd7ce] to-white bg-clip-text text-transparent'>
                  Drive Growth Through
                </span>
                <br />
                <span className='bg-gradient-to-r from-[#a98b5d] via-[#dcd7ce] to-[#a98b5d] bg-clip-text text-transparent glow-text'>
                  Data-Driven Marketing
                </span>
              </h1>

              <p className='text-xl md:text-2xl text-gray-300/90 max-w-4xl mx-auto mb-12 leading-relaxed'>
                Lead our B2B marketing strategy to acquire elite investors and
                exceptional startups. Use analytics and insights to scale our
                reach in the France-Tunisia tech corridor and beyond.
              </p>
            </div>

            {/* Key Highlights */}
            <div className='grid md:grid-cols-3 gap-8 mb-20'>
              {[
                {
                  icon: <Globe className='w-6 h-6' />,
                  title: 'Global Remote',
                  description: 'Work from anywhere with flexible hours',
                },
                {
                  icon: <TrendingUp className='w-6 h-6' />,
                  title: 'High Growth',
                  description: 'Scale marketing during rapid expansion',
                },
                {
                  icon: <Award className='w-6 h-6' />,
                  title: 'Competitive Package',
                  description: 'Equity + salary + benefits',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className='text-center p-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/5 to-transparent border border-[#a98b5d]/20 backdrop-blur-sm'
                >
                  <div className='w-12 h-12 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 rounded-xl flex items-center justify-center text-[#a98b5d] mx-auto mb-4'>
                    {item.icon}
                  </div>
                  <h3 className='text-lg font-bold text-white mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-gray-300 text-sm'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Role Overview */}
        <div className='py-20 px-4 bg-gradient-to-r from-black via-gray-900/30 to-black'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  Role Overview
                </span>
              </h2>
              <p className='text-xl text-gray-300 max-w-4xl mx-auto'>
                As our Digital Marketing Analyst, you'll own our B2B marketing
                strategy, focusing on acquiring institutional investors and
                high-quality startups through data-driven campaigns and
                strategic positioning.
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-12 mb-16'>
              {/* What You'll Do */}
              <div className='space-y-8'>
                <h3 className='text-2xl font-bold text-white mb-6'>
                  What You'll Do
                </h3>
                <div className='space-y-6'>
                  {[
                    {
                      icon: <BarChart3 className='w-6 h-6' />,
                      title: 'Performance Analytics',
                      description:
                        'Track, analyze, and optimize marketing campaigns using advanced analytics tools. Create comprehensive reports and actionable insights for leadership.',
                    },
                    {
                      icon: <Target className='w-6 h-6' />,
                      title: 'B2B Campaign Strategy',
                      description:
                        'Design and execute targeted campaigns for institutional investors, family offices, and high-growth startups across multiple channels.',
                    },
                    {
                      icon: <Search className='w-6 h-6' />,
                      title: 'SEO & Content Marketing',
                      description:
                        'Drive organic growth through strategic SEO, thought leadership content, and positioning NartaQ as the leader in DAO investment infrastructure.',
                    },
                    {
                      icon: <Users className='w-6 h-6' />,
                      title: 'Lead Generation',
                      description:
                        'Build and optimize lead generation funnels, manage marketing qualified leads (MQLs), and work closely with sales to drive conversions.',
                    },
                  ].map((item, index) => (
                    <div key={index} className='flex gap-4'>
                      <div className='w-12 h-12 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 rounded-xl flex items-center justify-center text-[#a98b5d] flex-shrink-0'>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className='text-lg font-bold text-white mb-2'>
                          {item.title}
                        </h4>
                        <p className='text-gray-300 leading-relaxed'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We're Looking For */}
              <div className='space-y-8'>
                <h3 className='text-2xl font-bold text-white mb-6'>
                  What We're Looking For
                </h3>
                <div className='space-y-4'>
                  {[
                    '3+ years of B2B marketing experience',
                    'Strong analytical skills with data-driven approach',
                    'Experience with SaaS/tech product marketing',
                    'Proficiency in Google Analytics, HubSpot, or similar',
                    'SEO/SEM expertise and content marketing skills',
                    'Enterprise client acquisition experience preferred',
                    'Fintech or investment industry experience (bonus)',
                    'Marketing automation and lead nurturing experience',
                    'Strong communication and presentation skills',
                  ].map((requirement, index) => (
                    <div key={index} className='flex items-start gap-3'>
                      <CheckCircle className='w-5 h-5 text-[#a98b5d] mt-0.5 flex-shrink-0' />
                      <span className='text-gray-300'>{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='py-20 px-4 bg-gradient-to-r from-black via-gray-900/30 to-black'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='bg-gradient-to-br from-[#a98b5d]/5 to-transparent border border-[#a98b5d]/20 rounded-2xl p-12 backdrop-blur-sm'>
              <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                Ready to Drive Our Growth?
              </h3>
              <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
                Join us in scaling our B2B marketing efforts and help connect
                exceptional startups with elite investors through data-driven
                strategies and innovative campaigns.
              </p>

              <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
                <Link
                  title='Apply for This Position'
                  href='/careers/digital-marketing-analyst/apply'
                  onClick={(e) =>
                    handleNavigation(
                      e,
                      '/careers/digital-marketing-analyst/apply'
                    )
                  }
                >
                  <Button className='group px-12 py-5 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#a98b5d]/30'>
                    <TrendingUp className='w-6 h-6 mr-3 group-hover:animate-pulse' />
                    Apply for This Position
                    <ArrowRight className='w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform' />
                  </Button>
                </Link>

                <Link
                  title='Or Apply Generally'
                  href='/careers/apply'
                  onClick={(e) => handleNavigation(e, '/careers/apply')}
                  className='text-[#dcd7ce] hover:text-[#a98b5d] transition-colors text-lg font-semibold'
                >
                  Or Apply Generally
                </Link>
              </div>
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
