require("./../../config/mongo");

const MovieModel = require("./../../models/Movie");

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

(async function createMovies() {
    try {
      const { deletedCount } = await MovieModel.deleteMany(); // reset the collection
      console.log(`success : ${deletedCount} movies deleted from database !`);
      const res = await MovieModel.insertMany(movies);
      console.log(`success : ${res.length} movies in database !`);
      process.exit;
    } catch (err) {
      console.log("ERROR !");
      console.error(err);
    }
  })();
  