// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


const mongoose = require('mongoose');
const validateMongoDbId = (id) => {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new Error("This id is not valid or not found");
};

module.exports = validateMongoDbId;