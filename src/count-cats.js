const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */backyard) {
	let number = 0;
	let a = 0;
	console.log(backyard)
	for (; a < backyard.length; a++) {
		let b = 0;
		
		for (; b < backyard[a].length; b++) {
			
			if (backyard[a][b] === "^^") {
				number++;
				
				
			}
		}
	} 
	console.log(number)
	return number;
	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	countCats
};
countCats([
	 [0, 1, '^^'],
	  [0, '^^', 2],
	 ['^^', 1, 2]
	])