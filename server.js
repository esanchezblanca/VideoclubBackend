const express = require ('express');
const bodyParser = require('body-parser'); 
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Movie = mongoose.model('Movie', new mongoose.Schema({
    id: {type: String},
    title: {type:String},
}));


mongoose.connect('mongodb://localhost:27017/Videoclub', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=> console.log('Mongoose Connected'))
.catch( e => console.error('Error Mongoose Connection', e));


const app = express();
app.use(bodyParser.json());
const PORT = 5000;

app.use( (req, res, next) => {
    console.log ("he recibido una petición");
    next();
});


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
app.get('/', (req, res) => res.send('Bienvenido al videoclub'));

const logger = (req, res, next) => {
    console.log("prueba")
    next();
};

const auth = (req, res, next) => {
    if(req.headers.auth !== TOKEN) res.json({error: 'Usuario no autorizado'})
    next;
};


//app.use(logger)

app.get('/movies', async (req, res) => {
    const { movie } = req.params;
    const movies = await Movie.find(); 
    res.json(movies);
});


app.post('/movies', async (req, res) =>{
    const {title} = req.body;
    const movie = new Movie({title});
    await movie.save();
    res.json(movie);
});

app.put('/movies', async (req, res) => {
    //traer modificar y guardar
    const movie = await Movie.findById(req.body._id);
    movie.titulo = fjjfd;
    await movie.save();
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

app.post('/users/login', async (req, res)=>{ //modificar perfil
    const {mail, password} = req.body;
    if(!mail || !password) return res.json({error:'faltan datos'})
    const usuario = new User(mail, password);
    await user.save();
});

app.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    let userList = users.filter(user => user.id != id);
    users = userList;
    res.json('User deleted');
});


//PEDIDOS

let arrPedidos = []; //creo array vacío para ir metiendo pedidos
let today = new Date(); //creo una variable con la fecha actual

class Order { //objeto para meter en array con sus valores
    constructor (userId, movieId, orderDate, returnDate) {
        this.userId = userId;
        this.movieId = movieId;
        this.orderDate = orderDate;
        this.returnDate = returnDate;
    }
}

app.post('/order', (req, res) =>{ //va a identificar dos id: peliculas y usuario
    const { userId, movieId} = req.body;
    let pedido = new Order(userId, movieId, today, today +3);
    arrPedidos.push(pedido);
    let pelicula = movies.find(movie => movie.id === movieId);

    let usuarioPedido = users.find(user => user.id == userId);

    usuarioPedido.movie = pelicula;
    res.send('Pedido creado');
});


app.post('/pedido', (req, res) => {

    const fechaEntrega = newDate();
    fechaEntrega.setDay(fechaEntrega.getDay() + 7); 
    
    const order = { 
        idPedido: getRandom(1, 1000),
        idUsuario: req.body.idUsuario,
        idPelicula: req.body.idPelicula,
        fechaPedido: newDate(),
        fechaEntrega,
    }
    orders.push(order)
    res.json(order);
});

app.listen(PORT, () => console.log('Server is working'))


//const fechaDevolucion = new Date();
//fechaDevolucion.setDate(fechaDevolucion.getDate() + 3);