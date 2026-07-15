import { useEffect, useState } from "react";

import { getSubcategories } from "@/services/subcategories";

import type { Subcategory } from "@/types/subcategory";

export function useSubcategories() {
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);

  useEffect(() => {
    async function loadSubcategories() {
      try {
        const data = await getSubcategories();
        setSubcategories(data);
      } catch (error) {
        console.error("Error loading subcategories:", error);
      }
    }

    loadSubcategories();
  }, []);

  return subcategories;
}