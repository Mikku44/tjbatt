import Tags from '@/app/components/tags'
import { HomeTags } from '@/app/constants/app'
import { Calendar, Clock, Folder } from 'lucide-react'

interface IProps {
  params: Promise<{
    categoryName: string
    blogTitle: string
  }>
}

export default async function Page ({ params }: Readonly<IProps>) {
  const { categoryName, blogTitle } = await params

  return (
    <div className='grid md:grid-cols-3 max-w-5xl mx-auto mt-20 px-4 my-20'>
      <main className='min-h-screen col-span-2 '>
        {/* Hero / Title Section */}

        {/* Featured Image */}
        <section
          className='mb-12 max-h-[300px]  rounded-2xl flex
        items-center justify-center overflow-hidden'
        >
          <img
            loading='lazy'
            src={'/icon.jpg'}
            alt={blogTitle}
            className='w-full h-full shadow-lg'
          />
        </section>

        <section className=' mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
            {blogTitle}
          </h1>
          <div className='flex flex-wrap items-start justify-start gap-4 mt-6 text-sm text-gray-500'>
            <span className='flex items-center gap-1'>
              <Folder className='w-4 h-4' />
              {categoryName}
            </span>
            <span className='flex items-center gap-1'>
              <Calendar className='w-4 h-4' />
              18 Aug 2025
            </span>
            <span className='flex items-center gap-1'>
              <Clock className='w-4 h-4' />5 min read
            </span>
          </div>
        </section>
        {/* Blog Content */}
        <article className='prose prose-lg md:prose-xl prose-gray max-w-none'>
          <p>
            This is an example blog post page layout. You can replace this
            content with real data from your CMS, database, or markdown file.
          </p>
          <h2>Subheading Example</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            convallis, lorem at viverra aliquam, justo felis tristique eros, non
            posuere sapien ipsum in nulla.
          </p>
          <ul>
            <li>Point one with explanation.</li>
            <li>Point two with more context.</li>
            <li>Point three as a takeaway.</li>
          </ul>
          <p>
            Duis vel mi ut nunc bibendum aliquet non sit amet mauris. Praesent
            nec magna eget neque gravida congue.
          </p>
        </article>
        {/* Author / Footer */}
        <section className='mt-16 p-6 bg-gray-100 rounded-2xl flex items-center gap-4'>
          <img
            src='/icon.jpg'
            alt='Author'
            className='w-16 h-16 rounded-full object-cover'
          />
          <div>
            <p className='font-semibold'>Written by TJBatt - ตั้งใจขายแบต</p>
            <p className='text-sm text-gray-600'>แอดมินตั้งใจขายแบต</p>
          </div>
        </section>
        
      </main>
      <div className=''>
        <div className="sticky top-18 md:-mt-16">
          <Tags tags={HomeTags}></Tags>
        </div>
      </div>
    </div>
  )
}
