const movieModel = require('../movie/movieModel');
const Order = require('./orderModel');
const Movie = require('../movie/movieModel');
const User = require('../user/userModel');


module.exports.createOrder = async (req, res) => {

    const order = new Order(req.body);
    const movie = await Movie.exists({'_id': req.body.movieId});
    const user = await User.exists({'mail': req.body.mail});

    if (movie && user){
        console.log('entro if')
        await order.save();
    res.json({
        mensaje: 'Pedido creado',
        status: 200,
    });
    } else {
        console.log('entro else')
        res.json({
            mensaje: "Pedido no creado. Revise usuario o película",
            status: 403,
        })
    }

};

module.exports.getOrder = async (req, res) => {
    const data = await Order.findOne(req.body.mail);
    res.json({
        status: 200,
        rentData: data
    });
}