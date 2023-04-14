const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform (arr) {
	if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!");
	}
	let newArray = [];

	for (let i = 0; i < arr.length; i++) {
		console.log(newArray)
		switch (arr[i]) {
			case '--discard-next':
				newArray.push(null);
				i++;
				break;
			case '--discard-prev':
				if (arr[i - 1] !== null) {
					newArray.pop();
					newArray.push(null);
				}
				break;
			case '--double-next':
				if (arr[i + 1]) {
					newArray.push(arr[i + 1]);
				}
				break;
			case '--double-prev':
				if (newArray[newArray.length - 1] && newArray.length !== null) {
					newArray.push(newArray[newArray.length - 1]);
				}
				break;
			default:
				newArray.push(arr[i]);
				break;
		}
	}
	console.log(newArray);
	let cleanArray = newArray.filter(j => j !== null);
	console.log(cleanArray);
	return cleanArray;


}

module.exports = {
	transform
};
transform([1, '--discard-prev', 3, 1337, '--discard-next', 4, 5])