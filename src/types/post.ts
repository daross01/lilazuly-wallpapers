export interface Post {

    id: string;

    subcategory_id: string;

    title: string;

    slug: string;

    subtitle: string | null;

    excerpt: string | null;

    intro: string | null;

    conclusion: string | null;

    featured_image: string | null;

    published: boolean;

    featured: boolean;

    reading_time: number | null;

    seo_title: string | null;

    seo_description: string | null;

}