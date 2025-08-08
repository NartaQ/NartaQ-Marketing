'use client'

import { cn } from '@investi/ui/lib/utils'
import { ReactNode } from 'react'

interface MarqueeProps {
 className?: string
 reverse?: boolean
 pauseOnHover?: boolean
 children?: ReactNode
 vertical?: boolean
 repeat?: number
 speed?: 'slow' | 'normal' | 'fast'
}

export function Marquee({
 className,
 reverse,
 pauseOnHover = false,
 children,
 vertical = false,
 repeat = 4,
 speed = 'normal',
 ...props
}: MarqueeProps) {
 const speedMap = {
  slow: 'animate-marquee-slow',
  normal: 'animate-marquee',
  fast: 'animate-marquee-fast'
 }

 return (
  <div
   {...props}
   className={cn(
    'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
    {
     'flex-row': !vertical,
     'flex-col': vertical,
    },
    className,
   )}
  >
   {Array(repeat)
    .fill(0)
    .map((_, i) => (
     <div
      key={i}
      className={cn(
       'flex shrink-0 justify-around [gap:var(--gap)]',
       {
        'animate-marquee flex-row': !vertical,
        'animate-marquee-vertical flex-col': vertical,
        'group-hover:[animation-play-state:paused]': pauseOnHover,
        '[animation-direction:reverse]': reverse,
       },
       speedMap[speed]
      )}
     >
      {children}
     </div>
    ))}
  </div>
 )
}