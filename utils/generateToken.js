const jwt = require('jsonwebtoken')

const generateToken = (user) => {
    const payload = {
        username: user.username,
        pass: user.pass,
    };
    const token = jwt.sign(payload, 'secret');
    return token;
};

module.exports = generateToken;
