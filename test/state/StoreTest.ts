import { Store } from '../../src/state/Store';

test('getState_returnsTheState', () => {
  const state = {'colors': ['blue', 'orange']}

  const store = new Store(state);

  expect(store.getState()).toEqual(state)
});

test('setState_updatesTheState', async () => {
  const state = {'colors': ['blue', 'orange']}
  const store = new Store(state);

  const newState = {
    'colors': ['blue', 'orange'],
    'favoriteColor': 'black'
  }

  await store.setState(newState)

  expect(store.getState()).toEqual(newState)
});

test('setState_pushesStateToSubscribers', async () => {
  const state = {'colors': ['blue', 'orange']}
  const store = new Store(state);

  const newState = {
    'colors': ['blue', 'orange'],
    'favoriteColor': 'black'
  }

  let newStateReceived;
  const subscriber = (state): void  => newStateReceived = state

  store.subscribe(subscriber)

  await store.setState(newState)

  expect(store.getState()).toEqual(newState)
  expect(newStateReceived).toEqual(newState)
});

test('update_appliesUpdatesToState', async() => {
  const state = {'colors': ['blue', 'orange']}
  const store = new Store(state);
  const updateFunc = (currentState) => {
    return {'colors': currentState.colors.concat(['black'])}
  }

  await store.update(updateFunc);

  expect(store.getState()).toEqual({
    'colors': ['blue', 'orange', 'black']
  })
})

test('unsubscribes_removesASubscription', async () => {
  const state = {'colors': ['blue', 'orange']}
  const store = new Store(state);

  const newState = {
    'colors': ['blue', 'orange'],
    'favoriteColor': 'black'
  }

  let newStateReceived;
  const subscriber = (state): void  => newStateReceived = state

  store.subscribe(subscriber)

  await store.setState(newState)

  expect(newStateReceived).toEqual(newState)

  store.unsubscribe(subscriber)

  const anotherNewState = {
    'colors': ['blue', 'orange'],
    'favoriteColor': 'black',
    'hidden': true
  }

  expect(newStateReceived).toEqual(newState)
})
