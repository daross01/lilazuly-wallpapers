import { supabase } from "./supabase";

export async function getCategory(slug: string) {

    const { data, error } = await supabase
        .from("categories")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error) throw error;

    return data;

}