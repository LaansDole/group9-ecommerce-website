const User = require("../model/userModel");
const asyncHandler = require('express-async-handler');
const { generateToken } = require("../../utils/jwtToken");
const validateMongoDbId = require("../../utils/validateMongodbId");
const { generateRefreshToken } = require("../../utils/refreshtoken");
const jwt = require('jsonwebtoken');
const fs = require('fs');
const multer = require("multer");

require('../model/database');
const Category = require('../model/Category');
const Product = require('../model/Product');


const path = require('path');

// Set up storage for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '/uploads'));

  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Set up upload middleware using Multer
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files with extensions .jpeg, .jpg, or .png are allowed.'));
    }
  }
}).single('profilePicture');

const createVendor = asyncHandler(async (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { businessName, userName, businessAddress, password } = req.body;

    const usernameRegex = /^[a-zA-Z0-9]{8,15}$/;
    if (!usernameRegex.test(userName)) {
      return res.status(400).json({ error: 'Username must contain only letters and digits, have a length from 8 to 15 characters.' });
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ error: 'Password must contain at least one upper case letter, at least one lower case letter, at least one digit, at least one special character in the set !@#$%^&*, and have a length from 8 to 20 characters.' });
    }

    try {
      const findUser = await User.findOne({ userName: userName });

      if (!findUser) {
        let profilePicture;
        if (req.file) {
          const buffer = fs.readFileSync(req.file.path);
          const base64Image = buffer.toString('base64');
          profilePicture = {
            data: Buffer.from(base64Image, 'base64'),
            contentType: req.file.mimetype
          };
          fs.unlinkSync(req.file.path); // Delete the temporary file after converting to Base64
        }

        const newUser = await User.create({
          businessName: businessName,
          userName: userName,
          businessAddress: businessAddress,
          password: password,
          role: 'vendor',
          profilePicture: profilePicture
        });
        const role = newUser.role;
        res.json(newUser);
      } else {
        throw new Error('User already exists');
      }
    } catch (err) {
      next(err);
    }
  });
});

const createCustomer = asyncHandler(async (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { name, userName, address, password } = req.body;

    const usernameRegex = /^[a-zA-Z0-9]{8,15}$/;
    if (!usernameRegex.test(userName)) {
      return res.status(400).json({ error: 'Username must contain only letters and digits, have a length from 8 to 15 characters.' });
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ error: 'Password must contain at least one upper case letter, at least one lower case letter, at least one digit, at least one special character in the set !@#$%^&*, and have a length from 8 to 20 characters.' });
    }

    try {
      const findUser = await User.findOne({ userName: userName });

      if (!findUser) {
        let profilePicture;
        if (req.file) {
          const buffer = fs.readFileSync(req.file.path);
          const base64Image = buffer.toString('base64');
          profilePicture = {
            data: Buffer.from(base64Image, 'base64'),
            contentType: req.file.mimetype
          };
          fs.unlinkSync(req.file.path); // Delete the temporary file after converting to Base64
        }

        const newUser = await User.create({
          name: name,
          userName: userName,
          address: address,
          password: password,
          role: 'customer',
          profilePicture: profilePicture
        });
        const role = newUser.role;
        res.json(newUser);
      } else {
        throw new Error('User already exists');
      }
    } catch (err) {
      next(err);
    }
  });
});




const createShipper = asyncHandler(async (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { userName, password, hubName, hubAddress, name } = req.body;

    const usernameRegex = /^[a-zA-Z0-9]{8,15}$/;
    if (!usernameRegex.test(userName)) {
      return res.status(400).json({ error: 'Username must contain only letters and digits, have a length from 8 to 15 characters.' });
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ error: 'Password must contain at least one upper case letter, at least one lower case letter, at least one digit, at least one special character in the set !@#$%^&*, and have a length from 8 to 20 characters.' });
    }

    try {
      const findUser = await User.findOne({ userName: userName });

      if (!findUser) {
        let profilePicture;
        if (req.file) {
          const buffer = fs.readFileSync(req.file.path);
          const base64Image = buffer.toString('base64');
          profilePicture = {
            data: Buffer.from(base64Image, 'base64'),
            contentType: req.file.mimetype
          };
          fs.unlinkSync(req.file.path); // Delete the temporary file after converting to Base64
        }

        const newUser = await User.create({
          hubName: hubName,
          name: name,
          userName: userName,
          hubAddress: hubAddress,
          password: password,
          role: 'shipper',
          profilePicture: profilePicture
        });
        const role = newUser.role;
        res.json(newUser);
      } else {
        throw new Error('User already exists');
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
});






const loginUserCtrl = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;
  // console.log(email, password); //Show email and password when user login
  //check if user exists or not, check password match with hash password
  const findUser = await User.findOne({ userName });
  if (findUser && await findUser.isPasswordMatched(password)) {
    const refreshToken = await generateRefreshToken(findUser?._id);
    const updateuser = await User.findByIdAndUpdate(
      findUser.id,
      {
        refreshToken: refreshToken,
      },
      {
        new: true
      }
    );
    const token = generateToken(findUser?._id);
    res.cookie(`refreshToken`, refreshToken, {
      httlpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.set('Authorization', `Bearer ${token}`);

    // res.json({
    //     _id: findUser?._id,
    //     firstname: findUser?.firstname,
    //     lastname: findUser?.lastname,
    //     email: findUser?.email,
    //     mobile: findUser?.mobile,
    //     token: generateToken(findUser?._id),
    // });
    req.user = {
      id: findUser._id,
      userName: findUser.userName,
      role: findUser.role
    };
    res.render('success', { role: findUser.role, token: token }); // Render the success page and pass `firstname` and `lastname` variables

  } else {
    res.render('unsuccess'); // Render the unsuccess page
  }
  // } else {
  //     throw new Error("Invalid Credentials");
  // }
});


// Function to render page

const vendorProduct = async (req, res) => {
  try {
    const vendor = await Product.find({ 'v_id': vendorID });
    res.render('vendor-private.ejs', { title: 'Vendor Dashboard', vendorid });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });

  }
}

// Roles-dashboard, delete below or re-render once done
const vendor = (req, res) => {
  res.render('vendor-private.ejs', { user: req.user });

};

// const shipper = (req, res) => {
//   res.render('shipper-private.ejs', { user: req.user });

// };
const shipper = async (req, res) => {
  try {
    res.render('shipper-dashboard.ejs', { user: req.user, layout: './shipper-dashboard' })

  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });
  }
}

const customer = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await Product.find({}).limit(limitNumber);
    const tablet = await Product.find({ 'category': 'Tablet' }).limit(limitNumber);
    const laptop = await Product.find({ 'category': 'Laptop' }).limit(limitNumber);
    const phone = await Product.find({ 'category': 'Phone' }).limit(limitNumber);

    const productCategory = { latest, tablet, laptop, phone };

    res.render('home-page/index', { title: 'E-Commerce - Home', categories, productCategory, layout: './layouts/homeLayout' });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });
  }
}

const myProfile = (req, res) => {
  const userId = req.session.userId; // get user id from session or database
  res.render('myProfile', { userId: userId });

};

const success = (req, res) => {
  res.render('success.ejs');

};




// // handle refresh token

const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  console.log(cookie);
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
  const refreshToken = cookie.refreshToken;

  const user = await User.findOne({ refreshToken });
  if (!user) throw new Error('No Refresh Token present in database or not matched');
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err || user.id !== decoded.id) {
      throw new Error('There is something wrong with refresh token!');
    }
    const accessToken = generateToken(user?._id);
    res.json({ accessToken });
  });

});





// logout function

const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) {

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    res.render('login-signup-page/login');
    res.sendStatus(204); //Forbidden
  }
  await User.findOneAndUpdate(refreshToken, {
    refreshToken: "",
  });

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.redirect('');
  res.sendStatus(204); //Forbidden


});






//Get all users

const getallUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
}
);


const getaUser = asyncHandler(async (req, res) => {
  let token;
  if (req.cookies && req.cookies.refreshToken) {
    token = req.cookies.refreshToken;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      validateMongoDbId(decoded?.id);
      const user = await User.findById(decoded?.id);
      const { userName, businessName, businessAddress, name, address, hubName, hubAddress, role, profilePicture } = user;
      // console.log(user);
      let image;
      if (profilePicture && profilePicture.data && profilePicture.contentType) {
        const imageBuffer = profilePicture.data;
        const imageType = profilePicture.contentType.split('/')[1];
        image = `data:image/${imageType};base64,${Buffer.from(imageBuffer).toString('base64')}`;
      }
      res.render('myProfile.ejs', { userName, businessName, businessAddress, name, address, hubName, hubAddress, role, image, profilePicture });

    } catch (error) {
      throw new Error(error);
    }
  } else {
    res.redirect('./');
  }
});

//update



const updateProfilePicture = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const buffer = fs.readFileSync(req.file.path);
    const base64Image = buffer.toString('base64');

    const profilePicture = {
      data: Buffer.from(base64Image, 'base64'),
      contentType: req.file.mimetype
    };

    await User.findOneAndUpdate({ _id: userId }, { profilePicture });

    // res.status(200).json({ message: 'Profile picture updated successfully' });
    res.redirect('myProfile')
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};


const updateName = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { name } = req.body;

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = name;
  await user.save();

  return res.json({ message: "Name updated successfully" });
});

const updateAddress = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { address } = req.body;

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (user.role === "vendor") {
    user.businessAddress = address;
  } else {
    user.address = address;
  }

  await user.save();

  return res.json({ message: "Address updated successfully" });
});

const myProfileUpdate = asyncHandler(async (req, res) => {
  let token;
  if (req.cookies && req.cookies.refreshToken) {
    token = req.cookies.refreshToken;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      validateMongoDbId(decoded?.id);
      const user = await User.findById(decoded?.id);
      const { userName, businessName, businessAddress, name, address, hubName, hubAddress, role, profilePicture } = user;
      // console.log(user);
      let image;
      if (profilePicture && profilePicture.data && profilePicture.contentType) {
        const imageBuffer = profilePicture.data;
        const imageType = profilePicture.contentType.split('/')[1];
        image = `data:image/${imageType};base64,${Buffer.from(imageBuffer).toString('base64')}`;
      }
      res.render('myProfileUpdate.ejs', { userName, businessName, businessAddress, name, address, hubName, hubAddress, role, image, profilePicture });

    } catch (error) {
      throw new Error(error);
    }
  } else {
    res.redirect('./');
  }
});














//Delete user by enter id

const deleteaUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteaUser = await User.findByIdAndDelete(id);
    res.json({
      deleteaUser,
    });
  } catch (error) {
    throw new Error(error);
  }
  // console.log(id); //show the id
});

const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const block = await User.findByIdAndUpdate(id, {
      isBlocked: true,
    },
      {
        new: true,
      });
    res.json({
      mess: "User Blocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const unblock = await User.findByIdAndUpdate(id, {
      isBlocked: false,
    },
      {
        new: true,
      });
    res.json({
      mess: "User UnBlocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});


module.exports = {
  createVendor,
  createCustomer,
  createShipper,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updateProfilePicture,
  blockUser,
  unblockUser,
  vendor,
  handleRefreshToken,
  logout,
  success,
  shipper,
  customer,
  myProfile,
  upload,
  updateAddress,
  updateName,
  myProfileUpdate
};