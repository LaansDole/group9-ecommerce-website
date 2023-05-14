const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../../middlewares/authMiddleware');
const { checkShipperHub, orderDetailShipper, shipperDashboard, updateOrderStatus, shipperOrderComplete, updateOrderStatusCancel } = require('../controllers/shipperCtrl');
const Order = require('../model/orderModel');
const Product = require('../model/Product')
// Route to show the order detail
router.get('/:orderId', authMiddleware,checkShipperHub, orderDetailShipper);
router.get('/',authMiddleware,checkShipperHub, shipperDashboard);
router.post('/:orderId/delivered',authMiddleware,checkShipperHub, updateOrderStatus);
router.get('/completeOrder',authMiddleware,checkShipperHub, shipperOrderComplete)
router.post('/:orderId/cancel',authMiddleware,checkShipperHub, updateOrderStatusCancel);
router.get('/ordercreate',authMiddleware,checkShipperHub, async (req, res) => {
    try {
      const products = await Product.find();
      console.log(products)
      res.render('orderCreate', { products });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });


module.exports = router;
