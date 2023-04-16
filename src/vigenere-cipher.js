const { NotImplementedError } = require('../extensions/index.js');


//  Implement class VigenereCipheringMachine that allows us to create
//  direct and reverse ciphering machines according to task description
 
//   @example
  

 
class VigenereCipheringMachine {
	constructor(Cipher = true) {
		this.Cipher = Cipher;
		console.log(Cipher)
	}

	encrypt(message, key) {
		if (!message || !key) {
			throw new Error('Incorrect arguments!');
		}

		message = message.toUpperCase();
		key = key.toUpperCase();
		// console.log('message', message)
		// console.log('key', key)

		let result = '';
		let j = 0;

		for (let i = 0; i < message.length; i++) {

			if (/[A-Z]/.test(message[i])) {

				let messageCipher = message.charCodeAt(i) - 65;
				let keyCipher = key.charCodeAt(j) - 65;
				let encrypted = (messageCipher + keyCipher) % 26 + 65;
				result += String.fromCharCode(encrypted);
				j = (j + 1) % key.length;

			} else {
				result += message[i];
			}
		}
		// console.log('result', result)
		return this.Cipher ? result : result.split('').reverse().join('');
	}















	decrypt(encryptedMessage, key) {
		if (!encryptedMessage || !key) {
			throw new Error('Incorrect arguments!');
		}
		encryptedMessage = encryptedMessage.toUpperCase();
		key = key.toUpperCase();
		// console.log('enmessage', enmessage)
		// console.log('key', key)

		let result = '';
		let j = 0;

		for (let i = 0; i < encryptedMessage.length; i++) {
			if (/[A-Z]/.test(encryptedMessage[i])) {

				let encryptedCipher = encryptedMessage.charCodeAt(i) - 65;
				let keyCipher = key.charCodeAt(j) - 65;
				let messageCipher = (encryptedCipher - keyCipher + 26) % 26 + 65;
				result += String.fromCharCode(messageCipher);
				j = (j + 1) % key.length;

			} else {
				result += encryptedMessage[i];
			}
		}
		// console.log('result', result)
		return this.Cipher ? result : result.split('').reverse().join('');
	}
}
module.exports = {
	VigenereCipheringMachine
};


const directMachine = new VigenereCipheringMachine(false);
 
const reverseMachine = new VigenereCipheringMachine(true);

directMachine.encrypt('attack at dawn!', 'alphonse') 
console.log(directMachine.encrypt('attack at dawn!', 'alphonse') )
directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') 
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') )
reverseMachine.encrypt('attack at dawn!', 'alphonse')
console.log(directMachine.encrypt('attack at dawn!', 'alphonse') )
reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') 
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') )