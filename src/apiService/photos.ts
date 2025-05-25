import axios from "axios";
const API_KEY: string = "MgGVu-2Aj7GbcWHyEAULVPxtWi0-9yK_brGw5GgXLKI";
// const UNSPLASH_URL = "https://api.unsplash.com/search/photos";
const BASE_URL = "https://api.unsplash.com";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 16,
};

export interface UnsplashPhoto {
  id: string;
  alt_description: string | null;
  color: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    name: string;
  };
}

interface GetPhotosResponse {
  photos: UnsplashPhoto[];
  total_results: number;
  per_page: number;
}

export const getPhotos = async (
  query: string,
  page: number
): Promise<GetPhotosResponse> => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
    },
  });

  return {
    photos: response.data.results,
    total_results: response.data.total,
    per_page: 16,
  };
};
