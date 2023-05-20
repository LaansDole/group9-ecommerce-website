// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


const { createProduct, createProductpost, deleteProductform, viewProduct, updateProductform, updateproduct, deleteproductbyID } = require("../controllers/vendorController");
const express = require("express");
const { authMiddleware, checkVendorRole } = require("../../middlewares/authMiddleware");
const route = express.Router();


//create path this route to vendorController
route.get("/", authMiddleware, checkVendorRole, viewProduct);
route.get("/submit-product", authMiddleware, checkVendorRole, createProduct);
route.post("/submit-product", authMiddleware, checkVendorRole, createProductpost);
route.get("/:id/delete", authMiddleware, checkVendorRole, deleteProductform);
route.post("/:id/delete", authMiddleware, checkVendorRole, deleteproductbyID);
route.get("/:id/update", authMiddleware, checkVendorRole, updateProductform);
route.post("/:id/update", authMiddleware, checkVendorRole, updateproduct);
// route.get("/:id", getaProduct);
// route.get("/", getallProduct);
//put is 'update' in route

module.exports = route

// add newproduct into route.post


