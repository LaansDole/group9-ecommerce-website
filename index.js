// <!-- // RMIT University Vietnam
// // Course: COSC2430 Web Programming
// // Semester: 2023A
// // Assessment: Assignment 2
// // Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// // ID: s3963207,s3957034,s3970375,s3891925,s3927427
// // Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs -->


const express = require("express");
const app = express();

const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');

const cookiesParser = require('cookie-parser');

const PORT = process.env.PORT || 3000;
const path = require('path');

const bodyParser = require("body-parser");
const morgan = require("morgan");
const asyncHandler = require("express-async-handler");
// Middleware
const { authMiddleware, checkUserRole, authUser, checkCustomerRole } = require('./middlewares/authMiddleware.js');

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookiesParser('eCommerceSecure'));

app.use(session({
    secret: 'eCommerceSecretSession',
    saveUninitialized: true,
    resave: true
}));
app.use(flash());

// morgan checking 'log'
app.use(morgan("dev"));
// app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS and use express-ejs-layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Set the path to the layouts directory
app.set('views', path.join(__dirname, 'views'));

// Set the routes for the login/signup page
const authUserRoute = require("./server/routes/authUserRoute.js");
app.use('/', authUserRoute);

// Set the routes for the homepage
app.set('layout', './layouts/homeLayout');
const homeRoute = require('./server/routes/homeRoute.js');
app.use('/home', homeRoute);

// Set the layout for the vendor dashboard
// app.set('layout', './layouts/vendorLayout');

// Set the routes for the vendor dashboard
const vendorRoute = require("./server/routes/vendorRoute.js");
app.use('/vendor', vendorRoute);

// Set the layout for the shipper dashboard
const shipperRouter = require("./server/routes/shipperRouter")
app.use("/shipper", shipperRouter);

// Set the routes for the shipper dashboard
// Set the route for orderRouter
const orderRouter = require("./server/routes/orderRouter")
app.use("/order", orderRouter);

// Product router

const cartRoute = require("./server/routes/cartRoute")
app.use("/home/your-cart", cartRoute);

// Handling non matching request from the client

const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.use((req, res, next) => {
    res.status(404).render('404.ejs', { error: '404 ERROR', layout: './404.ejs' })
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).render('404.ejs', { error: '500 ERROR', layout: './404.ejs' });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`)
});
