import { useEffect, useState } from "react";

import { getPosts } from "@/services/posts";

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
