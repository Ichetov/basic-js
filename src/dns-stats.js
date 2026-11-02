const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
 let obj = {};
 let copyDomains = [...domains]
for(let i = 0; i < domains.length; i++){
   let val = copyDomains[i].split('.')
   let copy = '';
   console.log(val)
   for(let j = val.length - 1; j >= 0; j--){
      if(copy + '.' + val[j] in obj){
         obj[copy + '.' + val[j]] += 1
      }else{
        
        obj[copy + '.' + val[j]] = 1
      }
      copy = copy + '.' + val[j]
   }
}
return obj
}

module.exports = {
  getDNSStats
};
