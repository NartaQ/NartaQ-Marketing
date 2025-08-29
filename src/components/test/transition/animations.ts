import gsap from 'gsap'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

// Set GSAP defaults for faster, smoother animations
gsap.defaults({
  ease: 'power3.inOut',
  duration: 0.3,
})

// Three-step curve animation: 1) Curve covers screen, 2) Show page title, 3) Curve exits
export const animatePageIn = () => {
  const curvePath = document.getElementById('curve-path')
  const pageNameDisplay = document.getElementById('page-name-display')
  const curveTransition = document.getElementById('curve-transition')

  if (curvePath && pageNameDisplay && curveTransition) {
    const tl = gsap.timeline()

    // STEP 1: Start with curve covering the screen (continuing from animatePageOut)
    tl.set(curvePath, {
      attr: { d: 'M 0,0 Q 50,-5 100,0 L 100,100 L 0,100 Z' }, // Curve covers screen completely
    })
      .set(pageNameDisplay, {
        opacity: 0,
        scale: 0.7,
        y: 30,
      })
      .set(curveTransition, {
        visibility: 'visible',
      })

      // STEP 2: Smooth page title entrance with beautiful animation
      .to(pageNameDisplay, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: 'back.out(1.4)',
      })

      // STEP 3: Curve exits smoothly (title fades simultaneously)
      .to(pageNameDisplay, {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        ease: 'power3.in',
      })
      .to(curvePath, {
        attr: { d: 'M 0,120 Q 50,115 100,120 L 100,100 L 0,100 Z' }, // Curve exits bottom
        duration: 0.4,
        ease: 'power3.in',
      }, '<') // Start at the same time as title fade

      // Hide transition element
      .set(curveTransition, {
        visibility: 'hidden',
      })
  }
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const curvePath = document.getElementById('curve-path')
  const pageNameDisplay = document.getElementById('page-name-display')
  const curveTransition = document.getElementById('curve-transition')

  if (curvePath && pageNameDisplay && curveTransition) {
    const tl = gsap.timeline()

    // STEP 1: Show curve sweeping up to cover screen (no page name shown)
    tl.set(curveTransition, {
      visibility: 'visible',
    })
      .set(curvePath, {
        attr: { d: 'M 0,120 Q 50,115 100,120 L 100,100 L 0,100 Z' }, // Start below screen
      })
      .set(pageNameDisplay, {
        opacity: 0,
        scale: 0.9,
      })
      .to(curvePath, {
        attr: { d: 'M 0,0 Q 50,-5 100,0 L 100,100 L 0,100 Z' }, // Curve covers screen
        duration: 0.4,
        ease: 'power3.out',
      })

      // STEP 2: Navigate immediately when screen is covered (no page name display)
      .call(() => {
        router.push(href)
      })
  }
}

// Fast wave curve animation
export const animatePageInWave = () => {
  const curvePath = document.getElementById('curve-path')
  const pageNameDisplay = document.getElementById('page-name-display')
  const curveTransition = document.getElementById('curve-transition')

  if (curvePath && pageNameDisplay && curveTransition) {
    const tl = gsap.timeline()

    tl.set(curvePath, {
      attr: { d: 'M 0,0 Q 25,5 50,0 Q 75,5 100,0 L 100,0 L 0,0 Z' }, // Wave at top
    })
      .set(pageNameDisplay, {
        opacity: 1,
        scale: 1,
      })
      .set(curveTransition, {
        visibility: 'visible',
      })

      // Immediately start wave animation
      .to(pageNameDisplay, {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
        ease: 'power3.in',
      })
      .to(curvePath, {
        attr: { d: 'M 0,120 Q 25,125 50,120 Q 75,125 100,120 L 100,0 L 0,0 Z' },
        duration: 0.6,
        ease: 'power4.in',
      }, '-=0.1')

      .set(curveTransition, {
        visibility: 'hidden',
      })
  }
}

// Fast liquid curve animation
export const animatePageInLiquid = () => {
  const curvePath = document.getElementById('curve-path')
  const pageNameDisplay = document.getElementById('page-name-display')
  const curveTransition = document.getElementById('curve-transition')

  if (curvePath && pageNameDisplay && curveTransition) {
    const tl = gsap.timeline()

    tl.set(curvePath, {
      attr: { d: 'M 0,0 Q 20,3 40,0 Q 60,3 80,0 Q 90,1 100,0 L 100,0 L 0,0 Z' },
    })
      .set(pageNameDisplay, {
        opacity: 1,
        scale: 1,
        rotation: 0,
      })
      .set(curveTransition, {
        visibility: 'visible',
      })

      // Fast liquid motion
      .to(pageNameDisplay, {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
        ease: 'power3.in',
      })
      .to(curvePath, {
        attr: { d: 'M 0,120 Q 20,125 40,120 Q 60,125 80,120 Q 90,122 100,120 L 100,0 L 0,0 Z' },
        duration: 0.5,
        ease: 'power4.in',
      }, '-=0.1')

      .set(curveTransition, {
        visibility: 'hidden',
      })
  }
}
