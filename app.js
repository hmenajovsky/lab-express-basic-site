const express = require("express");
const app = express();
const PORT = 4000;
const hbs= require("hbs");

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get('/', (req, res) => {
    res.render("home", {
        css: ["home.css","template.css"],
    });
});

app.get('/about', (req, res) => {
    res.render("about", {
        css: ["about.css","template.css"],
    });
});

app.get('/works', (req, res) => {
    const movies = [
        {
            title: "Jaws",
            description:"Jaws is a 1975 American thriller film directed by Steven Spielberg, based on the 1974 novel by Peter Benchley.",
            year:"1975"
        },
        {
            title: "E.T.",
            description:"E.T. the Extra-Terrestrial is a 1982 American science fiction film produced and directed by Steven Spielberg, and written by Melissa Mathison. It tells the story of Elliott, a boy who befriends an extraterrestrial, dubbed E.T., who is stranded on Earth. ",
            year:"1982"
        },
        {
            title: "Schindler's list",
            description:"Schindler's List is a 1993 American historical drama film directed and produced by Steven Spielberg and written by Steven Zaillian. It is based on the 1982 non-fiction novel Schindler's Ark by Australian novelist Thomas Keneally.",
            year:"1993"
        }
    ];
    res.render("works", {
        css: ["works.css","template.css"],
        works: movies
    });
});

app.get('/gallery', (req, res) => {
        const photos = [
            {
                title:"Jaws",
                img:"https://upload.wikimedia.org/wikipedia/en/e/eb/JAWS_Movie_poster.jpg"
            },
            {
                title:"E.T.",
                img: "https://upload.wikimedia.org/wikipedia/en/6/66/E_t_the_extra_terrestrial_ver3.jpg"
            },
            {
                title:"Schindler'slist",
                img: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg"
            },
            {
                title:"Close Encounters of the Third Kind",
                img:"https://upload.wikimedia.org/wikipedia/en/b/ba/Close_Encounters_of_the_Third_Kind_%281977%29_theatrical_poster.jpg"
            },
            {
                title:"Always",
                img: "https://upload.wikimedia.org/wikipedia/en/6/6d/Alwaysfilmposter.jpg"
            },
            {
                title:"A.I. Artificial Intelligence",
                img: "https://upload.wikimedia.org/wikipedia/en/e/e6/AI_Poster.jpg"
            }
        ];
        res.render("gallery", {
        css: ["gallery.css","template.css"],
        gallery: photos
    });
});



app.listen(PORT, () => console.log(`Server is running at: http://localhost:${PORT}`));
