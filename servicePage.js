const express = require("express");
const router = express();

router
    .route("/")
    .get((request, response) => {
        response.json(Services);
    })
    .post((request, response) => {
        console.log(request.body.serviceName);

        let isServiceValidTrue = true;
        if (isServiceValidTrue) {
            Services.push({ name: request.body.serviceName });
            response.redirect;
        }
    });

router.get("/new", (request, response) => {
    response.render("services/newService");
});

const Services = [
    {
        name: "Service Page"
    },
    {
        name: "Game Development"
    },
    {
        name: "Pen Testing"
    },
    {
        name: "Backend Developing"
    }
];
router.get("/:id", (request, response) => {
    response.send(request.service.name);
});

router.param("id", (request, response, next, id) => {
    console.log("Service queried : " + Services[id].name);
    request.service = Services[id];
    next();
});
module.exports = router;
