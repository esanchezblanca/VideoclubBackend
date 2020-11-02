const movieModel = require('../movie/movieModel');
const Order = require('./orderModel');
const Movie = require('../movie/movieModel');
const User = require('../user/userModel');


module.exports.createOrder = async (req, res) => {
    //crea user
    const order = new Order(req.body);
    const movie = await Movie.exists({'_id': req.body.movieId});
    const user = await User.exists({'_id': req.body.userId});

    if (movie && user){
        await order.save();
    res.json({
        mensaje: 'Pedido creado',
    });
    } else {
        res.json({mensaje: "Pedido no creado. Revise usuario o película"})
    }

};

module.exports.getOrder = async (req, res) => {
    const data = await Order.find();
    res.json(data);
}