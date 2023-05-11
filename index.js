const express = require("express");
const app = express();

const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const authRouter = require("./server/routes/authRoute.js");
const cookiesParser = require('cookie-parser');

const PORT = process.env.PORT || 3000;
const vendorRoute = require("./server/routes/vendorRoute.js");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const asyncHandler = require("express-async-handler");
// Middleware
const { authMiddleware, checkUserRole, authUser, checkCustomerRole } = require('./middlewares/authMiddleware.js');

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookiesParser('eCommerceSecure'));

app.use(session({
    secret: 'eCommerceSecretSession',
    saveUninitialized: true,
    resave: true
  }));
  app.use(flash());
  app.use(fileUpload({ useTempFiles: true, tempFileDir: "./tmp/holder.txt" }));

//Connect authorize user
app.use("/api/user", authRouter);
app.get('/register-customer', (req, res) => {
    res.render('signup-customer.ejs');
});
app.get('/register-vendor', (req, res) => {
    res.render('vendor-signup.ejs');
});
app.get('/register-shipper', (req, res) => {
    res.render('shipper-signup.ejs');
});
app.get('/login', (req, res) => {
    res.render('login.ejs');
});

//Define the ejs file success and unsuccess
app.get('/success', (req, res) => {
    res.render('success.ejs');
});

app.get('/unsucess', (req, res) => {
    res.render('unsuccess.ejs');
});


// morgan checking 'log'
app.use(morgan("dev"));
// app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.use(notFound);
// app.use(errorHandler);
app.set('layout', './layouts/main');

const homeRoute = require('./server/routes/homeRoute.js')
app.use('/', homeRoute);

// Handling non matching request from the client
app.use((req, res, next) => {
    res.status(404).render('./404.ejs')
})

const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(PORT,() =>{
    console.log(`Server is listening on port http://localhost:${PORT}`)});
