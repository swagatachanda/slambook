const insta = () => {
	window.open("https://www.instagram.com/__fuzziegirl__/")
}
const entry = {}
const start = () => {
	document.querySelector(".container").innerHTML = ""
	//document.querySelector(".container").style.backgroundImage ="url('/heart.png')"
	document
		.querySelector(".container")
		.insertAdjacentHTML("beforeend", `<div class="questions-container"></div>`)
	next(0)
}
const hightlight = (elem) => {
	elem.style.borderBottom = "2px solid #000"
}
const defocus = (elem) => {
	elem.style.borderBottom = "1px solid #000"
}
const finished = () => {
	document.querySelector(".questions-container").innerHTML = ""
	document.querySelector(".questions-container").insertAdjacentHTML(
		"beforeend",
		`
        <div class="success">
            <div class="success-animation">
                <img src="/celeb.svg" class="img-svg"/>
            </div>
            <div class="success-thankyou">
                Thank you!!
            </div>
        </div>
        `
	)
}
const checkPhn = async (number) => {
	const response = await fetch(
		`${window.location.origin}/api/check/phone/${number}`
	)
	const body = await response.json()
	if (response.status != 200) {
		alert(`${body.error}`)
		return false
	}
	return true
}
const next = async (index) => {
	if (index > 0) {
		var content = document.querySelector(`.answer.a${index - 1}`).innerHTML
		if (content.trim() === "") {
			alert("Fill up the question")
			return
		}
		if (index === 3 && !(await checkPhn(content))) {
			return
		}
		entry[`Q${index}`] = content
	}
	document.querySelector(".questions-container").innerHTML = ""
	document.querySelector(".questions-container").insertAdjacentHTML(
		"beforeend",
		`
        <div class="question q${index}">
            <div class="question-content">${data[index]}</div>
            <div class="answer a${index}" contentEditable="true" onfocus="hightlight(this)" onfocusout=defocus(this)></div>
        </div>`
	)
	if (index >= data.length - 1) {
		document.querySelector(".question").insertAdjacentHTML(
			"beforeend",
			` <div class="button small" onclick="submit()">
                <div class="button-content" >
                    Submit
                </div>
            </div>`
		)
	} else {
		document.querySelector(".question").insertAdjacentHTML(
			"beforeend",
			` <div class="button small" onclick="next(${index + 1})">
                <div class="button-content" >
                    Next
                </div>
            </div>`
		)
	}
	document.querySelector(".answer").focus()
}
const submit = async () => {
	var content = document.querySelector(`.answer.a${data.length - 1}`).innerHTML
	if (content.trim() === "") {
		alert("Fill up the question")
		return
	}
	entry[`Q${data.length}`] = content
	console.log(entry)
	const url = `${window.location.origin}/api/submit`
	const response = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json;charset=utf-8" },
		body: JSON.stringify(entry),
	})
	console.log(response)
	var status = response.status
	console.log(status)
	const back_data = await response.json()
	console.log(back_data)
	if (status === 500) {
		alert("Failed!! Try Again!!")
	} else {
		finished()
		console.log("Done!!!")
	}
}
