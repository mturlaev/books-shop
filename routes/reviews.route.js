const {Router} = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();


router.post("/reviews", reviewsController.postReviewsByBooks);
router.delete("/reviews/:id", reviewsController.deleteReviews);
router.get("/reviews/:id", reviewsController.getReviewsByBooks);

module.exports = router;
