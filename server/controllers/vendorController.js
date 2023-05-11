const Product = require("../model/Product");
const asyncHandler = require("express-async-handler");
//slugify to cut space between words
const slugify = require("slugify");
const express = require("express");
//call asyncHandler is middleware to resolve all errors inside path between Product and vendorController
//create new product in 'create product'
const User = require("../model/userModel");


const vendor = async(req,res) => {
    res.render("index")
};

const viewProduct = async(req,res) => {
    Product.find({})
    .then((products) => res.render('view-product',{products}))
    .catch(error => res.send(error))
};

const createProduct = async(req,res) => {
    res.render("create-product")
};

const createProductpost = async(req,res) => {
    console.log(req.body);
    const newProduct = new Product(req.body);
    Product.v_id = User.businessName;
    newProduct.save()
      .then(() => {res.redirect('/products')})
      .catch(error => res.send(error))

};


const deleteProductform = async (req, res) => {
     Product.findById(req.params.id)
      .then(product => {
        if (!product) {
          return res.send('Not found any product matching the ID!');
        }
        res.render('delete-product',{product});
      })
      .catch(error => res.send(error));
  };

const deleteproductbyID = async (req, res) => {
    Product.findByIdAndDelete(req.params.id)
      .then(product => {
        if (!product) {
          return res.send('Not found any product matching the ID!');
        }
        res.redirect('/products');
      })
      .catch(error => res.send(error));
  };

const updateProductform = (req, res) => {
    Product.findById(req.params.id)
      .then(product => {
        if (!product) {
          return res.send('Not found any product matching the ID!');
        }
        res.render('update-product', { product });
      })
      .catch(error => res.send(error));
  };

const updateproduct =  (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'price', 'description', 'category'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
  
    if (!isValidOperation) {
      return res.send({ error: 'Invalid updates!' });
    }
  
    Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      })
      .then(product => {
        if (!product) {
          return res.send('Not found any product matching the ID!');
        }
        res.redirect('/products');
      })
      .catch(error => res.send(error));
  };

// create get a product 
// const getaProduct = asyncHandler(async(req,res)=> {
//     const {id} = req.params;
//     try {
//         const findProduct = await Product.findById(id);
//         res.json(findProduct);
//     } catch(error) {
//         throw new Error(error);
//     }
// });

// // create get all product
// const getallProduct = asyncHandler(async(req,res)=> {
//     try {
//         const allProduct = await Product.find();
//         res.json(allProduct);
//         if (allProduct.length === 0) {
//             res.status(404);
//             throw new Error("No products found");
//         }
//     } catch(error) {
//         throw new Error(error)
//     }
// });

module.exports = {vendor,createProduct,createProductpost,deleteProductform,deleteproductbyID,updateProductform,updateproduct,viewProduct}