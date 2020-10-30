const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    title: { type: String, default: 'test' },
    createdAt: { type: Date, default: function date() {
    return new Date();
}}
});

Order = mongoose.model3('Order', OrderSchema);
const order = new Order({});

module.exports = mongoose.model('Order', OrderSchema);


