import { combine, createDispatch } from '../../src/state/Reducer';
import { Store } from '../../src/state/Store';

type TestAction = ColorsAction | ColorsDisplayAction

type ColorsAction = AddColor | RemoveColor
type AddColor = { type: 'add_color', color: string }
type RemoveColor = { type: 'remove_color', color: string }

type ColorsDisplayAction = IncColor | DecColor
type IncColor = { type: 'increment_color' }
type DecColor = { type: 'decrement_color' }

type TestState = {
  colors: string[],
  colorsDisplay: number
}

let state;
let store;
let colorsReducer;
let colorsDisplayReducer;

beforeEach(() => {
  state = { colors: ['blue'], colorsDisplay: 3 }
  store = new Store<TestState>(state);

  colorsReducer = (action: TestAction, colorsState: string[]) => {
    switch (action.type) {
      case 'add_color':
        return colorsState.concat([action.color]);
      case 'remove_color':
        return colorsState.filter(color => color !== action.color);
      default:
        return colorsState;
    }
  }

  colorsDisplayReducer = (action: TestAction, colorsDisplayState: number) => {
    switch (action.type) {
      case 'increment_color':
        return colorsDisplayState + 1
      case 'decrement_color':
        return colorsDisplayState - 1
      default:
        return colorsDisplayState
    }
  }
});

test('combine', async () => {
  const actionOne = { type: 'add_color', color: 'black' };

  const reducer = combine({
    colors: colorsReducer,
    colorsDisplay: colorsDisplayReducer
  });

  const newStateOne = reducer(actionOne, state)

  expect(newStateOne.colors).toEqual(['blue', 'black'])
  expect(newStateOne.colorsDisplay).toEqual(3)

  const actionTwo = { type: 'increment_color' }

  const newStateTwo = reducer(actionTwo, state)

  expect(newStateTwo.colors).toEqual(['blue'])
  expect(newStateTwo.colorsDisplay).toEqual(4)
});

test('createDispatch', async () => {
  const reducer = combine({
    colors: colorsReducer,
    colorsDisplay: colorsDisplayReducer
  });

  const dispatch = createDispatch(store, reducer);

  await dispatch({type: 'increment_color'})
  expect(store.getState()).toEqual({ colors: ['blue'], colorsDisplay: 4 })

  await dispatch({type: 'remove_color', color: store.getState().colors[0]})
  expect(store.getState()).toEqual({ colors: [], colorsDisplay: 4 })
})


