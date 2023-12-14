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

/** Determines if a string follows a "HH:MM" time format. */
const isTimeValid = (time: string) => {
	// Extract the anticipated time data via the split method.
	let [hh, mm] = time
	.split(':')
	.map((s) => parseFloat(s))

	// The marks must be numbers.
	if (isNaN(hh)) return false
	if (isNaN(mm)) return false

	// They also must be integers!
	if (hh % 1 !== 0) return false
	if (mm % 1 !== 0) return false

	// Hours are bound by 0 and 23.
	if (hh < 0) return false
	if (hh > 23) return false

	// Minutes are bound by 0 and 59.
	if (mm < 0) return false
	if (mm > 59) return false

	// Everything looks good!
	return true
}

export default isTimeValid
