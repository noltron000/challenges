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
Are you afraid of passing in front of others in the theater?
Oh my gosh! Oh, boy, I have a function for you...
**/
const countDisturbedViewers = (
	numColumns: number,
	numRows: number,
	col: number,
	row: number
): number => (
	// Subtract our row from number the of rows.
	// Subtract our column from the number of columns,
	//	but then also and add one!
	// We may have to pass in front of others our row.
	(numColumns - col + 1) * (numRows - row)
)

export default countDisturbedViewers
