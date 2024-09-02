import Link from 'next/link'
import React from 'react'

export default function NavigationPage() {

  return (
    <div className='flex flex-col gap-2 items-center justify-center'>
      <Link href={'/client'} className='px-4 py-2 rounded-xl bg-gray-400'>
        Client-Side Rendered Pages
      </Link>
      <Link href={'/clientSWR'} className='px-4 py-2 rounded-xl bg-gray-400'>
        Client-Side Rendered with SWR Pages
      </Link>
      <Link href={'/server'} className='px-4 py-2 rounded-xl bg-gray-400'>
        Server-Side Rendered Pages
      </Link>
      <Link href={'/static'} className='px-4 py-2 rounded-xl bg-gray-400'>
        Statis Site Generation Pages
      </Link>
    </div>
  )
}
