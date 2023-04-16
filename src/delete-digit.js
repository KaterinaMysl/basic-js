const { NotImplementedError } = require('../extensions/index.js');

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
	
	let num = n.toString();
	console.log(num);
	let max = 0;

	for (let i = 0; i < num.length; i++) {
		let newNum = 1 * num.replace(num[i], '');
		console.log('newNum', newNum);
		if (Number(newNum) > max) {
			console.log('max', newNum);
			max = newNum *1 ;
		}
	}
	console.log(max);
	return max;
}

module.exports = {
	deleteDigit
};
deleteDigit(105984)