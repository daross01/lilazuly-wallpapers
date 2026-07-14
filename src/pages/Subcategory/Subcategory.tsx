import { useParams } from "react-router-dom";

export default function Subcategory() {
  const { category, subcategory } = useParams();

  return (
    <main className="py-12">
      <h1 className="text-4xl font-bold">
        {subcategory}
      </h1>

      <p className="mt-4 text-[var(--text-light)]">
        Category: {category}
      </p>
    </main>
  );
}