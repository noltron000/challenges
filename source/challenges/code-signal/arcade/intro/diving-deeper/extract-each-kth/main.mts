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
Generates a series of indices, spaced out by `k - 1`.
If you provide `k = 3`, this gives you back every 3rd index.
**/
function * generateIndices (k: number) {
	// subtract one to make it zero-indexed.
	let index = k - 1
	yield index

	while (true) {
		index += k
		yield index
	}
}

/**
Given an array, this function returns a copy of that array
	with every *k-th* element removed from the array.
**/
const removeElementsAtModulo = (
	inputArray: Array<number>,
	k: number,
) => {
	const outputArray = [...inputArray]

	// Get all skipped indices in ascending order.
	const skippedIndices: Array<number> = [ ]
	for (const index of generateIndices(k)) {
		if (index >= inputArray.length) break
		skippedIndices.push(index)
	}

	// In descending order, remove items at each index.
	while (skippedIndices.length > 0) {
		const index = skippedIndices.pop( )
		if (index == null) break
		outputArray.splice(index, 1)
	}

	return outputArray
}

export default removeElementsAtModulo
