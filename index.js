const express = require("express");
const app = express();

const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
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

app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp/' }));

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

// Set the layout for the login/signup page
// app.set('layout', './layouts/loginSignupLayout');

// Set the routes for the login/signup page
const authRoute = require("./server/routes/authRoute.js");
// app.use('/', authRoute);

app.get('/', (req, res) => {
    res.render('./layouts/loginLayout');
});


// Set the layout for the homepage
app.set('layout', './layouts/homeLayout');

// Set the routes for the homepage
const homeRoute = require('./server/routes/homeRoute.js');
app.use('/home', homeRoute);

// Set the layout for the vendor dashboard
// app.set('layout', './layouts/vendorLayout');

// Set the routes for the vendor dashboard
const vendorRoute = require("./server/routes/vendorRoute.js");
app.use('/vendor-dashboard', vendorRoute);

// Set the layout for the shipper dashboard
// app.set('layout', './layouts/shipperLayout');

// Set the routes for the shipper dashboard


// Handling non matching request from the client
app.use((req, res, next) => {
    res.status(404).render('./404.ejs')
})

const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`)
});
