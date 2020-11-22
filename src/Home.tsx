import * as React from 'react';
import { Link } from 'react-router-dom';

const requireContext = require.context('./images', false, /\.(jpg)$/);
const images: any[] = requireContext.keys().map(requireContext);

type State = {
  imageIndex: number,
  timeout?: ReturnType<typeof setTimeout>
}

export class Home extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      imageIndex: 0,
    }
  }

  componentWillMount() {
    this.setState({timeout:
      setTimeout(
        this.nextImage,
        2000
      )
    })
  }

  componentWillUnmount() {
    if (this.state.timeout) clearTimeout(this.state.timeout)
  }

  public render(): JSX.Element {
    console.log(images)
    return (
      <div className="main">
        <br />
        <img
          alt=""
          src={images[this.state.imageIndex].default}
          height="600" width="400"
          onClick={this.nextImage}
        />
        <p>
          Photos by Matt Wener
        </p>
        <Link style={{"color": "white"}} to="/about_me">About Me</Link>
      </div>
    )
  }

  private nextImage = (): void => {
    this.setState((currentState) => {
      let nextIndex = currentState.imageIndex + 1;
      if (images.length > nextIndex) {
        return {...currentState, imageIndex: currentState.imageIndex + 1 }
      }
    });
  }
}
