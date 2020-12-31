import React from 'react';
import Landing from './Landing';
import { Setup } from './Setup';
import Provider from './stateMgmt/Provider';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './router/Router';

export default class App extends React.Component {
  private setup: Setup;

  constructor(props: any) {
    super(props);
    this.setup = new Setup();
  }

  public render(): JSX.Element {
    const store = this.setup.executeState();
    const container = this.setup.executeContainer(store);
    return (
      <Provider
        store={store}
        container={container}
      >
        <Router>
          {routes}
          <Landing />
        </Router>
      </Provider>
    );
  }
}
