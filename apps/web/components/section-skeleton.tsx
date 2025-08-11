'use client'

import { cn } from '@/lib/utils'

interface SectionSkeletonProps {
 height?: string
 className?: string
}

export function SectionSkeleton({ height = 'h-64', className }: SectionSkeletonProps) {
 return (
  <div className={cn('animate-pulse bg-gray-800/50 rounded-lg', height, className)}>
   <div className="flex items-center justify-center h-full">
    <div className="text-gray-500">Loading...</div>
   </div>
  </div>
 )
}