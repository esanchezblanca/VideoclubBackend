const router = require('express').Router();
const controller = require('./movieController');
const middlewareToken = require('../../middleware');
module.exports = router;

//RUTAS

router.get('/movies', controller.getMovie);

router.post('/movies',middlewareToken.tokenMiddle, controller.createMovie);

router.put('/movies',middlewareToken.tokenMiddle, controller.updateMovie);

router.delete('/movies/:id',middlewareToken.tokenMiddle, controller.deleteMovie);