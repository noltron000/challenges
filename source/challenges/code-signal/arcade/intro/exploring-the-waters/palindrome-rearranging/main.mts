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

import {Histogram} from '@library/histogram'

/**
This function checks whether or not a histogram
	of characters can be arranged symmetrically.
Each character must occur an even number of times
	for a histogram to be symmetrical (except for one).
**/
const checkSymmetry = (histogram: Histogram) => {
	let tolerance = 1
	let oddCounts = 0

	for (const characterCount of histogram.values( )) {
		if (characterCount % 2 === 1) oddCounts += 1
		if (oddCounts > tolerance) return false
	}

	return true
}

/**
Determines whether or not a given string
	can be rearranged to be a palindrome.
**/
const isPalindromeAnagram = (input: string) => {
	const histogram = Histogram.fromArray(input.split(''))
	return checkSymmetry(histogram)
}

export default isPalindromeAnagram
