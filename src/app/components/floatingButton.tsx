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
        <Link target='_blank' href="https://www.facebook.com/profile.php?id=100063865400498" rel="noreferrer" className='rounded-full  hover:opacity-90 bg-[var(--primary)] size-[50px] text-white p-3'>
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
