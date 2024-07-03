const router = require("express").Router();
const { checkToken } = require("./../middlewares/jwt.auth")
const { login, register, forgetPassword, resetPassword } = require("./../controllers/auth.controller");
const { addNewFile, uploadFiles, processVideo } = require("./../controllers/files.controller");
const { mkDir } = require("../controllers/project.controller")

router.post('/auth/user/login', login)
router.post('/auth/user/register', register)
router.post('/auth/user/forget-password', forgetPassword)
router.post('/auth/user/reset-password', resetPassword)

//router.get('/user/dashboard', onBoard)
router.get('/video', addNewFile)
router.get('/user/files/create', addNewFile)
router.post('/user/files/upload', uploadFiles)
router.get('/user/files/process', processVideo)

router.get('/user/files/bin', addNewFile)
router.post('/user/files/shared', uploadFiles)
router.get('/user/files/important', processVideo)

router.post('/user/project/new', mkDir)



module.exports = router