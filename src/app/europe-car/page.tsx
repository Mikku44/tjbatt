import { Metadata } from 'next'
import Tags from '../components/tags'
import { EuropeTags, galleryGenerator } from '../constants/app'
import CardService from '../components/cardService'
import * as motion from 'motion/react-client'

export const metadata: Metadata = {
  title: 'TJ Batt – ตั้งใจขายแบต อัลบั้มรถยูโรป',
  description:
    'บริการเปลี่ยนและติดตั้งแบตเตอรี่รถยนต์ถึงที่ พร้อมเลี้ยงไฟป้องกันข้อมูลหาย ตรวจเช็กสุขภาพแบตเตอรี่ฟรี บริการรวดเร็ว ครอบคลุมหลายพื้นที่',
  keywords: EuropeTags?.join(', ').replaceAll('#', '')
}

export default function page () {
  return (
    <div className=''>
      {/* Hero Section */}
      <section
        className="w-full h-screen max-h-[32rem] p-5 md:p-24 relative overflow-hidden
                 bg-cover bg-no-repeat bg-center"
      >
        <img src="/raw/images-tj/benzgbl (2).jpg" alt="europe car cover"
        className='absolute inset-0 w-screen h-full object-cover'
        />
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
            เราให้บริการเปลี่ยนแบตเตอรี่สำหรับรถยุโรป
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
      <main className='min-h-screen max-w-7xl m-auto mt-20 px-4 mb-10'>
        {/* <div className='rounded-xl overflow-hidden max-h-[300px] flex flex-col relative justify-center items-center'>
          <img
            loading='lazy'
            draggable={false}
            src='/raw/images-tj/benzgbl (2).jpg'
            alt='benz glb'
            className='w-full h-full object-center'
          />
        </div> */}

        <div className='text-sm text-gray-700 text-center mb-2'>
          รายการรถลูกค้าที่ไว้ใจเรา
        </div>
        <h3
          id='ourservice'
          className='text-4xl font-bold text-center mb-12 text-gray-900'
        >
          นี้คือส่วนหนึ่งจากรถยุโรป
        </h3>
        <section className='my-5 grid md:grid-cols-3 gap-2'>
          {galleryGenerator(20).map(image => (
            <CardService image={image.src} key={image.src} title={image.alt} />
          ))}
        </section>
        <Tags tags={EuropeTags}></Tags>
      </main>
    </div>
  )
}
