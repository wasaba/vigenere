import { InterVigenere } from "./Interface.js"

class Vigenere extends InterVigenere {
	constructor(val) {
		super(val)
	}

	encrypt(key) {
		if (!!key.match(/[0-9]/)) return "pas de nombres ! svp"

		const toEncode = [...this.val].map((e) => e.toUpperCase())
		const keyEncoder = [...key].map((e) => e.toUpperCase())
		const newWord = []

		let decal = 0

		for (const [i, v] of toEncode.entries()) {
			if (v === " ") {
				decal++
				newWord.push(v)
				continue
			}
			const charAtValue = v.charCodeAt(0) - 65
			const charAtKey = keyEncoder[i - decal].charCodeAt(0) - 65

			newWord.push(String.fromCharCode(((charAtValue + charAtKey) % 26) + 65))
		}
		return newWord.map((e) => e.toLowerCase()).join("")
	}
}

export { Vigenere }
