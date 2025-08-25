'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu'
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
    <Navbar className={cn('fixed top-4 z-50', className)}>
      {/* Desktop Navigation */}
      <NavBody>
        <div className='w-full flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Logo */}
          <Link
            className='flex items-center gap-2 p-1 group relative z-20'
            href='/'
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
              <MenuItem setActive={setActive} active={active} item='Platform'>
                <div className='flex flex-col space-y-4 text-sm p-4'>
                  <HoveredLink href='/solutions/investors'>
                    For Investors
                  </HoveredLink>
                  <HoveredLink href='/solutions/startups'>
                    For Startups
                  </HoveredLink>
                  <HoveredLink href='/products/dealflow'>
                    Dealflow Platform
                  </HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item='Protocol'>
                <div className='text-sm flex flex-col space-y-4 p-4'>
                  <div className='text-neutral-700 dark:text-neutral-300 text-xs uppercase tracking-wide mb-2'>
                    AI-Powered Protocol
                  </div>
                  <HoveredLink href='/#how-it-works'>
                    How It Works
                  </HoveredLink>
                  <HoveredLink href='/#dao-governance'>
                    Protocol Governance
                  </HoveredLink>
                  <HoveredLink href='/#tokenomics'>Token Economics</HoveredLink>
                  <HoveredLink href='/#community'>Join Community</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem
                setActive={setActive}
                active={active}
                item='Our Corridor'
              >
                <div className='flex flex-col space-y-4 text-sm p-4'>
                  <HoveredLink href='/solutions/investors'>
                    France ↔ Tunisia Thesis
                  </HoveredLink>
                  <HoveredLink href='/#faq'>FAQ</HoveredLink>
                  <HoveredLink href='/legal/terms'>Terms of Service</HoveredLink>
                  <HoveredLink href='/legal/privacy'>Privacy Policy</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>

          {/* Desktop CTA Button */}
          <div className='hidden lg:flex'>
            <NavbarButton
              className='text-sm bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] px-7 py-2 font-semibold hover:bg-[#8B7349] transition-colors rounded-lg'
              href='/solutions/startups'
            >
              Apply for Access
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
                    href='/solutions/investors'
                    className='block px-3 py-2 text-sm text-[#5c5d63] dark:text-[#5c5d63] hover:text-[#232428] dark:hover:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    For Investors
                  </Link>
                  <Link
                    href='/solutions/startups'
                    className='block px-3 py-2 text-sm text-[#5c5d63] dark:text-[#5c5d63] hover:text-[#232428] dark:hover:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    For Startups
                  </Link>
                  <Link
                    href='/products/dealflow'
                    className='block px-3 py-2 text-sm text-[#5c5d63] dark:text-[#5c5d63] hover:text-[#232428] dark:hover:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dealflow Platform
                  </Link>
                </div>
              )}
            </div>

            {/* Protocol Section */}
            <div className='w-full'>
              <button
                onClick={() => toggleSection('dao')}
                className='w-full flex items-center justify-between px-3 py-2 text-left text-[#232428] dark:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
              >
                <span className='font-medium'>The DAO</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    expandedSection === 'dao' && 'rotate-180'
                  )}
                />
              </button>
              {expandedSection === 'dao' && (
                <div className='ml-4 mt-2 space-y-3'>
                  <Link
                    href='/#dao-governance'
                    className='block px-3 py-2 hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className='font-medium text-sm text-[#232428] dark:text-[#dcd7ce]'>
                      How DAO Works
                    </div>
                    <div className='text-xs text-[#5c5d63] dark:text-[#5c5d63] mt-1'>
                      Community governance and decision making
                    </div>
                  </Link>
                  <Link
                    href='/#tokenomics'
                    className='block px-3 py-2 hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className='font-medium text-sm text-[#232428] dark:text-[#dcd7ce]'>
                      Token Economics
                    </div>
                    <div className='text-xs text-[#5c5d63] dark:text-[#5c5d63] mt-1'>
                      Rewards and value sharing model
                    </div>
                  </Link>
                  <Link
                    href='/#community'
                    className='block px-3 py-2 text-sm text-[#5c5d63] dark:text-[#5c5d63] hover:text-[#232428] dark:hover:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Join Community
                  </Link>
                </div>
              )}
            </div>

            {/* Corridor Section */}
            <div className='w-full'>
              <button
                onClick={() => toggleSection('corridor')}
                className='w-full flex items-center justify-between px-3 py-2 text-left text-[#232428] dark:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
              >
                <span className='font-medium'>Our Corridor</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    expandedSection === 'protocol' && 'rotate-180'
                  )}
                />
              </button>
              {expandedSection === 'protocol' && (
                <div className='ml-4 mt-2 space-y-3'>
                  <Link
                    href='/solutions/investors'
                    className='block px-3 py-2 text-sm text-[#5c5d63] dark:text-[#5c5d63] hover:text-[#232428] dark:hover:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className='font-medium text-sm text-[#3e3f44] dark:text-[#dcd7ce]'>
                      How It Works
                    </div>
                    <div className='text-xs text-[#5c5d63] dark:text-[#5c5d63] mt-1'>
                      AI-powered protocol workflow
                    </div>
                  </Link>
                  <Link
                    href='/#dao-governance'
                    className='block px-3 py-2 hover:bg-[#5c5d63]/10 dark:hover:bg-[#5c5d63]/20 rounded-lg transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className='font-medium text-sm text-[#3e3f44] dark:text-[#dcd7ce]'>
                      Protocol Governance
                    </div>
                    <div className='text-xs text-[#5c5d63] dark:text-[#5c5d63] mt-1'>
                      Community governance and decision making
                    </div>
                  </Link>
                  <Link
                    href='/#trust-compliance'
                    className='block px-3 py-2 hover:bg-[#5c5d63]/10 dark:hover:bg-[#5c5d63]/20 rounded-lg transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className='font-medium text-sm text-[#3e3f44] dark:text-[#dcd7ce]'>
                      Security & Compliance
                    </div>
                    <div className='text-xs text-[#5c5d63] dark:text-[#5c5d63] mt-1'>
                      Bank-level security and regulatory compliance
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Section */}
            <div className='w-full'>
              <button
                onClick={() => toggleSection('resources')}
                className='w-full flex items-center justify-between px-3 py-2 text-left text-[#3e3f44] dark:text-[#dcd7ce] hover:bg-[#5c5d63]/10 dark:hover:bg-[#5c5d63]/20 rounded-lg transition-colors'
              >
                <span className='font-medium'>Resources</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    expandedSection === 'resources' && 'rotate-180'
                  )}
                />
              </button>
              {expandedSection === 'resources' && (
                <div className='ml-4 mt-2 space-y-2'>
                  <Link
                    href='/#faq'
                    className='block px-3 py-2 text-sm text-[#5c5d63] dark:text-[#5c5d63] hover:text-[#232428] dark:hover:text-[#dcd7ce] hover:bg-[#5c5d63]/20 dark:hover:bg-[#5c5d63]/30 rounded-lg transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <div className='pt-4 mt-4 border-t border-[#5c5d63]/40 dark:border-[#5c5d63]/50'>
              <NavbarButton
                href='/solutions/startups'
                className='w-full text-center bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d]  hover:bg-[#8B7349]  px-4 py-3 rounded-lg font-semibold'
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Protocol
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
