import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import { DEFAULT_CENTER_LOCATION } from '../../config';

const MapView = ({
  centerLatitude,
  centerLongitude,
  latitude,
  longitude,
}: {
  centerLatitude: number;
  centerLongitude: number;
  latitude: number;
  longitude: number;
}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return null;

  return (
    <GoogleMap
      center={{ lat: centerLatitude, lng: centerLongitude }}
      zoom={14}
      mapContainerStyle={{ margin: 'auto', width: '100%', height: '100%' }}
    >
      <MarkerF position={{ lat: DEFAULT_CENTER_LOCATION.latitude, lng: DEFAULT_CENTER_LOCATION.longitude }} />
      <MarkerF
        position={{ lat: latitude, lng: longitude }}
        onClick={() => {
          window.open(`https://www.google.com/maps/search/?q=${latitude},${longitude}`, '_blank');
        }}
      />
    </GoogleMap>
  );
};

export default MapView;
