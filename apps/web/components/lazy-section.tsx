'use client'

import { cn } from '@/lib/utils'
import { useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface LazySectionProps {
  children: ReactNode
  fallback?: ReactNode
  className?: string
}

export function LazySection({ children, fallback, className }: LazySectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '100px' })

  return (
    <div ref={ref} className={cn(className)}>
      {isInView ? children : fallback}
    </div>
  )
}