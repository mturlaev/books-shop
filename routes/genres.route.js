const {Router} = require("express");
const { genresController } = require("../controllers/genres.controller");


const router = Router();


router.post("/genres", genresController.postGenres);
router.delete("/genres/:id", genresController.deleteGenres);
router.get("/genres", genresController.getGenres);

module.exports = router;