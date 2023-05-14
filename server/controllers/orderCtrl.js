const asyncHandler = require('express-async-handler');
const Order = require('../model/orderModel');

const createOrder = asyncHandler(async (req, res) => {
  const { hubName } = req.body;
  const products = [];

  for (let i = 0; i < 4; i++) {
    if (req.body[`products_${i}`]) {
      products.push({
        product_Name: req.body[`product_${i}`],
        product_Price: req.body[`product_Price_${i}`],
        businessName: req.body[`product_businessName_${i}`]
      });
    }
  }

  const order = await Order.create({
    products,
    hubName
  });

  res.status(201).json({ success: true, order });
});

module.exports = { createOrder };
