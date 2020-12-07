const Movie = require('./movieModel');


module.exports.getMovie = async (req, res) =>{
    //las trae por id
    const data = await Movie.find();
    res.json(data)
};

module.exports.createMovie = async (req, res) => {
    //crea películas
    const movie = new Movie(req.body);
    await movie.save();
    res.json(movie)
};

module.exports.updateMovie = async (req, res) => {
    //modificar película
    const movie = await Movie.findById(req.body.id);
    movie.title = req.body.title;
    movie.image = req.body.image;
    await movie.save();
    res.json(movie);

};

module.exports.deleteMovie = async (req, res) => {
    //borrar películas
    const {id} = req.params;
    const movie = await Movie.findById(id);
    await Movie.deleteOne(movie);
    res.json('Deleted');
};



