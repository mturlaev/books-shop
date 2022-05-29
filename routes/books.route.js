const {Router} = require("express");
const {booksController} = require("../controllers/books.controller");


const router = Router();

router.post("/books", booksController.postBooks);
router.delete("/books/:id", booksController.deleteBooks);
router.patch("/books/:id", booksController.pathBooks);
router.get("/books/:id", booksController.getBooksId);
router.get("/books", booksController.getBooks);
router.get("/books/genres/:id", booksController.getBooksByGenres);

module.exports = router;