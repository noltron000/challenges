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

import {findPrimeFactors} from '@library/primes'

/*
This challenge has particularly complex reasoning,
	so let's write a bit of a preface before diving right in.

Because we're trying to reconstruct this number in a way,
	the first thing we want to do is find its prime factors.
This will allow us to manipulate them back into integers
	that are less than 10, if that is at all possible.
Consider that a prime number like 11 can't be forced to fit
	in a single digit's space, so it's incompatible with this.
Atleast, not in the base-10 system -- base-12 would work.

Now, notice that 5's and 7's can't
	be multiplied without making some n > 9.
So, what's really important in our algorithm,
	is how we frame the leftover 2's and 3's.
Let's call 2 & 3 "minor primes" here and out.

---

With two leftover minor primes:
3 3 => 9
3 2 => 6
2 2 => 4

With three leftover minor primes:
3 3 3 => best is 39
3 3 2 => best is 29 (not 36)
	-> prefer 3 * 3 to 3 * 2
3 2 2 => best is 26 (not 34)
	-> prefer 3 * 2 to 2 * 2
2 2 2 => best is 8

With four leftover minor primes:
3 3 3 3 => best is 99
3 3 3 2 => best is 69
3 3 2 2 => best is 49 (not 66)
	-> prefer 3 * 3 to 3 * 2
3 2 2 2 => best is 38 (not 46)
	-> prefer 2 * 2 * 2 to 3 * 2
2 2 2 2 => best is 28

With five leftover minor primes:
3 3 3 3 3 => 399
3 3 3 3 2 => 299 (not 369)
	-> prefer 3 * 3 to 3 * 2
3 3 3 2 2 => 269 (not 349)
	-> prefer 3 * 3 to 3 * 2
	-> prefer 3 * 2 to 2 * 2
3 3 2 2 2 => 89
	-> prefer 3 * 3 to 3 * 2
3 2 2 2 2 => 68
2 2 2 2 2 => 48

Priority Hierarchy:
prefer 3 * 3 to 3 * 2
prefer 3 * 2 to 2 * 2
prefer 2 * 2 * 2 to 3 * 2
can't rank 3 * 3 vs 2 * 2 * 2 -- They don't share primes.

rankOf([3, 3]) > rankOf([3, 2])
rankOf([3, 2]) > rankOf([2, 2])
rankOf([3, 2]) < rankOf([2, 2, 2])
rankOf([3, 3]) ? rankOf([2, 2, 2])

Rank 1: [3, 3] and [2, 2, 2]
Rank 2: [3, 2]
Rank 3: [2, 2]
Rank 4: Everything else (singletons with no product)

---

Since this is some sort of decreasing preferential pattern,
	there might be some other interesting things going on.
There is likely a more optimal way to compute this pattern.
*/

/**
Finds and removes a specified value from an array.
Returns true if the deletion succeeded, and false otherwise.

@param array
The given array will be mutated as described above.

@param value
The first element with this value will be removed.
If there is no such value, nothing will be removed.

@param repeat
An optional parameter is available in case more than
	one instance of a value needs to be removed.
By default, only one element is considered for removal.
**/
const removeValueFromArray = <T = unknown,> (
	array: Array<T>,
	value: T,
	repeat = 1,
) => {
	// Repeat this operation if necessary.
	for (repeat; repeat > 0; repeat--) {
		const index = array.indexOf(value)
		if (index === -1) return false // Removal failed.
		array.splice(index, 1) // Remove element from array.
	}
	return true
}

/**
Finds the smallest positive integer above zero,
	the product of whose digits is equal to the given number.
**/
const getDigitsProduct = (target: number) => {
	// Base Case: 1 & 0
	if (target === 0) return 10 // 1 * 0 = 0
	if (target === 1) return 1

	// Edge Case: Prime Factor > 9
	let primeFactors = findPrimeFactors(target)
	if (primeFactors.some(number => number > 9)) return -1

	const countDigit = (input: number) => (
		primeFactors.filter(item => (item === input)).length
	)

	// Track digit-multiplicands in this array.
	const digitsProductArray: Array<number> = [ ]

	while (countDigit(2) + countDigit(3) > 1) {
		// Rank #1 Operations...
		// Has factors of [3, 3].
		if (countDigit(3) > 1) {
			digitsProductArray.push(9)
			removeValueFromArray(primeFactors, 3, 2)
		}

		// Has factors of [2, 2, 2].
		else if (countDigit(2) > 2) {
			digitsProductArray.push(8)
			removeValueFromArray(primeFactors, 2, 3)
		}

		// Rank #2 Operation.
		// Has factors of [2, 3].
		else if (countDigit(3) > 0 && countDigit(2) > 0) {
			digitsProductArray.push(6)
			removeValueFromArray(primeFactors, 2)
			removeValueFromArray(primeFactors, 3)
		}

		// Rank #3 Operation.
		// Has factors of [2, 2].
		else if (countDigit(2) > 1) {
			digitsProductArray.push(4)
			removeValueFromArray(primeFactors, 2, 2)
		}
	}

	// Add all remaining prime factors and sort them.
	digitsProductArray.push(...primeFactors)
	digitsProductArray.sort((a, b) => a - b)

	// Join the array and finally return it.
	return parseInt(digitsProductArray.join(''))
}

export default getDigitsProduct
