import { BlogPost } from "@/app/[categoryName]/[blogTitle]/page"
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


export async function getBlogWithSlug(slug: string) {
  const { data, error } = await supabase
    .from("blogs")
    .select("*").filter("slug", "eq", slug)
    .order("published_at", { ascending: false })

  if (error) {
    console.error("Error fetching blogs:", error.message)
    return []
  }

  return data || []
}

export async function getAllBlogWithTag(tag: string) {
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

export async function insertBlog(blogData: Omit<BlogPost, 'id' | 'created_at'>) {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .insert([blogData])
      .select()

    if (error) {
      console.error('Error inserting blog:', error.message)
      throw error
    }

    return data
  } catch (error) {
    console.error('Failed to insert blog:', error)
    throw error
  }
}



const BUCKET_NAME = "tjbatt-Storage";

export const uploadImageToSupabase = async (imageUrl:string) => {

  if (imageUrl.startsWith('blob:')) {


    // Fetch the blob data
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    // Create a File object from the blob
    const file = new File([blob], 'image.png', {
      type: blob.type
    });

    // Generate a unique file name
    const fileName = `${Date.now()}_${file.name}`;



    
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, file);

    if (error) {
      throw error;
    }

    const { data: urlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName);


   return urlData.publicUrl;

  }
};