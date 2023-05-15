const express = require('express');
const { authMiddleware } = require('../../middlewares/authMiddleware');
const { createProduct, getProducts, cartPage, getCart, addToCart } = require('../controllers/productCtrl');
const router = express.Router();
const {LocalStorage} = require('node-localstorage');
const localStorage = new LocalStorage('./localstorage');


/**
 * App Routes 
*/
// router.get('/', productController.homepage);
// router.get('/product/:id', productController.exploreProduct);
// router.get('/categories', productController.exploreCategories);
// router.get('/categories/:id', productController.exploreCategoriesById);
// router.post('/search', productController.searchProduct);
// router.get('/explore-latest', productController.exploreLatest);
// // router.get('/explore-random', productController.exploreRandom);
// router.get('/submit-product', productController.submitProduct);
// router.post('/submit-product', productController.submitProductOnPost);


router.post('/productcreate',authMiddleware, createProduct)
router.get('/allProduct',getProducts)
router.get('/cart',cartPage);
// router.get('/cart', cartPage);

module.exports = router;