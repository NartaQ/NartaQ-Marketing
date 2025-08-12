'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface LogoProps {
 size?: 'xxxxs' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
 iconSize?: 'xxxxs' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
 textSize?: 'xxxxs' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
 customIconHeight?: string // Custom height for icon (e.g., "h-1", "h-2")
 showText?: boolean
 className?: string
 animated?: boolean
}

const sizeClasses = {
 xxxxs: 'h-1',
 xxxs: 'h-1.5',
 xxs: 'h-2',
 xs: 'h-3',
 sm: 'h-4',
 md: 'h-6',
 lg: 'h-8',
 xl: 'h-12',
}

const textSizeClasses = {
 xxxxs: 'h-1',
 xxxs: 'h-2',
 xxs: 'h-3',
 xs: 'h-4',
 sm: 'h-6',
 md: 'h-8',
 lg: 'h-12',
 xl: 'h-16',
}

export function Logo({
 size = 'md',
 iconSize,
 textSize,
 customIconHeight,
 showText = false,
 className = '',
 animated = false,
}: LogoProps) {
 const logoRef = useRef<HTMLDivElement>(null)
 const iconRef = useRef<HTMLImageElement>(null)
 const textRef = useRef<HTMLImageElement>(null)

 useEffect(() => {
  if (!animated || !logoRef.current) return

  const tl = gsap.timeline()

  // Animate icon entrance
  tl.fromTo(
   iconRef.current,
   {
    scale: 0,
    rotation: -180,
    opacity: 0,
   },
   {
    scale: 1,
    rotation: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'back.out(1.7)',
   }
  )

  // Animate text entrance if shown
  if (showText && textRef.current) {
   tl.fromTo(
    textRef.current,
    {
     x: -50,
     opacity: 0,
    },
    {
     x: 0,
     opacity: 1,
     duration: 0.6,
     ease: 'power2.out',
    },
    '-=0.4'
   )
  }

  // Add subtle floating animation
  gsap.to(logoRef.current, {
   y: -2,
   duration: 2,
   ease: 'sine.inOut',
   repeat: -1,
   yoyo: true,
  })
 }, [animated, showText])

 // Use individual sizes if provided, otherwise fall back to main size
 const finalIconSize = iconSize || size
 const finalTextSize = textSize || size

 // Use custom icon height if provided, otherwise use size class
 const iconClassName = customIconHeight
  ? `${customIconHeight} w-auto flex-shrink-0`
  : `${sizeClasses[finalIconSize]} w-auto flex-shrink-0`

 return (
  <div
   ref={logoRef}
   className={`flex items-center gap-1 cursor-pointer hover:scale-105 transition-transform duration-300 ${className}`}
  >
   {/* TR Icon */}
   <img
    ref={iconRef}
    src='/main-tr-icon.svg'
    alt='TR Icon'
    className={iconClassName}
   />

   {/* NARTAQ Text */}
   {showText && (
    <img
     ref={textRef}
     src='/main-tr-text.svg'
     alt='NARTAQ'
     className={`${textSizeClasses[finalTextSize]} w-auto flex-shrink-0`}
    />
   )}
  </div>
 )
}
