import { Vigenere } from "./basicObject.js"
import { InterVigenere } from "./Interface.js"
import { DeVigenere } from "./unVigen.js"

const category = ["chiffrement", "dechiffrement"]
let usage = category[0]

const DOMElements = {
	getter: document.getElementById("button"),
	result: document.getElementById("result"),
	methode: document.getElementById("mode"),
}

DOMElements.methode.addEventListener("click", (e) => {
	console.log("click")

	document.getElementById("value").value = ""

	if (DOMElements.methode.textContent === category[0]) {
		DOMElements.methode.textContent = category[1]
		usage = category[1]
	} else {
		DOMElements.methode.textContent = category[0]
		usage = category[0]
	}
})

DOMElements.getter.addEventListener("click", (e) => {
	const value = document.getElementById("value").value || "ptinaeq aaq rdyblq"
	const key = document.getElementById("key").value || "CLE"
	let transformer
	if (usage === category[0]) {
		transformer = new Vigenere(value)
	} else {
		transformer = new DeVigenere(value)
	}

	console.log(transformer)

	DOMElements.result.textContent = transformer.encrypt(transformer.resize(key))
})
