'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { menuList } from '../constants/app'

export default function MobileNav () {
  const [isExpand, setIsExpand] = useState(false)

  const handleToggle = () => {
    setIsExpand(prev => !prev)
  }
  return (
    <div className='md:hidden'>
      <button onClick={handleToggle}>
        <Menu className='text-white' />
      </button>
      <div
        onClick={handleToggle}
        className={`w-screen  bg-blue-500/20 duration-300 inset-0 fixed ${
          isExpand ? 'opacity-100 pointer-events-auto z-1 h-screen' : 'opacity-0 -z-10 pointer-events-none:'
        }`}
      ></div>
      <div
        className={`h-screen ${
          isExpand ? 'w-[300px] p-4 z-1' : 'w-0'
        }  fixed top-0 duration-300 right-0 bg-white `}
      >
        <div className='flex flex-col gap-2 text-black/80'>
          {menuList.map((menu, index) => (
            <Link
              className='w-full hover:bg-blue-50 p-1 '
              key={index}
              href={menu.href}
            >
              {menu.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
