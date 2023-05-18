const express = require('express');
const { authMiddleware, checkCustomerRole } = require('../../middlewares/authMiddleware');
const { createOrder, submitOrder } = require('../controllers/orderCtrl');
const confirmOrder = require('../model/confirmOrderModel');


const router = express.Router();

// submit order
router.post('/submit', authMiddleware, checkCustomerRole, createOrder)


// Get order history
router.get('/history', authMiddleware, checkCustomerRole, submitOrder)



module.exports = router;