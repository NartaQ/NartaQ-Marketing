'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
 gsap.registerPlugin(ScrollTrigger)
}

export function useAdvancedAnimations() {
 const initialized = useRef(false)

 useEffect(() => {
  if (initialized.current || typeof window === 'undefined') return
  initialized.current = true

  // Smooth page entrance animation
  gsap.fromTo('body',
   { opacity: 0 },
   { opacity: 1, duration: 0.8, ease: 'power2.out' }
  )

  // Advanced text animations
  gsap.utils.toArray('.split-text').forEach((element: any) => {
   const text = element.textContent
   const chars = text.split('').map((char: string) =>
    char === ' ' ? '&nbsp;' : `<span class="char">${char}</span>`
   ).join('')
   element.innerHTML = chars

   gsap.fromTo(element.querySelectorAll('.char'),
    { opacity: 0, y: 50, rotationX: -90 },
    {
     opacity: 1,
     y: 0,
     rotationX: 0,
     duration: 0.8,
     stagger: 0.02,
     ease: 'back.out(1.7)',
     scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
     }
    }
   )
  })

  // Morphing shapes animation
  gsap.utils.toArray('.morph-shape').forEach((element: any) => {
   gsap.to(element, {
    morphSVG: element.dataset.morph,
    duration: 2,
    ease: 'power2.inOut',
    scrollTrigger: {
     trigger: element,
     start: 'top 70%',
     toggleActions: 'play none none reverse'
    }
   })
  })

  // Advanced parallax with multiple layers
  gsap.utils.toArray('.parallax-layer').forEach((element: any) => {
   const speed = element.dataset.speed || 0.5
   gsap.to(element, {
    yPercent: -100 * speed,
    ease: 'none',
    scrollTrigger: {
     trigger: element,
     start: 'top bottom',
     end: 'bottom top',
     scrub: true,
     invalidateOnRefresh: true
    }
   })
  })

  // Scroll-triggered number counters with easing
  gsap.utils.toArray('.advanced-counter').forEach((element: any) => {
   const target = parseInt(element.dataset.target || '0')
   const suffix = element.dataset.suffix || ''
   const prefix = element.dataset.prefix || ''

   gsap.fromTo(element,
    { textContent: 0 },
    {
     textContent: target,
     duration: 3,
     ease: 'power2.out',
     snap: { textContent: 1 },
     onUpdate: function () {
      element.textContent = prefix + Math.floor(this.targets()[0].textContent).toLocaleString() + suffix
     },
     scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
     }
    }
   )
  })

  // Card flip animations
  gsap.utils.toArray('.flip-card').forEach((element: any, index) => {
   gsap.fromTo(element,
    { rotationY: -180, opacity: 0 },
    {
     rotationY: 0,
     opacity: 1,
     duration: 1.2,
     delay: index * 0.1,
     ease: 'power2.out',
     scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
     }
    }
   )
  })

  // Liquid morphing backgrounds
  gsap.utils.toArray('.liquid-bg').forEach((element: any) => {
   const tl = gsap.timeline({ repeat: -1, yoyo: true })

   tl.to(element, {
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    duration: 4,
    ease: 'sine.inOut'
   }).to(element, {
    borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
    duration: 4,
    ease: 'sine.inOut'
   })
  })

  // Scroll-based color transitions
  gsap.utils.toArray('.color-transition').forEach((element: any) => {
   const colors = element.dataset.colors?.split(',') || ['#3b82f6', '#8b5cf6']

   gsap.to(element, {
    backgroundColor: colors[1],
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
     trigger: element,
     start: 'top 80%',
     end: 'bottom 20%',
     scrub: 1,
     toggleActions: 'play reverse play reverse'
    }
   })
  })

  // Advanced stagger with custom timing
  gsap.utils.toArray('.advanced-stagger').forEach((container: any) => {
   const items = container.querySelectorAll('.stagger-child')

   gsap.fromTo(items,
    {
     opacity: 0,
     y: 60,
     scale: 0.8,
     rotation: -10
    },
    {
     opacity: 1,
     y: 0,
     scale: 1,
     rotation: 0,
     duration: 1.2,
     stagger: {
      amount: 0.8,
      from: 'random',
      ease: 'power2.out'
     },
     ease: 'back.out(1.7)',
     scrollTrigger: {
      trigger: container,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
     }
    }
   )
  })

  return () => {
   ScrollTrigger.getAll().forEach(trigger => trigger.kill())
   gsap.killTweensOf('*')
  }
 }, [])
}