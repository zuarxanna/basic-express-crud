const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token) return res.status(401).json({
        result: 'unauthorized',
        message: 'auth token is required'
    })
    jwt.verify(token, 'secret', (err, decodedToken) => {
        if(err) return res.status(401).json({
            result: 'unauthorized',
            message: 'invalid auth token'
        })
        req.user = decodedToken;
        return next();
    });
};
