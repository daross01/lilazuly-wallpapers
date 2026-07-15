import { supabase } from "./supabase";
import type { Subcategory } from "@/types/subcategory";

export async function getSubcategories(): Promise<Subcategory[]> {
  const { data, error } = await supabase
    .from("subcategories")
    .select("*")
    .order("position");

  if (error) throw error;

  return data ?? [];
}