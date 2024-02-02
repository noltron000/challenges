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
Given a string-code of zeroes and ones, this returns
	8-bit sections of binary converted into ASCII characters.
**/
const getMessageFromBinary = (encoded: string) => {
	const length = encoded.length
	let message = ''

	for (let start = 0; start <= length - 8; start += 8) {
		const end = start + 8
		const binaryCode = encoded.slice(start, end)
		const characterCode = parseInt(binaryCode, 2)
		const character = String.fromCharCode(characterCode)
		message += character
	}

	return message
}

export default getMessageFromBinary
