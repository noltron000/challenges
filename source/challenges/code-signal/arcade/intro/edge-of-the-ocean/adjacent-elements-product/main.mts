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
	product of two (or more) adjacent items in the array.

@param numbers
An array of numbers.

@param sliceSize
The number of consecutive neighbors to check;
	assumed to be an integer greater than *0*.
If left unspecified, the default slice size is *2*.
**/
const findMaxRollingProduct = (
	numbers: Array<number>,
	sliceSize: number = 2,
) => {
	// Determine the largest rolling product.
	let maxProduct = -Infinity
	let startIndex = 0

	while (startIndex < numbers.length - sliceSize + 1) {
		// Determine the current rolling product.
		let product = 1
		let sliceIndex = 0

		while (sliceIndex < sliceSize) {
			// Interestingly, we can't use `.at( )` here!
			// At scale, it's slower than indexing with `[ ]`.
			const value = numbers[startIndex + sliceIndex]
			product *= value
			sliceIndex++ // Iterate...
		}

		// Record this product, if it is largest.
		if (product > maxProduct) maxProduct = product
		startIndex++ // Iterate...
	}

	return maxProduct
}

export default findMaxRollingProduct
