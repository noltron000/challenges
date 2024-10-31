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
This function returns the largest integer of a given
	length in the specified base-number-system (or radix).

@param length
The max length limit of the largest number to find, *eg:*
- 99 has a length of 2.
- 99999 has a length of 5.

@param radix
The base-system to use for the largest number.
Defaults to the base-10 decimal system.
Since this parameter is used in `parseInt()`,
	it must be an integer between 2 and 36.
Otherwise, the returned value becomes *`NaN`*.

@returns
The resulting number is converted back into the
	base-10 decimal system before being returned.
**/
const findLargestNumberOfLength = (
	length: number,
	radix = 10,
) => {
	let largest = 10 ** length

	// Right now, `largest` is just one too big.
	// It's also assumed to be written in base-10 right now,
	//	which would be important if radix were specified.
	largest = parseInt(largest.toString( ), radix) - 1

	return largest
}

export default findLargestNumberOfLength
