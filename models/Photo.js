const { model, Schema } = require("mongoose");

const photoSchema = new Schema({
    title: String,
    img: String,
});

const PhotoModel = model("photos", photoSchema);

module.exports = PhotoModel;