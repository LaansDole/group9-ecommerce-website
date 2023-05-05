const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const verifyBlog = (title, banner, category, content) => {
	if (!title) {
		throw new CustomError.BadRequestError("Title not found");
	}

	if (!category) {
		throw new CustomError.BadRequestError("Category not found");
	}

	if (
		banner &&
		banner !== "default" &&
		!banner.match(/^https:\/\/res.cloudinary.com\//)
	) {
		throw new CustomError.BadRequestError(
			"Please provide a valid banner image"
		);
	}

	if (!content) {
		throw new CustomError.BadRequestError("Content not found");
	}
};

module.exports = verifyBlog;