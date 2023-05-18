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
    res.render('view-product', { products, layout: './view-product' })

  } catch (err) {
    console.log(err);
    next(err);
  }
});


const createProduct = async (req, res) => {
  const infoErrorsObj = req.flash('infoErrors');
  const infoSubmitObj = req.flash('infoSubmit');
  res.render('submit-product', { title: 'E-Commerce - Submit Product', infoErrorsObj, infoSubmitObj, layout: './submit-product' });
};

const multer = require('multer');

// Set up multer storage and file filter
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

const fileFilter = function (req, file, cb) {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Only image files with extensions .jpeg or .png are allowed.'), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// Route handler for creating a product
const createProductpost = async (req, res) => {
  try {
    upload.single('image')(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred during file upload
        console.log(err);
        return res.status(400).json({ error: 'Error uploading file.' });
      } else if (err) {
        // An unknown error occurred during file upload
        console.log(err);
        return res.status(500).json({ error: 'Internal server error.' });
      }

      // File upload successful
      const { name, description, price, productNotes, category } = req.body;

      // Get the uploaded file name
      const imageName = req.file.filename;

      // Create a new product with the uploaded file name
      const newProduct = new Product({
        v_id: req.user._id,
        name: name,
        description: description,
        price: price,
        productNotes: productNotes,
        category: category,
        image: imageName
      });

      await newProduct.save();

      req.flash('infoSubmit', 'Product has been added.');
      res.redirect('/vendor/submit-product');
    });
  } catch (error) {
    req.flash('infoErrors', error);
    res.redirect('/vendor/submit-product');
  }
};



const deleteProductform = async (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (!product) {
        return res.send('Not found any product matching the ID!');
      }
      res.render('delete-product', { product, layout: './vendor-dashboard' });
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
      res.render('update-product', { product, layout: './vendor-dashboard' });
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