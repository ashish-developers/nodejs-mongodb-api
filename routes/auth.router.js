const router = require("express").Router();
const { checkToken } = require("./../middlewares/jwt.auth")
const { login, register, forgetPassword, resetPassword } = require("./../controllers/auth.controller");
const { onBoard } = require("./../controllers/blog.controller");

router.post('/auth/user/login', login)
router.post('/auth/user/register', register)
router.post('/auth/user/forget-password', forgetPassword)
router.post('/auth/user/reset-password', resetPassword)

router.get('/user/dashboard', checkToken, onBoard)

module.exports = router