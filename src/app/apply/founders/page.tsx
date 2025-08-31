'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function FounderApplicationRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/apply')
  }, [router])

  return null
}
