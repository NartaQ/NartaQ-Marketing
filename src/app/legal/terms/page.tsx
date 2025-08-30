'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  FileText,
  Clock,
  Mail,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
} from 'lucide-react'

const LAST_UPDATED = '2025-08-24'

const tableOfContents = [
  { id: 'publisher', title: 'Who We Are', level: 1 },
  { id: 'acceptance', title: 'Acceptance of Terms', level: 1 },
  { id: 'eligibility', title: 'Eligibility & Access', level: 1 },
  { id: 'services', title: 'Our Services', level: 1 },
  { id: 'protocol-purpose', title: 'Protocol Purpose', level: 1 },
  { id: 'data-privacy', title: 'Data & Privacy', level: 1 },
  { id: 'ai-services', title: 'AI Services', level: 1 },
  { id: 'contact', title: 'Contact Information', level: 1 },
]

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map((item) =>
        document.getElementById(item.id)
      )
      const scrollY = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(tableOfContents[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='min-h-screen bg-black text-white'>
      <section className='relative pt-32 pb-16 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black' />
        <div className='absolute inset-0 opacity-10'>
          <div
            className='w-full h-full'
            style={{
              backgroundImage: `
              linear-gradient(90deg, rgba(169, 139, 93, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(169, 139, 93, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center'
          >
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-6'>
              <Shield className='w-4 h-4' />
              LEGAL FRAMEWORK
            </div>

            <h1 className='text-5xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tight'>
              <span className='bg-gradient-to-r from-[#dcd7ce] via-white to-[#dcd7ce] bg-clip-text text-transparent'>
                Terms of Service
              </span>
            </h1>

            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              Legal terms governing your use of the NartaQ AI-powered protocol
              for startup funding
            </p>

            <div className='flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400'>
              <div className='flex items-center gap-2'>
                <Clock className='w-4 h-4' />
                Last updated: {LAST_UPDATED}
              </div>
              <div className='flex items-center gap-2'>
                <FileText className='w-4 h-4' />
                Legal Framework
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle2 className='w-4 h-4 text-green-400' />
                GDPR Compliant
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
        <div className='flex flex-col lg:flex-row gap-12'>
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className='lg:w-80 lg:sticky lg:top-32 lg:self-start'
          >
            <div className='bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#a98b5d]/20 rounded-2xl p-6 backdrop-blur-sm'>
              <h3 className='text-lg font-semibold text-[#a98b5d] mb-4 flex items-center gap-2'>
                <FileText className='w-5 h-5' />
                Table of Contents
              </h3>

              <nav className='space-y-2'>
                {tableOfContents.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 ${activeSection === item.id
                      ? 'bg-[#a98b5d]/20 text-[#a98b5d] border-l-2 border-[#a98b5d]'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-[#a98b5d]/5'
                      } ${item.level > 1 ? 'ml-4' : ''}`}
                  >
                    <span className='flex items-center justify-between'>
                      {item.title}
                      <ChevronRight className='w-3 h-3 opacity-50' />
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className='mt-6 pt-6 border-t border-[#a98b5d]/20'>
                <Link
                  href='/legal/privacy'
                  className='flex items-center gap-2 text-sm text-[#a98b5d] hover:text-[#dcd7ce] transition-colors'
                >
                  <ExternalLink className='w-4 h-4' />
                  Privacy Policy
                </Link>
              </div>
            </div>
          </motion.aside>

          <motion.main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='flex-1 max-w-none'
          >
            <div className='bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-6 mb-12'>
              <div className='flex items-start gap-3'>
                <AlertTriangle className='w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0' />
                <div>
                  <h3 className='font-semibold text-amber-400 mb-2'>
                    Important Notice
                  </h3>
                  <p className='text-sm text-gray-300 leading-relaxed'>
                    NartaQ SA is an established AI-powered protocol for startup
                    funding. These terms provide our legal framework and will be
                    updated as needed to ensure compliance with applicable
                    regulations and to reflect service enhancements.
                  </p>
                </div>
              </div>
            </div>

            <div className='space-y-16'>
              <section id='publisher' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6 flex items-center gap-3'>
                  <div className='w-8 h-8 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-lg flex items-center justify-center text-black font-bold text-sm'>
                    1
                  </div>
                  Who We Are (Publisher)
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                  <p className='text-gray-300 leading-relaxed mb-4'>
                    NartaQ SA (doing business as NartaQ) operates as an
                    AI-powered protocol for startup funding, facilitating
                    automated matching between startups and investors through
                    advanced machine learning and smart contract technology.
                  </p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
                    <div className='space-y-2'>
                      <div>
                        <strong className='text-[#a98b5d]'>Entity:</strong>{' '}
                        NartaQ SA
                      </div>
                      <div>
                        <strong className='text-[#a98b5d]'>
                          Jurisdiction:
                        </strong>{' '}
                        France
                      </div>
                      <div>
                        <strong className='text-[#a98b5d]'>
                          Protocol Type:
                        </strong>{' '}
                        AI-Powered Venture Matching
                      </div>
                    </div>
                    <div className='space-y-2'>
                      <div>
                        <strong className='text-[#a98b5d]'>
                          Legal Contact:
                        </strong>{' '}
                        <Link
                          href='mailto:legal@nartaq.com'
                          className='text-[#dcd7ce] hover:underline'
                        >
                          legal@nartaq.com
                        </Link>
                      </div>
                      <div>
                        <strong className='text-[#a98b5d]'>
                          Privacy Contact:
                        </strong>{' '}
                        <Link
                          href='mailto:privacy@nartaq.com'
                          className='text-[#dcd7ce] hover:underline'
                        >
                          privacy@nartaq.com
                        </Link>
                      </div>
                      <div>
                        <strong className='text-[#a98b5d]'>
                          Data Protection:
                        </strong>{' '}
                        <Link
                          href='mailto:riadh@nartaq.com'
                          className='text-[#dcd7ce] hover:underline'
                        >
                          riadh@nartaq.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id='acceptance' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6 flex items-center gap-3'>
                  <div className='w-8 h-8 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-lg flex items-center justify-center text-black font-bold text-sm'>
                    2
                  </div>
                  Acceptance of Terms
                </h2>
                <p className='text-gray-300 leading-relaxed'>
                  By accessing, using, or participating in the NartaQ protocol,
                  you acknowledge that you have read, understood, and agree to
                  be bound by these Terms of Service. If you disagree with any
                  part of these terms, you must not use our protocol or
                  services.
                </p>
              </section>

              <section id='eligibility' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6 flex items-center gap-3'>
                  <div className='w-8 h-8 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-lg flex items-center justify-center text-black font-bold text-sm'>
                    3
                  </div>
                  Eligibility & Access Control
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                  <p className='text-gray-300 mb-4'>
                    Access to the NartaQ protocol is subject to verification and
                    eligibility requirements:
                  </p>
                  <ul className='space-y-2 text-gray-300'>
                    <li className='flex items-start gap-2'>
                      <CheckCircle2 className='w-5 h-5 text-green-400 mt-0.5 flex-shrink-0' />
                      KYC/AML compliance verification required
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle2 className='w-5 h-5 text-green-400 mt-0.5 flex-shrink-0' />
                      Accredited investor status verification (where applicable)
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle2 className='w-5 h-5 text-green-400 mt-0.5 flex-shrink-0' />
                      Professional credentials validation for service providers
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle2 className='w-5 h-5 text-green-400 mt-0.5 flex-shrink-0' />
                      Ongoing compliance monitoring and risk assessment
                    </li>
                  </ul>
                </div>
              </section>

              <section id='services' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6 flex items-center gap-3'>
                  <div className='w-8 h-8 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-lg flex items-center justify-center text-black font-bold text-sm'>
                    4
                  </div>
                  Our Services
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                  <p className='text-gray-300 leading-relaxed mb-4'>
                    NartaQ provides a protocol that uses AI for high-signal
                    matching and provides the legal tools for seamless
                    execution:
                  </p>
                  <div className='space-y-4'>
                    <div className='flex items-start gap-3'>
                      <CheckCircle2 className='w-5 h-5 text-green-400 mt-1 flex-shrink-0' />
                      <div>
                        <h4 className='font-semibold text-[#a98b5d] mb-1'>
                          Smarter Matching
                        </h4>
                        <p className='text-gray-300 text-sm'>
                          Our AI analyzes founder and investor DNA to facilitate
                          perfect, double-opt-in introductions.
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <CheckCircle2 className='w-5 h-5 text-green-400 mt-1 flex-shrink-0' />
                      <div>
                        <h4 className='font-semibold text-[#a98b5d] mb-1'>
                          Guided Execution
                        </h4>
                        <p className='text-gray-300 text-sm'>
                          We provide the automated legal framework and tools to
                          turn a handshake into a closed deal, without the "I
                          don't know what's next."
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <CheckCircle2 className='w-5 h-5 text-green-400 mt-1 flex-shrink-0' />
                      <div>
                        <h4 className='font-semibold text-[#a98b5d] mb-1'>
                          Website Access
                        </h4>
                        <p className='text-gray-300 text-sm'>
                          Visit our website at{' '}
                          <Link
                            href='http://www.nartaq.com'
                            className='text-[#dcd7ce] hover:underline'
                          >
                            www.nartaq.com
                          </Link>{' '}
                          or any website of ours that links to this notice.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id='protocol-purpose' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6 flex items-center gap-3'>
                  <div className='w-8 h-8 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-lg flex items-center justify-center text-black font-bold text-sm'>
                    5
                  </div>
                  Protocol Purpose & Investment Disclaimers
                </h2>
                <div className='bg-gradient-to-r from-red-500/5 to-red-600/5 border border-red-500/20 rounded-xl p-6 mb-6'>
                  <div className='flex items-start gap-3'>
                    <AlertTriangle className='w-5 h-5 text-red-400 mt-0.5 flex-shrink-0' />
                    <div>
                      <h4 className='font-semibold text-red-400 mb-2'>
                        No Investment Advice
                      </h4>
                      <p className='text-sm text-gray-300'>
                        NartaQ provides a technology platform and does not offer
                        investment, legal, tax, or financial advice. All
                        investment decisions are made solely by users based on
                        their own analysis and risk assessment.
                      </p>
                    </div>
                  </div>
                </div>
                <p className='text-gray-300 leading-relaxed'>
                  The protocol facilitates AI-powered matching between startups
                  and investors, automated deal execution, and community
                  governance. We operate as a technology utility, not as a
                  broker-dealer or investment advisor.
                </p>
              </section>

              <section id='data-privacy' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6 flex items-center gap-3'>
                  <div className='w-8 h-8 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-lg flex items-center justify-center text-black font-bold text-sm'>
                    6
                  </div>
                  Data Protection & Privacy
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6 mb-6'>
                  <p className='text-gray-300 leading-relaxed mb-4'>
                    Your privacy is fundamental to our operations. We are
                    committed to protecting your personal information in
                    accordance with applicable data protection laws, including
                    GDPR.
                  </p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-3'>
                      <h4 className='font-semibold text-[#a98b5d]'>
                        Information We Collect
                      </h4>
                      <ul className='space-y-1 text-sm text-gray-300'>
                        <li>• Email addresses and names</li>
                        <li>• Job titles and phone numbers</li>
                        <li>• Contact preferences</li>
                        <li>• Device and usage information</li>
                      </ul>
                    </div>
                    <div className='space-y-3'>
                      <h4 className='font-semibold text-[#a98b5d]'>
                        Your Rights
                      </h4>
                      <ul className='space-y-1 text-sm text-gray-300'>
                        <li>• Access and copy your data</li>
                        <li>• Request rectification or erasure</li>
                        <li>• Restrict processing</li>
                        <li>• Data portability</li>
                      </ul>
                    </div>
                  </div>
                  <div className='mt-4 p-3 bg-[#a98b5d]/10 border border-[#a98b5d]/20 rounded-lg'>
                    <p className='text-sm text-gray-300'>
                      <strong className='text-[#a98b5d]'>Important:</strong> We
                      do not process sensitive personal information and do not
                      collect information from minors under 18 years of age.
                    </p>
                  </div>
                </div>
                <div className='bg-gradient-to-r from-blue-500/5 to-blue-600/5 border border-blue-500/20 rounded-xl p-6'>
                  <h4 className='font-semibold text-blue-400 mb-2 flex items-center gap-2'>
                    <Shield className='w-4 h-4' />
                    Data Processing Contacts
                  </h4>
                  <div className='space-y-2 text-sm'>
                    <div>
                      <strong className='text-[#a98b5d]'>
                        Privacy Inquiries:
                      </strong>{' '}
                      <Link
                        href='mailto:privacy@nartaq.com'
                        className='text-[#dcd7ce] hover:underline'
                      >
                        privacy@nartaq.com
                      </Link>
                    </div>
                    <div>
                      <strong className='text-[#a98b5d]'>
                        Data Protection Officer:
                      </strong>{' '}
                      <Link
                        href='mailto:riadh@nartaq.com'
                        className='text-[#dcd7ce] hover:underline'
                      >
                        riadh@nartaq.com
                      </Link>
                    </div>
                    <div>
                      <strong className='text-[#a98b5d]'>Data Requests:</strong>{' '}
                      <Link
                        href='http://www.nartaq.com/data-request'
                        className='text-[#dcd7ce] hover:underline'
                      >
                        www.nartaq.com/data-request
                      </Link>
                    </div>
                    <div>
                      <strong className='text-[#a98b5d]'>Phone:</strong>{' '}
                      +33.784616068
                    </div>
                  </div>
                </div>
              </section>

              <section id='ai-services' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6 flex items-center gap-3'>
                  <div className='w-8 h-8 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-lg flex items-center justify-center text-black font-bold text-sm'>
                    7
                  </div>
                  AI Services & Technologies
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6 mb-6'>
                  <p className='text-gray-300 leading-relaxed mb-4'>
                    We offer products, features, and tools powered by artificial
                    intelligence, machine learning, and similar technologies
                    designed to enhance your experience with innovative
                    solutions.
                  </p>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='p-4 bg-[#a98b5d]/5 border border-[#a98b5d]/20 rounded-lg'>
                      <h4 className='font-semibold text-[#a98b5d] mb-2'>
                        AI Applications
                      </h4>
                      <p className='text-sm text-gray-300'>
                        Advanced matching algorithms for startup-investor
                        connections.
                      </p>
                    </div>
                    <div className='p-4 bg-[#a98b5d]/5 border border-[#a98b5d]/20 rounded-lg'>
                      <h4 className='font-semibold text-[#a98b5d] mb-2'>
                        AI Analytics
                      </h4>
                      <p className='text-sm text-gray-300'>
                        Predictive analytics for investment opportunities and
                        risk assessment.
                      </p>
                    </div>
                    <div className='p-4 bg-[#a98b5d]/5 border border-[#a98b5d]/20 rounded-lg'>
                      <h4 className='font-semibold text-[#a98b5d] mb-2'>
                        AI Automation
                      </h4>
                      <p className='text-sm text-gray-300'>
                        Automated legal framework execution and deal processing.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='bg-gradient-to-r from-purple-500/5 to-purple-600/5 border border-purple-500/20 rounded-xl p-6'>
                  <h4 className='font-semibold text-purple-400 mb-2'>
                    AI Service Providers
                  </h4>
                  <p className='text-sm text-gray-300 mb-3'>
                    We provide AI Products through third-party service
                    providers, including Microsoft Azure AI. Your input, output,
                    and personal information will be shared with and processed
                    by these providers to enable your use of our AI Products.
                  </p>
                  <p className='text-xs text-gray-400'>
                    All personal information processed using our AI Products is
                    handled in line with our Privacy Notice and agreements with
                    third parties, ensuring high security throughout the
                    process.
                  </p>
                </div>
              </section>

              <section id='contact' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6 flex items-center gap-3'>
                  <div className='w-8 h-8 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-lg flex items-center justify-center text-black font-bold text-sm'>
                    8
                  </div>
                  Contact Information
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/10 border border-[#a98b5d]/30 rounded-xl p-6'>
                    <div className='flex items-center gap-3 mb-4'>
                      <Mail className='w-5 h-5 text-[#a98b5d]' />
                      <h4 className='font-semibold text-[#dcd7ce]'>
                        Legal & General Inquiries
                      </h4>
                    </div>
                    <div className='space-y-2 text-sm'>
                      <div>
                        <strong className='text-[#a98b5d]'>Email:</strong>{' '}
                        <Link
                          href='mailto:legal@nartaq.com'
                          className='text-[#dcd7ce] hover:underline'
                        >
                          legal@nartaq.com
                        </Link>
                      </div>
                      <div>
                        <strong className='text-[#a98b5d]'>
                          Response Time:
                        </strong>{' '}
                        Within 72 hours for legal matters
                      </div>
                      <div>
                        <strong className='text-[#a98b5d]'>Languages:</strong>{' '}
                        English, French
                      </div>
                    </div>
                  </div>

                  <div className='bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl p-6'>
                    <div className='flex items-center gap-3 mb-4'>
                      <Shield className='w-5 h-5 text-blue-400' />
                      <h4 className='font-semibold text-blue-400'>
                        Data Protection Office
                      </h4>
                    </div>
                    <div className='space-y-2 text-sm'>
                      <div>
                        <strong className='text-blue-400'>
                          Data Protection Officer:
                        </strong>{' '}
                        Riadh Jouini
                      </div>
                      <div>
                        <strong className='text-blue-400'>Email:</strong>{' '}
                        <Link
                          href='mailto:riadh@nartaq.com'
                          className='text-[#dcd7ce] hover:underline'
                        >
                          riadh@nartaq.com
                        </Link>
                      </div>
                      <div>
                        <strong className='text-blue-400'>Phone:</strong>{' '}
                        +33.784616068
                      </div>
                      <div>
                        <strong className='text-blue-400'>
                          Privacy Requests:
                        </strong>{' '}
                        <Link
                          href='mailto:privacy@nartaq.com'
                          className='text-[#dcd7ce] hover:underline'
                        >
                          privacy@nartaq.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-6 bg-gradient-to-r from-gray-700/10 to-gray-600/10 border border-gray-600/20 rounded-xl p-6'>
                  <h4 className='font-semibold text-[#dcd7ce] mb-3'>
                    Postal Address
                  </h4>
                  <div className='text-sm text-gray-300'>
                    <p>
                      <strong>NartaQ SA</strong>
                    </p>
                    <p>14 Boulevard Victor Schoelcher</p>
                    <p>Lieusaint, Seine-et-Marne 77127</p>
                    <p>France</p>
                  </div>
                  <p className='text-xs text-gray-400 mt-3'>
                    For EEA residents: We have appointed Riadh Jouini as our
                    representative in the EEA for data protection matters.
                  </p>
                </div>
              </section>
            </div>

            <div className='mt-16 pt-8 border-t border-[#a98b5d]/20'>
              <div className='bg-gradient-to-r from-gray-800/20 to-gray-700/20 border border-gray-600/20 rounded-xl p-6'>
                <p className='text-sm text-gray-400 leading-relaxed mb-4'>
                  <strong className='text-gray-300'>Last Updated:</strong>{' '}
                  August 24, 2025. These Terms govern your use of the NartaQ
                  protocol. For detailed information about how we handle your
                  personal information, please review our comprehensive Privacy
                  Policy.
                </p>
                <div className='flex flex-wrap gap-4 text-xs text-gray-400'>
                  <Link
                    href='/legal/privacy'
                    className='text-[#a98b5d] hover:text-[#dcd7ce] transition-colors'
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href='/legal/cookies'
                    className='text-[#a98b5d] hover:text-[#dcd7ce] transition-colors'
                  >
                    Cookie Notice
                  </Link>
                  <Link
                    href='/legal/dmca'
                    className='text-[#a98b5d] hover:text-[#dcd7ce] transition-colors'
                  >
                    DMCA Policy
                  </Link>
                  <Link href="mailto:privacy@nartaq.com?subject=Data%20Request" className="text-[#a98b5d] hover:text-[#dcd7ce] transition-colors">
                    Data Request
                  </Link>
                  <span>© 2025 NartaQ SA. All rights reserved.</span>
                </div>
              </div>
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  )
}
