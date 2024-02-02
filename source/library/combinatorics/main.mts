/**
Generates all permutations of an array efficiently.
- Inspired by: https://stackoverflow.com/a/37580979
- See: https://en.wikipedia.org/wiki/Heap%27s_algorithm
**/
function * generatePermutations <T = unknown,> (
	array: Array<T>
) {
	// Don't modify the original array!
	const permutation = [...array]
	yield [...permutation]

	// Create an array that tracks indices to compare.
	// The "c" stands for "comparison".
	const cArray = new Array(permutation.length).fill(0)

	// This index tracker will be
	//	the first point of comparison.
	let index01 = 1

	// You will see index02 appear later.
	// It is either 0, or a value from cArray.
	// Remember that both `index01`
	//	and `cArray[index01]` are indices.

	while (index01 < permutation.length) {
		if (cArray[index01] < index01) {
			// Get index02 from cArray.
			let index02 = 0
			if (index01 % 2 === 1) index02 = cArray[index01]

			// Swap the values at the two indices.
			const swapper = permutation[index01]
			permutation[index01] = permutation[index02]
			permutation[index02] = swapper

			// Yield the permutation!
			yield [...permutation]

			// Increase value in cArray and reset index01.
			cArray[index01] += 1
			index01 = 1
		}

		else {
			// Increase index01 and reset value in cArray.
			cArray[index01] = 0
			index01 += 1
		}
	}
}

export {generatePermutations}
