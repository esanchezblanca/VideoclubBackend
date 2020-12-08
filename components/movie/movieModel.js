const mongoose = require('mongoose');
const MovieSchema = new mongoose.Schema({
    title: { type: String, default: 'test' },
    image: { type: String, default: 'test' },
    plot: { type: String, default: 'test' },
    createdAt: { type: Date, default: function date() {
    return new Date();
}}
});

module.exports = mongoose.model('Movie', MovieSchema);

