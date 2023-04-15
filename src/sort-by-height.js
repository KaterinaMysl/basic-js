const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	
	let arr1 = [];

	for (i = 0; i < arr.length; i++) {
		if (arr[i] !== -1) {
			 arr1.push(arr[i]);
			arr1.sort((a, b) => a - b);
			console.log(arr1)
		}
	}
	for (a = 0; a < arr.length; a++) {
		
		if (arr[a] === -1) {
			
		arr1.splice(a, 0, -1);
		}
		
	}
	console.log(arr1)
	return arr1;
}

module.exports = {
  sortByHeight
};
sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])