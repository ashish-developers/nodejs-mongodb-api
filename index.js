var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var authRouter = require("./routes/auth.router")

app.use("/api", authRouter)

app.listen(10000)