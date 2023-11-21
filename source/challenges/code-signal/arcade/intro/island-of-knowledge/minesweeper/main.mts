/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

AUTHOR: Noltron000
LICENSE: 3-Clause BSD (Attribution Required)
GITHUB: https://github.com/noltron000/coding-challenges/
CODESIGNAL: https://app.codesignal.com/profile/noltron000/

------------------------------------------------------------

Like my solutions? You can help me out in a couple of ways:
- Star my GitHub Repository & follow me on GitHub ⭐
- Upvote my solution on CodeSignal & become my CodeFriend 😄

/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/

/**
Given a 2D-matrix of booleans, determine the
	"minesweeper numbers" of the matrix.

@param matrix
	The matrix should hold arrays that all have equal lengths.
**/
const getMinesweeperNumbers = (
	matrix: Array<Array<boolean>>
) => {
	const rowLength = matrix.at(0)?.length ?? 0
	const columnHeight = matrix.length

	// Generate a new empty 2D array,
	//	that matches the dimensions the given matrix.
	const result = new Array(columnHeight).fill(null)
	.map(row => new Array(rowLength).fill(null))

	// Loop over each row and column independently.
	for (let row = 0; row < columnHeight; row++) {
		for (let col = 0; col < (rowLength); col++) {
			// Our cell is located at this row/col coordinate.
			// Let's count the number of mines in this space.
			let mines = 0

			// Loop over possible adjacent cells, by checking
			//	coordinates that are ±1 row and column away.
			for (let rowMod = -1; rowMod < 2; rowMod++) {
				const adjRow = row + rowMod
				if (adjRow < 0) continue

				for (let colMod = -1; colMod < 2; colMod++) {
					const adjCol = col + colMod
					if (adjCol < 0) continue
					else if (rowMod === 0 && colMod === 0) continue

					// If we got here, the cell is adjacent!

					// Determine if the adjacent cell has a mine.
					const hasMine = matrix.at(adjRow)?.at(adjCol)
					if (hasMine === true) mines += 1
				}
			}

			// Set the number of mines to the result.
			result[row][col] = mines
		}
	}

	return result
}

export default getMinesweeperNumbers
