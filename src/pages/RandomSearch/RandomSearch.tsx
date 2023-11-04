import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { RedoOutlined } from '@ant-design/icons';

import { placesFetchApi, PlacesFetchApiParamsType } from '../../api/foursquareApi';
import { DEFAULT_CENTER_LOCATION, SEARCH_CATEGORY, SEARCH_RADIUS, FOURSQUARE_RESPONSE_FIELDS } from '../../../config';
import getRandom from '../../utils/getRandom';
import type { PlaceSearchApiInterface } from '../../types/foursquareApi';
import MapView from '../../components/MapView';
import logo from '../../assets/logo.png';
import RestaurantCard from './RestaurantCard';
import DetailModal from './DetailModal';
import SearchInput from '../../components/SearchInput';
import MainColorButton from '../../components/MainColorButton';

const Container = styled.div`
  margin: 20px 20px;
`;

const MapViewContainer = styled.div`
  height: 340px;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;

const RandomButton = styled(MainColorButton)`
  margin-left: 8px;
`;

const defaultParams = {
  ll: `${DEFAULT_CENTER_LOCATION.latitude},${DEFAULT_CENTER_LOCATION.longitude}`,
  radius: SEARCH_RADIUS,
  categories: SEARCH_CATEGORY,
  limit: 50,
  fields: FOURSQUARE_RESPONSE_FIELDS,
};

const RandomSearch = () => {
  const [curLocation, setCurLocation] = useState<PlaceSearchApiInterface>();
  const [query, setQuery] = useState<string>();
  const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
  const [params, setParams] = useState<PlacesFetchApiParamsType>(defaultParams);

  const { data, isLoading } = useQuery(['PlacesFetchAPI', params], () => placesFetchApi(params));

  useEffect(() => {
    if (data?.results?.length > 0) {
      setCurLocation(getRandom<PlaceSearchApiInterface>(data.results as PlaceSearchApiInterface[]));
    }
  }, [data]);

  return (
    <>
      <img src={logo} style={{ width: '100%' }} alt="" />
      {curLocation && (
        <Container>
          <RestaurantCard
            curLocation={curLocation}
            openModal={() => {
              setShowDetailModal(true);
            }}
          />
          <ButtonArea className="test-button-area">
            <SearchInput
              value={query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setQuery(e.target.value);
              }}
              onSearch={() => {
                setParams(prev => ({
                  ...prev,
                  query,
                }));
              }}
              loading={isLoading}
            />
            <RandomButton
              onClick={() => {
                setCurLocation(getRandom<PlaceSearchApiInterface>(data.results as PlaceSearchApiInterface[]));
              }}
            >
              <RedoOutlined /> Random
            </RandomButton>
          </ButtonArea>
          <MapViewContainer>
            <MapView
              centerLatitude={DEFAULT_CENTER_LOCATION.latitude}
              centerLongitude={DEFAULT_CENTER_LOCATION.longitude}
              latitude={curLocation.geocodes.main.latitude}
              longitude={curLocation.geocodes.main.longitude}
            />
          </MapViewContainer>
          <DetailModal
            curLocation={curLocation}
            showDetailModal={showDetailModal}
            closeModal={() => {
              setShowDetailModal(false);
            }}
          />
        </Container>
      )}
    </>
  );
};

export default RandomSearch;
