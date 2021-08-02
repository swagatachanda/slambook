const express = require("express")
const router = express.Router()
const Submission = require("../model/submissions")

router.post("/submit", async (req, res) => {
	const fields = []
	for (i = 0; i < 25; i++) {
		fields.push(`Q${i + 1}`)
	}
	data = {}
	fields.map((item) => {
		data[`${item}`] = req.body[`${item}`]
	})
	for (item in data) {
		if (data[`${item}`] === undefined) {
			return res.status(400).json({
				errorMessage: `Please fill the required field`,
			})
		}
		if (item == "Q3") {
			const testcase = /^\d{10}$/.test(data[`${item}`])
			if (!testcase) {
				return res.status(403).json({
					errorMessage: "Please provide a valid phone number",
				})
			}
		}
	}
	const newsubmit = new Submission(data)
	try {
		const submit = await newsubmit.save()
		res.status(200).json({
			data: submit,
		})
	} catch (err) {
		res.status(501).json({
			errorMessage: "database problem",
		})
	}
})

router.get("/submission", async (req, res) => {
	try {
		const submitresponse = await Submission.find()
		res.status(201).json({
			data: submitresponse,
		})
	} catch (err) {
		res.status(501).json({
			errorMessage: "database problem",
		})
	}
})

router.get("/check/phone/:Q3", async (req, res) => {
	try {
		const response = await Submission.findOne({ Q3: req.params.Q3 })
		if (response == null) {
			return res.status(200).json({ isPresent: false })
		}
		return res
			.status(400)
			.json({ error: "Phone Number already present", isPresent: true })
	} catch (err) {
		return res.status(500).json({ error: "Database Error" })
	}
})

router.get("/submission/:submissionId", async (req, res) => {
	try {
		const submission = await Submission.findById(req.params.submissionId)
		if (submission == null) {
			return res.status(404).json({
				errorMessage: "Submission not found",
			})
		}
		return res.status(200).json({
			data: submission,
		})
	} catch (err) {
		res.status(501).json({
			errorMessage: "database problem",
		})
	}
})

module.exports = router
