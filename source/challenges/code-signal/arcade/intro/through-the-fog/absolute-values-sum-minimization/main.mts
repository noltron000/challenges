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
This function takes a series of numbers and a value.
It subtracts the value from each element in the series,
	then takes the absolute value of the result.
All of these results are summed together, and then returned.
**/
const getAbsoluteSumAtIndex = (
	array: Array<number>,
	value: number,
) => (
	array
	.map((arrayValue) => Math.abs(arrayValue - value))
	.reduce(Algebra.addition, 0)
)

/**
Given an array, find the value in the array that creates
	the smallest possible result from the function above.

See also: `getAbsoluteSumAtIndex(...)`
**/
const getMinimumAbsoluteSum = (array: Array<number>) => {
	let bestValue: number | null = null
	let bestSum: number | null = null

	array.forEach((value) => {
		const sum = getAbsoluteSumAtIndex(array, value)

		// Initial case
		if (bestValue == null || bestSum == null) {
			bestValue = value
			bestSum = sum
		}

		// Superior case
		else if (bestSum > sum) {
			bestValue = value
			bestSum = sum
		}
	})

	return bestValue
}

export default getMinimumAbsoluteSum
