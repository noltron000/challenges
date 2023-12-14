# Challenge
Two arrays are called **similar** if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays :a: and :b:, check whether they are similar.

# Example
- Given :a: is *`[1, 2, 3]`* and :b: is *`[1, 2, 3]`*, the output should be **`true`**.
	The arrays are equal, no need to swap any elements.
- Given :a: is *`[1, 2, 3]`* and :b: is *`[2, 1, 3]`*, the output should be **`true`**.
	We can derive :b: from :a: by swapping 2 and 1 in :b:.
- Given :a: is *`[1, 2, 2]`* and :b: is *`[2, 1, 1]`*, the output should be **`false`**.
	Any swap of any two elements either in :a: or in :b: won't make them equal.
