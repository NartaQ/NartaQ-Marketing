'use client'

import { useReveal } from '@/hooks/use-reveal'

interface RevealWrapperProps {
  children: React.ReactNode
  className?: string
  threshold?: number
}

export default function RevealWrapper({
  children,
  className = '',
  threshold = 0.1,
}: RevealWrapperProps) {
  const [ref, isVisible] = useReveal(threshold)

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      } ${className}`}
    >
      {children}
    </div>
  )
}
