const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr) {
		console.log('массив', arr)
		let depth = 0;

		for (let item of arr) {
			if (Array.isArray(item)) {
				depth = Math.max(depth, this.calculateDepth(item));
				console.log('первое',depth)
			}
		}
		console.log('второе',depth + 1)
		return depth + 1;
	}
}

module.exports = {
	DepthCalculator
};

const depthCalc = new DepthCalculator();
let sum = depthCalc.calculateDepth([[6, 7, [8, 9]]]) 
console.log(sum)


//  1, 2, 3, 4, [ 1, 2, [ 1, 2, [Array] ] ], 5, [ 1, [ [Array] ] ] 