const express = require("express");
const router = new express.Router();
const MovieModel = require("./../models/Movie");

router.get('/', (req, res) => {
    MovieModel.find()
    .then((movies => 
      res.render("works", {
      css: ["works.css","template.css"],
      works: movies
  })
  ))
  .catch((err) => console.error(err));
});

module.exports = router;