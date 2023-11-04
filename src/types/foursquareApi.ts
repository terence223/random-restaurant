export type PhotoType = {
  id: string;
  width: number;
  height: number;
  prefix: string;
  suffix: string;
  created_at: string;
};

export interface PlaceSearchApiInterface {
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
  photos?: PhotoType[];
  tips: {
    created_at: string;
    text: string;
  }[];
}
