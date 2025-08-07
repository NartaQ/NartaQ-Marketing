'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
 gsap.registerPlugin(ScrollTrigger)
}

export function useOptimizedAnimations() {
 const initialized = useRef(false)

 useEffect(() => {
  if (initialized.current || typeof window === 'undefined') return
  initialized.current = true

  // Smooth page entrance
  gsap.fromTo('body',
   { opacity: 0 },
   { opacity: 1, duration: 0.6, ease: 'power2.out' }
  )

  // Optimized scroll animations
  gsap.utils.toArray('.animate-on-scroll').forEach((element: any) => {
   gsap.fromTo(element,
    { opacity: 0, y: 30 },
    {
     opacity: 1,
     y: 0,
     duration: 0.8,
     ease: 'power2.out',
     scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
     }
    }
   )
  })

  // Stagger animations for groups
  gsap.utils.toArray('.stagger-container').forEach((container: any) => {
   const items = container.querySelectorAll('.stagger-item')

   gsap.fromTo(items,
    { opacity: 0, y: 40, scale: 0.95 },
    {
     opacity: 1,
     y: 0,
     scale: 1,
     duration: 0.6,
     stagger: 0.1,
     ease: 'power2.out',
     scrollTrigger: {
      trigger: container,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
     }
    }
   )
  })

  // Counter animations
  gsap.utils.toArray('.counter').forEach((element: any) => {
   const target = parseInt(element.dataset.target || '0')
   const suffix = element.dataset.suffix || ''
   const prefix = element.dataset.prefix || ''

   gsap.fromTo({ value: 0 },
    { value: target },
    {
     duration: 2,
     ease: 'power2.out',
     onUpdate: function () {
      const currentValue = Math.floor(this.targets()[0].value)
      element.textContent = prefix + currentValue.toLocaleString() + suffix
     },
     scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
     }
    }
   )
  })

  // Magnetic effect for buttons
  gsap.utils.toArray('.magnetic').forEach((element: any) => {
   const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(element, {
     x: x * 0.1,
     y: y * 0.1,
     duration: 0.3,
     ease: 'power2.out'
    })
   }

   const handleMouseLeave = () => {
    gsap.to(element, {
     x: 0,
     y: 0,
     duration: 0.5,
     ease: 'elastic.out(1, 0.3)'
    })
   }

   element.addEventListener('mousemove', handleMouseMove)
   element.addEventListener('mouseleave', handleMouseLeave)

   return () => {
    element.removeEventListener('mousemove', handleMouseMove)
    element.removeEventListener('mouseleave', handleMouseLeave)
   }
  })

  // Gradient animation
  const style = document.createElement('style')
  style.textContent = `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 3s ease infinite;
      }
      
      .bg-300\\% {
        background-size: 300% 300%;
      }
    `
  document.head.appendChild(style)

  return () => {
   ScrollTrigger.getAll().forEach(trigger => trigger.kill())
   gsap.killTweensOf('*')
   document.head.removeChild(style)
  }
 }, [])
}

export function useIntersectionObserver() {
 useEffect(() => {
  const observer = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      entry.target.classList.add('animate-in')
     }
    })
   },
   { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  document.querySelectorAll('.observe').forEach((el) => {
   observer.observe(el)
  })

  return () => observer.disconnect()
 }, [])
}