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


//PARTE DE USUARIOS
let users = [];

class User {
    constructor (id, name, mail, password, movie) {
        this.id = id;
        this.name = name;
        this.mail = mail;
        this.password = password;
        this.movie = movie;
    }
}


app.get('/users', (req, res) =>{
    if (users.length == 0) {
        res.send('No existen usuarios');
    }else {
        console.log(users.size);
        res.json(users);
    }
});

app.post('/users', (req, res) =>{
    const { id, name, mail, password} = req.body;
    let usuario = new User(id, name, mail, password);
    users.push(usuario);
    res.send('Usuario creado');
});


app.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    let userList = users.filter(user => user.id != id);
    users = userList;
    res.json('User deleted');
});


app.post('/users/login', (req, res) => {
    const { mail, password } = req.body;
    let email = users.find(user => user.mail == mail);
    let contrasena = users.find(user => user.password == password);
    if (email == "" && contrasena == "") {
        res.send('No existe el usuario');
    }else {
        res.json('Este usuario existe');
    }
});


//PEDIDOS

let arrPedidos = [];
let today = new Date();

class Order {
    constructor (userId, movieId, orderDate, returnDate) {
        this.userId = userId;
        this.movieId = movieId;
        this.orderDate = orderDate;
        this.returnDate = returnDate;
    }
}

app.post('/order', (req, res) =>{
    const { userId, movieId} = req.body;
    let pedido = new Order(userId, movieId, today, today +3);
    arrPedidos.push(pedido);
    let pelicula = movies.find(movie => movie.id == movieId);

    let usuarioPedido = users.find(user => user.id == userId);

    usuarioPedido.movie = pelicula;
    res.send('Pedido creado');
});



app.listen(PORT, () => console.log('Server is working'))