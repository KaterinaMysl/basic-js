const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	
	if (options.repeatTimes !== undefined) {
		options.repeatTimes
	} else {
		options.repeatTimes = 1;
	}
	if (options.separator !== undefined) {
		String(options.separator)
	} else {
		options.separator = '+';
	}
	if (options.addition !== undefined) {
		String(options.addition)
	} else {
		options.addition = '';
	}
	if (options.additionRepeatTimes !== undefined) {
		options.additionRepeatTimes
	} else {
		options.additionRepeatTimes = 1;
	}
	if (options.additionSeparator !== undefined) {
		String(options.additionSeparator)
	} else {
		options.additionSeparator = '|';
	}

	function array(pRepeat, pAddition, pSeparation) {
		let item = new Array(pRepeat).fill(String(pAddition)).join(pSeparation);
		console.log(item);
		return item;
	}
	
	let additArr = array(options.additionRepeatTimes, options.addition, options.additionSeparator);
	
	let result = array(options.repeatTimes, str + additArr, options.separator);

	console.log(result)
	return result;


	
}
module.exports = {
	repeater
};

repeater('LALA', { repeatTimes: 3, separator: 's', addition: '+A+', additionRepeatTimes: 3 })