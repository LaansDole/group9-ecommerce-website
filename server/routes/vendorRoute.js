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


