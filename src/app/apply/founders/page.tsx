'use client'

import { useState } from 'react'
import FoundersHeader from '@/components/ApplyFounders/founders/FoundersHeader'
import FounderForm from '@/components/ApplyFounders/founders/FounderForm'
import FounderSuccess from '@/components/ApplyFounders/founders/FounderSuccess'

export default function FounderApplicationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className='min-h-screen bg-black text-white pt-20'>
      <FoundersHeader />

      {!isSubmitted ? (
        <FounderForm
          onSubmitted={() => {
            setIsSubmitted(true)
          }}
        />
      ) : (
        <FounderSuccess />
      )}
    </div>
  )
}
