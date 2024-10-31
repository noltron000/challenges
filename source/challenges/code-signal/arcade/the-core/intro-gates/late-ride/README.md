# Challenge
One night you go for a ride on your motorcycle.
At **00:00** you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes.
Off you go to explore the neighborhood.

When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded!
Unfortunately, you don't have your watch on you and don't know what time it is.
All you know thanks to the bike's timer is that ***n*** minutes have passed since **00:00**.

Using the bike's timer, calculate the current time.
Return an answer as the sum of digits that the digital timer in the format **hh:mm** would show.

# Example
- If *240 minutes* have passed, the output should be **4**.

	Since *240 minutes* have elapsed, the current time is **04:00**.
	The digits should then be added up (*ie:* `0 + 4 + 0 + 0`).
	That sums up to **4**, which is the answer.

- If *808 minutes* have passed, the output should be **14**.

	Since *808 minutes* have elapsed, that means it's **13:28** now.
	Adding up the digits (*ie:* `1 + 3 + 2 + 8`) results in **14**, which is the answer.
