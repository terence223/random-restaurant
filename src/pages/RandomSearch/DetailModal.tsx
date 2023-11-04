import Gallery from 'react-photo-gallery';
import { Card, Modal } from 'antd';
import styled from 'styled-components';

import type { PlaceSearchApiInterface } from '../../types/foursquareApi';
import { FOURSQUARE_API_PHOTOS_KEYWORD } from '../../../config';

const Title = styled.h4`
  color: #1ea1a8;
`;

const ReviewCard = styled(Card)`
  margin-bottom: 20px;
`;

const DetailModal = ({
  curLocation,
  showDetailModal,
  closeModal,
}: {
  curLocation: PlaceSearchApiInterface;
  showDetailModal: boolean;
  closeModal: () => void;
}) => {
  return (
    <Modal title={curLocation.name} centered open={showDetailModal} footer="" onCancel={closeModal}>
      {curLocation.tel && (
        <>
          <Title>Phone</Title>
          <a href={`tel:${curLocation.tel}`}>{curLocation.tel}</a>
        </>
      )}
      {curLocation.menu && (
        <>
          <Title>Menu</Title>
          <a href={curLocation.menu} target="_blank">
            {curLocation.menu}
          </a>
        </>
      )}
      {curLocation.photos?.length && (
        <>
          <Title>Photos</Title>
          <Gallery
            photos={curLocation.photos.map(photo => {
              return {
                src: `${photo.prefix}${FOURSQUARE_API_PHOTOS_KEYWORD}${photo.suffix}`,
                width: photo.width,
                height: photo.height,
              };
            })}
          />
        </>
      )}
      {curLocation.tips?.length && (
        <>
          <Title>Reviews</Title>
          {curLocation.tips.map(tip => {
            return <ReviewCard key={tip.created_at}>{tip.text}</ReviewCard>;
          })}
        </>
      )}
    </Modal>
  );
};

export default DetailModal;
