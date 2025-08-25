import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Index() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Set initial dimensions
    updateDimensions()

    // Add event listener
    window.addEventListener('resize', updateDimensions)

    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const initialPath = `M100 0 L200 0 L200 ${dimensions.height} L100 ${
    dimensions.height
  } Q-100 ${dimensions.height / 2} 100 0`
  const targetPath = `M100 0 L200 0 L200 ${dimensions.height} L100 ${
    dimensions.height
  } Q100 ${dimensions.height / 2} 100 0`

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as any },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any },
    },
  }

  return (
    <svg className='absolute top-0 -left-24 w-24 h-full fill-[rgba(169,139,93,0.4)] stroke-none'>
      <motion.path
        variants={curve}
        initial='initial'
        animate='enter'
        exit='exit'
      ></motion.path>
    </svg>
  )
}
