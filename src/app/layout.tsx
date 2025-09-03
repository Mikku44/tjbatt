import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { HomeTags } from './constants/app'
import FloatingButton from './components/floatingButton'
import JsonLD from './components/JsonLD'
import TagManager from './components/googleTagManager'

const noto = Noto_Sans_Thai({
  variable: '--font-noto-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'ตั้งใจขายแบต – เปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ ร้านแบตเตอรี่ใกล้ฉัน',
  description:
    'ตั้งใจขายแบต บริการเปลี่ยนและติดตั้งแบตเตอรี่รถยนต์นอกสถานที่ ครอบคลุมทั่วกรุงเทพฯและฝั่งธน บริการด่วน 24 ชม. พร้อมเลี้ยงไฟ ป้องกันข้อมูลหาย ตรวจเช็กสุขภาพแบตเตอรี่ฟรี แบตเตอรี่แท้ ราคาถูก ส่งถึงที่ทันใจ',
  keywords: HomeTags?.join(', ').replaceAll('#', '')
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='th'>
      <TagManager />
      <body className={` ${noto.className} antialiased`}>
        <Navbar />
        {children}
        <FloatingButton />
        <Footer />
        <JsonLD />
        <noscript>
          <iframe
            className='hidden invisible'
            src='https://www.googletagmanager.com/ns.html?id=GTM-5CQLFQBJ'
            height='0'
            width='0'
          ></iframe>
        </noscript>
      </body>
    </html>
  )
}
