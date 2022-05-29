const express = require("express");
const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    textReview: String,
    nameAuthor: String,
    bookId: {
        ref: "Book",
        type: mongoose.SchemaTypes.ObjectId
    },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;