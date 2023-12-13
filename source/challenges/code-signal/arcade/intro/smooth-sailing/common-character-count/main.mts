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
import {Histogram} from '@library/histogram'

/**
This performs a union-like operation on a pair of strings.
The returned value is a number which counts
	the common characters between the two given inputs.
**/
const countCommonCharacters = (
	string1: string,
	string2: string,
) => {
	// Generate the shared histogram.
	// This shared pattern is similar to a set "union".
	const sharedHisto = new Histogram<string>( )

	// Generate histograms by using arrays of characters
	//	made from each string.
	let smallerHisto = Histogram.fromArray(string1.split(''))
	let largerHisto = Histogram.fromArray(string2.split(''))

	// For performance we can determine the smaller histogram.
	// This may allow us to loop over fewer items overall.
	if (largerHisto.size < smallerHisto.size) {
		const swapper = largerHisto
		largerHisto = smallerHisto
		smallerHisto = swapper
	}

	// Generate the shared values histogram via a loop...
	smallerHisto
	.entries( )
	.forEach(([key, value1]) => {
		const value2 = largerHisto.get(key)
		const sharedValue = Math.min(value1, value2)
		sharedHisto.set(key, sharedValue)
	})

	// Finally, add up all remaining histogram counters.
	const totalSharedGlyphs = sharedHisto
	.values( )
	.reduce(Algebra.addition, 0)

	return totalSharedGlyphs
}

export default countCommonCharacters
