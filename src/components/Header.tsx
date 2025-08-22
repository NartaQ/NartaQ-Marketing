'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu'
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from './ui/resizable-navbar'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Header({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <Navbar className={cn('fixed top-0 z-50', className)}>
      {/* Desktop Navigation */}
      <NavBody>
        <div className='w-full flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Logo */}
          <Link
            className='flex items-center gap-2 p-1 group relative z-20'
            href='/'
          >
            <div className='h-[28px] sm:h-[32px] md:h-[36px] flex items-center gap-2 relative'>
              <Image
                src='/logo/main-tr-hor.svg'
                alt='Nartaq Icon'
                width={120}
                height={20}
                className='h-7 sm:h-8 md:h-9 w-auto relative z-10'
              />
            </div>
          </Link>

          {/* Desktop Menu Items - Centered */}
          <div className='absolute left-1/2 transform -translate-x-1/2 hidden lg:flex'>
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item='Solutions'>
                <div className='flex flex-col space-y-4 text-sm p-4'>
                  <HoveredLink href='/solutions/startups'>
                    For Startups
                  </HoveredLink>
                  <HoveredLink href='/solutions/investors'>
                    For Investors
                  </HoveredLink>
                  <HoveredLink href='/solutions/providers'>
                    For Service Providers
                  </HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item='Products'>
                <div className='text-sm grid grid-cols-1 md:grid-cols-2 gap-6 p-4'>
                  <ProductItem
                    title='DealFlow'
                    href='/products/dealflow'
                    src='/logo/main-tr-hor.svg'
                    description='Investors & Startups: AI rubric checks and curated, fit-first intros.'
                  />
                  <ProductItem
                    title='Work'
                    href='/products/work'
                    src='/logo/main-tr-hor.svg'
                    description='Startups & Providers: bounties, milestone protections, orchestration.'
                  />
                </div>
              </MenuItem>
            </Menu>
          </div>

          {/* Desktop CTA Button */}
          <div className='hidden lg:flex'>
            <NavbarButton
              className='text-sm text-white bg-[#A98B5D] px-4 py-2 font-medium hover:bg-[#8B7349] transition-colors rounded-lg'
              href='/companies-providers#how-it-works'
            >
              Join Waitlist
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
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className='h-[28px] sm:h-[32px] flex items-center gap-1 sm:gap-2 relative'>
                <Image
                  src='/logo/main-tr-hor.svg'
                  alt='Nartaq Icon'
                  width={120}
                  height={28}
                  className='h-7 sm:h-8 w-auto relative z-10'
                />
              </div>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='p-2 rounded-lg hover:bg-[#5c5d63]/10 dark:hover:bg-[#5c5d63]/20 transition-colors'
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
            {/* Solutions Section */}
            <div className='w-full'>
              <button
                onClick={() => toggleSection('solutions')}
                className='w-full flex items-center justify-between px-3 py-2 text-left text-[#3e3f44] dark:text-[#dcd7ce] hover:bg-[#5c5d63]/10 dark:hover:bg-[#5c5d63]/20 rounded-lg transition-colors'
              >
                <span className='font-medium'>Solutions</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    expandedSection === 'solutions' && 'rotate-180'
                  )}
                />
              </button>
              {expandedSection === 'solutions' && (
                <div className='ml-4 mt-2 space-y-2'>
                  <Link
                    href='/solutions/startups'
                    className='block px-3 py-2 text-sm text-[#5c5d63] dark:text-[#5c5d63] hover:text-[#232428] dark:hover:text-[#dcd7ce] hover:bg-[#5c5d63]/10 dark:hover:bg-[#5c5d63]/20 rounded-lg transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    For Startups
                  </Link>
                  <Link
                    href='/solutions/investors'
                    className='block px-3 py-2 text-sm text-[#5c5d63] dark:text-[#5c5d63] hover:text-[#232428] dark:hover:text-[#dcd7ce] hover:bg-[#5c5d63]/10 dark:hover:bg-[#5c5d63]/20 rounded-lg transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    For Investors
                  </Link>
                  <Link
                    href='/solutions/providers'
                    className='block px-3 py-2 text-sm text-[#5c5d63] dark:text-[#5c5d63] hover:text-[#232428] dark:hover:text-[#dcd7ce] hover:bg-[#5c5d63]/10 dark:hover:bg-[#5c5d63]/20 rounded-lg transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    For Service Providers
                  </Link>
                </div>
              )}
            </div>

            {/* Products Section */}
            <div className='w-full'>
              <button
                onClick={() => toggleSection('products')}
                className='w-full flex items-center justify-between px-3 py-2 text-left text-[#3e3f44] dark:text-[#dcd7ce] hover:bg-[#5c5d63]/10 dark:hover:bg-[#5c5d63]/20 rounded-lg transition-colors'
              >
                <span className='font-medium'>Products</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    expandedSection === 'products' && 'rotate-180'
                  )}
                />
              </button>
              {expandedSection === 'products' && (
                <div className='ml-4 mt-2 space-y-3'>
                  <Link
                    href='/products/dealflow'
                    className='block px-3 py-2 hover:bg-[#5c5d63]/10 dark:hover:bg-[#5c5d63]/20 rounded-lg transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className='font-medium text-sm text-[#3e3f44] dark:text-[#dcd7ce]'>
                      DealFlow
                    </div>
                    <div className='text-xs text-[#5c5d63] dark:text-[#5c5d63] mt-1'>
                      AI rubric checks and curated, fit-first intros
                    </div>
                  </Link>
                  <Link
                    href='/products/work'
                    className='block px-3 py-2 hover:bg-[#5c5d63]/10 dark:hover:bg-[#5c5d63]/20 rounded-lg transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className='font-medium text-sm text-[#3e3f44] dark:text-[#dcd7ce]'>
                      Work
                    </div>
                    <div className='text-xs text-[#5c5d63] dark:text-[#5c5d63] mt-1'>
                      Bounties, milestone protections, orchestration
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <div className='pt-4 mt-4 border-t border-[#5c5d63]/30 dark:border-[#5c5d63]/40'>
              <NavbarButton
                href='/companies-providers#how-it-works'
                className='w-full text-center bg-[#A98B5D] text-white hover:bg-[#8B7349] transition-colors px-4 py-3 rounded-lg font-medium'
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Waitlist
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
