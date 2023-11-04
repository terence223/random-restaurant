import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Button, ConfigProvider } from 'antd';
import styled from 'styled-components';
import { RedoOutlined } from '@ant-design/icons';

import { placesFetchApi, PlacesFetchApiParamsType } from '../../api/foursquareApi';
import { DEFAULT_CENTER_LOCATION, SEARCH_CATEGORY, SEARCH_RADIUS, FOURSQUARE_RESPONSE_FIELDS } from '../../../config';
import getRandom from '../../utils/getRandom';
import { PlaceSearchApiInterface } from '../../types/foursquareApi';
import MapView from '../../components/MapView';
import logo from '../../assets/logo.png';
import RestaurantCard from './RestaurantCard';
import DetailModal from './DetailModal';
import SearchInput from '../../components/SearchInput';

const Container = styled.div`
  margin: 20px 20px;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;

const RandomButton = styled(Button)`
  &:focus {
    outline: 0;
  }
`;

const defaultParams = {
  ll: `${DEFAULT_CENTER_LOCATION.latitude},${DEFAULT_CENTER_LOCATION.longitude}`,
  radius: SEARCH_RADIUS,
  categories: SEARCH_CATEGORY,
  limit: 50,
  fields: FOURSQUARE_RESPONSE_FIELDS,
};

const RandomSearch = () => {
  const [location, setLocation] = useState<PlaceSearchApiInterface>();
  const [query, setQuery] = useState<string>();
  const [detailModal, setDetailModal] = useState<boolean>(false);
  const [params, setParams] = useState<PlacesFetchApiParamsType>(defaultParams);

  const { data, isLoading } = useQuery(['PlacesFetchAPI', params], () => placesFetchApi(params));

  useEffect(() => {
    if (data?.results?.length > 0) {
      setLocation(getRandom<PlaceSearchApiInterface>(data.results as PlaceSearchApiInterface[]));
    }
  }, [data]);

  return (
    <>
      <img src={logo} style={{ width: '100%' }} alt="" />
      {location && (
        <Container>
          <RestaurantCard
            location={location}
            openModal={() => {
              setDetailModal(true);
            }}
          />
          <ButtonArea>
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
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#1ea1a8',
                },
                components: {
                  Button: {
                    borderColorDisabled: '#1ea1a8',
                    defaultShadow: '0 2px 0 #1ea1a8',
                  },
                },
              }}
            >
              <RandomButton
                style={{ marginLeft: '8px' }}
                type="primary"
                onClick={() => {
                  setLocation(getRandom<PlaceSearchApiInterface>(data.results as PlaceSearchApiInterface[]));
                }}
              >
                <RedoOutlined /> Random
              </RandomButton>
            </ConfigProvider>
          </ButtonArea>
          <div style={{ height: '340px' }}>
            <MapView
              centerLatitude={DEFAULT_CENTER_LOCATION.latitude}
              centerLongitude={DEFAULT_CENTER_LOCATION.longitude}
              latitude={location.geocodes.main.latitude}
              longitude={location.geocodes.main.longitude}
            />
          </div>
          <DetailModal
            location={location}
            detailModal={detailModal}
            closeModal={() => {
              setDetailModal(false);
            }}
          />
        </Container>
      )}
    </>
  );
};

export default RandomSearch;
