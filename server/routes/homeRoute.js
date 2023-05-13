const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

/**
 * App Routes 
*/
router.get('/', homeController.homepage);
router.get('/product/:id', homeController.exploreProduct);
router.get('/categories', homeController.exploreCategories);
router.get('/categories/:id', homeController.exploreCategoriesById);
router.post('/search', homeController.searchProduct);
router.get('/explore-latest', homeController.exploreLatest);
// router.get('/submit-product', homeController.submitProduct);
// router.post('/submit-product', homeController.submitProductOnPost);

module.exports = router;