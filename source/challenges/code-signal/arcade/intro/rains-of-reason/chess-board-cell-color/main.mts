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

/** Here are the two color-strings of a chess board cell. */
type CellColor = 'black' | 'white'

/** This should be easier to use than position strings. */
interface Coordinates {
	x: number,
	y: number,
}

/** Gets the color-string of given chess coordinates. */
const getColor = (
	{x, y}: Coordinates
): CellColor => (
	(x + y) % 2
	? 'white'
	: 'black'
)

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
Determines whether two chess cell positional strings
	would have the same color on a chess board.
**/
const isCellColorMatching = (
	cellString01: string,
	cellString02: string,
) => {
	// Get coordinates from given chess strings...
	const cellCoords01 = getCoordinates(cellString01)
	const cellCoords02 = getCoordinates(cellString02)

	// Determine if these selected cells have the same color.
	return getColor(cellCoords01) === getColor(cellCoords02)
}

export default isCellColorMatching
