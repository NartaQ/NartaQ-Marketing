'use client'


import {
  ArrowLeft,
  ArrowRight,
  Users,
  MessageSquare,
  Calendar,
  CheckCircle,
  Megaphone,
  Target,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '@/components/pageTransition/animations'

export default function CommunityManagerPage() {
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
        <div className='pt-6 sm:pt-8 px-4 sm:px-6'>
          <div className='max-w-6xl mx-auto'>
            <Link
              href='/careers'
              onClick={(e) => handleNavigation(e, '/careers')}
              className='inline-flex items-center gap-2 text-[#dcd7ce] hover:text-[#a98b5d] transition-colors group'
            >
              <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
              <span className='font-serif text-base sm:text-lg'>Back to Careers</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className='py-12 sm:py-16 md:py-20 px-4 sm:px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12 sm:mb-16'>
              {/* Position Badge */}
              <div className='inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 rounded-full text-xs sm:text-sm font-semibold text-[#dcd7ce] mb-6 sm:mb-8 backdrop-blur-xl'>
                <Users className='w-3 h-3 sm:w-4 sm:h-4 text-[#a98b5d]' />
                Community Manager
                <span className='text-green-400'>• Open Position</span>
              </div>

              {/* Main Title */}
              <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 tracking-tight leading-none'>
                <span className='bg-gradient-to-r from-white via-[#dcd7ce] to-white bg-clip-text text-transparent'>
                  Build Our
                </span>
                <br />
                <span className='bg-gradient-to-r from-[#a98b5d] via-[#dcd7ce] to-[#a98b5d] bg-clip-text text-transparent glow-text'>
                  Community Empire
                </span>
              </h1>

              <p className='text-lg sm:text-xl md:text-2xl text-gray-300/90 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4'>
                Lead the growth of our vibrant community of entrepreneurs,
                investors, and innovators. Shape conversations, drive
                engagement, and help build the future of investment technology.
              </p>
            </div>
          </div>
        </div>

        {/* Role Overview */}
        <div className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-black via-gray-900/30 to-black'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12 sm:mb-16'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6'>
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  Role Overview
                </span>
              </h2>
              <p className='text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
                As our Community Manager, you'll be the voice and face of
                NartaQ, building relationships with entrepreneurs, investors,
                and industry leaders across the France-Tunisia corridor and
                beyond.
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16'>
              {/* What You'll Do */}
              <div className='space-y-8'>
                <h3 className='text-2xl font-bold text-white mb-6'>
                  What You'll Do
                </h3>
                <div className='space-y-6'>
                  {[
                    {
                      icon: <MessageSquare className='w-6 h-6' />,
                      title: 'Community Engagement',
                      description:
                        'Manage our social media presence across LinkedIn, Twitter, Discord, and other platforms. Create compelling content that drives conversations and engagement.',
                    },
                    {
                      icon: <Calendar className='w-6 h-6' />,
                      title: 'Event Management',
                      description:
                        'Organize virtual and in-person events, webinars, and networking sessions that bring our community together and showcase our platform.',
                    },
                    {
                      icon: <Target className='w-6 h-6' />,
                      title: 'Strategic Partnerships',
                      description:
                        'Build relationships with startup accelerators, investment firms, and tech communities to expand our network and influence.',
                    },
                    {
                      icon: <Megaphone className='w-6 h-6' />,
                      title: 'Content Creation',
                      description:
                        'Develop thought leadership content, case studies, and success stories that position NartaQ as the leader in DAO investment infrastructure.',
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
                    '3+ years of community management experience',
                    'Experience in tech/startup communities preferred',
                    'Strong French and English language skills',
                    'Experience with social media platforms and analytics',
                    'Event planning and management experience',
                    'Understanding of Web3/blockchain ecosystem (bonus)',
                    'Creative content creation skills',
                    'Strong communication and interpersonal skills',
                    'Data-driven approach to community growth',
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
        <div className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-black via-gray-900/30 to-black'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='bg-gradient-to-br from-[#a98b5d]/5 to-transparent border border-[#a98b5d]/20 rounded-2xl p-6 sm:p-8 md:p-12 backdrop-blur-sm'>
              <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6'>
                Ready to Build Something Amazing?
              </h3>
              <p className='text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed'>
                Join us in revolutionizing how exceptional startups connect with
                elite investors. Your community-building expertise will help
                shape the future of investment technology.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center'>
                <Link
                  href='/careers/community-manager/apply'
                  onClick={(e) =>
                    handleNavigation(e, '/careers/community-manager/apply')
                  }
                  className='w-full sm:w-auto'
                >
                  <Button className='group w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold text-base sm:text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#a98b5d]/30'>
                    <Users className='w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-pulse' />
                    <span className='hidden sm:inline'>Apply for This Position</span>
                    <span className='sm:hidden'>Apply Now</span>
                    <ArrowRight className='w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform' />
                  </Button>
                </Link>

                <Link
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
          text-shadow: 0 0 20px rgba(169, 139, 93, 0.5),
            0 0 40px rgba(169, 139, 93, 0.3), 0 0 60px rgba(169, 139, 93, 0.1);
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
