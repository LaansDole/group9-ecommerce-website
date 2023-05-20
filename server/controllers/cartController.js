// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


const User = require("../model/userModel");
const asyncHandler = require('express-async-handler');
const path = require('path');
const jwt = require('jsonwebtoken');

const Product = require('../model/test_product');

// const { LocalStorage } = require('node-localstorage');
// const localStorage = new LocalStorage('./scratch');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

const cart = JSON.parse(localStorage.getItem('cart')) || {};
const cartItemCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

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

const cartPage = asyncHandler(async (req, res) => {

  res.render('home-page/cart', { title: 'Your Cart', cartItemCount, user: req.user, layout: './layouts/homeLayout' });
});

module.exports = { createProduct, cartPage };



