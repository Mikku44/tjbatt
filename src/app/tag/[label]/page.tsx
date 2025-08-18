// app/tags/[label]/page.tsx
import { notFound } from 'next/navigation'

interface ITagsProps {
  params: Promise<{
    label: string
  }>
}

// // Example fetch function for related blogs
async function fetchBlogsByTag () {
  return [
    { title: 'Blog 1', href: '/blog/blog-1' },
    { title: 'Blog 2', href: '/blog/blog-2' }
  ]
}

export async function generateMetadata ({ params }: ITagsProps) {
  const { label } = await params

  return {
    title: `บทความเกี่ยวกับ ${label} | ร้านแบตเตอรี่รถยนต์`,
    description: `ค้นหาบทความและข้อมูลเกี่ยวกับ ${label} สำหรับบริการแบตเตอรี่รถยนต์และการดูแลรถ`,
    keywords: [
      label,
      'แบตเตอรี่รถยนต์',
      'ร้านแบตเตอรี่ใกล้ฉัน',
      'บทความรถยนต์'
    ].join(', ')
  }
}

export default async function TagPage ({ params }: Readonly<ITagsProps>) {
  const { label } = await  params

  if (!label) notFound()

  const relatedBlogs = await fetchBlogsByTag()

  return (
    <main className='min-h-screen max-w-5xl mx-auto mt-20 px-4'>
      <header className='mb-12 text-center'>
        <h1 className='text-4xl mt-5 max-w-[500px] text-ellipsis overflow-hidden mx-auto font-bold text-gray-900'>
          บทความเกี่ยวกับ &quot;{decodeURI(label)}&quot;
        </h1>
        <p className='mt-4 text-gray-600 max-w-[500px] text-ellipsis overflow-hidden mx-auto'>
          พบบทความและข้อมูลล่าสุดเกี่ยวกับ &quot;{decodeURI(label)}&quot; สำหรับผู้ใช้รถทุกคน
        </p>
      </header>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {relatedBlogs.map(blog => (
          <a
            key={blog.href}
            href={blog.href}
            className='p-5 border rounded-xl hover:shadow-lg transition-shadow'
          >
            <h2 className='text-xl font-semibold text-gray-900'>
              {blog.title}
            </h2>
            <p className='mt-2 text-gray-600 text-sm'>
              คลิกเพื่ออ่านบทความเต็ม
            </p>
          </a>
        ))}
      </section>
    </main>
  )
}
