const express = require("express");
const exphbs = require("express-handlebars");
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;

const app = express();

//View Engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log( `==> Server listening at ${PORT}` );
});

