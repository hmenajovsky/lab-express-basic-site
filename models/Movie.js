const { model, Schema } = require("mongoose");

const movieSchema = new Schema({
    title: String,
    description: String,
    year: Date
});

const CatModel = model("movies", movieSchema);

module.exports = CatModel;