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
This determines whether or not a given sequence
	is already arranged in an increasing order.
It has a tolerance parameter, which allows
	for *1*-off, *2*-off, or *n*-off sequences.

This could also be modified to allow for *decreasing*
	sequences, if the input is reversed.

@param sequence
An array of numbers whose order is important.

@param tolerance
This is positive integer  determines how leniant
	the function is, given an unsorted sequence.
**/
const isSequenceAlmostSorted = (
	sequence: Array<number>,
	tolerance: number = 1,
) => {
	// Copy original array.
	sequence = [...sequence]

	// Count the number of removed elements
	//	against our provided tolerance.
	let numRemoved = 0
	let currentMax = -Infinity
	let previousMax = -Infinity

	let index = 0
	while (index < sequence.length) {
		const element = sequence[index]

		if (element > currentMax) {
			// Success: this element passes the test!
			previousMax = currentMax
			currentMax = element

			// Iterate through the array...
			index++
		}

		else if (element > previousMax) {
			// Failure: the previous element was an outlier.
			// The current element is too large.
			numRemoved += 1
			currentMax = element
			sequence.splice(index - 1, 1)
		}

		else {
			// Failure: this element is an outlier.
			// The current element is too small.
			numRemoved += 1
			sequence.splice(index, 1)
		}

		// Always make this check at the end of the loop.
		if (numRemoved > tolerance) return false
	}

	return true
}

export default isSequenceAlmostSorted
