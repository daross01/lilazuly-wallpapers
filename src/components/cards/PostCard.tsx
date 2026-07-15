import { Link } from "react-router-dom";

import type { Post } from "@/types/post";

type Props = {

    post: Post;

};

export default function PostCard({ post }: Props) {

    return (

        <Link
            to={`/post/${post.slug}`}
            className="
            block
            rounded-2xl
            overflow-hidden
            border
            border-[var(--border)]
            bg-white
            hover:shadow-lg
            transition
            "
        >

            <img
                src={post.featured_image ?? ""}
                alt={post.title}
                className="
                aspect-[4/5]
                w-full
                object-cover
                "
            />

            <div className="p-5">

                <h2 className="text-xl font-medium">

                    {post.title}

                </h2>

                <p
                    className="
                    mt-2
                    text-sm
                    text-[var(--text-light)]
                    "
                >
                    {post.excerpt}
                </p>

            </div>

        </Link>

    );

}