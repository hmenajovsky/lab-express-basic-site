
require("./../../config/mongo");

const PhotoModel = require("./../../models/Photo");

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

(async function createPhotos() {
    try {
      const { deletedCount } = await PhotoModel.deleteMany(); // reset the collection
      console.log(`success : ${deletedCount} photos deleted from database !`);
      const res = await PhotoModel.insertMany(photos);
      console.log(`success : ${res.length} photos in database !`);
      process.exit;
    } catch (err) {
      console.log("ERROR !");
      console.error(err);
    }
  })();