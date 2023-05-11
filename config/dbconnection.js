const {default:mongoose} = require("mongoose");

const dbconnection = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected sucessfully");
    } catch (error) {
        console.log("Database error");
    }
};
module.exports = dbconnection;