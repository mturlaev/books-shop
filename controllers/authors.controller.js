const Author = require("../models/Author.model");

module.exports.authorsController = {
    postAuthors: (req, res) => {
        Author.create({
            name: req.body.name,
            text: req.body.text
        }).then((data) => {
            res.json(data)
        }).catch((e) => {
            res.json("ошибка")
        })
    },
    deleteAuthors: (req, res) => {
        Author.findByIdAndRemove(req.params.id).then((data) => {
            res.json("удалено")
        }).catch((e) => {
            res.json("ошибка")
        })
    },
    getAuthors: (req, res) => {
        Author.find().then((data) => {
            res.json(data)
        }).catch((e) => {
            res.json("ошибка")
        })
    },
}