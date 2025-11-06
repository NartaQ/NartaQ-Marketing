import { getCareerPositions, getCareerPageSettings } from '@/app/actions/career-content'
import { NavigationLink, JobCard } from '@/components/careers/ClientComponents'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Award,
  Brain,
  CheckCircle,
  Clock,
  Globe,
  MapPin,
  Rocket,
  Shield,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
  LucideIcon,
} from 'lucide-react'

// Icon mapping helper
const iconMap: Record<string, LucideIcon> = {
  rocket: Rocket,
  brain: Brain,
  award: Award,
  'trending-up': TrendingUp,
  shield: Shield,
  globe: Globe,
  users: Users,
  target: Target,
  trophy: Trophy,
  zap: Zap,
  'check-circle': CheckCircle,
}

function getIcon(iconName: string) {
  const Icon = iconMap[iconName.toLowerCase()] || Rocket
  return <Icon className='w-8 h-8' />
}

export default async function CareersPage() {
  const [positions, settings] = await Promise.all([
    getCareerPositions(),
    getCareerPageSettings(),
  ])

  return (
    <div className='min-h-screen bg-black text-white relative overflow-hidden'>
      {/* Main Content */}
      <div className='relative z-10'>
        {/* Hero Section */}
        <div className='min-h-screen flex items-center justify-center'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 text-center'>
            {/* Premium Badge */}
            <div className='inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 rounded-full text-xs sm:text-sm font-semibold text-[#dcd7ce] mb-6 sm:mb-8 backdrop-blur-xl'>
              <Trophy className='w-3 h-3 sm:w-4 sm:h-4 text-[#a98b5d]' />
              <span className='hidden sm:inline'>{settings.heroBadgeText}</span>
              <span className='sm:hidden'>Pre-Seed Startup</span>
            </div>

            {/* Main Headline */}
            <h1 className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 tracking-tight leading-none'>
              <span className='bg-gradient-to-r from-white via-[#dcd7ce] to-white bg-clip-text text-transparent'>
                Join the Future of
              </span>
              <br />
              <span className='bg-gradient-to-r from-[#a98b5d] via-[#dcd7ce] to-[#a98b5d] bg-clip-text text-transparent glow-text'>
                Investment Technology
              </span>
            </h1>

            {/* Enhanced Subtitle */}
            <p className='text-lg sm:text-xl md:text-2xl text-gray-300/90 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4'>
              {settings.heroSubtitle}
            </p>

            {/* Main CTA */}
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16'>
              <NavigationLink
                title='Apply for a Position'
                href='/careers/apply'
                className='w-full sm:w-auto'
              >
                <Button className='group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold text-base sm:text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#a98b5d]/30'>
                  <span className='hidden sm:inline'>
                    Apply Now - Shape the Future
                  </span>
                  <span className='sm:hidden'>Apply Now</span>
                  <ArrowRight className='w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform' />
                </Button>
              </NavigationLink>
            </div>
          </div>
        </div>

        {/* Why NartaQ is a Dream Opportunity */}
        <div className='py-12 sm:py-16 md:py-20 px-4 sm:px-6'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12 sm:mb-16'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6'>
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  {settings.whyNartaqTitle}
                </span>
              </h2>
              <p className='text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
                {settings.whyNartaqSubtitle}
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16'>
              {settings.benefits.map((item, index) => (
                <div
                  key={index}
                  className='group p-8 rounded-2xl bg-gradient-to-br from-[#a98b5d]/5 to-transparent border border-[#a98b5d]/20 hover:border-[#a98b5d]/40 hover:bg-[#a98b5d]/10 transition-all duration-300 backdrop-blur-sm'
                >
                  <div className='flex items-start justify-between mb-6'>
                    <div className='w-16 h-16 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 rounded-2xl flex items-center justify-center text-[#a98b5d] group-hover:scale-110 transition-transform duration-300'>
                      {getIcon(item.icon)}
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
        <div className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-black via-gray-900/30 to-black'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12 sm:mb-16'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6'>
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  Open Positions
                </span>
              </h2>
              <p className='text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto'>
                Join our team and help build the future of blockchain-powered
                startup governance. Enjoy remote-first flexibility.
              </p>
            </div>

            {positions.length > 0 ? (
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16'>
                {positions.map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
              </div>
            ) : (
              <div className='text-center py-12'>
                <p className='text-gray-400 text-lg'>
                  No positions available at the moment. Check back soon or
                  submit a general application.
                </p>
              </div>
            )}

            {/* Final CTA Section */}
            <div className='text-center bg-gradient-to-br from-[#a98b5d]/5 to-transparent border border-[#a98b5d]/20 rounded-2xl p-6 sm:p-8 md:p-12 backdrop-blur-sm'>
              <h3 className='text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4'>
                {settings.ctaTitle}
              </h3>
              <p className='text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed'>
                {settings.ctaDescription}
              </p>
              <NavigationLink
                title='Apply for a Position'
                href='/careers/apply'
              >
                <Button className='group w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold text-base sm:text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#a98b5d]/30'>
                  <Zap className='w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-pulse' />
                  <span className='hidden sm:inline'>
                    {settings.ctaButtonText}
                  </span>
                  <span className='sm:hidden'>Apply Now</span>
                  <ArrowRight className='w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform' />
                </Button>
              </NavigationLink>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-sm text-gray-400'>
                <div className='flex items-center gap-2'>
                  <MapPin className='w-4 h-4' />
                  <span>Remote-First</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Clock className='w-4 h-4' />
                  <span>Flexible Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values & Culture */}
        <div className='py-12 sm:py-16 md:py-20 px-4 sm:px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12 sm:mb-16'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6'>
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  Our Culture & Values
                </span>
              </h2>
              <p className='text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto'>
                Built on excellence, driven by impact, united by our mission
                to revolutionize investment technology.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
              {settings.cultureValues.map((item, index) => (
                <div
                  key={index}
                  className='group p-8 rounded-2xl bg-gradient-to-br from-[#a98b5d]/5 to-transparent border border-[#a98b5d]/20 hover:border-[#a98b5d]/40 hover:bg-[#a98b5d]/10 transition-all duration-300 backdrop-blur-sm text-center'
                >
                  <div className='w-16 h-16 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 rounded-2xl flex items-center justify-center text-[#a98b5d] group-hover:scale-110 transition-transform duration-300 mx-auto mb-6'>
                    {getIcon(item.icon)}
                  </div>
                  <h3 className='text-xl font-bold text-white mb-4 group-hover:text-[#dcd7ce] transition-colors'>
                    {item.title}
                  </h3>
                  <p className='text-gray-300 mb-6 leading-relaxed'>
                    {item.description}
                  </p>
                  <div className='space-y-2'>
                    {item.principles.map((value, valueIndex) => (
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
    </div>
  )
}
