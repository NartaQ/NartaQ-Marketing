'use client'
import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

const transition = {
  type: 'spring' as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className='relative '>
      <motion.p
        transition={{ duration: 0.3 }}
        className='cursor-pointer text-[#232428] hover:opacity-[0.9] dark:text-[#dcd7ce]'
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className='absolute top-[calc(100%)] left-1/2 transform -translate-x-1/2 pt-4'>
              <motion.div
                transition={transition}
                layoutId='active' // layoutId ensures smooth animation
                className='bg-[#dcd7ce] dark:bg-[#232428] backdrop-blur-sm rounded-2xl overflow-hidden border border-[#5c5d63]/20 dark:border-[#5c5d63]/30 shadow-xl'
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className='w-max h-full p-2'
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className='relative rounded-full border border-transparent  flex justify-center space-x-4 px-8 py-2 dark:bg-[#232428] dark:border-[#5c5d63]/30 bg-[#dcd7ce]'
    >
      {children}
    </nav>
  )
}



export const HoveredLink = ({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode
}) => {
  return (
    <Link
      href={rest.href!}
      {...rest}
      className='text-[#dcd7ce7c] hover:text-[#dcd7ce]'
    >
      {children}
    </Link>
  )
}
