import Link from 'next/link'
import { motion } from 'framer-motion'
import { slide, scale } from '../../anim'

interface LinkData {
  title: string
  href: string
  index: number
}

interface LinkProps {
  data: LinkData
  isActive: boolean
  setSelectedIndicator: (href: string) => void
}

export default function Index({
  data,
  isActive,
  setSelectedIndicator,
}: LinkProps) {
  const { title, href, index } = data

  return (
    <motion.div
      className='relative flex items-center'
      onMouseEnter={() => {
        setSelectedIndicator(href)
      }}
      custom={index}
      variants={slide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className='w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full absolute -left-6 sm:-left-8'
      ></motion.div>
      <Link
        href={href}
        className='text-white no-underline font-light hover:text-gray-300 transition-colors duration-300'
      >
        {title}
      </Link>
    </motion.div>
  )
}
