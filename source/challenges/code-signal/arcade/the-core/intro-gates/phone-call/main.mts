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
Consider a company that charges you for your phone call,
	based on how long you have been on the call for.
They charge different rates for the first minute of a call,
	the first ten minutes, and any remainder thereafter.
Given that you have an amount of cash on hand,
	this will return how long you can be on a call.
**/
const getPhoneCallCost = (
	min1: number,
	min2to10: number,
	min11: number,
	numCents: number,
): number => {
	// Count the number of minutes that we can be on a call.
	let numMinutes = 0

	while (numMinutes < 1) {
		// You don't have the cash for more time!
		if (min1 > numCents) return numMinutes

		// You are charged for a minute of usage.
		numCents -= min1
		numMinutes += 1
	}

	while (numMinutes < 10) {
		// You don't have the cash for more time!
		if (min2to10 > numCents) return numMinutes

		// You are charged for a minute of usage.
		numCents -= min2to10
		numMinutes += 1
	}

	while (true) {
		// You don't have the cash for more time!
		if (min11 > numCents) return numMinutes

		// You are charged for a minute of usage.
		numCents -= min11
		numMinutes += 1
	}
}

export default getPhoneCallCost
