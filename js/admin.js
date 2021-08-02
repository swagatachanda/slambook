const insta = () => {
	window.open("https://www.instagram.com/__fuzziegirl__/")
}
const errorShow = () => {
	console.log("Error")
}

var submissions = {}
const getAllData = async () => {
	const url = `${window.location.origin}/api/submission`
	const response = await fetch(url)
	if (response.status != 201) {
		errorShow()
		return
	}
	submissions = await response.json()
	console.log(submissions)
	submissions.data.map((eachSub, index) => {
		document.querySelector(".all-subs").insertAdjacentHTML(
			"beforeend",
			`<div class="sub s${index}" onclick="sub(${index})">
                    <div class="sub-name sm${index}">${eachSub.Q1}</div>
                    <div class="sub-time st${index}">12.03.2012 12:23pm</div>
            </div>`
		)
	})
}
window.onload = getAllData()
window.addEventListener("pageshow", function (event) {
	var historyTraversal =
		event.persisted ||
		(typeof window.performance != "undefined" &&
			window.performance.navigation.type === 2)
	if (historyTraversal) {
		// Handle page restore.
		//alert('refresh');
		window.location.reload()
	}
})
const sub = (index) => {
	console.log(submissions.data[index]._id)
	location.assign(
		`${window.location.origin}/momo/${submissions.data[index]._id}`
	)
}
