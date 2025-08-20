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
        <Menu className='text-[var(--primary)]' />
      </button>
      {isExpand && (
        <div
          onClick={handleToggle}
          className={`w-screen  bg-blue-500/20 duration-300 inset-0 fixed ${
            isExpand
              ? 'opacity-100 pointer-events-auto z-1 h-screen'
              : 'opacity-0 -z-10 pointer-events-none:'
          }`}
        ></div>
      )}
      <div
        className={`h-screen ${
          isExpand
            ? 'w-[300px] h-screen flex flex-col justify-between p-4 z-1'
            : 'w-0'
        }  fixed top-0 duration-300 right-0 bg-white overflow-hidden`}
      >
        <div className=''>
          <div className='flex flex-col gap-2 text-black/80'>
            {menuList.map((menu, index) => (
              <Link
                className='w-full hover:bg-blue-50 p-1 '
                onClick={handleToggle}
                key={index}
                href={menu.href}
              >
                {menu.label}
              </Link>
            ))}
          </div>
        </div>

        <div className='grid gap-2'>
          <div className='flex gap-5 items-center'>
            <div className='w-[80px] h-[80px] min-w-[80px] overflow-hidden rounded-xl'>
              <img
                src='/icon.jpg'
                className='w-full h-full'
                alt='tjbatt logo'
              />
            </div>
            <div className='block'>
              <div className='text-lg text-[var(--priamry)]'>ตั้งใจขายแบต</div>
              <div className='text-sm text-black/70 line-clamp-2'>
                จำหน่ายแบตเตอรี่รถยนต์ รถยนต์ไฟฟ้า
                ทางร้านคัดสรรเแบตเตอรี่คุณภาพดีจากแบรนด์ชั้นนำ
              </div>
            </div>
          </div>
          <Link
            href={'#contact'}
            className='px-6 py-2 bg-[var(--primary)] text-white  rounded-md text-center'
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  )
}
