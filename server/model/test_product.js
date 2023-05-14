const mongoose = require('mongoose');

const test_productSchema = new mongoose.Schema({
    product_Name: {
      type: String,
      required: true
    },
    product_Price: {
      type: Number,
      required: true
    },
    v_id: {
      type: String,
      required: true
    },
    businessName: {
        type:String,
        required: true
    }
  });
  

module.exports = mongoose.model('test_product', test_productSchema);
