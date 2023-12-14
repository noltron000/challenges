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
This uses a round-robin approach to assign two teams.
Each team takes turns getting the next member on the roster.

@param memberWeights
The member array is assumed to be unordered,
	with their weights differing throughout.

@returns
The returned value is the sum of the weights
	for each team, in a simple 2-value array.
**/
const alternateSum = (
	memberWeights: Array<number>
): [number, number] => {
	// Distribute members amongst the teams.
	const teams: [Array<number>, Array<number>] = [[ ], [ ]]
	memberWeights.forEach((member, index) => {
		const team = index % 2
		teams[team].push(member)
	})

	// Calculate the total weights for each team.
	const teamWeights: [number, number] = [0, 0]
	teams.forEach((team, index) => {
		teamWeights[index] += team.reduce(Algebra.addition, 0)
	})

	return teamWeights
}

export default alternateSum
