import React from 'react'
import BlogCard from './blogCard'
import CarouselMulti from './carousel'

export default function RecentArticle () {
  return (
    <div>
      <CarouselMulti className='pb-10'>
        <BlogCard
          imageURL='/compressed/bene200.webp'
          href='/blog/seo-tips-for-beginners'
          title='10 SEO Tips for Beginners to Rank Higher on Google'
          description='Discover practical SEO tips you can start using today — from keyword research to on-page optimization and link building. Perfect for beginners looking to boost website traffic.'
          tags={['SEO', 'Digital Marketing', 'Google Ranking']}
        />
        <BlogCard
          imageURL='/compressed/bene200.webp'
          href='/blog/best-ai-tools-2025'
          title='Top 7 AI Tools in 2025 to Boost Your Productivity'
          description='Explore the best AI-powered tools in 2025 that can save you time, automate tasks, and improve your business workflow. A must-read for freelancers and entrepreneurs.'
          tags={['AI', 'Productivity', 'Tech']}
        />
        <BlogCard
          imageURL='/compressed/bene200.webp'
          href='/blog/best-places-to-visit-thailand'
          title='Best Places to Visit in Thailand for First-Time Travelers'
          description='Planning a trip to Thailand? Here’s a curated list of the best destinations, from Bangkok’s vibrant nightlife to Chiang Mai’s cultural gems and Phuket’s beaches.'
          tags={['Travel', 'Thailand', 'Tourism']}
        />
        <BlogCard
          imageURL='/compressed/bene200.webp'
          href='/blog/best-places-to-visit-thailand'
          title='Best Places to Visit in Thailand for First-Time Travelers'
          description='Planning a trip to Thailand? Here’s a curated list of the best destinations, from Bangkok’s vibrant nightlife to Chiang Mai’s cultural gems and Phuket’s beaches.'
          tags={['Travel', 'Thailand', 'Tourism']}
        />
      </CarouselMulti>
    </div>
  )
}
