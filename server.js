const express = require ('express');
const app = express();
const routesMovie = require('./components/movie/movieRouter.js');
const routesUser = require('./components/user/userRouter.js');



app.use(express.json());
app.use('/', routesMovie);
app.use('/', routesUser);

//rutas


const bodyParser = require('body-parser'); 
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/Videoclub', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=> console.log('Mongoose Connected'))
.catch( e => console.error('Error Mongoose Connection', e));


app.use( (req, res, next) => {
    console.log ("he recibido una petición");
    next();
});


const logger = (req, res, next) => {
    console.log("prueba")
    next();
};

const auth = (req, res, next) => {
    if(req.headers.auth !== TOKEN) res.json({error: 'Usuario no autorizado'})
    next;
};


//app.use(logger)
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

app.listen(5000, () => console.log('Server is working'));