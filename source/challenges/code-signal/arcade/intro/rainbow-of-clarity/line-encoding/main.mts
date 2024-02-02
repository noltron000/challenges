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
Seperates the string out into an array.
The string is split out into several substrings, where
	each substring consists of only one repeated letter.
**/
const seperateConsecutiveChars = (input: string) => {
	let charGroups: Array<string> = [ ]

	input.split('').forEach((char) => {
		// Check whether or not the current character
		//	is also the same as the previous character.
		// If so, add another letter to the current group.
		if (charGroups.at(-1)?.at(0) === char) {
			charGroups[charGroups.length - 1] += char
		}

		// This is a different character.
		// Therefore, we must add a new string to the array.
		else {
			charGroups.push(char)
		}
	})

	return charGroups
}

/**
Given a char group string, like 'aaa' or 'b',
	this returns the encoded version, like '3a' or simply 'b'.
**/
const encodeCharGroup = (charGroup: string) => {
	const char = charGroup.at(0)
	const count = charGroup.length
	if (count > 1) return `${count}${char}`
	else return char
}

/**
Encodes a string to concentrate its repeated characters.
It declares how many times a character is repeated.
Thus, any input strings shouldn't contain any numbers.
**/
const encodeLine = (input: string) => {
	const charGroups = seperateConsecutiveChars(input)

	return charGroups
	.map((group) => encodeCharGroup(group))
	.join('')
}

export default encodeLine
