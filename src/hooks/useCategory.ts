import { useEffect, useState } from "react";

import { getCategory } from "@/services/category";

import type { Category } from "@/types/category";

export function useCategory(slug: string) {
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    if (!slug) return;

    getCategory(slug).then(setCategory).catch(console.error);
  }, [slug]);

  return category;
}