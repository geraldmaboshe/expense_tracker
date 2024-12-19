const jwt = require('jsonwebtoken');
const User = require("../models/User")

const authenticateJWT = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.sendStatus(403);
    }
        jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = await User.findByPk(user.id);
            next();
        });
    } 

module.exports = authenticateJWT;