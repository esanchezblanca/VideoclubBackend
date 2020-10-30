const router = require('express').Router();
const controller = require('./order/orderController');
router.get('/allOrders', controller.getOrders);
module.exports = router;



router.post('/order', controller.createOrder);