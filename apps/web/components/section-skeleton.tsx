'use client'

export function SectionSkeleton({ height = 'h-96' }: { height?: string }) {
 return (
  <div className={`${height} bg-slate-800/30 animate-pulse rounded-lg flex items-center justify-center`}>
   <div className="flex flex-col items-center space-y-4">
    <div className="w-16 h-16 bg-slate-700/50 rounded-full animate-pulse"></div>
    <div className="space-y-2">
     <div className="w-48 h-4 bg-slate-700/50 rounded animate-pulse"></div>
     <div className="w-32 h-4 bg-slate-700/50 rounded animate-pulse"></div>
    </div>
   </div>
  </div>
 )
}