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
This function takes an array of people,
	with foliage sprinkled between them.
We want to sort the people by height amongst the foliage...
	But the bushes can't move!!

The returned value is a sorted copy of the input array,
	except for the bushes.
They stay where they are.
**/
const sortPeopleAmongstFoliage = (input: Array<number>) => {
	// Make a copy of the input...
	input = [...input]

	// Finds the indices of all foliages in our input array.
	const foliageFinder = (
		found: Array<number>,
		currentValue: number,
		currentIndex: number,
	) => {
		// A piece of foliage always has a value of -1.
		if (currentValue === -1) found.push(currentIndex)
		return found
	}

	// Get foliage indices.
	const foliageIndices = input
	.reduce(foliageFinder, [ ])

	// Get our people sorted.
	const sortedPeople = input
	.filter((height) => height !== -1)
	.sort((a, b) => a - b)

	// After sorting people by their height,
	//	we have to place them between the bushes.
	// To do this, re-insert the foliage in the sorted array
	//	at their respective indices, collected earlier.
	foliageIndices.forEach((index: number) => {
		sortedPeople.splice(index, 0, -1)
	})

	return sortedPeople
}

export default sortPeopleAmongstFoliage
