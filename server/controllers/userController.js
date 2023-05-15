require('../model/database');
const Category = require('../model/Category');
const Product = require('../model/Product');

exports.login = async (req, res) => {
    try {
        res.render('./login-signup-page/login.ejs', { title: "E-Commerce Login", layout: './layouts/loginLayout' });
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
exports.vendor = (req, res) => {
    res.render('vendor-private.ejs', { user: req.user });

};

exports.shipper = async (req, res) => {
    try {
        res.render('shipper-page/shipper-dashboard.ejs', { user: req.user, layout: './shipper-page/shipper-dashboard' })

    } catch (error) {
        res.satus(500).send({ message: error.message || "Error Occured" });
    }
}

exports.customer = async (req, res) => {
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

exports.myProfile = (req, res) => {
    const userId = req.session.userId; // get user id from session or database
    res.render('myProfile', { userId: userId });

};

