const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {

	let sum = 0;
	let arr = Array.from(String(n));
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
		sum = sum + (arr[i] * 1);
		console.log(sum);
	}

	if (sum.length === 1) {
		console.log(sum);
		return sum;
	} else {
		let arr1 = Array.from(String(sum));
		let sum1 = 0;
		for (let j = 0; j < arr1.length; j++) {
			console.log(arr1[j]);
			sum1 = sum1 + (arr1[j] * 1);
			console.log(sum1);
		}
		return sum1;
	}



}

module.exports = {
	getSumOfDigits
};
getSumOfDigits(199)