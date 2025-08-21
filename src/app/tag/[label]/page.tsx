// app/tags/[label]/page.tsx
import { BlogPost } from '@/app/[categoryName]/[blogTitle]/page'
import BlogCard from '@/app/components/blogCard'
import { getAllBlog } from '@/app/utils/supabase/repository/blogs'
import { notFound } from 'next/navigation'

interface ITagsProps {
  params: Promise<{
    label: string
  }>
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
  const { label } = await params

  if (!label) notFound()

  const relatedBlogs = await getAllBlog()

  return (
    <main className='min-h-screen max-w-5xl mx-auto mt-20 px-4'>
      <header className='mb-12 text-center'>
        <h1 className='text-4xl mt-5 max-w-[500px] text-ellipsis overflow-hidden mx-auto font-bold text-gray-900'>
          บทความเกี่ยวกับ &quot;{decodeURI(label)}&quot;
        </h1>
        <p className='mt-4 text-gray-600 max-w-[500px] text-ellipsis overflow-hidden mx-auto'>
          พบบทความและข้อมูลล่าสุดเกี่ยวกับ &quot;{decodeURI(label)}&quot;
          สำหรับผู้ใช้รถทุกคน
        </p>
      </header>

      <section className='pb-20'>
        <ul className='grid gap-4 md:grid-cols-2'>
          {relatedBlogs?.map(blog => (
            <BlogCard
              key={blog.id}
              imageURL={blog?.cover_image_url || '/icon.jpg'}
              href={`/blog/${blog.slug}`}
              title={blog.title}
              description={blog.title}
              tags={blog.tags?.split(',') || []}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}
