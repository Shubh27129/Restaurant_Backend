
const express = require('express');

const ordersController = require('../controllers/orders');

const router = express.Router();


router.post('/add-orders', ordersController.addOrders )

router.get('/get-orders',ordersController.getOrders )

router.delete('/delete-orders/:id',ordersController.deleteOrders )


module.exports = router;