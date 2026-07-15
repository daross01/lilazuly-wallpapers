import { useParams } from "react-router-dom";

import { usePost } from "@/hooks/usePost";
import { usePostBlocks } from "@/hooks/usePostBlocks";

import { getWallpaperUrl } from "@/lib/storage";

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
        <h2 className="mt-4 text-xl text-[var(--text-light)]">
          {post.subtitle}
        </h2>
      )}

      {post.intro && (
        <p className="mt-8 leading-8">
          {post.intro}
        </p>
      )}

      <hr className="my-10" />

      <h3 className="mb-10">
        Images: {blocks.length}
      </h3>

      {blocks.map((block) => (

        <section
          key={block.id}
          className="mb-16"
        >

          <img

            src={getWallpaperUrl(
              post.folder!,
              block.filename
            )}

            alt={block.alt ?? ""}

            className="
              w-full
              rounded-xl
              shadow-lg
            "

            loading="lazy"

          />

          {block.caption && (

            <p className="mt-4 text-center text-[var(--text-light)]">

              {block.caption}

            </p>

          )}

        </section>

      ))}

      {post.conclusion && (

        <section className="mt-16">

          <hr className="mb-10" />

          <p className="leading-8">

            {post.conclusion}

          </p>

        </section>

      )}

    </main>

  );

}