const express = require("express")
const mongoose = require("mongoose")
const userRoutes = require("./routes/users")
const bodyParser =require("body-parser")
var cors = require('cors')
require("dotenv/config")
const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use("/users", userRoutes)

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, ()=> console.log("DB connected"))

app.listen(3001)
