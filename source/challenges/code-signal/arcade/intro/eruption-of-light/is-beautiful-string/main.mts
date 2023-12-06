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
This checks whether a particular string is "beautiful".
The definition of this can be found in the README.
**/
const isBeautifulString = (input: string) => {
	// Generate a histogram from the letters of the string.
	const histogram = Histogram.fromArray(input.split(''))

	const letterCountReducer = (
		result: boolean,
		char: string,
	) => {
		// If a previous test has failed,
		// 	continue reducing to false!!
		if (result === false) {
			return false
		}

		// The letter "a" is always beautiful!
		if (char === 'a') {
			return true
		}

		// Determine the previous letter's char-code.
		const prevCode = char.charCodeAt(0) - 1
		const prevChar = String.fromCharCode(prevCode)

		// Check whether the char is "beautiful" in this string.
		if (histogram.get(char) > histogram.get(prevChar)) {
			return false
		}

		return true
	}

	// Execute a reducer that returns true or false.
	return input.split('').reduce(letterCountReducer, true)
}

export default isBeautifulString
