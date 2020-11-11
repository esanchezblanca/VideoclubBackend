const config = require('./components/user/config'); //La ruta la tienes que cambiar y si tienes que salirte de la carpeta usas ../
const jwt = require('jsonwebtoken');
module.exports = {
    tokenMiddle: function (req, res, next) {
        const token = req.headers['access-token'];
        if (token) { //si me das el token
            jwt.verify(token, config.key, (err, decoded) => {
                if (err) { // si me metes token que no vale
                    return res.json({ mensaje: 'Token inválida' });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else { //si no me metes token
            res.send({
                mensaje: 'Token no proveída.'
            });
        }
    
    }
};