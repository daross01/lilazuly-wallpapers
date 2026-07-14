import { supabase } from "./supabase";
import type { Subcategory } from "@/types/subcategory";

export async function getSubcategories(categoryId: string): Promise<Subcategory[]> {

  const { data, error } = await supabase
    .from("subcategories")
    .select("*")
    .eq("category_id", categoryId)
    .order("position");

  if (error) throw error;

  return data;
}