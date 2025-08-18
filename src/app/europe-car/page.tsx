import { Metadata } from 'next'
import Tags from '../components/tags'
import { EuropeTags } from '../constants/app'

export const metadata: Metadata = {
  title: 'TJ Batt – ตั้งใจขายแบต อัลบั้มรถยูโรป',
  description:
    'บริการเปลี่ยนและติดตั้งแบตเตอรี่รถยนต์ถึงที่ พร้อมเลี้ยงไฟป้องกันข้อมูลหาย ตรวจเช็กสุขภาพแบตเตอรี่ฟรี บริการรวดเร็ว ครอบคลุมหลายพื้นที่',
  keywords: EuropeTags?.join(', ').replaceAll('#', '')
}

export default function page () {
  return (
    <main className='min-h-screen max-w-7xl m-auto mt-20 px-4'>
      <div
       
        className='rounded-xl overflow-hidden max-h-[300px] flex flex-col relative justify-center items-center'
      >
        
        <img
          loading='lazy'
          draggable={false}
          src='/raw/images-tj/benzgbl (2).jpg'
          alt='benz glb'
          className='w-full h-full object-center'
        />
      </div>

      <Tags tags={EuropeTags}></Tags>
    </main>
  )
}
