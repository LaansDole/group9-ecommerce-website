const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt');
// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema(
    {
      // Common fields for all roles
      userName: {
        type: String,
        required: true,
        unique: true,
        
      },
      password: {
        type: String,
        required: true,
      },
      profilePicture: {
        data: Buffer,
        contentType: String,
       
      },
      
      role: {
        type: String,
        enum: ['vendor', 'customer', 'shipper'],
        required: true,
      },
  
      // Fields specific to vendors
      businessName: {
        type: String,
        required: function () {
          return this.role === 'vendor';
        },
        minlength: 5,
      },
      businessAddress: {
        type: String,
        required: function () {
          return this.role === 'vendor';
        },
        minlength: 5,
      },
  
      // Fields specific to customers
      name: {
        type: String,
        required: function () {
          return this.role === 'customer';
        },
        minlength: 5,
      },
      address: {
        type: String,
        required: function () {
          return this.role === 'customer';
        },
        minlength: 5,
      },
  
      // Fields specific to shippers
      hubName: {
        type: String,
        required: function () {
          return this.role === 'shipper';
        },
      },
      hubAddress: {
        type: String,
        required: function () {
          return this.role === 'shipper';
        },
      },
    },
    { timestamps: true }
  );
  
  // Create a compound index on businessName, businessAddress, and role for vendors
  userSchema.index(
    { businessName: 1, businessAddress: 1, role: 1 },
    { unique: true, partialFilterExpression: { role: 'vendor' } }
  );
  


//Hash Password
userSchema.pre('save',async function(next) {
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password,salt);

});

userSchema.methods.isPasswordMatched = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

//Export the model
module.exports = mongoose.model('User', userSchema);