const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.send("This is the user page");
});

router.get("/new", (request, response) => {
    response.render("users/new");
});

router.post("/", (request, response) => {
    const isAValidUser = true;

    if (isAValidUser) {
        users.push({ name: request.body.userName });
        response.redirect(`/userPage/${users.length - 1}`);
    } else {
        console.log("error");
    }
});

const users = [
    {
        name: "Jason"
    },
    {
        name: "Geralt"
    },
    {
        name: "Mason"
    },
    {
        name: "Soap"
    }
];

router.route("/:id").get((request, response) => {
    response.send(request.users.name);
});

router.param("id", (request, response, next, id) => {
    console.log(id);
    request.users = users[id];
    console.log(request.users.name);

    next();
});
module.exports = router;
