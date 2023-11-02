export interface placeSearchApiInterface {
  fsq_id: string;
  name: string;
  distance: number;
  geocodes: {
    main: {
      latitude: number;
      longitude: number;
    };
    roof: {
      latitude: number;
      longitude: number;
    };
  };
  location: {
    formatted_address: string;
  };
  tel?: string;
  website?: string;
  rating?: number;
  menu?: string;
  photos?: {
    id: string;
    width: number;
    height: number;
    prefix: string;
    suffix: string;
    created_at: string;
  }[];
}
