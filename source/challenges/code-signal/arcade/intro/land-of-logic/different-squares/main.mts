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
Given a matrix, this function finds
	all unique `2×2` squares present within.
**/
const countUniqueSquares = (
	matrix: Array<Array<number>>
) => {
	// Contains JSON-ified sub-matrix data.
	let uniqueSquares = new Set( )

	const xLength = matrix.at(0)?.length ?? 0
	const yLength = matrix.length

	for (let xSeed = 1; xSeed < xLength; xSeed++) {
		for (let ySeed = 1; ySeed < yLength; ySeed++) {

			// Here we'll create a two-by-two sub-square,
			//	whose origin is determined by the two seeds.
			const square: Array<Array<number>> = [ ]

			for (let x = xSeed - 1; x < xSeed + 1; x++) {
				const row: Array<number> = [ ]
				for (let y = ySeed - 1; y < ySeed + 1; y++) {
					row.push(matrix[y][x])
				}
				square.push(row)
			}

			// Use a set to stringify the square and remove dupes.
			uniqueSquares.add(JSON.stringify(square))
		}
	}

	return uniqueSquares.size
}

export default countUniqueSquares
