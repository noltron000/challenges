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
This checks whether a single character
	only contains a single digit.
**/
const isDigitWithRegex = (symbol: string) => (
	symbol.match(/^\d$/) != null
)

/**
This checks whether a single character
	can be converted into an integer.
**/
const isDigitWithIsNaN = (symbol: string) => (
	!isNaN(parseInt(symbol))
)

export default isDigitWithRegex
