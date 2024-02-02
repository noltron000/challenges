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
Creates a cypher by shifting each alphabetical character
	down to the next character in the alphabet.
For example, *a* becomes *b* and *j* becomes *k*, with the
	exception that *z* becomes *a* to go full-circle.
**/
const getShiftedString = (input: string) => (
	input
	.split('')
	.map(char => {
		if (char === 'z') return 'a'
		else return String.fromCharCode(char.charCodeAt(0) + 1)
	})
	.join('')
)

export default getShiftedString
