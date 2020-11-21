import * as React from 'react';
import testImageOne from './images/test-image-1.jpg'
import { Link } from 'react-router-dom';

export class Home extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="main">
        <br />
        <img alt="" src={testImageOne} height="600" width="400"/>
        <p>
          Photos by Matt Wener
        </p>
        <Link style={{"color": "white"}} to="/about_me">About Me</Link>
      </div>
    )
  }
}
