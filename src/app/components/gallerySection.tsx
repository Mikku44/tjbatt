'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { galleryGeneratorWithPath, GalleryImageName } from '../constants/app'

export default function GallerySection() {
  const [index, setIndex] = useState(-1)
  
  // Data processing
  const lastGallery = GalleryImageName[GalleryImageName.length - 1]
  const images = galleryGeneratorWithPath(lastGallery)

  // Format images for the library
  const slides = images.map((img) => ({
    src: img.src,
    alt: img.alt,
  }))

  return (
    <section className='my-20 max-w-7xl mx-auto px-6'>
      <div className='mb-8 space-y-2'>
        <h3 className='text-3xl font-bold text-slate-900 tracking-tight'>
          {lastGallery.alt}
        </h3>
        <p className="text-slate-500 font-light italic">คลิกที่รูปภาพเพื่อขยายดูความละเอียด</p>
      </div>

      {/* Image Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {images.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            viewport={{ once: true }}
            onClick={() => setIndex(idx)} // Open lightbox at this index
            className='relative aspect-[4/3] overflow-hidden rounded-2xl group cursor-pointer'
          >
            <img
              loading='lazy'
              src={item.src}
              alt={item.alt}
              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
            />
            {/* Minimal Overlay */}
            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300' />
          </motion.div>
        ))}
      </div>

      {/* The Lightbox Library Component */}
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        // Customizing styles for "Premium Minimal" look
        styles={{
          container: { backgroundColor: "rgba(255, 255, 255, 0.95)" },
          button: { color: "#000" },
        }}
        render={{
          iconClose: () => <span className="text-sm font-bold uppercase tracking-widest">Close</span>,
          iconPrev: () => <span className="text-2xl">←</span>,
          iconNext: () => <span className="text-2xl">→</span>,
        }}
      />
    </section>
  )
}