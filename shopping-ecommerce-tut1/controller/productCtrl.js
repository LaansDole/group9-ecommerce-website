const Product = require("../model/productModel");
const asyncHandler = require("express-async-handler");
//slugify to cut space between words
const slugify = require("slugify");
const express = require("express");
//call asyncHandler is middleware to resolve all errors inside path between productModel and productCtrl
//create new product in 'create product' 


const newProduct = asyncHandler( async(req,res) => {
    try {
        const createProduct = await Product.create(req.body);
        res.json(createProduct);
    }
    catch (error) {
        throw new Error (error);
    }
})





// create get a product 
const getaProduct = asyncHandler(async(req,res)=> {
    const {id} = req.params;
    try {
        const findProduct = await Product.findById(id);
        res.json(findProduct);
    } catch(error) {
        throw new Error(error);
    }
})

// create get all product
const getallProduct = asyncHandler(async(req,res)=> {
    try {
        const allProduct = await Product.find();
        res.json(allProduct);
        if (allProduct.length === 0) {
            res.status(404);
            throw new Error("No products found");
        }
    } catch(error) {
        throw new Error(error)
    }
})


//create table in website in 'View my products'
// const getallProduct = asyncHandler(async (req, res) => {
//     try {
//       const allProduct = await Product.find();
//       if (allProduct.length === 0) {
//         res.status(404);
//         throw new Error("No products found");
//       }
  
//       // Create table header
//       const tableHeader = `
//         <thead>
//           <tr>
//             <th style ="border-right:1px solid black">Product Name</th>
//             <th style = "border-right: 1px solid black">Price</th>
//             <th>Description</th>
//           </tr>
//         </thead>
//       `;
  
//       // Create table rows
//       const tableRows = allProduct
//         .map(
//           (product) => `
//             <tr>
//               <td style = "border-right:1px solid black">${product.title}</td>
//               <td style = "border-right: 1px solid black">${product.price}</td>
//               <td>${product.description}</td>
//             </tr>
//           `
//         )
//         .join("");
  
//       // Create table
//       const table = `
//         <table style = "border: 1px solid black">
//           ${tableHeader}
//           <tbody>
//             ${tableRows}
//           </tbody>
//         </table>
//       `;
  
//       // Send table as response
//       res.send(table);
//     } catch (error) {
//       throw new Error(error);
//     }
//   });
  
  


const updateProduct = asyncHandler(async(req,res)=> {
    const {id} = req.params;
    try {
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {new:true});
        res.json(updateProduct);
    } catch(error) {
        throw new Error(error);
    }
})

const deleteProduct = asyncHandler(async(req,res)=> {
    const {id} = req.params;
    try {
        const deleteProduct = await Product.findByIdAndDelete(id);
        res.json(deleteProduct);
        }
    catch(error) {
        throw new Error(error);
    }
})


// const createProductonGet = (async(req,res)=> {
//   res.render("form")
// })

// const createProduct = asyncHandler(async(req,res)=> {

//   const {title, slug, price, description} = req.body;
//   const findProduct = await Product.findOne({title: title});
  
//   if (!findProduct) {

//     const newProduct = await Product.create ( {
//       title: title,
//       slug: slug,
//       price: price,
//       description: description,
//     })
//   res.json(newProduct)
//   } else {
//     throw new Error('User already exists')
//   }
// });

module.exports = { newProduct,getaProduct,getallProduct, updateProduct, deleteProduct}