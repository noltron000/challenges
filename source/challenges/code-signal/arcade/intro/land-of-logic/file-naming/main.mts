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
Follows the naming convention specified in the README,
	to rename duplicate files in some directory.
**/
const renameDuplicates = (names: Array<string>) => {
	for (let index = 0; index < names.length; index++) {
		const name = names.at(index) // The current name.
		const upTo = names.slice(0, index) // Previous names.

		// The current name has already been seen!
		if (upTo.includes(name)) {
			let ordinal = 1
			const getNewName = ( ) => `${name}(${ordinal})`

			while (upTo.includes(getNewName( ))) ordinal++
			names[index] = getNewName( )
		}
	}

	return names
}

export default renameDuplicates
