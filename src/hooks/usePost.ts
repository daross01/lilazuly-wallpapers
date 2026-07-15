import { useEffect, useState } from "react";

import {
  getPosts,
  getPostBySlug,
} from "@/services/posts";

import type { Post } from "@/types/post";

export function usePosts() {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {

    async function load() {

      const data = await getPosts();

      setPosts(data);

    }

    load();

  }, []);

  return posts;

}

export function usePost(slug: string) {

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {

    if (!slug) return;

    async function load() {

      try {

        const data = await getPostBySlug(slug);

        setPost(data);

      } catch (error) {

        console.error(error);

        setPost(null);

      }

    }

    load();

  }, [slug]);

  return post;

}
