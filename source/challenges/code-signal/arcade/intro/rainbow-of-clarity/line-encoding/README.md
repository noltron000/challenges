# Challenge
Given a string, return its **encoding** defined as follows:
- First, the string is divided into the least possible number of disjoint *[substrings][Substring]* consisting of identical characters.
	For example, "*aabbbc*" is divided into `['aa', 'bbb', 'c']`.
- Next, each substring with a length greater than one is replaced with a concatenation of its length and the repeating character.
	For example, the substring *"bbb"* is replaced by *"3b"*.
- Finally, all the new strings are concatenated together in the same order and a new string is returned.

## Substring
A string that appears within another string.
In other words, *s* is considered a substring of *t* if all the characters of *s* appear in *t* in the same order, with no other elements in between.
- *"cat"* is a substring of *"scatter"*.
- *"rest"* is a substring of *"arrest"*.
- *"implied"* is **not** a substring of *"simplified"* because there are other characters in between.
- *"happy"* is **not** a substring of *"happiest"* because they contain different characters.

# Example
For *"aabbbc"*, the output should be ***"2a3bc"***.

[Substring]: #substring
