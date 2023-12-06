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
This method takes in a voting pool (an array of numbers),
	and a count of the remaining voters (an integer).
It returns the count of competetive election candidates.
A candidate is competetive if and only if
	they can still win the election with remaining voters.

@param currentVotes
An array of already-cast individual ballots.
Each entry represents a vote for a particular candidate.

@param remainingVotes
An integer counting the  voters who haven't voted yet.
**/
const countCompetetiveCandidates = (
	currentVotes: Array<number>,
	remainingVotes: number,
) => {
	// Count the number of votes for the winning candidate.
	const mostVotes = Math.max(...currentVotes)

	// Determine if there is a tie amongst the current votes.
	const numLeading = currentVotes
	.filter((numVotes) => numVotes === mostVotes)
	.length

	const hasTie = numLeading > 1

	// Given the number of voters who haven't yet voted,
	//	determine how many competetive candidates remain.
	let numCompetitors = 0

	currentVotes.forEach((numVotes) => {
		if (numVotes + remainingVotes > mostVotes) {
			numCompetitors += 1
		}
		else if (!hasTie && numVotes === mostVotes) {
			numCompetitors += 1
		}
	})

	return numCompetitors
}

export default countCompetetiveCandidates
