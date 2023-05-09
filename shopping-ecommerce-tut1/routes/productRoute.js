const {newProduct,getaProduct, getallProduct, updateProduct, deleteProduct} = require("../controller/productCtrl");
const express = require("express");
const route = express.Router();


//create path this route to productCtrl
route.post("/", newProduct);
route.get("/:id", getaProduct);
route.get("/", getallProduct);
//put is 'update' in route
route.put("/:id", updateProduct);
route.delete("/:id", deleteProduct);
// route.get("/addproduct",createProductonGet)
// route.post("/submitform",createProduct);
// app.get("/form",submitProduct);



module.exports = route

// add newproduct into route.post


