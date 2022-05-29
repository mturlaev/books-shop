const {Router} = require("express");
const {authorsController} = require("../controllers/authors.controller");

const router = Router();


router.post("/authors", authorsController.postAuthors);
router.delete("/authors/:id", authorsController.deleteAuthors);
router.get("/authors", authorsController.getAuthors);


module.exports = router;