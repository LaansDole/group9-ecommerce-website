const express = require('express');
const { authMiddleware } = require('../../middlewares/authMiddleware');
const { createOrder } = require('../controllers/orderCtrl');



const router = express.Router();


/**
 * App Routes 
*/
// router.get('/', productController.homepage);
// router.get('/product/:id', productController.exploreProduct);
// router.get('/categories', productController.exploreCategories);
// router.get('/categories/:id', productController.exploreCategoriesById);
// router.post('/search', productController.searchProduct);
// router.get('/explore-latest', productController.exploreLatest);
// // router.get('/explore-random', productController.exploreRandom);
// router.get('/submit-product', productController.submitProduct);
// router.post('/submit-product', productController.submitProductOnPost);

router.get('/ordercreate',authMiddleware, async (req, res) => {
    try {
      const products = await Product.find();
      console.log(products)
      res.render('orderCreate', { products });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });
router.post('/ordercreate',authMiddleware, createOrder) //Should update check customer

module.exports = router;