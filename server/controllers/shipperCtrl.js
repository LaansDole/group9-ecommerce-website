const User = require("../model/userModel");
const asyncHandler = require('express-async-handler');
const Order = require('../model/confirmOrderModel')
const jwt = require('jsonwebtoken');


const { default: mongoose } = require("mongoose");

const checkShipperHub = asyncHandler(async (req, res, next) => {

  const hubName = req.user.hubName;
  console.log(hubName);

  const orders = await Order.find({ hubName, orderStatus: 'active' });

  req.shipperOrders = orders;
  req.hubName = hubName;

  next();
});

const shipperDashboard = asyncHandler(async (req, res) => {
  const { orderId } = req.query;
  
  if (orderId) {
    try {
      const order = await Order.findById(orderId);

      if (!order) {
        res.status(404);
        throw new Error('Order not found');
      }

      return res.render('shipper-page/shipper-dashboard', { order, layout: './shipper-page/shipper-dashboard' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    try {
      const shipperOrders = await Order.find({ hubName: req.hubName });

      return res.render('shipper-page/shipper-dashboard', { shipperOrders, userName: req.user.name,hubName: req.hubName, layout: './shipper-page/shipper-dashboard' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
});


const orderDetailShipper = asyncHandler(async (req, res) => {
  const orderId = req.params.orderId;

  const order = await Order.findById(orderId);

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  const { _id, user, products, totalPrice, orderStatus, hubName, customerName, customerAddress } = order;

  return res.render('shipper-page/orderDetailShipper', {
    orderId: _id,
    user,
    products,
    totalPrice,
    orderStatus,
    customerName,
    customerAddress
  });
});


const shipperOrderComplete = asyncHandler(async (req, res) => {
  const orders = await Order.find({ orderStatus: 'delivered' }).lean();

  res.render('shipper-page/shipperOrder', { orders });
});



const updateOrderStatus = asyncHandler(async (req, res) => {
  const order = await Order.findById(new mongoose.Types.ObjectId(req.params.orderId));


  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  order.orderStatus = 'delivered';
  await order.save();

  res.redirect('/shipper');
});
const updateOrderStatusCancel = asyncHandler(async (req, res) => {
  const order = await Order.findById(new mongoose.Types.ObjectId(req.params.orderId));


  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  order.orderStatus = 'cancel';
  await order.save();

  res.redirect('/shipper');
});



module.exports = { checkShipperHub, shipperDashboard, orderDetailShipper, updateOrderStatus, shipperOrderComplete, updateOrderStatusCancel };



