"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "./ui/resizable-navbar";
import Image from "next/image";
import { Spotlight } from "./ui/spotlight";
import Link from "next/link";

export default function Header({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Navbar className={cn("fixed top-0", className)}>
      <Spotlight />
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo */}
        <Link
          className="flex items-center gap-2 p-1 group relative z-20"
          href="/"
        >
          <div className="h-[32px] flex items-center gap-2 relative">
            <Image
              src="/logo/main-tr-hor.svg"
              alt="Nartaq Icon"
              width={32}
              height={32}
              className="h-8 w-auto  relative z-10"
            />
          </div>
        </Link>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Overview">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/#about">About</HoveredLink>
                <HoveredLink href="/companies-providers">
                  Companies ↔ Providers
                </HoveredLink>
                <HoveredLink href="/investors-startups">
                  Investors ↔ Startups
                </HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="#pricing">Plans</HoveredLink>
                <HoveredLink href="mailto:invest@nartaq.com?subject=NartaQ%20—%20Investor%20Memo%20(NDA)">
                  Investor memo (NDA)
                </HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex">
          <NavbarButton href="/companies-providers#how-it-works" variant="dark">
            Join the waitlist
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* Mobile Logo */}
          <Link
            className="flex items-center gap-2 p-1 group relative z-20"
            href="/"
          >
            <div className="h-[32px] flex items-center gap-2 relative">
              <Image
                src="/logo/main-tr-icon.svg"
                alt="Nartaq Icon"
                width={32}
                height={32}
                className="h-8 w-8  relative z-10"
              />
              <Image
                src="/logo/main-tr-text.svg"
                alt="Nartaq Icon"
                width={32}
                height={32}
                className="h-16 w-16  relative z-10"
              />
            </div>
          </Link>

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
          <div className="flex flex-col space-y-4 w-full">
            <Link
              href="/#about"
              className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <Link
              href="/#pricing"
              className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/#faq"
              className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/companies-providers"
              className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Companies ↔ Providers
            </Link>
            <Link
              href="/investors-startups"
              className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Investors ↔ Startups
            </Link>
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
              <NavbarButton
                href="/companies-providers#how-it-works"
                variant="dark"
                className="w-full text-center"
              >
                Join the waitlist
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
