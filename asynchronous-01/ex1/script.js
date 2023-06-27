const button = document.querySelector("button")
const ul = document.querySelector("ul")
let i = 0
button.addEventListener('click', () => {
	fetch("becode.json").then((response) => response.json()).then((json) => {
		for (let i = 0; i < json.length; i++) {
			const li = document.createElement("li")
			li.textContent = json[i]
			
			ul.append(li)
		}
	}).catch((error) => {
		console.log("There was an error : ", error)
	})
})