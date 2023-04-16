const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	console.log(str)
	let newStr = '';
	let res = 1;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			res++;
			console.log(res)
		} else {
			if (res === 1) {
				newStr += str[i];
				console.log(newStr)
			} else {
				newStr +=  res + str[i];
				console.log(newStr)
			}
			res = 1;
		}
	}
	console.log(newStr)
	return newStr;
	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	encodeLine
};
