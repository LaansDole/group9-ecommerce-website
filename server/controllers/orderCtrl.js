// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


const asyncHandler = require('express-async-handler');
const confirmOrder = require('../model/confirmOrderModel');


const express = require('express');
const router = express.Router();


const createOrder = async (req, res) => {
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
};

const submitOrder = async (req, res) => {
  try {
    const { user } = req;
    const orderHistory = await confirmOrder.find({ user: user._id });

    const LocalStorage = require('node-localstorage').LocalStorage;
    const localStorage = new LocalStorage('./scratch');

    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const cartItemCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);


    res.render('home-page/orderHistory', { orderHistory: orderHistory || [], cartItemCount });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve order history' });
  }
};

module.exports = { createOrder, submitOrder };
