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

import {Algebra} from '@library/algebra'

/**
This function serves two main processes:
1. It creates a copy of the given matrix, with some changes.
		If a cell is *0*, the cells below it also become *0*.
2. Next, it returns the sum of all values in the new matrix.

@param rentMatrix
The input matrix contains rent prices of each room in
	an apartment, where array indices represent room numbers.
This should only contain arrays that all have equal lengths.
**/
const findHauntedRooms = (
	rentMatrix: Array<Array<number>>,
) => {
	let height = rentMatrix.length
	let width = rentMatrix[0].length

	// Initialize the new matrix with all `null` values.
	const hauntedMatrix = new Array(height).fill(null)
	.map((row) => new Array(width).fill(null))

	// Initialize index iterators.
	let h = 0
	let w = 0

	// Enter values of each cell with this loop.
	// Unvisited cells are marked with `null`.
	while (h < height) {
		while (w < width) {
			// Room was already checked for valid housing.
			if (hauntedMatrix[h][w] != null) {/* skip */}

			// Room is valid housing, mark it.
			else if (rentMatrix[h][w] !== 0) {
				hauntedMatrix[h][w] = rentMatrix[h][w]
			}

			// Room can't be used -- its haunted!
			else {
				// Mark this cell as haunted, and ones below it.
				let below = 0
				while (h + below < height) {
					hauntedMatrix[h + below][w] = 0
					below++
				}
			}

			// Increment width iterator...
			w++
		}

		// Increment height iterator & reset width iterator...
		w = 0
		h++
	}

	// Reset height iterator...
	h = 0

	// Flatten the array and sum the contents up.
	return hauntedMatrix.flat( ).reduce(Algebra.addition)
}

export default findHauntedRooms
