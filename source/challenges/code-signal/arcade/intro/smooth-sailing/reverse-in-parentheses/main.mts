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
Given a string, this reverses substrings in parenthesis,
	and then removes those parenthesis from the result.
**/
const reverseInParentheses = (mainString: string) => {
	while (true) {
		// Find the last open parenthesis occuring
		//	before the next possible closing parethesis.
		// Obtain the indices of both.
		let openIndex: number | null = null
		let closeIndex: number | null = null

		for (const entry of mainString.split('').entries( )) {
			const [index, character] = entry

			if (character === '(') {
				openIndex = index
				continue
			}
			else if (character === ')') {
				closeIndex = index
				break
			}
		}

		// Break out if no matching parens are found.
		if (openIndex == null || closeIndex == null) {
			return mainString
		}

		// Otherwise, reverse the substring,
		//	and then update the main string.
		const capturedPhrase = mainString
		.slice(openIndex + 1, closeIndex)

		const reversedPhrase = capturedPhrase
		.split('')
		.reverse( )
		.join('')

		// Remove the parens.
		const startString = mainString.slice(0, openIndex)
		const endString = mainString.slice(closeIndex + 1)

		// Update the main string.
		mainString = startString + reversedPhrase + endString
	}
}

export default reverseInParentheses
