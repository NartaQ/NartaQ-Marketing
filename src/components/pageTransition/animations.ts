import gsap from 'gsap'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

// Set GSAP defaults for faster, smoother animations
gsap.defaults({
  ease: 'power3.inOut',
  duration: 0.3,
})

// Three-step curve animation: 1) Curve covers screen, 2) Show page title, 3) Curve exits through top
export const animatePageIn = () => {
  const curvePath = document.getElementById('curve-path')
  const pageNameDisplay = document.getElementById('page-name-display')
  const curveTransition = document.getElementById('curve-transition')
  if (curvePath && pageNameDisplay && curveTransition) {
    const tl = gsap.timeline()
    // STEP 1: Start with curve covering the screen (continuing from animatePageOut)
    // Set initial state immediately to prevent any flash
    tl.set(curveTransition, {
      visibility: 'visible',
    })
      .set(curvePath, {
        attr: { d: 'M 0,0 Q 50,-15 100,0 L 100,100 Q 50,115 0,100 Z' }, // More curved with deeper curves
      })
      .set(pageNameDisplay, {
        opacity: 0,
        y: 30,
      })
      // STEP 2: Smooth page title entrance with beautiful animation
      .to(pageNameDisplay, {
        opacity: 1,
        y: 0,
        duration: 0.8, // Increased from 0.5
        ease: 'back.out(1.4)',
      })
      // STEP 3: Curve exits through the TOP with curved bottom (title fades simultaneously)
      .to(pageNameDisplay, {
        opacity: 0,
        scale: 0.9,
        y: -500, // Move text up slightly as it fades
        duration: 0.6, // Increased from 0.4
        ease: 'power3.in',
      })
      .to(
        curvePath,
        {
          attr: { d: 'M 0,-100 Q 50,-115 100,-100 L 100,0 Q 50,15 0,0 Z' }, // More curved exit with deeper curves
          duration: 0.6, // Increased from 0.4
          ease: 'power3.in',
        },
        '<'
      ) // Start at the same time as title fade
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
    // STEP 1: Show curve sweeping up from bottom to cover screen
    tl.set(curveTransition, {
      visibility: 'visible',
    })
      .set(curvePath, {
        attr: { d: 'M 0,120 Q 50,135 100,120 L 100,100 Q 50,85 0,100 Z' }, // More curved start position
      })
      .set(pageNameDisplay, {
        opacity: 0,
        scale: 0.9,
      })

      .to(curvePath, {
        attr: { d: 'M 0,0 Q 50,-15 100,0 L 100,100 Q 50,115 0,100 Z' }, // More curved covering position
        duration: 0.6, // Increased from 0.4
        ease: 'power3.out',
      })
      // STEP 2: Navigate immediately when screen is covered
      .call(() => {
        router.push(href)
      })
  }
}
