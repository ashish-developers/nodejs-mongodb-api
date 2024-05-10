const jwt = require("jsonwebtoken");
var jwtSecret = 'Force';

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Access Denied! Unauthorized User"
          });
        } else {
          req.user = decoded.data;
          next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User"
      });
    }
  }
};