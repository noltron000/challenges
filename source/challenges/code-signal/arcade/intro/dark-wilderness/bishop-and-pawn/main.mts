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
This function recalibrates a series of coordinates
	based on the first coordinate given.
The first coordinate will be set to the origin [0, 0],
	and the rest will be placed relative to that new origin.
**/
const setOriginAt = (
	origin: Coordinates,
	...rest: Array<Coordinates>
): Array<Coordinates> => {
	const xDelta = -origin.x
	const yDelta = -origin.y

	return rest.map((pos) => ({
		x: pos.x + xDelta,
		y: pos.y + yDelta
	}))
}

/** Checks whether a position's X value matches its Y. */
const isDiagonal = (pos: Coordinates) => (
	Math.abs(pos.x) === Math.abs(pos.y)
)

/**
Given a pair of chess position strings,
	this checks whether the bishop can take the pawn.
**/
const canBishopTakePawn = (
	bishopString: string,
	pawnString: string,
) => {
	// First, convert strings to actual coordinates.
	let bishop = getCoordinates(bishopString)
	let pawn = getCoordinates(pawnString)

	// Now, take the pawn's relative position to the bishop.
	pawn = setOriginAt(bishop, pawn).at(-1) ?? pawn
	bishop = {x: 0, y: 0}

	return isDiagonal(pawn)
}

export default canBishopTakePawn
