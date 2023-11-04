import { Card } from 'antd';
import { LinkOutlined, EnvironmentOutlined, DownSquareOutlined } from '@ant-design/icons';

import { PlaceSearchApiInterface } from '../../types/foursquareApi';
import getFirstHorizontalPhoto from '../../utils/getFirstHorizontalPhoto';

const { Meta } = Card;

const RestaurantCard = ({ location, openModal }: { location: PlaceSearchApiInterface; openModal: () => void }) => {
  const coverPhoto = location?.photos?.length ? getFirstHorizontalPhoto(location.photos) : '';
  const ratingWord = location?.rating ? ` ★ ${location.rating}` : '';

  return (
    <Card
      cover={<img alt="" src={coverPhoto} style={{ maxWidth: '100%' }} />}
      actions={[
        <div
          onClick={() => {
            window.open(
              `https://www.google.com/maps?q=${location.name} ${location?.location?.formatted_address}`,
              '_blank'
            );
          }}
        >
          <EnvironmentOutlined key="google-map" style={{ marginRight: '6px' }} /> Google Map
        </div>,
        <div
          onClick={() => {
            window.open(location?.website, '_blank');
          }}
        >
          <LinkOutlined key="website" style={{ marginRight: '6px' }} />
          Website
        </div>,
        <div onClick={openModal}>
          <DownSquareOutlined key="detail" style={{ marginRight: '6px' }} />
          Details
        </div>,
      ]}
    >
      <Meta title={`${location.name}   ${ratingWord}`} description={location?.location?.formatted_address} />
    </Card>
  );
};

export default RestaurantCard;
