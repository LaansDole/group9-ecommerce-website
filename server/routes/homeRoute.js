const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const { authMiddleware, checkVendorRole, checkCustomerRole, checkShipperRole } = require("../../middlewares/authMiddleware");

/**
 * App Routes 
*/
router.get('/', authMiddleware, checkCustomerRole, homeController.homepage);
router.get('/product/:id', authMiddleware, checkCustomerRole, homeController.exploreProduct);
router.get('/categories', authMiddleware, checkCustomerRole, homeController.exploreCategories);
router.get('/categories/:id', authMiddleware, checkCustomerRole, homeController.exploreCategoriesById);
router.post('/search', authMiddleware, checkCustomerRole, homeController.searchProduct);
router.get('/explore-latest', authMiddleware, checkCustomerRole, homeController.exploreLatest);
// router.get('/submit-product', homeController.submitProduct);
// router.post('/submit-product', homeController.submitProductOnPost);

module.exports = router;