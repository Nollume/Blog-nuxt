
export interface CurrentUserCollection {
  id: number;
  title: string;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  cover_photo: null;
  user: null;
}

export interface Exif {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

export interface ImageLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Location {
  city: string;
  country: string;
  position: Position;
}

export interface Tag {
  title: string;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}
export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}

export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  links: UserLinks;
}

export interface Image {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  public_domain: boolean;
  description: string;
  alt_description: string;
  exif: Exif;
  location: Location;
  tags: Tag[];
  current_user_collections: CurrentUserCollection[];
  urls: Urls;
  links: ImageLinks;
  user: User;
}

export default defineEventHandler(async (e) : Promise<Image> => {
  const { apiUrlBase, accessKey } : {apiUrlBase : string, accessKey : string} = useRuntimeConfig()

  const { id } : {id: string } = e.context.params
  const apiUrl = `${apiUrlBase}/${id}?client_id=${accessKey}`

  const result : Image = await $fetch(apiUrl)

  return result
})
