var express = require("express");
var app = express();
var morgan = require("morgan"); //logger

app.use(morgan("dev"));

app.get("/", function (req, res) {
   res.send("HelloWorld") 
});

app.listen(3000);
console.log("Server run on port 3000");