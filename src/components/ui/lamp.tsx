'use client'
import React from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  )
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0',
        className
      )}
      style={{ backgroundColor: '#232428' }}
    >
      <div className='relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0'>
        <motion.div
          initial={{ opacity: 0.5, width: '8rem' }}
          whileInView={{ opacity: 1, width: '20rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className='absolute inset-auto right-1/2 h-40 sm:h-48 md:h-56 overflow-visible w-[20rem] sm:w-[25rem] md:w-[30rem] bg-gradient-conic from-[#a98b5d] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]'
        >
          <div
            className='absolute w-[100%] left-0 h-32 sm:h-36 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]'
            style={{ backgroundColor: '#232428' }}
          />
          <div
            className='absolute w-32 sm:w-36 md:w-40 h-[100%] left-0 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]'
            style={{ backgroundColor: '#232428' }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: '8rem' }}
          whileInView={{ opacity: 1, width: '20rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className='absolute inset-auto left-1/2 h-40 sm:h-48 md:h-56 w-[20rem] sm:w-[25rem] md:w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#a98b5d] text-white [--conic-position:from_290deg_at_center_top]'
        >
          <div
            className='absolute w-32 sm:w-36 md:w-40 h-[100%] right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]'
            style={{ backgroundColor: '#232428' }}
          />
          <div
            className='absolute w-[100%] right-0 h-32 sm:h-36 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]'
            style={{ backgroundColor: '#232428' }}
          />
        </motion.div>
        <div
          className='absolute top-1/2 h-40 sm:h-44 md:h-48 w-full translate-y-12 scale-x-150 blur-2xl'
          style={{ backgroundColor: '#232428' }}
        ></div>
        <div className='absolute top-1/2 z-50 h-40 sm:h-44 md:h-48 w-full bg-transparent opacity-10 backdrop-blur-md'></div>
        <div
          className='absolute inset-auto z-50 h-28 sm:h-32 md:h-36 w-[20rem] sm:w-[24rem] md:w-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl'
          style={{ backgroundColor: '#a98b5d' }}
        ></div>
        <motion.div
          initial={{ width: '6rem' }}
          whileInView={{ width: '12rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='absolute inset-auto z-30 h-28 sm:h-32 md:h-36 w-48 sm:w-56 md:w-64 -translate-y-[6rem] rounded-full blur-2xl'
          style={{ backgroundColor: '#dcd7ce' }}
        ></motion.div>
        <motion.div
          initial={{ width: '10rem' }}
          whileInView={{ width: '20rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='absolute inset-auto z-50 h-0.5 w-[20rem] sm:w-[25rem] md:w-[30rem] -translate-y-[7rem]'
          style={{ backgroundColor: '#dcd7ce' }}
        ></motion.div>

        <div
          className='absolute inset-auto z-40 h-36 sm:h-40 md:h-44 w-full -translate-y-[12.5rem]'
          style={{ backgroundColor: '#232428' }}
        ></div>
      </div>

      <div className='relative z-50 flex -translate-y-32 sm:-translate-y-36 md:-translate-y-40 flex-col items-center px-4 sm:px-5'>
        {children}
      </div>
    </div>
  )
}
