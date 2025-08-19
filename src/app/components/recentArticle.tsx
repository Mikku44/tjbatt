import React from 'react'
import BlogCard from './blogCard'
import CarouselMulti from './carousel'
import { getAllBlog } from '../utils/supabase/repository/blogs'
import { BlogPost } from '../[categoryName]/[blogTitle]/page'

export default async function RecentArticle () {
  const relatedBlogs: BlogPost[] = await getAllBlog()
  return (
    <div>
      <CarouselMulti className='pb-10'>
        {relatedBlogs?.map(blog => (
          <BlogCard
            key={blog.id}
            imageURL={ blog?.cover_image_url ||'/icon.jpg'}
            href={`/blog/${blog.slug}`}
            title={blog.title}
            description={blog.title}
            tags={blog.tags?.split(",") || []}
          />
        ))}
      </CarouselMulti>
    </div>
  )
}
