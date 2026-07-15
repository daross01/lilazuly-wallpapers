import { useEffect, useState } from "react";

import { getPostBlocks } from "@/services/postBlocks";

import type { PostBlock } from "@/types/postBlock";

export function usePostBlocks(postId: string | undefined) {

  const [blocks, setBlocks] = useState<PostBlock[]>([]);

  useEffect(() => {

    if (!postId) {
      setBlocks([]);
      return;
    }

    const id = postId;

    async function load() {

      const data = await getPostBlocks(id);

      setBlocks(data);

    }

    load();

  }, [postId]);

  return blocks;

}