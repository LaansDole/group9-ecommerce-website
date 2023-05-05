const jwt = require("jsonwebtoken");

const createJWT = ({ payload }, secretKey) => {
    const token = jwt.sign(payload, secretKey);
    return token;
};

const isTokenValid = (token, secretKey) => jwt.verify(token, secretKey);

module.exports = {
    createJWT,
    isTokenValid,
};