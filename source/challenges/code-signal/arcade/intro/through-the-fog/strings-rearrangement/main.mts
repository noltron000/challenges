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

import {generatePermutations} from '@library/combinatorics'

/**
Checks whether two strings are off by one character.
Assumes the two given strings are of equal length.
**/
const isOffByOne = (word01: string, word02: string) => {
	let demerits = 0

	for (let index = 0; index < word01.length; index++) {
		if (word01[index] !== word02[index]) demerits += 1
	}

	// Is there exactly one difference in letters?
	return demerits === 1
}

/**
This checks whether a given array of strings are ordered
	such that each consecutive string differs by
	exactly one character, and only at a single index.
**/
const testRearrangements = (array: Array<string>) => {
	// Get every pair of strings and check them!
	for (let index = 1; index < array.length; index++) {
		// Get this pair.
		const value01 = array[index - 1]
		const value02 = array[index]

		// Check if this pair has failed.
		if (!isOffByOne(value01, value02)) return false
	}

	return true
}

/**
Given an array of strings, this checks whether the strings
	can be reordered such that each consecutive string differs
	by exactly one character, at only one single index.
**/
const isRearrangeable = (array: Array<string>) => {
	// Test every permutation until we find one that works.
	for (const permutation of generatePermutations(array)) {
		const result = testRearrangements(permutation)
		if (result) return result
	}

	// We found none that work, so it doesn't work.
	return false
}

export default isRearrangeable
