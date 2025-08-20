import { Metadata } from 'next'
import Tags from '../components/tags'
import {
  brands,
  EVTags,
  galleryGeneratorWithPath,
  GalleryImageName
} from '../constants/app'
import * as motion from 'motion/react-client'

export const metadata: Metadata = {
  title: 'TJ Batt – ตั้งใจขายแบต อัลบั้มรถไฟฟ้า',
  description:
    'บริการเปลี่ยนและติดตั้งแบตเตอรี่รถยนต์ถึงที่ พร้อมเลี้ยงไฟป้องกันข้อมูลหาย ตรวจเช็กสุขภาพแบตเตอรี่ฟรี บริการรวดเร็ว ครอบคลุมหลายพื้นที่',
  keywords: EVTags?.join(', ').replaceAll('#', '')
}

export default function page () {
  return (
    <div className=''>
      {/* Hero Section */}
      <section
        className='w-full h-screen max-h-[32rem] p-5 md:p-24 relative overflow-hidden
                 bg-cover bg-no-repeat bg-center'
      >
        <img
          rel='noreferrer'
          src='https://images.unsplash.com/photo-1617886322009-e02db73a70ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='europe car cover'
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
            เราให้บริการเปลี่ยนแบตเตอรี่สำหรับรถไฟฟ้า
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
            และฝั่งธนฯ บริการนอกสถานที่ฟรี ติดตั้งแบตเตอรี่รถยนต์ไฟฟ้า
            พื้นที่ให้บริการ กทม.และปริมณฑล
            โปรแกรมลงทะเบียนแบตเตอรี่ลูกใหม่สำหรับรถไฟฟ้าฟรี!!
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
            className='md:max-w-[100px] saturate-0 max-w-[60px] h-auto'
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
      <main className='min-h-screen max-w-7xl m-auto md:mt-20 mt-5 px-4 mb-10'>
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
          ทำไมต้องติดตั้งกับเรา
        </div>
        <h3
          id='ourservice'
          className='text-4xl font-bold text-center  text-gray-900'
        >
          ความชำนาญเฉพาะทาง
        </h3>

        <p className='mt-4 leading-8 text-gray-700 mb-12 text-lg px-4'>
          <b>รถไฟฟ้า (EV)</b> คืออนาคตของการเดินทาง
          ที่ขับเคลื่อนด้วยพลังงานไฟฟ้าเต็มรูปแบบ ปราศจากการปล่อยไอเสีย
          และมีระบบเทคโนโลยีล้ำสมัย ไม่ว่าจะเป็น AION , Deepal , NETA , GWM , JAECOO , LUMIN , MG , SLEEK , XPENG , ZEEKR
          รถไฟฟ้ามีระบบไฟฟ้าแรงดันสูงและแบตเตอรี่ 12 Volt ที่ต้องการการดูแลเฉพาะทาง
          <br />
          ดังนั้น การซ่อมบำรุงหรือการเปลี่ยนอะไหล่ที่เกี่ยวข้องกับระบบไฟฟ้าของรถ
          EV จึงจำเป็นต้องอาศัยผู้เชี่ยวชาญและอุปกรณ์มาตรฐาน
          เพื่อให้มั่นใจว่ารถของคุณปลอดภัยและทำงานได้เต็มประสิทธิภาพ
        </p>

        <div className='text-sm text-gray-700 text-center mb-2'>
          รายการรถลูกค้าที่ไว้ใจเรา
        </div>
        <h3
          id='ourservice'
          className='text-4xl font-bold text-center mb-12 text-gray-900'
        >
          นี้คือส่วนหนึ่งจากรถไฟฟ้า
        </h3>

        {/* <MyGallery /> */}
        <section className='my-10 space-y-8'>
          {[GalleryImageName[GalleryImageName.length - 1]].map(image => (
            <div key={image.path} className=' p-6 space-y-4'>
              {/* Section Title */}
              <h3 className='text-2xl text-gray-800'>{image.alt}</h3>

              {/* Image Grid */}
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {galleryGeneratorWithPath(image).map((item, idx) => (
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.6, ease: 'easeOut' }
                    }}
                    viewport={{ once: true }}
                    key={idx}
                    className='relative aspect-[4/3] overflow-hidden rounded-xl group'
                  >
                    <img
                    loading='lazy'
                      src={item.src}
                      alt={item.alt}
                      className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                    />
                    {/* Overlay on hover */}
                    <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <Tags tags={EVTags}></Tags>
      </main>
    </div>
  )
}
