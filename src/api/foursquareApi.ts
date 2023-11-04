import axios from 'axios';

const PLACE_SEARCH_API_URL: string = 'https://api.foursquare.com/v3/places/search';

export type PlacesFetchApiParamsType = {
  ll: string;
  radius: number;
  categories: string;
  fields: string;
  limit: number;
  openNow?: boolean;
  query?: string;
};

export const placesFetchApi = async ({
  ll,
  radius,
  categories,
  fields,
  limit,
  openNow = true,
  query,
}: PlacesFetchApiParamsType) => {
  const { data: response } = await axios.get(PLACE_SEARCH_API_URL, {
    headers: { Authorization: import.meta.env.VITE_FOURSQUARE_API_KEY, Accept: 'application/json' },
    params: { ll, radius, categories, fields, limit, openNow, query },
  });
  return response;
};
