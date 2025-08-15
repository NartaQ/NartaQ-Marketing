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
import { Spotlight } from './ui/spotlight'

export default function Header({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Navbar className={cn('fixed top-0', className)}>
      <Spotlight />
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo */}
        <a className='flex items-center gap-2 p-1 group relative z-20' href='#'>
          <div className='h-[32px] flex items-center gap-2 relative'>
            <Image
              src='/logo/main-tr-icon.svg'
              alt='Nartaq Icon'
              width={32}
              height={32}
              className='h-8 w-8 transition-transform duration-300 group-hover:scale-110 relative z-10'
            />
            <span className='font-medium text-black dark:text-white'>
              Nartaq
            </span>
          </div>
        </a>

        {/* Desktop Menu Items */}
        <div className='hidden lg:flex'>
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item='For Startups'>
              <div className='flex flex-col space-y-4 text-sm'>
                <HoveredLink href='/pitch-deck'>Pitch Your Vision</HoveredLink>
                <HoveredLink href='/funding-rounds'>
                  Funding Rounds
                </HoveredLink>
                <HoveredLink href='/mentorship'>
                  Expert Mentorship
                </HoveredLink>
                <HoveredLink href='/resources'>Startup Resources</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item='For Investors'>
              <div className='text-sm grid grid-cols-2 gap-10 p-4'>
                <ProductItem
                  title='Deal Flow'
                  href='#'
                  src='/images/home/ai-models.png'
                  description='Discover vetted startups matching your investment criteria.'
                />
                <ProductItem
                  title='Due Diligence'
                  href='#'
                  src='/images/home/api.png'
                  description='Comprehensive startup analysis and risk assessment.'
                />
                <ProductItem
                  title='Portfolio Tracking'
                  href='#'
                  src='/images/home/image.png'
                  description='Monitor and manage your investment portfolio.'
                />
                <ProductItem
                  title='Market Insights'
                  href='#'
                  src='/images/home/article1.png'
                  description='Stay ahead with industry trends and opportunities.'
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item='Pricing'>
              <div className='flex flex-col space-y-4 text-sm'>
                <HoveredLink href='/hobby'>Hobby</HoveredLink>
                <HoveredLink href='/individual'>Individual</HoveredLink>
                <HoveredLink href='/team'>Team</HoveredLink>
                <HoveredLink href='/enterprise'>Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* Desktop CTA Button */}
        <div className='hidden lg:flex'>
          <NavbarButton href='#' variant='dark'>
            Join Nartaq
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* Mobile Logo */}
          <a
            className='flex items-center gap-2 p-1 group relative z-20'
            href='#'
          >
            <div className='h-[32px] flex items-center gap-2 relative'>
              <Image
                src='/logo/main-tr-icon.svg'
                alt='Nartaq Icon'
                width={32}
                height={32}
                className='h-8 w-8 transition-transform duration-300 group-hover:scale-110 relative z-10'
              />
              <span className='font-medium text-black dark:text-white'>
                Nartaq
              </span>
            </div>
          </a>

          {/* Mobile Menu Toggle */}
          <MobileNavToggle
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className='flex flex-col space-y-4 w-full'>
            <a
              href='#startups'
              className='text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors'
              onClick={() => setMobileMenuOpen(false)}
            >
              For Startups
            </a>
            <a
              href='#investors'
              className='text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors'
              onClick={() => setMobileMenuOpen(false)}
            >
              For Investors
            </a>
            <a
              href='#pricing'
              className='text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors'
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href='#about'
              className='text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors'
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <div className='pt-4 border-t border-neutral-200 dark:border-neutral-700'>
              <NavbarButton
                href='#'
                variant='dark'
                className='w-full text-center'
              >
                Join Nartaq
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
