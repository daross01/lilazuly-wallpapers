import { useEffect, useState } from "react";

import { getSubcategory } from "@/services/subcategory";

import type { Subcategory } from "@/types/subcategory";

export function useSubcategory(slug: string) {

  const [subcategory, setSubcategory] =
    useState<Subcategory | null>(null);

  useEffect(() => {

    getSubcategory(slug).then(setSubcategory);

  }, [slug]);

  return subcategory;

}