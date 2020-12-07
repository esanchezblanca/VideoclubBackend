const router = require('express').Router();
const controller = require('./movieController');
const middlewareToken = require('../../middleware');
module.exports = router;

//RUTAS

router.get('/movies', controller.getMovie);

router.post('/movies', controller.createMovie);

router.put('/movies', controller.updateMovie);

router.delete('/movies/:id', controller.deleteMovie);