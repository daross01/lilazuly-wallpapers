import { supabase } from "./supabase";
import type { Post } from "@/types/post";

export async function getPosts(): Promise<Post[]> {

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function getPost(slug: string): Promise<Post | null> {

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw error;

  return data;
}

export async function getFeaturedPosts(): Promise<Post[]> {

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("featured", true)
    .eq("published", true);

  if (error) throw error;

  return data;
}