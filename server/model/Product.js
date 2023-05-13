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