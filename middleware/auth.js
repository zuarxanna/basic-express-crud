const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    
    if(!token) return res.status(401).json({
        result: 'access denied!',
        message: 'auth token is required'
    })
    jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
        if(err) return res.status(401).json({
            result: 'acces denied!',
            message: 'invalid auth token'
        })
        req.user = decodedToken;
        return next();
    });
};
