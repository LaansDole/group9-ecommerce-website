// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{ expiresIn: "1d"});
};

module.exports = {generateToken};