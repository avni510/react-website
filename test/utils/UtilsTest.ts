import { updateObject } from '../../src/utils/Utils';

test('updateObject_returnsANewObjectUpdated', () => {
  const state = {a: 1, b: ['hello', 'world', 'foo']}

  const newState = updateObject(
    state,
    'a',
    (value: number) => value + 2
  );

  expect(newState).toEqual({a: 3, b: ['hello', 'world', 'foo']})
});
