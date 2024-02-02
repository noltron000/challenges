# Challenge
Let's define the **digit degree** of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

# Example
- For *n = 5*, the output should be **0**.
- For *n = 100*, the output should be **1**.
	Because, `1 + 0 + 0 = 1`.
- For *n = 91*, the output should be **2**.
	Because, `9 + 1 = 10` and `1 + 0 = 1`.
