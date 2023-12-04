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
Given a modulo and some number,
	check what the radial opposite number would be.
The radial opposite is always `modulo / 2` apart,
	so this function will only work with even modulos.

@param modulo
	The modulo must be an even, positive integer above zero.

@param number
	The opposite of this specified **number** gets returned.
**/
const getRadialOpposite = (
	modulo: number,
	number: number,
) => {
	if (modulo % 2 !== 0) {
		throw new Error('Input is not an even number.')
	}
	else {
		return (number + modulo / 2) % modulo
	}
}

export default getRadialOpposite
