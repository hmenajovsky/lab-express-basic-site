// require the dependencies
require("./config/mongo");
const express = require("express");
const app = express();
const hbs= require("hbs");

// initianilzing the port as a constant
const PORT = 4000;

// write the main configs
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

// set up the routes
const routerMain = require("./router/index");
const routerWorks = require("./router/works");
const routerGallery = require("./router/gallery");


app.use("/", routerMain);
app.use("/works", routerWorks);
app.use("/gallery", routerGallery);

//kickstart the application listening to the provided port

app.listen(PORT, () => console.log(`Server is running at: http://localhost:${PORT}`));
