"use strict";
var bookDB  = require("../model/books");
var errors = require("../errors");
exports.getListBooks = function (req, res) {
    bookDB.listBooks(function (err, data) {
        if (err) {
            res.json(err)
        } else {
            res.json(data)
        }
    })
};

exports.createNewBook = function (req, res) {
    bookDB.createBook(req.body, function (err, data) {
        if (err) {
            res.json(err)
        } else {
            res.json(data)
        }
    })
};

exports.deleteMultiBooks = function (req, res) {
    res.json("delete")
};

exports.updateMultiBooks = function (req, res) {
    res.json("update")
}

exports.getBook = function (req, res) {
    bookDB.getBook(req.params.id, function (err, data) {
        if (err) {
            res.status(404).json(errors.bookNotExists)
        } else {
            res.json(data)
        }
    })
};

exports.deleteBook = function (req, res) {
    bookDB.deleteBook(req.params.id, function (err, data) {
        if (err) {
            res.status(404).json(errors.bookNotExists)
        } else {
            res.json("Delete successful.")
        }
    })
};

exports.updateBook = function (req, res) {
    bookDB.updateBook(req.body, function (err, data) {
        if (err) {
            res.json(err)
        } else {
            res.json(data)
        }
    })
}