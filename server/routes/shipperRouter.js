const express = require('express');
const router = express.Router();
const { authMiddleware, checkShipperRole } = require('../../middlewares/authMiddleware');
const { checkShipperHub, orderDetailShipper, shipperDashboard, updateOrderStatus, shipperOrderComplete, updateOrderStatusCancel } = require('../controllers/shipperCtrl');
const Order = require('../model/orderModel');
const Product = require('../model/Product')
// Route to show the order detail
router.get('/:orderId', authMiddleware,checkShipperRole,checkShipperHub, orderDetailShipper);
router.get('/',authMiddleware,checkShipperRole,checkShipperHub, shipperDashboard);
router.post('/:orderId/delivered',authMiddleware,checkShipperRole,checkShipperHub, updateOrderStatus);
router.get('/completeOrder',authMiddleware,checkShipperRole,checkShipperHub, shipperOrderComplete)
router.post('/:orderId/cancel',authMiddleware,checkShipperRole,checkShipperHub, updateOrderStatusCancel);
router.get('/ordercreate',authMiddleware,checkShipperRole,checkShipperHub, async (req, res) => {
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
