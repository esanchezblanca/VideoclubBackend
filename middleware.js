const config = require('./components/user/config');
const jwt = require('jsonwebtoken');
module.exports = {
    tokenMiddle: function (req, res, next) {
        const token = req.headers['access-token'];
        if (token) {
            jwt.verify(token, config.key, (err, decoded) => {
                if (err) {
                    return res.json({ mensaje: 'Token inválida' });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            res.send({
                mensaje: 'Token no proveída.'
            });
        }
    
    }
};