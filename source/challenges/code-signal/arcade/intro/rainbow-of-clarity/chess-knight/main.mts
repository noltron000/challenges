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

/** This should be easier to use than position strings. */
interface Coordinates {
	x: number,
	y: number,
}

const GRID_LENGTH = 8

/** Extracts cell coordinates from a given chess string. */
const getCoordinates = (
	cellString: string
): Coordinates => {
	// Get the string character for the row and column.
	let [col, row] = cellString.toLowerCase( ).split('')

	// Gather the numeric value for the x/y coordinates.
	const x = col.charCodeAt(0) - 'a'.charCodeAt(0)
	const y = parseInt(row) - 1

	return {x, y}
}

/**
Determines valid moves for a knight,
	given its board coordinates.
**/
const getKnightMoves = (string: string) => {
	const pos = getCoordinates(string)
	const vectorCombos: Array<number> = [-1, 1, -2, 2]
	const moveDeltas: Array<Coordinates> = [ ]

	// Generate moveDeltas by looping over vectorCombos twice.
	vectorCombos.forEach((xMove) => {
		vectorCombos.forEach((yMove) => {
			// Skip all repeats (knights cant move like this)
			if (Math.abs(xMove) === Math.abs(yMove)) {/* skip */}
			else moveDeltas.push({x: xMove, y: yMove})
		})
	})

	// Generate valid move combos by using three main steps:
	// - Loop over possible move deltas.
	// - Add the delta to the current position to make a move.
	// - Check whether or not the new position would be valid.
	const validMoveCombos = moveDeltas
	.map((delta): Coordinates => {
    const x = pos.x + delta.x
		const y = pos.y + delta.y
		return {x, y}
	})
	.filter((newPos) => (
		newPos.x >= 0
		&& newPos.x < GRID_LENGTH
		&& newPos.y >= 0
		&& newPos.y < GRID_LENGTH
	))

	return validMoveCombos
}

/** Counts the results from the previous function. */
const countKnightMoves = (s: string) => (
	getKnightMoves(s).length
)

export default countKnightMoves
