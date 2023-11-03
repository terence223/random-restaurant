import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import { DEFAULT_CENTER_LOCATION } from '../../config';

const MapView = ({ latitude, longitude }: { latitude: number; longitude: number }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return null;

  return (
    <GoogleMap
      center={{ lat: DEFAULT_CENTER_LOCATION.latitude, lng: DEFAULT_CENTER_LOCATION.longitude }}
      zoom={14}
      mapContainerStyle={{ width: '800px', height: '400px' }}
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
