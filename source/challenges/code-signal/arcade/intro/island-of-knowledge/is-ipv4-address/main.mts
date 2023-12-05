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

/** Checks whether a given string contains only digits. */
const hasValidCharacters = (string: string) => (
	/^\d+$/.test(string)
)

/** Checks if a number lies between 0 and 255, inclusive. */
const hasValidRange = (number: number) => (
	0 <= number && number <= 255
)

/** Checks whether a string has unneeded leading zeroes. */
const hasValidFront = (string: string) => {
	if (string === '0') return true
	return string.split('').at(0) !== '0'
}

/**
This function uses a few other tests to determine whether	a
	given substring would be a valid part of an IPv4 address.
**/
const testDigitString = (string: string) => {
	if (!hasValidCharacters(string)) return false
	if (!hasValidFront(string)) return false
	const number = parseInt(string)
	return hasValidRange(number)
}

/**
Determines whether or not the given string is
	a period-deliminated IPv4 address.
**/
const isAddressIPv4 = (string: string) => {
	const array = string.split('.')

	// Must have four substrings contained.
	if (array.length !== 4) return false

	// Reducer tests each of the four substrings.
	const reducer = ((result: boolean, string: string) => {
		if (result === false) return false
		// Each substring must be a number, after all.
		else return testDigitString(string)
	})

	return array.reduce(reducer, true)
}

export default isAddressIPv4
