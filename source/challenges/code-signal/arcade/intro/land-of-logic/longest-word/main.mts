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

/** Given a text, return the longest word it contains. */
const getLongestWord = (text: string) => {
	const sanitized = [...text.matchAll(/\b[a-z,A-Z]+?\b/g)]

	return sanitized
	.map(res => (res.at(0) ?? ''))
	.reduce((bestWord, thisWord) => {
		if (bestWord.length < thisWord.length) return thisWord
		else return bestWord
	})
}

export default getLongestWord
