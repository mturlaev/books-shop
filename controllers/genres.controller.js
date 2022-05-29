const Genre = require("../models/Genre.model");

module.exports.genresController = {
    postGenres: (req, res) => {
        Genre.create({
            name: req.body.name,
            description: req.body.description
        }).then((data) => {
            res.json(data)
        }).catch((e) => {
            res.json("ошибка")
        })
    },
    deleteGenres: (req, res) => {
        Genre.findByIdAndRemove(req.params.id).then((data) => {
            res.json("удалено")
        }).catch((e) => {
            res.json("ошибка")
        })
    },
    getGenres: (req, res) => {
        Genre.find().then((data) => {
            res.json(data)
        }).catch((e) => {
            res.json("ошибка")
        })
    },
}