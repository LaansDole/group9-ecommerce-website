const express = require('express');
const {dbConnect} = require('./utils/dbConnect');
const bodyParser = require("body-parser");
const authRouter = require("./server/routes/authRoute");
const { errorHandler, notFound } = require('./middlewares/errorHandler.js');
const cookiesParser = require('cookie-parser');
const { authMiddleware, checkUserRole, authUser, checkCustomerRole } = require('./middlewares/authMiddleware.js');

// //Connect to MongoDB database, Dir: config/MongoDB.js
dbConnect();
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI, { 
//   useNewUrlParser: true, 
//   useUnifiedTopology: true 
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log('Connected')
// });
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookiesParser());
//Check port running
// app.use('/', (req, res) => {
//     res.send("Hello from server side");
// });

//Connect authorize user
app.use("/api/user", authRouter);
app.use(express.static('public'));
app.get('/register-customer', (req, res) => {
    res.render('signup-customer');
});
app.get('/register-vendor', (req, res) => {
    res.render('vendor-signup');
});
app.get('/register-shipper', (req, res) => {
    res.render('shipper-signup');
});
app.get('/login', (req, res) => {
    res.render('login');
});



//Define the ejs file success and unsuccess
app.get('/success', (req, res) => {
    res.render('success');
});

app.get('/unsucess', (req, res) => {
    res.render('unsuccess');
});


// app.get("/register", (req,res) => {
//     return res.redirect(index.html);
// });
// app.get("/register", (req, res) => {
//     return res.sendFile(__dirname + "/public/index.html");
//   });
// app.get("/login", (req, res) => {
//     return res.sendFile(__dirname + "/public/login.html");
//   });
//Middleware
app.use(notFound);
app.use(errorHandler);


const express = require("express");
const dbconnection = require("./config/dbconnection.js");
const app = express();

const PORT = process.env.PORT || 3000;
const vendorRoute = require("./routes/vendorRoute.js");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {notFound, errorHandler} = require("./middlewares/errorHandlers.js");
const Product = require("./model/productModel.js");
const asyncHandler = require("express-async-handler");

dbconnection();
// morgan checking 'log'
app.use(morgan("dev"));
// app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.use(notFound);
// app.use(errorHandler);

app.set("view engine","ejs");



app.use("/",vendorRoute);
app.listen(PORT,() =>{
    console.log(`Server is listening on port http://localhost:${PORT}`)});





//Create and check port
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})