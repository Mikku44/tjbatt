import { galleryGenerator } from '../constants/app'
import CarouselMulti from './carousel'

export default function Gallery () {
  return (
    <div>
      <CarouselMulti>
        {galleryGenerator().map(image => (
          <div
            key={image.src}
            className='rounded-xl overflow-hidden max-h-[300px] flex flex-col relative justify-center items-center'
          >
            <div className='w-full h-full absolute bg-linear-180 to-black/80 from-black/0'>
              .
            </div>
            <div className='text-xl absolute bottom-0 text-white max-w-[90%] mb-4'>
              {image.alt}
            </div>
            <img
              loading='lazy'
              draggable={false}
              src={image.src}
              className='w-full h-full object-center'
              alt={image.alt}
            />
          </div>
        ))}
      </CarouselMulti>
    </div>
  )
}
