const express = require('express');
const { authMiddleware } = require('../../middlewares/authMiddleware');
const { createProduct, getProducts, cartPage, getCart, addToCart } = require('../controllers/cartController');
const router = express.Router();
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./localstorage');

router.post('/productcreate', authMiddleware, createProduct)
router.get('/allProduct', getProducts)
router.get('/', authMiddleware, cartPage);
// router.get('/cart', cartPage);

module.exports = router;