const Product = require("../model/Product");
const asyncHandler = require("express-async-handler");
//slugify to cut space between words
const slugify = require("slugify");
//call asyncHandler is middleware to resolve all errors inside path between Product and vendorController
//create new product in 'create product'
const User = require("../model/userModel");


const vendor = async (req, res) => {
  res.render("index")
};

// const viewProduct = async (req, res) => {
//   Product.find({})
//     .then((products) => res.render('view-product', { products }))
//     .catch(error => res.send(error))
// };
const viewProduct = asyncHandler(async (req, res, next) => {
  try {
    const v_id = req.user._id;
    const products = await Product.find({ v_id: v_id });
    res.render('view-product', {products})
    
  } catch (err) {
    console.log(err);
    next(err);
  }
});


const createProduct = async (req, res) => {
  const infoErrorsObj = req.flash('infoErrors');
  const infoSubmitObj = req.flash('infoSubmit');
  res.render('submit-product', { title: 'E-Commerce - Submit Product', infoErrorsObj, infoSubmitObj, layout: './layouts/homeLayout' });
};

const createProductpost = async (req, res) => {
  try {

    let imageUploadFile;
    let uploadPath;
    let newImageName;

    if (!req.files || Object.keys(req.files).length === 0) {
      console.log('No Files where uploaded.');
    } else {

      imageUploadFile = req.files.image;
      newImageName = Date.now() + imageUploadFile.name;

      uploadPath = require('path').resolve('./') + '/public/uploads/' + newImageName;

      imageUploadFile.mv(uploadPath, function (err) {
        if (err) return res.satus(500).send(err);
      })

    }

    const newProduct = new Product({
      v_id: req.user._id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      productNotes: req.body.productNotes,
      category: req.body.category,
      image: newImageName
    });

    await newProduct.save();

    req.flash('infoSubmit', 'Product has been added.')
    res.redirect('/vendor/submit-product');
  } catch (error) {
    // res.json(error);
    req.flash('infoErrors', error)
    res.redirect('/vendor/submit-product');
  }
}


const deleteProductform = async (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (!product) {
        return res.send('Not found any product matching the ID!');
      }
      res.render('delete-product', { product });
    })
    .catch(error => res.send(error));
};

const deleteproductbyID = async (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(product => {
      if (!product) {
        return res.send('Not found any product matching the ID!');
      }
      res.redirect('/vendor/products');
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

const updateproduct = (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'price', 'description', 'category'];
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
      res.redirect('/vendor/products');
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

module.exports = { vendor, createProduct, createProductpost, deleteProductform, deleteproductbyID, updateProductform, updateproduct, viewProduct }