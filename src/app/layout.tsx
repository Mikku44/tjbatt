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
  title: 'TJ Batt – ตั้งใจขายแบต',
  description:
    'บริการเปลี่ยนและติดตั้งแบตเตอรี่รถยนต์ถึงที่ พร้อมเลี้ยงไฟป้องกันข้อมูลหาย ตรวจเช็กสุขภาพแบตเตอรี่ฟรี บริการรวดเร็ว ครอบคลุมหลายพื้นที่',
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
