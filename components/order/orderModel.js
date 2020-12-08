const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    mail: { type: String, default: 'test' },
    movieId: {type: String, default: 'test'},
    createdAt: { type: Date, default: function date() {
        return new Date();
    }},
    returnDate: {type: Date, default: function date() {
        let result = new Date();
        result.setDate(result.getDate() + 3);
        return result;

    }}
});

module.exports = mongoose.model('Order', OrderSchema);

