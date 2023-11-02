import axios from 'axios';

const FOURSQUARE_API_URL: string = 'https://api.foursquare.com/v3/places/search';

export const placesFetchApi = async ({
  ll,
  radius,
  categories,
  fields = 'fsq_id,name,geocodes,location,distance,tel,website,rating,menu,photos',
  limit,
  openNow = true,
  query,
}: {
  ll: string;
  radius: number;
  categories: string;
  fields?: string;
  limit: number;
  openNow?: boolean;
  query?: string;
}) => {
  const { data: response } = await axios.get(FOURSQUARE_API_URL, {
    headers: { Authorization: import.meta.env.VITE_FOURSQUARE_API_KEY, Accept: 'application/json' },
    params: { ll, radius, categories, fields, limit, openNow, query },
  });
  return response;
};
