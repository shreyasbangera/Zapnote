import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
  return (
    <div className='lg:px-6 pt-16 lg:pt-20'>
    <div className="min-h-[85vh] w-screen lg:border lg:rounded-lg border-gray-200 dark:border-gray-600 shadow-sm">
      <div className="border-b border-gray-200 dark:border-gray-600 lg:px-2 py-2 flex items-center overflow-x-auto whitespace-nowrap">
      <div className="flex px-2 gap-1 border-r rounded-none border-gray-200 dark:border-gray-600">
      {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-9 w-9 rounded-md" />
        ))}
    </div>
      <div className="flex px-2 gap-1 border-r rounded-none border-gray-200 dark:border-gray-600">
        <Skeleton className="h-9 w-[100px] rounded-md" /> 
      {[...Array(9)].map((_, i) => (
          <Skeleton key={i} className="h-9 w-9 rounded-md" />
        ))}
        </div>
        <Skeleton className="h-9 min-w-9 rounded-md ml-3" /> 
    </div>
      <div className="px-4 lg:px-6 py-6 lg:py-8 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-2/3" />
      </div>
    </div>
    </div>
  )
}

export default loading