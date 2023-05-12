const { vendor, createProduct, createProductpost, deleteProductform, viewProduct, updateProductform, updateproduct, deleteproductbyID } = require("../controllers/vendorController");
const express = require("express");
const route = express.Router();


//create path this route to vendorController
route.get("/vendor", vendor);
route.get("/vendor/products", viewProduct);
route.get("/vendor/product/new", createProduct);
route.post("/vendor/product", createProductpost);
route.get("/vendor/product/:id/delete", deleteProductform);
route.post("/vendor/product/:id/delete", deleteproductbyID);
route.get("/vendor/product/:id/update", updateProductform);
route.post("/vendor/product/:id/update", updateproduct);
// route.get("/:id", getaProduct);
// route.get("/", getallProduct);
//put is 'update' in route

module.exports = route

// add newproduct into route.post


