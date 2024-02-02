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
This streamlines the usage of items.
Use the combine method to add items' properties together.
**/
class Item {
	value: number
	weight: number

	constructor (
		value: number,
		weight: number,
	) {
		this.value = value
		this.weight = weight
	}

	/**
	This combines multiple items' properties into one.
	Think of it like placing them together in a bag!
	**/
	static combine (...items: Array<Item>) {
		const value = items
		.map(item => item.value)
		.reduce(Algebra.addition, 0)

		const weight = items
		.map(item => item.weight)
		.reduce(Algebra.addition, 0)

		return new Item(value, weight)
	}
}

/**
Given a pair of items and a max weight load, this function
	determines which item is the best ones to take.
Then, it sums up their value for the returned result.
**/
const findBestItems = (
	value1: number,
	weight1: number,
	value2: number,
	weight2: number,
	maxWeight: number,
) => {
	const item1 = new Item(value1, weight1)
	const item2 = new Item(value2, weight2)
	const combined = Item.combine(item1, item2)

	return Math.max(
		item1.weight <= maxWeight ? item1.value : 0,
		item2.weight <= maxWeight ? item2.value : 0,
		combined.weight <= maxWeight ? combined.value : 0
	)
}

export default findBestItems
