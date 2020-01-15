const jwt = require('jsonwebtoken');
const config = require('config');

module.exports.Auth = function (req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send({ message: 'Access denied. No token provided.' });
    try {
        const decoded = jwt.verify(token, config.get('jwtSecretKey'));
        req.user = decoded;
        next()
    } catch (error) {
        res.status(400).json({ message: 'Invalid Token!' });
    }

}

module.exports.AdminAuth = function (req, res, next) {

    if (req.user.isAdmin) {
        next()
    } else {
        return res.status(403).json({ message: 'Access denied. No permission to access this!' });
    }

}