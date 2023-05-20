// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  v_id: {
    type: String,
    require: true,
    unique: true
  },
  name: {
    type: String,
    required: 'This field is required.'
  },
  description: {
    type: String,
    required: 'This field is required.'
  },
  price: {
    type: Number,
    required: 'This field is required.'
  },
  productNotes: {
    type: Array,
    required: 'This field is required.'
  },
  category: {
    type: String,
    enum: ['Tablet', 'Laptop', 'Phone', 'Sound', 'Keyboard'],
    required: 'This field is required.'
  },
  image: {
    type: String,
    required: 'This field is required.'
  },
});

productSchema.index({ name: 'text', description: 'text' });
// WildCard Indexing
//productSchema.index({ "$**" : 'text' });

module.exports = mongoose.model('Product', productSchema);