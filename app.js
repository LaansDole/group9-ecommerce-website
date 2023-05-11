const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const {dbConnect} = require('./utils/dbConnect');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 9000;

const authRouter = require("./server/routes/authRoute");
const { errorHandler, notFound } = require('./middlewares/errorHandler.js');
const cookiesParser = require('cookie-parser');
const { authMiddleware, checkUserRole, authUser, checkCustomerRole } = require('./middlewares/authMiddleware.js');

// //Connect to MongoDB database, Dir: config/MongoDB.js
dbConnect();

const app = express();

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookiesParser());

app.use(cookieParser('eCommerceSecure'));
app.use(session({
  secret: 'eCommerceSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

app.set('layout', './layouts/login');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
  res.render()
})

const routes = require('./server/routes/homeRoute.js')
app.use('/main', routes);

// Handling non matching request from the client
app.use((req, res, next) => {
  res.status(404).render('./404.ejs')
})

// app.use([
//   (req, res, next) => {
//     res.status(404).render('./404.ejs');
//   },
//   (err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).render('./500.ejs');
//   }
// ]);

app.listen(port, () => console.log(`Listening to port http://localhost:${PORT}`));