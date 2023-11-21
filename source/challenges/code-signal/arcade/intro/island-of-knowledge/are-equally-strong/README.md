# Challenge
Call two *arms* **equally strong** if the heaviest weights they each are able to lift are equal.

Call two *people* **equally strong** if their *strongest arms* are equally strong (the strongest arm can be both the right and the left), and so are their *weakest arms*.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

# Example
- Given the values&hellip;

	|        | Left Arm | Right Arm |
	|--------|----------|-----------|
	| You    | 10       | 15        |
	| Friend | 15       | 10        |

	&hellip;the output should be **`true`**.

- For&hellip;

	|        | Left Arm | Right Arm |
	|--------|----------|-----------|
	| You    | 15       | 10        |
	| Friend | 15       | 10        |

	&hellip;the output should be **`true`**.

- Given&hellip;

	|        | Left Arm | Right Arm |
	|--------|----------|-----------|
	| You    | 15       | 10        |
	| Friend | 15       | 9         |

	&hellip;the output should be **`false`**.
