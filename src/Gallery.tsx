import * as React from 'react';
import images from './photos';

export class Gallery extends React.Component {
  public render(): JSX.Element {
    return (
      <div style={{'textAlign': 'center', 'paddingTop': '50px'}}>
        <h1> Gallery </h1>
        {images.map(image => {
          return (
            <div>
              <img
                alt=""
                src={image.source}
                height="400" width="300"
              />
              <p> {image.caption} </p>
              <br/ >
              <br />
            </div>
          )
        })
      }
      </div>
    )
  }
}
