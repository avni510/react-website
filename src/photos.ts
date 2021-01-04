const requireContext = require.context('./images', false, /\.(jpg)$/);
const imageSources: any[] = requireContext.keys().map(requireContext);

export type Photo = {
  source: string,
  caption: string,
  orientation: Orientation,
  isInShow: boolean
};

export enum Orientation {
  LANDSCAPE,
  PORTRAIT
}

const images: Photo[] = [
  {
    source: imageSources[0].default,
    caption: 'Taken in Colombia',
    orientation: Orientation.LANDSCAPE,
    isInShow: true
  },
  {
    source: imageSources[1].default,
    caption: 'Taken in Arizona',
    orientation: Orientation.LANDSCAPE,
    isInShow: true
  },
  {
    source: imageSources[2].default,
    caption: 'Taken in Arizona',
    orientation: Orientation.PORTRAIT,
    isInShow: true
  },
  {
    source: imageSources[3].default,
    caption: 'Taken in Arizona',
    orientation: Orientation.PORTRAIT,
    isInShow: true
  },
  {
    source: imageSources[4].default,
    caption: 'Taken in Arizona',
    orientation: Orientation.LANDSCAPE,
    isInShow: true
  },
  {
    source: imageSources[5].default,
    caption: 'Taken in Arizona',
    orientation: Orientation.LANDSCAPE,
    isInShow: true
  },
  {
    source: imageSources[6].default,
    caption: 'Taken in Arizona',
    orientation: Orientation.LANDSCAPE,
    isInShow: false
  }
];

export default images;
