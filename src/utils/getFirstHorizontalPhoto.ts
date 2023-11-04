// return frist HorizontalPhoto, if there is no Horizontal one, return vertical one
import { PhotoType } from '../types/foursquareApi';
import { FOURSQUARE_API_PHOTOS_KEYWORD } from '../../config';

export default function getFirstHorizontalPhoto(arr: PhotoType[]) {
  let target = arr.find(photo => photo.width > photo.height);
  if (!target && arr.length) target = arr[0];
  return target ? `${target.prefix}${FOURSQUARE_API_PHOTOS_KEYWORD}${target.suffix}` : '';
}
