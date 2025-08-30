'use client'

export default function InvestorsHeader() {
  return (
    <div className='border-b border-gray-800'>
      <div className='max-w-4xl mx-auto px-4 py-8'>
        <div className='inline-flex items-center gap-2 mb-6'>
          <div className='px-3 py-1 bg-[#a98b5d]/10 border border-[#a98b5d]/30 rounded-full'>
            <span className='text-[#a98b5d] text-sm font-medium'>Investor Cohort Application</span>
          </div>
        </div>

        <h1 className='text-3xl sm:text-4xl font-bold mb-4'>
          <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
            Apply to Join the NartaQ Founding Cohort as an Investor
          </span>
        </h1>

        <div className='space-y-4 text-gray-300 mb-6'>
          <p className='text-lg'>
            Join an exclusive group of forward-thinking investors shaping the future of startup funding 
            through AI-powered deal sourcing and comprehensive due diligence automation.
          </p>
          
          <p>
            As a founding cohort investor, you'll get early access to our curated deal flow of 
            high-potential startups, AI-enhanced screening tools, and detailed analytics that help 
            you make informed investment decisions faster than traditional methods.
          </p>

          <p>
            Our platform aggregates startups from multiple sources, applies proprietary scoring algorithms, 
            and provides comprehensive founder background checks, market analysis, and financial projections 
            to streamline your investment workflow and maximize portfolio returns.
          </p>
        </div>

        <div className='bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/5 border border-[#a98b5d]/20 rounded-xl p-6'>
          <h3 className='text-[#dcd7ce] font-semibold mb-3'>Exclusive Investor Benefits:</h3>
          <ul className='text-gray-300 space-y-2 text-sm'>
            <li>• AI-curated deal flow matching your investment thesis and criteria</li>
            <li>• Comprehensive startup analytics and risk assessment reports</li>
            <li>• Direct access to pre-screened founders actively seeking funding</li>
            <li>• Real-time market intelligence and competitive landscape analysis</li>
            <li>• Automated due diligence workflows and document management</li>
            <li>• Priority access to exclusive investment rounds and syndicated deals</li>
            <li>• Advanced portfolio tracking and performance optimization tools</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
