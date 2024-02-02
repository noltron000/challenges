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
Given an array of numbers, this will find the largest
	difference of two (or more) adjacent items in the array.

@param numbers
An array of numbers.

@param sliceSize
The number of consecutive neighbors to check;
	assumed to be an integer greater than *0*.
If left unspecified, the default slice size is *2*.
**/
const findMaxRollingDelta = (
	inputArray: Array<number>,
	sliceSize: number = 2,
) => {
	// Determine the largest rolling delta.
	let maxDelta = 0
	let startIndex = 0

	while (startIndex < inputArray.length - sliceSize + 1) {
		// Determine the current rolling min and max values.
		let min = Infinity, max = -Infinity
		let sliceIndex = 0

		while (sliceIndex < sliceSize) {
			// Interestingly, we can't use `.at( )` here!
			// At scale, it's too slow versus indexing with `[ ]`.
			const value = inputArray[startIndex + sliceIndex]
			if (value < min) min = value
			if (value > max) max = value
			sliceIndex++ // Iterate...
		}

		// Determine the current rolling delta.
		let delta = max - min
		if (isNaN(delta)) delta = 0

		// Record this delta, if it is largest.
		if (delta > maxDelta) maxDelta = delta
		startIndex++ // Iterate...
	}

	return maxDelta
}

export default findMaxRollingDelta
