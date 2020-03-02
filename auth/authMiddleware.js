const jwt = require("jsonwebtoken");
const secrets = require("../Middleware/secrets.js");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedJwt) => {
            if (err) {
                res.status(403).json({
                    message: "Invalid Token"
                });
            } else {
                req.decodedJwt = decodedJwt;
                next();
            }
        });
    } else {
        res.status(401).json({
            message: "No Token Provided"
        });
    }
};