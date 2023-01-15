interface DatumLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}
interface Social {
  instagram_username: null;
  portfolio_url: string;
  twitter_username: string;
  paypal_email: null;
}
interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: null;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: null;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

interface Sponsorship {
  impression_urls: string[];
  tagline: string;
  tagline_url: string;
  sponsor: User;
}

interface TopicSubmissions {}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
interface ImagesData {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: null | string;
  urls: Urls;
  links: DatumLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: Sponsorship;
  topic_submissions: TopicSubmissions;
  user: User;
}

export default defineEventHandler(async (event) : Promise<ImagesData[] | undefined> => {
  const { apiUrlBase, accessKey } : {apiUrlBase : string, accessKey : string} = useRuntimeConfig()
  // const query = getQuery(event)

  // const response : ImagesData[] = await $fetch(`${apiUrlBase}?client_id=${accessKey}&per_page=${query.quantity}&page=${query.pagination}&order_by=latest`)
  const response : ImagesData[] = await $fetch(`${apiUrlBase}?client_id=${accessKey}&per_page=4&page=1&order_by=latest`)

  return response
})
