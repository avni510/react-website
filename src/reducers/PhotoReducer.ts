import { PhotoState } from '../state/PhotoState';

export type PhotoActions =
{ type: 'Photo.Loading' } |
{ type: 'Photo.Loaded', photo: string }

export const photoReducer = (action: PhotoActions, photosState: PhotoState) => {
  switch (action.type) {
    case 'Photo.Loaded':
      return {
        ...photosState,
        isLoading: false,
        photo: action.photo
      }
    default:
      return photosState
  }
}
