'use client'

import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Link2 } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'
import { DarkModeToggle } from './DarkModeToggle'
import Link from 'next/link'

export default function Navbar(){
  const pathname = usePathname()
  const { toast } = useToast()

  console.log(pathname)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${pathname}`);
      toast({description: 'Link copied to clipboard!'});
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <header className='fixed flex justify-between items-center w-full h-16 p-4 md:px-6 border-b border-gray-200 dark:border-gray-600'>
    <Link href='/'>
    <h1 className='text-lg font-semibold'>Zapnote</h1>
    </Link>
    <div className='flex items-center gap-4'>
    {pathname != '/' && <Button onClick={copyToClipboard} size='sm'>
      <Link2 className='h-4 w-4'/>
      <p className='hidden lg:block'>Copy Link</p>
    </Button>}
    <DarkModeToggle />
    </div>
    </header>
  )
}