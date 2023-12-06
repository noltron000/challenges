# Challenge
A media access control address (*MAC address*) is a unique identifier assigned to network interfaces for communications on the physical network segment.

The standard (*IEEE 802*) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or *A* to *F*), separated by hyphens (*eg:* `01-23-45-67-89-AB`).

Your task is to check whether the given string corresponds to a MAC-48 address or not.

# Example
- For *`00-1B-63-84-45-E6`*, the output should be **`true`**.
- For *`Z1-1B-63-84-45-E6`*, the output should be **`false`**.
- For *`not a MAC-48 address`*, the output should be **`false`**.
