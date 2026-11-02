const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
let max = 0;
let count = [...String(n)]
let begin = 0;
console.log(count)
while(count.length > begin){
  let copyCount = [...count]
  copyCount.splice(begin, 1)
  max = Math.max(max, Number(copyCount.join('')))
  begin +=1
}

return max
}

module.exports = {
  deleteDigit
};
