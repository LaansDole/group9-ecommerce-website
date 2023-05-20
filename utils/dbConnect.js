// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


const mongoose = require('mongoose');

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URI);
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Database Error!!');
    }
};

module.exports = { dbConnect };

