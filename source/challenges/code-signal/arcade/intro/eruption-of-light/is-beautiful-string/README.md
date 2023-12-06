# Challenge
A string is said to be **beautiful** if each letter in the string appears at most as many times as *the previous letter in the alphabet within the string*; ie: *b* occurs no more times than *a*; *c* occurs no more times than *b*; *etc.*
Note that letter *a* has no previous letter.

Given a string, check whether it is beautiful.

# Example
- For *"bbbaacdafe"*, the output should be **`true`**.

	This string contains three *a*'s, three *b*'s, one *c*, one *d*, one *e*, and one *f* (and no other letters).
	Since there aren't any letters that appear more frequently than the previous letter, this string qualifies as **beautiful**.

- For *"aabbb"*, the output should be **`false`**.

	Since there are more *b*'s than *a*'s, this string is **not beautiful**.

- For *"bbc"*, the output should be **`false`**.

	Although there are more *b*'s than *c*'s, this string is **not beautiful** because there are no *a*'s, so therefore there are more *b*'s than *a*'s.
