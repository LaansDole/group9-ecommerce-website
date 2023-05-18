require('../model/database');
const Category = require('../model/Category');
const Product = require('../model/Product');

const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

exports.login = async (req, res) => {
    try {
        res.render('./login-signup-page/login.ejs', {
            title: "E-Commerce Login",
            error: req.query.error === 'Invalid_username_or_password' ? ('Error: ' + `${req.query.error}`) : '',
            layout: './layouts/loginLayout'
        });
    } catch (error) {
        res.satus(500).send({ message: error.message || "Error Occured" });
    }
}

exports.registerCustomer = async (req, res) => {
    try {
        res.render('./login-signup-page/customer-signup.ejs', {
            title: "Customer Register",
            error: req.query.error === 'Username_already_exists' ? ('Error: ' + `${req.query.error}`) : '',
            layout: './layouts/loginLayout'
        });
    } catch (error) {
        res.satus(500).send({ message: error.message || "Error Occured" });
    }
}

exports.registerVendor = async (req, res) => {
    try {
        res.render('./login-signup-page/vendor-signup.ejs', {
            title: "Vendor Register",
            error: req.query.error === 'Username_already_exists' ? ('Error: ' + `${req.query.error}`) : '',
            layout: './layouts/loginLayout'
        });
    } catch (error) {
        res.satus(500).send({ message: error.message || "Error Occured" });
    }
}

exports.registerShipper = async (req, res) => {
    try {
        res.render('./login-signup-page/shipper-signup.ejs', {
            title: "Shipper Register",
            error: req.query.error === 'Username_already_exists' ? ('Error: ' + `${req.query.error}`) : '',
            layout: './layouts/loginLayout'
        });
    } catch (error) {
        res.satus(500).send({ message: error.message || "Error Occured" });
    }
}

// Roles-dashboard, delete below or re-render once done
exports.vendor = async (req, res, next) => {
    try {
        const link = req.originalUrl;

        const v_id = req.user._id;
        const products = await Product.find({ v_id: v_id });
        res.render('view-product', {
            title: 'Vendor Dashboard',
            link,
            userName: req.user.businessName,
            products,
            layout: './layouts/vendorLayout'
        })

    } catch (err) {
        console.log(err);
        next(err);
    }
};

// exports.shipper = async (req, res) => {
//     try {
//         res.render('shipper-page/shipper-dashboard.ejs', { user: req.user, layout: './shipper-page/shipper-dashboard' })

//     } catch (error) {
//         res.satus(500).send({ message: error.message || "Error Occured" });
//     }
// }

exports.customer = async (req, res) => {
    try {
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Product.find({}).limit(limitNumber);
        const tablet = await Product.find({ 'category': 'Tablet' }).limit(limitNumber);
        const laptop = await Product.find({ 'category': 'Laptop' }).limit(limitNumber);
        const phone = await Product.find({ 'category': 'Phone' }).limit(limitNumber);

        const productCategory = { latest, tablet, laptop, phone };

        const cart = JSON.parse(localStorage.getItem('cart')) || {};
        const cartItemCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

        res.render('home-page/index', { title: 'E-Commerce - Home', categories, productCategory, cartItemCount, layout: './layouts/homeLayout' });
    } catch (error) {
        res.satus(500).send({ message: error.message || "Error Occured" });
    }
}

exports.myProfile = (req, res) => {
    const userId = req.session.userId; // get user id from session or database
    res.render('layouts/myProfile', { userId: userId, layout: './layouts/myProfile' });

};

