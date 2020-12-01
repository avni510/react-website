const requireContext = require.context('./images', false, /\.(jpg)$/);
const imageSources: any[] = requireContext.keys().map(requireContext);

type Photo = {
  source: string,
  caption: string
}

const images: Photo[] = [
  {
    source: imageSources[0].default,
    caption: "Taken in Colombia"
  },
  {
    source: imageSources[1].default,
    caption: "Taken in Arizona"
  }
]

export default images;

