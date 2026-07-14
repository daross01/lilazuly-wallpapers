export interface PostBlock {
  id: string;

  post_id: string;

  position: number;

  image_path: string;

  caption: string | null;

  alt: string | null;

  created_at: string;
}