const Order = require('./orderModel');


module.exports.createOrder = async (req, res) => {
    //crea user
    const order = new Order(req.body);
    await order.save();
    res.json({
        mensaje: 'Pedido creado',
    });
};

module.exports.getOrder = async (req, res) => {
    const data = await Order.find();
    res.json(data);
}