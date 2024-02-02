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
Given a matrix representing a 2D picture, this function
	returns the matrix with an asterisk-border around it.
**/
const addBorder = (picture: Array<string>) => {
	// Frame the sides of the picture.
	picture = picture.map((line) => (`*${line}*`))

	// Add a horizontal rule in front and in back!
	const pictureLength = picture.at(0)?.length ?? 0
	const horizontalRule = '*'.repeat(pictureLength)
	picture.unshift(horizontalRule)
	picture.push(horizontalRule)

	// That's all we'll be needing :)
	return picture
}

export default addBorder
