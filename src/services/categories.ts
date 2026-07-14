import { supabase } from "./supabase";
import type { Category } from "@/types/category";

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("position");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) throw error;

  return data ?? [];
}