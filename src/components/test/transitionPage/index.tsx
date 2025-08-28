'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { text, curve, translate } from './anim'

const routes: Record<string, string> = {
  '/': 'Home',
  '/aboutx': 'About',
  '/contact': 'Contact',
}

const anim = (variants: Variants) => {
  return {
    variants,
    initial: 'initial' as const,
    animate: 'enter' as const,
    exit: 'exit' as const,
  }
}

export default function Curve({
  children,
  backgroundColor,
}: {
  children: React.ReactNode
  backgroundColor?: string
}) {
  const pathname = usePathname() ?? ''
  const [dimensions, setDimensions] = useState<{
    width: number | null
    height: number | null
  }>({
    width: null,
    height: null,
  })

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    resize()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className='page curve z-[99999]' style={{ backgroundColor }}>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className='background'
      />
      <motion.p className='route' {...anim(text)}>
        {routes[pathname] ?? ''}
      </motion.p>
      {dimensions.width != null && dimensions.height != null && (
        <SVG width={dimensions.width} height={dimensions.height} />
      )}
      {children}
    </div>
  )
}

const SVG = ({ height, width }: { height: number; width: number }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  )
}
