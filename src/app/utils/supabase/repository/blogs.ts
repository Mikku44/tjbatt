import { supabase } from "../client"

export async function getAllBlog() {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("published_at", { ascending: false }) 

  if (error) {
    console.error("Error fetching blogs:", error.message)
    return []
  }

  return data || []
}


export async function getBlogWithSlug(slug:string) {
  const { data, error } = await supabase
    .from("blogs")
    .select("*").filter("slug","eq",slug)
    .order("published_at", { ascending: false })

  if (error) {
    console.error("Error fetching blogs:", error.message)
    return []
  }

  return data || []
}

export async function getAllBlogWithTag(tag : string) {
  let query = supabase
    .from("blogs")
    .select("*")
    .order("published_at", { ascending: false });

  // For exact tag matching (requires tags to be stored consistently)
  if (tag) {
    query = query.or(`tags.cs.{${tag}},tags.cs.{#${tag}}`);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching blogs:", error.message);
    return [];
  }

  return data || [];
}