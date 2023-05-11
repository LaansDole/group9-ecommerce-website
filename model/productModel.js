const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique: true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category: {
        type: String,
        require:true,
        enum: ['electrics','beauty products','toys']
    }
    // quantity: {
    //     type: Number,
    //     require: true,
    // },
    // category : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Category"
    // },
    // brand: {
    //     type: String,
    //     enum: ["Apple","Samsung","Lenovo"]
    // },
    // sold: {
    //    type: Number,
    //    default: 0
    // },
    // images : {
    //     type: Array,
    // },
    // image: {
    //     data: Buffer,
    //     contentType: String
    // },

    // color:  {
    //     type: String,
    //     enum: ["Black","Brown","Orange"]
    // },
    // rating: {
    //     star: Number
    // }
    }, 
    {
        timestamps:true
    }
);

//Export the model
module.exports = mongoose.model('Product', productSchema);