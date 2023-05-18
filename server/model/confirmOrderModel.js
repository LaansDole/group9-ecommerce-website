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
