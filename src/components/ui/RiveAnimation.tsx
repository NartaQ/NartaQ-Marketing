'use client'

import { useRive } from '@rive-app/react-canvas'

interface RiveAnimationProps {
  className?: string
}

export default function RiveAnimation({ className = 'w-full h-full' }: RiveAnimationProps) {
  const { RiveComponent } = useRive({
    src: '/nartaq-logo.riv',
    autoplay: true,
  })

  return <RiveComponent className={className} />
}