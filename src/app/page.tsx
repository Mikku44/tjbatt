import * as motion from 'motion/react-client'
import Link from 'next/link'

export default function Home () {
  const brands = [
    { src: '/brand/varta.jpg', alt: 'varta battery' },
    { src: '/brand/3k.png', alt: '3k' },
    { src: '/brand/gs.png', alt: 'gs' },
    { src: '/brand/puma.png', alt: 'puma' },
    { src: '/brand/fb.png', alt: 'fb' },
    { src: '/brand/delkor.avif', alt: 'delkor' }
  ]

  return (
    <main className='mx-auto w-full min-h-[300vh]'>
      {/* Hero Section */}
      <section
        className="w-full h-screen max-h-[32rem] p-5 md:p-24 relative overflow-hidden
          bg-[url('/hero.jpg')] bg-cover bg-no-repeat bg-center"
      >
        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/80'></div>

        {/* Text Content */}
        <div className='h-full max-w-[90%] md:max-w-[50%] md:m-0 m-auto py-10 flex flex-col justify-end md:justify-between relative z-10'>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: 'easeOut' }
            }}
            viewport={{ once: true }}
            className='md:text-5xl text-4xl text-white font-bold'
          >
            กำลังมองหาแบตเตอรี่รถยนต์อยู่ใช่ไหม?
          </motion.h1>

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 }
            }}
            viewport={{ once: true }}
            className='text-white mt-4'
          >
            ติดตั้งแบตเตอรี่รถยนต์ไฟฟ้า / ญี่ปุ่น พื้นที่ให้บริการ พระราม 2
            และฝั่งธนฯ บริการนอกสถานที่ฟรี ติดตั้งแบตเตอรี่รถยนต์ยุโรป
            พื้นที่ให้บริการ กทม.และปริมณฑล
            โปรแกรมลงทะเบียนแบตเตอรี่ลูกใหม่สำหรับรถยุโรปฟรี!!
          </motion.h2>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className='max-w-7xl mx-auto md:justify-between flex gap-4 py-10 justify-center items-center flex-wrap'>
        {brands.map((brand, i) => (
          <motion.img
            key={brand.alt}
            src={brand.src}
            alt={brand.alt}
            className='md:max-w-[100px] max-w-[60px] h-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: i * 0.1, duration: 0.4 }
            }}
            viewport={{ once: true }}
          />
        ))}
      </section>

      {/* CTA */}

      <section className='w-full gap-4 px-4 mt-10 max-w-7xl mx-auto flex md:flex-row flex-col justify-between '>
        <Link className='p-2 border border-black/70 w-full rounded-sm' href='/'>
          Tel
        </Link>
        <Link className='p-2 border border-black/70 w-full rounded-sm' href='/'>
          Line
        </Link>
        <Link className='p-2 border border-black/70 w-full rounded-sm' href='/'>
          Facebook
        </Link>
      </section>

      {/* service */}

      <section className='w-full gap-4 px-4 max-w-7xl mx-auto mt-10'>
          <h3 className='text-4xl'>บริการของเรา</h3>

          <div className="flex md:flex-row flex-col md:gap-4 gap-2 my-3">
            <div className="rounded-full w-fit bg-black/80 text-yellow-500 px-6 py-2">ติดตั้งแบต</div>
            <div className="rounded-full w-fit bg-black/80 text-yellow-500 px-6 py-2">ลงโปรแกรมทะเบียน</div>
            <div className="rounded-full w-fit bg-black/80 text-yellow-500 px-6 py-2">บริการนอกสถานที่</div>
          </div>

          <div className="text-black/80 md:max-w-[500px]">
            ติดตั้งแบตเตอรี่รถยนต์ไฟฟ้า / ญี่ปุ่น พื้นที่ให้บริการ พระราม 2 และฝั่งธนฯ บริการนอกสถานที่ฟรีติดตั้งแบตเตอรี่รถยนต์ยุโรป พื้นที่ให้บริการ กทม.และปริมณฑล โปรแกรมลงทะเบียนแบตเตอรี่ลูกใหม่สำหรับรถยุโรปฟรี!!
          </div>
      </section>
    </main>
  )
}
