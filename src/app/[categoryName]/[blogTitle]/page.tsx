import Tags from '@/app/components/tags';
import { getBlogWithSlug } from '@/app/utils/supabase/repository/blogs';
import { Calendar, Clock, Folder } from 'lucide-react';
import { Metadata } from 'next';
import React, { ReactNode } from "react";

interface IProps {
  params: Promise<{
    categoryName: string;
    blogTitle: string;
  }>;
}

// Define proper interfaces for content blocks
interface HeaderBlock {
  type: 'header';
  data: {
    text: string;
    level: number;
  };
}

interface ParagraphBlock {
  type: 'paragraph';
  data: {
    text: string;
  };
}

interface ListBlock {
  type: 'list';
  data: {
    items: string[];
    style: 'ordered' | 'unordered';
  };
}

type ContentBlock = HeaderBlock | ParagraphBlock | ListBlock;

interface BlogContent {
  time: number;
  blocks: ContentBlock[];
}

 export interface BlogPost {
  id: number;
  created_at: string;
  title: string;
  slug: string;
  content: BlogContent;
  cover_image_url: string | null;
  status: string | null;
  published_at: string | null;
  tags: string | null;
}

// Type guard functions
function isHeaderBlock(block: ContentBlock): block is HeaderBlock {
  return block.type === 'header';
}

function isParagraphBlock(block: ContentBlock): block is ParagraphBlock {
  return block.type === 'paragraph';
}

function isListBlock(block: ContentBlock): block is ListBlock {
  return block.type === 'list';
}

// Function to format date
function formatDate(dateString: string | null): string {
  if (!dateString) return 'No date';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// Function to estimate reading time
function estimateReadingTime(content: BlogContent): string {
  if (!content || !content.blocks) return '1 min read';
  
  let wordCount = 0;
  content.blocks.forEach((block: ContentBlock) => {
    if (isHeaderBlock(block) || isParagraphBlock(block)) {
      wordCount += block.data.text.split(' ').length;
    }
    if (isListBlock(block)) {
      block.data.items.forEach((item: string) => {
        wordCount += item.split(' ').length;
      });
    }
  });
  
  const readingTime = Math.ceil(wordCount / 200);
  return `${readingTime} min read`;
}

// Function to render content blocks
function renderContentBlocks(content: BlogContent): ReactNode[] {
  if (!content || !content.blocks) {
    return [<p key="no-content">No content available.</p>];
  }

  return content.blocks.map((block: ContentBlock, index: number) => {
    if (isHeaderBlock(block)) {
      const HeaderTag = `h${block.data.level}`;
      return React.createElement(
        HeaderTag,
        {
          key: index,
          className: "text-2xl font-bold my-4"
        },
        block.data.text
      );

    }
    
    if (isParagraphBlock(block)) {
      return (
        <p key={index} className="my-4 leading-relaxed">
          {block.data.text}
        </p>
      );
    }
    
    if (isListBlock(block)) {
      if (block.data.style === 'unordered') {
        return (
          <ul key={index} className="my-4 ml-6 list-disc">
            {block.data.items.map((item: string, i: number) => (
              <li key={i} className="my-2">{item}</li>
            ))}
          </ul>
        );
      } else {
        return (
          <ol key={index} className="my-4 ml-6 list-decimal">
            {block.data.items.map((item: string, i: number) => (
              <li key={i} className="my-2">{item}</li>
            ))}
          </ol>
        );
      }
    }
    
    // Fallback for unknown block types
    return (
      <div key={index} className="my-4 p-4 bg-yellow-100 border border-yellow-300 rounded">
        Unknown content block type
      </div>
    );
  });
}


export async function generateMetadata(
  { params }: IProps
): Promise<Metadata> {
  
   const {  blogTitle } = await params;
  const blogData : BlogPost[]= await getBlogWithSlug(decodeURI(blogTitle));
 

  return {
    title: `ตั้งใจขายแบต - ${blogData[0]?.title}`,
    keywords : blogData[0]?.tags?.split(","),
    openGraph: {
      images: blogData[0]?.title
    },
  }
}


 


export default async function Page({ params }: Readonly<IProps>) {
  const { categoryName, blogTitle } = await params;
  const blogData = await getBlogWithSlug(blogTitle);

  console.log(blogData)
  
  if (!blogData || blogData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Blog post not found.</p>
      </div>
    );
  }
  
  const blog: BlogPost = blogData[0];
  const readingTime = estimateReadingTime(blog.content);
  const publishedDate = formatDate(blog.published_at);

  return (
    <div className="grid md:grid-cols-3 max-w-5xl mx-auto mt-20 px-4 my-20">
      <main className="min-h-screen col-span-2">
        {/* Hero / Title Section */}

        {/* Featured Image */}
        {blog.cover_image_url && (
          <section className="mb-12 max-h-[300px] rounded-2xl flex items-center justify-center overflow-hidden">
            <img
              loading="lazy"
              src={blog.cover_image_url}
              alt={blog.title}
              className="w-full h-full object-cover shadow-lg"
            />
          </section>
        )}

        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-start justify-start gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Folder className="w-4 h-4" />
              {categoryName}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {publishedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readingTime}
            </span>
          </div>
        </section>
        
        {/* Blog Content */}
        <article className="prose prose-lg md:prose-xl prose-gray max-w-none">
          {renderContentBlocks(blog.content)}
        </article>
        
        {/* Author / Footer */}
        <section className="mt-16 p-6 bg-gray-100 rounded-2xl flex items-center gap-4">
          <img
            src="/icon.jpg"
            alt="Author"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">Written by TJBatt - ตั้งใจขายแบต</p>
            <p className="text-sm text-gray-600">แอดมินตั้งใจขายแบต</p>
          </div>
        </section>
      </main>
      
      <div className="md:ml-8">
        <div className="sticky top-18 md:-mt-16">
          <Tags tags={blog.tags?.split(",")} />
        </div>
      </div>
    </div>
  );
}