import { supabase } from "./supabase";

export async function getSubcategory(slug: string) {

  const { data, error } = await supabase
    .from("subcategories")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw error;

  return data;

}