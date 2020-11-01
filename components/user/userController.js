const User = require('./userModel');
const jwt = require('jsonwebtoken');
const config = require ('./config');

//POST USER
module.exports.login = async (req, res) => {
   let user = User.find(req.body.mail)
   let password = User.find(req.body.password)
    if ( user && password) {
        const payload = {
            check: true
        };
        const token = jwt.sign(payload, config.key, {
            expiresIn: 1440
        });
        res.json({
            mensaje: 'Autenticación correcta',
            token: token
        });
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos" })
    }
};

//GET USER
module.exports.getUser = async (req, res) => {
    const data = await User.find();
    res.json(data);
};

module.exports.updateUser = async (req, res) => {
    //modificar usuario
    const user = await User.findById(req.body.id);
    user.name = req.body.name;
    await user.save();
    res.json(user);

};

//CREATE USER
module.exports.createUser = async (req, res) => {
    //crea user
    const user = new User(req.body);
    await user.save();
    res.json(user);
};

//DELETE USER
module.exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    await User.deleteOne(user);
    res.json('User deleted');
};
