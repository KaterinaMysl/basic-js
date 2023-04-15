const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

	// crete area

	let area = [];
	console.log(area);

	for (i = 0; i < matrix.length; i++) {
		area[i] = [];
		for (j = 0; j < matrix.length; j++) {
			area[i][j] = 0;
		}

	}
	console.log(area);

	// add info

	for (i = 0; i < matrix.length; i++) {
		for (j = 0; j < matrix[0].length; j++) {
			let rez = 0;
			if (i > 0) {
				// top left
				if (j > 0) {
					if (matrix[i - 1][j - 1]) {
						rez++;
					}
				}
				// top
				if (matrix[i - 1][j]) {
					rez++;
				}
				// top right
				if (j < matrix[i].length) {
					if (matrix[i - 1][j + 1]) {
						rez++;
					}
				}
			}
			// left
			if (j > 0) {
				if (matrix[i][j - 1]) {
					rez++;
				}
			}
			// right
			if (j < matrix.length - 1) {
				if (matrix[i][j + 1]) {
					rez++;
				}
			}
			//
			if (i < matrix.length - 1) {
				// bottom left
				if (j > 0) {
					if (matrix[i + 1][j - 1]) {
						rez++;
					}
				}
				// bottom
				if (matrix[i + 1][j]) {
					rez++;
				}
				// bottom right
				if (matrix[i + 1][j + 1]) {
					rez++;
				}
			}
			area[i][j] = rez;


		}
	}

	for (i = 0; i < matrix.length; i++) {
		for (j = 0; j < matrix[0].length; j++) {
			
			if (matrix[i][j]) {
				area[i][j] = 1;
			}

		}
	}


	console.log(area);
	return area;
}

module.exports = {
	minesweeper
};
minesweeper([
	[true, false, false],
	[false, true, false],
	[false, true, true]
])