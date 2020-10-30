const Movie = require('./movieModel');

/*module.exports.getMovie = async (req, res) =>{
    const query = {};
    if (req.query.title) query.title = req.query.title;
    if (req.query.duration) query.duration = req.query.duration;
    if (req.query.genero) query.genero = req.query.genero;
    const data = await Movie.find(query);
    res.json(data)
}; */


module.exports.getMovie = async (req, res) =>{
    //las trae por id
    const data = await Movie.find();
    res.json(data)//o movie
};

module.exports.createMovie = async (req, res) => {
    //crea películas
    const movie = new Movie(req.body);
    await movie.save();
    res.json(movie)
};

module.exports.updateMovie = async (req, res) => {
    //modificar película
    const movie = await Movie.findById(req.body._id);
    await movie.save();
    res.json(movie);

};

module.exports.deleteMovie = async (req, res) => {
    //borrar películas
    const {id} = req.params;
    let movieList = movies.filter(movie => movie.id != id);
    movies = movieList;
    res.json('Deleted');
};



