const User = require('../server/model/userModel');
const jwt = require('jsonwebtoken');
const asyncHandler = require("express-async-handler");
const mongoose = require('mongoose');
const validateMongoDbId = require('../utils/validateMongodbId');



// const authMiddleware = asyncHandler(async (req, res, next) => {
//   let token;
//   if (req?.headers?.authorization?.startsWith('Bearer')) {
//       token = req.headers.authorization.split(' ')[1];
//       try {
//           if (token) {
//               const decoded = jwt.verify(token,process.env.JWT_SECRET);
//               const user = await User.findById(decoded?.id);
//               req.user = user;
//               next();
//           }
//       } catch (error) {
//           throw new Error("Not Authorized token expired, Please login again");
//       }
//   } else {
//       throw new Error("There is no token attached to the header");
//   }
// });




const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req.cookies && req.cookies.refreshToken) {
    token = req.cookies.refreshToken;
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        validateMongoDbId(decoded?.id); // Check if the ID is valid
        const user = await User.findById(decoded?.id);

        req.user = user;
        // console.log(user)
        next();
      }
    } catch (error) {
      throw new Error("Not Authorized token expired, Please login again");
    }
  } else {
    throw new Error("There is no token attached to the cookie");
  }
});









//Create Admin


const checkCustomerRole = asyncHandler(async (req, res, next) => {
  var role = req.user.role
  if (role === 'customer') {
    next();
  } else {
    res.render('404.ejs', { error: 'You are not a Customer', layout: './404.ejs' })
  };
});
const checkVendorRole = asyncHandler(async (req, res, next) => {
  var role = req.user.role
  if (role === 'vendor') {
    next();
  } else {
    res.render('404.ejs', { error: 'You are not a Vendor', layout: './404.ejs' })
  };
});
const checkShipperRole = asyncHandler(async (req, res, next) => {
  var role = req.user.role
  if (role === 'shipper') {
    next();
  } else {
    res.render('404.ejs', { error: 'You are not a Shipper', layout: './404.ejs' })
  };
});



module.exports = { authMiddleware, checkCustomerRole, checkShipperRole, checkVendorRole };
