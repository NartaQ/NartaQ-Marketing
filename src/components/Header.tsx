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
            <MenuItem setActive={setActive} active={active} item='Services'>
              <div className='flex flex-col space-y-4 text-sm'>
                <HoveredLink href='/web-dev'>Web Development</HoveredLink>
                <HoveredLink href='/interface-design'>
                  Interface Design
                </HoveredLink>
                <HoveredLink href='/seo'>
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href='/branding'>Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item='Products'>
              <div className='text-sm grid grid-cols-2 gap-10 p-4'>
                <ProductItem
                  title='AI Assistant'
                  href='#'
                  src='/images/home/ai-models.png'
                  description='Your all-in-one AI companion for various tasks.'
                />
                <ProductItem
                  title='Code Generator'
                  href='#'
                  src='/images/home/api.png'
                  description='Generate code snippets and complete applications.'
                />
                <ProductItem
                  title='Image Creator'
                  href='#'
                  src='/images/home/image.png'
                  description='Create stunning images with AI technology.'
                />
                <ProductItem
                  title='Document Helper'
                  href='#'
                  src='/images/home/article1.png'
                  description='Generate and edit documents efficiently.'
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
            Get Started
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
              href='#services'
              className='text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors'
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href='#products'
              className='text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors'
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
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
                Get Started
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
