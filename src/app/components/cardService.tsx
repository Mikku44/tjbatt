import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface ICardSProps {
  title: string
  href?: string
  image?: string
}

export default function CardService ({
  title,
  href = '#',
  image = '/raw/bene200.jpeg'
}: Readonly<ICardSProps>) {
  return (
    <Link
      href={href}
      className='relative group flex justify-center items-center rounded-xl w-full h-full aspect-square max-h-[400px] overflow-hidden'
    >
        <div className="bg-black/40 h-full w-full absolute z-9">.</div>
      <div className=' absolute left-0 bottom-0 text-white m-5 z-10'>
        <div className=''>
          <h4 className='md:text-3xl text-2xl '>{title}</h4>
          <p className='text-lg font-light  opacity-80'>
            รถที่เข้ารับบริการติดตั้งแบตเตอรี่
          </p>
        </div>
      </div>

      <ChevronRight
        className='absolute -bottom-5 opacity-0
         duration-300 size-8 group-hover:bottom-5 right-0 text-white
         group-hover:opacity-100 m-5 z-10'
      ></ChevronRight>

      <img
        className='rounded-xl w-full group-hover:scale-105 duration-200'
        width={400}
        height={400}
        src={image}
        alt={title}
      />
    </Link>
  )
}
