'use client'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { galleryGeneratorWithPath } from '../constants/app'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images: ReactImageGalleryItem[] = galleryGeneratorWithPath().map(item => ({
  original: item.src,
  thumbnail: item.src,
  description: item.alt, // optional if you have alt text
}))

const renderCustomItem = (item: ReactImageGalleryItem) => {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-md">
      <img
        src={item.original}
        alt={item.originalAlt || ''}
        className="w-full h-[400px] object-cover"
      />
      {item.description && (
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-white text-lg font-medium">{item.description}</p>
        </div>
      )}
    </div>
  )
}

const renderLeftNav = (onClick: React.MouseEventHandler<HTMLButtonElement>, disabled: boolean) => (
  <button
    type="button"
    className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full shadow-md hover:bg-black/70 transition ${
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    onClick={onClick}
    disabled={disabled}
  >
    <ChevronLeft className="w-6 h-6 text-white" />
  </button>
)

const renderRightNav = (onClick: React.MouseEventHandler<HTMLButtonElement>, disabled: boolean) => (
  <button
    type="button"
    className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full shadow-md hover:bg-black/70 transition ${
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    onClick={onClick}
    disabled={disabled}
  >
    <ChevronRight className="w-6 h-6 " />
  </button>
)

const MyGallery = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <ImageGallery
        items={images}
        renderItem={renderCustomItem}
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
        showPlayButton={false}
        showFullscreenButton={true}
        additionalClass="rounded-lg"
      />
    </div>
  )
}

export default MyGallery
