const express = require("express");
const dbconnection = require("./config/dbconnection.js");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;
const productRoute = require("./routes/productRoute.js");
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
app.get("/addproduct",(req,res)=> {
    res.render("form")
})

// app.post("/submit",(req,res)=> {
//     console.log(req.body);
//     res.send("Submit form successfully")
// })

app.post(('/submitform'),  async(req, res) => {
        const {name, price, description,categories} = req.body;
        const findProduct = await Product.findOne({name: name});
        
        if (!findProduct) {
      
          const newProduct = await Product.create ( {
            name: name,
            price: price,
            description: description,
            categories: categories
          })
        res.json(newProduct)
        } else {
          throw new Error('User already exists')
        }
      });
  


app.use("/",productRoute);
app.listen(PORT,() =>{
    console.log(`Server is listening on port http://localhost:${PORT}`)});






