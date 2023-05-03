const express = require("express");
const router = express();

router.get("/", (request, response) => {
    response.send("this is service page");
});

router.get("/new", (request, response) => {
    response.render("services/newService");
});

router.post("/", (request, response) => {
    console.log(request.body.serviceName);
});

module.exports = router;
