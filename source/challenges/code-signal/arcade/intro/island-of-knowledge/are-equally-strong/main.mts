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

/** Sorts a person's arms by their power. */
const sortArmsByPower = (...arms: Array<number>) => (
	arms.sort((a, b) => a - b)
)

/**
Determines if two people are equally strong.
Two people are equally strong if their strongest arms are
	equally strong, and so are their weakest arms.
**/
const armsAreEqual = (
	myLeft: number,
	myRight: number,
	yourLeft: number,
	yourRight: number,
) => {
	const myArms = sortArmsByPower(myLeft, myRight)
	const yourArms = sortArmsByPower(yourLeft, yourRight)
	return JSON.stringify(myArms) === JSON.stringify(yourArms)
}

export default armsAreEqual
