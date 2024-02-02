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

import {Histogram} from '@library/histogram'

/**
Compiles two histograms and checks if their
	counters are the same for each element.
**/
const areFrequenciesMatching = <T = unknown,> (
	a: Array<T>,
	b: Array<T>,
) => {
	const aHisto = Histogram.fromArray(a)
	const bHisto = Histogram.fromArray(b)

	for (const [key, aCount] of aHisto.entries( )) {
		const bCount = bHisto.get(key)
		if (aCount === bCount) continue
		else return false
	}

	return true
}

/**
This function determines whether or not two arrays
	have almost-matching element positionings.
The given arrays must have an equal length, otherwise
	the function will always return *false*.
**/
const arePositionsSimilar = <T = unknown,> (
	a: Array<T>,
	b: Array<T>,
) => {
	// The tolerance can only be *0* or *1* right now.
	// In cases where three positions are swapped around,
	//	a tolerance of *2* will not report the correct value.
	let mismatches = 0
	const tolerance = 1

	// Counts out-of-line positions.
	for (let index = 0; index < a.length; index++) {
		if (a[index] !== b[index]) mismatches += 1
	}

	return !(mismatches / 2 > tolerance)
}

/**
Checks if the given arrays have the same elements,
	with "nearly" the same indices.
**/
const areArraysSimilar = <T = unknown,> (
	a: Array<T>,
	b: Array<T>,
) => {
	if (!areFrequenciesMatching(a, b)) return false
	else if (!arePositionsSimilar(a, b)) return false
	else return true
}

export default areArraysSimilar
