const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
	{
        name:{
            type:String,
            required:true,
        },

		username: {
			type: String,
			required: [true, "Please provide username"],
			minlength: [5, "Length must be greater than 5"],
			maxlength: [22, "Length must be less than 22"],
			trim: true,
			unique: true,
		},

		password: {
			type: String,
			required: true,
		},

		avatar: {
			type: String,
			required: true,
		},

		role: {
            type: String,
            default: 'user',
        },


        
	},
	{ timestamps: true }
);

UserSchema.pre("save", async function () {
	if (!this.isModified("password")) return;
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (canditatePassword) {
	const isMatch = await bcrypt.compare(canditatePassword, this.password);
	return isMatch;
};

module.exports = mongoose.model("User", UserSchema);