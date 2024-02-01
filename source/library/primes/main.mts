/** This generates an infinite series of prime numbers. */
function * generatePrimes ( ) {
	// This array collects previously visited prime numbers.
	const primes: Array<number> = [ ]

	// Loop over each integer starting at 2,
	//	since it's the smallest prime number.
	for (let current = 2; true; current++) {
		// Loop over each of the currently known primes,
		//	checking if the current number is composite of one.
		let foundFailure = false
		for (const prime of primes) {
			// We have found another prime number.
			if (prime * 2 > current) {
				break
			}
			// We have found some composite number.
			else if (current % prime === 0) {
				foundFailure = true
				break
			}
		}

		if (!foundFailure) {
			primes.push(current)
			yield current
		}
	}

	// Unreachable.
	return Infinity
}

/** This uses a generator to check if an input is prime. */
const isPrime = (target: number) => {
	const generator = generatePrimes( )
	for (const prime of generator) {
		if (prime === target) return true
		else if (prime > target) return false
	}
}

/** This finds the prime factors of a given number. */
const findPrimeFactors = (target: number) => {
	const primeFactors: Array<number> = [ ]
	const generator = generatePrimes( )
	let current = generator.next( ).value

	// Reduce the target value to 1 by dividing by primes.
	while (target > 1) {
		// Divide by a prime and record it.
		if (target % current === 0) {
			primeFactors.push(current)
			target = Math.trunc(target / current)
		}
		// This prime is no good;
		// 	we must keep our target at an integer value.
		else {
			current = generator.next( ).value
		}
	}

	return primeFactors
}

export {
	generatePrimes,
	isPrime,
	findPrimeFactors,
}
