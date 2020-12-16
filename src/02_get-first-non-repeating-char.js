/**
 *  This function takes a finite string and returns
 *  the first non repeating unique character.
 *  Assume input string is all lowercase
 * @param {String} str
 */
const solution = str => {
  for (let i = 0; i < str.length; i++) {
    const c = str.charAt(i);
    if (str.indexOf(c) === i && str.indexOf(c, i + 1) === -1) {
      return c;
    }
  }
  return null;
}

module.exports = solution
