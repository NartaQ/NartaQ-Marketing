
import { Shield, FileText, Eye, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal & Compliance - NartaQ',
  description: 'Review NartaQ\'s legal policies, terms of service, privacy policy, and compliance documentation. Our commitment to transparency and user protection.',
  keywords: [
    'legal policies',
    'terms of service',
    'privacy policy',
    'compliance',
    'GDPR',
    'data protection',
    'user rights'
  ],
  openGraph: {
    title: 'Legal & Compliance - NartaQ',
    description: 'Review our legal policies, terms of service, privacy policy, and compliance documentation.',
    
    siteName: 'NartaQ',
  },
  twitter: {
    title: 'Legal & Compliance - NartaQ',
    description: 'Review our legal policies, terms of service, privacy policy, and compliance documentation.',
  },
  alternates: {
    canonical: 'https://www.nartaq.com/legal',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function LegalPage() {
  return (
    <>      
      <div className='min-h-screen bg-black text-white'>
      <div className='pt-32 pb-16'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Hero Section */}
          <div
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
          </div>

          {/* Legal Documents Grid */}
          <div className='grid md:grid-cols-2 gap-8 mb-20'>
            <div
            >
              <Link title='View Terms of Service' href='/legal/terms' className='group block'>
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
            </div>

            <div
            >
              <Link title='View Privacy Policy' href='/legal/privacy' className='group block'>
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
            </div>

            <div
            >
              <Link title='View DMCA Policy' href='/legal/dmca' className='group block'>
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
            </div>

            <div
            >
              <Link title='View Cookie Policy' href='/legal/cookies' className='group block'>
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
            </div>
          </div>

          {/* Compliance Statement */}
          <div
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
                    across multiple jurisdictions, ensuring legal
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
          </div>

          {/* Contact Information */}
          <div
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
                    title='Send General Legal Inquiries'
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
                    title='Send Privacy & Data Protection Inquiries'
                    href='mailto:privacy@nartaq.com'
                    className='underline hover:text-[#a98b5d]'
                  >
                    privacy@nartaq.com
                  </Link>
                </p>
                <p>
                  <strong className='text-[#a98b5d]'>DMCA & Copyright:</strong>{' '}
                  <Link
                    title='Send DMCA & Copyright Inquiries'
                    href='mailto:dmca@nartaq.com'
                    className='underline hover:text-[#a98b5d]'
                  >
                    dmca@nartaq.com
                  </Link>
                </p>
              </div>
              <div className='mt-6 pt-6 border-t border-[#a98b5d]/20'>
                <p className='text-xs text-gray-400'>
                  NartaQ SAS • 60 rue François 1er, 75008 Paris, France • RCS Paris 992 848 242
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
