// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


const express = require('express');
const multer = require('multer');
const { loginUserCtrl, getallUser, getaUser, deleteaUser, blockUser, unblockUser, createVendor, createCustomer, createShipper, handleRefreshToken, logout, vendor, success, shipper, customer, myProfile, updateProfilePicture, upload, updateProfile, profileUpdateFunction } = require('../controllers/authController');
const { authMiddleware, checkVendorRole, checkCustomerRole, checkShipperRole } = require("../../middlewares/authMiddleware");
const router = express.Router();
const userController = require('../controllers/userController');


// Post
// router.post('/register',createUser); //Register new account
router.post('/register-vendor', createVendor); //Register new account
router.post('/register-customer', createCustomer); //Register new account
router.post('/register-shipper', createShipper); //Register new account
// router.post('/updateProfilePicture', authMiddleware, upload, updateProfilePicture);

router.post('/login', loginUserCtrl); //Login account

// Get

router.get('/all-users', getallUser); //Get all user account exist

// router.get('/vendor1',authMiddleware,vendor1Page);
router.get('/refresh', handleRefreshToken);

router.get("/logout", logout);

router.get('testauth', authMiddleware);

// Delete
router.delete('/:id', deleteaUser); //delete user

// Put
// router.put('/edit-user', authMiddleware,updatedUser); //update data of user

// Login and Signup Route
router.get('/', userController.login);
router.get('/register-customer', userController.registerCustomer);
router.get('/register-vendor', userController.registerVendor);
router.get('/register-shipper', userController.registerShipper);

// User role Route
router.get('/home', authMiddleware, checkCustomerRole, userController.customer);
router.get('/vendor', authMiddleware, checkVendorRole, userController.vendor);
// router.get('/shipper', authMiddleware, checkShipperRole, userController.shipper);
router.get('/myProfile', authMiddleware, getaUser, userController.myProfile);
router.get('/myProfileUpdate', authMiddleware, profileUpdateFunction);
router.post('/updateProfile', authMiddleware, upload, updateProfile);
module.exports = router;
