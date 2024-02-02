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
If a plant can grow forever,
	than its height will get larger forever.
In a more realistic example,the final height would
	be zero at some point -- after it dies.
**/
function * generateHeights (
	upSpeed: number,
	downSpeed: number,
) {
	let day = 0
	let height = 0
	yield {day, height}

	while (true) {
		day += 1
		height += upSpeed
		yield {day, height}
		height -= downSpeed
	}
}

/**
This method counts how many days that a plant will grow,
	up until it reaches the specified desired height.
**/
const countDaysOfGrowth = (
	upSpeed: number,
	downSpeed: number,
	desiredHeight: number,
) => {
	// Base case: the plant will never grow large enough.
	if (desiredHeight > upSpeed && downSpeed >= upSpeed) {
		return Infinity
	}

	// Now, determine how many days it will take to grow...
	else {
		const generator = generateHeights(upSpeed, downSpeed)
		for (const {day, height} of generator) {
			if (height >= desiredHeight) return day
		}
	}
}

export default countDaysOfGrowth
