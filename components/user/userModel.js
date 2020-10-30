const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: { type: String, default: 'test' },
    mail: {type: String, require: true},
    password: { type: String, require: true},
});

User = mongoose.model2('User', UserSchema);
const user = new User({});
module.exports = mongoose.model('User', UserSchema);

