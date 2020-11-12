const express = require ('express');
const app = express();
const routesMovie = require('./components/movie/movieRouter.js');
const routesUser = require('./components/user/userRouter.js');
const routesOrder = require('./components/order/orderRouter.js');


const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/Videoclub';


app.use(express.json());
app.use('/', routesMovie);
app.use('/', routesUser);
app.use('/', routesOrder);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




mongoose.connect(MONGO_URI, {
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




app.listen(5000, () => console.log('Server is working'));