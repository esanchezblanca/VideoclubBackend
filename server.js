const express = require ('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT = 5000;

let movies = [
    
    {id: 1, title: 'Shrek'},
    {id: 2, title: 'El príncipe de Zamunda'},
    {id: 3, title: 'Con la muerte en los talones'},
    {id: 4, title: 'Titanic'},
    {id: 5, title: 'El Caballero Oscuro'},
    {id: 6, title: 'Mad Max: Fury Road'},
    {id: 7, title: 'Django desencadenado'},
    {id: 8, title: 'Solo en casa'},
    {id: 9, title: 'Casablanca'},
    {id: 10, title: 'The Host'},
    {id: 11, title: 'Donnie Darko'},
    {id: 12, title: 'IT'},
    {id: 13, title: 'Parásitos'},
    {id: 14, title: 'La tostadora valiente'},
    {id: 15, title: 'Una jaula de grillos'},
    {id: 16, title: 'El Padrino'},
    {id: 17, title: 'Forrest Gump'},
    {id: 18, title: 'La Vida es bella'},
    {id: 19, title: 'Intocable'},
    {id: 20, title: 'Cadena Perpetua'}
]  
app.get('/', (req, res) => res.send('EXPRESS'));

app.get('/movies', (req, res) =>{
    res.json(movies);
});

app.get('/movies/:id' , (req, res) => {
    const { id } = req.params;
    let movie = movies.find(movie => movie.id == id);
    res.json(movie);
});


app.post('/movies', (req, res) =>{
    const { id, title } = req.body;
    const movie = {id, title };
    movies.push(movie);
    res.json(movie);
});

app.put('/movies/:id', (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    let movieList = movies.filter(movie => movie.id != id);
    let movie = {id, title}
    movieList.push(movie);
    movies = movieList;
    res.json(movie);
});

app.delete('/movies/:id', (req, res) => {
    const {id} = req.params;
    let movieList = movies.filter(movie => movie.id != id);
    movies = movieList;
    res.json('Deleted');
});


app.listen(PORT, () => console.log('Server is working'))