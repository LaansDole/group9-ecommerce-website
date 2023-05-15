const User = require("../model/userModel");
const asyncHandler = require('express-async-handler');
const path = require('path');
const jwt = require('jsonwebtoken');

const Product = require('../model/test_product');

// const { LocalStorage } = require('node-localstorage');
// const localStorage = new LocalStorage('./scratch');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');


const createProduct = asyncHandler(async (req, res, next) => {
    try {
        const { product_Name, product_Price, businessName } = req.body;
      const user = req.user;
      const newProduct = await Product.create({
        product_Name: product_Name,
        product_Price: product_Price,
        v_id: user._id,
        businessName: businessName,
      });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (err) {
      console.log(err)
      next(err);
    }
  });

  const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.render('shipper-page/allProduct', { products });
    } catch (err) {
        console.error('Error retrieving products:', err);
        res.status(500).send('Internal Server Error');
    }
};


const cartPage = asyncHandler(async(req, res) => {

  res.render('shipper-page/cart');
});

const addToCart = async (productId, userId) => {
  try {
    // Check if the product already exists in the user's cart
    const existingCartItem = await Cart.findOne({
      product: productId,
      user: userId
    });

    if (existingCartItem) {
      // If the product already exists in the cart, increment the quantity
      existingCartItem.quantity += 1;
      await existingCartItem.save();
    } else {
      // If the product doesn't exist in the cart, create a new cart item
      const newCartItem = new Cart({
        product: productId,
        user: userId,
        quantity: 1
      });
      await newCartItem.save();
    }

    console.log('Product added to cart successfully');
  } catch (err) {
    console.error(err);
  }
};


















  module.exports = { createProduct, getProducts, cartPage };
  
  

