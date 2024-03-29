/**
 * Adds an item to an array. If the item already exists in the array, it'll be
 * removed instead.
 *
 * @param item The item to add to the array
 * @param array The current array
 * @returns A copy of the array provided
 */
export function toggleArrayItem<T>(item: T, array: Array<T>): Array<T> {
  const index = array.indexOf(item);

  // Modify array
  if (index > -1) {
    return [...array.slice(0, index), ...array.slice(index + 1, array.length)];
  }

  const newArray = [...array];
  newArray.push(item);
  return newArray;
}
