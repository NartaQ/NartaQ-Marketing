import gsap from 'gsap'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

// Enhanced animation with multiple effects to choose from
export const animatePageIn = () => {
  const banners = [
    document.getElementById('banner-1'),
    document.getElementById('banner-2'),
    document.getElementById('banner-3'),
    document.getElementById('banner-4'),
  ]

  if (banners.every((banner) => banner)) {
    const tl = gsap.timeline()

    // Start with banners covering the screen (from top)
    tl.set(banners, {
      yPercent: 0,
    }).to(banners, {
      yPercent: 100, // Move down and out of view
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.inOut',
    })
  }
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const banners = [
    document.getElementById('banner-1'),
    document.getElementById('banner-2'),
    document.getElementById('banner-3'),
    document.getElementById('banner-4'),
  ]

  if (banners.every((banner) => banner)) {
    const tl = gsap.timeline()

    // Start from below screen
    tl.set(banners, {
      yPercent: 100,
    }).to(banners, {
      yPercent: 0, // Move up to cover screen
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.in',
      onComplete: () => {
        router.push(href)
      },
    })
  }
}

// Alternative diagonal wipe animation
export const animatePageInDiagonal = () => {
  const banners = [
    document.getElementById('banner-1'),
    document.getElementById('banner-2'),
    document.getElementById('banner-3'),
    document.getElementById('banner-4'),
  ]

  if (banners.every((banner) => banner)) {
    const tl = gsap.timeline()

    tl.set(banners, {
      yPercent: 0,
      xPercent: 0,
    }).to(banners, {
      yPercent: 100,
      xPercent: -20,
      duration: 0.9,
      stagger: 0.1,
      ease: 'power4.inOut',
      rotation: 2,
      transformOrigin: 'top left',
    })
  }
}

export const animatePageOutDiagonal = (
  href: string,
  router: AppRouterInstance
) => {
  const banners = [
    document.getElementById('banner-1'),
    document.getElementById('banner-2'),
    document.getElementById('banner-3'),
    document.getElementById('banner-4'),
  ]

  if (banners.every((banner) => banner)) {
    const tl = gsap.timeline()

    tl.set(banners, {
      yPercent: -100,
      xPercent: 20,
      rotation: -2,
    }).to(banners, {
      yPercent: 0,
      xPercent: 0,
      rotation: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power3.out',
      transformOrigin: 'bottom right',
      onComplete: () => {
        router.push(href)
      },
    })
  }
}

// Curtain effect animation
export const animatePageInCurtain = () => {
  const leftBanners = [
    document.getElementById('banner-1'),
    document.getElementById('banner-2'),
  ]
  const rightBanners = [
    document.getElementById('banner-3'),
    document.getElementById('banner-4'),
  ]

  if ([...leftBanners, ...rightBanners].every((banner) => banner)) {
    const tl = gsap.timeline()

    tl.set([...leftBanners, ...rightBanners], {
      xPercent: 0,
    })
      .to(leftBanners, {
        xPercent: -100,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.inOut',
      })
      .to(
        rightBanners,
        {
          xPercent: 100,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.inOut',
        },
        '<'
      ) // Start at the same time as left banners
  }
}

export const animatePageOutCurtain = (
  href: string,
  router: AppRouterInstance
) => {
  const leftBanners = [
    document.getElementById('banner-1'),
    document.getElementById('banner-2'),
  ]
  const rightBanners = [
    document.getElementById('banner-3'),
    document.getElementById('banner-4'),
  ]

  if ([...leftBanners, ...rightBanners].every((banner) => banner)) {
    const tl = gsap.timeline()

    tl.set(leftBanners, {
      xPercent: -100,
    })
      .set(rightBanners, {
        xPercent: 100,
      })
      .to(leftBanners, {
        xPercent: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      })
      .to(
        rightBanners,
        {
          xPercent: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          onComplete: () => {
            router.push(href)
          },
        },
        '<'
      )
  }
}

// Smooth fade with scale animation
export const animatePageInScale = () => {
  const banners = [
    document.getElementById('banner-1'),
    document.getElementById('banner-2'),
    document.getElementById('banner-3'),
    document.getElementById('banner-4'),
  ]
  const overlay = document.getElementById('transition-overlay')

  if (banners.every((banner) => banner) && overlay) {
    const tl = gsap.timeline()

    tl.set(overlay, {
      opacity: 1,
    })
      .set(banners, {
        scale: 1,
        opacity: 1,
      })
      .to(banners, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power2.inOut',
      })
      .to(
        overlay,
        {
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out',
        },
        '-=0.2'
      )
  }
}

export const animatePageOutScale = (
  href: string,
  router: AppRouterInstance
) => {
  const banners = [
    document.getElementById('banner-1'),
    document.getElementById('banner-2'),
    document.getElementById('banner-3'),
    document.getElementById('banner-4'),
  ]
  const overlay = document.getElementById('transition-overlay')

  if (banners.every((banner) => banner) && overlay) {
    const tl = gsap.timeline()

    tl.set(overlay, {
      opacity: 0,
    })
      .set(banners, {
        scale: 1.2,
        opacity: 0,
      })
      .to(overlay, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.in',
      })
      .to(
        banners,
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out',
          onComplete: () => {
            router.push(href)
          },
        },
        '-=0.2'
      )
  }
}
