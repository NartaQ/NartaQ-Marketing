'use client'

import { useState } from 'react'
import InvestorForm from '@/components/ApplyFounders/investors/InvestorForm'
import InvestorSuccess from '@/components/ApplyFounders/investors/InvestorSuccess'
import InvestorsHeader from '@/components/ApplyFounders/investors/InvestorsHeader'

export default function InvestorApplicationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className='min-h-screen bg-black text-white pt-20'>
      <InvestorsHeader />
      {!isSubmitted ? (
        <>
          {/* Header */}
          <InvestorForm onSubmitted={() => setIsSubmitted(true)} />
        </>
      ) : (
        <InvestorSuccess />
      )}
    </div>
  )
}
