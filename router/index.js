const express = require("express");
const router = new express.Router();

router.get('/', (req, res) => {
    res.render("home", {
        css: ["home.css","template.css"],
    });
});

router.get('/about', (req, res) => {
    res.render("about", {
        css: ["about.css","template.css"],
    });
});


module.exports = router;