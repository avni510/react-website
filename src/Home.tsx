import * as React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/Home.css';
import images from './photos';

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
        2000
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
          height="600" width="400"
          onClick={this.nextImage}
        />
        <p className="caption"> {currentImage.caption} </p>
        <p> Photos by Matt Wener </p>
      </div>
    )
  }

  private nextImage = (): void => {
    this.setState((currentState) => {
      let nextIndex = currentState.imageIndex + 1;
      console.log(nextIndex)
      if (images.length > nextIndex) {
        return {...currentState, imageIndex: currentState.imageIndex + 1 }
      } else if (nextIndex === images.length) {
        return {...currentState, imageIndex: 0 }
      }
    });
  }
}
