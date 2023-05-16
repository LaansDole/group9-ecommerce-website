const asyncHandler = require('express-async-handler');
const Order = require('../model/orderModel');

// const createOrder = asyncHandler(async (req, res) => {
//   const { hubName } = req.body;
//   const products = [];

//   for (let i = 0; i < 4; i++) {
//     if (req.body[`products_${i}`]) {
//       products.push({
//         product_Name: req.body[`product_${i}`],
//         product_Price: req.body[`product_Price_${i}`],
//         businessName: req.body[`product_businessName_${i}`]
//       });
//     }
//   }

//   const order = await Order.create({
//     products,
//     hubName
//   });

//   res.status(201).json({ success: true, order });
// });
const express = require('express');
const router = express.Router();
// const Order = require('../models/order');

const createOrder = ('/ordersubmit', async (req, res) => {
  try {
    const orderData = req.body;

    // Create a new order instance
    const order = new Order({
      products: orderData.products,
      customerName: orderData.customerName,
      customerAddress: orderData.customerAddress,
      orderStatus: 'active',
      hubName: orderData.hubDelivery,
    });

    // Save the order to the database
    await order.save();

    res.status(200).json({ message: 'Order submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit order' });
  }
});

// const submitOrder = async (req, res) => {
//   try {
//     const orderData = req.body;

//     // Create a new order instance
//     const order = new Order({
//       products: orderData.products,
//       customerName: orderData.customerName,
//       customerAddress: orderData.customerAddress,
//       orderStatus: 'active',
//       hubName: orderData.hubDelivery,
//     });

//     // Save the order to the database
//     await order.save();
    
//     res.status(200).json({ message: 'Order submitted successfully' });
    
//   } catch (error) {
    
//     res.status(500).json({ error: 'Failed to submit order' });
//     console.log(error)
//   }
// };

module.exports = { createOrder};
