const requireContext = require.context('./images', false, /\.(jpg)$/);
const imageSources: any[] = requireContext.keys().map(requireContext);

export type Photo = {
  source: string,
  caption: string,
  orientation: Orientation
}

export enum Orientation {
  LANDSCAPE,
  PORTRAIT
}

const images: Photo[] = [
  {
    source: imageSources[0].default,
    caption: "Taken in Colombia",
    orientation: Orientation.LANDSCAPE
  },
  {
    source: imageSources[1].default,
    caption: "Taken in Arizona",
    orientation: Orientation.LANDSCAPE
  },
  {
    source: imageSources[2].default,
    caption: "Taken in Arizona",
    orientation: Orientation.PORTRAIT
  },
  {
    source: imageSources[3].default,
    caption: "Taken in Arizona",
    orientation: Orientation.PORTRAIT
  },
  {
    source: imageSources[4].default,
    caption: "Taken in Arizona",
    orientation: Orientation.LANDSCAPE
  },
  {
    source: imageSources[5].default,
    caption: "Taken in Arizona",
    orientation: Orientation.LANDSCAPE
  },
  {
    source: imageSources[6].default,
    caption: "Taken in Arizona",
    orientation: Orientation.LANDSCAPE
  }
]

export default images;

