const router = require('express').Router();
const controller = require('./orderController');
const middlewareToken = require('../../middleware');
module.exports = router;

router.post('/order', controller.createOrder);
router.get('/order', controller.getOrder);