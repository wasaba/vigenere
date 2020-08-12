class InterVigenere {
	constructor(val) {
		this.val = val
		console.log(this.val)
		if (this.val.match(/[1-9]/g))
			throw new Error("The value of the object should not receive any numbers.")
	}

	resize(key) {
		const keyLength = [...key].length
		const valueLength = [...this.val].length

		if (keyLength > valueLength) return [...key].splice(0, valueLength).join("")

		return this.resize(key.repeat(2))
	}
}

export { InterVigenere }
