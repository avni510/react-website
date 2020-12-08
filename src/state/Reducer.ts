import { Store } from './Store';
import { updateObject } from '../utils/Utils';

export type Reducer<TAction, TState> = (action: TAction, state: TState) => TState

export type Combine<TAction, TState> = {
  [K in keyof TState]: Reducer<TAction, TState[K]>
}

/*
 * returns a function that creates a new state object. The new state object is
 * created by dispatching the action to all the reducers. The reducer is a function
 * itself that is takes in the action and the appropiate value for the state (based on
 * the key it's iterating over). The state object is not mutated. Rather it is
 * recreated with the key data.
 */
export function combine<TAction, TState extends {[key: string]: any}>(
  reducers: Combine<TAction, TState>
): Reducer<TAction, TState> {
  return (action: TAction, state: TState): TState => {
    return Object.keys(reducers).reduce(
      (state, key: keyof TState) => {
        const reducer = reducers[key]
        return updateObject(state, key, stateValue => reducer(action, stateValue))
      },
      state
    )
  }
}

/* returns a function that takes in an action, updates the state,
 * and sets the store's state to the new state
*/
export function createDispatch<TAction, TState>(
  store: Store<TState>,
  reducer: Reducer<TAction, TState>
) {
  return (action: TAction) => store.update(
    (state) => reducer(action, state)
  )
}
