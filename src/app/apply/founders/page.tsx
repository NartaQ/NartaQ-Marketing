'use client'

import { useState } from 'react'
import FoundersHeader from '@/components/ApplyFounders/FoundersHeader'
import FounderForm from '@/components/ApplyFounders/FounderForm'
import FounderSuccess from '@/components/ApplyFounders/FounderSuccess'

export default function FounderApplicationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [pitchDeckFiles, setPitchDeckFiles] = useState<File[]>([])

  return (
    <div className='min-h-screen bg-black text-white pt-20'>
      <FoundersHeader />

      {!isSubmitted ? (
        <FounderForm
          onSubmitted={(files) => {
            setPitchDeckFiles(files)
            setIsSubmitted(true)
          }}
        />
      ) : (
        <FounderSuccess pitchDeckFiles={pitchDeckFiles} />
      )}
    </div>
  )
}
