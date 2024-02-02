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

/** Converts a number of minutes into a lossy integer. */
const convertMinutesToTimeAmalgamation = (n: number) => {
	const hh = Math.floor(n / 60)
	const mm = n % 60

	return `${hh}${mm}`
	.split('')
	.map(a => parseInt(a))
	.reduce((a, b) => a + b)
}

export default convertMinutesToTimeAmalgamation
