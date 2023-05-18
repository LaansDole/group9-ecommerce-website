const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [{
    product_Name: {
      type: String,
      required: true
    },
    product_Price: {
      type: Number,
      required: true
    },
    businessName: {
      type: String,
      required: true
    }
  }],
  orderStatus: {
    type: String,
    enum: ['active', 'delivered', 'cancel'],
    default: 'active'
  },
  hubName: {
    type: String,
    enum: ['GHTK', 'viettel', 'ghn'],
    required: true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
