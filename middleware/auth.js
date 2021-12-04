const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const secretKey = process.env.SECRET_KEY
    
    if(!token) return res.status(401).json({
        result: 'access denied!',
        message: 'auth token is required'
    })
    jwt.verify(token, secretKey, (err, decodedToken) => {
        if(err) return res.status(401).json({
            result: 'acces denied!',
            message: 'invalid auth token'
        })
        req.user = decodedToken;
        return next();
    });
};
