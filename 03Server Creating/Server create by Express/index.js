const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({ status: 1, msg: "Home page" });
});

app.get("/about", (req, res) => {
    res.send("Welcome to about");
});

app.get("/contact", (req, res) => {
    res.send("Welcome to Contact");
});

app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});
