const User = require("../model/userModel");
require('../model/database');

exports.login = async (req, res) => {
    try {
        res.render('./login-signup-page/login.ejs', { title: "E-Commerce Login", layout: './layouts/loginLayout' });
    } catch (error) {
        res.satus(500).send({ message: error.message || "Error Occured" });
    }
}

exports.registerCustomer = async (req, res) => {
    try {
        res.render('./login-signup-page/customer-signup.ejs', { title: "Customer Register", layout: './layouts/loginLayout' });
    } catch (error) {
        res.satus(500).send({ message: error.message || "Error Occured" });
    }
}

exports.registerVendor = async (req, res) => {
    try {
        res.render('./login-signup-page/vendor-signup.ejs', { title: "Vendor Register", layout: './layouts/loginLayout' });
    } catch (error) {
        res.satus(500).send({ message: error.message || "Error Occured" });
    }
}

exports.registerShipper = async (req, res) => {
    try {
        res.render('./login-signup-page/shipper-signup.ejs', { title: "Shipper Register", layout: './layouts/loginLayout' });
    } catch (error) {
        res.satus(500).send({ message: error.message || "Error Occured" });
    }
}

