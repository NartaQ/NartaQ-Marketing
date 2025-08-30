'use client'

import { motion } from 'framer-motion'
import {
  ChevronRight,
  Clock,
  ExternalLink,
  FileText,
  Shield,
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const LAST_UPDATED = '2025-08-24'

const tableOfContents = [
  { id: 'intro', title: 'Introduction', level: 1 },
  { id: 'summary', title: 'Summary of Key Points', level: 1 },
  { id: 'table-contents', title: 'Table of Contents', level: 1 },
  {
    id: 'information-collect',
    title: '1. What Information Do We Collect?',
    level: 1,
  },
  {
    id: 'process-information',
    title: '2. How Do We Process Your Information?',
    level: 1,
  },
  { id: 'legal-bases', title: '3. What Legal Bases Do We Rely On?', level: 1 },
  {
    id: 'share-information',
    title: '4. When and With Whom Do We Share Information?',
    level: 1,
  },
  {
    id: 'cookies-tracking',
    title: '5. Do We Use Cookies and Other Tracking Technologies?',
    level: 1,
  },
  {
    id: 'ai-products',
    title: '6. Do We Offer Artificial Intelligence-Based Products?',
    level: 1,
  },
  {
    id: 'retention',
    title: '7. How Long Do We Keep Your Information?',
    level: 1,
  },
  {
    id: 'information-safe',
    title: '8. How Do We Keep Your Information Safe?',
    level: 1,
  },
  {
    id: 'minors',
    title: '9. Do We Collect Information From Minors?',
    level: 1,
  },
  {
    id: 'privacy-rights',
    title: '10. What Are Your Privacy Rights?',
    level: 1,
  },
  {
    id: 'do-not-track',
    title: '11. Controls For Do-Not-Track Features',
    level: 1,
  },
  { id: 'updates', title: '12. Do We Make Updates to This Notice?', level: 1 },
  {
    id: 'contact',
    title: '13. How Can You Contact Us About This Notice?',
    level: 1,
  },
  {
    id: 'review-data',
    title: '14. How Can You Review, Update, or Delete Data?',
    level: 1,
  },
]

export default function PrivacyPolicyPage() {
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
              PRIVACY POLICY
            </div>

            <h1 className='text-5xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tight'>
              <span className='bg-gradient-to-r from-[#dcd7ce] via-white to-[#dcd7ce] bg-clip-text text-transparent'>
                Privacy Policy
              </span>
            </h1>

            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              How we collect, use, and protect your personal information
            </p>

            <div className='flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400'>
              <div className='flex items-center gap-2'>
                <Clock className='w-4 h-4' />
                Last updated: {LAST_UPDATED}
              </div>
              <div className='flex items-center gap-2'>
                <FileText className='w-4 h-4' />
                Privacy Framework
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
                Quick Navigation
              </h3>

              <nav className='space-y-2 max-h-96 overflow-y-auto'>
                {tableOfContents.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.02 }}
                    className={`block py-1.5 px-3 rounded-lg text-xs transition-all duration-200 ${activeSection === item.id
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
                  href='/legal/terms'
                  className='flex items-center gap-2 text-sm text-[#a98b5d] hover:text-[#dcd7ce] transition-colors'
                >
                  <ExternalLink className='w-4 h-4' />
                  Terms of Service
                </Link>
              </div>
            </div>
          </motion.aside>

          <motion.main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='flex-1 max-w-none prose prose-invert prose-lg'
          >
            <div className='space-y-16'>
              <section id='intro' className='scroll-mt-32'>
                <div className='bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl p-6 mb-8'>
                  <h2 className='text-2xl font-bold text-[#dcd7ce] mb-4'>
                    Privacy Notice for NartaQ SA
                  </h2>
                  <p className='text-gray-300 leading-relaxed mb-4'>
                    This Privacy Notice for NartaQ SA (doing business as NartaQ)
                    ("we," "us," or "our"), describes how and why we might
                    access, collect, store, use, and/or share ("process") your
                    personal information when you use our services ("Services"),
                    including when you:
                  </p>
                  <ul className='space-y-2 text-gray-300 mb-4'>
                    <li>
                      • Visit our website at http://www.nartaq.com or any
                      website of ours that links to this Privacy Notice
                    </li>
                    <li>
                      • Use NartaQ. NartaQ is a protocol that uses AI for
                      high-signal matching and provides the legal tools for
                      seamless execution. Smarter Matching: Our AI analyzes
                      founder and investor DNA to facilitate perfect,
                      double-opt-in introductions. Guided Execution: We provide
                      the automated legal framework and tools to turn a
                      handshake into a closed deal, without the "I don't know
                      what's next."
                    </li>
                    <li>
                      • Engage with us in other related ways, including any
                      sales, marketing, or events
                    </li>
                  </ul>
                  <p className='text-sm text-gray-400'>
                    Questions or concerns? Reading this Privacy Notice will help
                    you understand your privacy rights and choices. We are
                    responsible for making decisions about how your personal
                    information is processed. If you do not agree with our
                    policies and practices, please do not use our Services. If
                    you still have any questions or concerns, please contact us
                    at{' '}
                    <Link
                      href='mailto:privacy@nartaq.com'
                      className='text-[#a98b5d] hover:underline'
                    >
                      privacy@nartaq.com
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <section id='summary' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                  Summary of Key Points
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6 space-y-4'>
                  <p className='text-gray-300'>
                    This summary provides key points from our Privacy Notice,
                    but you can find out more details about any of these topics
                    by clicking the link following each key point or by using
                    our table of contents below to find the section you are
                    looking for.
                  </p>

                  <div className='space-y-3 text-sm text-gray-300'>
                    <p>
                      <strong className='text-[#a98b5d]'>
                        What personal information do we process?
                      </strong>{' '}
                      When you visit, use, or navigate our Services, we may
                      process personal information depending on how you interact
                      with us and the Services, the choices you make, and the
                      products and features you use. Learn more about personal
                      information you disclose to us.
                    </p>

                    <p>
                      <strong className='text-[#a98b5d]'>
                        Do we process any sensitive personal information?
                      </strong>{' '}
                      Some of the information may be considered "special" or
                      "sensitive" in certain jurisdictions, for example your
                      racial or ethnic origins, sexual orientation, and
                      religious beliefs. We do not process sensitive personal
                      information.
                    </p>

                    <p>
                      <strong className='text-[#a98b5d]'>
                        Do we collect any information from third parties?
                      </strong>{' '}
                      We do not collect any information from third parties.
                    </p>

                    <p>
                      <strong className='text-[#a98b5d]'>
                        How do we process your information?
                      </strong>{' '}
                      We process your information to provide, improve, and
                      administer our Services, communicate with you, for
                      security and fraud prevention, and to comply with law. We
                      may also process your information for other purposes with
                      your consent. We process your information only when we
                      have a valid legal reason to do so. Learn more about how
                      we process your information.
                    </p>

                    <p>
                      <strong className='text-[#a98b5d]'>
                        In what situations and with which types of parties do we
                        share personal information?
                      </strong>{' '}
                      We may share information in specific situations and with
                      specific categories of third parties. Learn more about
                      when and with whom we share your personal information.
                    </p>

                    <p>
                      <strong className='text-[#a98b5d]'>
                        How do we keep your information safe?
                      </strong>{' '}
                      We have adequate organizational and technical processes
                      and procedures in place to protect your personal
                      information. However, no electronic transmission over the
                      internet or information storage technology can be
                      guaranteed to be 100% secure, so we cannot promise or
                      guarantee that hackers, cybercriminals, or other
                      unauthorized third parties will not be able to defeat our
                      security and improperly collect, access, steal, or modify
                      your information. Learn more about how we keep your
                      information safe.
                    </p>

                    <p>
                      <strong className='text-[#a98b5d]'>
                        What are your rights?
                      </strong>{' '}
                      Depending on where you are located geographically, the
                      applicable privacy law may mean you have certain rights
                      regarding your personal information. Learn more about your
                      privacy rights.
                    </p>

                    <p>
                      <strong className='text-[#a98b5d]'>
                        How do you exercise your rights?
                      </strong>{' '}
                      The easiest way to exercise your rights is by visiting{' '}
                      <Link
                        href='http://www.nartaq.com/data-request'
                        className='text-[#dcd7ce] hover:underline'
                      >
                        http://www.nartaq.com/data-request
                      </Link>
                      , or by contacting us. We will consider and act upon any
                      request in accordance with applicable data protection
                      laws.
                    </p>

                    <p>
                      <strong className='text-[#a98b5d]'>
                        Want to learn more about what we do with any information
                        we collect?
                      </strong>{' '}
                      Review the Privacy Notice in full.
                    </p>
                  </div>
                </div>
              </section>

              <section id='table-contents' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                  Table of Contents
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                  <ol className='space-y-1 text-sm text-gray-300'>
                    <li>1. WHAT INFORMATION DO WE COLLECT?</li>
                    <li>2. HOW DO WE PROCESS YOUR INFORMATION?</li>
                    <li>
                      3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                      INFORMATION?
                    </li>
                    <li>
                      4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
                      INFORMATION?
                    </li>
                    <li>
                      5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                    </li>
                    <li>
                      6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
                    </li>
                    <li>7. HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                    <li>8. HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
                    <li>9. DO WE COLLECT INFORMATION FROM MINORS?</li>
                    <li>10. WHAT ARE YOUR PRIVACY RIGHTS?</li>
                    <li>11. CONTROLS FOR DO-NOT-TRACK FEATURES</li>
                    <li>12. DO WE MAKE UPDATES TO THIS NOTICE?</li>
                    <li>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
                    <li>
                      14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                      COLLECT FROM YOU?
                    </li>
                  </ol>
                </div>
              </section>

              <section id='information-collect' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                  1. What Information Do We Collect?
                </h2>

                <div className='space-y-6'>
                  <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                    <h3 className='text-xl font-semibold text-[#a98b5d] mb-4'>
                      Personal information you disclose to us
                    </h3>
                    <p className='text-sm text-gray-400 mb-4'>
                      <em>In Short:</em> We collect personal information that
                      you provide to us.
                    </p>

                    <p className='text-gray-300 mb-4'>
                      We collect personal information that you voluntarily
                      provide to us when you express an interest in obtaining
                      information about us or our products and Services, when
                      you participate in activities on the Services, or
                      otherwise when you contact us.
                    </p>

                    <div className='mb-4'>
                      <h4 className='font-semibold text-[#a98b5d] mb-2'>
                        Personal Information Provided by You.
                      </h4>
                      <p className='text-gray-300 mb-2'>
                        The personal information that we collect depends on the
                        context of your interactions with us and the Services,
                        the choices you make, and the products and features you
                        use. The personal information we collect may include the
                        following:
                      </p>
                      <ul className='list-disc list-inside text-gray-300 space-y-1 ml-4'>
                        <li>email addresses</li>
                        <li>names</li>
                        <li>job titles</li>
                        <li>phone numbers</li>
                        <li>contact preferences</li>
                      </ul>
                    </div>

                    <div className='mb-4'>
                      <h4 className='font-semibold text-[#a98b5d] mb-2'>
                        Sensitive Information.
                      </h4>
                      <p className='text-gray-300'>
                        We do not process sensitive information.
                      </p>
                    </div>

                    <p className='text-gray-300'>
                      All personal information that you provide to us must be
                      true, complete, and accurate, and you must notify us of
                      any changes to such personal information.
                    </p>
                  </div>

                  <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                    <h3 className='text-xl font-semibold text-[#a98b5d] mb-4'>
                      Information automatically collected
                    </h3>
                    <p className='text-sm text-gray-400 mb-4'>
                      <em>In Short:</em> Some information — such as your
                      Internet Protocol (IP) address and/or browser and device
                      characteristics — is collected automatically when you
                      visit our Services.
                    </p>

                    <p className='text-gray-300 mb-4'>
                      We automatically collect certain information when you
                      visit, use, or navigate the Services. This information
                      does not reveal your specific identity (like your name or
                      contact information) but may include device and usage
                      information, such as your IP address, browser and device
                      characteristics, operating system, language preferences,
                      referring URLs, device name, country, location,
                      information about how and when you use our Services, and
                      other technical information. This information is primarily
                      needed to maintain the security and operation of our
                      Services, and for our internal analytics and reporting
                      purposes.
                    </p>

                    <p className='text-gray-300 mb-4'>
                      Like many businesses, we also collect information through
                      cookies and similar technologies. You can find out more
                      about this in our Cookie Notice:{' '}
                      <Link
                        href='http://www.nartaq.com/legal/cookies'
                        className='text-[#a98b5d] hover:underline'
                      >
                        http://www.nartaq.com/legal/cookies
                      </Link>
                      .
                    </p>

                    <div className='space-y-4'>
                      <div>
                        <h4 className='font-semibold text-[#a98b5d] mb-2'>
                          Log and Usage Data.
                        </h4>
                        <p className='text-gray-300 text-sm'>
                          Log and usage data is service-related, diagnostic,
                          usage, and performance information our servers
                          automatically collect when you access or use our
                          Services and which we record in log files. Depending
                          on how you interact with us, this log data may include
                          your IP address, device information, browser type, and
                          settings and information about your activity in the
                          Services (such as the date/time stamps associated with
                          your usage, pages and files viewed, searches, and
                          other actions you take such as which features you
                          use), device event information (such as system
                          activity, error reports (sometimes called "crash
                          dumps"), and hardware settings).
                        </p>
                      </div>

                      <div>
                        <h4 className='font-semibold text-[#a98b5d] mb-2'>
                          Device Data.
                        </h4>
                        <p className='text-gray-300 text-sm'>
                          We collect device data such as information about your
                          computer, phone, tablet, or other device you use to
                          access the Services. Depending on the device used,
                          this device data may include information such as your
                          IP address (or proxy server), device and application
                          identification numbers, location, browser type,
                          hardware model, Internet service provider and/or
                          mobile carrier, operating system, and system
                          configuration information.
                        </p>
                      </div>

                      <div>
                        <h4 className='font-semibold text-[#a98b5d] mb-2'>
                          Location Data.
                        </h4>
                        <p className='text-gray-300 text-sm'>
                          We collect location data such as information about
                          your device's location, which can be either precise or
                          imprecise. How much information we collect depends on
                          the type and settings of the device you use to access
                          the Services. For example, we may use GPS and other
                          technologies to collect geolocation data that tells us
                          your current location (based on your IP address). You
                          can opt out of allowing us to collect this information
                          either by refusing access to the information or by
                          disabling your Location setting on your device.
                          However, if you choose to opt out, you may not be able
                          to use certain aspects of the Services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id='process-information' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                  2. How Do We Process Your Information?
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                  <p className='text-sm text-gray-400 mb-4'>
                    <em>In Short:</em> We process your information to provide,
                    improve, and administer our Services, communicate with you,
                    for security and fraud prevention, and to comply with law.
                    We may also process your information for other purposes with
                    your consent.
                  </p>

                  <p className='text-gray-300 mb-4'>
                    We process your personal information for a variety of
                    reasons, depending on how you interact with our Services,
                    including:
                  </p>

                  <ul className='space-y-2 text-gray-300 text-sm'>
                    <li>
                      • To deliver and facilitate delivery of services to the
                      user. We may process your information to provide you with
                      the requested service.
                    </li>
                    <li>
                      • To respond to user inquiries/offer support to users. We
                      may process your information to respond to your inquiries
                      and solve any potential issues you might have with the
                      requested service.
                    </li>
                    <li>
                      • To send administrative information to you. We may
                      process your information to send you details about our
                      products and services, changes to our terms and policies,
                      and other similar information.
                    </li>
                    <li>
                      • To fulfill and manage your orders. We may process your
                      information to fulfill and manage your orders, payments,
                      returns, and exchanges made through the Services.
                    </li>
                    <li>
                      • To enable user-to-user communications. We may process
                      your information if you choose to use any of our offerings
                      that allow for communication with another user.
                    </li>
                    <li>
                      • To request feedback. We may process your information
                      when necessary to request feedback and to contact you
                      about your use of our Services.
                    </li>
                    <li>
                      • To send you marketing and promotional communications. We
                      may process the personal information you send to us for
                      our marketing purposes, if this is in accordance with your
                      marketing preferences. You can opt out of our marketing
                      emails at any time. For more information, see "WHAT ARE
                      YOUR PRIVACY RIGHTS?" below.
                    </li>
                    <li>
                      • To deliver targeted advertising to you. We may process
                      your information to develop and display personalized
                      content and advertising tailored to your interests,
                      location, and more. For more information see our Cookie
                      Notice:{' '}
                      <Link
                        href='http://www.nartaq.com/legal/cookies'
                        className='text-[#a98b5d] hover:underline'
                      >
                        http://www.nartaq.com/legal/cookies
                      </Link>
                      .
                    </li>
                    <li>
                      • To protect our Services. We may process your information
                      as part of our efforts to keep our Services safe and
                      secure, including fraud monitoring and prevention.
                    </li>
                    <li>
                      • To identify usage trends. We may process information
                      about how you use our Services to better understand how
                      they are being used so we can improve them.
                    </li>
                    <li>
                      • To determine the effectiveness of our marketing and
                      promotional campaigns. We may process your information to
                      better understand how to provide marketing and promotional
                      campaigns that are most relevant to you.
                    </li>
                    <li>
                      • To save or protect an individual's vital interest. We
                      may process your information when necessary to save or
                      protect an individual's vital interest, such as to prevent
                      harm.
                    </li>
                  </ul>
                </div>
              </section>

              <section id='legal-bases' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                  3. What Legal Bases Do We Rely On to Process Your Personal
                  Information?
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                  <p className='text-sm text-gray-400 mb-4'>
                    <em>In Short:</em> We only process your personal information
                    when we believe it is necessary and we have a valid legal
                    reason (i.e., legal basis) to do so under applicable law,
                    like with your consent, to comply with laws, to provide you
                    with services to enter into or fulfill our contractual
                    obligations, to protect your rights, or to fulfill our
                    legitimate business interests.
                  </p>

                  <p className='text-gray-300 mb-4'>
                    The General Data Protection Regulation (GDPR) and UK GDPR
                    require us to explain the valid legal bases we rely on in
                    order to process your personal information. As such, we may
                    rely on the following legal bases to process your personal
                    information:
                  </p>

                  <div className='space-y-4 text-gray-300 text-sm'>
                    <div>
                      <h4 className='font-semibold text-[#a98b5d] mb-2'>
                        Consent.
                      </h4>
                      <p>
                        We may process your information if you have given us
                        permission (i.e., consent) to use your personal
                        information for a specific purpose. You can withdraw
                        your consent at any time. Learn more about withdrawing
                        your consent.
                      </p>
                    </div>

                    <div>
                      <h4 className='font-semibold text-[#a98b5d] mb-2'>
                        Performance of a Contract.
                      </h4>
                      <p>
                        We may process your personal information when we believe
                        it is necessary to fulfill our contractual obligations
                        to you, including providing our Services or at your
                        request prior to entering into a contract with you.
                      </p>
                    </div>

                    <div>
                      <h4 className='font-semibold text-[#a98b5d] mb-2'>
                        Legitimate Interests.
                      </h4>
                      <p>
                        We may process your information when we believe it is
                        reasonably necessary to achieve our legitimate business
                        interests and those interests do not outweigh your
                        interests and fundamental rights and freedoms. For
                        example, we may process your personal information for
                        some of the purposes described in order to:
                      </p>
                      <ul className='list-disc list-inside ml-4 mt-2 space-y-1'>
                        <li>
                          Send users information about special offers and
                          discounts on our products and services
                        </li>
                        <li>
                          Develop and display personalized and relevant
                          advertising content for our users
                        </li>
                        <li>
                          Analyze how our Services are used so we can improve
                          them to engage and retain users
                        </li>
                        <li>Support our marketing activities</li>
                        <li>
                          Diagnose problems and/or prevent fraudulent activities
                        </li>
                        <li>
                          Understand how our users use our products and services
                          so we can improve user experience
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className='font-semibold text-[#a98b5d] mb-2'>
                        Legal Obligations.
                      </h4>
                      <p>
                        We may process your information where we believe it is
                        necessary for compliance with our legal obligations,
                        such as to cooperate with a law enforcement body or
                        regulatory agency, exercise or defend our legal rights,
                        or disclose your information as evidence in litigation
                        in which we are involved.
                      </p>
                    </div>

                    <div>
                      <h4 className='font-semibold text-[#a98b5d] mb-2'>
                        Vital Interests.
                      </h4>
                      <p>
                        We may process your information where we believe it is
                        necessary to protect your vital interests or the vital
                        interests of a third party, such as situations involving
                        potential threats to the safety of any person.
                      </p>
                    </div>
                  </div>

                  <p className='text-gray-300 text-sm mt-4'>
                    In legal terms, we are generally the "data controller" under
                    European data protection laws of the personal information
                    described in this Privacy Notice, since we determine the
                    means and/or purposes of the data processing we perform.
                    This Privacy Notice does not apply to the personal
                    information we process as a "data processor" on behalf of
                    our customers. In those situations, the customer that we
                    provide services to and with whom we have entered into a
                    data processing agreement is the "data controller"
                    responsible for your personal information, and we merely
                    process your information on their behalf in accordance with
                    your instructions. If you want to know more about our
                    customers' privacy practices, you should read their privacy
                    policies and direct any questions you have to them.
                  </p>
                </div>
              </section>

              <section id='share-information' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                  4. When and With Whom Do We Share Your Personal Information?
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                  <p className='text-sm text-gray-400 mb-4'>
                    <em>In Short:</em> We may share information in specific
                    situations described in this section and/or with the
                    following categories of third parties.
                  </p>

                  <div className='space-y-4 text-gray-300 text-sm'>
                    <div>
                      <h4 className='font-semibold text-[#a98b5d] mb-2'>
                        Vendors, Consultants, and Other Third-Party Service
                        Providers.
                      </h4>
                      <p className='mb-2'>
                        We may share your data with third-party vendors, service
                        providers, contractors, or agents ("third parties") who
                        perform services for us or on our behalf and require
                        access to such information to do that work. We have
                        contracts in place with our third parties, which are
                        designed to help safeguard your personal information.
                        This means that they cannot do anything with your
                        personal information unless we have instructed them to
                        do it. They will also not share your personal
                        information with any organization apart from us. They
                        also commit to protect the data they hold on our behalf
                        and to retain it for the period we instruct.
                      </p>

                      <p className='mb-2'>
                        The categories of third parties we may share personal
                        information with are as follows:
                      </p>
                      <ul className='list-disc list-inside ml-4 space-y-1'>
                        <li>Data Analytics Services</li>
                        <li>Data Storage Service Providers</li>
                        <li>Order Fulfillment Service Providers</li>
                        <li>Communication & Collaboration Tools</li>
                        <li>Sales & Marketing Tools</li>
                        <li>Retargeting Platforms</li>
                        <li>Social Networks</li>
                      </ul>
                    </div>

                    <div>
                      <p className='mb-2'>
                        We also may need to share your personal information in
                        the following situations:
                      </p>
                      <ul className='space-y-2'>
                        <li>
                          <strong className='text-[#a98b5d]'>
                            Business Transfers.
                          </strong>{' '}
                          We may share or transfer your information in
                          connection with, or during negotiations of, any
                          merger, sale of company assets, financing, or
                          acquisition of all or a portion of our business to
                          another company.
                        </li>
                        <li>
                          <strong className='text-[#a98b5d]'>
                            Business Partners.
                          </strong>{' '}
                          We may share your information with our business
                          partners to offer you certain products, services, or
                          promotions.
                        </li>
                        <li>
                          <strong className='text-[#a98b5d]'>
                            Other Users.
                          </strong>{' '}
                          When you share personal information (for example, by
                          posting comments, contributions, or other content to
                          the Services) or otherwise interact with public areas
                          of the Services, such personal information may be
                          viewed by all users and may be publicly made available
                          outside the Services in perpetuity. Similarly, other
                          users will be able to view descriptions of your
                          activity, communicate with you within our Services,
                          and view your profile.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id='cookies-tracking' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                  5. Do We Use Cookies and Other Tracking Technologies?
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                  <p className='text-sm text-gray-400 mb-4'>
                    <em>In Short:</em> We may use cookies and other tracking
                    technologies to collect and store your information.
                  </p>

                  <div className='space-y-4 text-gray-300 text-sm'>
                    <p>
                      We may use cookies and similar tracking technologies (like
                      web beacons and pixels) to gather information when you
                      interact with our Services. Some online tracking
                      technologies help us maintain the security of our
                      Services, prevent crashes, fix bugs, save your
                      preferences, and assist with basic site functions.
                    </p>

                    <p>
                      We also permit third parties and service providers to use
                      online tracking technologies on our Services for analytics
                      and advertising, including to help manage and display
                      advertisements, to tailor advertisements to your
                      interests, or to send abandoned shopping cart reminders
                      (depending on your communication preferences). The third
                      parties and service providers use their technology to
                      provide advertising about products and services tailored
                      to your interests which may appear either on our Services
                      or on other websites.
                    </p>

                    <p>
                      Specific information about how we use such technologies
                      and how you can refuse certain cookies is set out in our
                      Cookie Notice:{' '}
                      <Link
                        href='http://www.nartaq.com/legal/cookies'
                        className='text-[#a98b5d] hover:underline'
                      >
                        http://www.nartaq.com/legal/cookies
                      </Link>
                      .
                    </p>

                    <div className='mt-4'>
                      <h4 className='font-semibold text-[#a98b5d] mb-2'>
                        Google Analytics
                      </h4>
                      <p>
                        We may share your information with Google Analytics to
                        track and analyze the use of the Services. The Google
                        Analytics Advertising Features that we may use include:
                        Google Analytics Demographics and Interests Reporting.
                        To opt out of being tracked by Google Analytics across
                        the Services, visit{' '}
                        <Link
                          href='https://tools.google.com/dlpage/gaoptout'
                          className='text-[#a98b5d] hover:underline'
                        >
                          https://tools.google.com/dlpage/gaoptout
                        </Link>
                        . You can opt out of Google Analytics Advertising
                        Features through Ads Settings and Ad Settings for mobile
                        apps. Other opt out means include{' '}
                        <Link
                          href='http://optout.networkadvertising.org/'
                          className='text-[#a98b5d] hover:underline'
                        >
                          http://optout.networkadvertising.org/
                        </Link>{' '}
                        and{' '}
                        <Link
                          href='http://www.networkadvertising.org/mobile-choice'
                          className='text-[#a98b5d] hover:underline'
                        >
                          http://www.networkadvertising.org/mobile-choice
                        </Link>
                        . For more information on the privacy practices of
                        Google, please visit the Google Privacy & Terms page.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id='ai-products' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                  6. Do We Offer Artificial Intelligence-Based Products?
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                  <p className='text-sm text-gray-400 mb-4'>
                    <em>In Short:</em> We offer products, features, or tools
                    powered by artificial intelligence, machine learning, or
                    similar technologies.
                  </p>

                  <div className='space-y-4 text-gray-300 text-sm'>
                    <p>
                      As part of our Services, we offer products, features, or
                      tools powered by artificial intelligence, machine
                      learning, or similar technologies (collectively, "AI
                      Products"). These tools are designed to enhance your
                      experience and provide you with innovative solutions. The
                      terms in this Privacy Notice govern your use of the AI
                      Products within our Services.
                    </p>

                    <div>
                      <h4 className='font-semibold text-[#a98b5d] mb-2'>
                        Use of AI Technologies
                      </h4>
                      <p>
                        We provide the AI Products through third-party service
                        providers ("AI Service Providers"), including Microsoft
                        Azure AI. As outlined in this Privacy Notice, your
                        input, output, and personal information will be shared
                        with and processed by these AI Service Providers to
                        enable your use of our AI Products for purposes outlined
                        in "WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR
                        PERSONAL INFORMATION?" You must not use the AI Products
                        in any way that violates the terms or policies of any AI
                        Service Provider.
                      </p>
                    </div>

                    <div>
                      <h4 className='font-semibold text-[#a98b5d] mb-2'>
                        Our AI Products
                      </h4>
                      <p>
                        Our AI Products are designed for the following
                        functions:
                      </p>
                      <ul className='list-disc list-inside ml-4 mt-2 space-y-1'>
                        <li>AI applications</li>
                        <li>AI bots</li>
                        <li>AI predictive analytics</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className='font-semibold text-[#a98b5d] mb-2'>
                        How We Process Your Data Using AI
                      </h4>
                      <p>
                        All personal information processed using our AI Products
                        is handled in line with our Privacy Notice and our
                        agreement with third parties. This ensures high security
                        and safeguards your personal information throughout the
                        process, giving you peace of mind about your data's
                        safety.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id='retention' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                  7. How Long Do We Keep Your Information?
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                  <p className='text-sm text-gray-400 mb-4'>
                    <em>In Short:</em> We keep your information for as long as
                    necessary to fulfill the purposes outlined in this Privacy
                    Notice unless otherwise required by law.
                  </p>

                  <div className='space-y-4 text-gray-300 text-sm'>
                    <p>
                      We will only keep your personal information for as long as
                      it is necessary for the purposes set out in this Privacy
                      Notice, unless a longer retention period is required or
                      permitted by law (such as tax, accounting, or other legal
                      requirements).
                    </p>

                    <p>
                      When we have no ongoing legitimate business need to
                      process your personal information, we will either delete
                      or anonymize such information, or, if this is not possible
                      (for example, because your personal information has been
                      stored in backup archives), then we will securely store
                      your personal information and isolate it from any further
                      processing until deletion is possible.
                    </p>
                  </div>
                </div>
              </section>

              <section id='information-safe' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                  8. How Do We Keep Your Information Safe?
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                  <p className='text-sm text-gray-400 mb-4'>
                    <em>In Short:</em> We aim to protect your personal
                    information through a system of organizational and technical
                    security measures.
                  </p>

                  <div className='space-y-4 text-gray-300 text-sm'>
                    <p>
                      We have implemented appropriate and reasonable technical
                      and organizational security measures designed to protect
                      the security of any personal information we process.
                      However, despite our safeguards and efforts to secure your
                      information, no electronic transmission over the Internet
                      or information storage technology can be guaranteed to be
                      100% secure, so we cannot promise or guarantee that
                      hackers, cybercriminals, or other unauthorized third
                      parties will not be able to defeat our security and
                      improperly collect, access, steal, or modify your
                      information. Although we will do our best to protect your
                      personal information, transmission of personal information
                      to and from our Services is at your own risk. You should
                      only access the Services within a secure environment.
                    </p>
                  </div>
                </div>
              </section>

              <section id='minors' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                  9. Do We Collect Information From Minors?
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                  <p className='text-sm text-gray-400 mb-4'>
                    <em>In Short:</em> We do not knowingly collect data from or
                    market to children under 18 years of age.
                  </p>

                  <div className='space-y-4 text-gray-300 text-sm'>
                    <p>
                      We do not knowingly collect, solicit data from, or market
                      to children under 18 years of age, nor do we knowingly
                      sell such personal information. By using the Services, you
                      represent that you are at least 18 or that you are the
                      parent or guardian of such a minor and consent to such
                      minor dependent's use of the Services. If we learn that
                      personal information from users less than 18 years of age
                      has been collected, we will deactivate the account and
                      take reasonable measures to promptly delete such data from
                      our records. If you become aware of any data we may have
                      collected from children under age 18, please contact us at{' '}
                      <Link
                        href='mailto:riadh@nartaq.com'
                        className='text-[#a98b5d] hover:underline'
                      >
                        riadh@nartaq.com
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </section>

              <section id='privacy-rights' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                  10. What Are Your Privacy Rights?
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                  <p className='text-sm text-gray-400 mb-4'>
                    <em>In Short:</em> In some regions, you have rights that
                    allow you greater access to and control over your personal
                    information. You may review, change, or terminate your
                    account at any time, depending on your country, province, or
                    state of residence.
                  </p>

                  <div className='space-y-4 text-gray-300 text-sm'>
                    <p>
                      In some regions, you have certain rights under applicable
                      data protection laws. These may include the right (i) to
                      request access and obtain a copy of your personal
                      information, (ii) to request rectification or erasure;
                      (iii) to restrict the processing of your personal
                      information; (iv) if applicable, to data portability; and
                      (v) not to be subject to automated decision-making. In
                      certain circumstances, you may also have the right to
                      object to the processing of your personal information. You
                      can make such a request by contacting us by using the
                      contact details provided in the section "HOW CAN YOU
                      CONTACT US ABOUT THIS NOTICE?" below.
                    </p>

                    <p>
                      We will consider and act upon any request in accordance
                      with applicable data protection laws.
                    </p>

                    <p>
                      If you are located in the EEA or UK and you believe we are
                      unlawfully processing your personal information, you also
                      have the right to complain to your Member State data
                      protection authority or UK data protection authority.
                    </p>

                    <p>
                      If you are located in Switzerland, you may contact the
                      Federal Data Protection and Information Commissioner.
                    </p>

                    <div className='space-y-3'>
                      <div>
                        <h4 className='font-semibold text-[#a98b5d] mb-1'>
                          Withdrawing your consent:
                        </h4>
                        <p>
                          If we are relying on your consent to process your
                          personal information, which may be express and/or
                          implied consent depending on the applicable law, you
                          have the right to withdraw your consent at any time.
                          You can withdraw your consent at any time by
                          contacting us by using the contact details provided in
                          the section "HOW CAN YOU CONTACT US ABOUT THIS
                          NOTICE?" below.
                        </p>
                        <p>
                          However, please note that this will not affect the
                          lawfulness of the processing before its withdrawal
                          nor, when applicable law allows, will it affect the
                          processing of your personal information conducted in
                          reliance on lawful processing grounds other than
                          consent.
                        </p>
                      </div>

                      <div>
                        <h4 className='font-semibold text-[#a98b5d] mb-1'>
                          Opting out of marketing and promotional
                          communications:
                        </h4>
                        <p>
                          You can unsubscribe from our marketing and promotional
                          communications at any time by clicking on the
                          unsubscribe link in the emails that we send, or by
                          contacting us using the details provided in the
                          section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
                          below. You will then be removed from the marketing
                          lists. However, we may still communicate with you —
                          for example, to send you service-related messages that
                          are necessary for the administration and use of your
                          account, to respond to service requests, or for other
                          non-marketing purposes.
                        </p>
                      </div>

                      <div>
                        <h4 className='font-semibold text-[#a98b5d] mb-1'>
                          Cookies and similar technologies:
                        </h4>
                        <p>
                          Most Web browsers are set to accept cookies by
                          default. If you prefer, you can usually choose to set
                          your browser to remove cookies and to reject cookies.
                          If you choose to remove cookies or reject cookies,
                          this could affect certain features or services of our
                          Services. For further information, please see our
                          Cookie Notice:{' '}
                          <Link
                            href='http://www.nartaq.com/legal/cookies'
                            className='text-[#a98b5d] hover:underline'
                          >
                            http://www.nartaq.com/legal/cookies
                          </Link>
                          .
                        </p>
                      </div>
                    </div>

                    <p>
                      If you have questions or comments about your privacy
                      rights, you may email us at{' '}
                      <Link
                        href='mailto:privacy@nartaq.com'
                        className='text-[#a98b5d] hover:underline'
                      >
                        privacy@nartaq.com
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </section>

              <section id='do-not-track' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                  11. Controls For Do-Not-Track Features
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                  <div className='space-y-4 text-gray-300 text-sm'>
                    <p>
                      Most web browsers and some mobile operating systems and
                      mobile applications include a Do-Not-Track ("DNT") feature
                      or setting you can activate to signal your privacy
                      preference not to have data about your online browsing
                      activities monitored and collected. At this stage, no
                      uniform technology standard for recognizing and
                      implementing DNT signals has been finalized. As such, we
                      do not currently respond to DNT browser signals or any
                      other mechanism that automatically communicates your
                      choice not to be tracked online. If a standard for online
                      tracking is adopted that we must follow in the future, we
                      will inform you about that practice in a revised version
                      of this Privacy Notice.
                    </p>
                  </div>
                </div>
              </section>

              <section id='updates' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                  12. Do We Make Updates to This Notice?
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                  <p className='text-sm text-gray-400 mb-4'>
                    <em>In Short:</em> Yes, we will update this notice as
                    necessary to stay compliant with relevant laws.
                  </p>

                  <div className='space-y-4 text-gray-300 text-sm'>
                    <p>
                      We may update this Privacy Notice from time to time. The
                      updated version will be indicated by an updated "Revised"
                      date at the top of this Privacy Notice. If we make
                      material changes to this Privacy Notice, we may notify you
                      either by prominently posting a notice of such changes or
                      by directly sending you a notification. We encourage you
                      to review this Privacy Notice frequently to be informed of
                      how we are protecting your information.
                    </p>
                  </div>
                </div>
              </section>

              <section id='contact' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                  13. How Can You Contact Us About This Notice?
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                  <div className='space-y-4 text-gray-300 text-sm'>
                    <p>
                      If you have questions or comments about this notice, you
                      may contact our Data Protection Officer (DPO) by email at{' '}
                      <Link
                        href='mailto:riadh@nartaq.com'
                        className='text-[#a98b5d] hover:underline'
                      >
                        riadh@nartaq.com
                      </Link>
                      , by phone at +33.784616068, or contact us by post at:
                    </p>

                    <div className='bg-[#0a0a0a]/50 border border-[#a98b5d]/10 rounded-lg p-4'>
                      <p className='font-semibold text-[#a98b5d] mb-2'>
                        NartaQ SA
                      </p>
                      <p>Data Protection Officer</p>
                      <p>14 Boulevard Victor Schoelcher</p>
                      <p>Lieusaint, Seine-et-Marne 77127</p>
                      <p>France</p>
                    </div>

                    <p>
                      If you are a resident in the European Economic Area, we
                      are the "data controller" of your personal information. We
                      have appointed Riadh Jouini to be our representative in
                      the EEA. You can contact them directly regarding our
                      processing of your information, by email at{' '}
                      <Link
                        href='mailto:riadh@nartaq.com'
                        className='text-[#a98b5d] hover:underline'
                      >
                        riadh@nartaq.com
                      </Link>
                      , by visiting{' '}
                      <Link
                        href='http://www.nartaq.com'
                        className='text-[#a98b5d] hover:underline'
                      >
                        http://www.nartaq.com
                      </Link>
                      , by phone at +33.784616068, or by post to:
                    </p>

                    <div className='bg-[#0a0a0a]/50 border border-[#a98b5d]/10 rounded-lg p-4'>
                      <p>14 Boulevard Victor Schoelcher</p>
                      <p>Seine-et-Marne, LIEUSAINT 77127</p>
                      <p>France</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id='review-data' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                  14. How Can You Review, Update, or Delete the Data We Collect
                  From You?
                </h2>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6'>
                  <div className='space-y-4 text-gray-300 text-sm'>
                    <p>
                      Based on the applicable laws of your country, you may have
                      the right to request access to the personal information we
                      collect from you, details about how we have processed it,
                      correct inaccuracies, or delete your personal information.
                      You may also have the right to withdraw your consent to
                      our processing of your personal information. These rights
                      may be limited in some circumstances by applicable law. To
                      request to review, update, or delete your personal
                      information, please visit:{' '}
                      <Link
                        href='http://www.nartaq.com/data-request'
                        className='text-[#a98b5d] hover:underline'
                      >
                        http://www.nartaq.com/data-request
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </section>

              <div className='mt-16 pt-8 border-t border-[#a98b5d]/20'>
                <div className='bg-gradient-to-r from-gray-800/20 to-gray-700/20 border border-gray-600/20 rounded-xl p-6'>
                  <p className='text-sm text-gray-400 leading-relaxed mb-4'>
                    <strong className='text-gray-300'>Effective Date:</strong>{' '}
                    This Privacy Policy was last updated on August 24, 2025, and
                    governs the collection and processing of personal
                    information in connection with NartaQ's AI-powered protocol
                    for startup funding.
                  </p>
                  <div className='flex flex-wrap gap-4 text-xs text-gray-500'>
                    <Link
                      href='/legal/terms'
                      className='text-[#a98b5d] hover:text-[#dcd7ce] transition-colors'
                    >
                      Terms of Service
                    </Link>
                    <Link
                      href='/legal/dmca'
                      className='text-[#a98b5d] hover:text-[#dcd7ce] transition-colors'
                    >
                      DMCA Policy
                    </Link>
                    <span>© 2025 NartaQ SA. All rights reserved.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  )
}
