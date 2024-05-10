const router = require("express").Router();
const { checkToken } = require("./../middlewares/jwt.auth")
const { login, register, forgetPassword, resetPassword } = require("./../controllers/auth.controller");
const { onBoard } = require("./../controllers/blog.controller");

router.post('/login', login)
router.post('/register', register)
router.post('/forget-password', forgetPassword)
router.post('/reset-password', resetPassword)
router.get('/dashboard', checkToken, onBoard)

module.exports = router