const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * App Routes 
*/
router.get('/', productController.homepage);
router.get('/product/:id', productController.exploreProduct );
router.get('/categories', productController.exploreCategories);
router.get('/categories/:id', productController.exploreCategoriesById);
router.post('/search', productController.searchProduct);
router.get('/explore-latest', productController.exploreLatest);
router.get('/explore-random', productController.exploreRandom);
router.get('/submit-product', productController.submitProduct);
router.post('/submit-product', productController.submitProductOnPost);

 
module.exports = router;