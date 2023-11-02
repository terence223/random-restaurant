import { useEffect, useState } from 'react';
import { placesFetchApi } from '../api/foursquareApi';
import { useQuery } from 'react-query';
import { DEFAULT_CENTER_LOCATION, SEARCH_CATEGORY, SEARCH_RADIUS } from '../../config';
import getRandom from '../utils/getRandom';
import { placeSearchApiInterface } from '../types/placeSearchApi';
import { Button } from 'antd';
import MapView from '../components/MapView';

const RandomSearch = () => {
  const [location, setLocation] = useState<placeSearchApiInterface>();

  const { data } = useQuery('TodoListAPI', () =>
    placesFetchApi({
      ll: `${DEFAULT_CENTER_LOCATION.latitude},${DEFAULT_CENTER_LOCATION.longitude}`,
      radius: SEARCH_RADIUS,
      categories: SEARCH_CATEGORY,
      limit: 50,
    })
  );

  useEffect(() => {
    if (data?.results?.length > 0) {
      setLocation(getRandom<placeSearchApiInterface>(data.results as placeSearchApiInterface[]));
    }
  }, [data]);

  return (
    <>
      <Button
        type="primary"
        shape="round"
        size={'large'}
        onClick={() => {
          setLocation(getRandom<placeSearchApiInterface>(data.results as placeSearchApiInterface[]));
        }}
      >
        Random
      </Button>
      {location && <MapView latitude={location.geocodes.main.latitude} longitude={location.geocodes.main.longitude} />}
    </>
  );
};

export default RandomSearch;
