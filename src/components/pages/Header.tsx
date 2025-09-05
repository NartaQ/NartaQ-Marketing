'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { HoveredLink, Menu, MenuItem } from '../ui/navbar-menu'
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  NavbarButton,
} from '../ui/resizable-navbar'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '../pageTransition/animations'

interface HeaderProps {
  className?: string
  onMobileMenuToggle?: () => void
  isMobileMenuOpen?: boolean
}

export default function Header({
  className,
  onMobileMenuToggle,
  isMobileMenuOpen = false,
}: HeaderProps) {
  const [active, setActive] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  // Provide a default no-op function if onMobileMenuToggle is undefined
  const handleMobileToggle = onMobileMenuToggle || (() => {})

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()

    // Close mobile menu if open (via parent callback)
    if (isMobileMenuOpen) {
      handleMobileToggle()
    }

    // Don't animate if we're already on the page
    if (pathname === href) return

    // Trigger page transition animation
    animatePageOut(href, router)
  }

  return (
    <Navbar className={cn('fixed top-15 z-50', className)}>
      {/* Desktop Navigation */}
      <NavBody>
        <div className='w-full flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Logo */}
          <Link
            title='Go to Home'
            className='flex items-center gap-2 p-1 group relative z-20'
            href='/'
            onClick={(e) => handleNavigation(e, '/')}
          >
            <div className='relative'>
              <Image
                src='/logo/main-tr-hor.svg'
                alt='Nartaq Icon'
                width={167}
                title='nartaqLogo'
                height={32}
                fetchPriority='low'
                className='relative z-10'
              />
            </div>
          </Link>

          {/* Desktop Menu Items - Centered */}
          <div className='absolute left-1/2 transform -translate-x-1/2 hidden lg:flex'>
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item='About'>
                <div className='flex flex-col space-y-4 text-sm p-4'>
                  <HoveredLink
                    href='/about'
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      handleNavigation(e, '/about')
                    }
                  >
                    Our Story
                  </HoveredLink>

                  <HoveredLink
                    href='/careers'
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      handleNavigation(e, '/careers')
                    }
                  >
                    Careers
                  </HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item='Platform'>
                <div className='flex flex-col space-y-4 text-sm p-4'>
                  <HoveredLink
                    href='/for-founders'
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      handleNavigation(e, '/for-founders')
                    }
                  >
                    For Founders
                  </HoveredLink>
                  <HoveredLink
                    href='/for-investors'
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      handleNavigation(e, '/for-investors')
                    }
                  >
                    For Investors
                  </HoveredLink>
                  <HoveredLink
                    href='/#how-it-works'
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      handleNavigation(e, '/#how-it-works')
                    }
                  >
                    How It Works
                  </HoveredLink>
                  <HoveredLink
                    href='/blog'
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      handleNavigation(e, '/blog')
                    }
                  >
                    Blogs
                  </HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item='FAQ'>
                <div className='flex flex-col space-y-4 text-sm p-4'>
                  <HoveredLink
                    href='/faq'
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      handleNavigation(e, '/faq')
                    }
                  >
                    Frequently Asked Questions
                  </HoveredLink>
                  <HoveredLink
                    href='/legal'
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      handleNavigation(e, '/legal')
                    }
                  >
                    Legal & Compliance
                  </HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>

          {/* Desktop CTA Button */}
          <div className='hidden lg:flex'>
            <NavbarButton
              className='text-sm bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] px-7 py-2 font-semibold hover:bg-[#8B7349] transition-colors rounded-lg'
              href='/apply'
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                handleNavigation(e, '/apply')
              }
            >
              Join Founding Cohort
            </NavbarButton>
          </div>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <div className='w-full flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6'>
            {/* Mobile Logo */}
            <Link
              title='Go to Home'
              className='flex items-center gap-1 sm:gap-2 p-1 group relative z-20'
              href='/'
              onClick={(e) => {
                handleNavigation(e, '/')
              }}
            >
              <div className='flex items-center gap-1 sm:gap-2 relative'>
                <Image
                  title='nartaqLogo'
                  src='/logo/main-tr-hor.svg'
                  alt='Nartaq Icon'
                  width={100}
                  height={24}
                  fetchPriority='low'
                  className=' relative z-10'
                />
              </div>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={handleMobileToggle}
              className='p-2 rounded-lg hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 transition-colors'
              aria-label='Toggle navigation menu'
            >
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={handleMobileToggle}
              />
            </button>
          </div>
        </MobileNavHeader>
      </MobileNav>
    </Navbar>
  )
}
