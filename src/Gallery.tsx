import * as React from 'react';
import images from './photos';
import { Orientation } from './photos';

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
                height={this.calculateHeight(image.orientation)}
                width={this.calculateWidth(image.orientation)}
              />
              <p> {image.caption} </p>
              <br/ >
              <br />
            </div>
          );
        })
      }
      </div>
    );
  }

  private calculateHeight = (orientation: Orientation): string => orientation === Orientation.LANDSCAPE ? '300' : '500';

  private calculateWidth = (orientation: Orientation): string => orientation === Orientation.LANDSCAPE ? '500' : '350';
}
