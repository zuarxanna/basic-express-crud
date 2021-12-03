const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token) return res.status(401).send("unauthorized")
    jwt.verify(token, 'secret', (err, decodedToken) => {
        if(err) return res.status(401).send("unauthorized")
        req.user = decodedToken;
        return next();
    });
};
