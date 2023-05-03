const express = require("express");
const app = express();

const userPage = require("./user.js");
const servicePage = require("./servicePage.js");
//app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
    response.render("index");
});

app.use("/userpage", userPage);
app.use("/servicePage", servicePage);
app.listen(3500);
