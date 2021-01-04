import * as React from 'react';
import { Store } from './Store';

type Props<TContainer, TState> = {
  container: TContainer
  store: Store<TState>
}

export const ContainerContext = React.createContext({});
export const StoreContext = React.createContext({});

export default class Provider<TContainer, TState> extends React.Component<Props<TContainer, TState>, {}> {

  public render() {
    return (
      <StoreContext.Provider value={this.props.store}>
        <ContainerContext.Provider value={this.props.container}>
          {this.props.children}
        </ContainerContext.Provider>
      </StoreContext.Provider>
    )
  }
}

