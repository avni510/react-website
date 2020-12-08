
/* creates a new object by copying over all the keys of the old object
 and setting a new value */

export function updateObject<T>(
  toUpdate: T,
  key: keyof T,
  valueFunc: (value: T[keyof T]) => T[keyof T]
): T {
  return Object.assign(
    {},
    toUpdate,
    {[key]: valueFunc(toUpdate[key])}
  )
}

