import { InterVigenere } from "./Interface.js"

class DeVigenere extends InterVigenere {
	constructor(val) {
		super(val)
	}

	encrypt(key) {
		if (!!key.match(/[0-9]/)) return "pas de nombres ! svp"

		const tabVal = [...this.val].map((e) => e.toUpperCase())
		const tabKey = [...key].map((e) => e.toUpperCase())
		const final = new Array(tabVal.length)

		let decal = 0

		for (const [key, value] of tabVal.entries()) {
			if (value === " ") {
				decal += 1
				final.push(value)
				continue
			}

			const charVal = value.charCodeAt(0) - 65
			const charKey = tabKey[key - decal].charCodeAt(0) - 65

			const x = charVal - charKey

			final.push(String.fromCharCode(x < 0 ? x + 26 + 65 : x + 65))
		}

		return final.map((e) => e.toLowerCase()).join("")
	}
}

export { DeVigenere }
