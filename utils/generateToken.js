const jwt = require('jsonwebtoken')

const secretKey = process.env.SECRET_KEY
const generateToken = (user) => {
    const payload = {
        username: user.username,
        pass: user.pass,
    };
    const token = jwt.sign(payload, secretKey);
    return token;
};

module.exports = generateToken;
