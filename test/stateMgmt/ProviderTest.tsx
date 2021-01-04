import * as React from 'react';
import { configure, shallow } from 'enzyme';
import Provider from '../../src/stateMgmt/Provider';
import { StoreContext } from '../../src/stateMgmt/Provider';
import { Store } from '../../src/stateMgmt/Store';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

class TestComponent extends React.Component {
  static contextType = StoreContext;

  public render(): JSX.Element {
    const state = this.context.store.getState();
    const firstColor = state.colors[0]
    return <div> firstColor </div>
  }
}

test('Provider', () => {

  type State = { colors: string[] }

  const state = {colors: ['blue', 'orange']}
  const store = new Store(state);

  const colorCommandsFunc = (n: number) => n + 1

  type AppContainer = {
    colorCommands: (n: number) => number
  }

  const container = { colorCommands: colorCommandsFunc }

  let wrapper = shallow(
    <Provider container={container} store={store}>
      <TestComponent/>
    </Provider>
  );

  expect(wrapper.containsMatchingElement(<TestComponent />)).toEqual(true);
});
