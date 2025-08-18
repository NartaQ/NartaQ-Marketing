'use client'

import { useState } from 'react'

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How do exclusive bounties work?',
      a: 'Startups post precisely scoped micro‑tasks with transparent budget ranges and detailed acceptance criteria. Vetted service providers apply or submit under first‑acceptable or shortlist‑then‑award rules. Payouts release automatically on acceptance, with private bounties restricting access to pre‑vetted professionals.'
    },
    {
      q: 'Do you handle premium payments and escrow?',
      a: 'We provide sophisticated milestone‑based contracting with enterprise-grade protections. Our partner network offers white-glove payment processing and escrow services. Specific mechanics are detailed in our NDA-gated documentation and may vary by project size and jurisdiction.'
    },
    {
      q: 'Can compensation include equity arrangements?',
      a: 'Absolutely. We specialize in hybrid compensation structures combining cash with equity/options. Our legal partner network provides standardized templates and sophisticated structuring for equity-based arrangements, all available through our NDA-protected processes.'
    },
    {
      q: "What's NartaQ's role during premium delivery?",
      a: 'We offer optional concierge intermediation services: coordinating scope definition, verifying milestone completion, and managing any disputes through our white-glove arbitration process. Teams may also choose to self‑manage with our premium tooling support.'
    },
    {
      q: 'How is sensitive data protected?',
      a: 'Enterprise-grade security with EU-region data residency, GDPR-compliant practices, end-to-end encryption in transit and at rest, comprehensive audit trails, and SOC 2 compliance. All sensitive processes are NDA-gated with additional IP protection measures available.'
    },
    {
      q: 'Who can join this exclusive network?',
      a: 'Access is curated and invitation-based. We prioritize verified professionals, established startups, and accredited investors in the France-Tunisia corridor. All members undergo our multi-layer verification process including credential checks and professional references.'
    }
  ]

  return (
    <section id='faq' className='flex w-full flex-col items-center justify-center p-[2%] py-20 relative'>
      {/* Premium background elements */}
      <div className="absolute inset-0 luxury-texture opacity-20"></div>
      <div className="absolute top-1/5 left-1/4 w-80 h-80 bg-[#a98b5d]/4 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-1/5 right-1/4 w-96 h-96 bg-[#dcd7ce]/3 rounded-full blur-3xl floating"></div>

      <div className='max-w-6xl mx-auto text-center space-y-8 relative z-10 reveal-up'>
        {/* Premium section header */}
        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <div className="premium-glass px-8 py-3 rounded-full border border-[#a98b5d]/20">
              <span className="text-sm font-medium text-[#a98b5d] tracking-wider">
                FREQUENTLY ASKED
              </span>
            </div>
          </div>

          <h2 className='text-4xl md:text-5xl font-light text-[#dcd7ce]'>
            <span className="font-medium text-[#a98b5d] ">Questions</span> & Answers
          </h2>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto"></div>

          <p className='text-xl text-[#dcd7ce] font-light leading-relaxed max-w-3xl mx-auto'>
            Everything you need to know about our premium bounty system,
            orchestration services, and trust-first approach.
          </p>
        </div>
      </div>

      <div className='max-w-4xl w-full mt-16 px-4 reveal-up'>
        <div className='space-y-4'>
          {faqs.map((item, i) => (
            <div key={i} className='premium-glass rounded-2xl border border-[#a98b5d]/20 overflow-hidden elite-hover'>
              <button
                className='w-full p-8 text-left flex items-center justify-between group'
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <h3 className='text-xl font-medium text-[#dcd7ce] pr-4 group-hover:text-[#a98b5d] transition-colors duration-300'>
                  {item.q}
                </h3>
                <div className={`text-2xl text-[#a98b5d] transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                  +
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className='px-8 pb-8'>
                  <div className="w-full h-px bg-gradient-to-r from-[#a98b5d]/20 via-[#a98b5d]/40 to-[#a98b5d]/20 mb-6"></div>
                  <p className='text-[#dcd7ce] leading-relaxed font-light text-lg'>
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium bottom element */}
      <div className="mt-20 text-center reveal-up">
        <p className="text-[#dcd7ce] font-light italic mb-4">
          &ldquo;Have more questions?&rdquo;
        </p>
        <a
          href="mailto:contact@nartaq.com?subject=Premium%20Inquiry"
          className="premium-glass elite-hover px-8 py-4 rounded-xl border border-[#a98b5d]/30 hover:border-[#a98b5d]/60 transition-all duration-300 inline-block"
        >
          <span className="text-[#a98b5d] font-medium">
            Contact our concierge team
          </span>
        </a>
      </div>
    </section>
  )
}
