const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	console.log(domains)
	const res = {};

	domains.forEach((item) => {
		let domainEl = item.split('.').reverse();
		console.log(domainEl)
		let nextDomain = '';

		domainEl.forEach((el) => {
			nextDomain += `.${el}`;
			console.log(nextDomain)
			if (res[nextDomain]) {
				++res[nextDomain];
			} else {
				res[nextDomain] = 1;
			}

			console.log(res[nextDomain])

		});
	});
	console.log(res)
	return res;

	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	getDNSStats
};
getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])