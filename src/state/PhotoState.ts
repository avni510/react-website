export type PhotoState = {
  isLoading: boolean,
  photo?: string
};

export const initialPhotoState: PhotoState = {
  isLoading: true,
  photo: undefined
};
