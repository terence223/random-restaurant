import { placesFetchApi } from '../api/foursquareApi';
import { useQuery } from 'react-query';
import { DEFAULT_CENTER_LOCATION, SEARCH_CATEGORY, SEARCH_RADIUS } from '../../config';

const RandomSearch = () => {
  const { data } = useQuery('TodoListAPI', () =>
    placesFetchApi({
      ll: `${DEFAULT_CENTER_LOCATION.latitude},${DEFAULT_CENTER_LOCATION.longitude}`,
      radius: SEARCH_RADIUS,
      categories: SEARCH_CATEGORY,
      limit: 50,
    })
  );

  return <div>RandomSearch</div>;
};

export default RandomSearch;
