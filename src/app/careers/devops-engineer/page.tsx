'use client'

import { animatePageOut } from '@/components/pageTransition/animations'
import { Button } from '@/components/ui/button'

import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle,
  Cloud,
  Globe,
  Heart,
  Users,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function DevOpsEngineerPage() {
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
                <Cloud className='w-4 h-4 text-[#a98b5d]' />
                DevOps Engineer (Azure)
                <span className='text-green-400'>• Open Position</span>
              </div>

              {/* Main Title */}
              <h1 className='text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-none'>
                <span className='bg-gradient-to-r from-white via-[#dcd7ce] to-white bg-clip-text text-transparent'>
                  Scale Our
                </span>
                <br />
                <span className='bg-gradient-to-r from-[#a98b5d] via-[#dcd7ce] to-[#a98b5d] bg-clip-text text-transparent glow-text'>
                  Cloud Infrastructure
                </span>
              </h1>

              <p className='text-xl md:text-2xl text-gray-300/90 max-w-4xl mx-auto mb-12 leading-relaxed'>
                Build and scale our Azure cloud infrastructure to support
                enterprise-grade DAO creation platform. Ensure high availability
                and security for institutional clients.
              </p>
            </div>

            {/* Job Description */}
            <div className='max-w-4xl mx-auto'>
              <div className='bg-gradient-to-br from-[#a98b5d]/5 to-transparent border border-[#a98b5d]/20 rounded-2xl p-8 backdrop-blur-sm'>
                <h2 className='text-3xl font-bold text-white mb-6'>
                  About the Role
                </h2>

                <div className='space-y-8 text-gray-300'>
                  <p className='text-lg leading-relaxed'>
                    We're looking for an experienced DevOps Engineer to build
                    and scale our cloud infrastructure. You'll be responsible
                    for ensuring high availability, security, and performance of
                    our platform that serves thousands of investors and
                    entrepreneurs globally.
                  </p>

                  <div className='grid md:grid-cols-2 gap-8'>
                    <div>
                      <h3 className='text-xl font-semibold text-white mb-4'>
                        Key Responsibilities
                      </h3>
                      <ul className='space-y-2'>
                        {[
                          'Design and maintain Azure cloud infrastructure',
                          'Implement CI/CD pipelines and automation tools',
                          'Monitor system performance and security',
                          'Manage containerized applications with Docker/Kubernetes',
                          'Ensure database reliability and backup strategies',
                          'Implement infrastructure as code with Terraform',
                          'Set up monitoring, logging, and alerting systems',
                          'Collaborate with development teams on deployment strategies',
                        ].map((item, index) => (
                          <li key={index} className='flex items-start gap-3'>
                            <CheckCircle className='w-5 h-5 text-[#a98b5d] mt-0.5 flex-shrink-0' />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className='text-xl font-semibold text-white mb-4'>
                        Requirements
                      </h3>
                      <ul className='space-y-2'>
                        {[
                          '3+ years of DevOps or infrastructure experience',
                          'Strong experience with Azure cloud services',
                          'Proficiency in Docker, Kubernetes, and containerization',
                          'Experience with CI/CD tools (Azure DevOps, Jenkins)',
                          'Knowledge of infrastructure as code (Terraform, ARM)',
                          'Experience with monitoring tools (Prometheus, Grafana)',
                          'Strong scripting skills (Bash, PowerShell, Python)',
                          'Understanding of security best practices and compliance',
                        ].map((item, index) => (
                          <li key={index} className='flex items-start gap-3'>
                            <CheckCircle className='w-5 h-5 text-[#a98b5d] mt-0.5 flex-shrink-0' />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className='text-xl font-semibold text-white mb-4'>
                      What We Offer
                    </h3>
                    <div className='grid md:grid-cols-3 gap-4'>
                      {[
                        {
                          icon: Globe,
                          title: 'Remote Work',
                          desc: 'Work from anywhere with flexible hours',
                        },
                        {
                          icon: Heart,
                          title: 'Health Benefits',
                          desc: 'Comprehensive health insurance coverage',
                        },
                        {
                          icon: Zap,
                          title: 'Growth Opportunity',
                          desc: 'Rapid career advancement in a scaling startup',
                        },
                        {
                          icon: Users,
                          title: 'Amazing Team',
                          desc: 'Work with passionate, talented professionals',
                        },
                        {
                          icon: Award,
                          title: 'Learning Budget',
                          desc: '$2,000 annual budget for courses and conferences',
                        },
                        {
                          icon: Cloud,
                          title: 'Latest Tech',
                          desc: 'Work with cutting-edge cloud technologies',
                        },
                      ].map((benefit, index) => (
                        <div key={index} className='text-center p-4'>
                          <benefit.icon className='w-8 h-8 text-[#a98b5d] mx-auto mb-2' />
                          <h4 className='font-semibold text-white mb-1'>
                            {benefit.title}
                          </h4>
                          <p className='text-sm text-gray-400'>
                            {benefit.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <div className='mt-12 text-center'>
                  <Link href='/careers/devops-engineer/apply'>
                    <Button className='px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl'>
                      Apply for This Position
                      <ArrowRight className='w-5 h-5 ml-2' />
                    </Button>
                  </Link>
                </div>
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
