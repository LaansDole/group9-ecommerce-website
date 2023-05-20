// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const { authMiddleware, checkVendorRole, checkCustomerRole, checkShipperRole } = require("../../middlewares/authMiddleware");

/**
 * App Routes 
*/
router.get('/', authMiddleware,checkCustomerRole,homeController.homepage);
router.get('/product/:id',  authMiddleware,checkCustomerRole,homeController.exploreProduct);
router.get('/categories',  authMiddleware,checkCustomerRole,homeController.exploreCategories);
router.get('/categories/:id',  authMiddleware,checkCustomerRole,homeController.exploreCategoriesById);
router.post('/search',  authMiddleware,checkCustomerRole,homeController.searchProduct);
router.get('/explore-latest', authMiddleware,checkCustomerRole, homeController.exploreLatest);
// router.get('/submit-product',  authMiddleware,checkCustomerRole,homeController.submitProduct);
// router.post('/submit-product',  authMiddleware,checkCustomerRole,homeController.submitProductOnPost);

module.exports = router;