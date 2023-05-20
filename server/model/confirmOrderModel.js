// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


const mongoose = require('mongoose');
const confirmOrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',

  },
  products: [{
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  totalPrice: {
    type: Number,
    required: true
  },
  orderStatus: {
    type: String,
    enum: ['active', 'delivered', 'cancel'],
    default: 'active'
  },
  hubName: {
    type: String,
    enum: ['GHTK', 'viettel', 'ghn', 'aha-move'],
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  customerAddress: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('confirmOrder', confirmOrderSchema);
