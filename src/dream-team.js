const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let codeName = '';

  const names = members
    .filter((member) => typeof member === 'string')
    .map((member) => member.trim())
    .filter((member) => member.length > 0);

  names.sort((a, b) => a.localeCompare(b, 'en'));

  for (let i = 0; i < names.length; i++) {
    codeName += names[i][0].toUpperCase();
  }

  return codeName;
}
module.exports = {
  createDreamTeam
};
