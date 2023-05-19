// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


const express = require('express');
const { authMiddleware, checkCustomerRole } = require('../../middlewares/authMiddleware');
const { createProduct, cartPage } = require('../controllers/cartController');
const router = express.Router();
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./localstorage');

router.post('/productcreate', authMiddleware, createProduct)
// router.get('/allProduct', getProducts)
router.get('/', authMiddleware, checkCustomerRole, cartPage);
// router.get('/cart', cartPage);

module.exports = router;