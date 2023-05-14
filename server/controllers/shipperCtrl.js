const User = require("../model/userModel");
const asyncHandler = require('express-async-handler');
const Order = require('../model/orderModel')
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
      const order = await Order.findById(orderId);
  
      if (!order) {
        res.status(404);
        throw new Error('Order not found');
      }
  
      return res.render('orderDetailShipper', { order });
    }
  
    return res.render('shipperDashboard', { orders: req.shipperOrders, hubName: req.hubName });
  });
  
  const orderDetailShipper = asyncHandler(async (req, res) => {
    const orderId = req.params.orderId;
  
    const order = await Order.findById(orderId);
  
    if (!order) {
      res.status(404);
      throw new Error('Order not found');
    }
  
    return res.render('orderDetailShipper', { order, user: req.user });
  });

  const shipperOrderComplete = asyncHandler(async (req, res) => {
    const orders = await Order.find({ orderStatus: 'delivered' }).lean();
  
    res.render('shipperOrderComplete', { orders });
  });
  

  
  const updateOrderStatus = asyncHandler(async (req, res) => {
    const order = await Order.findById(new mongoose.Types.ObjectId(req.params.orderId));

  
    if (!order) {
      res.status(404);
      throw new Error('Order not found');
    }
  
    order.orderStatus = 'delivered';
    await order.save();
  
    res.redirect('/shipperDashboard');
  });
  const updateOrderStatusCancel = asyncHandler(async (req, res) => {
    const order = await Order.findById(new mongoose.Types.ObjectId(req.params.orderId));

  
    if (!order) {
      res.status(404);
      throw new Error('Order not found');
    }
  
    order.orderStatus = 'cancel';
    await order.save();
  
    res.redirect('/shipperDashboard');
  });
  

  
module.exports = {checkShipperHub, shipperDashboard,orderDetailShipper, updateOrderStatus, shipperOrderComplete, updateOrderStatusCancel};