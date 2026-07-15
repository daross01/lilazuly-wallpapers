import { useParams } from "react-router-dom";

import { usePost } from "@/hooks/usePost";
import { usePostBlocks } from "@/hooks/usePostBlocks";

export default function Product() {

  const { post: slug } = useParams();

  const post = usePost(slug ?? "");

  const blocks = usePostBlocks(post?.id);

  if (!post) {

    return <p>Loading...</p>;

  }

  return (

    <main className="max-w-5xl mx-auto py-12">

      <h1 className="text-4xl font-bold">

        {post.title}

      </h1>

      {post.subtitle && (

        <h2 className="mt-4 text-xl text-gray-500">

          {post.subtitle}

        </h2>

      )}

      {post.intro && (

        <p className="mt-8">

          {post.intro}

        </p>

      )}

      <hr className="my-10" />

      <h3>

        Images: {blocks.length}

      </h3>

      {blocks.map((block) => (

        <div
          key={block.id}
          className="my-8"
        >

          <p>

            {block.filename}

          </p>

          <p>

            {block.caption}

          </p>

        </div>

      ))}

      <hr className="my-10" />

      {post.conclusion && (

        <p>

          {post.conclusion}

        </p>

      )}

    </main>

  );

}