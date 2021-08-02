const insta = () => {
	window.open("https://www.instagram.com/__fuzziegirl__/")
}
console.log(data)
const display = (result) => {
	data.map((eachQuestion, index) => {
		document.querySelector(".all-subs").insertAdjacentHTML(
			"beforeend",
			`
                 <div class="slam-answer sa${index}">
                    <div class="question-content">
                       Q${index + 1}. ${eachQuestion}
                    </div>
                    <div class="answer page">
                        ${result[`Q${index + 1}`]}
                    </div>
                </div>
        `
		)
	})
}
const getData = async () => {
	const subId = document.querySelector(".input.subId").innerHTML
	console.log(subId)
	const url = `${window.location.origin}/api/submission/${subId}`
	const response = await fetch(url)
	const back = await response.json()
	if (response.status != 200) {
		alert(`Failed...${back.error}`)
		console.error(back.err, back.errDetails)
		return
	}
	console.log(back)
	display(back.data)
}
window.onload = getData()
