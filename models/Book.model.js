const express = require("express");
const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name: String,
    authorsId: {
        ref: "Author",
        type: mongoose.SchemaTypes.ObjectId
    },
    genresId: {
        ref: "Genres",
        type:mongoose.SchemaTypes.ObjectId
    }
})

const Book = mongoose.model("Book", bookSchema);


module.exports = Book;