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
This counts how many years it will take for a deposit to
	appreciate with compound interest to the given threshold.

@param rate
	The interest rate is assumed to be positive and non-zero.
**/
const countYearsOfInterestToThreshold = (
	deposit: number,
	rate: number,
	threshold: number,
) => {
	let years = 0
	while (deposit < threshold) {
		years += 1
		deposit *= 1 + rate / 100
	}
	return years
}

export default countYearsOfInterestToThreshold
