const select = document.querySelector("select")
const add = document.getElementById("click")
const store = document.getElementById("store")
const refresh = document.getElementById("refresh")
const ul = document.querySelector("ul")

const data = JSON.parse(localStorage.getItem("ulValue"))
if (data != null) {
	for (let i = 0; i < data.length; i++) {
		const li = document.createElement("li")
		li.textContent = data[i]
		
		ul.append(li)
	}
}

add.addEventListener('click', () => {
	const value = select.value
	
	if (value == "undefined") {
		
		const fetchNorris = () => fetch("https://api.chucknorris.io/jokes/random")
		
		fetchNorris().then((response) => response.json()).then((json) => {
			const newDiv = document.createElement("div")
			newDiv.textContent = json.value
			
			document.body.append(newDiv)
		}).catch((error), () => {
			console.log("There was an error, ", error)
		})
		
	} else {
		const fetchCategories = (value) => fetch("https://api.chucknorris.io/jokes/random?category=" + value)
		
		fetchCategories(value).then((response) => response.json()).then((json) => {
			const li = document.createElement('li')
			li.textContent = value + " : " + json.value

			ul.append(li)
		}).catch((error), () => {
			console.log("There was an error, ", error)
		})
	}
})

store.addEventListener('click', () => {
	let data = []
	let lis = ul.querySelectorAll("li")
	for (let li of lis) {
		let item = li.textContent
		data.push(item)
	}
	localStorage.setItem("ulValue", JSON.stringify(data))
})

refresh.addEventListener('click', () => {
	localStorage.removeItem("ulValue")
	location.reload()
})