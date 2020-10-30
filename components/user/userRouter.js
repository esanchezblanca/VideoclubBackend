const router = require('express').Router();
const controller = require('./controller/userController');
router.get('/allUsers', controller.getUsers);
module.exports = router;


router.get('/users', controller.getUser);

router.post('/users/login', controller.login);

router.delete('/users/:id', controller.deleteUser);

//si quiero hacer un put tiene que ser solo para que algunos puedan modificar su perfil

