const express = require("express")
const app = express()
const Apiroutes = require("./routes/apiroutes")
//library inmports
require("dotenv/config")
const mongoose = require("mongoose")
//model imports

//static directories

app.use(express.static(__dirname + "/css"))
app.use(express.static(__dirname + "/js"))
app.use(express.static(__dirname + "/images"))

//view engine selection
app.set("view engine", "ejs")
app.enable("trust proxy")

//middleware
app.use(express.json())
app.use("/api", Apiroutes)

//routes
app.get("/", (req, res) => {
	res.render("questions")
})
app.get("/momo", (req, res) => {
	res.render("admin")
})
app.get("/momo/:subId", (req, res) => {
	res.render("individual", { subId: req.params.subId })
})
//mongo connection
mongoose.connect(process.env.DB_CONNECTION, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
})
//app listens
app.listen(process.env.PORT || 3000)
