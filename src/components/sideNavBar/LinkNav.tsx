import Link from 'next/link'
import { motion } from 'framer-motion'
import { slide, scale } from './anim'

interface LinkData {
  title: string
  href: string
  index: number
}

interface LinkProps {
  data: LinkData
  isActive: boolean
  setSelectedIndicator: (href: string) => void
  handleNavigation?: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void
}

export default function Index({
  data,
  isActive,
  setSelectedIndicator,
  handleNavigation,
}: LinkProps) {
  const { title, href, index } = data

  return (
    <motion.div
      className='relative flex items-center flex-col'
      onMouseEnter={() => {
        setSelectedIndicator(href)
      }}
      custom={index}
      variants={slide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <Link
        title={title}
        href={href}
        className='text-white no-underline font-light hover:text-gray-300 transition-colors duration-300 font-serif text-5xl'
        onClick={
          handleNavigation ? (e) => handleNavigation(e, href) : undefined
        }
      >
        {title}
      </Link>
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className=' w-full h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent '
      ></motion.div>
    </motion.div>
  )
}
