import Script from "next/script"

const ORG = {
  '@context': 'https://schema.org',
  '@type': 'AutoPartsStore', // also valid: "AutomotiveBusiness"
  '@id': 'https://tjbatt.vercel.app/#organization',
  name: 'ตั้งใจขายแบต (TJ Batt)',
  url: 'https://tjbatt.vercel.app/',
  telephone: '+66994922889',
  email: 'invisible072@gmail.com',
  sameAs: [
    'https://www.facebook.com/people/%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%83%E0%B8%88%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B9%81%E0%B8%9A%E0%B8%95/61565826167459/',
    'https://line.me/ti/p/%40tjbatt'
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '44 ซอยพระราม 2 62 แขวงแสมดำ เขตบางขุนเทียน',
    addressLocality: 'กรุงเทพ',
    postalCode: '10150',
    addressCountry: 'TH'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '09:00',
      closes: '19:00'
    }
  ],
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'กรุงเทพมหานคร' },
    { '@type': 'AdministrativeArea', name: 'ปริมณฑล' }
  ],
  serviceArea: [
    { '@type': 'Place', name: 'พระราม 2 และฝั่งธนบุรี' },
    { '@type': 'Place', name: 'กรุงเทพฯและปริมณฑล' }
  ],
  brand: [
    { '@type': 'Brand', name: 'GS' },
    { '@type': 'Brand', name: '3K' },
    { '@type': 'Brand', name: 'FB' },
    { '@type': 'Brand', name: 'VARTA' },
    { '@type': 'Brand', name: 'AMARON' },
    { '@type': 'Brand', name: 'PUMA' },
    { '@type': 'Brand', name: 'DELKOR' },
    { '@type': 'Brand', name: 'YUASA' }
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'เปลี่ยนแบตเตอรี่นอกสถานที่',
        serviceType: 'On-site car battery replacement',
        areaServed: 'กรุงเทพฯและปริมณฑล'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'ติดตั้งแบตฯ รถไฟฟ้า/ญี่ปุ่น/ยุโรป',
        serviceType: 'EV/Japanese/European battery installation'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'ลงโปรแกรมทะเบียนแบตฯ รถยุโรป',
        serviceType: 'European battery registration programming',
        price: '0',
        priceCurrency: 'THB'
      }
    }
  ]
}

const WEBSITE = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://tjbatt.vercel.app/#website',
  url: 'https://tjbatt.vercel.app/',
  name: 'TJ Batt – ตั้งใจขายแบต',
  publisher: { '@id': 'https://tjbatt.vercel.app/#organization' }
}

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'หน้าหลัก',
      item: 'https://tjbatt.vercel.app/'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'บริการ',
      item: 'https://tjbatt.vercel.app/#บริการ'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'การทำงาน',
      item: 'https://tjbatt.vercel.app/#การทำงาน'
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'เกี่ยวกับเรา',
      item: 'https://tjbatt.vercel.app/#เกี่ยวกับเรา'
    }
  ]
}

export default function JsonLD () {
  return (
    <>
      {/* JSON-LD */}
      <Script
        id='ld-org'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG) }}
      />
      <Script
        id='ld-website'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE) }}
      />
      <Script
        id='ld-breadcrumbs'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS) }}
      />
    </>
  )
}
