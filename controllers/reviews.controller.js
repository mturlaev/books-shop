const req = require("express/lib/request");
const Review = require("../models/Review.model");

module.exports.reviewsController = {
    postReviewsByBooks: (req, res) => {
        Review.create({
            textReview: req.body.textReview,
            nameAuthor: req.body.nameAuthor,
            bookId: req.body.bookId
        }).then((data) => {
            res.json(data)
        }).catch((e) => {
            res.json("ошибка")
        })
    },
    deleteReviews: (req, res) => {
        Review.findByIdAndRemove(req.params.id).then((data) => {
            res.json("удалено")
        }).catch((e) => {
            res.json("ошибка")
        })
    },
    getReviewsByBooks: (req, res) => {
        Review.find({bookId: req.params.id}).populate("bookId")
        .then((data) => {
            res.json(data)
        }).catch((e) => {
            res.json("ошибка")
        })
    },
};