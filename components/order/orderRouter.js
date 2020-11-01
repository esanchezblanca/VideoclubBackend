const router = require('express').Router();
const controller = require('./orderController');
const middlewareToken = require('../../middleware');
module.exports = router;

router.post('/order',middlewareToken.tokenMiddle, controller.createOrder);
router.get('/order',middlewareToken.tokenMiddle, controller.getOrder);