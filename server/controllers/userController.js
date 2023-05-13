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
        res.render('./login-signup-page/customer-signup.ejs', { title: "E-Commerce Login", layout: './layouts/loginLayout' });
    } catch (error) {
        res.satus(500).send({ message: error.message || "Error Occured" });
    }
}

