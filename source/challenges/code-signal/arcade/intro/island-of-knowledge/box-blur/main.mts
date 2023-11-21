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
Given a 2D-matrix of numbers representing a grayscale image,
	generate a "blurred" variant of the grayscale image.

@param matrix
	This should only hold arrays that all have equal lengths.
**/
const getBoxBlur = (image: Array<Array<number>>) => {
	const rowLength = image.at(0)?.length ?? 0
	const colHeight = image.length

	// Generate a new empty 2D array that is 2 spaces smaller
	//	than the original matrix, in both directions.
	const blurredImage = new Array(colHeight - 2).fill(null)
	.map(row => new Array(rowLength - 2).fill(null))

	// Loop over all rows and columns that aren't on the edge.
	for (let row = 1; row < colHeight - 1; row++) {
		const blurredRow = row - 1

		for (let col = 1; col < rowLength - 1; col++) {
			const blurredCol = col - 1

			// Our cell is located at this row/col coordinate.

			// Loop over adjacent cells, by checking
			//	coordinates that are ±1 row and column away.
			// We'll also need to include this cell itself,
			//	to determine the total blur value!
			let blurValue = 0
			for (let rowMod = -1; rowMod < 2; rowMod++) {
				const adjRow = row + rowMod

				for (let colMod = -1; colMod < 2; colMod++) {
					const adjCol = col + colMod

					// Finally, adjust the blur value.
					blurValue += image[adjRow][adjCol]
				}
			}

			blurValue /= 9

			blurredImage[blurredRow][blurredCol] = Math.trunc(blurValue)
		}
	}

	return blurredImage
}

export default getBoxBlur
