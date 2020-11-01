const router = require('express').Router();
const controller = require('./userController');
const middlewareToken = require("../../middleware");
module.exports = router;

router.get('/users',middlewareToken.tokenMiddle, controller.getUser);

router.post('/users/login', controller.login);

router.post('/users', controller.createUser);

router.put('/users',controller.updateUser);

router.delete('/users/:id',middlewareToken.tokenMiddle, controller.deleteUser);
//si quiero hacer un put tiene que ser solo para que algunos puedan modificar su perfil

