"use strict";
var express = require("express");
var router = express.Router();
var bookController = require("../controller/book");
router.route("/books")
    .get(bookController.getListBooks)
    .post(bookController.createNewBook)
    .delete(bookController.deleteMultiBooks)
    .put(bookController.updateMultiBooks)

router.route("/books/:id")
    .get(bookController.getBook)
    .delete(bookController.deleteBook)
    .put(bookController.updateBook)
module.exports = router;