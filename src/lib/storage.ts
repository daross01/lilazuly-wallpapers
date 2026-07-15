import { supabase } from "@/services/supabase";

const BUCKET = "images";

const ROOT_FOLDER = "wallpapers";

export function getWallpaperUrl(
  folder: string,
  filename: string
) {

  const { data } = supabase.storage

    .from(BUCKET)

    .getPublicUrl(
      `${ROOT_FOLDER}/${folder}/${filename}`
    );

  return data.publicUrl;

}