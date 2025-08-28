'use client'
import Link, { LinkProps } from 'next/link'
import React, { useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'

type TransitionLinkProps = LinkProps & {
  href: string
  transitionDuration?: number
  transitionClass?: string
  disabled?: boolean
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  transitionDuration = 400,
  transitionClass = 'page-transition',
  disabled = false,
  onClick,
  ...props
}) => {
  const router = useRouter()
  const isTransitioning = useRef(false)

  const handleTransition = useCallback(
    async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault()

      onClick?.(e)

      if (isTransitioning.current || disabled) {
        return
      }

      if (
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:')
      ) {
        window.open(href, props.target || '_self')
        return
      }

      if (href === window.location.pathname + window.location.search) {
        return
      }

      try {
        isTransitioning.current = true
        const body = document.querySelector('body')

        if (!body) {
          console.warn('TransitionLink: body element not found')
          router.push(href)
          return
        }

        body.classList.add(transitionClass)

        await sleep(transitionDuration)

        router.push(href)

        await sleep(transitionDuration)

        body.classList.remove(transitionClass)
      } catch (error) {
        console.error('TransitionLink: Navigation failed', error)
        router.push(href)
      } finally {
        isTransitioning.current = false
      }
    },
    [href, router, transitionDuration, transitionClass, disabled, onClick]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLAnchorElement>) => {
      if (e.key === 'Enter' && !disabled) {
        handleTransition(e as any)
      }
      props.onKeyDown?.(e)
    },
    [handleTransition, disabled, props.onKeyDown]
  )

  return (
    <Link
      {...props}
      href={href}
      onClick={handleTransition}
      onKeyDown={handleKeyDown}
      style={{
        ...props.style,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
      }}
      aria-disabled={disabled}
    >
      {children}
    </Link>
  )
}
