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
Determines how many times an element must be incremented
	by one to make the entire array strictly increasing.
**/
const countNeededAdditions = (array: Array<number>) => {
	// Copy the initial array...
	array = [...array]

	let index = 1
	let moves = 0

	// Start at the beginning of the array (at index 0 vs 1).
	while (index < array.length) {
		const lastValue = array[index - 1]
		const thisValue = array[index]

		// This element is fine, move on!
		if (thisValue > lastValue) {
			index++
		}

		// Must increment the element, and the move counter.
		else {
			moves++
			array[index]++
		}
	}

	return moves
}

export default countNeededAdditions
