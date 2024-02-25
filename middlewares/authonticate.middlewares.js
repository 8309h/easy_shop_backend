const jwt = require("jsonwebtoken");
const BlacklistTokenModel = require("../models/Blacklist.models"); // Import your BlacklistTokenModel

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        // Check if token is blacklisted
        BlacklistTokenModel.findOne({ token }, (err, blacklistedToken) => {
            if (err) {
                console.error(err);
                res.status(500).json({ "msg": "Something went wrong" });
            } else if (blacklistedToken) {
                res.status(401).json({ "msg": "Token is blacklisted" });
            } else {
                jwt.verify(token, 'masai', (err, decoded) => {
                    if (err) {
                        res.status(401).json({ "msg": "Invalid token" });
                    } else {
                        req.body.userID = decoded.userID;
                        next();
                    }
                });
            }
        });
    } else {
        res.status(401).json({ "msg": "Please provide a token" });
    }
};

module.exports = {
    authenticate
};
