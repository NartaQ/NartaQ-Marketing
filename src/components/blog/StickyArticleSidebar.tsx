'use client'

import { useEffect, useRef, useState } from 'react'
import ArticleSidebar from '@/components/blog/ArticleSidebar'

interface StickyArticleSidebarProps {
  category?: {
    title: string
    slug: {
      current: string
    }
  }
  author: {
    name: string
    image?: {
      asset: {
        _ref: string
      }
    }
  }
  authorRole?: string
}

export default function StickyArticleSidebar({ category, author, authorRole }: StickyArticleSidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isSticky, setIsSticky] = useState(false)
  const [isBottom, setIsBottom] = useState(false)
  const [topOffset, setTopOffset] = useState(0)
  const [leftOffset, setLeftOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sidebarRef.current || !containerRef.current) return

      const scrollY = window.scrollY
      const navbarHeight = 96 // Approximate navbar height (24 * 4 = 96px for top-24)
      const heroHeight = window.innerHeight * 0.5 // 50vh hero section
      
      // Get the container's position and dimensions
      const containerRect = containerRef.current.getBoundingClientRect()
      const containerTop = containerRect.top + scrollY
      const containerBottom = containerTop + containerRect.height
      
      // Get sidebar height
      const sidebarHeight = sidebarRef.current.offsetHeight
      
      // Calculate when sidebar should stop (when it reaches the bottom of the article)
      const stopPoint = containerBottom - sidebarHeight - navbarHeight
      
      // Calculate left position for fixed positioning
      const leftPosition = containerRect.left
      
      if (scrollY > heroHeight - navbarHeight && scrollY < stopPoint) {
        // Sticky in the middle
        setIsSticky(true)
        setIsBottom(false)
        setTopOffset(navbarHeight)
        setLeftOffset(leftPosition)
      } else if (scrollY >= stopPoint) {
        // Reached the end - position absolutely at the bottom
        setIsSticky(false)
        setIsBottom(true)
      } else {
        // At the top
        setIsSticky(false)
        setIsBottom(false)
        setTopOffset(0)
      }
    }

    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div ref={containerRef} className='relative h-full'>
      <div
        ref={sidebarRef}
        className='transition-none'
        style={{
          position: isSticky ? 'fixed' : isBottom ? 'absolute' : 'relative',
          top: isSticky ? `${topOffset}px` : isBottom ? 'auto' : 'auto',
          bottom: isBottom ? '0' : 'auto',
          left: isSticky ? `${leftOffset}px` : 'auto',
          width: isSticky || isBottom ? '256px' : 'auto',
        }}
      >
        <ArticleSidebar
          category={category}
          author={author}
          authorRole={authorRole}
        />
      </div>
    </div>
  )
}
