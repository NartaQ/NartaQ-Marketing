'use client'

export default function InvestorsHeader() {
  return (
    <div className='border-b border-gray-800'>
      <div className='max-w-4xl mx-auto px-4 py-6'>
        <div className='inline-flex items-center gap-2 mb-9' />

        <h1 className='text-3xl sm:text-4xl font-bold mb-2'>
          <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
            Apply to Join the NartaQ Founding Cohort as an Investor
          </span>
        </h1>

        <p className='text-gray-400'>
          Join an exclusive group of forward-thinking investors shaping the
          future of startup funding.
        </p>
      </div>
    </div>
  )
}
