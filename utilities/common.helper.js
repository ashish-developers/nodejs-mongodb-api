var jwt = require('jsonwebtoken')
var jwtSecret = 'Force';


var generateAccessToken = (data) => {
    return jwt.sign({data}, jwtSecret, { expiresIn: '1d' });
}

var generateRefreshToken = (data) => {
    return jwt.sign({data}, jwtSecret, { expiresIn: '365d' });
}

var verifyJwt = (tokenValue) => {
    jwt.verify(tokenValue, jwtSecret);
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    verifyJwt
}

