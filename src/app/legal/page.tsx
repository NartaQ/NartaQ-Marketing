'use client'

import { motion } from 'framer-motion'
import { Shield, FileText, Eye, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function LegalPage() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <div className='pt-32 pb-16'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center mb-20'
          >
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-8'>
              <Shield className='w-4 h-4' />
              LEGAL & COMPLIANCE
            </div>
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>
              <span className='text-[#dcd7ce]'>Trust &</span>
              <br />
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Transparency
              </span>
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Our commitment to legal compliance, user privacy, and transparent
              operations. Review our policies and terms that govern your use of
              the NartaQ platform.
            </p>
          </motion.div>

          {/* Legal Documents Grid */}
          <div className='grid md:grid-cols-2 gap-8 mb-20'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link href='/legal/terms' className='group block'>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-2xl p-8 hover:border-[#a98b5d]/40 transition-all duration-300'>
                  <div className='w-12 h-12 bg-[#a98b5d]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#a98b5d]/30 transition-colors'>
                    <FileText className='w-6 h-6 text-[#a98b5d]' />
                  </div>
                  <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4 group-hover:text-white transition-colors'>
                    Terms of Service
                  </h3>
                  <p className='text-gray-400 mb-6'>
                    Comprehensive terms governing your use of the NartaQ
                    platform, including user rights, responsibilities, and
                    platform policies for founders and investors.
                  </p>
                  <div className='text-[#a98b5d] font-semibold group-hover:text-[#dcd7ce] transition-colors'>
                    Last Updated: August 24, 2025 →
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href='/legal/privacy' className='group block'>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-2xl p-8 hover:border-[#a98b5d]/40 transition-all duration-300'>
                  <div className='w-12 h-12 bg-[#a98b5d]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#a98b5d]/30 transition-colors'>
                    <Eye className='w-6 h-6 text-[#a98b5d]' />
                  </div>
                  <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4 group-hover:text-white transition-colors'>
                    Privacy Policy
                  </h3>
                  <p className='text-gray-400 mb-6'>
                    Detailed privacy policy explaining how we collect, process,
                    and protect your personal information. GDPR compliant with
                    comprehensive data protection measures.
                  </p>
                  <div className='text-[#a98b5d] font-semibold group-hover:text-[#dcd7ce] transition-colors'>
                    Last Updated: August 24, 2025 →
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link href='/legal/dmca' className='group block'>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-2xl p-8 hover:border-[#a98b5d]/40 transition-all duration-300'>
                  <div className='w-12 h-12 bg-[#a98b5d]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#a98b5d]/30 transition-colors'>
                    <AlertTriangle className='w-6 h-6 text-[#a98b5d]' />
                  </div>
                  <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4 group-hover:text-white transition-colors'>
                    DMCA Policy
                  </h3>
                  <p className='text-gray-400 mb-6'>
                    Digital Millennium Copyright Act compliance policy,
                    including procedures for reporting copyright infringement
                    and our response process.
                  </p>
                  <div className='text-[#a98b5d] font-semibold group-hover:text-[#dcd7ce] transition-colors'>
                    Compliance Framework →
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link href='/legal/cookies' className='group block'>
                <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-2xl p-8 hover:border-[#a98b5d]/40 transition-all duration-300'>
                  <div className='w-12 h-12 bg-[#a98b5d]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#a98b5d]/30 transition-colors'>
                    <Shield className='w-6 h-6 text-[#a98b5d]' />
                  </div>
                  <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4 group-hover:text-white transition-colors'>
                    Cookie Policy
                  </h3>
                  <p className='text-gray-400 mb-6'>
                    Information about how we use cookies and similar
                    technologies to improve your experience on our platform,
                    with options for managing your preferences.
                  </p>
                  <div className='text-[#a98b5d] font-semibold group-hover:text-[#dcd7ce] transition-colors'>
                    Cookie Management →
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Compliance Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className='mb-16'
          >
            <div className='bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/10 border border-[#a98b5d]/20 rounded-2xl p-8'>
              <h2 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                Our Compliance Commitment
              </h2>
              <div className='grid md:grid-cols-2 gap-8 text-gray-300'>
                <div>
                  <h3 className='text-xl font-semibold text-[#a98b5d] mb-3'>
                    Data Protection
                  </h3>
                  <p className='text-sm leading-relaxed'>
                    We adhere to GDPR requirements and maintain the highest
                    standards for data protection. Your personal information is
                    encrypted, securely stored, and never shared without
                    explicit consent.
                  </p>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-[#a98b5d] mb-3'>
                    Cross-Border Compliance
                  </h3>
                  <p className='text-sm leading-relaxed'>
                    Our platform is designed to meet regulatory requirements
                    across France, Tunisia, and EU jurisdictions, ensuring legal
                    compliance for all cross-border investment activities.
                  </p>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-[#a98b5d] mb-3'>
                    Financial Regulations
                  </h3>
                  <p className='text-sm leading-relaxed'>
                    We work closely with legal experts to ensure compliance with
                    financial services regulations, investment laws, and
                    anti-money laundering requirements in all operational
                    jurisdictions.
                  </p>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-[#a98b5d] mb-3'>
                    Transparency
                  </h3>
                  <p className='text-sm leading-relaxed'>
                    We believe in complete transparency about our policies,
                    procedures, and data practices. All policy updates are
                    clearly communicated to our community with advance notice.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className='text-center'
          >
            <div className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-2xl p-8'>
              <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4'>
                Legal Questions?
              </h3>
              <p className='text-gray-400 mb-6'>
                If you have questions about our legal policies or need to
                contact us regarding compliance matters, we're here to help.
              </p>
              <div className='space-y-2 text-sm text-gray-300'>
                <p>
                  <strong className='text-[#a98b5d]'>
                    General Legal Inquiries:
                  </strong>{' '}
                  <Link
                    href='mailto:legal@nartaq.com'
                    className='underline hover:text-[#a98b5d]'
                  >
                    legal@nartaq.com
                  </Link>
                </p>
                <p>
                  <strong className='text-[#a98b5d]'>
                    Privacy & Data Protection:
                  </strong>{' '}
                  <Link
                    href='mailto:privacy@nartaq.com'
                    className='underline hover:text-[#a98b5d]'
                  >
                    privacy@nartaq.com
                  </Link>
                </p>
                <p>
                  <strong className='text-[#a98b5d]'>DMCA & Copyright:</strong>{' '}
                  <Link
                    href='mailto:dmca@nartaq.com'
                    className='underline hover:text-[#a98b5d]'
                  >
                    dmca@nartaq.com
                  </Link>
                </p>
              </div>
              <div className='mt-6 pt-6 border-t border-[#a98b5d]/20'>
                <p className='text-xs text-gray-500'>
                  NartaQ SA • 14 Boulevard Victor Schoelcher, Lieusaint,
                  Seine-et-Marne 77127, France
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
