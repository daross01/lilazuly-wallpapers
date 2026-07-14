export interface Category {
  id: string;

  name: string;
  slug: string;

  description: string | null;

  featured_image: string | null;

  position: number;

  seo_title: string | null;
  seo_description: string | null;

  created_at: string;
  updated_at: string;
}