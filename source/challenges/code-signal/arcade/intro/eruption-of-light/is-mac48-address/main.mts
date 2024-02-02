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

/** Checks if a string is a hex string. */
const isHex = (string: string) => {
	const result = string.match(/^[\dA-Fa-f]+$/)
	return result != null
}

/**
Checks if a string is a full MAC-48 Address,
	deliminated in groups of two by hyphens.
**/
const isMAC48 = (string: string) => {
	const groups = string.split('-')
	if (groups.length !== 6) return false

	for (const group of groups) {
		if (group.length !== 2) return false
		else if (isHex(group) === false) return false
	}

	return true
}

export default isMAC48
