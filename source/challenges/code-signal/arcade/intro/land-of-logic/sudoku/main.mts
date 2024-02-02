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

type Matrix<T = unknown> = Array<Array<T>>

/** Checks if the given grid is a valid sudoku solution. */
const isSudokuSolution = (grid: Array<Array<number>>) => {
	const length = grid.length

	// Verify that every value in the matrix is a number 1-9.
	const isValidated = grid.every((row) => (
		row.every((value) => {
			if (value % 1 !== 0) return false
			else if (value > 9) return false
			else if (value < 1) return false
			else return true
		}))
	)

	if (!isValidated) return false

	// Sets are useful here because they automatically
	//	will remove duplicate values from our lists.
	// We'll be using three arrays of sets:
	// - Arrays of each set of row values
	// - Arrays of each set of column values
	// - Arrays of each set of sub-square values

	const rows = grid.map((row) => new Set(row))
	const columns = transpose(grid).map((col) => new Set(col))
	const squares: Array<Set<number>> = [ ]

	// Collect the series of values in each sub-square...
	for (let origin = 0; origin < length; origin += 3) {
		const square: Set<number> = new Set( )
		for (let row = 0; row < 3; row++) {
			for (let column = 0; column < 3; column++) {
				square.add(grid[origin + row][origin + column])
			}
		}

		squares.push(square)
	}

	// Check if the size of each grouping is indeed 9...
	const rowsOK = rows.every((r) => (r.size === 9))
	const columnsOK = columns.every((c) => (c.size === 9))
	const squaresOK = squares.every((s) => (s.size === 9))

	// Check whether all systems are GO!
	return rowsOK && columnsOK && squaresOK
}

/** Transposes a 2D-matrix. */
const transpose = <T = unknown,> (
	grid: Matrix<T>
) => {
	const height = grid.length // Row count
	const width = grid.at(0)?.length ?? 0 // Column count

	// Make an empty y-by-x grid from the given x-by-y grid.
	const transposed: Matrix<T> = new Array(width).fill(null)
	.map(( ) => new Array(height).fill(null))

	grid.forEach((rowArray, row) => {
		rowArray.forEach((cellValue, column) => {
			transposed[column][row] = grid[row][column]
		})
	})

	return transposed
}

export default isSudokuSolution
