const Order = require('.(order/orderModel');

module.exports.createOrder = async (req, res) =>{
    const data = await Order.find({});
    res.json(order);
}