import { supabase } from "./supabase";

import type { Post } from "@/types/post";

export async function getPosts(): Promise<Post[]> {

    const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

    if (error) throw error;

    return data ?? [];

}