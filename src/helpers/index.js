/**
 * Get object key by value.
 * @param {object} object 
 * @param {string} value 
 * @returns 
 */
export function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}