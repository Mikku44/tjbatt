import { Facebook, MapPin, Phone, Wrench } from 'lucide-react'
import * as motion from 'motion/react-client'
import SVG from 'react-inlinesvg'
import Link from 'next/link'
import CardService from './components/cardService'
import Gallery from './components/gallery'

export default function Home () {
  const brands = [
    { src: '/brand/varta.jpg', alt: 'varta battery' },
    { src: '/brand/3k.png', alt: '3k' },
    { src: '/brand/gs.png', alt: 'gs' },
    { src: '/brand/puma.png', alt: 'puma' },
    { src: '/brand/fb.png', alt: 'fb' },
    { src: '/brand/delkor.avif', alt: 'delkor' }
  ]

  const steps = [
    {
      icon: <Phone className='w-10 h-10 text-[var(--primary)]' />,
      title: 'ติดต่อเรา',
      desc: 'โทรหรือแชทเพื่อสอบถามและเช็คราคาแบตเตอรี่ที่เหมาะกับรถของคุณ'
    },
    {
      icon: <MapPin className='w-10 h-10 text-white' />,
      title: 'เลือกสถานที่',
      desc: 'ระบุสถานที่ที่คุณต้องการให้ไปเปลี่ยนแบต ไม่ว่าจะเป็นบ้านหรือที่ทำงาน'
    },
    {
      icon: <Wrench className='w-10 h-10 text-[var(--primary)]' />,
      title: 'ให้บริการ',
      desc: 'ช่างผู้เชี่ยวชาญเข้าหน้างาน เปลี่ยนแบตพร้อมตรวจสอบระบบเบื้องต้น'
    }
  ]

  return (
    <main className='mx-auto w-full min-h-[100vh] scroll-smooth'>
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
      <section className='max-w-7xl mx-auto px-4 md:justify-between flex gap-4 py-10 justify-center items-center flex-wrap'>
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
        <Link
          className='p-4 border flex gap-2 justify-center hover:opacity-80 duration-200 items-center bg-black/80 text-white w-full rounded-sm'
          href='tel:0994322889'
          target='_blank'
        >
          <div className=''>
            <Phone />
          </div>
          <div className=''>Tel +66 (0)99-492-2889</div>
        </Link>
        <Link
          className='p-4 border flex gap-2 justify-center hover:opacity-80 duration-200 items-center bg-[#06C755] text-white w-full rounded-sm'
          href='https://line.me/R/ti/p/@318evmbw'
          target='_blank'
        >
          <div className=''>
            {' '}
            <SVG
              src='/social/line.svg'
              width={32}
              fill='white'
              height='auto'
              title='line platform'
            />
          </div>
          <div className=''>Line (ตั้งใจขายแบต)</div>
        </Link>
        <Link
          className='p-4 border flex gap-2 justify-center hover:opacity-80 duration-200 items-center bg-[#1b77f2] text-white w-full rounded-sm'
          href='https://www.facebook.com/profile.php?id=100063865400498'
          target='_blank'
        >
          <div className=''>
            <Facebook />
          </div>
          <div className=''>Facebook (ตั้งใจขายแบต)</div>
        </Link>
      </section>

      {/* service */}
      <section className='w-full gap-4 px-4 max-w-7xl mx-auto mt-10'>
        <h3 id='ourservice' className='text-4xl'>
          บริการของเรา
        </h3>

        <div className='flex md:flex-row flex-col md:gap-4 gap-2 my-3'>
          <div className='rounded-full w-fit bg-black/80 text-yellow-500 px-6 py-2'>
            ติดตั้งแบต
          </div>
          <div className='rounded-full w-fit bg-black/80 text-yellow-500 px-6 py-2'>
            ลงโปรแกรมทะเบียน
          </div>
          <div className='rounded-full w-fit bg-black/80 text-yellow-500 px-6 py-2'>
            บริการนอกสถานที่
          </div>
        </div>

        <p className='text-black/80 md:max-w-[500px] my-5'>
          ติดตั้งแบตเตอรี่รถยนต์ไฟฟ้า / ญี่ปุ่น พื้นที่ให้บริการ พระราม 2
          และฝั่งธนฯ บริการนอกสถานที่ฟรีติดตั้งแบตเตอรี่รถยนต์ยุโรป
          พื้นที่ให้บริการ
          กทม.และปริมณฑลโปรแกรมลงทะเบียนแบตเตอรี่ลูกใหม่สำหรับรถยุโรปฟรี!!
        </p>
      </section>

      {/* <section className='w-full gap-4 px-4 max-w-7xl mx-auto '>
        <div className='flex justify-between gap-3'>
          <div className='rounded-full  border-black/40 border px-10 py-2 w-full text-center '>
            <h4 className='md:text-3xl text-2xl'>รถยนต์</h4>
          </div>
          <div className='rounded-full  border-black/40 border px-10 py-2 w-full text-center '>
            <h4 className='md:text-3xl text-2xl'>รถไฟฟ้า</h4>
          </div>
        </div>
      </section> */}
      <section className='w-full gap-4 px-4 max-w-7xl mx-auto flex md:flex-row flex-col'>
        <CardService title='รถยนต์' />
        <CardService title='รถไฟฟ้า' />
      </section>

      {/* working step */}
      <section id='ourwork' className='w-full px-4 max-w-7xl mx-auto mt-16'>
        <div className='text-sm text-gray-700 text-center mb-2'>
          เราโฟกัสที่ความสะดวกของลูกค้า
        </div>
        <h3
          id='ourservice'
          className='text-4xl font-bold text-center mb-12 text-gray-900'
        >
          ขั้นตอนการให้บริการ
        </h3>

        <div className='flex flex-col md:flex-row justify-center md:items-start items-center gap-12 relative'>
          {steps.map((step, i) => (
            <div
              key={i}
              className='grid gap-3 justify-items-center justify-center text-center max-w-[250px]'
            >
              <div
                className={`rounded-xl size-[90px] ${
                  i == 1 ? 'bg-[var(--primary)]' : 'bg-gray-50'
                } shadow-lg p-4 flex justify-center items-center`}
              >
                {step.icon}
              </div>
              <div className='text-lg font-bold'>{step.title}</div>
              <div className='text-sm text-black/70'>{step.desc}</div>
            </div>
          ))}

          <div
            className='md:flex hidden md:w-[50%] md:h-10 h-[80%] w-10 md:border-t-5 border-r-5 border-dashed md:rounded-[100%] 
          border-[var(--primary)] absolute md:top-[20%] md:left-auto left-[40%] z-[-1]'
          ></div>
        </div>
      </section>

      {/* gallery */}
      <section
        id='gallery'
        className='w-full gap-4 px-4 max-w-7xl mx-auto mt-10'
      >
         <div className='text-sm text-gray-700 text-center mb-2'>
          ส่วนหนึ่งจากผลงานของเรา
        </div>
        <h3
          className='text-4xl font-bold text-center mb-12 text-gray-900'
        >
          Gallery
        </h3>

        <Gallery />
      </section>

      <section className='w-full bg-[#0F0F0F] h-full gap-4 mt-10 text-white'>
        <div className='max-w-7xl mx-auto py-10 px-4 '>
          <h3 id='aboutus' className='text-4xl '>
            เกี่ยวกับเรา
          </h3>
          <p className='text-xl mt-5 font-light'>
            บริการเปลี่ยนแบตนอกสถานที่ฟรี
          </p>
          <p className=' mt-5 font-medium text-lg'>เปิดให้บริการทุกวัน</p>
          <p className=' opacity-80 font-normal'>เวลา 9.00-19.00 น.</p>

          <p className=' mt-5 font-medium text-lg'>สาขาที่รับบริการ</p>
          <p className='opacity-80 font-normal'>
            สาขาพระรามที่ 2 ซอย 62 (เคหะธน)
          </p>
          <p className='opacity-80 font-normal'>สาขาสุขสวัสดิ์</p>
        </div>

        <div className='w-full  h-full bg-gray-300 min-h-[500px] '>
          <iframe
            className='w-full h-[500px]'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.1199756919054!2d100.41617167485394!3d13.650465086730867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2bddcab3d7c27%3A0xe96d12c5bdbfbb0b!2z4LiV4Lix4LmJ4LiH4LmD4LiI4LiC4Liy4Lii4LmB4Lia4LiV!5e0!3m2!1sth!2sth!4v1755339992804!5m2!1sth!2sth'
            loading='lazy'
          ></iframe>
        </div>
      </section>
    </main>
  )
}
