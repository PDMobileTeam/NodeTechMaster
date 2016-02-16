var mongooes = require("mongoose")
var bookSchema = new mongooes.Schema({
     ID: String,
     Title: String,
     SubTitle: String,
     Description: String,
     Image: String,
     isbn: {
         type : String,
         require : true,
         unique : true
     }
});

module.exports = mongooes.model("book", bookSchema, "book")