import { useEffect, useState } from 'react';
import { placesFetchApi } from '../api/foursquareApi';
import { useQuery } from 'react-query';
import { DEFAULT_CENTER_LOCATION, SEARCH_CATEGORY, SEARCH_RADIUS } from '../../config';
import getRandom from '../utils/getRandom';
import { placeSearchApiInterface } from '../types/placeSearchApi';
import { Button, Input } from 'antd';
import MapView from '../components/MapView';

const { Search } = Input;

const queryParams = {
  ll: `${DEFAULT_CENTER_LOCATION.latitude},${DEFAULT_CENTER_LOCATION.longitude}`,
  radius: SEARCH_RADIUS,
  categories: SEARCH_CATEGORY,
  limit: 50,
};

const RandomSearch = () => {
  const [location, setLocation] = useState<placeSearchApiInterface>();
  const [query, setQuery] = useState<string>();

  const { data, refetch } = useQuery(['PlaceFetchAPI'], () => placesFetchApi(queryParams));

  useEffect(() => {
    if (data?.results?.length > 0) {
      setLocation(getRandom<placeSearchApiInterface>(data.results as placeSearchApiInterface[]));
    }
  }, [data]);

  return (
    <>
      <Search
        placeholder="input search text"
        enterButton="Search"
        value={query}
        onChange={e => {
          setQuery(e.target.value);
        }}
        onSearch={() => {
          refetch();
        }}
        loading={false}
      />
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
