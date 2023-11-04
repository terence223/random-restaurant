import Gallery from 'react-photo-gallery';
import { Card, Modal } from 'antd';
import styled from 'styled-components';

import { PlaceSearchApiInterface } from '../../types/foursquareApi';
import { FOURSQUARE_API_PHOTOS_KEYWORD } from '../../../config';

const Title = styled.h4`
  color: #1ea1a8;
`;

const ReviewCard = styled(Card)`
  margin-bottom: 20px;
`;

const DetailModal = ({
  location,
  detailModal,
  closeModal,
}: {
  location: PlaceSearchApiInterface;
  detailModal: boolean;
  closeModal: () => void;
}) => {
  return (
    <Modal title={location.name} centered open={detailModal} footer="" onCancel={closeModal}>
      {location.tel && (
        <>
          <Title>Phone</Title>
          <a href={`tel:${location.tel}`}>{location.tel}</a>
        </>
      )}
      {location.menu && (
        <>
          <Title>Menu</Title>
          <a href={location.menu} target="_blank">
            {location.menu}
          </a>
        </>
      )}
      {location.photos?.length && (
        <>
          <Title>Photos</Title>
          <Gallery
            photos={location.photos.map(photo => {
              return {
                src: `${photo.prefix}${FOURSQUARE_API_PHOTOS_KEYWORD}${photo.suffix}`,
                width: photo.width,
                height: photo.height,
              };
            })}
          />
        </>
      )}
      {location.tips?.length && (
        <>
          <Title>Reviews</Title>
          {location.tips.map(tip => {
            return <ReviewCard key={tip.created_at}>{tip.text}</ReviewCard>;
          })}
        </>
      )}
    </Modal>
  );
};

export default DetailModal;
