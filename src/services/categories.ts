import { supabase } from "./supabase";
import type { Category } from "@/types/category";

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("position");

  console.log("DATA:", data);
  if (error) {
    console.log("MESSAGE:", error.message);
    console.log("DETAILS:", error.details);
    console.log("HINT:", error.hint);
    console.log("CODE:", error.code);
    }

  if (error) throw error;

  return data ?? [];
}