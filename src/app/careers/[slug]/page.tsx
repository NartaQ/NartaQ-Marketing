import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getCareerPosition } from '@/app/actions/career-content'
import { NavigationLink } from '@/components/careers/ClientComponents'
import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle,
  Clock,
  DollarSign,
  MapPin,
  Rocket,
  Target,
  Users,
  Zap,
} from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const position = await getCareerPosition(params.slug)

  if (!position) {
    return {
      title: 'Position Not Found - NartaQ Careers',
    }
  }

  return {
    title: `${position.title} - NartaQ Careers`,
    description:
      position.metaDescription ||
      position.description ||
      `Join NartaQ as a ${position.title}. ${position.department} position in ${position.location}.`,
    openGraph: {
      title: `${position.title} - NartaQ Careers`,
      description:
        position.metaDescription ||
        position.description ||
        `Join NartaQ as a ${position.title}.`,
    },
  }
}

export default async function CareerPositionPage({
  params,
}: {
  params: { slug: string }
}) {
  const position = await getCareerPosition(params.slug)

  if (!position) {
    notFound()
  }

  return (
    <div className='min-h-screen bg-black text-white relative overflow-hidden'>
      <div className='relative z-10'>
        {/* Header */}
        <div className='py-12 sm:py-16 px-4 sm:px-6'>
          <div className='max-w-4xl mx-auto'>
            {/* Back Button */}
            <NavigationLink
              href='/careers'
              className='inline-flex items-center gap-2 text-gray-400 hover:text-[#dcd7ce] transition-colors mb-8'
            >
              <ArrowLeft className='w-4 h-4' />
              Back to Careers
            </NavigationLink>

            {/* Job Header */}
            <div className='mb-8'>
              <div className='flex flex-wrap items-center gap-3 mb-4'>
                {position.department && (
                  <span className='px-3 py-1 bg-[#a98b5d]/20 text-[#a98b5d] rounded-lg text-sm font-semibold border border-[#a98b5d]/30 capitalize'>
                    {position.department}
                  </span>
                )}
                {position.employmentType && (
                  <span className='px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm capitalize'>
                    {position.employmentType}
                  </span>
                )}
              </div>

              <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-[#a98b5d] via-[#dcd7ce] to-[#a98b5d] bg-clip-text text-transparent'>
                  {position.title}
                </span>
              </h1>

              <div className='flex flex-wrap gap-6 text-gray-300'>
                {position.location && (
                  <div className='flex items-center gap-2'>
                    <MapPin className='w-5 h-5 text-[#a98b5d]' />
                    <span>{position.location}</span>
                  </div>
                )}
                <div className='flex items-center gap-2'>
                  <Briefcase className='w-5 h-5 text-[#a98b5d]' />
                  <span className='capitalize'>{position.employmentType}</span>
                </div>
                {position.salaryRange && (
                  <div className='flex items-center gap-2'>
                    <DollarSign className='w-5 h-5 text-[#a98b5d]' />
                    <span>
                      {position.salaryRange.currency}{' '}
                      {position.salaryRange.min.toLocaleString()} -{' '}
                      {position.salaryRange.max.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className='mb-12'>
              <p className='text-lg sm:text-xl text-gray-300 leading-relaxed'>
                {position.description}
              </p>
            </div>

            {/* Apply CTA */}
            <div className='mb-12 p-6 sm:p-8 bg-gradient-to-br from-[#a98b5d]/5 to-transparent border border-[#a98b5d]/20 rounded-2xl backdrop-blur-sm'>
              <div className='flex flex-col sm:flex-row items-center justify-between gap-6'>
                <div>
                  <h3 className='text-xl font-bold text-white mb-2'>
                    Ready to Apply?
                  </h3>
                  <p className='text-gray-300'>
                    Join our team and help build the future of DAO-powered
                    investment infrastructure.
                  </p>
                </div>
                <NavigationLink href='/careers/apply'>
                  <Button className='group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold text-base rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#a98b5d]/30 whitespace-nowrap'>
                    <Rocket className='w-5 h-5 mr-2 group-hover:animate-pulse' />
                    Apply Now
                    <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform' />
                  </Button>
                </NavigationLink>
              </div>
            </div>

            {/* Responsibilities */}
            {position.responsibilities && position.responsibilities.length > 0 && (
              <div className='mb-12'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 rounded-xl flex items-center justify-center'>
                    <Target className='w-6 h-6 text-[#a98b5d]' />
                  </div>
                  <h2 className='text-2xl sm:text-3xl font-bold text-white'>
                    Key Responsibilities
                  </h2>
                </div>
                <ul className='space-y-4'>
                  {position.responsibilities.map((item, index) => (
                    <li
                      key={index}
                      className='flex items-start gap-3 text-gray-300 leading-relaxed'
                    >
                      <CheckCircle className='w-5 h-5 text-[#a98b5d] mt-1 flex-shrink-0' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {position.requirements && position.requirements.length > 0 && (
              <div className='mb-12'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 rounded-xl flex items-center justify-center'>
                    <Users className='w-6 h-6 text-[#a98b5d]' />
                  </div>
                  <h2 className='text-2xl sm:text-3xl font-bold text-white'>
                    Requirements
                  </h2>
                </div>
                <ul className='space-y-4'>
                  {position.requirements.map((item, index) => (
                    <li
                      key={index}
                      className='flex items-start gap-3 text-gray-300 leading-relaxed'
                    >
                      <CheckCircle className='w-5 h-5 text-[#a98b5d] mt-1 flex-shrink-0' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills */}
            {position.skills && position.skills.length > 0 && (
              <div className='mb-12'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 rounded-xl flex items-center justify-center'>
                    <Zap className='w-6 h-6 text-[#a98b5d]' />
                  </div>
                  <h2 className='text-2xl sm:text-3xl font-bold text-white'>
                    Key Skills
                  </h2>
                </div>
                <div className='flex flex-wrap gap-3'>
                  {position.skills.map((skill, index) => (
                    <span
                      key={index}
                      className='px-4 py-2 bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/10 text-[#dcd7ce] rounded-lg border border-[#a98b5d]/20 font-medium'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            {position.benefits && position.benefits.length > 0 && (
              <div className='mb-12'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 rounded-xl flex items-center justify-center'>
                    <Award className='w-6 h-6 text-[#a98b5d]' />
                  </div>
                  <h2 className='text-2xl sm:text-3xl font-bold text-white'>
                    Benefits & Perks
                  </h2>
                </div>
                <ul className='space-y-4'>
                  {position.benefits.map((item, index) => (
                    <li
                      key={index}
                      className='flex items-start gap-3 text-gray-300 leading-relaxed'
                    >
                      <CheckCircle className='w-5 h-5 text-[#a98b5d] mt-1 flex-shrink-0' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Final CTA */}
            <div className='p-6 sm:p-8 bg-gradient-to-br from-[#a98b5d]/10 to-transparent border border-[#a98b5d]/30 rounded-2xl backdrop-blur-sm text-center'>
              <h3 className='text-2xl sm:text-3xl font-bold text-white mb-4'>
                Interested in this position?
              </h3>
              <p className='text-lg text-gray-300 mb-6 max-w-2xl mx-auto'>
                Apply now and join our mission to revolutionize investment
                technology through DAO-powered infrastructure.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <NavigationLink href='/careers/apply'>
                  <Button className='group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold text-base rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#a98b5d]/30'>
                    <Rocket className='w-5 h-5 mr-2 group-hover:animate-pulse' />
                    Apply for this Position
                    <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform' />
                  </Button>
                </NavigationLink>
                <NavigationLink href='/careers'>
                  <Button
                    variant='outline'
                    className='w-full sm:w-auto px-8 py-4 border-[#a98b5d]/30 text-[#dcd7ce] hover:bg-[#a98b5d]/10 font-semibold text-base rounded-full transition-all duration-300'
                  >
                    View All Positions
                  </Button>
                </NavigationLink>
              </div>
              <div className='flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-400'>
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
      </div>
    </div>
  )
}
