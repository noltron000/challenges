# Challenge
Given the positions of a *friendly bishop* and an *enemy pawn* on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement.
Check out the example below to see how it can move:

![Example 1]

# Example

- For the positions *"a1"* and *"c3"*, the output should be **`true`**.
	The bishop can take the pawn from its position.

	![Example 2]

- For the positions *"h1"* and *"h3"*, the output should be **`false`**.
	The bishop cannot move in straight lines on the board.

	![Example 3]

[Example 1]: ./bishop-01.jpg 'A bishop on a chess board.'
[Example 2]: ./bishop-02.jpg 'A bishop that can attack a pawn.'
[Example 3]: ./bishop-03.jpg 'A bishop that cannot attack a pawn.'
