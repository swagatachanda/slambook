const express = require("express")
const app = express()
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
//routes
app.get("/", (req, res) => {
	res.render("questions")
})
//mongo connection
mongoose.connect(process.env.DB_CONNECTION, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
})
//app listen
app.listen(process.env.PORT || 3000)
