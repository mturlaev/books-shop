const Book = require("../models/Book.model");

module.exports.booksController = {
    postBooks: (req, res) => {
        Book.create({
            name: req.body.name,
            authorsId: req.body.authorsId,
            genresId: req.body.genresId
        }).then((data) => {
            res.json(data)
        }).catch((e) => {
            res.json("ошибка")
        })
    },
    deleteBooks: (req, res) => {
        Book.findByIdAndRemove(req.params.id)
        .then((data) => {
            res.json("удалено")
        }).catch((e) => {
            res.json("ошибка")
        })
    },
    pathBooks: (req, res) => {
        Book.findByIdAndUpdate((req.params.id), {
            name: req.body.name,
            authorsId: req.body.authorsId,
            genresId: req.body.genresId
        }).then((data) => {
            res.json(data)
        }).catch((e) => {
            res.json("ошибка")
        })
    },
    getBooksId: (req, res) => {
        Book.findById(req.params.id)
        .then((data) => {
            res.json(data)
        }).catch((e) => {
            res.json("ошибка")
        })
    },
    getBooks: (req, res) => {
        Book.find().then((data) => {
            res.json(data)
        }).catch((e) => {
            res.json("ошибка")
        })
    },
    getBooksByGenres: (req, res) => {
        Book.find({genres: req.params.id})
        .then((data) => {
            res.json(data)
        }).catch((e) => {
            res.json("ошибка")
        })
    },
}