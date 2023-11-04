import { Card } from 'antd';
import { LinkOutlined, EnvironmentOutlined, DownSquareOutlined } from '@ant-design/icons';

import type { PlaceSearchApiInterface } from '../../types/foursquareApi';
import getFirstHorizontalPhoto from '../../utils/getFirstHorizontalPhoto';

const { Meta } = Card;

const RestaurantCard = ({
  curLocation,
  openModal,
}: {
  curLocation: PlaceSearchApiInterface;
  openModal: () => void;
}) => {
  const coverPhoto = curLocation?.photos?.length ? getFirstHorizontalPhoto(curLocation.photos) : '';
  const ratingWord = curLocation?.rating ? ` ★ ${curLocation.rating}` : '';

  return (
    <Card
      cover={<img alt="" src={coverPhoto} style={{ maxWidth: '100%' }} />}
      actions={[
        <div
          onClick={() => {
            window.open(
              `https://www.google.com/maps?q=${curLocation.name} ${curLocation?.location?.formatted_address}`,
              '_blank'
            );
          }}
        >
          <EnvironmentOutlined key="google-map" style={{ marginRight: '6px' }} /> Google Map
        </div>,
        <div
          onClick={() => {
            window.open(curLocation?.website, '_blank');
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
      <Meta title={`${curLocation.name}   ${ratingWord}`} description={curLocation?.location?.formatted_address} />
    </Card>
  );
};

export default RestaurantCard;
