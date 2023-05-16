const express = require('express');
const { authMiddleware, checkCustomerRole } = require('../../middlewares/authMiddleware');
const { createOrder, submitOrder } = require('../controllers/orderCtrl');
const confirmOrder = require('../model/confirmOrderModel');


const router = express.Router();

// submit order
router.post('/submit', checkCustomerRole, authMiddleware, async (req, res) => {
  try {
    const { products, customerName, customerAddress, hubDelivery } = req.body;
    const { name, address } = req.user;

    const totalPrice = Object.values(products).reduce((sum, product) => {
      return sum + product.price * product.quantity;
    }, 0);

    const order = new confirmOrder({
      user: req.user._id,
      products: Object.values(products),
      totalPrice,
      orderStatus: 'active',
      hubName: hubDelivery,
      customerName: customerName || name,
      customerAddress: customerAddress || address
    });

    await order.save();

    res.status(200).json({ message: 'Order submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit order' });
  }
});


// Get order history
router.get('/history', authMiddleware, checkCustomerRole, async (req, res) => {
  try {
    const { user } = req;
    const orderHistory = await confirmOrder.find({ user: user._id });

    res.render('customer-page/orderHistory', { orderHistory: orderHistory || [] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve order history' });
  }
});



module.exports = router;