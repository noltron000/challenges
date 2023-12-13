# Challenge
After becoming famous, the CodeBots decided to move into a new building together.
Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are *haunted*!
Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms *below* the free rooms.

Given a rectangular *matrix* of integers, where each value represents the cost of the room, your task is to return the & of all rooms that are suitable for the CodeBots.
(*ie:* add up all the values that don't appear below a cell marked *0*.)

# Example
- Given the following matrix, the output should be **9**&hellip;

	~~~ts
	matrix = [
		[0, 1, 1, 2],
		[0, 5, 0, 0],
		[2, 0, 3, 3],
	]
	~~~

	![Example 1]

	There are several haunted rooms, so we'll disregard them as well as any rooms beneath them.
	Thus, the answer is `1 + 5 + 1 + 2 = 9`.

- Given the following matrix, the output should also be **9**&hellip;

	~~~ts
	matrix = [
		[1, 1, 1, 0],
		[0, 5, 0, 1],
		[2, 1, 3, 10],
	]
	~~~

	![Example 2]

	Note that the free room in the final column makes the full column unsuitable for bots (not just the room directly beneath it).
	Thus, the answer is `1 + 1 + 1 + 5 + 1 = 9`.

[Example 1]: ./ghost-01.png 'An example of a haunted robot apartment.'
[Example 2]: ./ghost-02.png 'Another example of a haunted robot apartment.'
