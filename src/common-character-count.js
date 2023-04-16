const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
	console.log(s1)
	console.log(s2)
	let str1 = s1;
	let str2 = s2;
	let res = 0;
 
	let remove = (el, item) => {
	  let newStr = el.slice(0, item) + el.slice(item + 1);
	  
	  console.log(newStr)
	  return newStr
	}
	
	for (let i = 0; i < str1.length; i++) {
	  let item = str2.indexOf(str1[i]);
	  console.log('i',item)
	  if (item !== -1) {
		 res++;
		 str2 = remove(str2, item);
		
	  }
	}
	console.log(res)
	return res;
	
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
getCommonCharacterCount('abca', 'xyzbac')