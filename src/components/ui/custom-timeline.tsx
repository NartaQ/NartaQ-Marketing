'use client'
import { useScroll, useTransform, motion } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'

interface TimelineEntry {
  id: number
  title: string
  content: React.ReactNode
}

export const CustomTimeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div
      className='w-full bg-transparent font-sans px-4 md:px-8'
      ref={containerRef}
    >
      <div ref={ref} className='relative max-w-7xl mx-auto pb-10 md:pb-20'>
        {data.map((item) => (
          <div
            key={item.id}
            className='flex justify-start pt-8 md:pt-16 lg:pt-20 gap-4 md:gap-10'
          >
            <div className='sticky flex flex-col md:flex-row z-40 items-center top-32 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full'>
              <div className='h-10 md:h-12 absolute left-2 md:left-3 w-10 md:w-12 rounded-full bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/40 flex items-center justify-center border border-[#a98b5d]/30'>
                <div className='h-4 md:h-6 w-4 md:w-6 rounded-full bg-[#a98b5d] border-2 border-[#dcd7ce]/20' />
              </div>
              <h3 className='hidden md:block text-lg md:text-2xl lg:text-3xl xl:text-4xl font-light text-[#a98b5d] tracking-wide md:pl-16 lg:pl-20'>
                {item.title}
              </h3>
            </div>

            <div className='relative pl-16 md:pl-4 pr-4 w-full'>
              <h3 className='md:hidden block text-xl mb-4 md:mb-6 text-left font-light text-[#a98b5d] tracking-wide'>
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className='absolute left-6 md:left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent from-[0%] via-[#a98b5d]/30 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]'
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#a98b5d] via-[#dcd7ce]/60 to-transparent from-[0%] via-[50%] rounded-full'
          />
        </div>
      </div>
    </div>
  )
}
