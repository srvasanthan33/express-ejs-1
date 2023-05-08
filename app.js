const express = require("express");
const app = express();

const userPage = require("./user.js");
const servicePage = require("./servicePage.js");
//app.use(express.static("public"));

// dynamic rendering
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
    response.render("index");
});

app.use("/userPage", userPage);
app.use("/servicePage", servicePage);
app.listen(process.env.PORT || 3500);
