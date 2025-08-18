export const menuList = [
  { href: '/#ourservice', label: 'บริการ' },
  { href: '/#ourwork', label: 'การทำงาน' },
  { href: '/#aboutus', label: 'เกี่ยวกับเรา' },
  { href: '/#gallery', label: 'แกลลอรี่' },
  { href: '/#blog', label: 'บทความ' }
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

export const EuropeTags: string[] = [
  "#vartabattery",
  "#Auxiliarybattery",
  "#แบตเตอรี่เบนซ์",
  "#แบตเตอรี่บีเอ็มดับเบิลยู",
  "#แบตเตอรี่ปอร์เซ่",
  "#แบตเตอรี่agm",
  "#แบตเตอรี่บีเอ็ม",
  "#แบตเตอรี่รถยุโรป",
  "#แบตเตอรี่bmw",
  "#แบตเตอรี่benz",
  "#แบตเตอรี่porsche",
  "#แบตเตอรี่volvo",
  "#แบตเตอรี่วอลโว่",
  "#แบตเตอรี่มินิคูเปอร์",
  "#ร้านแบตเตอรี่รถยุโรป",
  "#เปลี่ยนแบตเตอรี่รถยุโรป",
  "#เปลี่ยนแบตเตอรี่รถยุโรปนอกสถานที่",
  "#Batterydelivery",
];

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
        alt: `${image.alt}`
      }))

      return [...accumulator, ...pathsForThisImage]
    },
    []
  )

  return allImagePaths.slice(0,limit)
}


interface GalleryImageItem {
  src: string;
  alt: string;
}

interface GroupedGallery {
  alt: string;
  images: string[];
}

export function groupGalleryByAlt(items: GalleryImageItem[]): GroupedGallery[] {
  const grouped: Record<string, string[]> = {};

  for (const item of items) {
    if (!grouped[item.alt]) {
      grouped[item.alt] = [];
    }
    grouped[item.alt].push(item.src);
  }

  // Convert to array of objects
  return Object.entries(grouped).map(([alt, images]) => ({
    alt,
    images
  }));
}


export function getImageNameFromPath (path: string) {
  const result = path.split('/').at(-1) ?? ''
  return result
}
