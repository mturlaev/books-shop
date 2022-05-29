const express = require ("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/books.route"));
app.use(require("./routes/genres.route"));
app.use(require("./routes/reviews.route"));
app.use(require("./routes/authors.route"));

mongoose.connect("mongodb+srv://mturlaev:1221@cluster0.gt26rfa.mongodb.net/shop?retryWrites=true&w=majority").then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(4000, () => {
    console.log("сервер запущен")
})