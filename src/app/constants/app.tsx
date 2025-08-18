export const menuList = [
  { href: '#ourservice', label: 'บริการ' },
  { href: '#ourwork', label: 'การทำงาน' },
  { href: '#aboutus', label: 'เกี่ยวกับเรา' },
  { href: '#gallery', label: 'แกลลอรี่' },
  { href: '#blog', label: 'บทความ' }
]

export const HomeTags = [
  '#แบตเตอรี่รถยนต์',
  '#ร้านแบตเตอรี่ใกล้ฉัน',
  '#ร้านเปลี่ยนแบตเตอรี่ใกล้ฉัน',
  '#ติดตั้งแบตเตอรี่นอกสถานที่',
  '#เปลี่ยนแบตเตอรี่นอกสถานที่',
  '#Batterydelivery',
  '#แบตเตอรี่ราคาโรงงาน',
  '#แบตเตอรี่ราคาถูก',
  '#ร้านแบตเตอรี่ฝั่งธน'
]

export const GalleryImage = ['/raw/images-tj/benzc220 (1).jpg']
export const GalleryImageName = [
  { path: '/raw/images-tj/benzc220 (indx).jpg', count: 4 , alt:"เปลี่ยนแบตเตอรี่ Mercedes-Benz C220d (W205)" },
  { path: '/raw/images-tj/benzcls (indx).jpg', count: 4 , alt:"เปลี่ยนแบตเตอรี่ Mercedes-Benz CLS 300d (W257)" },
  { path: '/raw/images-tj/benze200 (indx).jpg', count: 2 , alt:"เปลี่ยนแบตเตอรี่ Mercedes-Benz E200 (W212) " },
  { path: '/raw/images-tj/benzgbl (indx).jpg', count: 3 , alt:"เปลี่ยนแบตเตอรี่ Mercedes-Benz GLB200 (W247 " },
  { path: '/raw/images-tj/benzglc (indx).jpg', count: 3 , alt:"เปลี่ยนแบตเตอรี่ Mercedes-Benz GLC250d Coupe (W253)" }
]

// Type for your gallery config
interface GalleryImage {
  path: string
  count: number
  alt: string
  
}


export function galleryGenerator (limit = 5): { src: string; alt: string }[] {
  const allImagePaths = GalleryImageName.reduce<{ src: string; alt: string }[]>(
    (accumulator, image) => {
      const indices = Array.from({ length: image.count }, (_, i) => i + 1)

      const pathsForThisImage = indices.map(idx => ({
        src: image.path.replace('indx', idx.toString()),
        alt: `${image.alt} ${idx}`
      }))

      return [...accumulator, ...pathsForThisImage]
    },
    []
  )

  return allImagePaths.slice(0,limit)
}

export function getImageNameFromPath (path: string) {
  const result = path.split('/').at(-1) ?? ''
  return result
}
