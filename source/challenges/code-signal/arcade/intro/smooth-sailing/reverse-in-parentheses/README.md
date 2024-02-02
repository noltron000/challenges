# Challenge
Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching `( )`'s.

# Example
- Given *"(bar)"*, the output should be **"rab"**.
- Given *"foo(bar)baz"*, the output should be **"foorabbaz"**.
- Given *"foo(bar)baz(blim)"*, the output should be **"foorabbazmilb"**.
- Given *"foo(bar(baz))blim"*, the output should be **"foobazrabblim"**, because *"foo(bar(baz))blim"* becomes *"foo(barzab)blim"* and then *"foobazrabblim"*.
