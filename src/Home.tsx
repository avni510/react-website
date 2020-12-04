import * as React from 'react';
import './stylesheets/Home.css';
import images from './photos';
import { Orientation } from './photos';

type State = {
  imageIndex: number,
  timeout?: ReturnType<typeof setTimeout>
}

export class Home extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { imageIndex: 0 }
  }

  componentDidMount() {
    this.setState({timeout:
      setInterval(
        this.nextImage,
        2500
      )
    })
  }

  componentWillUnmount() {
    if (this.state.timeout) clearInterval(this.state.timeout)
  }

  public render(): JSX.Element {
    const currentImage = images[this.state.imageIndex];
    return (
      <div className="main">
        <br />
        <img
          alt=""
          src={currentImage.source}
          height={this.calculateHeight(currentImage.orientation)}
          width={this.calculateWidth(currentImage.orientation)}
          onClick={this.nextImage}
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

  private calculateHeight = (orientation: Orientation): string => orientation === Orientation.LANDSCAPE ? "600" : "600"

  private calculateWidth = (orientation: Orientation): string => orientation === Orientation.LANDSCAPE ? "900" : "450"

  private nextImage = (): void => {
    this.setState((currentState) => {
      let nextIndex = currentState.imageIndex + 1;
      if (images.length > nextIndex) {
        return {...currentState, imageIndex: currentState.imageIndex + 1 }
      } else if (nextIndex === images.length) {
        return {...currentState, imageIndex: 0 }
      }
    });
  }
}
