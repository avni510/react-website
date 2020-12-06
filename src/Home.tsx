import * as React from 'react';
import './stylesheets/Home.css';
import images from './photos';
import { Photo } from './photos';
import { Orientation } from './photos';
import { ImageButton } from './styledComponents/ImageButton.styled';

type State = {
  imageIndex: number,
  timeout?: ReturnType<typeof setTimeout>
}

export class Home extends React.Component<{}, State> {
  slideshowImages: Photo[];

  constructor(props: any) {
    super(props);
    this.state = { imageIndex: 0 }
    this.slideshowImages = images.filter(image => image.isInShow);
  }

  componentDidMount() {
    this.setState({timeout:
      setInterval(
        this.nextImage,
        5000
      )
    })
  }

  componentWillUnmount() {
    if (this.state.timeout) clearInterval(this.state.timeout)
  }

  public render(): JSX.Element {
    const currentImage = this.slideshowImages[this.state.imageIndex];
    return (
      <div className="main">
        {this.slideshowImages.map((image, index) =>
          <ImageButton
            percentage={500 * index * .35}
            isHighlighted={index === this.state.imageIndex}
            key={image.source}
            onClick={() => this.buttonImage(index)}
          />
        )}
        <img
          alt=""
          style={{'paddingTop': '8%'}}
          src={currentImage.source}
          height={this.calculateHeight(currentImage.orientation)}
          width={this.calculateWidth(currentImage.orientation)}
        />
        <p className={currentImage.orientation === Orientation.LANDSCAPE ?
            "landscape-caption" :
            "portrait-caption"
          }>
          {currentImage.caption}
        </p>
        <p> Photos by Matt Wener </p>
      </div>
    )
  }

  private calculateHeight = (orientation: Orientation): string => orientation === Orientation.LANDSCAPE ? "550" : "550"

  private calculateWidth = (orientation: Orientation): string => orientation === Orientation.LANDSCAPE ? "850" : "450"

  private buttonImage = (index: number): void => {
    this.setState({imageIndex: index})
  }

  private nextImage = (): void => {
    this.setState((currentState) => {
      let nextIndex = currentState.imageIndex + 1;
      if (this.slideshowImages.length > nextIndex) {
        return {...currentState, imageIndex: currentState.imageIndex + 1 }
      } else if (nextIndex === this.slideshowImages.length) {
        return {...currentState, imageIndex: 0 }
      }
    });
  }
}
