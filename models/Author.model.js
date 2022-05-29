const express = require("express");
const mongoose = require("mongoose");

const authorSchema = ({
    name: String,
    text: String,
})

const Author = mongoose.model("Authors", authorSchema);

module.exports = Author;