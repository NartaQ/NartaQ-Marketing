import React from 'react'
import { cn } from '@/lib/utils'

interface SpotlightSectionProps {
  children: React.ReactNode
  className?: string
}

export function SpotlightSection({
  children,
  className,
}: SpotlightSectionProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-black/[0.96] antialiased bg-grid-white/[0.02]',
        className
      )}
    >
      <div className='relative z-10'>{children}</div>
    </div>
  )
}
