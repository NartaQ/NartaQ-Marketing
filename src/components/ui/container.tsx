import clsx from 'clsx'
import React, { forwardRef, ReactNode, ElementType } from 'react'

const styles = {
  size: {
    lg: 'max-w-[1760px] 3xl:max-w-[1472px] 2xl:px-10',
    md: 'max-w-[1760px] 3xl:max-w-[1472px] 2xl:max-w-[1216px] xl:max-w-[936px]',
    medium: 'max-w-[1472px] 2xl:px-10',
    sm: 'max-w-[1460px] 2xl:max-w-[1216px] xl:max-w-[936px]',
    xs: 'max-w-[860px]',
    xxs: 'max-w-[704px] md:px-5',
    1472: 'max-w-[1536px] px-8',
    1408: 'max-w-[1472px] px-8',
    1344: 'max-w-[1408px] px-8',
    1220: 'max-w-[1220px] xl:px-8',
    1216: 'max-w-[1216px] xl:px-8',
    1152: 'max-w-6xl',
    1100: 'max-w-[1100px]',
    960: 'max-w-[960px] md:px-5',
    832: 'max-w-[832px]',
    768: 'max-w-3xl',
    640: 'max-w-[640px]',
    576: 'max-w-[576px]',
  },
} as const

interface ContainerProps {
  className?: string | null
  size: keyof typeof styles.size
  children: ReactNode
  as?: ElementType
  [key: string]: any
}

const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ className = null, size, children, as = 'div', ...otherProps }, ref) => {
    const Tag = as
    return (
      <Tag
        className={clsx(
          'relative mx-auto lg:max-w-none lg:px-8 md:px-5',
          styles.size[size as keyof typeof styles.size],
          className
        )}
        {...otherProps}
        ref={ref}
      >
        {children}
      </Tag>
    )
  }
)

Container.displayName = 'Container'

export default Container
