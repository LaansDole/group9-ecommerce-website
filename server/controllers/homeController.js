require('../model/database');
const Category = require('../model/Category');
const Product = require('../model/Product');

/**
 * GET /
 * Homepage 
*/
exports.homepage = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await Product.find({}).limit(limitNumber);
    const tablet = await Product.find({ 'category': 'Tablet' }).limit(limitNumber);
    const laptop = await Product.find({ 'category': 'Laptop' }).limit(limitNumber);
    const phone = await Product.find({ 'category': 'Phone' }).limit(limitNumber);

    const productCategory = { latest, tablet, laptop, phone };

    res.render('home-page/index', { title: 'E-Commerce - Home', categories, productCategory, layout: './layouts/homeLayout' });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });
  }
}

/**
 * GET /home/categories
 * Categories 
*/
exports.exploreCategories = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    res.render('home-page/categories', { title: 'E-Commerce - Categoreis', categories, layout: './layouts/homeLayout' });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });

  }
}


/**
 * GET /home/categories/:id
 * Categories By Id
*/
exports.exploreCategoriesById = async (req, res) => {
  try {
    let categoryId = req.params.id;
    const limitNumber = 20;
    const categoryById = await Product.find({ 'category': categoryId }).limit(limitNumber);
    res.render('home-page/categories', { title: 'E-Commerce - Categoreis', categoryById, layout: './layouts/homeLayout' });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });

  }
}

/**
 * GET /product/:id
 * Product 
*/
exports.exploreProduct = async (req, res) => {
  try {
    let productId = req.params.id;
    const product = await Product.findById(productId);
    res.render('home-page/product', { title: 'E-Commerce - Product', product, layout: './layouts/homeLayout' });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });

  }
}


/**
 * POST /home/search
 * Search 
*/
exports.searchProduct = async (req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    let product = await Product.find({ $text: { $search: searchTerm, $diacriticSensitive: true } });
    res.render('home-page/search', { title: 'E-Commerce - Search', product, layout: './layouts/homeLayout' });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });

  }

}

/**
 * GET /home/explore-latest
 * Explplore Latest 
*/
exports.exploreLatest = async (req, res) => {
  try {
    const limitNumber = 20;
    const product = await Product.find({}).limit(limitNumber);
    res.render('home-page/explore-latest', { title: 'E-Commerce - Explore Latest', product, layout: './layouts/homeLayout' });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });

  }
}

// /**
//  * GET /home/submit-product
//  * Submit Product
// */
// exports.submitProduct = async (req, res) => {
//   const infoErrorsObj = req.flash('infoErrors');
//   const infoSubmitObj = req.flash('infoSubmit');
//   res.render('home-page/submit-product', { title: 'E-Commerce - Submit Product', infoErrorsObj, infoSubmitObj, layout: './layouts/homeLayout' });
// }

// /**
//  * POST /home/submit-product
//  * Submit Product
// */
// exports.submitProductOnPost = async (req, res) => {
//   try {

//     let imageUploadFile;
//     let uploadPath;
//     let newImageName;

//     if (!req.files || Object.keys(req.files).length === 0) {
//       console.log('No Files where uploaded.');
//     } else {

//       imageUploadFile = req.files.image;
//       newImageName = Date.now() + imageUploadFile.name;

//       uploadPath = require('path').resolve('./') + '/public/uploads/' + newImageName;

//       imageUploadFile.mv(uploadPath, function (err) {
//         if (err) return res.satus(500).send(err);
//       })

//     }

//     const newProduct = new Product({
//       name: req.body.name,
//       description: req.body.description,
//       price: req.body.price,
//       productNotes: req.body.productNotes,
//       category: req.body.category,
//       image: newImageName
//     });

//     await newProduct.save();

//     req.flash('infoSubmit', 'Product has been added.')
//     res.redirect('/submit-product');
//   } catch (error) {
//     // res.json(error);
//     req.flash('infoErrors', error);
//     res.redirect('/submit-product');
//   }
// }




// // Delete Product
// async function deleteProduct() {
//   try {
//     await Product.deleteOne({ name: 'New Product From Form' });
//   } catch (error) {
//     console.log(error);
//   }
// }
// deleteProduct();


// // Update Product
// async function updateProduct() {
//   try {
//     const res = await Product.updateOne({ name: 'New Product' }, { name: 'New Product Updated' });
//     res.n; // Number of documents matched
//     res.nModified; // Number of documents modified
//   } catch (error) {
//     console.log(error);
//   }
// }
// updateProduct();


/**
 * Dummy Data Example
*/

async function insertDymmyCategoryData() {
  try {
    await Category.insertMany([
      {
        "name": "Tablet",
        "image": ""
      },
      {
        "name": "Laptop",
        "image": ""
      },
      {
        "name": "Phone",
        "image": ""
      },
      {
        "name": "Sound",
        "image": ""
      },
      {
        "name": "Keyboard",
        "image": ""
      },
      {
        "name": "Screen",
        "image": ""
      }
    ]);
  } catch (error) {
    console.log('err', + error)
  }
}

insertDymmyCategoryData();


async function insertDymmyProductData() {
  try {
    await Product.insertMany([
      {
        "name": "Product Name Goes Here",
        "description": `Product Description Goes Here`,
        "price": 18,
        "productNotes": [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        "category": "Laptop",
        "image": ""
      },
      {
        "name": "Product Name Goes Here",
        "description": `Product Description Goes Here`,
        "price": 18,
        "productNotes": [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        "category": "Laptop",
        "image": ""
      },
    ]);
  } catch (error) {
    console.log('err', + error)
  }
}

insertDymmyProductData();

