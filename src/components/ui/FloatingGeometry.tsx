'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface FloatingGeometryProps {
  className?: string
  delay?: number
}

export default function FloatingGeometry({ className = '', delay = 0 }: FloatingGeometryProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x: mousePosition.x * 0.01,
        y: mousePosition.y * 0.01
      }}
      transition={{ 
        delay,
        duration: 0.5,
        x: { duration: 0.5, ease: "easeOut" },
        y: { duration: 0.5, ease: "easeOut" }
      }}
    >
      <div className="geometric-shape w-full h-full backdrop-blur-sm" />
    </motion.div>
  )
}