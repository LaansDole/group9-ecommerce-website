const {vendor,createProduct,createProductpost, deleteProductform,viewProduct, updateProductform, updateproduct, deleteproductbyID} = require("../controller/productCtrl");
const express = require("express");
const route = express.Router();


//create path this route to productCtrl
route.get("/vendorpage",vendor);
route.get("/products",viewProduct);
route.get("/product/new",createProduct);
route.post("/product",createProductpost);
route.get("/product/:id/delete",deleteProductform);
route.post("/product/:id/delete",deleteproductbyID);
route.get("/product/:id/update", updateProductform);
route.post("/product/:id/update", updateproduct);
// route.get("/:id", getaProduct);
// route.get("/", getallProduct);
//put is 'update' in route

module.exports = route

// add newproduct into route.post


