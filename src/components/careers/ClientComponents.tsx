'use client'

import { animatePageOut } from '@/components/pageTransition/animations'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

interface NavigationLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  title?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export function NavigationLink({ href, children, className, title, onClick }: NavigationLinkProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (pathname === href) return
    animatePageOut(href, router)
    onClick?.(e)
  }

  return (
    <Link href={href} onClick={handleClick} className={className} title={title}>
      {children}
    </Link>
  )
}

interface JobCardProps {
  job: {
    _id: string
    title: string
    slug: { current: string }
    description: string
    skills?: string[]
    requirements?: string[]
    department?: string
    location?: string
    employmentType?: string
  }
}

export function JobCard({ job }: JobCardProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    const href = `/careers/${job.slug.current}`
    if (pathname === href) return
    animatePageOut(href, router)
  }

  return (
    <div
      className='group p-8 rounded-2xl bg-gradient-to-br from-[#a98b5d]/5 to-transparent border border-[#a98b5d]/20 hover:border-[#a98b5d]/40 hover:bg-[#a98b5d]/10 transition-all duration-300 backdrop-blur-sm cursor-pointer relative overflow-hidden'
      onClick={handleClick}
    >
      {/* Hover overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-[#a98b5d]/5 to-[#dcd7ce]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      <div className='relative z-10'>
        <div className='mb-6'>
          <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4'>
            <div className='flex-1'>
              <h3 className='text-xl sm:text-2xl font-bold text-white group-hover:text-[#dcd7ce] transition-colors mb-2'>
                {job.title}
              </h3>
              <div className='flex flex-wrap gap-2 text-sm text-gray-400'>
                {job.department && (
                  <span className='capitalize'>{job.department}</span>
                )}
                {job.location && (
                  <>
                    <span>•</span>
                    <span>{job.location}</span>
                  </>
                )}
                {job.employmentType && (
                  <>
                    <span>•</span>
                    <span className='capitalize'>{job.employmentType}</span>
                  </>
                )}
              </div>
            </div>
            <div className='flex flex-wrap gap-2 items-center'>
              <Button
                size='sm'
                className='w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold text-xs rounded-lg hover:scale-105 transition-all duration-300 shadow-lg'
                onClick={(e) => {
                  e.stopPropagation()
                  const href = `/careers/${job.slug.current}`
                  if (pathname === href) return
                  animatePageOut(href, router)
                }}
              >
                View Details
                <ArrowRight className='w-3 h-3 ml-1' />
              </Button>
            </div>
          </div>
        </div>

        <p className='text-gray-300 mb-6 leading-relaxed'>{job.description}</p>

        {job.skills && job.skills.length > 0 && (
          <div className='mb-6'>
            <h4 className='text-white font-semibold mb-3'>Key Skills</h4>
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
        )}

        {job.requirements && job.requirements.length > 0 && (
          <div>
            <h4 className='text-white font-semibold mb-3'>Requirements</h4>
            <ul className='space-y-2'>
              {job.requirements.map((req, reqIndex) => (
                <li
                  key={reqIndex}
                  className='flex items-start gap-2 text-sm text-gray-300'
                >
                  <span className='text-[#a98b5d] mt-0.5'>✓</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
