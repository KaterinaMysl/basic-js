const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
	console.log(names)
	for (let i = 0; i < names.length; i++) {
		let res = 1;
		for (let j = i + 1; j < names.length; j++) {
			if (names[i] === names[j]) {
				names[j] += `(${res})`;
				console.log(names[i])
				console.log(names[j])
				res++;
				console.log(res)
			}
		}
	}
	console.log(names)
	return names;


	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	renameFiles
};
renameFiles(['a', 'a','b', 'cd', 'b ', 'a(3)'])