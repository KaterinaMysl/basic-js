const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	console.log(members);
	console.log(Array.isArray(members));
	if (Array.isArray(members)) {
		let name = "";
		console.log(name);
		for (let element of members) {
			if (typeof element !== 'string') {
				console.log(element);
				continue;
			}
			let trimSpace = element.trim();
			console.log(trimSpace);
			name = name + trimSpace[0].toUpperCase();
			console.log(trimSpace[0]);
			console.log(name);
		}
		let nameNew = name.split('').sort().join('');
		console.log(name.split(''));
		console.log(name.split('').sort());
		console.log(name.split('').sort().join(''));
		return nameNew;
	} else {
		return false;
	}
	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}
module.exports = {
	createDreamTeam
};
createDreamTeam(['Ruby', null, 4, '   Lily', '   Aily',])