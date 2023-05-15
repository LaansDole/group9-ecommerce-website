const express = require('express');
const { authMiddleware } = require('../../middlewares/authMiddleware');
const { createOrder } = require('../controllers/orderCtrl');



const router = express.Router();

router.get('/ordercreate', authMiddleware, async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products)
    res.render('orderCreate', { products });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});
router.post('/ordercreate', authMiddleware, createOrder) //Should update check customer

module.exports = router;