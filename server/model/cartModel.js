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