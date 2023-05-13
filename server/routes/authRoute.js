const express = require('express');
const multer = require('multer');
const { loginUserCtrl, getallUser, getaUser, deleteaUser, blockUser, unblockUser, createVendor, createCustomer, createShipper, handleRefreshToken, logout, vendor, success, shipper, customer, myProfile, updateProfilePicture, upload } = require('../controllers/userController');
const { authMiddleware, checkVendorRole, checkCustomerRole, checkShipperRole } = require("../../middlewares/authMiddleware");
const router = express.Router();







// Post

// router.post('/register',createUser); //Register new account
router.post('/register-vendor', createVendor); //Register new account
router.post('/register-customer', createCustomer); //Register new account
router.post('/register-shipper', createShipper); //Register new account

router.post('/', loginUserCtrl); //Login account

//Get

router.get('/all-users', getallUser); //Get all user account exist

// router.get('/vendor1',authMiddleware,vendor1Page);
router.get('/refresh', handleRefreshToken);
router.get('/myProfile', authMiddleware, getaUser, myProfile);

router.get('/customer', authMiddleware, checkCustomerRole, customer);
router.get('/vendor', authMiddleware, checkVendorRole, vendor);
router.get('/shipper', authMiddleware, checkShipperRole, shipper);

router.get('/', logout);
router.get('/', login);

router.get('testauth', authMiddleware);

//Delete
router.delete('/:id', deleteaUser); //delete user

//Put
// router.put('/edit-user', authMiddleware,updatedUser); //update data of user
router.post('/updateProfilePicture', authMiddleware, upload, updateProfilePicture);






module.exports = router;
