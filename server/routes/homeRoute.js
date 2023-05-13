const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const { authMiddleware, checkVendorRole, checkCustomerRole, checkShipperRole } = require("../../middlewares/authMiddleware");

/**
 * App Routes 
*/
router.get('/', authMiddleware, homeController.homepage);
router.get('/product/:id', authMiddleware, homeController.exploreProduct);
router.get('/categories', authMiddleware, homeController.exploreCategories);
router.get('/categories/:id', authMiddleware, homeController.exploreCategoriesById);
router.post('/search', authMiddleware, homeController.searchProduct);
router.get('/explore-latest', authMiddleware, homeController.exploreLatest);
// router.get('/submit-product', homeController.submitProduct);
// router.post('/submit-product', homeController.submitProductOnPost);

module.exports = router;