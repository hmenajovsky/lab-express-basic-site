const express = require("express");
const router = new express.Router();
const PhotoModel = require("./../models/Photo");

router.get('/', (req, res) => {
  PhotoModel.find()
  .then((photos => 
    res.render("gallery", {
    css: ["gallery.css","template.css"],
    gallery: photos
  })
  ))
.catch((err) => console.error(err));
});

module.exports = router;