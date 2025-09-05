'use client'

import Link from 'next/link'
import { useState } from 'react'
import { X } from 'lucide-react'

export default function HiringBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-[var(--lion)] text-black">
      <div className="relative flex items-center justify-center px-4 py-2 text-sm font-medium">
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline">🚀</span>
          <span>We're Hiring!</span>
          <Link 
            href="/careers"
            className="underline hover:no-underline transition-all duration-200 font-semibold hover:opacity-80"
          >
            Join our team
          </Link>
        </div>
        
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 p-1 hover:bg-black/10 rounded-full transition-colors duration-200"
          aria-label="Close banner"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}