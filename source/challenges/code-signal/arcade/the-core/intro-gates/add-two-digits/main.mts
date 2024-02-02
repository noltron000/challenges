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

import {Algebra} from '@library/algebra'

/**
Given a number, this function sums up its digits.
If the input is not a positive integer, it returns NaN.
**/
const sumDigits = (input: number) => (
	input
	.toString( )
	.split('')
	.map(n => (parseInt(n)))
	.reduce(Algebra.addition, 0)
)

export default sumDigits
