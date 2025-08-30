'use client'

export default function FoundersHeader() {
  return (
    <div className='border-b border-gray-800'>
      <div className='max-w-4xl mx-auto px-4 py-8'>
        <div className='inline-flex items-center gap-2 mb-6'>
          <div className='px-3 py-1 bg-[#a98b5d]/10 border border-[#a98b5d]/30 rounded-full'>
            <span className='text-[#a98b5d] text-sm font-medium'>Founding Cohort Application</span>
          </div>
        </div>

        <h1 className='text-3xl sm:text-4xl font-bold mb-4'>
          <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
            Apply to Join the NartaQ Founding Cohort as a Founder
          </span>
        </h1>

        <div className='space-y-4 text-gray-300 mb-6'>
          <p className='text-lg'>
            Connect with investors who understand your vision and want to fund your growth. 
            Join a select group of innovative founders building the future of startups.
          </p>
          
          <p>
            As a founding cohort member, you'll get exclusive access to our AI-powered investor 
            matching platform, comprehensive due diligence support, and direct connections to 
            vetted angel investors and VCs actively seeking opportunities in your sector.
          </p>

          <p>
            Our platform has helped founders raise over $50M in combined funding through 
            intelligent matching algorithms that connect startups with the right investors 
            based on industry focus, stage preferences, and investment criteria.
          </p>
        </div>

        <div className='bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/5 border border-[#a98b5d]/20 rounded-xl p-6'>
          <h3 className='text-[#dcd7ce] font-semibold mb-3'>What You'll Get:</h3>
          <ul className='text-gray-300 space-y-2 text-sm'>
            <li>• AI-powered investor matching based on your startup profile</li>
            <li>• Automated due diligence preparation and documentation</li>
            <li>• Direct access to our curated network of 500+ active investors</li>
            <li>• Real-time feedback on your pitch deck and funding strategy</li>
            <li>• Priority placement in investor deal flow and exclusive events</li>
            <li>• Comprehensive valuation analysis using our proprietary AI models</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
