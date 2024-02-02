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

import isPalindrome from '@challenges/check-palindrome'

/**
This creates a palindrome by adding characters to a string.
It creates the shortest result possible with this method.
**/
const buildPalindrome = (string: string) => {
	let additions = string
	.split('')
	.reverse( )
	.join('')
	.slice(1)

	let shortestAdditions = additions

	while (true) {
		const potentialPalindrome = string + additions
		if (isPalindrome(potentialPalindrome)) {
			shortestAdditions = additions
		}

		if (additions.length === 0) break
		else additions = additions.substring(1)
	}

	const palindrome = string + shortestAdditions
	return palindrome
}

export default buildPalindrome
