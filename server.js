var express = require("express");
var app = express();
var morgan = require("morgan"); //logger
var bookRoute = require("./route/book");
var bodyParser = require('body-parser')

app.use(morgan("dev"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/api", bookRoute);

app.listen(3000);
console.log("Server runs on port 3000");