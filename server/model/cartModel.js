// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  product_Name: {
    type: String,
    required: 'This field is required.'
  },
  product_Price: {
    type: Number,
    required: 'This field is required.'
  },
  quantity: {
    type: Number,
  }
});

module.exports = mongoose.model('cartProduct', cartSchema);