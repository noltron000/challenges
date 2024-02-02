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
Given an array of statue sizes, this finds how many
	additional status are needed to complete a collection.
Completed statue collections can be arranged such that each
	statue has a size of *1* plus the previous statue's size.
The smallest statue in a collection won't follow this rule.

For example, a collection of `[4, 2]` would need just *1*
	additional statue to be complete (ie, `[2, 3, 4]`).
A collection of *1* or *0* statues is already complete,
	so the function would return *0* in those cases.

This function is somewhat arbitrary,
	be sure to check the associated README file!

@param statueSizes
Each item in the given array represents a statue,
	with its size specified in the value entry.
A statue's size is expected to be a positive integer.
**/
const countNeededStatues = (statueSizes: Array<number>) => {
	const numStatues = statueSizes.length

	// Base case: there is no collection to complete.
	if (numStatues === 0) return 0

	// Notice how the first and last statue in a completed
	//	collection has a somewhat arbitrary size...
	// For the best effect, these arbitrary sizes can just be
	//	the min- and max-sized statues that we already own.
	// This allows us to obtain the fewest additional statues.
	const minSize = Math.min(...statueSizes)
	const maxSize = Math.max(...statueSizes)

	// The size of the full collection is:
	// - The size of largest statue...
	// - ...minus the size of the smallest...
	// - ...plus a constant value of *1*.
	// By subtracting the number of statues that we own from
	//	that result, we'll arrive at the number of additional
	//	statues that we'll need to complete our collection.
	return maxSize - minSize - numStatues + 1
}

export default countNeededStatues
