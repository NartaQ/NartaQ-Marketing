'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { HoveredLink, Menu, MenuItem } from '../ui/navbar-menu'
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from '../ui/resizable-navbar'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '../pageTransition/animations'

export default function Header({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()

    // Close mobile menu if open
    setMobileMenuOpen(false)

    // Don't animate if we're already on the page
    if (pathname === href) return

    // Trigger page transition animation
    animatePageOut(href, router)
  }

  return (
    <Navbar className={cn('fixed top-4 z-50', className)}>
      {/* Desktop Navigation */}
      <NavBody>
        <div className='w-full flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Logo */}
          <Link
            className='flex items-center gap-2 p-1 group relative z-20'
            href='/'
            onClick={(e) => handleNavigation(e, '/')}
          >
            <div className='h-[24px] sm:h-[28px] md:h-[32px] flex items-center gap-2 relative'>
              <Image
                src='/logo/main-tr-hor.svg'
                alt='Nartaq Icon'
                width={100}
                height={18}
                className='h-6 sm:h-7 md:h-8 w-auto relative z-10'
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
                    href='/about#team'
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      handleNavigation(e, '/about#team')
                    }
                  >
                    The Team
                  </HoveredLink>
                  <HoveredLink
                    href='/about#corridor'
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      handleNavigation(e, '/about#corridor')
                    }
                  >
                    France-Tunisia Corridor
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
              href='/solutions/founders'
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                handleNavigation(e, '/apply/founders')
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
              className='flex items-center gap-1 sm:gap-2 p-1 group relative z-20'
              href='/'
              onClick={(e) => {
                handleNavigation(e, '/')
              }}
            >
              <div className='h-[24px] sm:h-[28px] flex items-center gap-1 sm:gap-2 relative'>
                <Image
                  src='/logo/main-tr-hor.svg'
                  alt='Nartaq Icon'
                  width={100}
                  height={24}
                  className='h-6 sm:h-7 w-auto relative z-10'
                />
              </div>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='p-2 rounded-lg hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 transition-colors'
              aria-label='Toggle mobile menu'
            >
              <MobileNavToggle
                isOpen={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              />
            </button>
          </div>
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className='flex flex-col space-y-2 w-full max-h-[70vh] overflow-y-auto'>
            {/* About Section */}
            <div className='w-full'>
              <button
                onClick={() => toggleSection('about')}
                className='w-full flex items-center justify-between px-3 py-2 text-left text-[#232428] dark:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
              >
                <span className='font-medium'>About</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    expandedSection === 'about' && 'rotate-180'
                  )}
                />
              </button>
              {expandedSection === 'about' && (
                <div className='ml-4 mt-2 space-y-2'>
                  <Link
                    href='/about'
                    className='block px-3 py-2 text-sm text-[#5c5d63] dark:text-[#5c5d63] hover:text-[#232428] dark:hover:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
                    onClick={(e) => handleNavigation(e, '/about')}
                  >
                    Our Story
                  </Link>
                  <Link
                    href='/about#team'
                    className='block px-3 py-2 text-sm text-[#5c5d63] dark:text-[#5c5d63] hover:text-[#232428] dark:hover:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
                    onClick={(e) => handleNavigation(e, '/about#team')}
                  >
                    The Team
                  </Link>
                  <Link
                    href='/about#corridor'
                    className='block px-3 py-2 text-sm text-[#5c5d63] dark:text-[#5c5d63] hover:text-[#232428] dark:hover:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
                    onClick={(e) => handleNavigation(e, '/about#corridor')}
                  >
                    France-Tunisia Corridor
                  </Link>
                </div>
              )}
            </div>

            {/* Platform Section */}
            <div className='w-full'>
              <button
                onClick={() => toggleSection('platform')}
                className='w-full flex items-center justify-between px-3 py-2 text-left text-[#232428] dark:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
              >
                <span className='font-medium'>Platform</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    expandedSection === 'platform' && 'rotate-180'
                  )}
                />
              </button>
              {expandedSection === 'platform' && (
                <div className='ml-4 mt-2 space-y-2'>
                  <Link
                    href='/solutions/founders'
                    className='block px-3 py-2 text-sm text-[#5c5d63] dark:text-[#5c5d63] hover:text-[#232428] dark:hover:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
                    onClick={(e) => handleNavigation(e, '/solutions/founders')}
                  >
                    For Founders
                  </Link>
                  <Link
                    href='/solutions/investors'
                    className='block px-3 py-2 text-sm text-[#5c5d63] dark:text-[#5c5d63] hover:text-[#232428] dark:hover:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
                    onClick={(e) => handleNavigation(e, '/solutions/investors')}
                  >
                    For Investors
                  </Link>
                  <Link
                    href='/#how-it-works'
                    className='block px-3 py-2 text-sm text-[#5c5d63] dark:text-[#5c5d63] hover:text-[#232428] dark:hover:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
                    onClick={(e) => handleNavigation(e, '/#how-it-works')}
                  >
                    How It Works
                  </Link>
                </div>
              )}
            </div>

            {/* FAQ & Legal */}
            <div className='w-full'>
              <Link
                href='/faq'
                className='block px-3 py-2 text-[#232428] dark:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
                onClick={(e) => handleNavigation(e, '/faq')}
              >
                <span className='font-medium'>FAQ</span>
              </Link>
            </div>

            <div className='w-full'>
              <Link
                href='/legal'
                className='block px-3 py-2 text-[#232428] dark:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
                onClick={(e) => handleNavigation(e, '/legal')}
              >
                <span className='font-medium'>Legal & Compliance</span>
              </Link>
            </div>

            {/* CTA Button */}
            <div className='pt-4 mt-4 border-t border-[#5c5d63]/40 dark:border-[#5c5d63]/50'>
              <NavbarButton
                href='/solutions/founders'
                className='w-full text-center bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] hover:bg-[#8B7349] px-4 py-3 rounded-lg font-semibold'
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  handleNavigation(e, '/apply/founders')
                }
              >
                Join Founding Cohort
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
