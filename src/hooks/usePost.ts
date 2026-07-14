import { useEffect, useState } from "react";
import { getPost } from "@/services/posts";
import type { Post } from "@/types/post";

export function usePost(slug: string) {

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    getPost(slug).then(setPost);
  }, [slug]);

  return post;
}
