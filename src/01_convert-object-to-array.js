/**
 * This function returns the values of the input object as an array
 * @param {object} obj
 */
const solution = obj => {
  const array = Object.keys(obj).map(key => obj[key]);
  return array;
}

module.exports = solution
