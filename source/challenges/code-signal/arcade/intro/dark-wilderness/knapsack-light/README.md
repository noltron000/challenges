# Challenge
*You found two items in a treasure chest!*
However, the items have different weights and values.
You might not be able to take the both of them&hellip;
What is the **total maximum value** of the items you can take with you, assuming that you know your carrying capacity, and you can't come back for the items later?

Note that there are *only two items* and you can't bring more than one item of each type.
(*ie:* you can't take two first items or two second items.)

# Example
- Assume your carrying capacity is a *weight of 8*.
	Given two items&hellip;

	|        | Value | Weight |
	|--------|-------|--------|
	| Item 1 | 10    | 5      |
	| Item 2 | 6     | 4      |

	&hellip;the **total maximum value** you can take should be **10**.
	You can only carry the first item.

- Assume your carrying capacity is a *weight of 9*.
	Given two items&hellip;

	|        | Value | Weight |
	|--------|-------|--------|
	| Item 1 | 10    | 5      |
	| Item 2 | 6     | 4      |

	&hellip;the **total maximum value** you can take should be **16**.
	You're strong enough to take both of the items with you.

- Assume your carrying capacity is a *weight of 6*.
	Given two items&hellip;

	|        | Value | Weight |
	|--------|-------|--------|
	| Item 1 | 5     | 3      |
	| Item 2 | 7     | 4      |

	&hellip;the **total maximum value** you can take should be **7**.
	You can't take both items, but you can take the more valuable one.
