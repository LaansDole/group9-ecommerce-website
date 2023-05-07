const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);

app.use(cookieParser('eCommerceSecure'));
app.use(session({
  secret: 'eCommerceSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/productRoutes.js')
app.use('/', routes);

// Handling non matching request from the client
app.use((req, res, next) => {
  res.status(404).render('./layouts/404.ejs')
})

app.listen(port, () => console.log(`Listening to port http://localhost:${port}`));