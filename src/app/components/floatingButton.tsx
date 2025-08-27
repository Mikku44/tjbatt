'use client'
import { Facebook, MessageCircleMore, Phone, X } from 'lucide-react'
import Link from 'next/link';
import { useState } from 'react';

export default function FloatingButton () {
  const [isOpend, setIsOpend] = useState(false);
  return (
    <section
      className='
    fixed bottom-0 right-0 m-4 grid gap-2'
    >
      
      {isOpend && <div className="grid gap-2">
       <Link href="https://line.me/R/ti/p/@318evmbw?ts=07171936&oat_content=url"
       className='rounded-full  hover:opacity-90 bg-[var(--primary)] size-[50px] text-white p-3'
       rel="noreferrer" target="_blank">
              <img
                src="/social/line_black.svg"
                alt="line platform logo"
                className="h-6 sm:h-7 invert-100"
              />
            </Link>
        <Link target='_blank' href="https://www.facebook.com/profile.php?id=61565159984797" rel="noreferrer" className='rounded-full  hover:opacity-90 bg-[var(--primary)] size-[50px] text-white p-3'>
          <Facebook />
        </Link>
        <Link  target='_blank' href="tel:0994922889" rel="noreferrer" className='rounded-full  hover:opacity-90 bg-[var(--primary)] size-[50px] text-white p-3'>
          <Phone />
        </Link>
      </div>}
      <div onClick={() => setIsOpend(prev => !prev)} className='rounded-full hover:opacity-90 bg-[var(--primary)] size-[50px] text-white p-3'>
        {isOpend ? <X /> :<MessageCircleMore />}
      </div>
    </section>
  )
}
