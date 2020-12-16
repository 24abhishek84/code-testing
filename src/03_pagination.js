/**
 *  Returns an array based on the pageNumber and itemsPerPage from pageData
 * @param {number} pageNumber
 * @param {number} itemsPerPage
 * @param {Array<string>} pageData
 */
const solution = (pageNumber, itemsPerPage, pageData) => {
  const currentPage = pageNumber === 0 ? 1 : pageNumber;
  const begin = Math.abs((Math.abs(currentPage) - 1) * itemsPerPage);
  const end = begin + itemsPerPage;
  const result = pageData.slice(begin, end);
  return result.length > 0 ? result : null;
};

const data = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

module.exports = { solution, data }
