const { vendor, createProduct, createProductpost, deleteProductform, viewProduct, updateProductform, updateproduct, deleteproductbyID } = require("../controllers/vendorController");
const express = require("express");
const route = express.Router();


//create path this route to vendorController
route.get("/", vendor);
route.get("/products", viewProduct);
route.get("/home/product/new", createProduct);
route.post("/home/product", createProductpost);
route.get("/home/product/:id/delete", deleteProductform);
route.post("/home/product/:id/delete", deleteproductbyID);
route.get("/home/product/:id/update", updateProductform);
route.post("/home/product/:id/update", updateproduct);
// route.get("/:id", getaProduct);
// route.get("/", getallProduct);
//put is 'update' in route

module.exports = route

// add newproduct into route.post


