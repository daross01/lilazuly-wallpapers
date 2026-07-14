import { supabase } from "./supabase";
import type { PostBlock } from "@/types/postBlock";

export async function getPostBlocks(postId: string): Promise<PostBlock[]> {

  const { data, error } = await supabase
    .from("post_blocks")
    .select("*")
    .eq("post_id", postId)
    .order("position");

  if (error) throw error;

  return data;
}