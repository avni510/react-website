import * as React from 'react';

export class AboutMe extends React.Component {
  public render(): JSX.Element {
    return (
      <div style={{'textAlign': 'center', 'paddingTop': '50px'}}>
        <h1> About Me </h1>
        <p> My name is Matt! I like to poop and pee.  </p>
      </div>
    );
  }
}
