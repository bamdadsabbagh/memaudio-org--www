import shuffle from 'just-shuffle';

/**
 * Pick random keys from an object
 *
 * @param {object} object - The object to pick keys from
 * @param {number} [number=1] - The number of keys to pick
 * @returns {Array.<*>} - The picked keys
 */
export function pickRandomKeys(object: unknown, number = 1): unknown[] {
  if (typeof object !== 'object') {
    throw new Error('object is not an object');
  }
  if (typeof number !== 'number') {
    throw new Error('number is not a number');
  }

  let keys = Object.keys(object);
  keys = shuffle(keys);

  let response = [];
  for (let i = 0; i < number; i++) {
    response = [...response, object[keys[i]]];
  }

  return response;
}
