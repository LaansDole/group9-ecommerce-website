const { createJWT, isTokenValid } = require("./jwt");
const makeVerificationToken = require("./makeVerificationToken");
const createTokenUser = require("./createTokenUser");
const attachCookiesToResponse = require("./attachCookiesToResponse");
const verifyBlog = require("./verifyProduct");

module.exports = {
    createJWT,
    isTokenValid,
    makeVerificationToken,
    createTokenUser,
    attachCookiesToResponse,
    verifyBlog
};