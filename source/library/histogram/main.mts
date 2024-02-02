/**
A Histogram is an object that tracks the frequency of the
	keys it contains for various purposes and uses.
It mostly takes the form of a Map, with one major change...
The key-value pairs in the map now act as a counter device,
	where a counter's value is a positive non-zero number.
**/
class Histogram <T = unknown> extends Map<T, number> {
	constructor (entries?: Array<[T, number]> | null) {
		super(entries)
	}

	/**
	This method comes in handy when you need to construct a
		histogram from a simple list of items...
	**/
	static fromArray <T = unknown> (array?: Array<T> | null) {
		const histogram = new Histogram<T>( )

		if (array != null) {
			[...array].forEach((element) => {
				histogram.increment(element)
			})
		}

		return histogram
	}

	/** The getter defaults to *0* instead of *undefined*. */
	override get (key: T) {
		return super.get(key) ?? 0
	}

	/**
	This method mostly works as it would in a normal map.
	However, it deletes a given key from the map
		if the given value is less than or equal to zero.
	**/
	override set (key: T, value: number) {
		if (value > 0) super.set(key, value)
		else this.delete(key)
		return this
	}

	/**
	This returns the keys of the map in an array.
	**/// @ts-ignore: Use arrays over iterables.
	override keys ( ) {
		return [...super.keys( )]
	}

	/**
	This returns the values of the map in an array.
	**/// @ts-ignore: Use arrays over iterables.
	override values ( ) {
		return [...super.values( )]
	}

	/**
	This returns the key-value pair for
		every entry of the map in an array.
	**/// @ts-ignore: Use arrays over iterables.
	override entries ( ) {
		return [...super.entries( )]
	}

	/**
	Given a key, this method adds *1* to its counter.
	If the key doesn't exist yet, it creates
		a new entry for it in the histogram.
	**/
	increment (key: T) {
		const counter = this.get(key) ?? 0
		this.set(key, counter + 1)
		return this
	}

	/**
	Given a key, this method subtracts *1* from its counter.
	If the counter reaches *0*, then the key
		is removed from the histogram.
	**/
	decrement (key: T) {
		const counter = this.get(key) ?? 0
		this.set(key, counter - 1)
		return this
	}
}

export {Histogram}
