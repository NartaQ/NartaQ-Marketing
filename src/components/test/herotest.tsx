'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import { Gem, Rocket, ArrowRight } from 'lucide-react'

import Container from '../ui/container'

const IS_MOBILE_SCREEN_WIDTH = 639

// Sample items with images instead of videos
const ITEMS = [
  {
    image: {
      src: '/logo/investor.png',
      alt: 'Startups & Investors',
    },
    icon: Gem,
    title: 'Startups & Investors',
    description:
      'Credit‑based deck reviews, curated introductions, and transparent progress tracking for premium investment opportunities.',
    features: [
      'AI-powered rubric analysis',
      'Curated investor outreach',
      'Progress tracking & follow-ups',
    ],
    linkLabel: 'Explore pathway',
    linkUrl: '/investors-startups',
  },
  {
    image: {
      src: '/logo/providers.png',
      alt: 'Startups & Providers',
    },
    icon: Rocket,
    title: 'Startups & Providers',
    description:
      'Scoped bounties, tri‑party orchestration, milestone protections, and optional intermediation for premium service delivery.',
    features: [
      'Private bounties with curated matching',
      'Milestone releases & escrow protection',
      'Hybrid compensation (cash + equity)',
    ],
    linkLabel: 'Explore pathway',
    linkUrl: '/companies-providers',
  },
]

// Image Card Component
interface ImageCardProps {
  item: (typeof ITEMS)[0]
  isActive: boolean
  onClick: () => void
  className?: string
}

const ImageCard = ({ item, isActive, onClick, className }: ImageCardProps) => {
  const IconComponent = item.icon

  return (
    <div
      className={clsx(
        'relative cursor-pointer overflow-hidden rounded-2xl bg-[#3e3f44] transition-all duration-700 hover:scale-105',
        className
      )}
      onClick={onClick}
    >
      <div className='relative aspect-video'>
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          className='object-cover transition-transform duration-700'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#232428]/90 via-[#232428]/40 to-transparent' />
      </div>

      <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
        {/* Card header with icon */}
        <div className='flex items-center gap-4 mb-4'>
          <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
            <IconComponent className='w-6 h-6 text-[#a98b5d]' />
          </div>
          <div>
            <h3
              className={clsx(
                'font-medium text-[#dcd7ce] mb-1',
                isActive ? 'text-xl' : 'text-lg'
              )}
            >
              {item.title}
            </h3>
            <div className='w-12 h-0.5 bg-[#a98b5d]'></div>
          </div>
        </div>

        <p className='text-sm text-[#dcd7ce]/90 mb-4 leading-relaxed font-light'>
          {item.description}
        </p>

        {/* Feature list - always show */}
        {item.features && (
          <div className='space-y-3 mb-4'>
            {item.features.map((feature, index) => (
              <div key={index} className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-[#a98b5d] flex-shrink-0'></div>
                <span className='text-sm text-[#dcd7ce] font-medium'>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Premium hover indicator */}
        {isActive && (
          <div className='flex items-center gap-2 text-[#a98b5d] group-hover:translate-x-1 transition-transform duration-300'>
            <span className='text-sm font-medium'>{item.linkLabel}</span>
            <ArrowRight className='w-4 h-4' />
          </div>
        )}
      </div>
    </div>
  )
}

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { width: windowWidth } = useWindowSize()
  const [_isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(windowWidth <= IS_MOBILE_SCREEN_WIDTH)
  }, [windowWidth])

  return (
    <section className='hero safe-paddings relative pt-[168px] xl:pt-[152px] lg:pt-32 md:pt-[88px] bg-[#232428]'>
      <Container className='relative z-10 xl:px-8' size='500'>
        {/* Hero Content - Integrated from EcosystemSection */}
        <div className='max-w-6xl mx-auto text-center space-y-8 relative z-10 mb-16'>
          <div className='space-y-6'>
            <div className='flex justify-center mb-4'>
              <div className='bg-[#3e3f44]/20 backdrop-blur-sm px-8 py-3 rounded-full border border-[#a98b5d]/20'>
                <span className='text-sm font-medium text-[#a98b5d] tracking-wider'>
                  NOT THE USUAL APPROACH
                </span>
              </div>
            </div>

            <h1 className='text-4xl md:text-5xl font-light text-[#dcd7ce]'>
              We don&apos;t do{' '}
              <span className='font-medium text-[#a98b5d]'>everything</span> for{' '}
              <span className='font-medium text-[#a98b5d]'>everyone</span>
            </h1>

            <div className='w-32 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto'></div>

            <p className='text-xl text-[#dcd7ce] font-light leading-relaxed max-w-2xl mx-auto'>
              Two big problems. Two focused solutions.
              <br />
              Choose the one that matters to you.
            </p>
          </div>
        </div>

        <div className='mt-[74px] flex flex-col gap-y-4 xl:mt-16 lg:mt-14 sm:mt-9 sm:flex-row sm:gap-x-2.5 sm:gap-y-0'>
          {ITEMS.map((item, index) => (
            <ImageCard
              key={index}
              item={item}
              isActive={currentImageIndex === index}
              onClick={() => setCurrentImageIndex(index)}
              className={clsx(
                'transition-all duration-700 flex-1',
                currentImageIndex === index ? 'sm:flex-[2]' : ''
              )}
            />
          ))}
        </div>

        {/* Premium footer element */}
        <div className='mt-20 text-center'>
          <p className='text-[#dcd7ce] font-light italic'>
            &ldquo;Where exclusive opportunities meet trusted execution&rdquo;
          </p>
        </div>
      </Container>

      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#232428] via-[#3e3f44] to-[#232428]' />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#a98b5d]/20 via-transparent to-transparent' />
    </section>
  )
}

export default Hero
