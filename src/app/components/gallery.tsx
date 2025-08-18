import CarouselMulti from './carousel'

export default function Gallery () {
  const gallery = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 }
  ]

  return (
    <div>
      <CarouselMulti>
        {gallery.map(image => (
          <div
            key={image.id}
            className='rounded-xl overflow-hidden max-h-[300px] flex justify-center items-center'
          >
            <img
              draggable={false}
              src='/compressed/bene200.webp'
              className='w-full h-full object-center'
              alt='car '
            />
          </div>
        ))}
      </CarouselMulti>
    </div>
  )
}
