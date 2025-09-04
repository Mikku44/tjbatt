import { MetadataRoute } from "next";
import { getAllBlog } from "./utils/supabase/repository/blogs";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.tjbatt.com";

  // --- Static Pages ---
  const staticPages = [
    { url: "/", priority: 1.0, lastmod: "2025-09-03T04:09:41+00:00" },
    { url: "/europe-car", priority: 0.8, lastmod: "2025-09-03T04:09:41+00:00" },
    { url: "/electric-car", priority: 0.8, lastmod: "2025-09-03T04:09:41+00:00" },
    { url: "/engine-car", priority: 0.8, lastmod: "2025-09-03T04:09:41+00:00" },
  ];

  // --- Blogs ---
  const blogs = await getAllBlog(); 
  // Example structure: 
  // [{ slug: "battery-tips", updatedAt: "2025-08-28T10:00:00+00:00", tags: "battery,car" }, ...]

  const blogPages = blogs.map((blog: { slug: string; updatedAt?: string }) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.updatedAt || new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.64,
  }));

  // --- Tags ---
  const allTags = new Set<string>();
  blogs.forEach((blog: { tags?: string }) => {
    blog.tags
      ?.split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .forEach((tag) => allTags.add(tag));
  });

  const tagPages = Array.from(allTags).map((tag) => ({
    url: `${baseUrl}/tag/${encodeURIComponent(tag)}`,
    lastModified: new Date().toISOString(), // or you could use latest blog.updatedAt for this tag
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  // --- Combine ---
  const allPages = [
    ...staticPages.map((p) => ({
      url: `${baseUrl}${p.url}`,
      lastModified: p.lastmod,
      changeFrequency: "weekly" as const,
      priority: p.priority,
    })),
    ...blogPages,
    ...tagPages,
  ];

  return allPages;
}
