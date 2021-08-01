console.log(data)
const insta = () => {
	window.open("https://www.instagram.com/__fuzziegirl__/")
}
const entry = {}
const start = () => {
	document.querySelector(".container").innerHTML = ""
	document
		.querySelector(".container")
		.insertAdjacentHTML("beforeend", `<div class="questions-container"></div>`)
	next(0)
}

const next = (index) => {
	document.querySelector(".questions-container").innerHTML = ""
	document.querySelector(".questions-container").insertAdjacentHTML(
		"beforeend",
		`
        <div class="question q${index + 1}">
            <div class="question-content">${data[index]}</div>
            <div class="answer a${index}" contentEditable="true"></div>
        </div>`
	)
	if (index >= data.length) {
	} else {
		document.querySelector(".question").insertAdjacentHTML(
			"beforeend",
			` <div class="button">
                <div class="button-content" onclick="next(${index + 1})">
                    Next
                </div>
            </div>`
		)
	}
}
