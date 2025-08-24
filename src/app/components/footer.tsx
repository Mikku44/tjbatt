import { Facebook } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1A1A1A] w-full flex flex-col text-white">
      {/* Top Section */}
      <section className="px-4 max-w-7xl mx-auto grid gap-8 md:grid-cols-3 py-12">
        {/* Logo & Address */}
        <div className="flex flex-col gap-4">
          <img
            className="size-24 rounded-full"
            src="/icon.jpg"
            loading="lazy"
            alt="tjbatt logo"
          />
          <div className="text-2xl sm:text-3xl font-semibold">ตั้งใจขายแบต</div>
          <p className="font-light text-sm sm:text-base leading-relaxed">
            44 ซอยพระราม 2 62 แขวงแสมดำ เขตบางขุนเทียน กรุงเทพ,
            ประเทศไทย, กรุงเทพ 10150
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-2">
          <div className="font-bold text-lg">บริการ</div>
          <Link href="/#" className="font-light hover:underline">
            บริการติดตั้งแบตเตอรี่ทั้งในและนอกสถานที่
          </Link>
          <Link href="/#" className="font-light hover:underline">
            บริการตรวจเช็คสุขภาพแบตเตอรี่รถยนต์ / รถยนต์ไฟฟ้า
          </Link>
          <Link href="/#" className="font-light hover:underline">
            บริการโปรแกรมลงทะเบียนแบตเตอรี่สำหรับรถยุโรป
          </Link>
        </div>

      

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <div className="text-lg sm:text-2xl font-light">
            +66 (0)99-492-2889
          </div>
          <div className="text-lg sm:text-2xl font-light break-words">
            
            <img 
            className='size-[150px] rounded-xl mb-1'
            src="/social/line.png" alt="tjbatt line" />
            ID Line : @tjbatt
          </div>
          <Link
            href="tel:+6699-492-2889"
            className="text-base sm:text-lg w-fit rounded-full bg-white text-[#000444] px-6 py-2 text-center font-medium hover:bg-gray-200 transition"
          >
            ติดต่อเลย
          </Link>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="w-full py-4 bg-[#FEC32A]">
        <div className="px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-black/90 opacity-80">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link href="https://www.facebook.com/profile.php?id=61565159984797"  rel="noreferrer" target="_blank">
              <Facebook className="size-6 sm:size-7" />
            </Link>
            <Link href="https://line.me/R/ti/p/@318evmbw?ts=07171936&oat_content=url"  rel="noreferrer" target="_blank">
              <img
                src="/social/line_black.svg"
                alt="line platform logo"
                className="h-6 sm:h-7"
              />
            </Link>
            {/* <Link href=""  rel="noreferrer" target="_blank">
              <Instagram className="size-6 sm:size-7" />
            </Link> */}
          </div>
          <p className="text-sm sm:text-base text-center md:text-left">
            ตั้งใจขายแบต สงวนลิขสิทธิ์ 2025 ©
          </p>
        </div>
      </section>
    </footer>
  )
}
